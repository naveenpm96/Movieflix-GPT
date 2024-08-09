import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import {
  useSliderTrendingList,
  useSliderPopularList,
  useTopRatedList,
} from "../../../CustomHooks/useSliderMoviesList";

const BrowsePageSecondary = () => {
  useSliderTrendingList();
  useSliderPopularList();
  useTopRatedList();
  const nowTrending = useSelector((store) => store.sliderList?.trendingList);
  const nowPolpular = useSelector((store) => store.sliderList?.popularList);
  const topRated = useSelector((store) => store.sliderList?.topRatedList);
  console.log(topRated, "topRated");

  return (
    <div className="mv-list absolute top-[648px] bg-custom-gradient w-full">
      <MoviesList title={"Now Trending"} data={nowTrending} />
      <MoviesList title={"Popular on Netflix"} data={nowPolpular} />
      <MoviesList title={"Top Rated on Netflix"} data={topRated} />
    </div>
  );
};

export default BrowsePageSecondary;
