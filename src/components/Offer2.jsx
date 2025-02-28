
const Offer2 = () => {
    return (
        <div>
            <div className=" mb-20 w-11/12 m-auto flex flex-col md:flex-row gap-10">
            <div
          className="hero w-[600px] h-52 "
          style={{
            backgroundImage:
              "url(https://demoxml.com/html/ecom/images/main-prd1.png",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>

          <div className=" hover:border-none border-2 border-white pt-5 pb-2 px-40">
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <p className="mt-16 font-bold text-2xl uppercase">top callection</p>
                <h1 className=" font-bold text-xl capitalize">
                  new callection for man
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero w-[600px] h-52 "
          style={{
            backgroundImage:
              "url(https://demoxml.com/html/ecom/images/main-prd2.png",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>

          <div className=" hover:border-none border-2 border-white pt-5 pb-2 px-40">
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <p className="mt-16 font-bold text-2xl uppercase">Trends for girls
</p>
                <h1 className=" font-bold text-xl capitalize">
                Accessories collection

                </h1>
              </div>
            </div>
          </div>
        </div>
            </div>
        </div>
    );
};

export default Offer2;