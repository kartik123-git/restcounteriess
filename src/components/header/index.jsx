import Link from "next/link";

const Header = () => {
  return (
    <div className=" w-full h-[50px] bg-[#24252a] flex justify-between  items-center text-white pl-8 top-0 z-100  fixed text-2=1xl font-semibold shadow-2xl " >
      <div className=" flex gap-2">
        <img src="https://static.vecteezy.com/system/resources/previews/050/479/053/non_2x/earth-s-oceans-and-continents-detailed-view-cut-out-stock-png.png"  alt="earth" className="rounded-full h-[20px]"></img><h1>COUNTRIES</h1></div>
      <div className="flex  gap-8 pr-8 text-sm ">
       <div className=""><Link href="">ABOUT </Link></div>
        <div><Link href="/countries">PROJECTS</Link></div>
        <div><Link href="/shoping">SHOPING</Link></div>
      </div>
    </div>
  );
};
export default Header;
