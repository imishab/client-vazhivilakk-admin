import { useAddCategoryMutation } from "../../../redux/api/adminApi";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AddCategory() {
  // Capitalized the component name
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [addCategory, { isLoading, isSuccess }] = useAddCategoryMutation();
  const router = useRouter();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("image", image);

      await addCategory(formData).unwrap();

      // Reset form fields
      setTitle("");
      setDesc("");
      setImage(null);

      // Redirect with success flag
      router.push("/admin/category/all-categories");
    } catch (error) {
      alert("Failed to add category.");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("The category has been successfully added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
    }
  }, [isSuccess]);

  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-xxl mt-4">
            <form role="form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-lg-7">
                  <div className="card card-plain p-2">
                    <div className="card-header">
                      <div className="d-flex align-items-center">
                        <Link href="/admin/category/all-categories">
                          <ArrowLeft
                            color="#000"
                            size={18}
                            className="me-3 mb-0 mt-0"
                          />
                        </Link>
                        <h5 className="font-weight-bolder mt-2">
                          Add New Category
                        </h5>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="form-group mb-1">
                        <label className="mb-1">Category Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group mb-1">
                        <label className="mb-1 mt-2">
                          Description (optional)
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark mt-4 w-50 me-1 mb-0"
                        disabled={isLoading}
                      >
                        {isLoading ? "Adding..." : "Add Category"}
                      </button>
                      <Link
                        href="/admin/category/all-categories"
                        className="btn btn-secondary mt-4 mb-0"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card card-plain p-2 mb-2">
                    <div className="card-body">
                      <div className="form-group mb-1">
                        <label className="mb-1 mt-2">Upload Image</label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={handleFileChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
