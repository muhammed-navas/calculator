import React from 'react'
import { useState } from 'react'
import './Calculator.css'
function Calculator() {
    const [first,setFirst]=useState('')
    function clickbar(e){
        setFirst(first.concat(e.target.value))
    }
    function calculate(){
        try{

            setFirst(eval(first).toString())
        }catch(error){
            setFirst('error')
        }
    }

    function back(){
        setFirst(first.slice(0,first.length-1))
    }
  return (
    <div >
        <div id="calcContainer">
  <form name="calculator">
    <div class="result-clear">
      <input  type="text" placeholder='0' value={first} class="result" name="answer"  />
      <input type="button" class="clear" onClick={back} value=" <== "  />
      <input type="button" class="clear" onClick={()=>setFirst('')} value=" AC "  />
    </div>
    <div class="grid-buttons">
      <input type="button" value="9"  onClick={clickbar} />
      <input type="button" value="8" onClick={clickbar} />
      <input type="button" value="7" onClick={clickbar} />
      <input type="button" value="+" onClick={clickbar} class="math" />
      <br />
      <input type="button" value="4" onClick={clickbar} />
      <input type="button" value="5" onClick={clickbar} />
      <input type="button" value="6" onClick={clickbar} />
      <input type="button" value="&minus;" onClick={clickbar} class="math" />
      <br />
      <input type="button" value="1" onClick={clickbar} />
      <input type="button" value="2" onClick={clickbar}  />
      <input type="button" value="3" onClick={clickbar} />
      <input type="button" value="&#247;" onClick={clickbar} class="math" />
      <br />
      <input type="button" value="." onClick={clickbar} />
      <input type="button" value="0" onClick={clickbar} />
      <input type="button" value="=" onClick={calculate} />
      <input type="button" value="&#215;" onClick={clickbar} class="math" />
    </div>
  </form>
</div>
    </div>
  )
}

export default Calculator
