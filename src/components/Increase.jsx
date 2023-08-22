import React from 'react'

export const Increase = React.memo(({ increase }) => {

    console.log('Me estoy redibujando')

    return (
        <div className='action'>
            <button className="btn btn-danger" onClick={() => increase(10)}>+1</button>
        </div>

    )
})