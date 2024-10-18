import React from 'react'

const ToggleBtn = ({ state, onChange }) => {
    return (
        <div
            onClick={onChange}
            className={`${state ? "bg-green-500" : "bg-gray-300"} relative w-10 h-5 flex items-center rounded-full cursor-pointer transition-colors duration-300`}>
            <div
                className={`${state ? "translate-x-6" : "translate-x-0"} w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-300`} />
        </div>
    )
}

export default ToggleBtn