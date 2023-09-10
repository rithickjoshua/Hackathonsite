import React, { useState } from "react";
import Axios from "axios";

const RegistrationForm = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamMember, setTeamMember] = useState({
    name: "",
    department: "",
    phoneNumber: "",
    email: "",
    registerNumber: "",
  });
  const [teamName, setTeamName] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const addTeamMember = () => {
    if (teamMembers.length < 3 && teamMember.name.trim() !== "") {
      setTeamMembers([...teamMembers, teamMember]);
      setTeamMember({
        name: "",
        department: "",
        phoneNumber: "",
        email: "",
        registerNumber: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamMember({
      ...teamMember,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming the API URL for POST request
    const apiUrl = "https://web-it-like-spider.onrender.com/hackathon/register/";

    try {
      // Make an HTTP POST request to the API
      const response = await Axios.post(apiUrl, {
        team_name: teamName,
        team_members: teamMembers,
      });
      console.log("API Response:", response.data);

      // Reset the form fields
      setTeamMembers([]);
      setTeamName("");

      // Show success message
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error("API Error:", error);

      // Show error message
      setError("An error occurred. Please try again later.");
      setSuccess(false);
    }
  };

  return (
    <div className="registration-form">
      {showForm ? (
        <>
          <div className="team-section">
            <h3>Team Registration</h3>
            <button className="close-button" onClick={() => setShowForm(false)}>
              &times;
            </button>
            <p className="team-instructions">Team capacity must be 3</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
              {teamMembers.length < 3 && (
                <div className="team-member-form">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={teamMember.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Department"
                    name="department"
                    value={teamMember.department}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={teamMember.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email ID"
                    name="email"
                    value={teamMember.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Register Number"
                    name="registerNumber"
                    value={teamMember.registerNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <button onClick={addTeamMember}>Add Team Member</button>
                </div>
              )}
              <ul>
                {teamMembers.map((member, index) => (
                  <li key={index}>
                    Team Member {index + 1}: {member.name}
                  </li>
                ))}
              </ul>
              {teamMembers.length === 3 && (
                <div className="register-button-container">
                  <button type="submit">Register</button>
                </div>
              )}
            </form>
          </div>
        </>
      ) : (
        <div className="registration-closed">
          {success ? (
            <p>Thank you for registering!</p>
          ) : (
            <p>{error || "An error occurred."}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
