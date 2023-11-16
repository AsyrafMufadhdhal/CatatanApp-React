import React from "react";

function CatatanButton({ id, setButton, onDelete, onMove }) {
  return (
    <div className="catatan-button">
      <button className="catatan-button__delete" onClick={() => onDelete(id)}>
        Hapus
      </button>
      <button className="catatan-button__move" onClick={() => onMove(id)}>
        {setButton}
      </button>
    </div>
  );
}

export default CatatanButton;
