import { useEffect, useState } from "react";
import { Briefcase, Bookmark } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ProfileDropdown from "./ProfileDropDown";
const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  //close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (profileDropdownOpen) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [profileDropdownOpen]);
  return;
  <header className="">
    <div className="">
      <div className="">
        {/* Logo */}
        <Link to="/find-jobs" className="">
          <div className="">
            <Briefcase className="" />
          </div>
          <span className="">JobPortal</span>
        </Link>
        {/* Auth Button */}
        <div className="">
          {user && (
            <button className="" onClick={() => navigate("/saved-jobs")}>
              <Bookmark className="" />
            </button>
          )}
          {isAuthenticated ?
          <ProfileDropdown isOpen={profileDropdownOpen} onToogle={(e)=>{e.stopPropagation()
            setProfileDropdownOpen(!profileDropdownOpen)
          }}
        avtar={user?.avtar || ""}
        companyName={user?.email || ""}
        userRole={user?.role ||""}
        onLogout={logout}/>
    }
        </div>
      </div>
    </div>
  </header>;
};

export default Navbar;
