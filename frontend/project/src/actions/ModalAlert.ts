export const openModalAlert = () => {
  const modalElement = document.getElementById(
    "modalAlert"
  ) as HTMLDialogElement | null;

  if (modalElement !== null) {
    modalElement.showModal();
  }
};

export const closeModalAlert = () => {
  const modalElement = document.getElementById(
    "modalAlert"
  ) as HTMLDialogElement | null;

  if (modalElement !== null) {
    modalElement.close();
  }
};
