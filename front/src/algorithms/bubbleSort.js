const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const bubbleSort = (blocks) => {

    const dupBlocks = blocks.slice() // copying blocks array
    const order = []

    let j;
    
    // It sorts elements one by one, the first loop is for selecting the element that will be sorted
    // the second loop is for comparing the element with the next one
    for (let i = 0; i < dupBlocks.length; i++) {
        for (j = 0; j < dupBlocks.length - i - 1; j++) {
            order.push([j, j + 1, null, null])                  // Compare
            if (dupBlocks[j] > dupBlocks[j + 1]) {
                swap(dupBlocks, j, j + 1)
                order.push([j, j + 1, dupBlocks.slice(), null]) // Swap
            }
        }
        order.push([null, null, null, j]) // j-th element is in correct position ( Sorted )
    }
    return order
}

export default bubbleSort

