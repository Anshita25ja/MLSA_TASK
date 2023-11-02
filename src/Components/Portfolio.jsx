/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pic2.jpeg";

const imageAltText = "nature image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Virtual assistant",
    description:
      "It work as Virtual assistant where you say or write anything, it will repeat,      It will open site if you say open YouTube, open google.      It will open site if you say open YouTube, open google.   ",
    url: "https://anshita25ja.github.io/Virtual-Assistant/",
  },
  {
    title: "Web Development for project-News App",
    description:
      " News app by using HTML,CSS, JavaScript(fetch API)",
    url: "https://anshita25ja.github.io/News_App/",
  },
  {
    title: "My weather_app",
    description:
      "weather app by using HTML,CSS, JavaScript(fetch API.",
    url: "https://anshita25ja.github.io/weather_app/",
  },
  {
    title: "youtube content",
    description:
      "this youtube link is about to project output of ffront-end development",
    url: "https://youtube.com/@anshitajaiswal5721?si=g_Mg1cJ3I_evorJw",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
