

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import './country.css';


const Main = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error("network error");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        alert("YOUR API IS INVALID");
      });
  }, []);

  const handleClick = useCallback((country) => {
    router.push({
      pathname: '/singlecountry',
      query: { name: country.name.common }
    });
  }, [router]);

  
  const filteredData = data.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=' h-fit'>
      <div className='w-full'>
        <div className='p-4 flex justify-end  '>
          <input
          className='border-2 px-2 rounded-md'
            type="text"
            placeholder='search country name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='w-fit mx-auto grid grid-cols-4 gap-6 '>
          {filteredData.map((country) => (
            <div className=' h-[200px] w-[300px] border-1 flex flex-col justify-between items-center rounded-md shadow-xl border-white-900  cursor-pointer  transition-transform duration-300 hover:scale-105' key={country} onClick={() => handleClick(country)}>
              <img src={country.flags.png} alt={country.name.commonn} className='h-[150px] w-[300px]  pt-0 ' />
              <span>{country.name.common}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
