import React from "react";
import CatatanButton from "./CatatanButton";
import { showFormattedDate } from "../utils";

function CatatanItem({ id, title, body, createdAt, setButton, onDelete, onMove }) {
  return (
    <div className="catatan-item">
      <h3 className="catatan-item__title">{title}</h3>
      <p className="catatan-item__body">{body}</p>
      <div>
        <small className="catatan-item__createdAt">{showFormattedDate(createdAt)}</small>
        <CatatanButton id={id} onDelete={onDelete} onMove={onMove} setButton={setButton} />
      </div>
    </div>
  );
}

export default CatatanItem;
