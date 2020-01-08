import React, {Component} from 'react';
import Button from './components/Button';
import "./App.css";
import Todo from "./components/Todo";

/**
 * Costruttore iniziale più inizializzazione degli stati
 */
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
/**
 * 
 * @param {*} key ogni volta viene dato un nuovo id o key al TODO.
 * @param {*} value ogni volta viene dato un nuovo value al TODO.
 */
  aggiornaInput(key,value){
    this.setState({
      [key]: value
    });
  }
/**
 * Funzione che mi permette di aggiungere un todo alla lista;
 * l'if controlla se l'utente sta tentando di aggiungere un TODO vuoto,in caso affermativo lancia il messaggio "Non puoi aggiungere un todo vuoto!"
 * ogni TODO ha un value in modo che un TODO non sovrascriva un TODO già esistente e un' id generato randomicamente.
 * la lista viene copiata in list e viene aggiunto il nuovo item alla lista,infine lo stato viene risettato;
 */
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
/**
 * la lista viene copiata in list.
 * updateList aggiorna la lista filtrando i TODO selezionati da rimuovere e lasciando quelli che hanno id diverso dall'id del TODO che si vuole rimuovere.
 * @param {*} id gli viene passata alla funzione l'id tel TODO da rimuovere.
 */
  eliminaItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }
/**
 * 
 * @param {*} target TODO in cui si è verificato l'evento.
 * se il TODO è stato completato e quindi la checkbox è stata selezionata allora i TODO la cui checkbox è spuntata diventeranno selected.
 */
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





