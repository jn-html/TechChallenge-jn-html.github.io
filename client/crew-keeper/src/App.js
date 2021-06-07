import React, { Component } from 'react';
import './App.css';
import ShowNames from './components/showNames';
import NameForm from './components/nameForm';

class App extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  // async componentDidMount() {
  //   const response = await fetch('/api/V1/names');
  //   console.log(response);
  //   const body = await response.json();
  //   console.log(body);
  //   this.setState({ name: body, isLoading: false });
  // }

  render() {
    // const {name, isLoading} = this.state;

    // if (isLoading) {
      // return <p>Loading...</p>;
    // }

    return (

<div className="container">
{/* <!-- Header section --> */}
<header>
<h1>
<img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
Les Argonautes
</h1>
</header>

{/* // <!-- Main section --> */}
<main>

{/* <!-- New member form --> */}
<NameForm/>


{/* <!-- Member list --> */}
<h2>Membres de l'équipage</h2>
<section className="member-list-section">

  <ShowNames />

  {/* <div class="member-item">Eleftheria</div>
  <div class="member-item">Gennadios</div>
  <div class="member-item">Lysimachos</div> */}
</section>
</main>

<footer>
<p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
</footer>
</div>
    );
  }
}

export default App;