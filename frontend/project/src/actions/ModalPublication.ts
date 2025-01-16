export const openModalPublication = () => {
  const modalElement = document.getElementById(
    "modalPublication"
  ) as HTMLDialogElement | null;

  if (modalElement !== null) {
    modalElement.showModal();
  }
};

export const closeModalPublication = () => {
  const modalElement = document.getElementById(
    "modalPublication"
  ) as HTMLDialogElement | null;

  if (modalElement !== null) {
    modalElement.close();
  }
};
