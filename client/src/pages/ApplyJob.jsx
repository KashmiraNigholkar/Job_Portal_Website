import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import kconvert from 'k-convert';
import moment from 'moment';

const ApplyJob = () => {
  const { id } = useParams();
  const { jobs = [] } = useContext(AppContext);
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    if (jobs.length > 0) {
      const job = jobs.find((job) => job._id === id);
      if (job) {
        setJobData(job);
      }
    }
  }, [id, jobs]);

  if (!jobData) return <Loading />;

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10 px-4 2xl:px-20 container mx-auto">
        <div className="bg-white text-black rounded-lg w-full p-6">

          {/* Top Section: Job Info */}
          <div className="flex justify-between flex-wrap gap-8 px-6 md:px-14 py-10 bg-sky-50 border border-sky-400 rounded-xl">
            {/* Company Info */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                className="h-24 w-24 object-contain bg-white rounded-lg p-4 border"
                src={jobData.companyId?.image || assets.default_company_logo}
                alt="Company Logo"
              />
              <div className="text-center md:text-left text-neutral-700">
                <h1 className="text-2xl sm:text-4xl font-medium">{jobData.title}</h1>
                <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start mt-2 text-gray-600 text-sm">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} className="w-4 h-4" alt="Suitcase" />
                    {jobData.companyId?.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} className="w-4 h-4" alt="Location" />
                    {jobData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} className="w-4 h-4" alt="Level" />
                    {jobData.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} className="w-4 h-4" alt="Salary" />
                    CTC: {kconvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            {/* Apply Now Button (Top Right) */}
            <div className="flex flex-col justify-center text-center md:text-end w-full md:w-auto">
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2.5 rounded-lg font-medium">
                Apply Now
              </button>
              <p className="text-gray-600 mt-2">
                Posted {moment(jobData.date).fromNow()}
              </p>
            </div>
          </div>

          {/* Job Description */}
          <div className="flex flex-col lg:flex-row justify-between items-start mt-10">
            <div className="w-full lg:w-2/3">
              <h2 className="font-bold text-2xl mb-4">Job Description</h2>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              />
              {/* Apply Now Button (Bottom Center) */}
              <div className="mt-6 text-center lg:text-left">
                <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-2.5 rounded">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ApplyJob;
