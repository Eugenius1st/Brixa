import logo from "assets/logo/apple_logo.png";
const Header = () => {
  return (
    <header className="w-full bg-[#FAF5EC] fixed top-0 z-[2] left-0">
      <div className="flex items-center  max-w-4xl py-[5px] m-auto">
        <img src={logo} alt="gm" className="w-[30px]" />
        <div className="text-gm-brown text-[14px] ml-[4px] pt-[5px]">
          굿모닝농장
        </div>
      </div>
    </header>
  );
};

export default Header;
