import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  aggiornaInput(key,value){
    this.setState({
      [key]: value
    });
  }

  aggiungiItem(){
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }

  eliminaItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render() {
    return(
      <div className="App">
        <div>
        Aggiungi un todo!
        <br/>
        <input 
        type = "text" 
        placeholder = "Scrivi un todo!"
        value = {this.state.newItem}
        onChange = {e => this.aggiornaInput("newItem", e.target.value)}
        />
        <button onClick={() => this.aggiungiItem()}>
          Aggiungi
        </button>
        <br/>
        <ul>
          {this.state.list.map(item => {
            return(
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.eliminaItem(item.id)}>
                  Rimuovi
                </button>
              </li>
            )
          })}
        </ul>
        </div>
      </div>
    );
  }
}


export default App;





