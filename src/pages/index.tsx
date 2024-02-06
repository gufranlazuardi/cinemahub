import FeaturedCard from "@/components/FeaturedCard";
import Layout from "@/components/Layout";
import NowPlayingCard from "@/components/NowPlayingCard";
import TopRatedCard from "@/components/TopRatedCard";
import UpcomingCard from "@/components/UpcomingCard";

const Home = () => {
  return (
    <Layout>
      <div className="h-screen w-full grid">
        <FeaturedCard />
        <TopRatedCard />
        <NowPlayingCard />
        <UpcomingCard />
      </div>
    </Layout>
  );
};

export default Home;
