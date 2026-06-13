"use client";
import React, { useEffect, useReducer, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Define the shape of the state
interface State {
  activeMenu: string;
  activeSubMenu: string;
  isSidebarOpen: boolean;
  isLeftSidebarOpen: boolean;
  isRightSidebar: boolean;
  isLang: boolean;
  scrollY: number;
}

// Define action types
type Action =
  | { type: "TOGGLE_MENU"; menu: string }
  | { type: "TOGGLE_SUB_MENU"; subMenu: string }
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "setScrollY"; payload: number }
  | { type: "TOGGLE_LEFT_SIDEBAR" }
  | { type: "TOGGLE_LANG" }
  | { type: "TOGGLE_RIGHTSIDEBAR" };

// Initial state
const initialState: State = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
  isRightSidebar: false,
  isLang: false,
  scrollY: 0,
};

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    case "TOGGLE_LANG":
      return {
        ...state,
        isLang: !state.isLang,
      };
    case "TOGGLE_RIGHTSIDEBAR":
      return {
        ...state,
        isRightSidebar: !state.isRightSidebar,
      };
    default:
      return state;
  }
}

const Header5: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menu: string) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleRightSidebar = () => {
    dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
  };

  const toggleSubMenu = (subMenu: string) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };

  const homePaths = [
    "/",
    "/industry",
    "/oil-gas",
    "/metal-industry",
    "/textile",
  ];
  const isHomeActive = homePaths.some((path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  });

  const serviceRoutesPath = [
    "/service",
    "/service/style2",
    "/service/style3",
    "/service/style4",
    "/service/details",
  ];
  const isServiceActive = serviceRoutesPath.some((path) =>
    pathname.startsWith(path),
  );

  const projectpaths = [
    "/project",
    "project/metro",
    "/project/horizontal",
    "/project/infoflow",
    "/project/text-down",
    "/project/single-slider",
    "/project/details",
  ];
  const isSProjectPathActive = projectpaths.some((path) =>
    pathname.startsWith(path),
  );

  const innerPagePaths = [
    "/about",
    "/blog",
    "/blog/details",
    "blog/sidebar",
    "blog/standard",
    "/career",
    "/career-details",
    "/cart",
    "/checkout",
    "/faq",
    "our-clients",
    "/our-process",
    "/our-team",
    "/product",
    "/product/details",
    "/shop",
    "/shop-details",
    "/checkout",
    "/contact",
  ];
  const isInnerPagetPathActive = innerPagePaths.some((path) =>
    pathname.startsWith(path),
  );
  return (
    <>
      <div
        className={`right-sidebar-menu ${state.isRightSidebar ? "show-right-menu" : ""}`}
      >
        <div className="right-sidebar-menu-wrap">
          <div className="sidebar-logo-area d-flex justify-content-between align-items-center">
            <div className="sidebar-logo-wrap">
              <Link href="/">
                <Image
                  width={157}
                  height={34}
                  alt="image"
                  src="/assets/img/akaraka-logo.png"
                />
              </Link>
            </div>
            <div
              className="right-sidebar-close-btn"
              onClick={toggleRightSidebar}
            >
              <i className="bi bi-x" />
            </div>
          </div>
          <div className="sidebar-content-wrap">
            <div className="title-area">
              <span>Get In Touch With Us</span>
              <h2>Connect with AGRL</h2>
              <p>
                Ready to take the first step towards unlocking opportunity
                realizing goals, and embracing innovation?
              </p>
            </div>
            <ul className="contact-area">
              <li>
                <div className="single-contact">
                  <div className="icon">
                    <svg
                      width={33}
                      height={33}
                      viewBox="0 0 33 33"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M26.0808 20.4419C25.4052 19.7385 24.5903 19.3624 23.7267 19.3624C22.87 19.3624 22.0481 19.7315 21.3447 20.435L19.1438 22.6289C18.9627 22.5314 18.7816 22.4408 18.6075 22.3503C18.3568 22.2249 18.12 22.1065 17.918 21.9812C15.8564 20.6718 13.9828 18.9654 12.1859 16.7575C11.3153 15.6571 10.7302 14.7307 10.3054 13.7905C10.8765 13.2681 11.4058 12.7248 11.9212 12.2025C12.1162 12.0075 12.3113 11.8055 12.5063 11.6105C13.9689 10.1478 13.9689 8.25339 12.5063 6.79077L10.6049 4.88935C10.3889 4.67344 10.1661 4.45057 9.95713 4.22769C9.53923 3.79587 9.10045 3.35012 8.64773 2.93222C7.97214 2.26359 7.16421 1.90839 6.3145 1.90839C5.46478 1.90839 4.64293 2.26359 3.94644 2.93222C3.93947 2.93919 3.93947 2.93919 3.93251 2.94615L1.56445 5.33511C0.672947 6.22661 0.164512 7.31313 0.0530735 8.57377C-0.114084 10.6075 0.484896 12.502 0.944577 13.7417C2.07289 16.7854 3.75839 19.6061 6.27271 22.6289C9.32332 26.2715 12.9938 29.148 17.1867 31.1748C18.7886 31.934 20.9268 32.8324 23.3158 32.9857C23.462 32.9926 23.6152 32.9996 23.7545 32.9996C25.3634 32.9996 26.7146 32.4215 27.7733 31.2723C27.7802 31.2584 27.7942 31.2514 27.8011 31.2375C28.1633 30.7987 28.5812 30.4017 29.02 29.9768C29.3195 29.6913 29.6259 29.3918 29.9254 29.0784C30.6149 28.361 30.9771 27.5252 30.9771 26.6685C30.9771 25.8049 30.608 24.9761 29.9045 24.2796L26.0808 20.4419ZM28.5742 27.7759C28.5673 27.7759 28.5673 27.7829 28.5742 27.7759C28.3026 28.0685 28.024 28.3331 27.7245 28.6257C27.2718 29.0575 26.8121 29.5102 26.3803 30.0186C25.6768 30.7708 24.848 31.126 23.7615 31.126C23.657 31.126 23.5456 31.126 23.4411 31.1191C21.3726 30.9867 19.4503 30.1788 18.0085 29.4893C14.0664 27.5809 10.6049 24.8716 7.72837 21.4379C5.35334 18.5753 3.76535 15.9287 2.71366 13.087C2.06592 11.3528 1.82912 10.0016 1.93359 8.727C2.00324 7.91211 2.31666 7.23652 2.89474 6.65843L5.26976 4.28341C5.61104 3.96302 5.97322 3.7889 6.32843 3.7889C6.76721 3.7889 7.12242 4.05357 7.3453 4.27644C7.35226 4.28341 7.35923 4.29037 7.36619 4.29734C7.79105 4.69434 8.19501 5.10527 8.61987 5.54405C8.83578 5.76693 9.05866 5.9898 9.28153 6.21965L11.1829 8.12106C11.9212 8.85933 11.9212 9.54189 11.1829 10.2802C10.981 10.4822 10.7859 10.6841 10.584 10.8791C9.99891 11.4781 9.44173 12.0353 8.83578 12.5786C8.82185 12.5925 8.80792 12.5995 8.80096 12.6134C8.20198 13.2124 8.31342 13.7974 8.43878 14.1944C8.44575 14.2153 8.45271 14.2362 8.45968 14.2571C8.95418 15.4551 9.65067 16.5834 10.7093 17.9276L10.7163 17.9346C12.6386 20.3026 14.6654 22.1483 16.9011 23.5622C17.1867 23.7433 17.4792 23.8895 17.7578 24.0288C18.0085 24.1542 18.2453 24.2726 18.4473 24.398C18.4752 24.4119 18.503 24.4328 18.5309 24.4467C18.7677 24.5651 18.9906 24.6209 19.2204 24.6209C19.7985 24.6209 20.1607 24.2587 20.2791 24.1403L22.6611 21.7583C22.8979 21.5215 23.274 21.2359 23.7128 21.2359C24.1446 21.2359 24.4998 21.5075 24.7157 21.7444C24.7227 21.7513 24.7227 21.7513 24.7296 21.7583L28.5673 25.5959C29.2847 26.3064 29.2847 27.0377 28.5742 27.7759Z" />
                      <path d="M17.8345 7.8506C19.6593 8.15705 21.3169 9.0207 22.6403 10.344C23.9636 11.6673 24.8203 13.325 25.1337 15.1498C25.2103 15.6095 25.6073 15.9299 26.06 15.9299C26.1157 15.9299 26.1645 15.9229 26.2202 15.9159C26.7356 15.8323 27.0769 15.3448 26.9933 14.8294C26.6172 12.6215 25.5725 10.6087 23.9775 9.01373C22.3826 7.41877 20.3697 6.37404 18.1618 5.99794C17.6464 5.91436 17.1659 6.25564 17.0753 6.76408C16.9848 7.27251 17.3191 7.76702 17.8345 7.8506Z" />
                      <path d="M32.9619 14.557C32.3421 10.9213 30.6287 7.61301 27.996 4.98029C25.3633 2.34757 22.055 0.634209 18.4193 0.0143347C17.9108 -0.0762086 17.4303 0.272035 17.3397 0.780471C17.2562 1.29587 17.5974 1.77645 18.1128 1.86699C21.3585 2.41722 24.3185 3.95645 26.6727 6.30362C29.0268 8.65774 30.5591 11.6178 31.1093 14.8634C31.1859 15.3231 31.5829 15.6435 32.0356 15.6435C32.0913 15.6435 32.1401 15.6365 32.1958 15.6296C32.7042 15.553 33.0525 15.0654 32.9619 14.557Z" />
                    </svg>
                  </div>
                  <div className="content">
                    <span>CALL ANY TIME</span>
                    <h6>
                      <a href="tel:08166175684">0816-617-5684</a>
                    </h6>
                  </div>
                </div>
                <svg
                  className="arrow"
                  width={8}
                  height={29}
                  viewBox="0 0 8 29"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.33333 3C1.33333 4.47276 2.52724 5.66667 4 5.66667C5.47276 5.66667 6.66667 4.47276 6.66667 3C6.66667 1.52724 5.47276 0.333333 4 0.333333C2.52724 0.333333 1.33333 1.52724 1.33333 3ZM3.64645 28.3536C3.84171 28.5488 4.15829 28.5488 4.35355 28.3536L7.53553 25.1716C7.7308 24.9763 7.7308 24.6597 7.53553 24.4645C7.34027 24.2692 7.02369 24.2692 6.82843 24.4645L4 27.2929L1.17157 24.4645C0.976311 24.2692 0.659728 24.2692 0.464466 24.4645C0.269204 24.6597 0.269204 24.9763 0.464466 25.1716L3.64645 28.3536ZM3.5 3V28H4.5V3H3.5Z" />
                </svg>
              </li>
              <li>
                <div className="single-contact social">
                  <div className="icon">
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.5966 7.4621C32.7313 10.243 34.0001 13.7234 34.0001 17.5C34.0001 26.6127 26.6128 34 17.5001 34C13.7331 34 10.261 32.7377 7.48364 30.6129"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99634 4.01017C10.683 2.11388 13.9614 0.999997 17.5 0.999997C21.2782 0.999997 24.7599 2.26989 27.5413 4.40617"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.38136 27.509C2.26004 24.7329 1 21.2636 1 17.5C1 14.0975 2.02984 10.9356 3.7948 8.30896"
                        stroke="black"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.375 25.1463C21.456 30.4092 19.6178 34 17.5 34C14.4624 34 12 26.6127 12 17.5C12 16.3514 12.0391 15.2302 12.1136 14.1477"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6199 9.88271C13.5372 4.60405 15.3783 1.00001 17.5 1.00001C20.5375 1.00001 23 8.38731 23 17.5C23 18.6491 22.9608 19.7708 22.8863 20.8537"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.18506 23H20.5404"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.7053 12H32.8151"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.18506 12H10.1218"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.8332 23C24.8332 21.8146 23.8723 20.8537 22.6869 20.8537C21.5015 20.8537 20.5405 21.8146 20.5405 23C20.5405 24.1854 21.5015 25.1463 22.6869 25.1463C23.8723 25.1463 24.8332 24.1854 24.8332 23Z"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.4143 12C14.4143 10.8146 13.4533 9.85366 12.2679 9.85366C11.0825 9.85366 10.1216 10.8146 10.1216 12C10.1216 13.1854 11.0825 14.1463 12.2679 14.1463C13.4533 14.1463 14.4143 13.1854 14.4143 12Z"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.3173 5.82927C31.3173 4.64388 30.3564 3.68293 29.171 3.68293C27.9856 3.68293 27.0247 4.64388 27.0247 5.82927C27.0247 7.01465 27.9856 7.97561 29.171 7.97561C30.3564 7.97561 31.3173 7.01465 31.3173 5.82927Z"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.97554 29.1707C7.97554 27.9853 7.01459 27.0244 5.8292 27.0244C4.64382 27.0244 3.68286 27.9853 3.68286 29.1707C3.68286 30.3561 4.64382 31.3171 5.8292 31.3171C7.01459 31.3171 7.97554 30.3561 7.97554 29.1707Z"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.833 23H32.815"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <span>Follow Us</span>
                    <h6>
                      <a href="https://www.facebook.com/">Facebook,</a>{" "}
                      <a href="https://www.linkedin.com/">LinkedIn,</a>{" "}
                      <a href="https://www.instagram.com/">Instagram,</a>
                    </h6>
                  </div>
                </div>
                <svg
                  className="arrow"
                  width={8}
                  height={29}
                  viewBox="0 0 8 29"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.33333 3C1.33333 4.47276 2.52724 5.66667 4 5.66667C5.47276 5.66667 6.66667 4.47276 6.66667 3C6.66667 1.52724 5.47276 0.333333 4 0.333333C2.52724 0.333333 1.33333 1.52724 1.33333 3ZM3.64645 28.3536C3.84171 28.5488 4.15829 28.5488 4.35355 28.3536L7.53553 25.1716C7.7308 24.9763 7.7308 24.6597 7.53553 24.4645C7.34027 24.2692 7.02369 24.2692 6.82843 24.4645L4 27.2929L1.17157 24.4645C0.976311 24.2692 0.659728 24.2692 0.464466 24.4645C0.269204 24.6597 0.269204 24.9763 0.464466 25.1716L3.64645 28.3536ZM3.5 3V28H4.5V3H3.5Z" />
                </svg>
              </li>
              <li>
                <div className="single-contact">
                  <div className="icon">
                    <svg
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.9896 1.18398C33.0176 0.995671 32.993 0.803292 32.9185 0.628097C32.844 0.452902 32.7225 0.301711 32.5675 0.191227C32.4126 0.0808885 32.2301 0.0155543 32.0404 0.00245033C31.8506 -0.0106536 31.6609 0.0289832 31.4923 0.116977L0.554753 16.2732C0.376749 16.3673 0.230082 16.5113 0.132753 16.6876C0.0354241 16.8638 -0.0083331 17.0646 0.00685184 17.2654C0.0220368 17.4662 0.0955032 17.6581 0.218235 17.8177C0.340966 17.9773 0.507624 18.0976 0.697753 18.1639L9.29838 21.1036L27.6148 5.44235L13.4413 22.5185L27.8554 27.4451C27.9984 27.4932 28.1502 27.5094 28.3002 27.4926C28.4501 27.4758 28.5946 27.4265 28.7235 27.348C28.8524 27.2696 28.9625 27.1639 29.0463 27.0384C29.1301 26.9129 29.1854 26.7706 29.2084 26.6215L32.9896 1.18398ZM28.2201 26.469C28.22 26.4693 28.2201 26.4688 28.2201 26.469L32.0005 1.03696C32.0014 1.03102 32.0006 1.02494 31.9982 1.0194M28.2201 26.469C28.2192 26.4738 28.2172 26.4792 28.2145 26.4833C28.2117 26.4876 28.2079 26.4912 28.2035 26.4939C28.1991 26.4965 28.1942 26.4982 28.189 26.4988C28.1842 26.4993 28.1793 26.4989 28.1746 26.4974C28.1744 26.4973 28.1749 26.4975 28.1746 26.4974L15.1369 22.0413L28.3842 6.08103L26.9649 4.68231L9.08205 19.9729L1.02672 17.2195C1.02644 17.2194 1.027 17.2196 1.02672 17.2195C1.02082 17.2173 1.01481 17.2131 1.01095 17.2081C1.00692 17.2029 1.0045 17.1966 1.004 17.19C1.0035 17.1834 1.00494 17.1768 1.00814 17.171C1.01122 17.1654 1.0158 17.1608 1.02135 17.1577C1.02113 17.1578 1.02157 17.1576 1.02135 17.1577L31.9549 1.00355C31.9548 1.00357 31.9549 1.00352 31.9549 1.00355C31.9599 1.00093 31.9658 0.999681 31.9715 1.00007M13.0319 30.5897C13.0321 30.5963 13.0342 30.6027 13.0381 30.6081C13.0421 30.6136 13.0478 30.6177 13.0543 30.6199C13.0608 30.622 13.0678 30.622 13.0744 30.6199C13.0807 30.6179 13.0862 30.6141 13.0902 30.6089C13.0901 30.6091 13.0904 30.6087 13.0902 30.6089L16.0115 26.6335L13.0319 25.6152V30.5897ZM12.0319 24.2166V30.5939C12.0329 30.8106 12.1021 31.0215 12.2297 31.1967C12.3573 31.3719 12.5368 31.5025 12.7427 31.5701C12.9487 31.6376 13.1707 31.6386 13.3772 31.573C13.5838 31.5073 13.7644 31.3784 13.8936 31.2044L17.624 26.1279L12.0319 24.2166Z"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <span>SAY HELLO</span>
                    <h6>
                      <a href="mailto:akarakaglobalresources@yahoo.com">
                        akarakaglobalresources@yahoo.com
                      </a>
                    </h6>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="address-area">
              <li className="single-address">
                <span>ABUJA</span>
                <a href="#">
                  Zone C6, No.351 International Building Materials Market,
                  Dei-Dei, Abuja
                </a>
              </li>
              <li className="single-address">
                <span>MARARABA</span>
                <a href="#">
                  Zone C6, No.351 International Building Materials Market,
                  Dei-Dei, Abuja
                </a>
              </li>
            </ul>
            <Link href="/contact" className="all-location-btn">
              View All Factory Location
            </Link>
          </div>
          <div className="sidebar-bottom-area">
            <p>
              Copyright 2025 <Link href="/">AGRL</Link> | Akaraka Global
              Resources Limited
            </p>
          </div>
        </div>
      </div>
      <header
        className={`header-area style-4 ${state.scrollY > 20 ? "sticky" : ""}`}
      >
        <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-between">
          <div className="company-logo">
            <Link href="/textile">
              <Image
                width={157}
                height={34}
                alt="image"
                className="img-fluid"
                src="/assets/img/header-logo3.svg"
              />
            </Link>
          </div>
          <div className="menu-wrap">
            <div className="main-menu">
              <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
                <Link href="/textile" className="mobile-logo-wrap">
                  <Image
                    width={157}
                    height={34}
                    alt="image"
                    className="img-fluid"
                    src="/assets/img/akaraka-logo.png"
                  />
                </Link>
                <div className="menu-close-btn">
                  <i className="bi bi-x" />
                </div>
              </div>
              <ul className="menu-list">
                <li
                  className={`menu-item-has-children position-inherit ${isHomeActive ? "active" : ""}`}
                >
                  <Link href="/" className="drop-down">
                    Company
                  </Link>
                  <i
                    onClick={() => toggleMenu("HOME")}
                    className={`bi bi-${state.activeMenu === "HOME" ? "dash" : "plus"} dropdown-icon`}
                  />
                  <div
                    className={`mega-menu ${state.activeMenu === "HOME" ? "d-block" : "none"}`}
                  >
                    <div className="mega-menu-wrap">
                      <div className="container">
                        <div className="row gy-lg-5">
                          <div className="col-lg-3">
                            <div className={`single-menu-item `}>
                              <Link href="/" className="home-img">
                                <Image
                                  width={306}
                                  height={245}
                                  src="/assets/img/home1/mega-menu-home-img1.jpg"
                                  alt=""
                                />
                              </Link>
                              <h5>
                                <Link href="/">Factory</Link>
                              </h5>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-menu-item ${pathname === "/industry" ? "active" : ""}`}
                            >
                              <Link href="/industry" className="home-img">
                                <Image
                                  width={306}
                                  height={245}
                                  src="/assets/img/home1/mega-menu-home-img2.jpg"
                                  alt=""
                                />
                              </Link>
                              <h5>
                                <Link href="/industry">Industry</Link>
                              </h5>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-menu-item ${pathname === "/oil-gas" ? "active" : ""}`}
                            >
                              <Link href="/oil-gas" className="home-img">
                                <Image
                                  width={306}
                                  height={245}
                                  src="/assets/img/home1/mega-menu-home-img3.jpg"
                                  alt=""
                                />
                              </Link>
                              <h5>
                                <Link href="/oil-gas">Oil &amp; Gas</Link>
                              </h5>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-menu-item ${pathname === "/metal-industry" ? "active" : ""}`}
                            >
                              <Link href="/metal-industry" className="home-img">
                                <Image
                                  width={306}
                                  height={245}
                                  src="/assets/img/home1/mega-menu-home-img4.jpg"
                                  alt=""
                                />
                              </Link>
                              <h5>
                                <Link href="/metal-industry">
                                  Metal Industry
                                </Link>
                              </h5>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-menu-item ${pathname === "/textile" ? "active" : ""}`}
                            >
                              <Link href="/textile" className="home-img">
                                <Image
                                  width={306}
                                  height={245}
                                  src="/assets/img/home1/mega-menu-home-img5.jpg"
                                  alt=""
                                />
                              </Link>
                              <h5>
                                <Link href="/textile">
                                  Plastics &amp; Polymers
                                </Link>
                              </h5>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-menu-item ${pathname === "/engineering" ? "active" : ""}`}
                            >
                              <Link href="/engineering" className="home-img">
                                <Image
                                  width={306}
                                  height={245}
                                  src="/assets/img/home1/mega-menu-home-img6.jpg"
                                  alt=""
                                />
                              </Link>
                              <h5>
                                <Link href="/engineering">Engineering</Link>
                              </h5>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-menu-item">
                              <a href="#" className="home-img">
                                <Image
                                  width={306}
                                  height={245}
                                  src="/assets/img/home1/mega-menu-home-img7.jpg"
                                  alt=""
                                />
                              </a>
                              <h5>
                                <a href="#">
                                  Furniture <span>Coming Soon</span>
                                </a>
                              </h5>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-menu-item">
                              <a href="#" className="home-img">
                                <Image
                                  width={306}
                                  height={245}
                                  src="/assets/img/home1/mega-menu-home-img8.jpg"
                                  alt=""
                                />
                              </a>
                              <h5>
                                <a href="#">
                                  Renewable Energy <span>Coming Soon</span>
                                </a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={`menu-item-has-children  ${isServiceActive ? "active" : ""}`}
                >
                  <Link href="/service" className="drop-down">
                    Solutions
                  </Link>
                  <i
                    onClick={() => toggleMenu("solution")}
                    className={`bi bi-${state.activeMenu === "solution" ? "dash" : "plus"} dropdown-icon`}
                  />
                  <ul
                    className={`sub-menu ${state.activeMenu === "solution" ? "d-block" : "none"}`}
                  >
                    <li className={pathname === "/service" ? "active" : ""}>
                      <Link href="/service">
                        <span>Services Style 01</span>
                      </Link>
                    </li>
                    <li
                      className={pathname === "/service/style2" ? "active" : ""}
                    >
                      <Link href="/service/style2">
                        <span>Services Style 02</span>
                      </Link>
                    </li>
                    <li
                      className={pathname === "/service/style3" ? "active" : ""}
                    >
                      <Link href="/service/style3">
                        <span>Services Style 03</span>
                      </Link>
                    </li>
                    <li
                      className={pathname === "/service/style4" ? "active" : ""}
                    >
                      <Link href="/service/style4">
                        <span>Services Style 04</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname === "/service/details" ? "active" : ""
                      }
                    >
                      <Link href="/service/details">
                        <span>Service Details</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={pathname === "/about" ? "active" : ""}>
                  <Link href="/about">About</Link>
                </li>
                <li
                  className={`menu-item-has-children  ${isSProjectPathActive ? "active" : ""}`}
                >
                  <a href="#" className="drop-down">
                    Project
                  </a>
                  <i
                    onClick={() => toggleMenu("project")}
                    className={`bi bi-${state.activeMenu === "project" ? "dash" : "plus"} dropdown-icon`}
                  />
                  <ul
                    className={`sub-menu ${state.activeMenu === "project" ? "d-block" : "none"}`}
                  >
                    <li className={pathname === "/project" ? "active" : ""}>
                      <Link href="/project">
                        <span>Project Grid</span>
                      </Link>
                    </li>
                    <li
                      className={pathname === "/project/metro" ? "active" : ""}
                    >
                      <Link href="/project/metro">
                        <span>Project Metro</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname === "/project/horizontal" ? "active" : ""
                      }
                    >
                      <Link href="/project/horizontal">
                        <span>Project Horizontal</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname === "/project/infoflow" ? "active" : ""
                      }
                    >
                      <Link href="/project/infoflow">
                        <span>Project Infoflow</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname === "/project/text-down" ? "active" : ""
                      }
                    >
                      <Link href="/project/text-down">
                        <span>Project Text Down</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname === "/project/single-slider" ? "active" : ""
                      }
                    >
                      <Link href="/project/single-slider">
                        <span>Project Single Slider</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname === "/project/details" ? "active" : ""
                      }
                    >
                      <Link href="/project/details">
                        <span>Project Details</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`menu-item-has-children  ${isInnerPagetPathActive ? "active" : ""}`}
                >
                  <a href="#" className="drop-down">
                    Pages
                  </a>
                  <i
                    onClick={() => toggleMenu("innerPage")}
                    className={`bi bi-${state.activeMenu === "innerPage" ? "dash" : "plus"} dropdown-icon`}
                  />
                  <ul
                    className={`sub-menu ${state.activeMenu === "innerPage" ? "d-block" : "none"}`}
                  >
                    <li className={pathname === "/our-team" ? "active" : ""}>
                      <Link href="/our-team">
                        <span>Our Team</span>
                      </Link>
                    </li>
                    <li className={pathname === "/product" ? "active" : ""}>
                      <Link href="/product">
                        <span>
                          Our Product
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0.0495054 0H10.0001V1.86275L1.88121 10L0 8.13726L5.54461 2.64706L0.0495054 2.69608V0Z" />
                            <path d="M9.99971 9.99993V3.72542L7.32642 6.37248V9.99993H9.99971Z" />
                          </svg>
                        </span>
                      </Link>
                      <i
                        onClick={() => toggleSubMenu("product")}
                        className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "product" ? "dash" : "plus"} dropdown-icon`}
                      />
                      <ul
                        className={`sub-menu ${state.activeSubMenu === "product" ? "d-block" : "none"}`}
                      >
                        <li className={pathname === "/product" ? "active" : ""}>
                          <Link href="/product">
                            <span>Our Product</span>
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/product/details" ? "active" : ""
                          }
                        >
                          <Link href="/product/details">
                            <span>Product Details</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={pathname === "/our-process" ? "active" : ""}>
                      <Link href="/our-process">
                        <span>Our Process</span>
                      </Link>
                    </li>
                    <li className={pathname === "/our-clients" ? "active" : ""}>
                      <Link href="/our-clients">
                        <span>Our Clients</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <span>
                          Blog
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0.0495054 0H10.0001V1.86275L1.88121 10L0 8.13726L5.54461 2.64706L0.0495054 2.69608V0Z" />
                            <path d="M9.99971 9.99993V3.72542L7.32642 6.37248V9.99993H9.99971Z" />
                          </svg>
                        </span>
                      </Link>
                      <i
                        onClick={() => toggleSubMenu("blog")}
                        className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "blog" ? "dash" : "plus"} dropdown-icon`}
                      />
                      <ul
                        className={`sub-menu ${state.activeSubMenu === "blog" ? "d-block" : "none"}`}
                      >
                        <li className={pathname === "/blog" ? "active" : ""}>
                          <Link href="/blog">
                            <span>Blog Grid</span>
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/blog/sidebar" ? "active" : ""
                          }
                        >
                          <Link href="/blog/sidebar">
                            <span>Blog Sidebar</span>
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/blog/standard" ? "active" : ""
                          }
                        >
                          <Link href="/blog/standard">
                            <span>Blog Standard</span>
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/blog/details" ? "active" : ""
                          }
                        >
                          <Link href="/blog/details">
                            <span>Blog Details</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        pathname === "/career" || pathname === "/career-details"
                          ? "active"
                          : ""
                      }
                    >
                      <Link href="/career">
                        <span>
                          Career
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0.0495054 0H10.0001V1.86275L1.88121 10L0 8.13726L5.54461 2.64706L0.0495054 2.69608V0Z" />
                            <path d="M9.99971 9.99993V3.72542L7.32642 6.37248V9.99993H9.99971Z" />
                          </svg>
                        </span>
                      </Link>
                      <i
                        onClick={() => toggleSubMenu("carrer")}
                        className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "carrer" ? "dash" : "plus"} dropdown-icon`}
                      />
                      <ul
                        className={`sub-menu ${state.activeSubMenu === "carrer" ? "d-block" : "none"}`}
                      >
                        <li className={pathname === "/career" ? "active" : ""}>
                          <Link href="/career">
                            <span>Career</span>
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/career-details" ? "active" : ""
                          }
                        >
                          <Link href="/career-details">
                            <span>Career Details</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop">
                        <span>
                          Shop
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0.0495054 0H10.0001V1.86275L1.88121 10L0 8.13726L5.54461 2.64706L0.0495054 2.69608V0Z" />
                            <path d="M9.99971 9.99993V3.72542L7.32642 6.37248V9.99993H9.99971Z" />
                          </svg>
                        </span>
                      </Link>
                      <i
                        onClick={() => toggleSubMenu("shop")}
                        className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "shop" ? "dash" : "plus"} dropdown-icon`}
                      />
                      <ul
                        className={`sub-menu ${state.activeSubMenu === "shop" ? "d-block" : "none"}`}
                      >
                        <li className={pathname === "/shop" ? "active" : ""}>
                          <Link href="/shop">
                            <span>Shop</span>
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/shop-details" ? "active" : ""
                          }
                        >
                          <Link href="/shop-details">
                            <span>Shop Details</span>
                          </Link>
                        </li>
                        <li className={pathname === "/cart" ? "active" : ""}>
                          <Link href="/cart">
                            <span>Cart</span>
                          </Link>
                        </li>
                        <li
                          className={pathname === "/checkout" ? "active" : ""}
                        >
                          <Link href="/checkout">
                            <span>Checkout</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={pathname === "/faq" ? "active" : ""}>
                      <Link href="/faq">
                        <span>FAQ</span>
                      </Link>
                    </li>
                    <li className={pathname === "/contact" ? "active" : ""}>
                      <Link href="/contact">
                        <span>Contact Us</span>
                      </Link>
                    </li>

                  </ul>
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <div className="right-sidebar-button">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="11.2" height="1.4" rx="0.699998" />
                  <rect
                    x="2.80078"
                    y="5.6"
                    width="11.2"
                    height="2.79999"
                    rx="1.4"
                  />
                  <rect y="12.6" width="11.2" height="1.4" rx="0.699998" />
                </svg>
                <span>GET IN TOUCH</span>
              </div>
              <div className="sidebar-button mobile-menu-btn">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.29608 0.0658336C0.609639 0.31147 0.139209 0.899069 0.0432028 1.63598C-0.0144009 2.09353 -0.0144009 5.4939 0.0432028 5.95146C0.129608 6.59686 0.489632 7.11703 1.07047 7.42046L1.36329 7.57458H3.83545H6.30761L6.59563 7.42046C6.96525 7.2278 7.25807 6.93401 7.45008 6.56314L7.60369 6.27416V3.79372V1.31328L7.45008 1.02429C7.25807 0.653433 6.96525 0.359633 6.59563 0.166978L6.30761 0.0128531L3.90745 0.00322056C1.83372 -0.00641251 1.4785 0.00322056 1.29608 0.0658336ZM6.2356 0.802741C6.52842 0.956866 6.65803 1.08209 6.79244 1.34699L6.90765 1.57336V3.80817V6.03816L6.74924 6.29824C6.53322 6.66429 6.2068 6.85694 5.74117 6.90029C5.54916 6.91956 4.55549 6.92437 3.52343 6.91474L1.65131 6.90029L1.41129 6.77025C1.12807 6.62094 1.00807 6.49571 0.854455 6.20191L0.739248 5.98518V3.79372V1.60226L0.854455 1.38552C1.05607 0.995397 1.33929 0.778659 1.74731 0.706413C1.85292 0.687148 2.85618 0.677515 3.97946 0.677515L6.01959 0.687148L6.2356 0.802741Z" />
                  <path d="M11.6647 0.0658336C10.9783 0.31147 10.5079 0.899069 10.4119 1.63598C10.3879 1.82863 10.3687 2.80154 10.3687 3.79372C10.3687 4.7859 10.3879 5.75881 10.4119 5.95146C10.4983 6.59686 10.8583 7.11703 11.4391 7.42046L11.7319 7.57458H14.2041H16.6763L16.9643 7.42046C17.3339 7.2278 17.6267 6.93401 17.8187 6.56314L17.9723 6.27416V3.79372V1.31328L17.8187 1.02429C17.6267 0.653433 17.3339 0.359633 16.9643 0.166978L16.6763 0.0128531L14.2761 0.00322056C12.2024 -0.00641251 11.8471 0.00322056 11.6647 0.0658336ZM16.6043 0.802741C16.9019 0.956866 17.0267 1.08209 17.1611 1.35181L17.2811 1.583L17.2763 3.79854C17.2763 5.73472 17.2667 6.03816 17.1995 6.1682C17.0555 6.45237 16.9067 6.61131 16.6475 6.7558L16.3882 6.90029H14.2041H12.02L11.7799 6.77025C11.4967 6.62094 11.3767 6.49571 11.2231 6.20191L11.1079 5.98518V3.79372V1.60226L11.2231 1.38552C11.4247 0.995397 11.7079 0.778659 12.116 0.706413C12.2216 0.687148 13.2248 0.677515 14.3481 0.677515L16.3882 0.687148L16.6043 0.802741Z" />
                  <path d="M1.29608 10.4693C0.609639 10.7149 0.139209 11.3025 0.0432028 12.0394C-0.0144009 12.497 -0.0144009 15.8973 0.0432028 16.3549C0.129608 17.0003 0.489632 17.5205 1.07047 17.8239L1.36329 17.978H3.83545H6.30761L6.59563 17.8239C6.96525 17.6312 7.25807 17.3374 7.45008 16.9666L7.60369 16.6776V14.1972V11.7167L7.45008 11.4277C7.25807 11.0569 6.96525 10.7631 6.59563 10.5704L6.30761 10.4163L3.90745 10.4067C1.83372 10.397 1.4785 10.4067 1.29608 10.4693ZM6.2356 11.2062C6.52842 11.3603 6.65803 11.4855 6.79244 11.7504L6.90765 11.9768V14.2116V16.4416L6.74924 16.7017C6.53322 17.0677 6.2068 17.2604 5.74117 17.3037C5.54916 17.323 4.55549 17.3278 3.52343 17.3182L1.65131 17.3037L1.41129 17.1737C1.12807 17.0244 1.00807 16.8992 0.854455 16.6054L0.739248 16.3886V14.1972V12.0057L0.854455 11.789C1.05607 11.3988 1.33929 11.1821 1.74731 11.1099C1.85292 11.0906 2.85618 11.081 3.97946 11.081L6.01959 11.0906L6.2356 11.2062Z" />
                  <path d="M13.2441 10.4934C11.8856 10.8498 10.8583 11.8853 10.5079 13.2531C10.3735 13.7781 10.3735 14.6162 10.5079 15.1412C10.8343 16.4127 11.732 17.3808 12.9945 17.8239C13.3593 17.9491 13.4937 17.9732 14.0601 17.9925C14.617 18.0117 14.7754 17.9973 15.1162 17.9106C16.5179 17.5542 17.5452 16.5283 17.9052 15.1219C18.0348 14.6162 18.03 13.7685 17.9004 13.2531C17.55 11.8757 16.5179 10.8401 15.145 10.4885C14.6314 10.3585 13.7529 10.3585 13.2441 10.4934ZM15.2314 11.2784C15.7066 11.4518 16.0475 11.6782 16.4363 12.0828C17.0075 12.6848 17.2763 13.3639 17.2763 14.2068C17.2763 15.0882 17.0075 15.7288 16.3691 16.3645C15.721 17.0099 15.0826 17.2796 14.2186 17.2845C13.7001 17.2845 13.3113 17.193 12.8121 16.957C12.5336 16.8221 12.3608 16.692 12.0392 16.3694C11.396 15.724 11.132 15.0882 11.132 14.1972C11.132 13.3495 11.396 12.6896 11.972 12.0828C12.3608 11.6782 12.7017 11.4518 13.1817 11.2736C13.7913 11.0521 14.6218 11.0521 15.2314 11.2784Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header5;
