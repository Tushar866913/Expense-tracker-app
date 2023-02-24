import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Budget.css'
import ExpenseContext from "../Context/ExpenseContext";





function ExpenseItem(props) {

 const {deleteHandler}=useContext(ExpenseContext)
 const remove=(item_to_be_deleted)=>{
    console.log(item_to_be_deleted)
    deleteHandler(item_to_be_deleted.id)
}
// console.log(props)
// console.log(props.data.name)
    return (
        <>
            <div className="item_list">
                <div>{props.data.name}</div>
                <div className="item_list_block2">
                    <div>Rs:{props.data.cost}</div>
                    <div className="delete" onClick={()=>remove(props.data)}>delete</div>
                </div>
            </div>
        </>
    )

}

export default ExpenseItem