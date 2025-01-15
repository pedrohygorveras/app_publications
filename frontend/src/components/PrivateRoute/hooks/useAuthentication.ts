import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "@/contexts/Auth/useContext";

export const useAuthentication = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuthentication = async () => {
      if (user) {
        setLoading(false);
      } else {
        logout();
        navigate("/login");
      }
    };

    setLoading(false);
    checkAuthentication();
  }, [location]);

  return {
    loading,
  };
};
