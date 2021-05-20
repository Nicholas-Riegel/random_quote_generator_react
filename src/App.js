import { useState, useEffect } from 'react'

function App() {

  const [array, setArray] = useState(null)
  const [object, setObject] = useState(null)
  const [color, setColor] = useState(null)

  const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857']

  const randomColor = () => colors[Math.floor(Math.random() * colors.length)]
  
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(x => x.json())
      .then(x => {
        setArray(x.quotes)
        setObject(x.quotes[Math.floor(Math.random() * x.quotes.length)])
        setColor(randomColor)
      })
    }, [])
    
  const handleNewQuote = () => {
    setObject(array[Math.floor(Math.random() * array.length)])
    setColor(randomColor)
  }

  return (
    <div className="App" style={{backgroundColor: color}}>
      <div className="box" id="quote-box" >
        <div className="quote-box" >
          {object === null ?
          <p>Loading...</p> :
          <>
            <p id="text" style={{color: color}}>{object.quote}</p>
            <p id="author" style={{color: color}}>{object.author} </p>
          </>}
        </div>
        <div className="button-box">
          
          <a id="tweet-quote" href={object ? `https://twitter.com/intent/tweet?text=${object.quote} -${object.author}` : ''} target="_blank" style={{backgroundColor: color}}>
            
            <i className="fab fa-twitter"></i>
          </a>
          
          <button id="new-quote" onClick={handleNewQuote} style={{ background: color, color: 'whitesmoke' }}>New Quote</button>
          
        </div>
      </div>
    </div>
  )
}

export default App