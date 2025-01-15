import React from "react";
import { Formik, Form } from "formik";
import { useLogin } from "./hooks/useLogin";
import { InputField } from "@/components/InputField";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const { initialValues, validationSchema, onSubmit } = useLogin();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="w-full max-w-sm space-y-8">
          <InputField
            label="E-mail:"
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            autoComplete="off"
          />
          <InputField
            label="Senha:"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            Icon={AiOutlineEyeInvisible}
            autoComplete="new-password"
          />

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-secondary font-bold text-white min-w-40 mt-6"
            >
              LOGIN
            </button>

            <Link
              to="/register"
              className="font-semibold text-primary mt-6 underline block"
            >
              Não possui uma conta? Cadastre-se
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};
