import React from 'react'
import moment from 'moment'
import GotoLink from './gotoLink'

export default function about() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Today is {moment().format('LLLL')}
        </p>
        <GotoLink/>
      </header>
      <div>
        <p>Importing moment.js as external library</p>
        <p>Importing gotoLink as internal component</p>
      </div>
    </div>
  )
}