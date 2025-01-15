import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useNotifyError } from "@/hooks/useNotifyError";
import { register } from "@/services/auth";
import { useAuthContext } from "@/contexts/Auth/useContext";

export const useRegister = () => {
  const { login } = useAuthContext();
  const { notifyError } = useNotifyError();
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("O nome completo é obrigatório")
      .min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    password: Yup.string()
      .required("Senha é obrigatória")
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .matches(/[0-9]/, "A senha deve conter pelo menos um número")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "A senha deve conter pelo menos um caractere especial (!@#$%^&*)"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "As senhas não coincidem")
      .required("A confirmação de senha é obrigatória"),
  });

  const onSubmit = async (values: typeof initialValues) => {
    const { fullName, email, password } = values;

    const result = await register({
      name: fullName,
      email,
      password,
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
