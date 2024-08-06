// Dynamic routingd

import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
// import { API_URL } from "../../../page";

// async function getMovie(id: string) {
//   console.log(`Fetching movies: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

interface IParamsType {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParamsType) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParamsType) {
  // console.log("====================");
  // console.log("start fetching");
  // 1. 동기적으로 동작. 10초 걸림
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  // 2. 비동기적으로 동작. 5초 걸림
  // const [movies, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // console.log("end fetching");
  // return <h1>{movies.title}</h1>;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

// Suspense 컴포넌트로 감싸면 데이터를 fetch하기 위해 내부의 컴포넌트를 await함.
// 그동안 fallback props로 받은 ui 보여줌. => 서스펜스용 컴포넌트일 수 있음.
// Loading page는 페이지 단위로 로딩을 보여준다면. (데이터를 가져오기전까지)
// Suspense는 서버 컴포넌트단위로 데이터를 가져오기 전까지 과정을 대신해서 보여줌.
