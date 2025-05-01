import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then(res => setMembers(res.data));
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this member?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/members/${id}`);
      setMembers(prev => prev.filter(member => member._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete member");
    }
  };

  return (
    <div className="container">
      <h1 className="header">Team Titans</h1>
      <h2>All Members</h2>

      {members.map(member => (
        <div key={member._id} className="card">
          {member.image && (
            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              alt={member.name}
              width="100"
            />
          )}
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <Link to={`/member/${member._id}`}>
            <button className="btn">View Details</button>
          </Link>
          <button
            className="btn"
            style={{ backgroundColor: 'red', marginLeft: '0.5rem' }}
            onClick={() => handleDelete(member._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ViewMembers;
