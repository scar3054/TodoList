import React from 'react';
import Button from './Button';

/**
 * componente TODO che mi consente di creare una checkbox accanto a ogni TODO.
 * verificare se è selezionata e in caso affermativo verrà sbarrata.
 * consente di rimuovere il singolo TODO.
 */

class Todo extends React.Component{
  render(){
    return(
    <li  className = "todo">
        <label>
        <input type="checkbox" value = {this.props.item.id} onChange = {this.props.onSelect}/>
        <span className = {this.props.selected? "selected":""}>{this.props.item.value}</span>
        </label>
        <Button onClick={this.props.onDelete} error>
          Rimuovi
        </Button>
    </li>
    );
  }
}

export default Todo;