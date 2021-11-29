import React, { useState, useEffect } from 'react'
import './Animation.css'

function Animation({ blocks, compare, sorted, swap }){
    const [width, setWidth] = useState(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 5))
    const color = blocks.length <= 50 && width > 14 ? 'black' : 'transparent' // If there are more than 50 numbers
    // the color of the numbers will be transparent otherwise black

    useEffect(() => {
        const handleResize = () => {
            setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
        }

        window.addEventListener('resize', handleResize)

        setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
    }, [blocks.length])

    return (
        <div className='listBlocks'>

            {blocks.map((block, i) => {
                const height = block * 200 / blocks.length;
                let bg = '#2499FF'

                // i th element is being compared with some other element
                if(compare && (i === compare[0] || i === compare[1])){
                    bg = '#F59B0A'
                }
                
                // i th element is being swapped with some other element
                if(swap && (i === swap[0] || i === swap[1])){
                    bg='red'
                }
                // i th element is in its correct position
                if(sorted && sorted.includes(i)){
                    bg = '#4bc52e'
                }

                const style = {
                    'backgroundColor': bg,
                    'height': height, 
                    'width': width
                }
                return (<div key={i} className='block' style={style}>{block}</div>)
            })}
        </div>
    );
}

export default Animation
