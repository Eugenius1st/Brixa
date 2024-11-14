// images
import review1 from "assets/review/review1.jpg";
import review2 from "assets/review/review2.jpg";
import review3 from "assets/review/review3.jpg";
import review4 from "assets/review/review4.png";
import review5 from "assets/review/review5.png";
// icons
import { FaStar } from "react-icons/fa6";

const MainProducr = () => {
  const images = [review1, review2, review3, review4, review5];
  const products = [
    {
      title: "상큼한 골드사과후기",
      name: "장*희",

      describe: `굿모닝 농장에서 시나노골드를 먹어봤는데, 당도가 정말 높아서 깜짝 놀랐어요!
                아삭아삭 씹히는 식감에 상큼함이 더해져서 너무 맛있었어요.
                자연 친화적으로 키웠다던데, 정성이 느껴지는 사과였어요.`,
    },
    {
      title: "사과즙구매",
      name: "안*진",

      describe: `사과즙 정말 맛있네요! 자연 그대로의 맛이 느껴지고, 달콤함도 딱 적당해요.
                아이들도 좋아하고, 건강하게 마실 수 있어 만족스러워요.
                사과에 대한 장인정신이 느껴지는 제품이에요.`,
    },
    {
      title: "째즈후기",
      name: "한*희",

      describe: `처음 먹어본 째즈 사과, 진짜 물리지 않네요!
                아삭아삭하면서도 단단한 식감 덕분에 씹는 재미가 있어요.
                끝까지 신선하게 먹을 수 있어서 너무 좋았어요.`,
    },
    {
      title: "노랑 사과 후기",
      name: "서*은",
      describe: `노란 사과는 상큼한 향이 입안 가득 퍼지는데, 당도도 높아서 정말 맛있더라고요!
                굿모닝 농장 사과는 오래 두어도 신선함이 유지되는 게 확실히 다르네요.
                자연 친화적으로 키운 게 느껴지는 정성 가득한 사과예요.`,
    },
    {
      title: "미친당도 사과",
      name: "서*영",
      describe: `진짜 달달한 미친당도 사과, 너무 맛있어요! 아삭하고 단단한 식감 덕분에 하나 다 먹어도 또 먹고 싶어요.
                매번 먹을 때마다 신선해서 만족스럽고, 자연 친화적인 재배 방식도 마음에 듭니다.
                정말 특별한 사과예요!`,
    },
  ];

  return (
    <div className="mt-[10px] slide-container">
      <div className="text-[20px] text-gm-brown px-[10px]">후기</div>
      <div className="slide-track">
        {products.map((el, idx) => (
          <div
            key={el.title}
            className="flex-shrink-0 border  w-[16rem] flex-col flex-grow-0 drop-shadow-sm m-2 bg-white items-center flex rounded-[5px] p-3 text-sm"
          >
            <img
              src={images[idx % 5]}
              className="w-full h-[12rem] object-cover rounded-[5px]"
              alt={el.title}
            />
            <div className="text-red-500 flex text-start w-full mt-[4px]">
              <FaStar className="w-[20px] h-[20px]" />
              <FaStar className="w-[20px] h-[20px]" />
              <FaStar className="w-[20px] h-[20px]" />
              <FaStar className="w-[20px] h-[20px]" />
              <FaStar className="w-[20px] h-[20px]" />
            </div>
            <div className="text-start w-full text-green-700 mt-[4px]">
              {el.name}
            </div>
            <div className="text-start w-full ">{el.title}</div>
            <div className="text-start w-full text-gray-600 line-clamp-4">
              {el.describe}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProducr;
