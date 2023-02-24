import React, { useContext } from "react"
import './Budget.css'
import ExpenseContext from "../Context/ExpenseContext"

function Budget(){
    const {budgetHandler,budget}=useContext(ExpenseContext)
    return(
        <>
        <div className="first_block">
            Budget: Rs {budget} <span className="edit" onClick={budgetHandler}>Edit</span>
        </div>
        </>
    )
}
export default Budget