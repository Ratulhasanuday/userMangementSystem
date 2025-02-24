import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import Swal from "sweetalert2";

const UsersTable = ({ user, index, users, setUsers }) => {
  const { _id, name, email, gender, status } = user;
      const handleUserDelete = _id => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('Deleting User ID:', _id);
    
          fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(data => {
              console.log("Delete response:", data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your User has been deleted.",
                  icon: "success"
                });
    
                const remainingUsers = users.filter((u) => u._id !== _id);
                setUsers(remainingUsers)
              }
            })
            .catch(error => console.error("Error deleting user:", error));
        }
      });
    };
    
  

return (
  <tr >
    <td>{index + 1}</td>
    <td className='text-end'>{name}</td>
    <td className='text-end'>{email}</td>
    <td className='text-end'>{gender}</td>
    <td className='text-end'>{status}</td>
    <td className='text-end'>
      <Link className="mr-4">
        <button onClick={() => handleUserDelete(
          _id)} className="btn">X</button></Link>
      <Link to={`/updateUser/${_id}`}  className="">
        <button className="btn">
          <MdModeEditOutline />
        </button>
      </Link>
    </td>
  </tr>
);
};

export default UsersTable;