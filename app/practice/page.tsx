// 1. client side
// "use client";
// import { useEffect, useState } from "react";

import Link from "next/link";
import { resolve } from "styled-jsx/css";
import { API_URL } from "../constants";

// export default function Page() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const res = await fetch(
//       "https://nomad-movies.nomadcoders.workers.dev/movies"
//     );
//     const json = await res.json();
//     setMovies(json);
//     setIsLoading(true);
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);
//   return <div>{isLoading ? JSON.stringify(movies) : "Loading...."}</div>;
// }

// // 2. server side

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

// Next Js가 이 컴포넌트에서 await해야함
export default async function PracticePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}

// 1. 처음에 Loading페이지를 렌더링해서 보여줌
// 2. 기다리고 있던 Homepage의 HTML결과를 기다림
// 3. 그러다가 로딩상태면 로딩컴포넌트를 보여주고 아니면 HTML을 보여줌
{
  /* <Loading />
const html = await HomePage()
isLoading ? <Loading /> : html */
}
