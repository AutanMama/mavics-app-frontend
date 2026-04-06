const Topbar = ({ title }) => (
  <div className="bg-white h-16 shadow-sm border-b px-8 flex items-center justify-between ml-64">
    <h2 className="font-bold text-gray-700">{title}</h2>
    <div className="flex items-center gap-4">
      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">System Online</span>
      <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs">AD</div>
    </div>
  </div>
);
export default Topbar;