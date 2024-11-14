import aro from "assets/product/aro.jpg";
import jazz from "assets/product/jazz.jpg";
import sinano from "assets/product/sinano.jpg";
import busa from "assets/product/busa.jpg";

const MainProducr = () => {
  const products = [
    {
      title: "부사사과",
      state: "HOT",
      link: "https://smartstore.naver.com/goodmoningfarm/products/11132495734",
    },
    {
      title: "째즈사과",
      state: "매진",
      link: "f",
    },
    {
      title: "사나노골드",
      state: "매진",
      link: "https://smartstore.naver.com/goodmoningfarm/products/11132580584",
    },
    {
      title: "아로니아 사과즙",
      state: "BEST",
      link: "https://smartstore.naver.com/goodmoningfarm/products/5816714650",
    },
  ];
  return (
    <div className="px-[10px] mt-[15px] ">
      <div className="text-[20px] text-gm-brown">대표상품 바로가기</div>
      <div className="grid grid-cols-4 mt-[10px] gap-[5px]">
        {products.map((el) => (
          <a key={el.title} target="_blank" href={el.link} rel="noreferrer">
            <div
              // className={`object-cover w-full aspect-w-1 aspect-h-1
              // border rounded-[10px] border-gm-brown
              // m-auto`}
              className="w-full  aspect-square border rounded-[10px] border-gm-brown overflow-hidden"
            >
              <img
                src={
                  el.title === "부사사과"
                    ? busa
                    : el.title === "째즈사과"
                    ? jazz
                    : el.title === "사나노골드"
                    ? sinano
                    : el.title === "아로니아 사과즙"
                    ? aro
                    : busa
                }
                className="w-full h-full object-cover rounded-[10px]"
                alt={el.title}
              />
            </div>
            <div
              className={`
                    ${
                      el.title === "부사사과"
                        ? "text-[#FF5C67]"
                        : el.title === "째즈사과"
                        ? "text-[#BA4B5B]"
                        : el.title === "사나노골드"
                        ? "text-[#D6B01C]"
                        : el.title === "아로니아 사과즙"
                        ? "text-[#CE84FF]"
                        : "text-purple-500"
                    }
                text-[14px] break-words text-center mt-[4px] flex justify-center items-start leading-tight`}
              style={{ wordBreak: "keep-all" }}
            >
              <span
                className={` top-0 left-0 text-white z-[1] text-[8px] px-[3px] pt-[2px] mr-[4px] rounded-[5px]
                ${
                  el.state === "HOT"
                    ? "bg-red-600 animate-blink"
                    : el.state === "매진"
                    ? "bg-gray-600"
                    : el.state === "BEST"
                    ? "bg-yellow-500"
                    : "bg-yellow-500"
                }
                `}
              >
                {el.state}
              </span>
              <span>{el.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MainProducr;
