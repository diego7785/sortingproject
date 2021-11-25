import React, { useState } from "react";
import Card from "../components/card/Card";
import Animation from "../components/animation/Animation";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const sort = (e, indicator) => {
    setLoading(true);
    switch (indicator) {
      case 1:
        fetch('http://localhost:5000/algorithms/merge')
        .then(res => res.json())
        .then(data => {
          setResult(data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err)
          alert('Ha ocurrido un error al ordenar')
        });
        break; 
        case 2:
          fetch('http://localhost:5000/algorithms/quick')
        .then(res => res.json())
        .then(data => {
          setResult(data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err)
          alert('Ha ocurrido un error al ordenar')
        });
        break; 
        case 3:
          fetch('http://localhost:5000/algorithms/bubble')
        .then(res => res.json())
        .then(data => {
          setResult(data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err)
          alert('Ha ocurrido un error al ordenar')
        });
        break; 
        case 4:
          fetch('http://localhost:5000/algorithms/selection')
        .then(res => res.json())
        .then(data => {
          setResult(data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err)
          alert('Ha ocurrido un error al ordenar')
        });
        break; 
      default:
        break;
    }
  };

  return loading && !result ? (
    <Card>
      <Animation />
    </Card>
  ) : !loading && !result ? (
    <Card>
      <div className="header">
        Type the array to be sorted separated by commas.
      </div>
      <div className="content">
        <input type="text" id="array" placeholder="1,2,3,4,5,6,7,8,9,10" />
        <span>Sort using:</span>
      </div>
      <div className="footer">
        <button onClick={(e) => sort(e, 1)}>Merge Sort</button>
        <button onClick={(e) => sort(e, 2)}>Quick Sort</button>
        <button onClick={(e) => sort(e, 3)}>Bubble Sort</button>
        <button onClick={(e) => sort(e, 4)}>Selection Sort</button>
      </div>
    </Card>
  ) : (
    <Card>
      <div className="header">¡Array sorted!</div>
      <div className="content">
          <span>{result.answer}</span>
      </div>
      <div className="footer">
        <button onClick={(e) => window.location.reload(e)}>Back</button>
      </div>
    </Card>
  );
}
