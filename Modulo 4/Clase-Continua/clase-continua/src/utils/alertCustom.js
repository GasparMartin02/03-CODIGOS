import Swal from "sweetalert2";

export const alertGeneric = (messages, title, icon, action) => {
    Swal.fire({
        title,
        text: messages,
        icon,
        confirmButtonColor: '#3085d6',
      }).then((result) => {
        if (result.isConfirmed) {
          if (typeof action === 'function'){
            action();
          }
        }
      });
};