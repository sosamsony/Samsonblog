import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import RecentPost from "../../components/RecentPost";
import TagLine from "../../components/TagLine";
import articles from "../../data/ArticlesData";

import "./header.css";

function normalizeTag(t) {
  return (t || "").toString().trim().toLowerCase();
}

function parseHumanDate(dateStr) {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = (value) => {
    setShowNavbar(value);
  };

  const { topTags, recentPosts } = useMemo(() => {
    // Tag counts
    const tagCountMap = new Map();
    articles.forEach((a) => {
      (a.tag || []).forEach((t) => {
        const key = normalizeTag(t);
        if (!key) return;
        tagCountMap.set(key, (tagCountMap.get(key) || 0) + 1);
      });
    });

    const topTags = Array.from(tagCountMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([title, count]) => ({ title, count }));

    const recentPosts = [...articles]
      .sort((a, b) => parseHumanDate(b.date) - parseHumanDate(a.date))
      .slice(0, 5)
      .map((a) => ({
        title: a.title,
        date: a.date,
        link: a.articleId,
      }));

    return { topTags, recentPosts };
  }, []);

  return (
    <div className="ruby-blog__header-container">
      <div className="ruby-blog__header-container__logo">
        <div>
          <Link to="/">Sosamson Blog</Link>
        </div>
      </div>

      <div className="ruby-blog__header-container__nav">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tag">Tag</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>

      <div className="ruby-blog__header-container__nav-smallDevice">
        <div
          onClick={() => handleShowNavbar(true)}
          className="ruby-blog__header-container__nav-smallDevic__sidebar-open"
        >
          <HiOutlineMenuAlt1 fontSize={25} />
        </div>

        {showNavbar ? (
          <div className="ruby-blog__header-container__nav-smallDevice__sidebar">
            <div
              className="ruby-blog__header-container__nav-smallDevice__sidebar-close"
              onClick={() => handleShowNavbar(false)}
            >
              <IoIosCloseCircle fontSize={25} />
            </div>

            <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content">
              <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__navlinks">
                <nav>
                  <ul>
                    <li>
                      <Link to="/" onClick={() => handleShowNavbar(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/tag" onClick={() => handleShowNavbar(false)}>
                        Tag
                      </Link>
                    </li>
                    <li>
                      <Link to="/authors" onClick={() => handleShowNavbar(false)}>
                        Authors
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={() => handleShowNavbar(false)}>
                        About
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__tags">
                <p className="ruby-blog__header-container__nav-smallDevice__sidebar-content__tags-heading">
                  Tags
                </p>
                <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__tagslist">
                  {topTags.map((t) => (
                    <TagLine
                      key={t.title}
                      title={t.title}
                      count={t.count}
                      clickEvent={handleShowNavbar}
                    />
                  ))}
                </div>
              </div>

              <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts">
                <p className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-heading">
                  Recent Posts
                </p>
                <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-posts">
                  {recentPosts.map((p) => (
                    <RecentPost
                      key={p.link}
                      title={p.title}
                      date={p.date}
                      link={p.link}
                      clickEvent={handleShowNavbar}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
