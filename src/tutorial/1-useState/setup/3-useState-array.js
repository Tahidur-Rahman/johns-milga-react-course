import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [state, setState] = useState(data);
  const removeme = (id)=>{
    let newstate = state.filter(a=> id !== a.id)
    setState(newstate);
    console.log(state)
  }
  return (
    <>
      {state.map((item) => {
        let { id, name } = item;
        return (
          <>
            <div className="item"key={id}>
              {name}
              <button className="btn" onClick={()=>removeme(id)}>remove</button>
            </div>
            
          </>
        );
      })}
      <button className="btn" onClick={()=>setState([])}>Delete</button>
    </>
  );
};

export default UseStateArray;
