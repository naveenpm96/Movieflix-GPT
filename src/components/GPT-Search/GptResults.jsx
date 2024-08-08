import { useSelector } from "react-redux";
import { SLIDER_IMG_URL } from "../../utils/Constants";

const GptResults = () => {
  const moviesSuggestion = useSelector((store) => store.movies?.gptSearch);
  console.log(moviesSuggestion, "moviesSuggestion");
  return (
    <>
      <div className="gpt-resp-cont flex flex-wrap gap-5 items-center pl-10 ">
        {moviesSuggestion &&
          moviesSuggestion?.map(
            (res) =>
              res?.poster_path && (
                <div className="gpt-res-cont " key={res.id}>
                  <div className="gpt-resp ">
                    <img
                      className="w-56 h-72 rounded"
                      src={SLIDER_IMG_URL + res?.poster_path}
                      alt=""
                    />
                  </div>
                  <div className="text-white py-2 text-sm text-wrap overflow-hidden">
                    <label htmlFor="">Original Language</label> :
                    <span>{res.original_language}</span>
                  </div>
                </div>
              )
          )}
      </div>
    </>
  );
};

export default GptResults;
