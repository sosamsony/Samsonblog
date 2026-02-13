import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BasicArticleCard from "../../../components/BasicArticleCard";
import FancyArticleCard from "../../../components/FancyArticleCard";
import ShortcutBar from "../../../components/ShortcutBar";
import articles from "../../../data/ArticlesData";

import "./authorPage.css";

const AUTHOR_IMAGE = "https://blog.sosamson.com/static/media/me.540bee70.svg";

const AuthorPage = () => {
  const [filterAuthor, setFilterAuthor] = useState("Samson Sanyaolu");
  const [filterAuthorImg, setFilterAuthorImg] = useState(AUTHOR_IMAGE);

  const authorProps = useLocation();

  useEffect(() => {
    if (authorProps.state?.authorName) {
      setFilterAuthor(authorProps.state.authorName);
    }
    // ✅ Always use your image (ignores authorProps.state.authorImg)
    setFilterAuthorImg(AUTHOR_IMAGE);
  }, [authorProps]);

  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__author-page-container__content">
        <div className="ruby-blog__author-page-container__content__author-display">
          <div className="ruby-blog__author-page-container__content__image-div">
            <img src={filterAuthorImg} alt="authorPicture" />
          </div>
          <div className="ruby-blog__author-page-container__content__author-name-div">
            {filterAuthor}
          </div>
        </div>

        <div className="ruby-blog__home-container__content-article-div">
          {articles.map((article, index) => {
            if (
              filterAuthor.toLowerCase() === article.authorName.toLowerCase()
            ) {
              return article.type === "fancy" ? (
                <FancyArticleCard
                  data={article}
                  key={`${article.articleId}-${index}`}
                />
              ) : (
                <BasicArticleCard
                  data={article}
                  key={`${article.articleId}-${index}`}
                />
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
};

export default AuthorPage;
