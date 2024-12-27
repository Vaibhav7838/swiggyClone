import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Restaurant from "./component/Restaurant";

const App = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setsearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6592464429863&lng=77.1198408678174&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantData(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log("fitler",filteredData)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='p-5 lg:px-20 py-10'>
      <Navbar />
      <div className='py-10 flex gap-20 justify-center'>
        <div className='flex'>
          <input
            type='text'
            className='rounded-l-lg border-l border-t border-b py-1 px-2'
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const searchFillteredData = restaurantData?.filter((item) =>
                item?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredData(searchFillteredData);
            }}
            className='border px-5 bg-gray-100'
          >
            search
          </button>
        </div>
        <div>
          <button
            className='border px-5 py-1 rounded-lg bg-gray-100'
            onClick={() => {
              const fillteredList = restaurantData.filter(
                (resp) => resp?.info?.avgRating > 4.5
              );
              setFilteredData(fillteredList);
            }}
          >
            Top Restaurant Above 4.5
          </button>
        </div>
      </div>
      <div className='grid grid-cols-2 w-full lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 lg:gap-10'>
        {filteredData?.map((item) => {
          return <Restaurant resp={item?.info} />;
        })}
      </div>
    </div>
  );
};

export default App;
