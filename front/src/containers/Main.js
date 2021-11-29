import React, { useState, useEffect } from "react";

import Animation from "../components/animation/Animation";
import Card from "../components/card/Card";

// Algorithms
import bubbleSort from "../algorithms/bubbleSort";
import selectionSort from "../algorithms/selectionSort";
import mergeSort from "../algorithms/mergeSort";
import quickSort from "../algorithms/quickSort";

function App() {
  // States
  const [algorithm, setAlgorithm] = useState();
  const [blocks, setBlocks] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sortedIndex, setSortedIndex] = useState([]);
  const [arrayTo, setArrayTo] = useState([]);
  const [first, setFirst] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (first === 0) {
      setFirst(1);
    } else if (first === 1) {
      handleSortHelper();
      let val = first + 1;
      setFirst(val);
    }
  }, [blocks]);

  // Sorts the array using the animation
  const sortUsingOrder = (order)  => {
    function loop(i) {
      setTimeout(function () {
        const [j, k, arr, index] = order[i];
        setCompare([j, k]);
        setSwap([]);

        if (index !== null) {
          setSortedIndex([...sortedIndex, index]);
        }

        if (arr) {
          setBlocks(arr);
          setSwap([j, k]);
        }

        if (++i < order.length) {
          loop(i)
        } else {
          setSorting(false);
        }
      }, 150);
    }
    loop(0)
  }

  // Sorting according to the algorithm
  const handleSortHelper = () => {
    setSorting(true);

    algorithm === 1
      ? sortUsingOrder(mergeSort(blocks))
      : algorithm === 2
      ? sortUsingOrder(quickSort(blocks))
      : algorithm === 3
      ? sortUsingOrder(bubbleSort(blocks))
      : algorithm === 4
      ? sortUsingOrder(selectionSort(blocks))
      : setSorting(false);
  };

  const handleArrayChange = (event) => {
    setArrayTo(event.target.value);
  };

  const checkArray = () => {
    if (arrayTo.length === 0) {
      return false;
    }
    return true;
  };

  const handleSort = (ind) => {
    const res = checkArray();
    if (!res) {
      alert("Please enter an array");
    } else {
      let numbers = true;
      const nArray = arrayTo.split(",").map((it) => 
      /^\d+$/.test(it) ? parseInt(it) : numbers=false
      );
      if(!numbers){
        alert("Please enter a valid array")
      } else {
        setBlocks(nArray);
        setAlgorithm(ind);
        setLoading(true);
      }
    }
  }

  return loading ? (
    <Card>
      {
        !sorting && 
        <div className="header">
          ¡Array sorted!
        </div>
      }
      <Animation
        blocks={blocks}
        compare={sorting && compare}
        swap={sorting && swap}
        sorted={sortedIndex}
      />
      <div className="content">
        <textarea id="result" value={blocks} readOnly />
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
        <input
          type="text"
          id="array"
          placeholder="1,2,3,4,5,6,7,8,9,10"
          onChange={(e) => handleArrayChange(e)}
        />
        <span>Sort using:</span>
      </div>
      <div className="footer">
        <button onClick={(e) => handleSort(1)}>Merge Sort</button>
        <button onClick={(e) => handleSort(2)}>Quick Sort</button>
        <button onClick={(e) => handleSort(3)}>Bubble Sort</button>
        <button onClick={(e) => handleSort(4)}>Selection Sort</button>
      </div>
    </Card>
  );
}

export default App;
