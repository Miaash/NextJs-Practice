import "../styles/global.css";
import Navigation from "../components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <div>this is header</div> */}
        <Navigation />
        {children}
        {/* <div>this is footer</div> */}
      </body>
    </html>
  );
}

// 현재 레이아웃 구조
{
  /* <Layout>
  <AboutUsLayout>
    <Sales/>
  </AboutUsLayout>
</Layout> */
}
