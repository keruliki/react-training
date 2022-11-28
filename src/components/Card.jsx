import React from 'react'

export default function Card(props) {
  return (
    <div className='p-4 rounded-lg bg-gray-200'>
        <h1 className='font-bold text-xl mb-2'>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}
