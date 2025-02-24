import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import UsersTable from './components/UsersTable';
import { useState } from 'react';


function App() {
  const loadedUsers = useLoaderData();
  const [users, setUsers]=useState(loadedUsers);
  return (
    <div >
      <h1 className='text-4xl bg-green-100 text-center p-4'>User management system  </h1>
      <div className='mx-28 mt-20'>
        <Link to='/addUser'>
          <button className='btn text-lg text-purple-600'>New User</button>
        </Link>
      </div>
      <div className="mx-36 mt-5">
        <table className="table">
          <thead>
            <tr className='text-white bg-gray-800'>
              <th className='w-2'>No</th>
              <th className='text-end'>Name</th>
              <th className='text-end'>Email</th>
              <th className='text-end'>Gender</th>
              <th className='text-end'>Status</th>
              <th className='text-end '>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UsersTable 
              key={user._id} 
              user={user} 
              index={index}
              users={users}
              setUsers={setUsers}
              ></UsersTable>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App
