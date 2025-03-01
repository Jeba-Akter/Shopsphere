import { useEffect, useState } from "react";

const BoyesShoes = () => {
  const [BoyesShoes, setBoyesShoes] = useState([]);
  useEffect(() => {
    fetch("/boyesShoes.json")
      .then((res) => res.json())
      .then((data=> setBoyesShoes(data)));
  }, []);

  return (
    <div className=" w-11/12 m-auto mt-10">
        <h1 className=" font-bold  text-4xl pt-5"> Boyes Shoes </h1>
        <h1 className=" text-2xl pb-5 ">total:{BoyesShoes.length}</h1>
      <div className="grid grid-cols-4 gap-10">
        {BoyesShoes.map((Shoes, idx) => (
          <div key={idx} className="card bg-base-100 w-72 shadow-2xl ">
            <figure>
              <img
                src={Shoes.image}
                alt="Shoes" className=" h-80 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{Shoes.title}</h2>
              <p>
               Price: {Shoes.price}
              </p>
              <div className="card-actions justify-end">
                <button className=" py-2 px-4 bg-orange-500 hover:bg-orange-600 rounded-3xl text-white">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoyesShoes;
