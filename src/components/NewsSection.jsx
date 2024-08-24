import React, { useEffect, useState } from 'react';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const url = 'https://google-news13.p.rapidapi.com/business?lr=en-US';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '036751a1bamshf51a274e719655ep1a1063jsnb095ccbc475c',
          'x-rapidapi-host': 'google-news13.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('API Response:', result);

        if (result.items && result.items.length > 0) {
          setNews(result.items);
        } else {
          setNews([]);
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No news articles available.</p>
      </div>
    );
  }

  return (
    <div className="p-5 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">News</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {news.map((article, index) => (
          <li key={index} className="border rounded-lg shadow-md overflow-hidden">
            <a
              href={article.newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:bg-gray-100"
            >
              {article.images && article.images.thumbnail ? (
                <img
                  src={article.images.thumbnail}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-600">
                  No Image Available
                </div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                {article.snippet && (
                  <p className="text-sm text-gray-500 mb-1">{article.snippet}</p>
                )}
                <p className="text-sm text-gray-500">
                  Publisher: {article.publisher}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;
