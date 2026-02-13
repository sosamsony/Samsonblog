import React, { useState, useRef, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import FancyArticleCard from "../../../components/FancyArticleCard";
import BasicArticleCard from "../../../components/BasicArticleCard";
import ShortcutBar from "../../../components/ShortcutBar";
import articles from "../../../data/ArticlesData";

import "./tagPage.css";

function normalizeTag(t) {
  return (t || "").toString().trim().toLowerCase();
}

function TagPage() {
  const scrollPos = useRef();
  const location = useLocation();

  // ✅ Build tags from the articles list
  const allTags = useMemo(() => {
    const set = new Set();
    articles.forEach((a) => {
      (a.tag || []).forEach((t) => set.add(normalizeTag(t)));
    });
    return Array.from(set).sort(); // optional: alphabetical
  }, []);

  // ✅ Default to the first tag from data (instead of "apple")
  const [activeTag, setActiveTag] = useState(allTags[0] || "tech");

  // ✅ If user navigated with a tag state, use it
  useEffect(() => {
    if (location.state) {
      const t = normalizeTag(location.state);
      if (allTags.includes(t)) setActiveTag(t);
      else setActiveTag(allTags[0] || "tech");
    }
  }, [location.state, allTags]);

  const scrollLeft = () => {
    if (scrollPos.current) scrollPos.current.scrollLeft = 0;
  };

  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__home-container__content">
        <div
          ref={scrollPos}
          className="ruby-blog__home-container__content-tags-display-div"
        >
          <div
            className="ruby-blog__home-container__content-tags-display-div__tag active"
            onClick={() => scrollLeft()}
          >
            {activeTag}
          </div>

          {allTags.map((t, index) => {
            if (t !== activeTag) {
              return (
                <div
                  className="ruby-blog__home-container__content-tags-display-div__tag"
                  onClick={() => {
                    scrollLeft();
                    setActiveTag(t);
                  }}
                  key={`${t}-${index}`}
                >
                  {t}
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="ruby-blog__home-container__content-article-div">
          {articles
            .filter((article) =>
              (article.tag || []).map(normalizeTag).includes(activeTag)
            )
            .map((article, index) =>
              article.type === "fancy" ? (
                <FancyArticleCard data={article} key={`${article.articleId}-${index}`} />
              ) : (
                <BasicArticleCard data={article} key={`${article.articleId}-${index}`} />
              )
            )}
        </div>
      </div>

      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
}

export default TagPage;
