import { useState } from 'react';
import axios from 'axios';

function AddMember() {
  const [formData, setFormData] = useState({ name: '', role: '', email: '', image: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('role', formData.role);
    data.append('email', formData.email);
    data.append('image', formData.image);
    await axios.post('http://localhost:5000/api/members', data);
    alert('Member added!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <input name='name' placeholder='Name' onChange={handleChange} /><br/>
      <input name='role' placeholder='Role' onChange={handleChange} /><br/>
      <input name='email' placeholder='Email' onChange={handleChange} /><br/>
      <input type='file' name='image' onChange={handleFileChange} /><br/>
      <button type='submit'>Add Member</button>
    </form>
  );
}

export default AddMember;