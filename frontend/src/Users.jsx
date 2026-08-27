import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}`)
        .then(result => setUsers(result.data))
        .catch(err => setError(err.message || 'An error occurred'))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_API_URL}/deleteUser/${id}`)
        .then(res => {
            console.log(res)
            setUsers(users.filter(u => u._id !== id))
        })
        .catch(err => setError(err.message || 'Failed to delete user'))
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className ='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success'>Add +</Link>
            {error && <div className="alert alert-danger mt-2">{error}</div>}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return <tr key={user._id}>
                                <td>{user.name}</td>
                                 <td>{user.email}</td>
                                  <td>{user.age}</td>
                                  <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                    <button className='btn btn-danger' 
                                    onClick={(e) => handleDelete(user._id)}>
                                        Delete
                                    </button>
                                  </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Users