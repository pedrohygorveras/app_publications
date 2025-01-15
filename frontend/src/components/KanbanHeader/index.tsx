import React from "react";
import { Formik, Form } from "formik";
import { useKanbanHeader } from "./hooks/useKanbanHeader";
import { InputField } from "@/components/InputField";
import { FaSearch } from "react-icons/fa";

export const KanbanHeader: React.FC = () => {
  const { initialValues, validationSchema, onSubmit } = useKanbanHeader();

  return (
    <div className="p-4 text-primary">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between w-full gap-4">
            <div>
              <h2 className="text-lg mb-2 font-bold text-primary">Pesquisar</h2>
              <InputField
                name="search"
                type="text"
                placeholder="Digite o número do processo ou partes envolvidas"
                className="w-full sm:w-1/3"
              />
            </div>
            <div className="flex flex-col justify-end w-full">
              <h2 className="text-lg mb-2 font-bold text-primary">
                Data do diário
              </h2>
              <div className="flex items-center gap-3">
                <div>
                  <InputField
                    name="startDate"
                    type="date"
                    className="w-full sm:w-1/4"
                  />
                </div>
                <div>
                  <InputField
                    name="endDate"
                    type="date"
                    placeholder="dd/mm/yyyy"
                    className="w-full sm:w-1/4"
                  />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="btn btn-secondary text-white"
                  >
                    <FaSearch className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
