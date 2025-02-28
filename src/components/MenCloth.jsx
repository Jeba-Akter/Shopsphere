import { useEffect, useState } from "react";

const MenCloth = () => {
    const [menClothing, setMenClothing] = useState([])

    useEffect(()=>{
        fetch('/menClothing.json')
        .then((res)=> res.json())
        .then(data=>setMenClothing(data))
    },[])

    // console.log('this is a men cloth:',menClothing)
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">Men Clothing</h1>
      <h1 className="text-4xl">total cloth: {menClothing.length}</h1>
      <div className="my-8 grid grid-cols-4 gap-5  ">
       {
        menClothing.map((cloth, idx)=>
            <div key={idx} className="card bg-gray-200 w-72 shadow-xl">
            <figure>
              <img
                src={cloth.image}
                alt="image" className=" bg-slate-400 w-full h-80"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {cloth.title}
              </h2>
              <div className="card-actions">,
                <h1 >Price: {cloth.price}</h1>
              </div>
              <h1>discount: {cloth.discount}%</h1>
            </div>
          </div>

        )
       }
      </div>
    </div>
  );
};

export default MenCloth;
