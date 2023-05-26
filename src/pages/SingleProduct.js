import React, { useState } from "react";
import BreadCumb from "../components/BreadCumb.js";
import Meta from "../components/Meta.js";
import ProductCard from "../components/ProductCard.js";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import watch from "../images/watch.jpg";
import Container from "../components/Container.js";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 600,
    img: { watch },
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  const closeModal = () => {};
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Chiếc đồng hồ siêu xịn xò con bò bá cháy
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">500.000đ</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 đánh giá)</p>
                </div>
                <a className="review btn" href="#review">
                  Viết đánh giá
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Loại sản phẩm: </h3>
                  <p className="product-data">DEF</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Thương hiệu: </h3>
                  <p className="product-data">DEF</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Phân loại: </h3>
                  <p className="product-data">DEF</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Thẻ: </h3>
                  <p className="product-data">DEF</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Số lượng còn lại: </h3>
                  <p className="product-data">431 sản phẩm</p>
                </div>
                <div className="d-flex gap-15 align-items-center flex-row mt-2 mb-3">
                  <h3 className="product-heading">Số lượng: </h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      style={{ width: "70px" }}
                      className="form-control"
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-20 ms-5">
                    <button className="button border-0" type="submit">
                      Thêm vào giỏ hàng
                    </button>
                    <button to="/signup" className="button signup">
                      Mua ngay
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" />
                      Thêm vào so sánh
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Thêm vào danh sách yêu thích
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Mô tả sản phẩm</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
                amet quia at adipisci mollitia minus, deserunt ea possimus
                molestias quo, iste facere perferendis repudiandae voluptatum
                porro totam omnis facilis animi!
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Nhận xét</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Nhận xét của khách hàng</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Dựa trên 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Viết nhận xét
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Viết nhận xét</h4>
                <form action="" className="d-flex flex-column gap-20">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={0}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Gửi nhận xét</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div>
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Cù Ngọc Hoàng</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Similique aliquam delectus nostrum, dolorem repellat
                      tempora sed asperiores consequuntur aperiam illo id
                      dolorum nam quia commodi error beatae ipsam voluptatem
                      sequi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="featured-wrapper py-5 home-wrapper-2">
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
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
