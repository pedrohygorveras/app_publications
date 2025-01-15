import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useNotifyError } from "@/hooks/useNotifyError";
import { signIn } from "@/services/auth";
import { useAuthContext } from "@/contexts/Auth/useContext";

export const useLogin = () => {
  const { login } = useAuthContext();
  const { notifyError } = useNotifyError();
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

  const onSubmit = async (values: typeof initialValues) => {
    const { email, password } = values;

    const result = await signIn({
      email: email,
      password: password,
    });

    if (result.error) {
      return notifyError(result.data);
    }

    const data: any = result.data;

    login(data);
    navigate("/home");
  };

  return { initialValues, validationSchema, onSubmit };
};
