/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about.jpg";

const imageAltText = "background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Versatile computer engineering student with proficiency in procedural and object-oriented programming, front-end development, data engineering, networking, and cybersecurity across diverse technologies.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Programming logic and design",
  "Data analysis, visualization, and automation",
  "Database management system",
  "Front-end development",
  "Android development",
  "Embedded  systems",
  "Computer networks design",
  "Cybersecurity",
  "Computer-aidied design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Committed to continuous learning and currently pursuing certifications, focusing on cloud computing. Dedicated to problem-solving using AI and ML, upskilling for future challenges. Actively engaging with dynamic tech communities to broaden knowledge and contribute to collaborative learning environments.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
