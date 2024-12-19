import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Submission() {
    const location = useLocation()
    console.log(location.state.data)
    return (
        <div>
            <h3>Submission</h3>
            <Link to="/" >Home</Link>
            <Link to="/errod">error</Link>

        </div>
    )
}

export default Submission