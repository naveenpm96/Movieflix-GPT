import { useDispatch, useSelector } from "react-redux";
import {
  addModalStatus,
  addModalContentData,
  addModalData,
} from "../utils/ReduxStore/popupModal";

const Modal = () => {
  const dispatch = useDispatch();
  const popupModalData = useSelector((store) => store.popupModal?.modalData);

  const randomTrailer =
    popupModalData && popupModalData.length > 0
      ? popupModalData[Math.floor(Math.random() * popupModalData.length)]
      : null;

  const handleCloseModal = () => {
    console.log("close");
    dispatch(addModalStatus(false));
    dispatch(addModalData(null));
    dispatch(addModalContentData(null));
  };

  console.log(randomTrailer);

  return (
    <div className="modal-block bg-black bg-opacity-5 backdrop-blur-sm inset-0">
      <div className="iframe w-96">
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${randomTrailer?.key}?rel=0&controls=0&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="modal-cont bg-[#181818] w-full">
          <p className="text-white">{randomTrailer?.name}</p>
          <p></p>
        </div>
      </div>
      <button onClick={handleCloseModal}>Xlose</button>
    </div>
  );
};

export default Modal;
