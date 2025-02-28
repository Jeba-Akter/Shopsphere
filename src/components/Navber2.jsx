import { AiOutlineLaptop } from "react-icons/ai";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Navber2 = () => {
  return (
    <div>
      <div className="navbar bg-base-100 my-5 w-11/12 m-auto z-50">
        <div className="flex-1">
          <div className=" flex items-center">
            <div className=" text-[80px] ">
              <a>
                <AiOutlineLaptop />
              </a>
            </div>
            <div>
              <a className=" font-bold text-2xl">E-Com shop</a>
              <p className=" text-sm text-gray-400">shopping made easy</p>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex border-2 border-gray-100 ">
            <div className="flex-none bg-gray-507  ">
              <ul className="menu menu-horizontal px-1 z-50 ">
                <li className=" z-50">
                  <details>
                    <summary className=" capitalize text-sm  ">all categoris</summary>
                    <ul className="bg-base-100 rounded-t-none pl-2 text-gray-500  ">
                      <li className=" hover:text-yellow-500 capitalize">
                        <a>fashion</a>
                      </li>
                      <li className=" hover:text-yellow-500 capitalize">
                        <a>watches</a>
                      </li>
                      <li className=" hover:text-yellow-500 capitalize">
                        <a>house wheres</a>
                      </li>
                      <li className=" hover:text-yellow-500 capitalize">
                        <a>desktop</a>
                      </li>
                      <li className=" hover:text-yellow-500 capitalize">
                        <a>smartphones</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search here....."
                className="pr-32 py-3 border-2 hover:border-black md:w-auto border-x-none"
              />
            </div>
            <div className=" items-center flex hover:bg-orange-500  px-5  bg-gray-800">
              <a className=" text-white">
                {" "}
                <MdCheckBoxOutlineBlank />{" "}
              </a>
            </div>
           
          </div>
          <div className="  py-1 pr-2 ml-4  bg-slate-800 ">
              <a className=" font-bold text-sm uppercase hover:text-yellow-600 text-white">call us free</a>
              <p className=" text-sm hover:text-yellow-600 text-white">01760041125</p>
            </div>
        </div>
        </div>
       
    </div>
  );
};

export default Navber2;
