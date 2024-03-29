import React from "react";
import "./ProjectDetail.css";
import { useParams } from "react-router-dom";

function ProjectDetail(props) {
  const projectData = props.ProjectData;
  const { id } = useParams();
  const project = projectData.find((x) => x.id === id);
  const title = project.title;
  const description = project.description;
  const mainContent = project.mainContent;
  const subMainContent = project.subMainContent;
  const size = project.size;
  const location = project.location;
  const year = project.year;
  const img1 = project.img1;
  const img2 = project.img2;
  const img3 = project.img3;

  return (
    <div className="project-detail-page">
      <div className="top-banner">
        <div className="content-banner">
          <h1>We are creating a better world through the power of design</h1>
          <p className="banner-description">
            We empower people to engage and participate in their own unique
            water journey as part of a bigger movement to contribute to water
            sustainability across the world. The following is one of the main
            projects we have implemented, covering both residential and
            commercial areas across various provinces in Vietnam, with the aim
            of providing water for humanity.
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="content-project">
          <div className="left-content">
            <h2 className="project-tile">{title}</h2>
            <div className="project-description">{description}</div>
            <div className="main-content">{mainContent}</div>
            <div className="line"></div>
            <div className="highlight">
              <span className="location">Location/{location}</span>
              <span className="size">Size / {size}</span>
              <span className="location">Year/{year} </span>
            </div>
          </div>
          <div className="right-content">
            <div className="main-right-content">{subMainContent}</div>
          </div>
        </div>
        <div className="imgs-project">
          <div class="container">
            <ul class="image-gallery">
              <li>
                <img src={img1} alt="project" />
              </li>
              <li>
                <img src={img2} alt="project" />
              </li>
              <li>
                <img src={img3} alt="project" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
