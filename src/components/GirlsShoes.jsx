import { useEffect, useState } from "react";

const GirlsShoes = () => {
  const [girlsShoes, setgirlsShops] = useState([]);
  useEffect(() => {
    fetch("/girlsShoes.json")
      .then((res) => res.json())
      .then((data) => setgirlsShops(data));
    // console("this is girlsShoes:", girlsShoes);
  }, []);

  return (
    <div className=" w-11/12 m-auto my-20">
      <h1 className=" capitalize text-3xl font-bold pt-5">GirlsShoes</h1>
      <h1 className=" capitalize text-3xl font-bold pb-5">Shoes:{girlsShoes.length}</h1>

      <div className="  grid  grid-cols-4 gap-10">
        {girlsShoes.map((Shoes, idx) => (
          <div key={idx} className="card bg-base-100 w-72  shadow-2xl">
            <figure>
              <img
                src={Shoes.image}
                alt="image"
                className=" w-full  h-[300px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{Shoes.title} </h2>

              <div className="card-actions justify-start"></div>
              <h2 className="card-title"> Price: {Shoes.price} </h2>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GirlsShoes;
