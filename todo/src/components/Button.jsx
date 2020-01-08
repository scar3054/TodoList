import React from 'react';

/**
 * componente BUTTON generale che verrà utilizzata sia per rimuovere che per aggiungere un TODO
 */

class Button extends React.Component{

  render(){
  let classe = "bottone";
  if(this.props.error)
    classe += " error";
  return <button className = {classe} onClick = {this.props.onClick}>{this.props.children}</button>
  }

}

export default Button;