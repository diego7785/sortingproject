/*
import React, { useState } from "react";
import Card from "../components/card/Card";
import Animation from "../components/animation/Animation";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [array, setArray] = useState('');

  const sort = (e, indicator) => {
    setLoading(true);
    switch (indicator) {
      case 1:
        fetch(`http://localhost:5000/algorithms/merge`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            array: array,
          })
        })
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
          fetch('http://localhost:5000/algorithms/quick', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              array: array,
            })
          })
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
          fetch('http://localhost:5000/algorithms/bubble', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              array: array,
            })
          })
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
          fetch('http://localhost:5000/algorithms/selection', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              array: array,
            })
          })
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

  const handleArrayChange = (e) => {
    setArray(e.target.value);
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
        <input type="text" id="array" placeholder="1,2,3,4,5,6,7,8,9,10" onChange={(e) => handleArrayChange(e)}/>
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
          <textarea id="result" value={result.answer} readOnly/>
      </div>
      <div className="footer">
        <button onClick={(e) => window.location.reload(e)}>Back</button>
      </div>
    </Card>
  );
}
*/

import React, { useState, useEffect } from 'react'

import Animation from '../components/animation/Animation'
import Card from '../components/card/Card';

// Algorithms
import bubbleSort from '../algorithms/bubbleSort'
import selectionSort from '../algorithms/selectionSort'
import mergeSort from '../algorithms/mergeSort'
import quickSort from '../algorithms/quickSort'

function App() {
	// States
	const [algo, setAlgo] = useState()
	const [blocks, setBlocks] = useState([])
	const [sorting, setSorting] = useState(false)
	const [compare, setCompare] = useState([])
	const [swap, setSwap] = useState([])
	const [sortedIndex, setSortedIndex] = useState([])
	const [arrayTo, setArrayTo] = useState([])
	const [first, setFirst] = useState(0)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(false)

	useEffect(() => {
		if(first === 0){
			setFirst(1)
		} else if(first === 1) {
			handleSortHelper()
			let val = first + 1
			setFirst(val)
		}
	}, [blocks])


	// Sorting according to the algorithm
	const handleSortHelper = () => {
		const sortAccOrder = (order) => {
			(function loop(i) {
				setTimeout(function () {
					const [j, k, arr, index] = order[i]
					setCompare([j, k])
					setSwap([])

					if(index !== null){
						setSortedIndex(
							[...sortedIndex, index]
						)
					}

					if(arr){
						setBlocks(arr)
						setSwap([j, k])
					}

					if (++i < order.length){
						loop(i)
					} else {
						setSorting(false)
            setResult(true)
					}
				}, 150)
			})(0)

		}

		setSorting(true)

		algo === 1 ? sortAccOrder(mergeSort(blocks)) :
		algo === 2 ? sortAccOrder(quickSort(blocks)) :
		algo === 3 ? sortAccOrder(bubbleSort(blocks)) :
		algo === 4 ? sortAccOrder(selectionSort(blocks)) :
		setSorting(false)
	}

	const handleArrayChange = (event) => {
		setArrayTo(event.target.value)
	}

	const handleSortMerge = () => {
		setBlocks(arrayTo.split(',').map(Number))
		setAlgo(1)
    setLoading(true)
	}

	const handleSortQuick = () => {
		setBlocks(arrayTo.split(',').map(Number))
		setAlgo(2)
    setLoading(true)
	}

	const handleSortBubble = () => {
		setBlocks(arrayTo.split(',').map(Number))
		setAlgo(3)
    setLoading(true)
	}

	const handleSortSelection = () => {
		setBlocks(arrayTo.split(',').map(Number))
		setAlgo(4)
    setLoading(true)
	}

  return loading ?  (
    <Card>
      <Animation 
        blocks={blocks}
				compare={sorting && compare}
				swap={sorting && swap}
				sorted={sortedIndex}
      />
      <div className="content">
          <textarea id="result" value={blocks} readOnly/>
      </div>
      <div className="footer">
        <button onClick={(e) => window.location.reload(e)}>Back</button>
      </div>
    </Card>
  ) : (
    <Card>
      <div className="header">
        Type the array to be sorted separated by commas.
      </div>
      <div className="content">
        <input type="text" id="array" placeholder="1,2,3,4,5,6,7,8,9,10" onChange={(e) => handleArrayChange(e)}/>
        <span>Sort using:</span>
      </div>
      <div className="footer">
        <button onClick={handleSortMerge}>Merge Sort</button>
        <button onClick={handleSortQuick}>Quick Sort</button>
        <button onClick={handleSortBubble}>Bubble Sort</button>
        <button onClick={handleSortSelection}>Selection Sort</button>
      </div>
    </Card>
  ) 
}

export default App

