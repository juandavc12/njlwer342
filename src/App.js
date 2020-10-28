import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      lista: ['Sacar la ropa','Hacer la cama','Leer un rato'],
      value: ''
    }
  }
  val = (event) => { 
    return this.setState ({value: event.target.value})     
  };    

  enter = (event) =>{
    event.preventDefault();
    if (this.state.value) {
      this.state.lista[this.state.lista.length] = this.state.value
      return this.setState ({lista: this.state.lista, value: ""})
    }
  };

  
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo" >
          {this.state.lista.map((lista, key) =>
          <li key={lista}>{lista}</li>
           )}
          
          </ul>
           <form onSubmit ={this.enter}>
             <input type="text" onChange={this.val} value={this.state.value} id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;