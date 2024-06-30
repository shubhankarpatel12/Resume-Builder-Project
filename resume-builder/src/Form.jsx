import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    linkedin: '',
    address: '',
    education: '',
    languages: '',
    languagesProficiency: '',
    programmingLanguages: '',
    programmingLanguagesProficiency: '',
    about: '',
    skills: '',
    interests: '',
    training: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm({ ...form, [name]: URL.createObjectURL(files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter Your Details</h3>
      <label>Name</label>
      <input type="text" name="name" value={form.name} onChange={handleChange} required />
      
      <label>Title</label>
      <input type="text" name="title" value={form.title} onChange={handleChange} required />
      
      <label>Phone</label>
      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
      
      <label>Email</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} required />
      
      <label>LinkedIn</label>
      <input type="text" name="linkedin" value={form.linkedin} onChange={handleChange} required />
      
      <label>Address</label>
      <input type="text" name="address" value={form.address} onChange={handleChange} required />
      
      <label>Education</label>
      <textarea name="education" value={form.education} onChange={handleChange} required></textarea>
      
      <label>Languages</label>
      <textarea name="languages" value={form.languages} onChange={handleChange} required></textarea>
      <label>Languages Proficiency (comma-separated values 0-100)</label>
      <input type="text" name="languagesProficiency" value={form.languagesProficiency} onChange={handleChange} required />

      <label>Programming Languages</label>
      <textarea name="programmingLanguages" value={form.programmingLanguages} onChange={handleChange} required></textarea>
      <label>Programming Languages Proficiency (comma-separated values 0-100)</label>
      <input type="text" name="programmingLanguagesProficiency" value={form.programmingLanguagesProficiency} onChange={handleChange} required />

      <label>About</label>
      <textarea name="about" value={form.about} onChange={handleChange} required></textarea>
      
      <label>Skills</label>
      <textarea name="skills" value={form.skills} onChange={handleChange} required></textarea>
      
      <label>Interests</label>
      <textarea name="interests" value={form.interests} onChange={handleChange} required></textarea>
      
      <label>Training</label>
      <textarea name="training" value={form.training} onChange={handleChange} required></textarea>
      
      <label>Upload Photo</label>
      <input type="file" name="photo" accept="image/*" onChange={handleFileChange} required />
      
      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default Form;
