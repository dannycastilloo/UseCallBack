import React from 'react'

export const Increase = React.memo(({ increase }) => {

    return (
        <div className='action'>
            <button className="btn btn-danger" onClick={() => increase(10)}>+1</button>
        </div>

    )
})