const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 px-8 border-t border-gray-800">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-white font-bold text-lg mb-4">MAVICS Communications</h3>
        <p className="text-sm">Leading the way in secure and efficient telecommunication networks across the globe.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="text-sm space-y-2">
          <li>Home</li>
          <li>Our Services</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Support</h4>
        <ul className="text-sm space-y-2">
          <li>Help Center</li>
          <li>Contact Sales</li>
          <li>Technical Support</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Newsletter</h4>
        <input type="email" placeholder="Email" className="w-full bg-gray-800 p-2 rounded mb-2 border border-gray-700" />
        <button className="bg-blue-600 text-white w-full py-2 rounded">Subscribe</button>
      </div>
    </div>
    <div className="text-center mt-12 text-xs border-t border-gray-800 pt-8">
      &copy; 2026 MAVICS Communications Network Ltd. All rights reserved.
    </div>
  </footer>
);
export default Footer;