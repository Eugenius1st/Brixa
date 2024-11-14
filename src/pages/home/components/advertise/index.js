// hooks
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import firstAD from "assets/advertise/first.jpg";
import secondAD from "assets/advertise/second.jpg";
import thirdAD from "assets/advertise/third.jpg";

// Swiper에 네비게이션 및 페이지네이션 모듈 추가

const Advertise = () => {
  return (
    <Swiper
      spaceBetween={50} // 슬라이드 사이의 간격
      slidesPerView={1} // 한 번에 보여줄 슬라이드 개수
      loop={true} // 루프 설정
      modules={[Navigation, Autoplay]}
      pagination={{ clickable: true }} // 페이지 네이션 옵션
      navigation={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // 자동재생 옵션
      className="h-[300px] mySwiper"
    >
      <SwiperSlide key={"firstAD"}>
        <img
          src={firstAD}
          alt="firstAD"
          className="object-cover w-full h-full"
        />
        <div className="z-[100] text-[20px] fixed top-0 text-white w-full flex-col items-center h-full flex justify-center">
          <div>청년농부가 매일아침</div>
          <div>갓 따온 프리미엄 신선사과</div>
        </div>
      </SwiperSlide>
      <SwiperSlide key={"secondAD"}>
        <img
          src={secondAD}
          alt="secondAD"
          className="object-cover w-full h-full"
        />
        <div className="z-[100] text-[20px] fixed top-0 text-white w-full flex-col items-center h-full flex justify-center">
          <div>성실하고 정직하게</div>
          <div>자연을 그대로를 담아냅니다</div>
        </div>
      </SwiperSlide>
      <SwiperSlide key={"thirdAD"}>
        <img
          src={thirdAD}
          alt="thirdAD"
          className="object-cover w-full h-full"
        />
        <div className="z-[100] text-[20px] fixed top-0 text-white w-full flex-col items-center h-full flex justify-center">
          <div>1962년부터 뿌리깊게 키워낸</div>
          <div>전통있는 예산사과</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Advertise;
