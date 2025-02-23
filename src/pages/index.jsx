import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    if (!token) {
      router.push("/admin/signin"); // Redirect to dashboard if token exists
    } else {
      router.push("/admin/dashboard"); // Redirect to signin if token does not exist
    }
  }, [router]);

  return null; // Return null because this component handles only redirection
}
