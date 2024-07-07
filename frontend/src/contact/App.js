import React, { useState } from "react";
import backgroundVideo from "./vdcontact.mp4";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";

function ContactApp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    discussionTopics: [],
    contactMethods: [],
    preferredDate: "",
    preferredTime: "",
    declaration: false,
  });

  const [fieldFocused, setFieldFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
    discussionTopics: false,
    contactMethods: false,
    preferredDate: false,
    preferredTime: false,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddress, setShowAddress] = useState(false);

  const discussionOptions = [
    "Contingent Staffing",
    "Curated Talent Pools",
    "IT Consulting & AppDev",
    "Direct Sourcing ",
    "Recruitment Process",
    "Automation with AI ",
    "Master Vendor",
    "Employer-of-Record",
    "Payroll Solutions (EOR & AOR)",
    "Hire to Train",
    "IC Compliance",
    "HR/Talent Data Analytics",
    "Other",
  ];

  const contactOptions = [
    "Virtual Meeting",
    "Phone Call",
    "SMS",
    "Face-to-Face",
  ];

  const handleImageClick = (imageNumber) => {
    if (selectedImage === imageNumber && showAddress) {
      setSelectedImage(null);
      setShowAddress(false);
    } else {
      setSelectedImage(imageNumber);
      setShowAddress(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    setFieldFocused({ ...fieldFocused, [name]: value.trim() !== "" });
  };

  const handleFocus = (name) => {
    setFieldFocused({ ...fieldFocused, [name]: true });
  };

  const handleBlur = (name) => {
    if (formData[name].trim() === "") {
      setFieldFocused({ ...fieldFocused, [name]: false });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => {
      const updatedArray = checked
        ? [...prevData[name], value]
        : prevData[name].filter((item) => item !== value);
      return { ...prevData, [name]: updatedArray };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          completed: false
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Assuming your backend returns some JSON response
      const responseData = await response.json();
      console.log('Form submitted successfully:', responseData);

      // Reset the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        discussionTopics: [],
        contactMethods: [],
        preferredDate: '',
        preferredTime: '',
        declaration: false,
      });

      setFieldFocused({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        message: false,
        discussionTopics: false,
        contactMethods: false,
        preferredDate: false,
        preferredTime: false,
      });

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="relative top-0 h-full flex items-center justify-center p-4 ">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover "
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="relative flex flex-col md:flex-row items-start justify-center w-full h-full p-8">
        <div className="md:w-1/3 flex flex-col justify-center items-center space-y-4 bg-blue-900 rounded-lg shadow-lg p-4">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Contact here for more info
          </h2>
          <img
            src={image1}
            alt="USA branch"
            className="rounded-lg shadow-lg h-auto max-w-full cursor-pointer"
            style={{ maxHeight: "300px" }}
            onClick={() => handleImageClick(1)}
          />
          {showAddress && selectedImage === 1 && (
            <p className="text-white mt-4 text-center whitespace-pre-line bg-blue-600 p-2 rounded-lg">
              {/* <b>America Branch</b> <br /> */}
              American Corporate HQ: <br />
              AMXSOL LLC
              <br />
              1000 Northbrook Drive
              <br />
              Suite 1000
              <br />
              Trevose, PA 19053 USA
              <br />
              TEL: +1 (215) 268-6168
              <br />
              Email: info@amxsol.com
              <br />
            </p>
          )}
          <img
            src={image2}
            alt="Hyderabad branch"
            className="rounded-lg shadow-lg h-auto max-w-full cursor-pointer"
            style={{ maxHeight: "300px" }}
            onClick={() => handleImageClick(2)}
          />
          {showAddress && selectedImage === 2 && (
            <p className="text-white mt-4 text-center whitespace-pre-line bg-purple-600 p-2 rounded-lg">
              <b>Global Indian Office </b>
              <br />
              Global R&D Center:
              <br />
              AMXSOL LLP
              <br />
              #3-88/3/A, Sree Krishna Arcade,
              <br />
              Nizampet, Hyderabad 500090 TG INDIA
              <br />
              TEL: +91-4035759443 | +91-8179382764
              <br />
              Email: info@amxsol.com
              <br />
            </p>
          )}
        </div>
        <div className="bg-[#f11550] shadow-lg rounded-lg max-w-2xl w-full p-8 md:ml-12 text-center">
          <h2 className="text-4xl font-semibold text-gray-700 mb-4">
            Let's Grow Together
          </h2>
          <p className="text-xl text-white mb-6">
            Start a conversation with us
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className="block text-m font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="FirstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus("firstName")}
                    onBlur={() => handleBlur("firstName")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${fieldFocused.firstName || formData.firstName
                        ? "border-blue-600 ring ring-blue-600 ring-opacity-50 bg-blue-100 text-blue-900"
                        : "border-gray-300"
                      }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="lastName"
                    className="block text-m font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="LastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus("lastName")}
                    onBlur={() => handleBlur("lastName")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${fieldFocused.lastName || formData.lastName
                        ? "border-pink-600 ring ring-pink-600 ring-opacity-50 bg-pink-100 text-pink-900"
                        : "border-gray-300"
                      }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-m font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${fieldFocused.email || formData.email
                        ? "border-purple-600 ring ring-purple-600 ring-opacity-50 bg-purple-100 text-purple-900"
                        : "border-gray-300"
                      }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="block text-m font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus("phone")}
                    onBlur={() => handleBlur("phone")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${fieldFocused.phone || formData.phone
                        ? "border-green-600 ring ring-green-600 ring-opacity-50 bg-green-100 text-green-900"
                        : "border-gray-300"
                      }`}
                    required
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label className="block text-m font-medium text-gray-700">
                    What would you like to discuss?
                  </label>
                  {discussionOptions.map((option, index) => (
                    <div key={index} className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        id={`discussion-${index}`}
                        name="discussionTopics"
                        value={option}
                        checked={formData.discussionTopics.includes(option)}
                        onChange={handleCheckboxChange}
                        className={`focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded ${fieldFocused.discussionTopics ||
                            formData.discussionTopics.includes(option)
                            ? "bg-indigo-100 text-indigo-900"
                            : ""
                          }`}
                      />
                      <label
                        htmlFor={`discussion-${index}`}
                        className="ml-2 block text-sm text-white"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label className="block text-m font-medium text-gray-700">
                    How would you like us to contact you?
                  </label>
                  {contactOptions.map((option, index) => (
                    <div key={index} className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        id={`contact-${index}`}
                        name="contactMethods"
                        value={option}
                        checked={formData.contactMethods.includes(option)}
                        onChange={handleCheckboxChange}
                        className={`focus:ring-white h-4 w-4 text-white border-white rounded ${fieldFocused.contactMethods ||
                            formData.contactMethods.includes(option)
                            ? "bg-white text-white"
                            : ""
                          }`}
                      />
                      <label
                        htmlFor={`contact-${index}`}
                        className="ml-2 block text-sm text-white"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="preferredDate"
                    className="block text-m font-medium text-gray-700"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    onFocus={() => handleFocus("preferredDate")}
                    onBlur={() => handleBlur("preferredDate")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${fieldFocused.preferredDate || formData.preferredDate
                        ? "border-red-600 ring ring-red-600 ring-opacity-50 bg-red-100 text-red-900"
                        : "border-gray-300"
                      }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="preferredTime"
                    className="block text-m font-medium text-gray-700"
                  >
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    onFocus={() => handleFocus("preferredTime")}
                    onBlur={() => handleBlur("preferredTime")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${fieldFocused.preferredTime || formData.preferredTime
                        ? "border-teal-600 ring ring-teal-600 ring-opacity-50 bg-teal-100 text-teal-900"
                        : "border-gray-300"
                      }`}
                    required
                  />
                </div>
              </div>

              <div className="w-full px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-m font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Any Queries....?"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${fieldFocused.message || formData.message
                        ? "border-yellow-600 ring ring-yellow-600 ring-opacity-50 bg-yellow-100 text-yellow-900"
                        : "border-gray-300"
                      }`}
                    required
                  />
                </div>
              </div>

              <div className="w-full px-2 mb-4">
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center">
                  <input
                    type="checkbox"
                    id="declaration"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded mt-4 "
                    required
                  />
                  <label
                    htmlFor="declaration"
                    className="ml-2 block text-m text-gray-900 -mt-5 sm:mt-0 lg:mt-4"
                  >
                    I have read and agree to the{" "}
                    <a href="privacy" className="text-white">
                      privacy policy
                    </a>
                  </label>
                </div>
              </div>

              <div className="w-full px-2 mb-4 ">
                <button
                  type="submit"
                  className="w-1/2 py-2 px-4 border border-transparent rounded-md shadow-sm text-m font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500  "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactApp;
