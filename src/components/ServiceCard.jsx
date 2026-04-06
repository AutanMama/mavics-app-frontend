const ServiceCard = ({ title, desc, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
    <div className="text-blue-600 text-4xl mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
    <button className="mt-6 text-blue-600 font-semibold hover:underline">
      Learn More &rarr;
    </button>
  </div>
);
export default ServiceCard;
