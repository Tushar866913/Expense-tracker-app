import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ExpenseContext from './Context/ExpenseContext';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import Spent from './Components/Spent';
import ExpenseList from './Components/ExpenseList';
import AddItem from './Components/AddItem';
import { Scrollbar } from 'react-scrollbars-custom';

function App() {
  const expenses=[
    {id:1,name:'Rent',cost:6000},
    {id:2,name:'Electricity Bill',cost:1000},
    {id:3,name:'Water Bill',cost:500},
    {id:4,name:'Gas Bill',cost:1000},
    {id:5,name:'Other',cost:2000}
]
const[list,setList]=useState([...expenses])
console.log(list)

const listHandler=(name,cost)=>{
  console.log(name,cost)
  setList([...list,{id:Math.floor(Math.random()*100),name:name,cost:Number(cost)}])
}

const deleteHandler=(id)=>{
console.log(id)
setList(list.filter((list_item)=>{return list_item.id != id}))
}

const total=list.reduce((acc,succ)=>{
  acc=acc+succ.cost
  return acc
},0)

const[budget,setBudget]=useState(20000)
const budgetHandler=()=>{
 var a= window.prompt('Enter your budget')
 setBudget(Number(a))
}

const balance=budget-total


  return (
    <>
    <ExpenseContext.Provider value={{list,listHandler,deleteHandler,total,budgetHandler,
                                     budget,balance }}>
      <div className='container'>
        <h1>EXPENSES TRACKER</h1>
        <div className='first_row'>
          <Budget />
          <Remaining />
          <Spent />
        </div>
        <h2>Expenses</h2>
        <div>
          <ExpenseList />
        </div>
        <AddItem/>
        
      </div>
      </ExpenseContext.Provider>

    </>

  );
}

export default App;
