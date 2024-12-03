import { useState } from "react";

import aro from "assets/product/aro.jpg";
import jazz from "assets/product/jazz.jpg";
import sinano from "assets/product/sinano.jpg";
import busa from "assets/product/busa.jpg";
import juice from "assets/product/juice.png";
import ProductOptionModal from "components/modal/ProductOptionModal";
const MainProducr = () => {
  const [kind, setKind] = useState("");
  const [productOptModal, setProductOptModal] = useState("");

  const products = [
    {
      title: "부사사과",
      state: "HOT",
      link: "",
      kind: "busa",
    },
    {
      title: "100% 생사과즙",
      state: "HOT",
      link: "https://smartstore.naver.com/goodmoningfarm/products/5816714650",
      kind: "",
    },
    {
      title: "시나노골드",
      state: "준비중",
      link: "",
      kind: "sinano",
    },
    {
      title: "째즈사과",
      state: "준비중",
      link: "",
      kind: "",
    },
  ];
  return (
    <div className="px-[10px] mt-[15px] ">
      <ProductOptionModal
        kind={kind}
        isShow={productOptModal}
        setIsShow={setProductOptModal}
      />
      <div className="text-[20px] text-gm-brown">대표상품 바로가기</div>
      <div className="grid grid-cols-4 mt-[10px] gap-[5px] font-sans font-bold">
        {products.map((el) => (
          <a
            key={el.title}
            target="_blank"
            {...(el.link ? { href: el.link } : {})} // el.link가 있을 때만 href를 설정
            rel="noreferrer"
          >
            <div
              onClick={() => {
                if (!el.link && el.kind) {
                  setKind(el.kind);
                  setProductOptModal(!productOptModal);
                }
              }}
              className="w-full  aspect-square border rounded-[10px] border-gm-brown overflow-hidden

              "
            >
              <img
                src={
                  el.title === "부사사과"
                    ? busa
                    : el.title === "째즈사과"
                    ? jazz
                    : el.title === "시나노골드"
                    ? sinano
                    : el.title === "아로니아 사과즙" ||
                      el.title === "100% 생사과즙"
                    ? juice
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
                        : el.title === "시나노골드"
                        ? "text-[#D6B01C]"
                        : el.title === "아로니아 사과즙"
                        ? "text-[#CE84FF]"
                        : "text-purple-500"
                    }
                text-[14px] break-words text-center mt-[4px]  justify-center items-start leading-tight`}
              style={{ wordBreak: "keep-all" }}
            >
              <div
                className={`w-fit text-white z-[1] text-[10px] px-[3px] mr-[4px] rounded-[4px]
                ${
                  el.state === "HOT"
                    ? "bg-red-600 animate-blink"
                    : el.state === "준비중" || el.state === "매진"
                    ? "bg-gray-600"
                    : el.state === "BEST"
                    ? "bg-yellow-500"
                    : "bg-yellow-500"
                }
                `}
              >
                {el.state}
              </div>
              <span>{el.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MainProducr;
