import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import {
  useSliderTrendingList,
  useSliderPopularList,
} from "../../../CustomHooks/useSliderMoviesList";

const BrowsePageSecondary = () => {
  useSliderTrendingList();
  useSliderPopularList();
  const nowTrending = useSelector((store) => store.sliderList?.trendingList);
  const nowPolpular = useSelector((store) => store.sliderList?.popularList);

  return (
    <div className="mv-list absolute top-[648px] bg-custom-gradient w-full">
      <MoviesList title={"Now Trending"} data={nowTrending} />
      <MoviesList title={"Popular on Netflix"} data={nowPolpular} />
    </div>
  );
};

export default BrowsePageSecondary;
