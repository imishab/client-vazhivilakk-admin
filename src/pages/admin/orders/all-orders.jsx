import React, { useState } from "react";
import { useFetchOrdersQuery } from "../../../redux/api/adminApi";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import Modal from "react-bootstrap/Modal";

export default function AllOrders() {
  const { data: orders, isLoading } = useFetchOrdersQuery("");

  // State for modal visibility and selected order
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Open modal with selected order
  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  // Rest of your component code remains the same, but use the interfaces
  // when mapping through orders:
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-xxl mt-4">
          <div className="row">
            <div className="col-md-12 col-xl-12">
              <div className="row g-3">
                <div className="col-md-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="fs-14 mb-1">Website Traffic</div>
                      </div>
                      <div className="d-flex align-items-baseline mb-2">
                        <div className="fs-22 mb-0 me-2 fw-semibold text-black">
                          91.6K
                        </div>
                        <div className="me-auto">
                          <span className="text-primary d-inline-flex align-items-center">
                            15%
                            <i
                              data-feather="trending-up"
                              className="ms-1"
                              style={{ height: 22, width: 22 }}
                            />
                          </span>
                        </div>
                      </div>
                      <div id="website-visitors" className="apex-charts" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="fs-14 mb-1">Conversion rate</div>
                      </div>
                      <div className="d-flex align-items-baseline mb-2">
                        <div className="fs-22 mb-0 me-2 fw-semibold text-black">
                          15%
                        </div>
                        <div className="me-auto">
                          <span className="text-danger d-inline-flex align-items-center">
                            10%
                            <i
                              data-feather="trending-down"
                              className="ms-1"
                              style={{ height: 22, width: 22 }}
                            />
                          </span>
                        </div>
                      </div>
                      <div id="conversion-visitors" className="apex-charts" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="fs-14 mb-1">Session duration</div>
                      </div>
                      <div className="d-flex align-items-baseline mb-2">
                        <div className="fs-22 mb-0 me-2 fw-semibold text-black">
                          90 Sec
                        </div>
                        <div className="me-auto">
                          <span className="text-success d-inline-flex align-items-center">
                            25%
                            <i
                              data-feather="trending-up"
                              className="ms-1"
                              style={{ height: 22, width: 22 }}
                            />
                          </span>
                        </div>
                      </div>
                      <div id="session-visitors" className="apex-charts" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="fs-14 mb-1">Active Users</div>
                      </div>
                      <div className="d-flex align-items-baseline mb-2">
                        <div className="fs-22 mb-0 me-2 fw-semibold text-black">
                          2,986
                        </div>
                        <div className="me-auto">
                          <span className="text-success d-inline-flex align-items-center">
                            4%
                            <i
                              data-feather="trending-up"
                              className="ms-1"
                              style={{ height: 22, width: 22 }}
                            />
                          </span>
                        </div>
                      </div>
                      <div id="active-users" className="apex-charts" />
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end sales */}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">All Orders</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      id="scroll-vertical-datatable"
                      className="table table-bordered dt-responsive nowrap w-100"
                    >
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Order Id.</th>
                          <th>User Details</th>
                          <th>Total Price</th>
                          <th>Status</th>
                          <th>Update Status</th>
                          <th>Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td colSpan={8} className="text-center">
                              <div className="loader-container d-flex">
                                <div
                                  className="spinner-border spinner-border-sm text-dark me-2"
                                  role="status"
                                ></div>
                                <p className="mt-3">Please wait...</p>
                              </div>
                            </td>
                          </tr>
                        ) : orders?.length > 0 ? (
                          orders.map((order, index) => (
                            <tr key={order._id}>
                              <td>{index + 1}</td>
                              <td>#TSF003</td>
                              <td>
                                <p>
                                  <strong>Name :</strong>{" "}
                                  {order.user?.name || "N/A"} <br />
                                  <strong>Phone :</strong>{" "}
                                  {order.user?.phone || "N/A"}
                                </p>
                              </td>
                              <td>₹{order.totalAmount}</td>
                              <td>
                                <span
                                  className={`badge rounded-pill ${
                                    order.status === "Pending"
                                      ? "bg-warning text-white"
                                      : order.status === "Placed"
                                      ? "bg-dark"
                                      : order.status === "Delivered"
                                      ? "bg-success"
                                      : order.status === "Rejected"
                                      ? "bg-danger"
                                      : "bg-secondary"
                                  }`}
                                >
                                  {order.status || "N/A"}
                                </span>
                              </td>
                              <td>
                                <div className="btn-group" role="group">
                                  <button
                                    type="button"
                                    className="btn btn-dark btn-sm dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Select Status{" "}
                                    <i className="mdi mdi-chevron-down"></i>
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Shipped
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Delivering
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Delivered
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>

                              <td>
                                <Eye
                                  size={16}
                                  onClick={() => handleOpenModal(order)}
                                  style={{ cursor: "pointer" }}
                                  className="me-3"
                                />

                                <SquarePen
                                  size={16}
                                  onClick={() => handleOpenModal(order)}
                                  style={{ cursor: "pointer" }}
                                  className="me-3"
                                />

                                <Trash2
                                  size={16}
                                  color="red"
                                  onClick={() => handleOpenModal(order)}
                                  style={{ cursor: "pointer" }}
                                  className="me-3"
                                />
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={8} className="text-center">
                              No orders found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Product Details */}
      {selectedOrder && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            {/* <Modal.Title>Order Id : {selectedOrder._id || "N/A"}</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <>
              <div className="invoice-box">
                <table cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr className="top">
                      <td colSpan={2}>
                        <table>
                          <tbody>
                            <tr>
                              <td className="title">
                                <>Invoice</>
                              </td>
                              <td>
                                Invoice #: 123
                                <br />
                                Created: {selectedOrder.createdAt || "N/A"}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr className="information">
                      <td colSpan={2}>
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <b>User Address :</b> <br />
                                Sparksuite, Inc.
                                <br />
                                12345 Sunny Road
                                <br />
                                Sunnyville, CA 12345
                              </td>
                              <td>
                                <b>User Details :</b> <br />
                                {selectedOrder.user?.name || "N/A"}
                                <br />
                                {selectedOrder.user?.phone || "N/A"}
                                <br />
                                {selectedOrder.user?.email || "N/A"}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ width: "100%" }}
                >
                  <tbody>
                    <tr className="heading">
                      <td>Item</td>
                      <td>Price</td>
                      <td>Qty</td>
                      <td>Sub Total</td>
                    </tr>
                    {selectedOrder.items.map((item, index) => (
                      <tr className="item" key={index}>
                        <td>
                          <img
                            src={`https://backend-tastify.onrender.com${item.product.image}`}
                            alt={item.product.title}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                              marginRight: "8px",
                            }}
                          />
                          {item.product?.title || "N/A"}
                        </td>
                        <td>₹{item.product?.price || "N/A"}</td>
                        <td>x {item.quantity}</td>
                        <td>
                          ₹{item.product?.price * item.quantity || "0.00"}
                        </td>
                      </tr>
                    ))}
                    <tr className="total-heading">
                      <td
                        colSpan={3}
                        style={{ textAlign: "right", fontWeight: "bold" }}
                      >
                        GST:
                      </td>
                      <td style={{ fontWeight: "bold", paddingRight: 25 }}>
                        ₹40 (18%)
                      </td>
                    </tr>
                    <tr className="total-heading">
                      <td
                        colSpan={3}
                        style={{ textAlign: "right", fontWeight: "bold" }}
                      >
                        Delivery:
                      </td>
                      <td style={{ fontWeight: "bold", paddingRight: 25 }}>
                        ₹20
                      </td>
                    </tr>
                    <tr className="total-heading">
                      <td
                        colSpan={3}
                        style={{ textAlign: "right", fontWeight: "bold" }}
                      >
                        Total:
                      </td>
                      <td style={{ fontWeight: "bold", paddingRight: 25 }}>
                        ₹
                        {selectedOrder.items.reduce(
                          (acc, item) =>
                            acc + item.product?.price * item.quantity,
                          0
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          </Modal.Body>
          <Modal.Footer>
            <a className="btn btn-primary">Print</a>
            <a className="btn btn-dark" onClick={handleCloseModal}>
              Close
            </a>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
