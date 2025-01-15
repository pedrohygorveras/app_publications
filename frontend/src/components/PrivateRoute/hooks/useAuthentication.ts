import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { authService } from "../services/authService";
import { useAuthContext } from "@/contexts/Auth/useContext";

export const useAuthentication = () => {
  const { user, isAuthenticated } = useAuthContext();

  const [logged, setLogged] = useState<"logged" | "not_logged" | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuthentication = async () => {
      isAuthenticated === true ? setLogged("logged") : setLogged("not_logged");
    };

    setLogged(null);
    checkAuthentication();
  }, [user, location]);

  return {
    logged,
  };
};
