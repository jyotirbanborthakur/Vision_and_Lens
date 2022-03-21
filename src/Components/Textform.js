import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
export default function Textform(props) {

  const handleClick = () => {

    let newvalue = text.toUpperCase();

    setText(newvalue)
  }
  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleLowerCase = () => {
    setText(text.toLowerCase())
  }
  const deleteAll = () => {
    setText("")
  }
  const CopyAll = () => {
    let textss = document.getElementById("exampleFormControlTextarea1")
    textss.select();
    navigator.clipboard.writeText(textss.value)
  }
  const [text, setText] = useState("");
  return (
    <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
      <h1>Enter text</h1>
      <div className="form-floating" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        
        <textarea className="form-control" placeholder="Leave a comment here" onChange={handleChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id="floatingTextarea2" value={text} ></textarea>
        <label htmlFor="floatingTextarea2">Enter value</label>
      </div>
      <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <figure className='p-3' >
          <figcaption className="blockquote-footer" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Word & letter count:  words {text.split(" ").length}- letters - {text.length} </figcaption>
        </figure>
        <button type="button" className="btn btn-primary m-4" onClick={handleClick}>set upper case</button>
        <button type="button" className="btn btn-primary m-4" onClick={handleLowerCase}>set lower case</button>
        <button type="button" className="btn btn-primary m-4" onClick={deleteAll}>delete all</button>
        <button type="button" className="btn btn-primary m-4" onClick={CopyAll}>Copy All</button>
      </div>
    </div>

  )
}
Textform.propTypes =
  { heading: PropTypes.string }
