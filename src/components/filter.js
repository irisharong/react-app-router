import React from 'react'
import { Link } from 'react-router-dom';

export default function filter() {
  return (
    <div className="demo">      
      <div className="form-header">
        <p>Filter</p>
      </div>
      <div className="form-checkbox">
        <input className="checkbox" type="checkbox" id="checkbox1" />
        <label for="checkbox1" tabindex="1">Something</label>
      </div>
      <div className="form-checkbox">
        <input className="checkbox" type="checkbox" id="checkbox2" checked="checked"/>
        <label for="checkbox2" tabindex="2">That</label>
      </div>
      <div className="form-checkbox">
        <input className="checkbox" type="checkbox" id="checkbox3"/>
        <label for="checkbox3" tabindex="3">I Can't</label>
      </div>
      <div className="form-checkbox">
        <input className="checkbox" type="checkbox" id="checkbox4" checked="checked"/>
        <label for="checkbox4" tabindex="4">Think Of</label>
      </div>    
      <div className="form-checkbox">
        <input className="checkbox" type="checkbox" id="checkbox5"/>
        <label for="checkbox4" tabindex="4">But Is</label>
      </div>    
      <div className="form-checkbox">
        <input className="checkbox" type="checkbox" id="checkbox6"/>
        <label for="checkbox4" tabindex="4">Important</label>
      </div>   
      <div className="mt-4 m-4">
        <Link className="btn btn-blue" >  Unselect All </Link>

        <Link className="btn btn-unselected" >  Select All </Link>
      </div>
      <div className="mt-4 border"></div>      
      <div className="mt-4 form-header">
        <p>From</p>
      </div>
      <div className="form-radio">
      <input className="radio" type="radio" checked id="radio-input-1" />
      <span className="radio-look"></span>
      <label for="radio-input-1" >People</label>
      </div>
      <div className="form-radio">
        <input className="radio" type="radio" disabled id="radio-input-2" />
        <span className="radio-look"></span>
        <label for="radio-input-2" >Everyone</label>
      </div>
      <div className="mt-4 form-header">
        <p>Reset all filters</p>
    </div>
    </div>
  )
}