import React, { useEffect, useState } from 'react';

const SportsSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSportsData = async () => {
      const url = 'https://sportapi7.p.rapidapi.com/api/v1/event/xdbsZdb/h2h/events';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '036751a1bamshf51a274e719655ep1a1063jsnb095ccbc475c',
          'x-rapidapi-host': 'sportapi7.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
       

        if (result && result.events) {
          setEvents(result.events); 
        } else {
          console.error('No events data available');
          setEvents([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sports data', error);
        setLoading(false);
      }
    };

    fetchSportsData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-5 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Sports Events</h1>
      {events.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <li
              key={index}
              className="border rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                {/* Display team names and scores */}
                <h2 className="text-lg font-semibold mb-2">
                  {event.awayTeam?.name || 'No Away Team'} vs {event.homeTeam?.name || 'No Home Team'}
                </h2>
                <p className="text-sm text-gray-500 mb-1">
                  Away Score: {event.awayScore?.current || 'No Score'}
                </p>
                <p className="text-sm text-gray-500">
                  Home Score: {event.homeScore?.current || 'No Score'}
                </p>
                <p className="text-sm text-gray-500">
                  Date: {event.date || 'Unknown Date'}
                </p>
                <p className="text-sm text-gray-500">
                  Round Info: {event.roundInfo?.description || 'No Round Info'}
                </p>
                <p className="text-sm text-gray-500">
                  Status: {event.status?.description || 'Unknown Status'}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sports events available at the moment.</p>
      )}
    </div>
  );
};

export default SportsSection;
