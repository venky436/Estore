import React,{useState} from 'react'

export const Counter = () => {
    let [range,setRange] = useState(0)
    let [count,setCount] = useState(0)
  return (
    <div style={{marginTop : '20rem'}}>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount((co) => {
        return co+=Number(range)
        
      })}>Increase</button>
      <button onClick={() => setCount((co) =>{
          return co-= Number(range)
        
      })}>Decrease</button>

       <input type='number' value={range} onChange={(e)=>setRange(e.target.value)}/>
    </div>

    
  );
}
