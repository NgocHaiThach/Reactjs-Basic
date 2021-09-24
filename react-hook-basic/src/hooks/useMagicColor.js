import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function useMagicColor(props) {
    const [color, setColor] = useState('transparent')
    const colorRef = useRef('transparent')

    function randomColor(currentColor) {
        const COLOR_LIST = ['red', 'yellow', 'blue', 'deeppink']
        const currentIndex = COLOR_LIST.indexOf(currentColor)

        let newIndex = currentIndex

        while (currentIndex === newIndex) {
            newIndex = Math.trunc(Math.random() * 4)
        }
        return COLOR_LIST[newIndex]
    }

    //change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current)
            setColor(newColor)
            colorRef.current = newColor
        }, 1000)

        return () => {
            clearInterval(colorInterval)
        }
    }, [])

    return color
}

export default useMagicColor;