import { useState } from "react";
import { ReactComponent as PhoneIcon } from "assets/svg/phone.svg";
import { ReactComponent as PinIcon } from "assets/svg/pin.svg";
import { ReactComponent as NaverIcon } from "assets/svg/naver.svg";
import { ReactComponent as InstarIcon } from "assets/svg/instar.svg";
// modals
import PhoneModal from "components/modal/PhoneModal";
import AddressModal from "components/modal/AddressModal";

const Nav = () => {
  const [isAdressShow, setIsAdressShow] = useState(false);

  return (
    <nav className="left-0 grid grid-cols-4 py-[10px] bg-[#F6F8F6] text-brixa-brown items-center justify-between w-full fixed bottom-0 px-[10px]">
      <PhoneModal
        modalBtn={
          <div className="flex-col justify-between flex  h-[60px] ">
            <PhoneIcon className="m-auto w-[40px]" aria-label="PhoneIcon" />
            <div className="text-center m-auto">연락정보</div>
          </div>
        }
      />

      <AddressModal
        modalBtn={
          <div
            onClick={() => setIsAdressShow(!isAdressShow)}
            className="flex-col justify-between flex h-[60px]"
          >
            <PinIcon className="m-auto w-[24px]" aria-label="PhoneIcon" />
            <div className="text-center m-auto">주소</div>
          </div>
        }
      />
      <button
        onClick={() => alert("준비중입니다.")}
        className="flex-col justify-between flex h-[60px]"
      >
        <NaverIcon className="m-auto w-[25px]" aria-label="PhoneIcon" />

        <div className="text-center m-auto">톡톡문의</div>
      </button>
      <button
        onClick={() => alert("준비중입니다.")}
        className="flex-col justify-between flex h-[60px]"
      >
        <InstarIcon className="m-auto w-[30px]" aria-label="PhoneIcon" />
        <div className="text-center m-auto">인스타그램</div>
      </button>
    </nav>
  );
};

export default Nav;
