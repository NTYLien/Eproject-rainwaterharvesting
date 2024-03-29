import React, { useState } from "react";
import "./News.css";

function News(props) {
  const newsData = props.newsData;

  const [mainContentIndex, setMainContentIndex] = useState(0);

  return (
    <>
      {newsData.map((article, index) => {
        const id = article.id;
        const title = article.title;
        const date = article.date;
        const paragraph1 = article.paragraph1;
        const paragraph2 = article.paragraph2;
        const thumbnail = article.thumbnail;
        const mainPhoto = article.mainPhoto;
        return (
          <>
            <div className="news-page">
              <div className="left-side">
                {index === mainContentIndex && (
                  <div className="news-container">
                    <h1 className="title">{title}</h1>
                    <p className="paragraph1">{paragraph1}</p>
                    <div className="news-photo">
                      <img src={mainPhoto} alt="news" />
                    </div>
                    <span className="date-publish">{date}</span>
                    <p className="paragraph2">{paragraph2}</p>
                  </div>
                )}
              </div>
              <div className="right-side">
                <div className="pic-show">
                  {index !== mainContentIndex && (
                    <>
                      <img
                        src={thumbnail}
                        alt="news"
                        onClick={() => {
                          setMainContentIndex(index);
                        }}
                      />
                      <span className="date-publish">{date}</span>
                      <h4>{title}</h4>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default News;
