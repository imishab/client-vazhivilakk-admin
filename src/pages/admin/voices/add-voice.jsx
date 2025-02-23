import {
  useAddVoiceMutation,
  useFetchCategoriesQuery,
} from "../../../redux/api/adminApi";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function addVoice() {
  const [author, setAuthor] = useState("");
  const [voicename, setVoicename] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [audio, setaudio] = useState(null);
  const [addVoice, { isLoading, isSuccess }] = useAddVoiceMutation();
  const { data: categories, isError } = useFetchCategoriesQuery("");
  const router = useRouter();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setaudio(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!audio) {
      alert("Please upload an audio file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("author", author);
      formData.append("voicename", voicename);
      formData.append("note", note);
      formData.append("category", category);
      formData.append("audio", audio);

      console.log("Submitting formData:", formData); // Debugging step

      await addVoice(formData).unwrap();

      setAuthor("");
      setVoicename("");
      setNote("");
      setCategory("");
      setaudio(null);

      router.push("/admin/voices/all-voices");
    } catch (error) {
      console.error("Error adding voice:", error);
      alert(error?.data?.message || "Failed to add voice.");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("The voice has been successfully added!", {
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
          {/* Start Content*/}
          <div className="container-xxl mt-4">
            <div className="container">
              <form role="form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-7">
                    <div className="card card-plain p-2">
                      <div className="card-header">
                        <div className="d-flex align-items-center">
                          <Link href="/admin/voices/all-voices">
                            {" "}
                            <ArrowLeft
                              size={18}
                              color="#000"
                              className="me-3 mb-0 mt-0"
                            />
                          </Link>
                          <h5 className="font-weight-bolder mt-2">
                            Add New Voice
                          </h5>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="form-group mb-2">
                          <label className="mb-1">Title</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            value={voicename}
                            onChange={(e) => setVoicename(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group mb-1">
                          <label className="mb-1">Author Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group mb-1">
                          <label className="mb-1 mt-2">Category</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                          >
                            <option value="" selected disabled>
                              Select Category
                            </option>
                            {categories?.map((category, index) => (
                              <>
                                <option value={category._id}>
                                  {category.title}
                                </option>
                              </>
                            ))}
                          </select>
                        </div>

                        <div className="form-group mb-1">
                          <label className="mb-1 mt-2">Note (optional)</label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-md btn-dark  mt-4 w-50 me-1 mb-0"
                          disabled={isLoading}
                        >
                          {isLoading ? "Adding..." : "Add Voice Head"}
                        </button>
                        <Link
                          href="/admin/voices/all-voices"
                          className="btn btn-md btn-secondary  mt-4 mb-0"
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
                          <label className="mb-1 mt-2">Upload Audio</label>
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
              {/* <ToastContainer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
