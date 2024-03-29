import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const commercialData = props.ProjectData.filter(
    (x) => x.type === "commercial",
  );

  const residentialData = props.ProjectData.filter(
    (x) => x.type === "residential",
  );

  const commercial = commercialData.map((item) => (
    <ProjectCard
      imgurl={item.imgurl}
      name={item.name}
      description={item.description}
      id={item.id}
    />
  ));

  const residential = residentialData.map((item) => (
    <ProjectCard
      imgurl={item.imgurl}
      name={item.name}
      description={item.description}
      id={item.id}
    />
  ));

  return (
    <div className="projects-page">
      <header>
        <h1>We are creating a better world through the power of design</h1>
        <p>
          We empower people to engage and participate in their own unique water
          journey as part of a bigger movement to contribute to water
          sustainability across the world. The following is one of the main
          projects we have implemented, covering both residential and commercial
          areas across various provinces in Vietnam, with the aim of providing
          water for humanity.
        </p>
      </header>

      <div className="projects-content">
        <div className="commercial">
          <h4 className="title">
            Commercial areas <i class="fa-solid fa-arrow-down"></i>
          </h4>
          <Carousel responsive={responsive}>{commercial}</Carousel>
        </div>

        <div className="residential">
          <h4 className="title">
            Residential areas <i class="fa-solid fa-arrow-down"></i>
          </h4>
          <Carousel responsive={responsive}>{residential}</Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
