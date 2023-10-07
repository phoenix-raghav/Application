import express from 'express';
import User from '../models/User.js';
import { body, validationResult } from 'express-validator';
import bcryptjs from 'bcryptjs';
import AccountNo from '../models/AccountNo.js';

const Router = express.Router();

Router.post('/signup',[body('password','Password should contain atleast 3 characters').isLength({min:3})],async(req,res)=>{
    try{
        let user = await User.findOne({accountNo: req.body.accountNo});
        if(!user || (user&&user.userName)) return res.status(400).json({msg: 'Please enter a valid account number'});
        user = await User.findOne({userName: req.body.userName});
        if(user) return res.status(400).json({msg: 'Username already exists'});
        const errors = validationResult(req).errors;
        if(errors.length)   return res.status(400).json({msg: errors[0].msg});
        req.body.password = await bcryptjs.hash(req.body.password,10);
        await User.updateOne({accountNo:req.body.accountNo},{userName:req.body.userName,password:req.body.password});
        return res.status(200).json({msg:'User Registered Successfully :)'});
    }
    catch{
        return res.status(500).json({msg: 'Internal Server Error'});
    }
})
Router.post('/login',async(req,res)=>{
    try{
        let user = await User.findOne({userName: req.body.userName});
        if(!user) return res.status(400).json({msg: 'Invalid Credentials'});
        const isMatched = await bcryptjs.compare(req.body.password,user.password);
        if(!isMatched) return res.status(400).json({msg: 'Invalid Credentials'});
        return res.status(200).json({msg:'Logged In Successfully :)'});
    }
    catch{
        return res.status(500).json({msg: 'Internal Server Error'});
    }
})
Router.post('/createAccount',[body('phoneNo','Please enter a valid Phone Number').isLength({min:10, max:10}),[body('email','Please enter a valid email').isEmail()]],async(req,res)=>{
    try{
        const errors = validationResult(req).errors;
        if(errors.length)   return res.status(400).json({msg: errors[0].msg});
        const body = req.body;
        let user = await User.findOne({$or : [{phoneNo: body.phoneNo}, {email: body.email}]});
        if(user)    return res.status(400).json({msg: 'Contact Details had already been linked to another account'});
        let acc = await AccountNo.findOne({accountNo: {$exists : true}});
        if(acc==null)
        {
            acc = AccountNo({accountNo: 1000000000});
            await acc.save();
        }
        acc = await AccountNo.find({accountNo: {$exists : true}});
        await AccountNo.updateOne({accountNo: acc[0].accountNo}, {accountNo: acc[0].accountNo+1});
        user = User({name:body.name, address:body.address,gender:body.gender,dob:body.dob,phoneNo: body.phoneNo, email: body.email, accountNo: acc[0].accountNo+1});
        await user.save();
        return res.status(200).json({msg:'Account created Successfully :)', accountNo: acc[0].accountNo+1});
    }
    catch(err){
        console.log(err)
        return res.status(500).json({msg: 'Internal Server Error'});
    }
})

export default Router;