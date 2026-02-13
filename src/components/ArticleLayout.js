import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import {
  GrFacebookOption,
  GrTwitter,
  GrPinterest,
  GrLinkedinOption,
  GrReddit,
  GrInstagram,
} from "react-icons/gr";
import Tag from "./Tag";
import gfm from "remark-gfm";

import "./articleLayout.css";

const ArticleLayout = (props) => {
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    let isMounted = true;

    fetch(props.data.articleData)
      .then((response) => response.text())
      .then((text) => {
        if (isMounted) setMdText(text);
      })
      .catch(() => {
        if (isMounted) setMdText("⚠️ Failed to load this article content.");
      });

    return () => {
      isMounted = false;
    };
  }, [props.data.articleData]);

  const primaryTag = props.data?.tag?.[0] || "Tech";

  return (
    <div className="ruby-blog__article-layout__container">
      <div className="ruby-blog__article-layout__container__head">
        <Tag tag={primaryTag} />

        <div className="ruby-blog__article-layout__container__head-title">
          <h2>{props.data.title}</h2>
        </div>

        <div className="ruby-blog__article-layout__container__date">
          <p>
            {props.data.date} <span>• {props.data.readTime} min read</span>
          </p>
        </div>
      </div>

      <div className="ruby-blog__article-layout__container__image-div">
        <img src={props.data.img} alt={props.data.title} />
      </div>

      <div className="ruby-blog__article-layout__container__content">
        <ReactMarkdown remarkPlugins={[gfm]}>{mdText}</ReactMarkdown>
      </div>

      <div className="ruby-blog__article-layout__container__hashtags">
        {(props.data.tag || []).map((tag, index) => (
          <div key={`${tag}-${index}`}>#{tag}</div>
        ))}
      </div>

      <div className="ruby-blog__article-layout__container__socialMedia">
        <div className="ruby-blog__article-layout__container__socialMedia-facebook">
          <GrFacebookOption />
        </div>
        <div className="ruby-blog__article-layout__container__socialMedia-twitter">
          <GrTwitter />
        </div>
        <div className="ruby-blog__article-layout__container__socialMedia-pinterest">
          <GrPinterest />
        </div>
        <div className="ruby-blog__article-layout__container__socialMedia-linkedin">
          <GrLinkedinOption />
        </div>
        <div className="ruby-blog__article-layout__container__socialMedia-reddit">
          <GrReddit />
        </div>
        <div className="ruby-blog__article-layout__container__socialMedia-instagram">
          <GrInstagram />
        </div>
      </div>
    </div>
  );
};

export default ArticleLayout;
