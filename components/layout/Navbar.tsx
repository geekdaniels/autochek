import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="agile-main-top">
        <div className="container-fluid">
          <div className="row main-top-w3l py-2">
            <div className="col-lg-4 header-most-top">
              <p className="text-white text-lg-left text-center">
                Offer Zone Top Deals & Discounts
                <i className="fas fa-shopping-cart ml-1"></i>
              </p>
            </div>
            <div className="col-lg-8 header-right mt-lg-0 mt-2">
              <ul>
                <li className="text-center border-right text-white">
                  <a
                    className="play-icon popup-with-zoom-anim text-white"
                    href="#small-dialog1"
                  >
                    <i className="fas fa-map-marker mr-2"></i>Select Location
                  </a>
                </li>
                <li className="text-center border-right text-white">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="text-white"
                  >
                    <i className="fas fa-truck mr-2"></i>Track Order
                  </a>
                </li>
                <li className="text-center border-right text-white">
                  <i className="fas fa-phone mr-2"></i> 001 234 5678
                </li>
                <li className="text-center border-right text-white">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="text-white"
                  >
                    <i className="fas fa-sign-in-alt mr-2"></i> Log In{" "}
                  </a>
                </li>
                <li className="text-center text-white">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal2"
                    className="text-white"
                  >
                    <i className="fas fa-sign-out-alt mr-2"></i>Register{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bot">
        <div className="container">
          <div className="row header-bot_inner_wthreeinfo_header_mid">
            <div className="col-md-3 logo_agile">
              <h1 className="text-center">
                <Link href={"/"}>
                  <a className="font-weight-bold font-italic">Cars Store</a>
                </Link>
              </h1>
            </div>

            <div className="col-md-9 header mt-4 mb-md-0 mb-4">
              <div className="row">
                <div className="col-10 agileits_search">
                  <form className="form-inline" action="#" method="post">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      required
                    />
                    <button className="btn my-2 my-sm-0" type="submit">
                      Search
                    </button>
                  </form>
                </div>

                <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                  <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                    <form action="#" method="post" className="last">
                      <input type="hidden" name="cmd" value="_cart" />
                      <input type="hidden" name="display" value="1" />
                      <button
                        className="btn w3view-cart"
                        type="submit"
                        name="submit"
                        value=""
                      >
                        <i className="fas fa-cart-arrow-down"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-inner">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="agileits-navi_search">
              <form action="#" method="post">
                <select
                  id="agileinfo-nav_search"
                  name="agileinfo_search"
                  className="border"
                >
                  <option value="">All Categories</option>
                  <option value="Televisions">Televisions</option>
                  <option value="Headphones">Headphones</option>
                  <option value="Computers">Computers</option>
                  <option value="Appliances">Appliances</option>
                  <option value="Mobiles">Mobiles</option>
                  <option value="Fruits &amp; Vegetables">
                    Tv &amp; Video
                  </option>
                  <option value="iPad & Tablets">iPad & Tablets</option>
                  <option value="Cameras & Camcorders">
                    Cameras & Camcorders
                  </option>
                  <option value="Home Audio & Theater">
                    Home Audio & Theater
                  </option>
                </select>
              </form>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto text-center mr-xl-5">
                <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                  <a className="nav-link" href="index.html">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
