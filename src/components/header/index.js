import logo from "assets/logo/brixa.png";
const Header = () => {
  return (
    <header className="flex items-center px-[10px] w-full  py-[5px]">
      <img src={logo} alt="brixa" className="w-[30px]" />
      <div className="text-brixa-brown text-[20px] ml-[4px] pt-[5px]">
        brixa
      </div>
    </header>
  );
};

export default Header;
