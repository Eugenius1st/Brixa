import { useState } from "react";

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
              <span>연락정보</span>
              <button onClick={() => setShow(false)}>X</button>
            </div>
            <div className="text-black mt-[10px] font-sans font-bold">
              <div className="text-[18px]">주문전화</div>
              <div className="">
                <span>010 5636 8421</span>
                <button
                  onClick={() => handleCopy("010 5636 8421")}
                  className=" border border-gray-400 rounded-xl ml-[10px] px-[4px] py-[4px] text-[12px] text-gray-500"
                >
                  복사하기
                </button>
              </div>
              <div className="mt-[10px] text-[18px]">계좌번호(농협)</div>
              <div>
                <span>352 8421 9339 33</span>
                <button
                  onClick={() => handleCopy("352 8421 9339 33")}
                  className="border border-gray-400 rounded-xl ml-[10px] px-[4px] py-[4px] text-[12px] text-gray-500"
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
