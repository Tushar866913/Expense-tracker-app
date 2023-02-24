import React from "react";
import './Budget.css'
import { useState, useContext } from "react";
import ExpenseContext from "../Context/ExpenseContext";


function AddItem() {

    var { listHandler } = useContext(ExpenseContext)


    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const costHandler = (e) => {
        setCost(e.target.value)
    }

    const submitHandler = (e) => {
        // console.log(name,cost)
        e.preventDefault()
        { name && listHandler(name, cost) }
        setName('')
        setCost('')
    }

    return (
        <>
            <form>
                <div>
                    <label htmlFor='name' >Add Expense</label>
                    <input type='text' id="name" placeholder="Enter Expense" value={name} onChange={nameHandler}></input>
                </div>


                <div>
                    <label htmlFor='cost' >Add Cost</label>
                    <input type='text' id="cost" placeholder="Enter Cost" value={cost} onChange={costHandler}></input>
                </div>
                <button onClick={submitHandler}>Enter</button>
            </form>

        </>
    )
}
export default AddItem