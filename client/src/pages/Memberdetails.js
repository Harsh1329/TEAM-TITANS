import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data));
  }, [id]);

  if (!member) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h1 className="header">Team Titans</h1>
      <h2>Member Details</h2>

      {member.image && (
        <img
          src={`http://localhost:5000/uploads/${member.image}`}
          width="150"
          alt={member.name}
        />
      )}

      <h2>{member.name}</h2>
      <p>Role: {member.role}</p>
      <p>Email: {member.email}</p>
    </div>
  );
}

export default MemberDetails;
