import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Example() {
  const notify = () => {
    toast.success("Success Notification !", {
      position: "top-center",
    });
  };

  return (
    <>
      <button onClick={notify}>Notify</button>;
      <ToastContainer />
    </>
  );
}

export default Example;
