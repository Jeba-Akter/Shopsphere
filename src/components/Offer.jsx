const Offer = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row gap-5 w-11/12 mx-auto py-20">
        <div
          className="hero w-[400px] h-72 "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>

          <div className=" hover:border-none border-2 border-white pt-24 pb-2 px-8">
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <p className="mt-16 font-bold text-3xl uppercase">Men watches</p>
                <h1 className=" font-bold text-xl capitalize">
                  Collection instore and online
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero w-[400px] h-72 "
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMVti1j_ObDezratJKtf6RljOYLSFybSbog&s",
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>

          <div className=" hover:border-none  border-2 border-white pt-24 pb-2 px-6">
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <p className="mt-16 font-bold text-3xl uppercase">Shoes for women</p>
                <h1 className=" font-bold text-xl">
                Summer collection 2015
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero w-[400px] h-72 "
          style={{
            backgroundImage:
              "url(https://5.imimg.com/data5/ANDROID/Default/2022/2/ES/OQ/HX/73718625/product-jpeg-500x500.jpg",
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>

          <div className=" hover:border-none  border-2 border-white pt-24 pb-2 px-20">
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <p className="mt-16 font-bold text-3xl uppercase">Men shoes</p>
                <h1 className=" font-bold text-xl capitalize">
                Sale up to 50% off
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
