import React from "react";
import {
  useFetchVoicesQuery,
  useDeleteVoiceMutation,
} from "../../../redux/api/adminApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { Pencil, Trash2, Dot } from "lucide-react";

export default function allVoices() {
  const { data: voices, isLoading, isError, refetch } = useFetchVoicesQuery("");
  const [deleteVoice, { isLoading: isDeleting }] = useDeleteVoiceMutation();
  const router = useRouter();

  // Handle voice deletion
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this voice!",
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
        await deleteVoice(id).unwrap();
        toast.success("Voice deleted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
        });

        refetch();
      } catch (error) {
        toast.error("Failed to delete voice. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });
      }
    }
  };

  return (
    <div className="content-page">
      <div className="content">
        <div className="container-xxl mt-4">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">All Voices</h5>
                  <Link
                    href="/admin/voices/add-voice"
                    className="btn btn-dark btn-sm"
                  >
                    + Add New Voice Head
                  </Link>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      id="scroll-vertical-datatable"
                      className="table table-bordered  nowrap w-100"
                    >
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Audio</th>
                          <th>Title</th>
                          <th>Category</th>
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
                        ) : voices?.length > 0 ? (
                          voices.map((voice, index) => (
                            <tr key={voice._id}>
                              <td>{index + 1}</td>
                              <td>
                                {/* Playable Audio Player */}
                                {voice.audio && (
                                  <audio controls className="mt-2">
                                    <source
                                      src={`https://client-vazhivilakk-backend.onrender.com${voice.audio}`}
                                      type="audio/mpeg"
                                    />
                                    Your browser does not support the audio
                                    element.
                                  </audio>
                                )}
                              </td>
                              <td>
                                <p className="mb-0">{voice.voicename}</p>
                                <p className="mb-0">By : {voice.author}</p>
                              </td>
                              <td>{voice.category?.title || "No Category"}</td>

                              <td>
                                {/* <button className="btn btn-dark btn-sm me-2">
                                  <Pencil size={14} />
                                </button> */}
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleDelete(voice._id)}
                                  disabled={isDeleting}
                                >
                                  {isDeleting ? (
                                    "Deleting..."
                                  ) : (
                                    <Trash2 size={14} />
                                  )}
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={8} className="text-center">
                              No voices found.
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
    </div>
  );
}
