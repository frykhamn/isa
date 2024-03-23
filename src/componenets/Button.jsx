import React from 'react'

export default function Button({ text, handleClick }) {

    return (
        <button
            className={`py-2 px-4 rounded-md bg-textOffLight sm:w-48 h-12 uppercase border border-gray-700 `}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}
