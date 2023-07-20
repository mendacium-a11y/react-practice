import React from 'react'

function Alerts({display, text}) {
    return (
        <>
            <div className={`position-absolute w-100 z-5 alert alert-primary ${display} my-3`} role="alert">
                {text} mode has been enabled!
            </div>


        </>
    )
}

export default Alerts