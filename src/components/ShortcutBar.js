import React, { useMemo } from "react";
import RecentPost from "./RecentPost";
import TagLine from "./TagLine";
import articles from "../../../data/ArticlesData";

import "./shortcutBar.css";

function normalizeTag(t) {
  return (t || "").toString().trim().toLowerCase();
}

// Parses your existing date format like "12 January 2026"
function parseHumanDate(dateStr) {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

const ShortcutBar = () => {
  const { topTags, recentPosts } = useMemo(() => {
    // ✅ Tag counts from live article data
    const tagCountMap = new Map();
    articles.forEach((a) => {
      (a.tag || []).forEach((t) => {
        const key = normalizeTag(t);
        if (!key) return;
        tagCountMap.set(key, (tagCountMap.get(key) || 0) + 1);
      });
    });

    const topTags = Array.from(tagCountMap.entries())
      .sort((a, b) => b[1] - a[1]) // highest count first
      .slice(0, 8) // show top 8 tags
      .map(([title, count]) => ({ title, count }));

    // ✅ Recent posts from live article data (by date)
    const recentPosts = [...articles]
      .sort((a, b) => parseHumanDate(b.date) - parseHumanDate(a.date))
      .slice(0, 5) // show 5 recent posts
      .map((a) => ({
        title: a.title,
        date: a.date,
        link: a.articleId,
      }));

    return { topTags, recentPosts };
  }, []);

  return (
    <div className="ruby-blog__shortcutBar-container">
      <div className="ruby_blog__shortcutBar-container__tagsBar">
        <div className="ruby_blog__shortcutBar-container__tagsBar-head">
          <p>Tags</p>
        </div>

        <div className="ruby-blog__shortcutBar-container__tagsBar-content">
          {topTags.map((t) => (
            <TagLine key={t.title} title={t.title} count={t.count} />
          ))}
        </div>
      </div>

      <div className="ruby_blog__shortcutBar-container__recentPostsBar">
        <div className="ruby_blog__shortcutBar-container__recentPostsBar-head">
          <p>Recent Posts</p>
        </div>

        <div className="ruby-blog__shortcutBar-container__recentPostsBar-content">
          {recentPosts.map((p) => (
            <RecentPost key={p.link} title={p.title} date={p.date} link={p.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortcutBar;
