import React from "react";
import CatatanItem from "./CatatanItem";

function Catatanlist({ setActives, setArchives, onDelete, onMove }) {
  return (
    <div className="catatan-list">
      <h2>Daftar Catatan</h2>
      <div className="catatan-list__active">
        {setActives.length === 0 ? <p className="catatan-list__empty">Tidak ada catatan</p> : setActives.map((note) => <CatatanItem key={note.id} id={note.id} setButton="Arsipkan" onDelete={onDelete} onMove={onMove} {...note} />)}
      </div>
      <h2>Arsip Catatan</h2>
      <div className="catatan-list__archive">
        {setArchives.length === 0 ? <p className="catatan-list__empty">Tidak ada Arsip</p> : setArchives.map((note) => <CatatanItem key={note.id} id={note.id} setButton="Kembalikan" onDelete={onDelete} onMove={onMove} {...note} />)}
      </div>
    </div>
  );
}

export default Catatanlist;
