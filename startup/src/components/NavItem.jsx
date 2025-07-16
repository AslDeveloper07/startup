const NavItem = ({ icon, label, active = false }) => {
  return (
    <div className={`nav-item ${active ? "active" : ""}`}>
      <span className="nav-icon">{icon}</span>
    </div>
  );
};

export default NavItem