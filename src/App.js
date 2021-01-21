import React, {useState, useEffect} from 'react';
import Quotes from './components/Quotes';

import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [fade, setFade] = useState(false);

  useEffect( () => { //Try to use await here later
    getQuote()
    getColor()
  }, []);

  function getQuote() {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  }

  const getColor = () => {
    let colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857'
    ];
    let randomNum = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomNum];
    setBgColor(randomColor);
  };

  const handleClick = () => {
    getQuote();
    getColor();
    setFade(true);
  };

  document.body.style.backgroundColor = bgColor; // change the body color of the page;
 
  return (
      <div className={fade ? 'fade': ''} onAnimationEnd={() => setFade(false)}>
        <Quotes handleClick={handleClick} quote={quote} author={author} bgColor={bgColor}/>
      </div>

  );
}

export default App;
