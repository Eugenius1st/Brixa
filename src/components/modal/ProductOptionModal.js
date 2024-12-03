import busaRed10 from "assets/thumbnail/busaRed10.png";
import busaRed5 from "assets/thumbnail/busaRed5.png";
import sinano10 from "assets/thumbnail/sinano10.png";
import sinano5 from "assets/thumbnail/sinano5.png";
import { useEffect, useState } from "react";

const ProductOptionModal = ({ kind, isShow = false, setIsShow }) => {
  console.log(kind, isShow);
  const busaOpt = [
    {
      title: "부사사과 5kg",
      img: busaRed5,
      link: "https://smartstore.naver.com/goodmoningfarm/products/11132495734",
    },
    {
      title: "부사사과 10kg",
      img: busaRed10,
      link: "https://smartstore.naver.com/goodmoningfarm/products/11171327090",
    },
  ];
  const sinanoOpt = [
    {
      title: "시나노골드 5kg",
      img: sinano5,
      link: "https://smartstore.naver.com/goodmoningfarm/products/11132580584",
    },
    {
      title: "시나노골드 10kg",
      img: sinano10,
      link: "https://smartstore.naver.com/goodmoningfarm/products/11171399412",
    },
  ];
  return (
    <>
      {isShow && (
        <div
          onClick={() => setIsShow(false)}
          className="fixed left-0 top-0 z-[10] w-screen h-screen bg-[#00000050] flex justify-center items-center"
        >
          <div className="bg-white rounded-[10px]">
            <div className="px-[10px] pt-[10px] text-gm-brown">
              상품 옵션 선택
            </div>
            <div className="flex p-[10px] gap-[10px]">
              {kind === "busa" ? (
                busaOpt.map((el, idx) => (
                  <div key={`kind-${idx}`}>
                    <img
                      onClick={() => window.open(el.link)}
                      src={el.img}
                      alt={el.title}
                      className="w-[200px] h-[200px] rounded-[10px]"
                    />
                  </div>
                ))
              ) : kind === "sinano" ? (
                sinanoOpt.map((el, idx) => (
                  <div key={`kind-${idx}`}>
                    <img
                      onClick={() => window.open(el.link)}
                      src={el.img}
                      alt={el.title}
                      className="w-[200px] h-[200px] rounded-[10px]"
                    />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductOptionModal;
