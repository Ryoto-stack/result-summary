import Scores from "@/components/Scores";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className=" flex items-center justify-center h-full w-full ">
        <div className="left-div px-[60px] flex items-center justify-center flex-col rounded-[30px] m-0 p-0 max-w-[370px] h-full">
          <h1 className="py-[40px] text-lg m-0 text-white opacity-60">
            Your Result
          </h1>
          <div className="circle mb-[40px] rounded-full w-[200px] h-[200px] flex items-center justify-center flex-col mx-auto">
            <p className="text-7xl font-bold text-white">
              76
            </p>
            <p className="text-white opacity-55 ">
              of 100
            </p>
          </div>
          <div className="text-3xl text-white font-semibold mb-[25px] ">
            Great
          </div>
          <p className="bottom-text text-center text-[18px] pb-[60px] text-white opacity-65 ">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="right-div shadow shadow-black items-center justify-center grow flex flex-col rounded-r-[30px] px-2px h-max ">
          <h1 >Summary</h1>
          <Scores/>
          <p> Memory 92 / 100</p>
          <p> Verbal 61 / 100</p>
          <p> Visual 72 / 100 Continue</p>
        </div>
      </section>
    </main>
  );
}
