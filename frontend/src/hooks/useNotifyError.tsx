import { openModalAlert } from "@/actions/ModalAlert";
import { useAlertContext } from "@/contexts/Alert/useContext";

const useNotifyError = () => {
  const { setMessageAlert } = useAlertContext();

  const notifyError = (message?: string) => {
    if (message) setMessageAlert(message);

    openModalAlert();
  };

  return { notifyError };
};

export { useNotifyError };
