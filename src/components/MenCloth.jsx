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
      <h1 className="text-4xl font-bold text-gray-800">Men Clothing</h1>
      <h1 className="text-2xl">total cloth: {menClothing.length}</h1>
      <div className="my-8 grid grid-cols-4 gap-10  ">
       {
        menClothing.map((cloth, idx)=>
            <div key={idx} className="card  w-72 shadow-2xl">
            <figure>
              <img
                src={cloth.image}
                alt="image" className="  w-full h-80"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {cloth.title}
              </h2>
              <div className="card-actions">,
                <h1 >Price: {cloth.price}</h1>
                <h1 className=" pt-2 pr-2">discount: {cloth.discount}%</h1>
              </div>
            </div>
          </div>

        )
       }
      </div>
    </div>
  );
};

export default MenCloth;
