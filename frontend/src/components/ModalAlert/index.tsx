import React from "react";
import { useModalAlert } from "./hooks/useModalAlert";

const ModalAlert: React.FC = () => {
  const { title, message, buttonText, closeModal } = useModalAlert();

  return (
    <dialog id="modalAlert" className="modal">
      <div className="modal-box max-w-md mx-auto rounded-2xl overflow-hidden border-2 shadow-xl overflow-y-auto text-center">
        <h1 className="text-xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 leading-relaxed mb-6">{message}</p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          <button
            className="btn btn-secondary font-bold text-white min-w-40 outline-none"
            onClick={closeModal}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop bg-black bg-opacity-80">
        <button onClick={closeModal} type="button">
          close
        </button>
      </form>
    </dialog>
  );
};

export { ModalAlert };
