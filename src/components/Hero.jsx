import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8">
    <div className="max-w-4xl text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Revolutionizing Digital Connectivity</h1>
      <p className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed">
        MAVICS provides enterprise-grade communication infrastructure, ultra-secure video streaming, and rapid-response technical services.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/services" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-bold transition">Explore Services</Link>
        <Link to="/register" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">Get Started</Link>
      </div>
    </div>
  </section>
);
export default Hero;