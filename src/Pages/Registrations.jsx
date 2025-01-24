import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // To detect route changes
import BaseUrl from "../const";

const Registrations = () => {
  const [members, setMembers] = useState([]); // State to store the fetched members
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors
  const location = useLocation(); // Detects when the route changes

   console.log("reg page is opened")

  useEffect(() => {
    const fetchRegistrations = async () => {
      console.log("inside useeffect")

      const Data = JSON.parse(localStorage.getItem("CompositSaData"));
      const token = localStorage.getItem("Satoken");
      console.log("token : ", token)

      try {

        if (!Data || !token) {
          throw new Error("User is not logged in.");
        }
        console.log("before response")

        const response = await fetch(`${BaseUrl}/api/user/getsamembers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
          body: JSON.stringify({
            SaId: Data.user.userData.SaId,
            token: token,
          }),
        });
        console.log("after response", response)

        if (!response.ok) {
          throw new Error("Failed to fetch registrations.");
        }

        const result = await response.json();
        console.log("result recivied, ", result.members)

        setMembers(result.members || []); // Update members state
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
      console.log("after try catch", Data, token)
    };


    fetchRegistrations();

  }, [location]); // Re-run fetch whenever the route changes

  if (loading) {
    return <p className="text-white text-2xl">Loading registrations...</p>;
  }

  if (error) {
    return <p className="text-white text-2xl">Error: {error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Registrations:</h1>
      {members.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300 text-white">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Registration ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{member.MemberId}</td>
                <td className="border border-gray-300 px-4 py-2">{member.MemberName}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(member.timestamps).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-white text-2xl ">No registrations found.</p>
      )}
    </div>
  );
};

export default Registrations;
