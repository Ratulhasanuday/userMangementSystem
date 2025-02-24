import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewUser = () => {
    const navigate=useNavigate();
    const handleUserSave=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const gender=form.gender.value;
        const status=form.status.value;
        const newUsers={name,email,gender,status};
        console.log(newUsers);
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUsers)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
                {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      }).then((result)=>{
                        if(result.isConfirmed){
                            navigate('/')
                            }
                      })
                }
        })
    }
    return (
        <div>
            <Link to='/'><button className="mx-20 mt-8 btn">All User</button></Link>
            <div className="text-center mt-10">
                <h2 className="text-2xl">New User</h2>
                <p></p>
            </div>
            <div className="mx-36 mt-10">
                <form onSubmit={handleUserSave} className="shadow-2xl rounded-lg p-4">
                    <div className="w-full ">
                        <label>
                            <span className="text-xl">Name</span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="Enter Name" required name="name" type="text" />
                    </div>
                    <div className="w-full ">
                        <label>
                            <span className="text-xl">Email</span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="abd@gmai.com" name="email" required type="email" />
                    </div>
                    <div className="flex gap-20 w-full">
                        <div className="mt-6 space-y-6">
                            <h2 className="text-lg font-bold">Gender</h2>
                        </div>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input id="man" name="gender" type="radio" value="man"  checked className="" />
                                <label htmlFor="man" className="block text-sm font-medium text-gray-900">Man</label>
                            </div>
                        </div>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input id="woman" name="gender" type="radio" value="woman" checked  className="" />
                                <label htmlFor="woman" className="block text-sm font-medium text-gray-900">Woman</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-20 w-full">
                        <div className="mt-6 space-y-6">
                            <h2 className="text-lg font-bold">Status</h2>
                        </div>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input id="active" name="status" type="radio" value="active" checked className="" />
                                <label htmlFor="active" className="block text-sm font-medium text-gray-900">Active</label>
                            </div>
                        </div>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input id="inactive" name="status" type="radio" value="inactive" checked className="" />
                                <label htmlFor="inactive" className="block text-sm font-medium text-gray-900">Inactive</label>
                            </div>
                        </div>
                    </div>

                    <div className="
                     mt-4">
                        <input type="submit" value="Save" className="text-xl btn w-full bg-[#72d68b] text-center" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewUser;