import React from "react";

class CatatanInput extends React.Component {
  constructor(props) {
    super(props);

    // inisiasi state
    this.state = {
      title: "",
      body: "",
      batas: 50,
    };

    this.onTitleChangeEvent = this.onTitleChangeEvent.bind(this);
    this.onBodyChangeEvent = this.onBodyChangeEvent.bind(this);
    this.onSubmitEvent = this.onSubmitEvent.bind(this);
  }

  onTitleChangeEvent(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.batas),
      };
    });
  }

  onBodyChangeEvent(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEvent(event) {
    event.preventDefault();
    this.props.inputCatatan(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <div className="catatan-input">
        <h1>Catatan Baru</h1>
        <form className="catatan-input__form" onSubmit={this.onSubmitEvent}>
          <input type="text" required placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEvent} />
          <small id="limit">Sisa : {this.state.batas - this.state.title.length} karakter</small>
          <br />
          <br />
          <textarea placeholder="Isi Catatan..." required value={this.state.body} onChange={this.onBodyChangeEvent}></textarea>
          <br />
          <br />
          <button type="submit">Tambahkan Catatan</button>
        </form>
      </div>
    );
  }
}
export default CatatanInput;
