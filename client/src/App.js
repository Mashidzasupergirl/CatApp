import './App.css';
import React from 'react'

function App() {
  const [cats, setCats] = React.useState([]);

  const getCats = () => {
    fetch('/api/allcats/')
      .then(result => result.json())
      .then(result => {
        setCats(result)
      });
  };


  return (
    <div className="App">
      <button onClick={getCats}>Find cats</button>
      {/* {cats && (
        Object.keys(cats).length === 0
          ? <p>No results</p>
          : <div>
            {Object.entries(cats).map((cat) => (
              <span >
                {cat}
                {' '}
              </span>
            ))}
          </div>
      )} */}
      {Object.entries(cats).map((cat) => {
        console.log(cat)
        return (
          <div key={cat[0]}>{cat[1].name}</div>
        )
      })}
    </div>
  );
}

export default App;
