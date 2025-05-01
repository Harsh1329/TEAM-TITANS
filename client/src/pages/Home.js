import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="container">
      <h1 className="header">Team Titans</h1>
      <p>Welcome to the Student Team Members Management App</p>
      <Link to='/add'><button className="btn">Add Member</button></Link>
      <Link to='/view'><button className="btn">View Members</button></Link>
    </div>
  );
}

export default Home;
