import React from 'react'

const Registrations = () => {
    const Data = JSON.parse(localStorage.getItem("CompositSaData"));
    const Members = Data.user.userData.SaMember
    console.log(Members)
  return (
    <div className=''>
        <h1>Registrations : </h1>
        <table>
            <tr>
                <th>Registration ID</th>
                <th>Registration Name</th>
                <th>Registration Date</th>                
            </tr>
        </table>
      
    </div>
  )
}

export default Registrations
