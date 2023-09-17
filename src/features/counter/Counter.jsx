import { useSelector,useDispatch } from "react-redux"
import { increment,decrement,reset,incrementByAmount } from "./counterSlice"
import { useState } from "react"
const Counter = () => {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
    const [amount,setAmount]=useState(0)
    const addValue=Number(amount)||0 
    const resetValue=()=>{
      setAmount(0)
      dispatch(reset(0))
    }
  return (
    <section>
        <p>{count}</p>
        <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>Increment by {amount}</button>
        <button onClick={resetValue}>Reset All</button>
        </div>
    </section>
  )
} 

export default Counter
