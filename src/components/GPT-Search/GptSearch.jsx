import React, { useState } from "react";
import LoginHeader from "../LoginHeader";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../../utils/Constants";
import { useDispatch } from "react-redux";
import { addGptSearchResults } from "../../utils/ReduxStore/moviesSlice";
import GptResults from "./GptResults";
import GptTypeAnimation from "./GptTypeAnimation";

const GptSearch = () => {
  const [aiRes, setAiRes] = useState(true);
  const dispatch = useDispatch();
  const gptSearch = useRef(null);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDyz-FUwS0gHUBn4bA9RH6OrXlfHn-Kqco"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const gptSearchHandleCLick = () => {
    aiFunc();
    gptSearch.current.value = null;
  };

  const fetchSearchAiResultsInDB = async (aiResults) => {
    const fecthResults = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        aiResults +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const data = await fecthResults.json();
    return data.results;
  };

  const aiFunc = async () => {
    try {
      const prompt =
        "Act as a movies or dramas recommendation AI tool and provide a list of titles based on my queries. Only give titles separated by commas, without responding to any other questions." +
        gptSearch.current.value +
        "For movies, show only movies; for dramas, show only dramas. If a specific movie is entered, show only that movie. For searches by language or country, list up to 10 titles. Example query: 'show some good Kannada movies.' Example results: Gaalipata, KGF, Love Mocktail";
      const result = await model.generateContent(prompt);
      const response = result.response;
      console.log(response, "responses");
      const text = response.text();
      const aiResults = text.split(",");
      console.log(aiResults, "aiResults");
      const promisesArray = aiResults.map((aiResult) =>
        fetchSearchAiResultsInDB(aiResult.trim())
      );

      const tmdbResults = await Promise.all(promisesArray);
      // console.log(tmdbResults, "tmdbResults");
      const tmdbResultsFlatten = tmdbResults.flat();
      console.log(tmdbResultsFlatten, "tmdbResultsFlatten");

      const results = [];
      aiResults.forEach((val) => {
        tmdbResultsFlatten.forEach((movie) => {
          if (val.trim().includes(movie.title)) {
            results.push(movie);
          }
        });
      });
      dispatch(addGptSearchResults(results.slice(0, 20)));
      setAiRes(false);
    } catch (error) {
      console.log(error);
      alert("Please retry, as of now my server is busy");
    }
  };

  return (
    <div
      className={`gpt-search-cont bg-[#141414] w-full ${
        aiRes ? "h-screen" : "h-full"
      }`}
    >
      <LoginHeader />
      <div className="gpt-search-inp  py-20 ">
        <GptTypeAnimation />
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center items-center gap-5 "
        >
          <input
            ref={gptSearch}
            className="w-[500px] py-3 px-5 rounded bg-transparent border text-white"
            type="text"
            placeholder="Discover your next favorite with AI recommendations..."
            name="gptSearch"
          />

          <button
            className="search-btn bg-customRed px-16 py-3 rounded text-white "
            onClick={gptSearchHandleCLick}
          >
            Search Movies
          </button>
        </form>
      </div>

      <div>
        <GptResults />
      </div>
    </div>
  );
};

export default GptSearch;
