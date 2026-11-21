import Swal from "sweetalert2"

export const alertMsg = ( title, text='', icon="success" ) => {
  Swal.fire({
    title,
    text,
    icon
  });
}

export const confirmMsg = async (title, text='') => {
  const res = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes"
  });

  return res.isConfirmed;
};

