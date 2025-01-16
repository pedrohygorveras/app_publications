import { useMemo } from "react";
import { closeModalAlert } from "@/actions/ModalAlert";
import { useAlertContext } from "@/contexts/Alert/useContext";
import { successAlert } from "../data/successAlert";
import { errorAlert } from "../data/errorAlert";

export const useModalAlert = () => {
  const {
    typeAlert,
    setTypeAlert,

    titleAlert,
    setTitleAlert,

    messageAlert,
    setMessageAlert,
  } = useAlertContext();

  const defaultValues = useMemo(() => {
    return typeAlert === "error" ? errorAlert : successAlert;
  }, [typeAlert]);

  const resolvedTitleAlert = titleAlert || defaultValues.title;
  const resolvedMessageAlert = messageAlert || defaultValues.message;
  const resolvedButtonStyle = defaultValues.buttonStyle;
  const resolvedButtonText = defaultValues.buttonText;

  const closeModal = () => {
    setTypeAlert("error");
    setTitleAlert("");
    setMessageAlert("");

    closeModalAlert();
  };

  return {
    type: typeAlert,
    title: resolvedTitleAlert,
    message: resolvedMessageAlert,
    buttonStyle: resolvedButtonStyle,
    buttonText: resolvedButtonText,
    closeModal,
  };
};
