import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import { Book } from "./data";
import Books from "./Books";

function BookList() {
  return (
    <>
      <div class="ag-format-container">
        <div class="ag-courses_box">
          {
            Book.map((item,index)=>{
              return ( <Books {...item}/>);
            })
          }
        </div>
      </div>
    </>
  )
}

ReactDOM.render(<BookList />, document.querySelector("#root"));