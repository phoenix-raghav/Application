import jwt from 'jsonwebtoken'; 
const JWT_SECRET = 'Hello$World';

const verifyToken = (req,res,next) =>{
    try{
        const token = req.header('authToken');
        const x = jwt.verify(token,JWT_SECRET);        
        req.body.userName = x.userName;        
    }
    catch{
        return res.status(401).json({msg: 'Unauthorized :('});
    }
    next();
}

export default verifyToken;