import React, { Component } from 'react'


export default class Dashboard extends Component {
    render() {
        return (
<div className ="container">
  
  <div className = "button">
      <button type ="button" onClick = {this.props.AddRow}>Add Row</button>
  </div>


  <div className = "button">
      <button type ="button" onClick = {this.props.AddCol}>Add Column</button>
   
  </div>

  <div className = "button">
      <button type ="button" onClick = {this.props.DelRow}>Delete Row</button>
   
  </div>

  <div className = "button">
      <button type ="button" onClick = {this.props.DelCol}>Delete Column</button>
   
  </div>

  <div className = "button">
      <button type ="button" onClick = {this.props.fillUncoloredCells}>Fill Uncolored Cells</button>
  </div>

  <div className = "button">
      <button type ="button" onClick = {this.props.fillAllCells}>Fill All Cells</button>
  </div>

  <div className = "button">
      <button type ="button" onClick = {this.props.RestoreAllCells}>Restore All Cells</button>
  </div>
  
 
  <select className="setColor" id="color" onChange ={this.props.setColor}>
       <option>--</option>
      <option value="Blue">Blue</option>
      <option value="Green">Green</option>
      <option value="Yellow">Yellow</option>
      <option value="Red">Red</option>
      <option value="Gray">Grey</option>
  </select>
</div>
        )
    }
}

