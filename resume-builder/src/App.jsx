import React, { useState } from 'react';
import Form from './Form';
import Resume from './Resume';
import './form.css';
import './style.css'; // Ensure both CSS files are imported

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <div className="App">
      {!formData ? (
        <Form onSubmit={setFormData} />
      ) : (
        <Resume data={formData} />
      )}
    </div>
  );
}

export default App;
