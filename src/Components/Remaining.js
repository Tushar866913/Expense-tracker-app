import React, { useContext } from "react";
import './Budget.css'
import ExpenseContext from "../Context/ExpenseContext";
function Remaining() {
    const { balance } = useContext(ExpenseContext)
    return (
        <>
            <div className={ balance  < 0 ? 'below' : "second_block"}>
                Remaining:Rs {balance}
            </div>
        </>
    )
}

export default Remaining