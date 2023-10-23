import React, { useCallback, useEffect, useState } from 'react'
import { getTransList } from './HelperFunc';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actionCreators';

function MiniStatement() {
    
    const nav = useNavigate();
    const user = useSelector(state=>state.userDetails);
    const {mode} = useSelector(state=>state.mode);
    const dispatch = useDispatch();
    const x = bindActionCreators(actionCreators,dispatch);
    useEffect(()=>{
        x.setUserDetails(nav);
    },[]);

    const [list,setList] = useState([]);
    const listSet = useCallback((lists)=>{
        setList(lists);
    },[]);

    useEffect(()=>{
        if(user)
            getTransList('/transaction/getTransList',user.userName, listSet);
    },[user]);

  return (
    <>
        <div id="MSScr">
            <div id='MSLeftSec'>
                <div>
                {list.length==0 && <h1>No transactions yet</h1>}
                {
                    list.length>0 && 
                    <table className={`table table-striped ${mode=='light'?'':'table-dark'}`}>
                        <thead>
                            <tr className='table-active'>
                            <th scope="col">#</th>
                            <th scope="col">Account No.</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Cr/Dbt</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from(list).map((element,index)=>{
                                return <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{user?.userName == element.creditor ? element.depAccountNo : element.credAccountNo}</td>
                                    <td>{user?.userName == element.creditor ? element.depositor : element.creditor}</td>
                                    <td>{element.amount}</td>
                                    <td>{user?.userName == element.creditor ? 'Cr' : 'Dr'}</td>
                                    <td>{element.date}</td>
                                    <td>{element.time}</td>
                                </tr>
                            })}
                        </tbody>
                        </table>
                }
                </div>
            </div>
            <div id='MSRightSec'>
                <img src="https://miro.medium.com/v2/resize:fit:1200/1*Y4uOirTNPvJbJj5_bSVFWw.png" alt="Error loading Image" />
            </div>
        </div>
    </>
  )
}

export default MiniStatement
