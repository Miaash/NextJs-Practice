"use client";
import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

// × You're importing a component that needs useRouter. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
// ssr에는 click이벤트 리스너가 없음. 따라서 client component가 되어야함.
export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
