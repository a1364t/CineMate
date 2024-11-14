import React, { useState } from 'react';
import { useTitle } from "../hooks/useTitle";
import axios from 'axios';

export const MovieRecommendations = ({title}) => {
  const [preferences, setPreferences] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getRecommendations = async () => {
    setLoading(true);
    setError('');  // Reset error on new request
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // Or 'gpt-4'
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `Suggest some movies based on the following preference: ${preferences}` },
            { role: 'user', content: "maximum number of movies should be 6" },
          ],
          max_tokens: 100,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      console.log('Response:', response.data); // Log the full response to check the structure

      // Check if the response has the expected structure
      if (!response.data || !response.data.choices || !response.data.choices[0]?.message) {
        console.error('Invalid API response structure', response.data);
        setError('Invalid response structure');
        return;
      }

      const message = response.data.choices[0].message.content;

      if (!message) {
        console.error('No content in message');
        setError('No content returned');
        return;
      }

      const recommendationsList = message.split(',');

      setRecommendations(recommendationsList);
      // Reset the input field after fetching recommendations
      setPreferences('');
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setError('Failed to fetch recommendations');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecommendations();
  };
  useTitle(title);
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Movie Recommendations</h1>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Here, you can get personalised help from ChatGPT to find the perfect movie to watch! 🎥
        Simply ask a question like <strong className="text-indigo-600">"What movie should I watch?" </strong> or 
         <strong className="text-indigo-600"> "Suggest a movie for me!" </strong> 
        and ChatGPT will provide tailored recommendations based on your preferences. 
        You'll get up to 6 movie suggestions.
      </p>

      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block p-4 text-sm font-medium text-gray-700">Enter preferences (e.g., genre, mood, etc.):</label>
          <input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="You can ask: 'What movie should I watch?' or 'Suggest a movie for me!'"
            className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {loading ? 'Loading...' : 'Get Recommendations'}
        </button>
      </form>

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {recommendations.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Movies:</h2>
    <ul className="space-y-3">
      {recommendations.map((movie, index) => (
        <li
          key={index}
          className="bg-gray-100 p-4 rounded-lg shadow-sm text-gray-800 hover:bg-gray-200 transition duration-300"
        >
          {movie.trim()}
        </li>
      ))}
    </ul>
  </div>
     )}
    </div>
  );
};


