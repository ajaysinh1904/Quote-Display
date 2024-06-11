import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error("Error fetching the quote", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="app">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} saveQuote={saveQuote} />
      <h2>Saved Quotes</h2>
      <div className="saved-quotes">
        {savedQuotes.map((q, index) => (
          <div key={index} className="saved-quote-card">
            {q}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;