import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Error = () => (
  <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
)

export default Error