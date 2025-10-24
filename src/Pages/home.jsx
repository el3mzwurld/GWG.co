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
function Home() {
  return (
    <div className="home">
      <header>
        <HeaderCta />
        <div className="header-nav">
          <div className="mob-toggle"></div>
          <div className="title">
            <p>
              <span>GWG</span>.CO
            </p>
          </div>
          <nav></nav>
          <div className="ico">
            <div className="cart"></div>
            <div className="profile"></div>
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
              />
            </div>

            <button className="btn">View All</button>
          </div>
          <div className="top-sellers">
            <div className="title">
              <p>TOP SELLERS</p>
            </div>
            <div className="cards">
              <Card
                name="Kage WRLD DOM"
                prev_price="40,000 NGN"
                price="25,000 NGN"
                discount="20%"
                product={kage2}
                rating={5}
              />
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
              <div className="frame">
                <span>
                  Modern <br /> Corporate
                </span>
                <div className="preview">
                  <img src={modern} alt="" />
                </div>
              </div>{" "}
              <div className="frame">
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
