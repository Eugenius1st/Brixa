// hooks
import { useState } from "react";

// icons
import { FaArrowRight } from "react-icons/fa";

const NaverTalkTalkModal = ({ modalBtn }) => {
  const [show, setShow] = useState(false);

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
              <span>톡톡문의</span>
              <button onClick={() => setShow(false)}>X</button>
            </div>
            <div className="text-black mt-[10px] font-sans font-bold">
              <a
                href="https://talk.naver.com/ct/w4uwy9?frm=psf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <div className="">1:1 톡톡문의</div>
                <FaArrowRight className="w-[10px] ml-[4px]" />
              </a>
              <div className="text-red-500  text-[12px]">
                *빠른 상담을 위해 어떤 상품에 대한 문의인지 바로 알려주세요!
                (ex:시나노골드 문의입니다!)
              </div>
              <div className="h-[20px]"></div>
            </div>

            <div className="text-black mt-[10px] font-sans font-bold ">
              <a
                href="https://smartstore.naver.com/goodmoningfarm/qna"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <span>기타 문의</span>
                <FaArrowRight className="w-[10px] ml-[4px]" />
              </a>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setShow(!show)}>{modalBtn}</button>
    </>
  );
};

export default NaverTalkTalkModal;
