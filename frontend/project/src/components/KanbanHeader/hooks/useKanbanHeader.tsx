import * as Yup from "yup";

export const useKanbanHeader = () => {
  const initialValues = {
    search: "",
    startDate: "",
    endDate: "",
  };

  const validationSchema = Yup.object({
    startDate: Yup.date()
      .nullable()
      .typeError("Data inválida")
      .required("Data inicial é obrigatória"),
    endDate: Yup.date()
      .nullable()
      .typeError("Data inválida")
      .min(
        Yup.ref("startDate"),
        "Data final não pode ser anterior à data inicial"
      )
      .required("Data final é obrigatória"),
  });

  const onSubmit = (values: typeof initialValues) => {
    console.log("Form Values:", values);
  };

  return { initialValues, validationSchema, onSubmit };
};
