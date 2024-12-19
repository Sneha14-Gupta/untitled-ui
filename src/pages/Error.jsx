import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate()
    return (
        <div>
            <h3>Error</h3>
            <button className="btn btn-primary" onClick={() => {
                navigate('/Submission'), {
                    state: {
                        data: "react dom"
                    }

                }
            }}>go to submission</button>
        </div>
    )
}

export default Error