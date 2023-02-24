import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Budget.css'
import { useContext } from "react";
import ExpenseContext from "../Context/ExpenseContext";

function ExpenseList(){
    // const expenses=[
    //     {id:1,name:'Rent',cost:6000},
    //     {id:2,name:'Electricity Bill',cost:1000},
    //     {id:3,name:'Water Bill',cost:500},
    //     {id:4,name:'Gas Bill',cost:1000},
    //     {id:5,name:'Other',cost:2000}
    // ]
    const {list}=useContext(ExpenseContext)
    // console.log(expenses)

    return(
        <>
        <div className="expensee_container">

        
        {list.map((item)=>{
            return(
             <ExpenseItem data={item}/>
            )

        })}
        </div>
        
        </>
    )
}

export default ExpenseList