import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import main_banner from "../images/main-banner.jpg";
import cat_banner from "../images/catbanner-01.jpg";
import Container from "../components/Container";
import { services } from "../utils/Data";
import laptop from "../images/laptop.png";
import headphone from "../images/headphone.png";
import mouse from "../images/mouse.png";
import keyboard from "../images/keyboard.png";
import watch from "../images/watch.jpg";
import apple from "../images/brand-01.png";
import dell from "../images/brand-04.png";
import logitech from "../images/logo-logitech.png";
import msi from "../images/logo-msi.png";
import razer from "../images/logo-razer.png";
import asus from "../images/logo-asus.png";
import steelseries from "../images/logo-steelseries.png";
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <Link>
                <img
                  src={main_banner}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between gap-10 align-items-center">
              <div className="small-banner position-relative">
                <Link>
                  <img
                    src={cat_banner}
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                </Link>
              </div>
              <div className="small-banner position-relative">
                <Link>
                  <img
                    src={cat_banner}
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                </Link>
              </div>
              <div className="small-banner position-relative">
                <Link>
                  <img
                    src={cat_banner}
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                </Link>
              </div>
              <div className="small-banner position-relative">
                <Link>
                  <img
                    src={cat_banner}
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Laptops</h6>
                  <p>10 items</p>
                </div>
                <img src={laptop} alt="laptop" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Tai nghe</h6>
                  <p>10 items</p>
                </div>
                <img src={headphone} alt="headphone" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Chuột</h6>
                  <p>10 items</p>
                </div>
                <img src={mouse} alt="mouse" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Bàn phím</h6>
                  <p>10 items</p>
                </div>
                <img src={keyboard} alt="keyboard" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="marque-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 ww-25">
                  <img src={apple} alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src={dell} alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src={logitech} alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src={msi} alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src={razer} alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src={asus} alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src={steelseries} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper-2 home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special products</h3>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </Container>

      <Container class1="laptop-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Laptop</h3>
          </div>{" "}
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col text-center">
              <Link className="button">Xem thêm</Link>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </Container>

      <Container class1="headphone-wrapper home-wrapper-2 py-5">
        {" "}
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Tai nghe</h3>
          </div>{" "}
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col text-center">
              <Link className="button">Xem thêm</Link>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </Container>

      <Container class1="keyboard-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Bàn phím</h3>
          </div>{" "}
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col text-center">
              <Link className="button">Xem thêm</Link>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </Container>

      <Container class1="mouse-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Chuột</h3>
          </div>{" "}
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col text-center">
              <Link className="button">Xem thêm</Link>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Tin tức, khuyến mãi</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
