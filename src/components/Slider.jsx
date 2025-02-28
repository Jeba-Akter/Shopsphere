import React, {  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 z-10"
      >
        <SwiperSlide>
          <img className=" w-full h-[500px] object-cover" src="https://www.beshideshi.com/wp-content/uploads/2023/10/03-3-600x600.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[500px] object-cover"  src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[500px] object-cover" src="https://media.istockphoto.com/id/2183606461/photo/man-dressing-up-in-front-of-mirror.jpg?s=1024x1024&w=is&k=20&c=5QHM3LODNsAWHxNSFKXSf2TUtuNH0ij3-QYMeTMz7QA=" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1584521517269-0aba29c53945?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1581704796812-e718e27d2f35?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1569810020669-aa9d38003ea7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[500px] object-cover" src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=" w-full h-[100px] object-cover" src="https://www.beshideshi.com/wp-content/uploads/2023/10/03-3-600x600.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[100px] object-cover" src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[100px] object-cover" src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[100px] object-cover" src="https://media.istockphoto.com/id/2183606461/photo/man-dressing-up-in-front-of-mirror.jpg?s=1024x1024&w=is&k=20&c=5QHM3LODNsAWHxNSFKXSf2TUtuNH0ij3-QYMeTMz7QA=" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[100px] object-cover" src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[100px] object-cover" src="https://images.unsplash.com/photo-1584521517269-0aba29c53945?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[100px] object-cover" src="https://images.unsplash.com/photo-1581704796812-e718e27d2f35?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[100px] object-cover" src="https://images.unsplash.com/photo-1569810020669-aa9d38003ea7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[100px] object-cover" src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-[100px] object-cover" src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
