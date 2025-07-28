import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { assets, jobsApplied } from '../assets/assets';
import moment from 'moment'
import Footer from '../components/Footer';


const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  const fileInputRef = useRef(null);

  const handleResumeClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSave = () => {
    // Add logic to upload resume if needed
    setIsEdit(false);
  };

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2 className='text-xl font-semibold'>Your Resume</h2>

        <div className='flex flex-wrap gap-4 mb-6 mt-3 items-center'>
          {isEdit ? (
            <>
              <label
                htmlFor="resumeUpload"
                className="cursor-pointer flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
              >
                <p>Select Resume</p>
                <img src={assets.profile_upload_icon} alt="Upload Icon" className='w-5 h-5' />
              </label>
              <input
                id='resumeUpload'
                type="file"
                accept='application/pdf'
                hidden
                onChange={e => setResume(e.target.files[0])}
              />
              {resume && (
                <span className="text-sm text-gray-600">{resume.name}</span>
              )}
              <button
                onClick={handleSave}
                className='bg-green-500 text-white rounded-lg px-4 py-2'
              >
                Save
              </button>
              <button
                onClick={() => setIsEdit(false)}
                className='bg-gray-300 text-black rounded-lg px-4 py-2'
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              {resume ? (
                <>
                  <a
                    href={URL.createObjectURL(resume)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg'
                  >
                    View Resume
                  </a>
                  <span className="text-sm text-gray-600">{resume.name}</span>
                </>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className='bg-blue-500 text-white rounded-lg px-4 py-2'
                >
                  Resume
                </button>)}

              <button
                onClick={() => setIsEdit(true)}
                className='bg-yellow-500 text-white rounded-lg px-4 py-2'
              >
                Edit
              </button>
            </>
          )}
        </div>
        <h2 className='text-xl font-semibold md-4'>Jobs Applied</h2>
        <table className='min-w-full bg-white border rounded-lg'>
          <thead>
            <tr>
              <th className='py-3 px-4 border-b text-left'>Company</th>
              <th className='py-3 px-4 border-b text-left'>Job Title</th>
              <th className='py-3 px-4 border-b text-left max-sm:hidden'>Location</th>
              <th className='py-3 px-4 border-b text-left  max-sm:hidden'>Date</th>
              <th className='py-3 px-4 border-b text-left'>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => true ? (

              <tr>
                <td className='py-3 px-4 flex items-center gap-2 border-b'>
                  <img className='w-8 h-8' src={job.logo} alt="" />
                  {job.company}
                </td>
                <td className='py-2 px-4 border-b'>{job.title}</td>
                <td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                <td className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
                <td className='py-2 px-4 border-b'>
                  <span className={`${job.status=== 'Accepted' ? 'bg-green-100' :job.status === 'Rejected' ? 'bg-red-100':'bg-blue-100'} px-4 py-1.5 rounded`}>{job.status}</span></td>

              </tr>
            ) : (null))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};

export default Applications;
