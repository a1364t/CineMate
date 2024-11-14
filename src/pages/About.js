import React from 'react';
import { useTitle } from '../hooks/useTitle';

export const About = ({title}) => {
    useTitle(title)
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-semibold text-center text-indigo-700 mb-6">About Me</h1>

      <section className="mb-6">
        <p className="text-lg leading-relaxed text-gray-800">
          Welcome to <span className="font-semibold text-indigo-600">AI Cinemate</span>!
        </p>
        <p className="text-lg leading-relaxed text-gray-800 mt-4">
          <strong>AI Cinemate</strong> is an intelligent, interactive movie recommendation platform designed to help
          you find the perfect movie for any mood or occasion. Whether you're a movie buff or just looking for
          something to watch tonight, AI Cinemate is here to make choosing a film easier and more fun!
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Overview</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          This project combines the power of <strong>The Movie Database (TMDb) API</strong> and 
          <strong> OpenAI’s GPT-3.5-turbo</strong> model to provide personalised and dynamic movie recommendations.
          Through a unique blend of data-driven suggestions and conversational AI, AI Cinemate can help you
          uncover hidden gems, revisit timeless classics, or explore trending blockbusters based on your preferences.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Technology Behind the Project</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-4">
          <li>
            <strong>The Movie Database (TMDb) API</strong> provides a vast library of movie data, including information
            on cast, genres, release dates, ratings, trailers, and more. With TMDb, AI Cinemate always stays current
            on new releases and trending movies, ensuring fresh and up-to-date recommendations.
          </li>
          <li>
            <strong>OpenAI API (GPT-3.5-turbo)</strong> is the conversational engine behind AI Cinemate. The language
            model allows the site to offer personalised movie recommendations in a conversational style, creating a 
            seamless experience that responds to your movie tastes and questions.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">How It Works</h2>
        <ol className="list-decimal list-inside text-lg leading-relaxed text-gray-800 space-y-4">
          <li>
            <strong>User Input:</strong> You ask the AI for a movie suggestion, specifying your preferences as little
            or as much as you like.
          </li>
          <li>
            <strong>Natural Language Processing:</strong> AI Cinemate sends your input to the OpenAI API using the GPT-3.5-turbo model, which processes your request in natural language.
          </li>
          <li>
            <strong>TMDb API Query:</strong> fetch relevant movie data that matches your request, including genres, release dates, and more.
          </li>
          <li>
            <strong>Personalised Response:</strong> The AI responds with curated movie suggestions, complete with TMDb details like genre, runtime, budget, revenue, release date and IMDB code.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why This Project?</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          This project was developed with the goal of enhancing the way we discover movies. With the vast amount of
          content available, it can be overwhelming to find something truly enjoyable. By combining the rich data of
          TMDb with the conversational power of OpenAI, AI Cinemate creates a seamless, user-centric movie recommendation experience.
        </p>
        <p className="text-lg leading-relaxed text-gray-800 mt-4">
          Thank you for visiting AI Cinemate, and I hope you enjoy discovering movies as much as I enjoyed building this project!
        </p>
      </section>
    </div>
  );
};


