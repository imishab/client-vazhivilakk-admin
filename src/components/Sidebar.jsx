import {
  AppWindow,
  CircleUserRound,
  LayoutDashboard,
  Package,
  PackageOpen,
  ReceiptText,
  Shield,
  Truck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar({ isCollapsed }) {
  return (
    <>
      {/* Left Sidebar Start */}
      <div className={`app-sidebar-menu ${isCollapsed ? "collapsed" : ""}`}>
        <div className="h-100 sidebarline" data-simplebar="">
          {/*- Sidemenu */}
          <div
            id="sidebar-menu"
            className={`sidebar-menu-items ${isCollapsed ? "collapsed" : ""}`}
          >
            <div className="logo-box">
              <Link href="/" className="logo logo-light">
                <h4>
                  <b>Msm North.</b>
                </h4>
              </Link>
              <Link
                href="/"
                className="logo logo-dark"
                style={{ marginTop: 50 }}
              >
                <h4>
                  <b>Vazhi Vilakk.</b>
                </h4>
              </Link>
            </div>
            <ul
              id="side-menu"
              className={`side-menu-items ${isCollapsed ? "collapsed" : ""}`}
            >
              <li className="menu-title">Menu</li>
              <li>
                <Link href="/admin/dashboard" className="tp-link active">
                  <AppWindow />
                  <span> Dashboard </span>
                </Link>
              </li>

              <li className="menu-title">Manage</li>

              <li>
                <Link href="#voice" data-bs-toggle="collapse">
                  <Shield />
                  <span> Audio </span>
                  <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="voice">
                  <ul className="nav-second-level">
                    <li>
                      <Link href="/admin/voices/all-voices" className="tp-link">
                        All Audios
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin/voices/add-voice" className="tp-link">
                        Add New Audio
                      </Link>
                    </li>

                    {/* <li>
                      <Link href="#!" className="tp-link">
                        Deleted Products
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </li>
              <li>
                <Link href="#category" data-bs-toggle="collapse">
                  <LayoutDashboard />
                  <span> Category </span>
                  <span className="menu-arrow" />
                </Link>
                <div className="collapse" id="category">
                  <ul className="nav-second-level">
                    <li>
                      <Link
                        href="/admin/category/all-categories"
                        className="tp-link"
                      >
                        All Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/category/add-category"
                        className="tp-link"
                      >
                        Add New Category
                      </Link>
                    </li>
                    <li>
                      <Link href="#!" className="tp-link">
                        Deleted Category
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/admin/orders/all-orders" className="tp-link">
                  <Truck />
                  <span> Orders </span>
                </Link>
              </li>
              <li className="menu-title">USERS</li>
              <li>
                <Link href="/admin/users/all-users" className="tp-link">
                  <UsersRound />
                  <span> Users </span>
                </Link>
              </li>
              {/* <li>
                <Link href="/admin/zones/all-zones" className="tp-link">
                 
                  <span> Manage Zone Heads </span>
                </Link>
              </li> */}
              <li>
                <Link href="/admin/dashboard" className="tp-link">
                  <CircleUserRound />
                  <span> Delivery Boy </span>
                </Link>
              </li>
              <li className="menu-title">analysis</li>
              <li>
                <Link href="/admin/dashboard" className="tp-link">
                  <PackageOpen />
                  <span> Product Analysis </span>
                </Link>
              </li>
              <li>
                <Link href="/admin/dashboard" className="tp-link">
                  <ReceiptText />
                  <span> Purchase Analysis </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* End Sidebar */}
          <div className="clearfix" />
        </div>
      </div>
      {/* Left Sidebar End */}
    </>
  );
}
