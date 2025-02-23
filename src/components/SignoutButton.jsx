import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { clearAdminDetails } from "../redux/slices/adminSlice";

const SignoutButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignout = () => {
    // Clear local storage and token
    localStorage.removeItem("token");
    dispatch(clearAdminDetails());
    router.push("/admin/signin");
  };

  return (
    <button onClick={handleSignout} className="btn btn-danger">
      Signout
    </button>
  );
};

export default SignoutButton;
