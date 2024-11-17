import { useState } from "react";
import { ReactComponent as PhoneIcon } from "assets/svg/phone.svg";
import { ReactComponent as PinIcon } from "assets/svg/pin.svg";
import { ReactComponent as NaverIcon } from "assets/svg/naver.svg";
import { ReactComponent as InstarIcon } from "assets/svg/instar.svg";
// modals
import PhoneModal from "components/modal/PhoneModal";
import AddressModal from "components/modal/AddressModal";
import NaverTalkTalkModal from "components/modal/NaverTalkTalkModal";
// icons
import { BsChatDotsFill } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
const Nav = () => {
  const [isAdressShow, setIsAdressShow] = useState(false);

  return (
    <nav className="left-0  py-[10px] bg-[#FAF5EC] text-gm-brown items-center justify-between w-full fixed bottom-0 font-sans font-bold">
      <div className="flex justify-between px-[10px] max-w-4xl m-auto">
        <PhoneModal
          modalBtn={
            <div className="flex-col justify-between flex  h-[60px] ">
              <PhoneIcon
                className="m-auto w-[40px] text-[#8A7048]"
                aria-label="PhoneIcon"
              />
              <div className="text-center text-[10px] m-auto">연락정보</div>
            </div>
          }
        />

        <AddressModal
          modalBtn={
            <div
              onClick={() => setIsAdressShow(!isAdressShow)}
              className="flex-col justify-between flex h-[60px]"
            >
              <PinIcon
                className="m-auto w-[24px] text-gm-brown"
                aria-label="PhoneIcon"
              />
              <div className="text-center text-[10px] m-auto">주소</div>
            </div>
          }
        />

        <NaverTalkTalkModal
          modalBtn={
            <div className="flex-col justify-between flex h-[60px]">
              {/* <NaverIcon className="m-auto w-[25px]" aria-label="PhoneIcon" /> */}
              <BsChatDotsFill className="m-auto w-[28px] h-[28px]" />
              <div className="text-center text-[10px] m-auto">톡톡문의</div>
            </div>
          }
        />
        <a
          href="https://www.instagram.com/good.morning.farm/"
          target="_blank"
          className="flex-col justify-between flex h-[60px]"
          rel="noreferrer"
        >
          <InstarIcon className="m-auto w-[30px]" aria-label="PhoneIcon" />
          <div className="text-center text-[10px] m-auto">인스타그램</div>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
