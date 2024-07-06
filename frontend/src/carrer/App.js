import React from "react";
import "./App.css";
import backgroundImage from "./assets/image.jpg";
import jobImage1 from "./assets/job1.jpg"; // Example image import
import jobImage2 from "./assets/job2.jpg"; // Example image import
import jobImage3 from "./assets/job3.jpg"; // Example image import
import jobImage4 from "./assets/job4.jpg"; // Example image import
import jobImage5 from "./assets/job5.jpg"; // Example image import
import jobImage6 from "./assets/job6.jpg"; // Example image import
import jobImage7 from "./assets/job7.jpg"; // Example image import
import jobImage8 from "./assets/job8.jpg"; // Example image import
import jobImage9 from "./assets/job9.jpg"; // Example image import

const JobCard = ({ job }) => {
  return (
    <div className="jobcard relative  bg-green-50 group  rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-60 w-70  overflow-hidden ">
        <img
          src={job.image}
          alt={job.title}
          className="object-cover h-full w-full rounded-lg transition-transform duration-300  hover:w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold text-white">{job.title}</h3>
        </div>
        <button className="absolute sm:w-22 sm:h-6 bottom-4 right-4 px-4 py-0.5 bg-blue-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700">
          Join Now
        </button>
      </div>
      <div className="p-6">
        <p className="text-xl font-bold text-gray-900 mb-2">ID: {job.id}</p>
        <p className="text-lg text-blue-600 mb-2">Location: {job.location}</p>
        <p className="text-lg font-semibold text-green-600 mb-2">
          Salary: {job.salary}
        </p>
        <p className="text-base mb-4  group-hover:block hidden">
          {job.description.map((point, index) => (
            <span key={index} className="block text-black">
              • {point}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const JobForm = ({ jobTitles }) => {
  return (
    <form className="bg-green-100 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="resume"
        >
          Resume
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="jobTitle"
        >
          Job Title
        </label>
        <select
          id="jobTitle"
          name="jobTitle"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black bg-white"
        >
          {jobTitles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const CarrerApp = () => {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      description: [
        "Develop and maintain web applications.",
        "Collaborate with cross-functional teams.",
        "Participate in code reviews and design discussions.",
      ],
      image: jobImage1,
    },
    {
      id: 2,
      title: "Data Scientist",
      location: "New York, NY",
      salary: "$110,000 - $140,000",
      description: [
        "Analyze large datasets to derive insights.",
        "Build predictive models and machine learning algorithms.",
        "Communicate findings to stakeholders.",
      ],
      image: jobImage2,
    },
    {
      id: 3,
      title: "Product Manager",
      location: "Seattle, WA",
      salary: "$130,000 - $160,000",
      description: [
        "Define product vision and strategy.",
        "Manage product lifecycle from concept to launch.",
        "Work closely with engineering, design, and marketing teams.",
      ],
      image: jobImage3,
    },
    {
      id: 4,
      title: "UX Designer",
      location: "Los Angeles, CA",
      salary: "$100,000 - $130,000",
      description: [
        "Design user-friendly interfaces.",
        "Conduct user research and usability testing.",
        "Create wireframes, prototypes, and high-fidelity mockups.",
      ],
      image: jobImage4,
    },
    {
      id: 5,
      title: "Marketing Specialist",
      location: "Chicago, IL",
      salary: "$90,000 - $120,000",
      description: [
        "Develop and execute marketing campaigns.",
        "Analyze market trends and customer behavior.",
        "Collaborate with sales and product teams.",
      ],
      image: jobImage5,
    },
    {
      id: 6,
      title: "Sales Representative",
      location: "Dallas, TX",
      salary: "$80,000 - $110,000",
      description: [
        "Identify and engage with potential clients.",
        "Present products and services to prospective customers.",
        "Negotiate and close sales deals.",
      ],
      image: jobImage6,
    },
    {
      id: 7,
      title: "Customer Support",
      location: "Miami, FL",
      salary: "$70,000 - $100,000",
      description: [
        "Assist customers with inquiries and issues.",
        "Provide exceptional customer service.",
        "Maintain detailed records of customer interactions.",
      ],
      image: jobImage7,
    },
    {
      id: 8,
      title: "HR Manager",
      location: "Boston, MA",
      salary: "$120,000 - $150,000",
      description: [
        "Manage recruitment and onboarding processes.",
        "Develop and implement HR policies.",
        "Oversee employee relations and performance management.",
      ],
      image: jobImage8,
    },
    {
      id: 9,
      title: "Finance Analyst",
      location: "Atlanta, GA",
      salary: "$100,000 - $130,000",
      description: [
        "Analyze financial data and trends.",
        "Prepare financial reports and forecasts.",
        "Support strategic financial planning.",
      ],
      image: jobImage9,
    },
    {
      id: 10,
      title: "Other",
      location: null,
      salary: null,
      description: null,
      image: null,
    },
  ];

  const jobTitles = jobs.map((job) => job.title);

  return (
    <div className="  relative top-[0px] mb-32 ">
      <div
        className="bg-image h-80  w-full flex items-center justify-center overflow-hidden relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-5xl text-black drop-shadow-xl md:text-6xl font-bold text-vibrant underline absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 hover:text-6xl hover:bg-slate-50">
          We are Hiring!
        </h1>
      </div>
      <div className="techback text-black">
        <div className="container mx-auto py-12 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Careers
          </h2>
          <div className="m-auto grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3   gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="flex items-stretch m-auto">
                {job.image !== null && <JobCard job={job} />}
              </div>
            ))}
          </div>
          <hr className="mt-8 border-4 " />
          <h2 className="text-4xl md:text-6xl font-bold mt-8 text-center text-black">
            Join us now
          </h2>
          <JobForm jobTitles={jobTitles} />
        </div>
      </div>
    </div>
  );
};

export default CarrerApp;
