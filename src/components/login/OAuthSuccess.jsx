import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const OAuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/"); // go to home (App)
    } else {
      navigate("/login");
    }
  }, [searchParams, navigate]);

  return <p>Logging you in...</p>;
};

export default OAuthSuccess;