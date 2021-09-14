import React from 'react'
import Setup from './Components/LoadingFunc';
// import Final from './2-useEffect/final/1-useEffect-basics';
function App() {
  
  return (
    <div className='container'>
      <h1>Hi!</h1>
      <p>It's very late, and, due to my brain's ongoing campaign to convince me that I'm worthless, I haven't gotten much done. In an attempt to finish this assignment on time, I've made this very simple site- It has several buttons to trigger loading and errors, for convenience.</p><br/>
      <Setup />
    </div>
  )
}

export default App