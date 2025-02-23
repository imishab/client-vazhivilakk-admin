import { useFetchAdminQuery } from "../redux/api/adminApi";
import { CircleUserRound, Menu } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { clearAdminDetails } from "../redux/slices/adminSlice";
import Sidebar from "../components/Sidebar";

export default function Navbar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: admin, isLoading, error } = useFetchAdminQuery("");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching admin data.</p>;

  const handleSignout = () => {
    // Clear local storage and token
    localStorage.removeItem("token");
    dispatch(clearAdminDetails());
    router.push("/admin/signin");
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <>
      {/* Topbar Start */}
      <div className="topbar-custom">
        <div className="container-xxl">
          <div className="d-flex justify-content-between">
            <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
              <li>
                <button
                  className="button-toggle-menu nav-link ps-0"
                  onClick={toggleSidebar}
                >
                  <Menu />
                </button>
              </li>
              <li className="d-none d-lg-block">
                <div className="position-relative topbar-search">
                  <input
                    type="text"
                    className="form-control bg-light bg-opacity-75 border-light ps-4"
                    placeholder="Search..."
                  />
                  <i className="mdi mdi-magnify fs-16 position-absolute text-muted top-50 translate-middle-y ms-2" />
                </div>
              </li>
            </ul>
            <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
              <li className="dropdown notification-list topbar-dropdown">
                <a
                  className="nav-link dropdown-toggle nav-user me-0"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <CircleUserRound />
                  <span className="pro-user-name ms-1">
                    {admin?.name} <i className="mdi mdi-chevron-down" />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                  <a
                    href="pages-profile.html"
                    className="dropdown-item notify-item"
                  >
                    <i className="mdi mdi-account-circle-outline fs-16 align-middle" />
                    <span>My Account</span>
                  </a>
                  {/* item*/}
                  <a
                    href="auth-lock-screen.html"
                    className="dropdown-item notify-item"
                  >
                    <i className="mdi mdi-lock-outline fs-16 align-middle" />
                    <span>Lock Screen</span>
                  </a>
                  <div className="dropdown-divider" />
                  {/* item*/}
                  <button
                    onClick={handleSignout}
                    className="dropdown-item notify-item"
                  >
                    <i className="mdi mdi-location-exit fs-16 align-middle" />
                    <span>Logout</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Topbar */}

      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} />
    </>
  );
}
