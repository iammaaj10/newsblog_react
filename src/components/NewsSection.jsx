import React, { useEffect, useState } from 'react';

const topics = ['business', 'technology', 'sports', 'entertainment']; // Example topics

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState('business');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://google-news22.p.rapidapi.com/v1/top-headlines?country=us&language=en&topic=${selectedTopic}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '036751a1bamshf51a274e719655ep1a1063jsnb095ccbc475c',
          'x-rapidapi-host': 'google-news22.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
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
  }, [selectedTopic]);

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
        <p>No news articles available for the topic "{selectedTopic}".</p>
      </div>
    );
  }

  return (
    <div className="p-5 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">News</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {news.map((article, index) => (
          <li
            key={index}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:bg-gray-100"
            >
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-500 mb-1">
                  {new Date(article.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500">
                  Source: {article.source.name}
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
