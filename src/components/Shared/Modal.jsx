import "./modal.scss";

export function Modal({ children, onClose }) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        {children}
        <button onClick={onClose} data-testid="modalCloseButton">
          Close
        </button>
      </div>
    </div>
  );
}
