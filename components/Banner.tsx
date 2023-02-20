import { useState, useEffect } from "react";
import Image from "next/image";
import { baseUrl } from "../constants/movie";
import { Movie } from "../types";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modelAtom";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  const truncateString = (str = '', length = 150) => {
    if (str?.length > length) {
      return str.slice(0, length) + '...';
    } else {
      return str;
    }
  };

  return (
    <div
      className='flex flex-col space-y-2 py-16 md:space-y-4 
    lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 h-[95vh] w-screen -z-10'>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>

      <div className='flex space-x-3'>
        <button className='bannerButton bg-white text-black'>
          <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' />
          Play
        </button>
        <button
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
          className='bannerButton bg-[gray]/70'>
          More Info <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8' />
        </button>
      </div>
      <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
        {truncateString(movie?.overview, 150)}
      </p>
    </div>
  );
};
export default Banner;
