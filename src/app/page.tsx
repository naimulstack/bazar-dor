import Banner from "@/components/banner";
import Marquee from "@/components/marquee";
import TodayPriceUp from "@/components/todayPriceUp";
import TodayPriceDown from "@/components/todayPriceDown";
import AllProducts from "@/components/all-products";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Marquee />
      <Banner />
      <TodayPriceUp />
      <TodayPriceDown />
      <AllProducts/>
      <Footer/>

    </div>
  );
}
