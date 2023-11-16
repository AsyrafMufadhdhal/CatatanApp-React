import React from "react";
import CatatanInput from "./CatatanInput";
import CatatanSearch from "./CatatanSearch";
import Catatanlist from "./CatatanList";
import { getInitialData } from "../utils";

class CatatanApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catatan: getInitialData(),
      search: "",
    };

    this.onDeleteEvent = this.onDeleteEvent.bind(this);
    this.onMoveEvent = this.onMoveEvent.bind(this);
    this.onInputCatatanEvent = this.onInputCatatanEvent.bind(this);
    this.onCariCatatanEvent = this.onCariCatatanEvent.bind(this);
  }

  onDeleteEvent(id) {
    const catatan = this.state.catatan.filter((note) => note.id !== id);
    this.setState({ catatan });
  }

  onMoveEvent(id) {
    const lists = this.state.catatan.filter((list) => list.id === id);
    if (lists[0].archived === true) {
      const setAktif = (lists[0].archived = false);
      this.setState({ setAktif });
    } else {
      const setArsip = (lists[0].archived = true);
      this.setState({ setArsip });
    }
  }

  onCariCatatanEvent(event) {
    const cariCatatan = event.target.value.toLowerCase();
    this.setState({ search: cariCatatan });
    event.preventDefault();
  }

  onInputCatatanEvent({ title, body }) {
    this.setState((prevState) => {
      return {
        catatan: [
          ...prevState.catatan,
          {
            id: +new Date(),
            title,
            body,
            createdAt: Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    // Filter data ada event search atau tidak
    const searchNotes = !this.state.search ? this.state.catatan : this.state.catatan.filter((note) => note.title.toLowerCase().match(this.state.search));

    // filter untuk tampilkan catatan aktif
    const actives = searchNotes.filter((data) => data.archived === false);
    const setActives = actives.reverse();

    // filter untuk tampilkan arsip
    const archives = searchNotes.filter((data) => data.archived === true);
    const setArchives = archives.reverse();

    return (
      <div className="catatan-app">
        <CatatanInput inputCatatan={this.onInputCatatanEvent} />
        <div className="catatan-app__content">
          <CatatanSearch onSearch={this.onCariCatatanEvent} />
          <Catatanlist catatan={this.state.catatan} onDelete={this.onDeleteEvent} setActives={setActives} setArchives={setArchives} onMove={this.onMoveEvent} cariCatatan={this.onCariCatatanEvent} />
        </div>
      </div>
    );
  }
}

export default CatatanApp;
