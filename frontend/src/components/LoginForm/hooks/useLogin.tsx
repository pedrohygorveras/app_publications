import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    password: Yup.string().required("Senha é obrigatória"),
  });

  const onSubmit = (values: typeof initialValues) => {
    console.log("Login Form Values:", values);

    navigate("/home");
  };

  return { initialValues, validationSchema, onSubmit };
};
