import React, { useState } from "react";

const RegistrationForm = () => {
  const [lonewolf, setLonewolf] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamMember, setTeamMember] = useState({
    name: "",
    phoneNumber: "",
    graduationYear: "",
    email: "",
  });
  const [teamName, setTeamName] = useState("");
  const [showForm, setShowForm] = useState(true);

  const toggleSection = () => {
    setLonewolf(!lonewolf);
  };

  const addTeamMember = () => {
    if (teamMembers.length < 4 && teamMember.name.trim() !== "") {
      setTeamMembers([...teamMembers, teamMember]);
      setTeamMember({
        name: "",
        phoneNumber: "",
        graduationYear: "",
        email: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here based on lonewolf or team selection
    if (lonewolf) {
      // Process lone wolf data in formData
      console.log("Lone Wolf Data:", teamMember);
    } else {
      // Process team data in teamMembers array
      console.log("Team Data:", teamMembers);
      console.log("Team Name:", teamName);
    }
    // Reset the form fields
    setTeamMembers([]);
    setTeamMember({
      name: "",
      phoneNumber: "",
      graduationYear: "",
      email: "",
    });
    setTeamName("");

    // Close the registration form
    setShowForm(false);
  };

  return (
    <div className="registration-form">
      {showForm ? (
        <>
          <button onClick={toggleSection} className={`option-button ${lonewolf ? "selected" : ""}`}>
            Lone Wolf
          </button>
          {'\t'}
          <span className="divider">/</span>
          {'\t'}
          <button onClick={toggleSection} className={`option-button ${!lonewolf ? "selected" : ""}`}>
            Team
          </button>
          
          {lonewolf ? (
            <div className="lonewolf-section">
              <h3>Lone Wolf Registration</h3>
              <button className="close-button" onClick={() => setShowForm(false)}>
                &times;
              </button>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={teamMember.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={teamMember.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="graduationYear"
                  placeholder="Graduation year eg. 2025"
                  value={teamMember.graduationYear}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={teamMember.email}
                  onChange={handleInputChange}
                  required
                />
                <div className="register-button-container">
                  <button type="submit">Register</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="team-section">
              <h3>Team Registration</h3>
              <button className="close-button" onClick={() => setShowForm(false)}>
                &times;
              </button>
              <p className="team-instructions">
                Team capacity must be 4
              </p>
              <input
                type="text"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
              {teamMembers.length < 4 && (
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
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={teamMember.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Graduation Year eg. 2025"
                    name="graduationYear"
                    value={teamMember.graduationYear}
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
                  <br></br>
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
              {teamMembers.length === 4 && (
                <div className="register-button-container">
                  <button type="submit" onClick={handleSubmit}>Register</button>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="registration-closed">
          <p>Thank you for registering!</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
