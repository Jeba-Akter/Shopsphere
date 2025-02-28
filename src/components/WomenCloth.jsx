import { useEffect, useState } from "react";

const WomenCloth = () => {
  const [womenclothing, setwomenclothing] = useState([]);
  useEffect(() => {
    fetch("/womenClothing.json")
      .then((res) => res.json())
      .then((data) => setwomenclothing(data));
  }, []);
  console.log(" this is a women cloth:", womenclothing);
  return (
    <div className=" w-11/12 m-auto">
      <h1 className=" text-2xl font-bold">women clothing</h1>
      <h1 className=" text-xl font-bold">
        total cloth: {womenclothing.length}{" "}
      </h1>
      <div className=" grid grid-cols-4 gap-10 py-10 ">
        {womenclothing.map((cloth, idx) => (
          <div
            key={idx}
            className="card card-compact bg-base-100  shadow-xl "
          >
            <figure>
              <img
              src={cloth.image}
                alt="image" className="w-full h-72"
              />
            </figure>
            <div className="card-bod ">
              <h2 className="card-title ">
                {cloth.title}
              </h2>
              <div className="card-actions capitalize">
                <h1>price: {cloth.price}</h1> <br />
                <h1 className="pt-2">discount: {cloth.discount}%</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCloth;
