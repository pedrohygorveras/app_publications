import React from "react";
import { Formik, Form } from "formik";
import { useRegister } from "./hooks/useRegister";
import { InputField } from "@/components/InputField";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export const RegisterForm: React.FC = () => {
  const { initialValues, validationSchema, onSubmit } = useRegister();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-sm space-y-4">
          <InputField
            label="Seu nome completo:"
            name="fullName"
            type="text"
            placeholder="Digite seu nome completo"
            required={true}
            autoComplete="name"
          />
          <InputField
            label="E-mail:"
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            required={true}
            autoComplete="email"
          />
          <InputField
            label="Senha:"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            Icon={AiOutlineEyeInvisible}
            required={true}
            autoComplete="new-password"
          />
          <InputField
            label="Confirme sua senha:"
            name="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            Icon={AiOutlineEyeInvisible}
            required={true}
            autoComplete="new-password"
          />

          <div className="text-right w-full">
            <Link
              to="/login"
              className="font-semibold text-sm text-primary mt-6 block"
            >
              Já possui uma conta? Fazer o login
            </Link>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-secondary font-semibold text-white min-w-48 min-h-12 rounded-md mt-6 outline-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading loading-dots loading-md text-white"></span>
              ) : (
                "CRIAR CONTA"
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
