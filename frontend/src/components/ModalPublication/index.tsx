import { closeModalPublication } from "@/actions/ModalPublication";
import React from "react";
import { FaTimes } from "react-icons/fa";

export const ModalPublication: React.FC = () => {
  return (
    <dialog id="modalPublication" className="modal">
      <div className="modal-box max-w-lg mx-auto rounded-md border shadow-xl relative overflow-y-auto">
        <div className="flex justify-between items-center gap-3 mb-6">
          <h2 className="text-lg text-primary font-semibold">
            Publicação - 5018120-21.2021.8.13.0022
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
          <p className="text-base text-gray-800">21/10/2024</p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">Autor(es):</p>
          <p className="text-base text-gray-800">Lorem ipsum</p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">Réu:</p>
          <p className="text-base text-gray-800">Lorem ipsum</p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">Advogado(s):</p>
          <ul className="list-disc list-inside text-base text-gray-800">
            <li>Lorem ipsum (OAB: 999999/SP)</li>
            <li>Lorem ipsum (OAB: 999999/SP)</li>
            <li>Lorem ipsum (OAB: 999999/SP)</li>
          </ul>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">
            Valor principal bruto/liquido:
          </p>
          <p className="text-base text-gray-800">R$ 1000,00</p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">Valor dos juros moratórios:</p>
          <p className="text-base text-gray-800">R$ 1000,00</p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">
            Valor dos honorários advocatícios:
          </p>
          <p className="text-base text-gray-800">R$ 1000,00</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Conteúdo da Publicação:</p>
          <p className="mt-2 text-base text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop bg-black bg-opacity-80">
        <button>close</button>
      </form>
    </dialog>
  );
};
