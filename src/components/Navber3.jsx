const Navber3 = () => {
  return (
   <div className="  bg-white sticky top-0 z-20">
     <div className="w-11/12  flex border-2 border-gray-200 mx-auto justify-between ">
      <div className="flex   ">
        <ul className="menu menu-horizontal px-1 z-50">
          <li>
            <details>
              <summary className=" uppercase text-lg font-bold bg-orange-500 hover:bg-orange-500 pr-32 hover:bg-none text-white py-4  rounded-none ">
                Categories
              </summary>
              <ul className=" rounded-t-none  text-gray-500  ">
                <li className=" hover:text-yellow-500 capitalize border-b-2 py- pr-36 border-gray-200">
                  <a>fashion</a>
                </li>
                <li className=" hover:text-yellow-500 capitalize border-b-2 py- border-gray-200">
                  <a>watches</a>
                </li>
                <li className=" hover:text-yellow-500 capitalize border-b-2 py- border-gray-200">
                  <a>house wheres</a>
                </li>
                <li className=" hover:text-yellow-500 capitalize border-b-2 py-2 border-gray-200">
                  <a>desktop & monitor</a>
                </li>
                <li className=" hover:text-yellow-500 capitalize border-b-2 py-2 border-gray-200">
                  <a>smartphones</a>
                </li>
                <li className=" hover:text-yellow-500 capitalize border-b-2 py-2 border-gray-200">
                  <a>laptop & tablates</a>
                </li>
                <li className=" hover:text-yellow-500 capitalize border-b-2 py-2 border-gray-200">
                  <a>sund & audio</a>
                </li>
                <li className=" hover:text-yellow-500 capitalize border-b-2 py-2 border-gray-200">
                  <a>health & madicel</a>
                </li>
                <li className=" hover:text-yellow-500 capitalize border-b-2 py-2 border-gray-200">
                  <a>gym equipements</a>
                </li>
                <li className="text-yellow-500 capitalize underline">
                  <a>view all catagoris</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <div className="flex ml-10  ">
          <div className=" z-40 ">
            <ul className="menu menu-horizontal  items-center uppercase ">
              <li>
                <details>
                  <summary className=" hover:text-orange-500 pt-6 ">
                    home
                  </summary>
                  <ul className="  text-white rounded-none  bg-orange-500  ">
                    <li className=" hover:text-yellow-500 pr-16  hover:bg-slate-600  ">
                      <a className="">hometwo</a>
                    </li>
                    <li className=" hover:text-yellow-500   hover:bg-slate-600   ">
                      <a>homethree</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className=" z-40">
            <ul className="menu menu-horizontal px-1 items-center uppercase">
              <li>
                <details>
                  <summary className=" hover:text-orange-500 pt-6 ">
                    pages
                  </summary>
                  <ul className="  text-white rounded-none  bg-orange-500 ">
                    <li className=" hover:text-yellow-500  pr-32 hover:bg-slate-600    p-2">
                      <a className="">chackout</a>
                    </li>
                    <li className=" hover:text-yellow-500  pr-16  hover:bg-slate-600   p-2 ">
                      <a>product-list</a>
                    </li>
                    <li className=" hover:text-yellow-500  pr-16  hover:bg-slate-600 p-2 ">
                      <a>profile</a>
                    </li>
                    <li className=" hover:text-yellow-500  pr-16  hover:bg-slate-600 p-2 ">
                      <a>search rasult</a>
                    </li>
                    <li className=" hover:text-yellow-500  pr-16  hover:bg-slate-600 p-2 ">
                      <a>single product</a>
                    </li>
                    <li className=" hover:text-yellow-500  pr-16  hover:bg-slate-600   p-2 ">
                      <a>wish list</a>
                    </li>
                    <li className=" hover:text-yellow-500  pr-16  hover:bg-slate-600   p-2 ">
                      <a>404</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className=" pt-8 pl-5 uppercase hover:text-orange-500 text-sm">
            <h1> About us</h1>
          </div>
          <div className=" pt-8 pl-5 uppercase hover:text-orange-500 text-sm">
            <h1>man</h1>
          </div>
          <div className=" pt-8 pl-5 uppercase hover:text-orange-500 text-sm">
            <h1>woman</h1>
          </div>
          <div className=" pt-8 pl-5 uppercase hover:text-orange-500 text-sm">
            <h1> contact us</h1>
          </div>
        </div>
      </div>
      <div className=" flex ">
        <div className=" pt-8 px-10  mb-2 capitalize text-white hover:text-yellow-600 text-sm  bg-slate-600  ">
          <h1>my cat</h1>
        </div>
        <div className=" pt-8 px-5  mb-2 capitalize text-white hover:text-yellow-600 text-sm  bg-orange-500 ">
          <h1>2</h1>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Navber3;
