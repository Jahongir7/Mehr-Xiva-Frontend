import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const setAlert = (msg, type) => {
  switch (type) {
    case 'success':
      toast.success(msg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });
      break;
    case 'error':
      toast.error(msg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });
      break;
    default:
      break;
  }
};
