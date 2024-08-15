import React, { useEffect, useState } from 'react'

const Business = () => {
    const [Busniness , setBusiness] = useState([])
    const[loading , setLoading] = useState(true)

    useEffect(()=>{
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
	const result = await response.text();
    if (result && result.length > 0) {
        setBusiness(result);
    } else {
        setBusiness([]);
    }
    setLoading(false);
} catch (error) {
	console.error(error);
    setLoading(false)
}
        }
        fetchBusiness();
    },[])
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold">Loading...</p>
            </div>
        );
    }
  return (
    <div>Business</div>
  )
}

export default Business