import Hero from "../components/Hero";
import AdvertBanner from "../components/AdvertBanner";
import ServiceCard from "../components/ServiceCard";
import ChatBox from "../components/ChatBox";

const Home = () => (
  <div>
    <Hero />
    <div className="max-w-7xl mx-auto px-8 py-16">
      <AdvertBanner placement="home" />
      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          title="Fibre Networks"
          desc="High-speed industrial grade fibre optics for corporations."
          icon="🌐"
        />
        <ServiceCard
          title="Satellite Comms"
          desc="Global connectivity even in the most remote locations."
          icon="🛰️"
        />
        <ServiceCard
          title="Managed Security"
          desc="24/7 monitoring and threat detection for your infrastructure."
          icon="🛡️"
        />
      </div>
    </div>
    <ChatBox />
  </div>
);
export default Home;
