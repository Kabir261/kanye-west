import React, {useEffect, useState} from 'react'

import './App.scss';

const App = () => {

    const [quote, setQuote] = useState(' ');

    const renderQuote = async () => {
        const response = await fetch("https://api.kanye.rest/"); 

        const data = await response.json();

        setQuote(data);
    }

    useEffect(() =>{
        renderQuote();
    }, [])

    function refreshPage() {
      window.location.reload(false);
    }
  return (
    <>
    <div className='container'>
        <h3>{quote.quote}</h3>
        <hr />

        <div className='btn'>
    <button onClick={refreshPage}>Click to reload!</button>
  </div>
    </div>
    
  </>
  )
}

export default App