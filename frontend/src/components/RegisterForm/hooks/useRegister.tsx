import * as Yup from "yup";

export const useRegister = () => {
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

  const onSubmit = (values: typeof initialValues) => {
    console.log("Formulário de Cadastro:", values);
  };

  return { initialValues, validationSchema, onSubmit };
};
