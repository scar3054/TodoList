import React from 'react';

class Button extends React.Component{

  render(){
  let classe = "bottone";
  if(this.props.error)
    classe += " error";
  return <button className = {classe} onClick = {this.props.onClick}>{this.props.children}</button>
  }

}

export default Button;