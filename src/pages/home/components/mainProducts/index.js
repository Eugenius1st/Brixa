import aro from "assets/product/aro.jpg";
import jazz from "assets/product/jazz.jpg";
import sinano from "assets/product/sinano.jpg";
import busa from "assets/product/busa.jpg";

const MainProducr = () => {
  const products = [
    {
      title: "부사사과",
      state: "NEW",
      link: "https://smartstore.naver.com/goodmoningfarm/products/5816714650?nl-query=%EA%B5%BF%EB%AA%A8%EB%8B%9D%20%EB%86%8D%EC%9E%A5&NaPm=ci%3D62909c08b65d425d9a1e7ea2a1cb996b%7Cct%3Dm39zk17k%7Ctr%3Dnslsl%7Csn%3D1787656%7Chk%3D4f019efc509a6354f8be7c2957c6da150f1859cf",
    },
    {
      title: "째즈사과",
      state: "SOLD OUT",
      link: "https://smartstore.naver.com/goodmoningfarm/products/5816714650?nl-query=%EA%B5%BF%EB%AA%A8%EB%8B%9D%20%EB%86%8D%EC%9E%A5&NaPm=ci%3D62909c08b65d425d9a1e7ea2a1cb996b%7Cct%3Dm39zk17k%7Ctr%3Dnslsl%7Csn%3D1787656%7Chk%3D4f019efc509a6354f8be7c2957c6da150f1859cf",
    },
    {
      title: "사나노골드",
      state: "SOLD OUT",
      link: "https://smartstore.naver.com/goodmoningfarm/products/5816714650?nl-query=%EA%B5%BF%EB%AA%A8%EB%8B%9D%20%EB%86%8D%EC%9E%A5&NaPm=ci%3D62909c08b65d425d9a1e7ea2a1cb996b%7Cct%3Dm39zk17k%7Ctr%3Dnslsl%7Csn%3D1787656%7Chk%3D4f019efc509a6354f8be7c2957c6da150f1859cf",
    },
    {
      title: "아로니아사과즙",
      state: "BEST",
      link: "https://smartstore.naver.com/goodmoningfarm/products/5816714650?nl-query=%EA%B5%BF%EB%AA%A8%EB%8B%9D%20%EB%86%8D%EC%9E%A5&NaPm=ci%3D62909c08b65d425d9a1e7ea2a1cb996b%7Cct%3Dm39zk17k%7Ctr%3Dnslsl%7Csn%3D1787656%7Chk%3D4f019efc509a6354f8be7c2957c6da150f1859cf",
    },
  ];
  return (
    <div className="px-[10px] mt-[15px] ">
      <div className="text-[20px] text-brixa-brown">대표상품</div>
      <div className="grid grid-cols-4 mt-[10px] gap-[5px]">
        {products.map((el) => (
          <a key={el.title} target="_blank" href={el.link} rel="noreferrer">
            <div
              // className={`object-cover w-full aspect-w-1 aspect-h-1
              // border rounded-[10px] border-brixa-brown
              // m-auto`}
              className="w-full  aspect-square border rounded-[10px] border-brixa-brown overflow-hidden"
            >
              <img
                src={
                  el.title === "부사사과"
                    ? busa
                    : el.title === "째즈사과"
                    ? jazz
                    : el.title === "사나노골드"
                    ? sinano
                    : el.title === "아로니아사과즙"
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
                        : el.title === "아로니아사과즙"
                        ? "text-[#CE84FF]"
                        : "text-purple-500"
                    }
                text-[14px] break-words text-center mt-[4px] flex justify-center items-center`}
              style={{ wordBreak: "keep-all" }}
            >
              <span
                className={` top-0 left-0 text-white z-[1] text-[8px] px-[5px] pt-[2px] mr-[4px] rounded-[5px]
                ${
                  el.state === "NEW"
                    ? "bg-red-600"
                    : el.state === "SOLD OUT"
                    ? "bg-gray-600"
                    : el.state === "BEST"
                    ? "bg-yellow-500"
                    : "bg-gray-600"
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
