import { closeModalPublication } from "@/actions/ModalPublication";
import { useKanbanContext } from "@/contexts/Kanban/useContext";
import React from "react";
import { FaTimes } from "react-icons/fa";

export const ModalPublication: React.FC = () => {
  const { selected } = useKanbanContext();

  if (!selected) return null;

  return (
    <dialog id="modalPublication" className="modal">
      <div className="modal-box max-w-lg mx-auto rounded-md border shadow-xl relative overflow-y-auto">
        <div className="flex justify-between items-center gap-3 mb-6">
          <h2 className="text-lg text-primary font-semibold">
            Publicação - {selected.process_number || "N/A"}
          </h2>
          <button
            className="text-gray-500 hover:text-gray-800 outline-none"
            aria-label="Close"
            onClick={closeModalPublication}
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">Data de publicação no DJE:</p>
          <p className="text-base text-gray-800">
            {new Date(selected.publication_date).toLocaleDateString() || "N/A"}
          </p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">Autor(es):</p>
          <p className="text-base text-gray-800">{selected.author || "N/A"}</p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">Réu:</p>
          <p className="text-base text-gray-800">
            {selected.defendant || "N/A"}
          </p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">Advogado(s):</p>
          <ul className="list-disc list-inside text-base text-gray-800">
            <li>{selected.lawyer || "N/A"}</li>
          </ul>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">
            Valor principal bruto/liquido:
          </p>
          <p className="text-base text-gray-800">
            R$ {selected.principal_value || "0,00"}
          </p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">Valor dos juros moratórios:</p>
          <p className="text-base text-gray-800">
            R$ {selected.interest_value || "0,00"}
          </p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">
            Valor dos honorários advocatícios:
          </p>
          <p className="text-base text-gray-800">
            R$ {selected.lawyer_fees || "0,00"}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Conteúdo da Publicação:</p>
          <p className="mt-2 text-base text-gray-800">
            {selected.content || "N/A"}
          </p>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop bg-black bg-opacity-80">
        <button>close</button>
      </form>
    </dialog>
  );
};
