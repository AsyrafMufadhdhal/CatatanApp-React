import React from "react";

function CatatanSearch({ onSearch }) {
  return (
    <form className="catatan-search">
      <input type="search" placeholder="Cari Catatan - Masukkan Judul..." onChange={(event) => onSearch(event)} />
    </form>
  );
}

export default CatatanSearch;
