import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { checkAuthentication } from "./CheckAuthentication";

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const isAuthenticated = checkAuthentication();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/admin/signin");
      }
    }, [isAuthenticated, router]);

    // Avoid rendering the WrappedComponent if not authenticated
    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
