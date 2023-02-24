import React, { useContext } from "react";
import './Budget.css'
import ExpenseContext from "../Context/ExpenseContext";

function Spent() {
    const {total}=useContext(ExpenseContext)
    
    console.log(total)
    return(
        <>
        <div className="third_block">
            Spent:Rs {total}
        </div>
        </>
    )
}

export default Spent