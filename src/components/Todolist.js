import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import List from "./List"
const Todolist = () => {

    const [todo,setTodo]=useState("")

    const [add,setAdd]=useState([])
    
    const [validation,setValidation]=useState("")


    const setData = (e)=>{
        setTodo(e.target.value)
    }


    const additem = ()=>{

      if(todo === ""){
        setValidation("Please Enter your Todo")
      }else{
        setAdd(()=>{
          return [...add,todo]
        });
        setTodo("")
        setValidation("")
      }


     
    }

    const dltitems =(id)=>{
      const dltdata = add.filter((el,ind)=>{
        return ind !== id
      });
      setAdd(dltdata)
    }

  return (
  <>
      <div className="main-container">
        <div className="todo-box">
          <img src="/book.png" alt="todoimg" className="todoimg" />
          <h2 className="heading">Write your Todo List Here</h2>
          <h3 className="validation">{validation}</h3>
          <div className="input-container">
            <input type="text" name="todo"
            onChange={setData}
            value={todo}
             placeholder="Enter your Task" id=" "/>
            <Tooltip title="Add">
              <Button className="addbtn" onClick={additem}>
                <AddIcon />
              </Button>
            </Tooltip>
          </div>
          <div className="store-container">
            <ul>
            {
              add.map((ele,index)=>{
                return(
                  <>
                  <List id={index} text={ele} dltitems={dltitems} />
                  </>
                )
              })
            }
            
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todolist;
