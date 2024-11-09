import firstMT from "assets/merit/farmer.png";
import secondMT from "assets/merit/delivery.png";
import thirdMT from "assets/merit/gap.png";
import fourthMT from "assets/merit/farm.png";
import fifthMT from "assets/merit/apple.png";

const Merit = () => {
  const appleMerits = [
    { title: "1962~전통" },
    { title: "산지직송" },
    { title: "우수관리검증" },
    { title: "예산군농장" },
    { title: "17brix당도" },
  ];
  return (
    <div className="px-[10px] mt-[10px]">
      <div className="flex justify-between items-center">
        {appleMerits.map((el, idx) => (
          <div className="text-center" key={el.title}>
            <img
              src={
                idx === 0
                  ? firstMT
                  : idx === 1
                  ? secondMT
                  : idx === 2
                  ? thirdMT
                  : idx === 3
                  ? fourthMT
                  : fifthMT
              }
              alt={el.title}
              className="h-[8vh] m-auto"
            />
            <div
              className="text-[10px] mx-auto mt-[4px] w-[50px] break-words"
              style={{ wordBreak: "break-all" }}
            >
              {el.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merit;
