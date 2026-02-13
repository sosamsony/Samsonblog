import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import "./previousNextPost.css";

const PreviousNextPost = ({ article, postType, content }) => {
  const handleScrollTop = () => scroll.scrollToTop();

  if (article) {
    return (
      <Link to={`/articles/${article.slug}`} onClick={handleScrollTop}>
        <div
          className="ruby-blog__container__anotherPost-thumbnail"
          style={{
            backgroundImage: `url(${article.img})`,
            textAlign: content,
          }}
        >
          <div className="ruby-blog__container__anotherPost-thumbnail__post-type">
            {postType}
          </div>
          <div className="ruby-blog__container__anotherPost-thumbnail__articleTitle">
            {article.title}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div
      className="ruby-blog__container__anotherPost-thumbnail"
      style={{
        opacity: 0,
        textAlign: content,
      }}
    >
      <div className="ruby-blog__container__anotherPost-thumbnail__post-type">
        {postType}
      </div>
      <div className="ruby-blog__container__anotherPost-thumbnail__articleTitle">
        &quot;
      </div>
    </div>
  );
};

export default PreviousNextPost;
