import React from "react";
import {
  useFetchCategoriesQuery,
  useDeleteCategoryMutation,
} from "../../../redux/api/adminApi";
import Link from "next/link";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function AllCategories() {
  // Updated component name to PascalCase
  const {
    data: categories,
    isLoading,
    isError,
    refetch,
  } = useFetchCategoriesQuery("");
  const [deleteCategory, { isLoading: isDeleting }] =
    useDeleteCategoryMutation();

  // Handle category deletion
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this category!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      customClass: {
        confirmButton: "btn btn-danger",
        cancelButton: "btn btn-secondary",
      },
    });

    if (result.isConfirmed) {
      try {
        await deleteCategory(id).unwrap();
        toast.success("Category deleted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
        });

        refetch();
      } catch {
        // Notify user of failure
        toast.error("Failed to delete category. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });
      }
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading categories.</p>;
  return (
    <div className="content-page">
      <div className="content">
        {/* Start Content*/}
        <div className="container-xxl mt-4">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">All Categories</h5>
                  <Link
                    href="/admin/category/add-category"
                    className="btn btn-dark btn-sm"
                  >
                    + Add New Category
                  </Link>
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
                          <th scope="col">#</th>
                          <th scope="col">Image</th>
                          <th scope="col">Title</th>
                          {/* <th scope="col">Desc</th> */}
                          <th scope="col">Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories?.map((category, index) => (
                          <tr key={category._id}>
                            <td>{index + 1}</td>
                            <td>
                              {" "}
                              <img
                                src={`http://localhost:4000${category.image}`}
                                alt={category.title}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  objectFit: "cover",
                                }}
                              />
                            </td>
                            <td>{category.title}</td>
                            {/* <td>{category.desc}</td> */}

                            <td>
                              {/* <button className="btn btn-dark btn-sm me-2">
                                Edit
                              </button> */}
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(category._id)}
                                disabled={isDeleting}
                              >
                                {isDeleting ? "Deleting..." : "Delete"}
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
