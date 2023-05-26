import React from "react";
// import BreadCumb from "../components/BreadCumb.js";
// import Meta from "../components/Meta.js";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">CyberShark</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Giỏ hàng
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Thông tin giao hàng
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Vận chuyển
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price"
                    aria-current="page"
                  >
                    Thanh toán
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Thông tin liên lạc</h4>
              <p className="user-details total">bangbui2301@gmail.com</p>
              <h4 className="mb-3">Thông tin giao hàng</h4>
              <form
                action=""
                className="d-flex gap-15 justify-content-between flex-wrap"
              >
                {/* <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Quốc gia
                      </option>
                    </select>
                  </div> */}
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Họ và Tên"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Chọn thành ph
                    </option>
                  </select>
                </div>

                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Quận, huyện"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Số nhà, tên đường"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" /> Quay trở lại Giỏ hàng
                    </Link>
                    <Link to="/cart" className="button">
                      Tiếp tục mua sắm
                    </Link>
                  </div>
                </div>

                {/* <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Thành phố"
                      className="form-control"
                    />
                  </div> */}
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="title total">abcdef</h5>
                    <p className="total">Đây là một chiếc đồng hô</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total-price">500.000</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="total">Tạm tính</h4>
                <h5 className="total-price">1.000.000đ</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0 total">Phí ship</h4>
                <h5 className="mb-0 total-price">20.000đ</h5>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-4">
              <h4 className="total">Tổng tiền</h4>
              <h5 className="total-price">1.000.000đ</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
