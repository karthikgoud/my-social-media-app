import "./ModalWrapper.css";

const ModalWrapper = ({ children, onClose }) => {
  return (
    <div
      className="modal-wrapper"
      onClick={(e) => {
        if (e.target.className === "modal-wrapper") {
          onClose();
        }
      }}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
