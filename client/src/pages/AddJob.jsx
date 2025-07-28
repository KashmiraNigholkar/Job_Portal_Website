import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // ✅ Important to show editor styling

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);  // ✅ Used to reference the div
  const quillRef = useRef(null);   // ✅ Holds the Quill instance

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Write job description...',
      });
    }
  }, []);

  return (
    <form>
      <div>
        <p>Job Title</p>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>

      <div>
        <p>Job Description</p>
        <div ref={editorRef} style={{ height: '200px', marginBottom: '20px' }}></div>
      </div>

      {/* Optional: Submit button */}
      <button type="submit">Post Job</button>
    </form>
  );
};

export default AddJob;
