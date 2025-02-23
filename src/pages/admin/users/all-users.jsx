import React, { Key } from "react";
import { useFetchUsersQuery } from "../../../redux/api/adminApi";

export default function allProducts() {
  const { data: users, isLoading, isError } = useFetchUsersQuery("");
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users.</p>;
  return (
    <div className="content-page">
      <div className="content">
        {/* Start Content*/}
        <div className="container-xxl mt-4">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">All Users</h5>
                  {/* <Link href="/admin/products/add-product" className='btn btn-dark btn-sm'>+ Add New Product</Link> */}
                </div>
                {/* end card header */}
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      id="scroll-vertical-datatable"
                      className="table table-bordered dt-responsive nowrap w-100"
                    >
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Mobile Number</th>
                          <th scope="col">Address</th>
                          <th scope="col">Pincode</th>

                          <th scope="col">Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users?.map((user, index) => (
                          <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.email}</td>
                            <td>{user.email}</td>
                            <td>{user.email}</td>

                            <td>
                              <button className="btn btn-dark btn-sm me-2 mb-0">
                                Edit
                              </button>
                              <button className="btn btn-danger btn-sm mb-0">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
