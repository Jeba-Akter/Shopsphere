import { LuSquareArrowRight } from "react-icons/lu";
import { IoLockOpenOutline } from "react-icons/io5";

const Navber1 = () => {
  return (
    <div>
      <div className="navbar bg-gray-800 text-white">
        <div className="flex-1">
          <div className="flex-none ">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <details>
                  <summary className=" hover:text-yellow-500 ">English</summary>
                  <ul className="bg-base-100 rounded-t-none p-2 text-black">
                    <li className=" hover:text-yellow-500">
                      <a>English</a>
                    </li>
                    <li className=" hover:text-yellow-500">
                      <a>French</a>
                    </li>
                    <li className=" hover:text-yellow-500">
                      <a>German</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className=" flex items-center gap-5">
            <div className="flex-none ">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary className=" hover:text-yellow-500 border-x-2 rounded-none">
                      USD
                    </summary>
                    <ul className="bg-base-100 rounded-t-none p-2 text-black">
                      <li className=" hover:text-yellow-500">
                        <a>USD</a>
                      </li>
                      <li className=" hover:text-yellow-500">
                        <a>INP</a>
                      </li>
                      <li className=" hover:text-yellow-500">
                        <a>GBP</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <ul>
              <li>
                <a className=" hover:text-yellow-500">Welcome to Ecommerce</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <details>
                <summary className=" hover:text-yellow-500 capitalize border-r-2 rounded-none">
                  my account
                </summary>

                <ul className="bg-base-100 rounded-t-none p-2 text-black">
                  <li className=" hover:text-yellow-500">
                    <a>MyAccount</a>
                  </li>
                  <li className=" hover:text-yellow-500">
                    <a>Wsihlist</a>
                  </li>
                  <li className=" hover:text-yellow-500">
                    <a>Shopping</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className=" hover:text-yellow-500 border-r-2 rounded-none ">
                Wsihlist
              </a>
            </li>
            <div className=" flex border-r-2">
              <a className=" items-center text-xl pt-2 pl-2">
                <LuSquareArrowRight />
              </a>
              <li>
                <a className=" hover:text-yellow-500">checkout</a>
              </li>
            </div>
            <div className=" flex">
              <a className=" items-center text-xl pt-2 pl-2">
                <IoLockOpenOutline />
              </a>
              <li>
                <a className=" hover:text-yellow-500 capitalize"> login</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber1;
