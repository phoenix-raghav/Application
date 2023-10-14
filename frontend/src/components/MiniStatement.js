import React, { useEffect, useState } from 'react'
import { getTransList } from './HelperFunc';
import { useNavigate } from 'react-router-dom';
import { verifyUser } from './HelperFunc'

function MiniStatement(props) {
    const nav = useNavigate();
    const [list,setList] = useState(null);
    const listSet =(lists)=>{
        setList(lists);
    }
    useEffect(()=>{
        verifyUser(nav);
        getTransList('/transaction/getTransList',props.details.userName, listSet);
    },[]);

  return (
    <>
        <div id="MSScr">
            <div id='MSLeftSec'>
                <div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
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
                        {list!=null && Array.from(list).map((element,index)=>{
                            return <tr>
                                <th scope="row">{index+1}</th>
                                <td>{props.details.userName == element.creditor ? element.depAccountNo : element.credAccountNo}</td>
                                <td>{props.details.userName == element.creditor ? element.depositor : element.creditor}</td>
                                <td>{element.amount}</td>
                                <td>{props.details.userName == element.creditor ? 'Cr' : 'Dr'}</td>
                                <td>{element.date}</td>
                                <td>{element.time}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>
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
