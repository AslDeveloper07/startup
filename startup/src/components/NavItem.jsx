const NavItem = ({ icon, label, active = false }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`p-2 rounded-full ${
          active ? "text-blue-500" : "text-gray-500"
        }`}
      >
        {icon}
      </div>
      <span
        className={`text-xs mt-1 ${active ? "text-blue-500 font-medium" : "text-gray-500"}`}
      >
        {label}
      </span>
    </div>
  );
};