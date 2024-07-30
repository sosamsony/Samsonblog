// ArticleList.js
import React, { useState, useEffect } from 'react';
import articles from './ArticlesData'; // Adjust the path if necessary
import { fetchUnsplashImage } from './fetchUnsplashImage'; // Adjust the path if necessary

const ArticleList = () => {
  const [articlesWithImages, setArticlesWithImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const articlesWithFetchedImages = await Promise.all(
        articles.map(async (article) => {
          const imgUrl = await fetchUnsplashImage(article.imgQuery);
          return { ...article, img: imgUrl };
        })
      );
      setArticlesWithImages(articlesWithFetchedImages);
    }

    fetchImages();
  }, []);

  return (
    <div>
      {articlesWithImages.map(article => (
        <div key={article.articleId}>
          <h2>{article.title}</h2>
          <img src={article.img} alt={article.title} />
          <p>{article.desc}</p>
          <p><strong>Author:</strong> <img src={article.author} alt={article.authorName} /> {article.authorName}</p>
          <p><strong>Date:</strong> {article.date}</p>
          <p><strong>Read Time:</strong> {article.readTime} minutes</p>
          <p><strong>Address:</strong> {article.address}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
