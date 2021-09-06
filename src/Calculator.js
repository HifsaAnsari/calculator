import React ,{useState} from 'react'
// import React ,{useEffect, useState,useRef} from 'react'
import './calculator.css'
function Calculator() {
    const [result, setResult] = useState("");
//   const inputRef = useRef(null);

//   useEffect(() => inputRef.current.focus());
  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backSpace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }
const handleshow=(e)=>{
setResult( e.target.value)
}
    return (
        <div className="container">
 
            <form><input type="text" value={result} onChange={handleshow}/> </form>
            
            <div className="NUMBER_SEC">
                <button name="0" onClick={handleClick}>0</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
            </div>

            <div className="operaator">
                <button name="*" onClick={handleClick}>*</button>
                <button name="+" onClick={handleClick}>+</button>
                <button name="-" onClick={handleClick}>-</button>
                <button name="%" onClick={handleClick}>%</button>
            
                <button name="." onClick={handleClick}>.</button>
                <button onClick={backSpace}id="backSpace">C</button>
                <button name="(" onClick={handleClick}>(</button>
                <button name=")" onClick={handleClick}>)</button>
                <button name="=" onClick={calculate } id="result" className="hightlight">=</button>
            </div> 
          
            <div className="operation">
                <button onClick={clear} className="hightlight" id="clear">Clear</button>
            </div>
       
        </div>
    )
}

export default Calculator
