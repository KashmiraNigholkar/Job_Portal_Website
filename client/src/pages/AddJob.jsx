import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

// Dummy data for categories and locations
const JobCategories = ['Programming', 'Design', 'Marketing', 'Sales'];
const JobLocations = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad'];

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);    // Reference to the editor container div
  const quillRef = useRef(null);     // Stores the Quill instance

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Write job description...',
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = quillRef.current?.root.innerHTML;

    const jobData = {
      title,
      description,
      category,
      location,
      level,
      salary,
    };

    console.log('Submitting job:', jobData);

    // Submit jobData to your backend or API here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='container p-4 flex flex-col w-full items-start gap-3'
    >
      {/* Job Title */}
      <div className='w-full'>
        <p className='mb-2'>Job Title</p>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'
        />
      </div>

      {/* Job Description */}
      <div className='w-full max-w-lg'>
        <p className='my-2'>Job Description</p>
        <div ref={editorRef} className='h-40 bg-white' />
      </div>

      {/* Dropdowns for Category, Location, Level */}
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Job Category</p>
          <select
            className='w-full px-3 py-2 border-2 border-gray-300 rounded'
            onChange={e => setCategory(e.target.value)}
            value={category}
          >
            {JobCategories.map((cat, index) => (
              <option value={cat} key={index}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Job Location</p>
          <select
            className='w-full px-3 py-2 border-2 border-gray-300 rounded'
            onChange={e => setLocation(e.target.value)}
            value={location}
          >
            {JobLocations.map((loc, index) => (
              <option value={loc} key={index}>{loc}</option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Job Level</p>
          <select
            className='w-full px-3 py-2 border-2 border-gray-300 rounded'
            onChange={e => setLevel(e.target.value)}
            value={level}
          >
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
      </div>

      {/* Job Salary */}
      <div>
        <p className='mb-2'>Job Salary</p>
        <input
          type="number"
          placeholder='2500'
          onChange={e => setSalary(e.target.value)}
          value={salary}
          className='px-3 py-2 border-2 border-gray-300 rounded'
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 mt-4 rounded hover:bg-blue-700 transition"
      >
        ADD
      </button>
    </form>
  );
};

export default AddJob;
