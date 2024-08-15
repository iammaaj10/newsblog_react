import React, { useEffect, useState } from 'react';

const Business = () => {
    const [business, setBusiness] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBusiness = async () => {
            const url = 'https://reuters-business-and-financial-news.p.rapidapi.com/market-assets/list';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '036751a1bamshf51a274e719655ep1a1063jsnb095ccbc475c',
                    'x-rapidapi-host': 'reuters-business-and-financial-news.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                if (result && result.length > 0) {
                    setBusiness(result);
                } else {
                    setBusiness([]);
                }
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchBusiness();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold">Loading...</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Business News</h1>
            <div className="grid grid-cols-1 gap-6">
                {business.map((item, index) => (
                    <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                        <p className="text-gray-600 mb-4">
                            {item.description || "No detailed news available. Click 'Read more' to view the full article."}
                        </p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Business;
