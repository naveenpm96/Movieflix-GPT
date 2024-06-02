import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import useSliderList from "../../../CustomHooks/useSliderMoviesList";

const BrowsePageSecondary = () => {
  useSliderList();
  const nowTrending = useSelector((store) => store.sliderList?.trendingList);
  console.log(nowTrending);

  return (
    <div className="mv-list absolute top-[750px] bg-custom-gradient w-full">
      <MoviesList title={"Now Trending"} data={nowTrending} />
      <MoviesList title={"Now Trending2"} data={nowTrending} />
      <MoviesList title={"Now Trending3"} data={nowTrending} />
      <MoviesList title={"Now Trending4"} data={nowTrending} />
      <MoviesList title={"Now Trending5"} data={nowTrending} />
      <MoviesList title={"Now Trending6"} data={nowTrending} />
      <MoviesList title={"Now Trending7"} data={nowTrending} />
    </div>
  );
};

export default BrowsePageSecondary;
