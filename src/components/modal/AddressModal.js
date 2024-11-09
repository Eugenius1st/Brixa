import { useState } from "react";
// assets
import farm from "assets/map/farm.png";
const PhoneModal = ({ modalBtn }) => {
  const [show, setShow] = useState(false);

  const handleCopy = async (textToCopy) => {
    await navigator.clipboard.writeText(textToCopy); // 텍스트 복사
    alert("복사되었습니다.");
  };
  return (
    <>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="bg-[#00000080] justify-center flex items-center top-0 left-0 fixed w-screen h-screen"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[300px] rounded-[10px] p-[16px]"
          >
            <div className="text-[20px] border-b flex justify-between items-start">
              <span>굿모닝 농장 주소</span>
              <button onClick={() => setShow(false)}>X</button>
            </div>
            <div className="text-black mt-[10px] ">
              <a
                target="_blank"
                href="https://naver.me/xZ3khHmN"
                rel="noreferrer"
              >
                <div className="text-[18px]">예산군 응봉면 굿모닝 농장</div>
                <img src={farm} alt="farm" />
              </a>
              <div className="mt-[10px]">
                <span>충남 예산군 응봉면 증곡길 87-7</span>
                <button
                  onClick={() => handleCopy("충남 예산군 응봉면 증곡길 87-7")}
                  className=" border border-gray-400 rounded-xl ml-[10px] px-[4px] py-[4px] text-[12px] text-gray-500"
                >
                  복사하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setShow(!show)}>{modalBtn}</button>
    </>
  );
};

export default PhoneModal;
