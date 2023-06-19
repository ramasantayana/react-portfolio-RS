import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
render() {
    const { status } = this.state;
    return (
      <div className="row">
        <div className="col-md-12 align-content-center">
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/moqpvgqb"
            method="POST"
          >
            <br />
            <label>Email:</label>
            <br />
            <input type="email" name="email" />
            <br />
            <label>Message:</label>
            <br />
            <textarea rows="4" max-cols="50" type="text" name="message" />
            <br />
            {status === "SUCCESS" ? <p>Thank you for sending the message!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}