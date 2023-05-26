import React from "react";
import BreadCumb from "../components/BreadCumb.js";
import Meta from "../components/Meta.js";
import watch from "../images/watch.jpg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container.js";
const Cart = () => {
  return (
    <>
      <Meta title={"Giỏ hàng"} />
      <BreadCumb title="Giỏ hàng" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="card-header py-3 d-flex justify-content-between align-items-center">
            <h4 className="cart-col-1">Sản phẩm</h4>
            <h4 className="cart-col-2">Giá</h4>
            <h4 className="cart-col-3">Số lượng</h4>
            <h4 className="cart-col-4">Tổng</h4>
          </div>
          <div className="card-data py-3 mb-2 d-flex justify-content-between align-items-center">
            <div className="cart-col-1 gap-15 d-flex align-items-center">
              <div className="w-25">
                <img src={watch} className="img-fluid" alt="product image" />
              </div>
              <div className="w-75">
                <p>abcdef</p>
              </div>
            </div>
            <div className="cart-col-2">
              <h5 className="price">500.000đ</h5>
            </div>
            <div className="cart-col-3 d-flex align-items-center gap-15">
              <div>
                <input
                  type="number"
                  name=""
                  className="form-control"
                  min={1}
                  max={10}
                  id=""
                />
              </div>
              <div>
                <MdDelete className="text-danger" />
              </div>
            </div>
            <div className="cart-col-4">
              <h5 className="price">500.000đ</h5>
            </div>
          </div>
          <div className="card-data py-3 mb-2 d-flex justify-content-between align-items-center">
            <div className="cart-col-1 gap-15 d-flex align-items-center">
              <div className="w-25">
                <img src={watch} className="img-fluid" alt="product image" />
              </div>
              <div className="w-75">
                <p>abcdef</p>
              </div>
            </div>
            <div className="cart-col-2">
              <h5 className="price">500.000đ</h5>
            </div>
            <div className="cart-col-3 d-flex align-items-center gap-15">
              <div>
                <input
                  type="number"
                  name=""
                  className="form-control"
                  min={1}
                  max={10}
                  id=""
                />
              </div>
              <div>
                <MdDelete className="text-danger" />
              </div>
            </div>
            <div className="cart-col-4">
              <h5 className="price">500.000đ</h5>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Tiếp tục mua sắm
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>Tổng tiền: 500.000đ</h4>
                <p>Phí ship sẽ được tính lúc xác nhận</p>
                <Link to="/checkout" className="button">
                  Đặt hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
