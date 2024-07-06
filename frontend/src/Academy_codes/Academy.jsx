import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import "./Academy.css";

import main from "../Academy_imgs/logo1.jpg";
import one from "../Academy_imgs/AI29.jpeg";
import two from "../Academy_imgs/2Ajax.jfif";
import three from "../Academy_imgs/2angular.jfif";
import four from "../Academy_imgs/5appml.png";
import five from "../Academy_imgs/ASP6.jpg";
import six from "../Academy_imgs/AWS2.jpg";
import seven from "../Academy_imgs/BestSQL3.jpg";
import eight from "../Academy_imgs/2Bootstrap.jfif";
import nine from "../Academy_imgs/2chash.jfif";
import ten from "../Academy_imgs/2cplus.jfif";
import eleven from "../Academy_imgs/2c.jfif";
import twelve from "../Academy_imgs/2chatgpt.jfif";
import thirteen from "../Academy_imgs/CodeEditor23.jpeg";
import fourteen from "../Academy_imgs/Css27.jpeg";
import fifteen from "../Academy_imgs/Cyber19.jpeg";
import sixteen from "../Academy_imgs/Data_Science4.jpg";
import seventeen from "../Academy_imgs/GenAI30.jpeg";
import eighteen from "../Academy_imgs/Git_Github7.jpg";
import nineteen from "../Academy_imgs/Graphics25.jpeg";
import twenty from "../Academy_imgs/HTML28.jpeg";
import twentyone from "../Academy_imgs/Java8.jpg";
import twentytwo from "../Academy_imgs/2Jquery.png";
import twentythree from "../Academy_imgs/ML32.jpeg";
import twentyfour from "../Academy_imgs/2mysql.jfif";
import twentyfive from "../Academy_imgs/2Node.jfif";
import twentysix from "../Academy_imgs/2python.jfif";
import twentyseven from "../Academy_imgs/2React.jfif";
import twentyeight from "../Academy_imgs/2Sass.jpg";
import twentynine from "../Academy_imgs/WebBuilding22.jpeg";
import thirty from "../Academy_imgs/WebCertificate20.jpeg";
import thirtyone from "../Academy_imgs/webDesign5.jpg";
import thirtytwo from "../Academy_imgs/WebServer21.jpeg";
import thirtythreee from "../Academy_imgs/WebStatistics24.jpeg";
import thirtyfour from "../Academy_imgs/2XML.jfif";
import thirtyfive from "../Academy_imgs/php.jfif";
import thirtysix from "../Academy_imgs/2RWD.png";

// import main from "../../assets/Academy/logo1.jpg";
// import one from "../../assets/Academy/AI29.jpeg";
// import two from "../../assets/Academy/2Ajax.jfif";
// import three from "../../assets/Academy/2angular.jfif";
// import four from "../../assets/Academy/5appml.png";
// import five from "../../assets/Academy/ASP6.jpg";
// import six from "../../assets/Academy/AWS2.jpg";
// import seven from "../../assets/Academy/BestSQL3.jpg";
// import eight from "../../assets/Academy/2Bootstrap.jfif";
// import nine from "../../assets/Academy/2chash.jfif";
// import ten from "../../assets/Academy/2cplus.jfif";
// import eleven from "../../assets/Academy/2c.jfif";
// import twelve from "../../assets/Academy/2chatgpt.jfif";
// import thirteen from "../../assets/Academy/CodeEditor23.jpeg";
// import fourteen from "../../assets/Academy/Css27.jpeg";
// import fifteen from "../../assets/Academy/Cyber19.jpeg";
// import sixteen from "../../assets/Academy/Data_Science4.jpg";
// import seventeen from "../../assets/Academy/GenAI30.jpeg";
// import eighteen from "../../assets/Academy/Git_Github7.jpg";
// import nineteen from "../../assets/Academy/Graphics25.jpeg";
// import twenty from "../../assets/Academy/HTML28.jpeg";
// import twentyone from "../../assets/Academy/Java8.jpg";
// import twentytwo from "../../assets/Academy/2Jquery.png";
// import twentythree from "../../assets/Academy/ML32.jpeg";
// import twentyfour from "../../assets/Academy/2mysql.jfif";
// import twentyfive from "../../assets/Academy/2Node.jfif";
// import twentysix from "../../assets/Academy/2python.jfif";
// import twentyseven from "../../assets/Academy/2React.jfif";
// import twentyeight from "../../assets/Academy/2Sass.jpg";
// import twentynine from "../../assets/Academy/WebBuilding22.jpeg";
// import thirty from "../../assets/Academy/WebCertificate20.jpeg";
// import thirtyone from "../../assets/Academy/webDesign5.jpg";
// import thirtytwo from "../../assets/Academy/WebServer21.jpeg";
// import thirtythreee from "../../assets/Academy/WebStatistics24.jpeg";
// import thirtyfour from "../../assets/Academy/2XML.jfif";
// import thirtyfive from "../../assets/Academy/php.jfif";
// import thirtysix from "../../assets/Academy/2RWD.png";

const ServicePage12 = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const photos = [
    {
      src: one,
      heading: "Artificial Intelligence",
      content:
        " Foundations of AI . Practical Applications . Programming AI Solutions . Ethics and AI . AI in Industry",
    },
    {
      src: two,
      heading: "Ajax",
      content:
        " Introduction to AJAX . Handling Requests and Responses . Working with JSON . Building Dynamic Web Applications . Security Considerations",
    },
    {
      src: three,
      heading: "Angular",
      content:
        " Angular Framework Basics . Components and Modules . Services and Dependency Injection . Routing and Navigation . Advanced Angular Features",
    },
    {
      src: four,
      heading: "App Machine Learning",
      content:
        " Introduction to Machine Learning . Data Preprocessing and Feature Engineering . Building and Evaluating Models . Deployment of ML Models . Real-world Applications",
    },
    {
      src: five,
      heading: "ASP.NET",
      content:
        " Introduction to ASP.NET . MVC Architecture . Building Web Applications . Data Access with Entity Framework . Securing ASP.NET Applications",
    },
    {
      src: six,
      heading: "AWS",
      content:
        " AWS Cloud Fundamentals . Core AWS Services . Deploying and Managing Applications . Security and Compliance . Cost Management and Optimization",
    },
    {
      src: seven,
      heading: "SQL",
      content:
        " SQL Basics . Advanced Querying Techniques . Database Design and Normalization . Stored Procedures and Triggers . Performance Tuning",
    },
    {
      src: eight,
      heading: "Bootstrap",
      content:
        " Introduction to Bootstrap . Responsive Design . Bootstrap Components . Customizing Bootstrap . Building a Project with Bootstrap",
    },
    {
      src: nine,
      heading: "C#",
      content:
        " C# Fundamentals . Object-Oriented Programming . Data Structures and Algorithms . Advanced C# Features . Building Applications with C#",
    },
    {
      src: ten,
      heading: "C++",
      content:
        " C++ Basics . Object-Oriented Programming . Memory Management . STL and Algorithms . Advanced C++ Techniques",
    },
    {
      src: eleven,
      heading: "C Programming",
      content:
        " C Language Basics . Pointers and Memory Management . File Handling . Data Structures . Advanced C Programming",
    },
    {
      src: twelve,
      heading: "ChatGPT",
      content:
        " Introduction to ChatGPT . Building Chatbots . Integrating ChatGPT with Applications . Training Custom Models . Use Cases and Best Practices",
    },
    {
      src: thirteen,
      heading: "Code Editors",
      content:
        " Introduction to Code Editors . VSCode Features . Customizing Your Editor . Extensions and Plugins . Tips and Tricks for Productivity",
    },
    {
      src: fourteen,
      heading: "CSS",
      content:
        " CSS Basics . Advanced CSS Techniques . Responsive Design . CSS Frameworks . Animations and Transitions",
    },
    {
      src: fifteen,
      heading: "Cybersecurity",
      content:
        " Introduction to Cybersecurity . Threats and Vulnerabilities . Security Frameworks . Defensive Strategies . Incident Response and Management",
    },
    {
      src: sixteen,
      heading: "Data Science",
      content:
        " Data Science Fundamentals . Data Wrangling and Cleaning . Exploratory Data Analysis . Machine Learning Techniques . Data Visualization",
    },
    {
      src: seventeen,
      heading: "Generative AI",
      content:
        " Introduction to Generative AI . Generative Models . Applications of Generative AI . Ethical Considerations . Future Trends",
    },
    {
      src: eighteen,
      heading: "Git and GitHub",
      content:
        " Introduction to Git . Version Control Basics . Using GitHub for Collaboration . Branching and Merging . Best Practices",
    },
    {
      src: nineteen,
      heading: "Graphics Design",
      content:
        " Introduction to Graphics Design . Design Principles . Using Design Software . Creating Digital Artwork . Portfolio Development",
    },
    {
      src: twenty,
      heading: "HTML",
      content:
        " HTML Basics . Structuring Web Pages . HTML5 Features . Forms and Inputs . Best Practices",
    },
    {
      src: twentyone,
      heading: "Java",
      content:
        " Java Basics . Object-Oriented Programming . Data Structures and Algorithms . Building Java Applications . Advanced Java Concepts",
    },
    {
      src: twentytwo,
      heading: "jQuery",
      content:
        " Introduction to jQuery . DOM Manipulation . Event Handling . AJAX with jQuery . jQuery Plugins",
    },
    {
      src: twentythree,
      heading: "Machine Learning",
      content:
        " Introduction to Machine Learning . Supervised Learning . Unsupervised Learning . Model Evaluation",
    },
    {
      src: twentyfour,
      heading: "MySQL",
      content:
        " Introduction to MySQL . Database Design . SQL Queries . Stored Procedures and Triggers . Performance Optimization",
    },
    {
      src: twentyfive,
      heading: "Node.js",
      content:
        " Introduction to Node.js . Building Server-side Applications . Working with Databases . Real-time Communication . Deploying Node.js Applications",
    },
    {
      src: twentysix,
      heading: "Python",
      content:
        " Python Basics . Data Structures . Object-Oriented Programming . Working with Libraries . Building Python Projects",
    },
    {
      src: twentyseven,
      heading: "React",
      content:
        " Introduction to React . Components and Props . State Management . React Router . Building React Applications",
    },
    {
      src: twentyeight,
      heading: "Sass",
      content:
        " Introduction to Sass . Variables and Nesting . Mixins and Functions . Extending and Inheritance . Building Projects with Sass",
    },
    {
      src: twentynine,
      heading: "Web Building",
      content:
        " Introduction to Web Development . Frontend Technologies . Backend Technologies . Full-stack Development . Deployment and Maintenance",
    },
    {
      src: thirty,
      heading: "Web Certification",
      content:
        " Importance of Web Certifications . Popular Web Certifications . Preparation Strategies . Exam Formats . Career Benefits",
    },
    {
      src: thirtyone,
      heading: "Web Design",
      content:
        " Introduction to Web Design . Design Principles . Tools and Software . Creating Wireframes and Prototypes . User Experience Design",
    },
    {
      src: thirtytwo,
      heading: "Web Server",
      content:
        " Introduction to Web Servers . Server Setup and Configuration . Handling Requests and Responses . Security and Performance . Maintenance and Troubleshooting",
    },
    {
      src: thirtythreee,
      heading: "Web Statistics",
      content:
        " Introduction to Web Analytics . Key Metrics and KPIs . Tools for Web Statistics . Analyzing Data . Using Insights for Improvement",
    },
    {
      src: thirtyfour,
      heading: "XML",
      content:
        " Introduction to XML . Structuring Data with XML . Parsing XML . Using XML with Other Technologies . XML Best Practices",
    },
    {
      src: thirtyfive,
      heading: "PHP",
      content:
        " Introduction to PHP . Working with Databases . Form Handling . Session Management . Advanced PHP Techniques",
    },
    {
      src: thirtysix,
      heading: "Responsive Web Design",
      content:
        " Introduction to RWD . Flexible Grid Layouts . Flexible Images and Media . CSS Framework . Testing and Debugging",
    },
  ];

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="Academy-container z-0">
        <img src={main} alt="" />
        <div className="initial-content">
          <p>
            AMXSOL ACADEMY ∞ Grow Unlimited | Identify your Talent and build
            skills to achieve infinite possibilities.
          </p>
          <h1>COURSES FOR LEARNERS</h1>
          <p>Explore courses that are in demand</p>
        </div>
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              index={index}
              photo={photo.src}
              heading={photo.heading}
              content={photo.content}
              isExpanded={expandedIndex === index}
              handleExpand={handleExpand}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicePage12;
