import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import "./single.css";
const Country = () => {
  const router = useRouter();
  const { name } = router.query;
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (name) {
      fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((Response) => Response.json())
        .then((data) => {
          setCountry(data[0]);
        })
        .catch(() => {
          alert("COUNTRY NOT FOUND");
        });
    }
setTimeout(()=>{
  setLoading(false);
},1000)
    
  }, [name]);<div className=""></div>

  return (
    <div className="bg-white-800 h-[100vh]  flex justify-center items-center ">
      {loading ? (
        <div class="relative flex justify-center items-center">
        <div class="absolute animate-spin rounded-full h-30 w-30 border-t-4 border-b-4 border-blue-500"></div>
        <img src="https://cdn.pixabay.com/photo/2016/06/14/20/38/planet-earth-1457453_640.png"  class="rounded-full h-30 w-30"/>
    </div>
      ) : (
        <div className=" border-1 h-fit  w-fit flex justify-center items-center shadow-2xl border-black gap-3 p-4 rounded-2xl font-serif ">
          <div className="">
            <h1 className="text-center">{country?.name?.common ?? "temp"}</h1>
            <img src={country?.flags?.png}  className=" rounded-2xl h-[200px] w-[200px]"/>
            </div>
            <div>
            <p>
              <strong>Capital:</strong> {country?.capital}
            </p>
            <p>

              <strong>Region:</strong> {country?.region}
            </p>
            <p>
              <strong>Population:</strong> {country?.population}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
