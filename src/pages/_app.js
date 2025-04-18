import "@/styles/globals.css";
import Header from "@/components/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="mt-[50px]">
        <Component {...pageProps} />;
      </div>
    </>
  );
}
