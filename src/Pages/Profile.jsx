import React from 'react'
import "./Style.css"

const Profile = () => {
    const Data = JSON.parse(localStorage.getItem("CompositSaData"));
    console.log(Data.user.userData)
    const user = Data.user.userData;
  return (
    <div className='mt-28 text-white'>
      <h1 className='text-3xl font-bold text-yellow-300 mb-10 mt-10'> Your Profile </h1>
      <div className='mt-14 h-full flex flex-col gap-5 justify-items-start text-center profile '>
        <h2> <b>Name </b> : {user.name}</h2>
        <h2><b>Student Ambassador Id : </b> {user.SaId} </h2>
        <h2><b>Uid :</b>  {user._id}</h2>
        <h2><b>College Name :</b>  {user.collegeName}</h2>
        <h2><b>Email :</b>  {user.email}</h2>
        <h2><b>Phone :</b>  {user.phone}</h2>
        <h2><b>Gender :</b>  {user.gender}</h2>
        <h2><b>City :</b>  {user.city}</h2>
        <h2><b>State :</b>  {user.state}</h2>
      </div>
   </div>
  )
}

export default Profile
