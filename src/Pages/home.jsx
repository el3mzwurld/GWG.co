import HeaderCta from "../components/signup_cta";
import star from "../assets/img/star.png";
import prada from "../assets/logos/prada-logo.png";
import versace from "../assets/logos/versace.png";
import zara from "../assets/logos/zara.png";
import ck from "../assets/logos/ck.png";
import gucci from "../assets/logos/gucci.png";
import Card from "../components/home_product_card";
import test from "../assets/img/test.png";
import kage1 from "../assets/img/kage vigilante.png";
import kage2 from "../assets/img/kage_world_dom.png";
import casual from "../assets/img/casual.png";
import street from "../assets/img/street wear.png";
import modern from "../assets/img/modern.png";
import Footer from "../components/footer";
import Bg from "../assets/img/Rectangle 4.png";
import { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import {
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";
function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sideToggle, setSideToggle] = useState(false);
  const [trayLength, setTrayLength] = useState(0);
  const [dropDownShow, setDropDownShow] = useState(false);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [toggleSearch, setToggleSearch] = useState(false);
  const handleSearchToggle = () => {
    setToggleSearch((prev) => {
      return (prev = !prev);
    });
  };

  const toggleSide = () => {
    setSideToggle((prev) => !prev);
  };

  const handleDropDown = () => {
    setDropDownShow((prev) => !prev);
  };
  return (
    <div className="home">
      <header>
        <HeaderCta />
        <div className="header-nav">
          {windowWidth <= 519 && (
            <div className="mob-toggle">
              {windowWidth <= 519 && sideToggle ? (
                <BsLayoutSidebarInset
                  size={25}
                  onClick={toggleSide}
                ></BsLayoutSidebarInset>
              ) : (
                <BsLayoutSidebarInsetReverse size={25} onClick={toggleSide} />
              )}
            </div>
          )}
          <div className="title">
            <p>
              <span>GWG</span>.CO
            </p>
          </div>
          {windowWidth > 1023 && (
            <nav>
              {" "}
              <ul>
                <li>
                  <span onClick={handleDropDown}>Shop</span>
                  {dropDownShow ? (
                    <RiArrowDropUpLine
                      size={20}
                      fontWeight={400}
                      color="gray"
                    />
                  ) : (
                    <RiArrowDropDownLine size={20} color="gray" />
                  )}
                  <ul className={`dropdown ${dropDownShow ? "show" : ""}`}>
                    <li>For Men</li>
                    <li>For Women</li>
                  </ul>
                </li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
              </ul>{" "}
            </nav>
          )}
          <div className="ico">
            <div className="search">
              {windowWidth < 520 && (
                <FaSearch size={20} color="gray" onClick={handleSearchToggle} />
              )}
              {windowWidth >= 520 && windowWidth <= 1023 && (
                <FaSearch size={15} color="gray" onClick={handleSearchToggle} />
              )}
              {windowWidth >= 1024 && (
                <FaSearch size={15} color="gray" onClick={handleSearchToggle} />
              )}

              <input
                type="text"
                placeholder="Search for Products..."
                aria-label="Text-box"
                className={`search-box ${toggleSearch ? "show" : ""}`}
              />
            </div>
            {/* FaShoppingCart */}
            <div className="cart">
              {windowWidth < 520 && <FaShoppingCart size={20} color="gray" />}
              {windowWidth >= 520 && windowWidth <= 1023 && (
                <FaShoppingCart size={20} color="#395439" />
              )}{" "}
              {windowWidth > 1023 && (
                <FaShoppingCart size={20} color="#395439" />
              )}
              <span>{trayLength}</span>
            </div>
            {windowWidth < 520 && <FaRegUserCircle size={20} color="gray" />}
            {windowWidth > 520 && windowWidth <= 1023 && (
              <FaRegUserCircle size={25} color="#395439" />
            )}
            {windowWidth > 1023 && (
              <FaRegUserCircle size={25} color="#395439" />
            )}
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-txt">
            <div className="txt-content">
              <div className="content-text">
                <p className="title">FIND CLOTHES TO MATCH YOUR VIBE.</p>
                <p className="sub">
                  Browse through our range of meticulously crafted threads,
                  designed to bring out your steeze and match your sense of
                  style.
                </p>
              </div>
              <button>Shop Now</button>
            </div>
            <div className="txt-stats">
              <div className="stat">
                <h2>200+</h2>
                <p>International Brands</p>
              </div>
              <div className="stat">
                <h2>2,000+</h2>
                <p>High quality products</p>
              </div>
              <div className="stat">
                <h2>35,000+</h2>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <div className="img">
              <img src={star} alt="" className="star" />
              <img src={star} alt="" className="star" />
              {windowWidth > 1023 && <img src={Bg} alt="" className="img-bg" />}
            </div>
          </div>
          <div className="partners">
            <div className="frame">
              <img src={versace} alt="" />
            </div>
            <div className="frame">
              <img src={zara} alt="" />
            </div>{" "}
            <div className="frame">
              <img src={gucci} alt="" />
            </div>{" "}
            <div className="frame">
              <img src={prada} alt="" />
            </div>{" "}
            <div className="frame">
              <img src={ck} alt="" />
            </div>
          </div>
        </section>
        <section className="hero-cats">
          <div className="new-arrivals">
            <div className="title">
              <p>NEW ARRIVALS</p>
            </div>
            <div className="cards">
              <Card
                name="New rules plain Tee"
                prev_price="$45"
                price="$20"
                product={test}
                discount=""
                rating={4.5}
              />
              <Card
                name="New rules plain Tee"
                prev_price="$45"
                price="$20"
                product={test}
                discount=""
                rating={4.5}
              />{" "}
              <Card
                name="New rules plain Tee"
                prev_price="$45"
                price="$20"
                product={test}
                discount=""
                rating={4.5}
              />{" "}
              <Card
                name="New rules plain Tee"
                prev_price="$45"
                price="$20"
                product={test}
                discount=""
                rating={4.5}
              />{" "}
            </div>

            <button className="btn">View All</button>
          </div>
          <div className="top-sellers">
            <div className="title">
              <p>TOP SELLERS</p>
            </div>
            <div className="cards">
              <Card
                name="KAGE VIG BANDANA"
                price="6,000 NGN"
                discount="20%"
                product={kage1}
                rating={5}
              />
              <Card
                name="KAGE VIG BANDANA"
                price="6,000 NGN"
                discount="20%"
                product={kage1}
                rating={5}
              />{" "}
              <Card
                name="KAGE VIG BANDANA"
                price="6,000 NGN"
                discount="20%"
                product={kage1}
                rating={5}
              />{" "}
              <Card
                name="KAGE VIG BANDANA"
                price="6,000 NGN"
                discount="20%"
                product={kage1}
                rating={5}
              />
            </div>
            <button className="btn">View all</button>
          </div>
        </section>
        <section className="category">
          <div className="container">
            <p className="title">BROWSE BY DRESS STYLE</p>

            <div className="frames">
              <div className="frame">
                <span>Casual</span>
                <div className="preview">
                  <img src={casual} alt="" />
                </div>
              </div>
              <div className="frame" id="frame-2">
                <span>
                  Modern <br /> Corporate
                </span>
                <div className="preview">
                  <img src={modern} alt="" />
                </div>
              </div>{" "}
              <div className="frame" id="frame-3">
                <span>
                  Street <br /> Wear
                </span>
                <div className="preview">
                  <img src={street} alt="" />
                </div>
              </div>{" "}
            </div>
          </div>
        </section>
        <div className="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Home;

//
