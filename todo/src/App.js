import React, {Component} from 'react';
import Button from './components/Button';
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      selected:[],
      error: false,
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

    if(this.state.newItem.length == 0){
        this.setState({...this.state,error:"Non puoi aggiungere un todo vuoto!"})
        return;
    }

    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      error:false,
      list,
      newItem:""
    });
  }

  eliminaItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  selezionaItem(target){
    if(target.checked == true){
      const list = [...this.state.selected];
      list.push(parseFloat(target.value))
      this.setState({...this.state,selected:list})
    }
    else{
      this.setState({...this.state,selected:this.state.selected.filter(item => item !== parseFloat(target.value))})
    }
  }


  render() {
    return(
      <div className="App">
        <div>
        <h1>Aggiungi un todo!</h1>
        <input
          className = "input"
          type = "text" 
          placeholder = "Scrivi un todo!"
          value = {this.state.newItem}
          onChange = {e => this.aggiornaInput("newItem", e.target.value)}
        />
        <Button onClick={() => this.aggiungiItem()}>
          Aggiungi
        </Button>
        <br/>
        {this.state.error?<div>{this.state.error}</div>:null}
        <ul>
          {this.state.list.map(item => {
            return <Todo 
            key={item.id}
            item = {item} 
            onDelete = {() => this.eliminaItem(item.id)} 
            onSelect = {(e) => this.selezionaItem(e.target)}
            selected = {this.state.selected.indexOf(item.id) != -1}
            />
          })}
        </ul>
        </div>
      </div>
    );
  }
}


export default App;





