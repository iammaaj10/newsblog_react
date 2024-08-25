import React, { useEffect, useState } from 'react';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const url = 'https://real-time-news-data.p.rapidapi.com/search?query=Elon%20Musk&limit=500&time_published=anytime&country=US&lang=en';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '036751a1bamshf51a274e719655ep1a1063jsnb095ccbc475c',
          'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('API Response:', result);

        if (result.data && result.data.length > 0) {
          setNews(result.data);
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
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:bg-gray-100 p-4"
            >
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              {article.summary && (
                <p className="text-sm text-gray-500 mb-1">{article.summary}</p>
              )}
              <p className="text-sm text-gray-500">
                Source: {article.source}
              </p>
              <p className="text-sm text-gray-500">
                Published: {new Date(article.time_published).toLocaleDateString()}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;
