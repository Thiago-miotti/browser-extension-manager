import * as React from "react"

function GridGuides() {
    return (
        <svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 10C0 4.477 4.477 0 10 0h40c5.523 0 10 4.477 10 10v40c0 5.523-4.477 10-10 10H10C4.477 60 0 55.523 0 50V10z"
                fill="#B8B8FF"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.403 34.667H20.93a3.602 3.602 0 00-3.598 3.597v.805a3.602 3.602 0 003.598 3.598h3.472A3.6 3.6 0 0028 39.069v-.805a3.6 3.6 0 00-3.597-3.597zM39.07 17.333h-3.473A3.6 3.6 0 0032 20.931v.805a3.6 3.6 0 003.597 3.597h3.472a3.6 3.6 0 003.598-3.597v-.805a3.601 3.601 0 00-3.598-3.598zM39.07 29.333h-3.473A3.6 3.6 0 0032 32.931v6.138a3.6 3.6 0 003.597 3.598h3.472a3.601 3.601 0 003.598-3.598v-6.138a3.601 3.601 0 00-3.598-3.598zM24.403 17.333H20.93a3.602 3.602 0 00-3.598 3.598v6.138a3.602 3.602 0 003.598 3.598h3.472A3.6 3.6 0 0028 27.069v-6.138a3.6 3.6 0 00-3.597-3.598z"
                fill="#091540"
            />
        </svg>
    )
}

export default GridGuides
