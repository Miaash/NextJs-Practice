"use client"; // server rendering -> backend에서 render & frontend에서 hydrate 및 interactive됨.
// "use client" 키워드를 사용하지 않는 페이지 또는 컴포넌트는 기본적으로 server components.
// 결론적으로 두 키워드 모두 server에서 렌더링 되지만 "use client"의 경우, server rendering 후 변경 사항만 frontend에서 csr한다.
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname(); // client components에서 사용.
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "👈" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "👈" : ""}
        </li>
      </ul>
    </nav>
  );
}
