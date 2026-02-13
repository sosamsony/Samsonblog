import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleLayout from "../../../components/ArticleLayout";
import AuthorInfo from "../../../components/AuthorInfo";
import BasicArticleCard from "../../../components/BasicArticleCard";
import FancyArticleCard from "../../../components/FancyArticleCard";
import PreviousNextPost from "../../../components/PreviousNextPost";
import ShortcutBar from "../../../components/ShortcutBar";

import articles from "../../../data/ArticlesData";

import "./articlePage.css";

const ArticlePage = () => {
  const [articleData, setArticleData] = useState(null);
  const [articleIndex, setArticleIndex] = useState(-1);

  const params = useParams();

  // ✅ works whether your Route is /articles/:id or /articles/:articleId or /articles/:slug
  const routeValue = useMemo(() => {
    return params.articleId || params.id || params.slug || "";
  }, [params]);

  useEffect(() => {
    if (!routeValue) {
      setArticleData(null);
      setArticleIndex(-1);
      return;
    }

    const index = articles.findIndex(
      (a) => a.slug === routeValue || a.articleId === routeValue
    );

    if (index === -1) {
      setArticleData(null);
      setArticleIndex(-1);
      window.scrollTo(0, 0);
      return;
    }

    setArticleIndex(index);
    setArticleData(articles[index]);
    window.scrollTo(0, 0);
  }, [routeValue]);

  // ✅ Show a real "not found" (so it’s never "blank")
  if (!articleData) {
    return (
      <div className="ruby-blog__home-container-articlePage">
        <div className="ruby-blog__home-container-articlePage__content">
          <div style={{ padding: "2rem" }}>
            <h2>Article not found</h2>
            <p>
              The URL slug/id <b>{routeValue || "(missing)"}</b> does not match any
              article.
            </p>
          </div>
        </div>
        <div className="ruby-blog__home-container__sideBar">
          <ShortcutBar />
        </div>
      </div>
    );
  }

  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex >= 0 && articleIndex + 1 < articles.length
      ? articles[articleIndex + 1]
      : null;

  return (
    <div className="ruby-blog__home-container-articlePage">
      <div className="ruby-blog__home-container-articlePage__content">
        <div className="ruby-blog__home-container__content-article-suggestion">
          <div className="ruby-blog__home-container__content-article-suggestion-heading">
            <p>You might also like...</p>
          </div>

          {articles.slice(0, 3).map((article) =>
            article.type === "fancy" ? (
              <FancyArticleCard data={article} key={article.articleId} />
            ) : (
              <BasicArticleCard data={article} key={article.articleId} />
            )
          )}
        </div>

        <div className="ruby-blog__home-container__content-display">
          <div className="ruby-blog__home-container__content-article-display">
            <ArticleLayout data={articleData} />
          </div>

          <div className="ruby-blog__home-container__content-author-display">
            <AuthorInfo data={articleData} />
          </div>

          <div className="ruby-blog__home-container__content-post-links">
            {prevArticle ? (
              <PreviousNextPost
                postType="Previous post"
                article={prevArticle}
                content="left"
              />
            ) : (
              <PreviousNextPost postType="" article={null} content="left" />
            )}

            {nextArticle ? (
              <PreviousNextPost
                postType="Next post"
                article={nextArticle}
                content="right"
              />
            ) : (
              <PreviousNextPost postType="" article={null} content="right" />
            )}
          </div>
        </div>
      </div>

      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
};

export default ArticlePage;
