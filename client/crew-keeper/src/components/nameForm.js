import React, { Component } from 'react';
import axios from 'axios';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  

  handleSubmit (event) {
    alert('Le nom a été soumis : ' + this.state.name);
    event.preventDefault();

    const name = {
      name: this.state.name
    };

    axios.post(`/api/V1/names`,  name )
    .then(function (res) {
      window.location.reload()
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  render() {
    return (
      // <form  onSubmit={this.handleSubmit}>
      //   <label>
      //     Nom :
      //     <input type="text" value={this.state.name} onChange={this.handleChange} />
      //   </label>
      //   <input type="submit" value="Envoyer" />
      // </form>
      <div>
        <h2>Ajouter un(e) Argonaute</h2>
        <form onSubmit={this.handleSubmit} className="new-member-form">
          <label>
            Nom:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    );
  }
}

export default NameForm;
