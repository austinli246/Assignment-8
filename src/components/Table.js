import React, { Component } from 'react'
import '.././style.css'
import TableRow from './TableRow'
import Dashboard from './Dashboard'

class Table extends Component {
    constructor(){
        super();
        this.state ={
            row : [''],
            col : [''],
            color: " ",
            hovercolor: false
          
        }
    }
AddRow = () => {

   let changerows = this.state.row
   changerows.push('')
   this.setState({rows: changerows})
}
AddCol = () => {
    let changecol = this.state.col
    changecol.push('')
    this.setState({rows: changecol})
 
 }
 DelRow = () => {
     if (this.state.row.length ===1){
         alert('Cannot Delete 1 Row')
     }
     else{
        let changerows = this.state.row
        changerows.pop('')
        this.setState({rows: changerows})
 
     }
  
 }
  DelCol = () =>{
    if (this.state.col.length ===1){
        alert('Cannot Delete 1 Column')
    }
    else{
        let changecol = this.state.col
        changecol.pop('')
        this.setState({col: changecol})
    }
   
 
 }
 setColor = (e) => {
   this.setState({color: e.target.value})

 }
 clickColor =(e) => {
    if (this.state.color === " ")
     alert('Please Select a Color');
     e.target.style.backgroundColor = this.state.color
     e.target.classList.remove('nocolor')
     
 }
 fillUncoloredCells = () => {
     if (this.state.color === " ")
     alert('Please Select a Color');
     const uncolor = document.getElementsByClassName('nocolor')
     let all = Array.from(uncolor);
     all.forEach(cell => {cell.style.backgroundColor = this.state.color; cell.classList.remove('nocolor')})
 }
 fillAllCells = () => {
    if (this.state.color === " ")
    alert('Please Select a Color');
    const allcells = document.getElementsByTagName('td')
    let all = Array.from(allcells);
    all.forEach(cell => {cell.style.backgroundColor = this.state.color; cell.classList.remove('nocolor')})
}
RestoreAllCells = () => {
    if (this.state.color === " ")
    alert('Please Select a Color');
    const allcells = document.getElementsByTagName('td')
    let all = Array.from(allcells);
    all.forEach(cell => {cell.style.backgroundColor = "black"; cell.classList.add('nocolor')})
}
mousedown = (e) =>{
    this.setState({hoverColor: true}) 
    e.target.style.backgroundColor = this.state.color; 
}
mouseover = (e) =>{
    
    if(this.state.hoverColor ===true) {
        e.target.style.backgroundColor = this.state.color; 
        
        e.target.classList.remove('nocolor')
    }
}
mouseup = () => {
    if (this.state.hoverColor ===true){
       
        this.setState({hoverColor: false})
    }
}

    render() {
        return (
        <div>
            <h2>EXPLORE THE GRID</h2>
          
                <Dashboard
                AddRow = {this.AddRow}
                AddCol = {this.AddCol}
                DelRow = {this.DelRow}
                DelCol = {this.DelCol}
                fillUncoloredCells = {this.fillUncoloredCells} 
                fillAllCells = {this.fillAllCells}
                RestoreAllCells = {this.RestoreAllCells}
                setColor ={this.setColor}

                />
       

            <div className = "containergrid">
                <table id = "grid">
                    <tbody>
                    {this.state.row.map((r) => (

                     <tr>
                         {this.state.col.map((c) => 
                           <td 
                           className = "nocolor" 
                           onClick = {this.clickColor} 
                           onMouseOver = {this.mouseover}
                           onMouseDown={this.mousedown} 
                           onMouseUp = {this.mouseup}>
                               
                           </td>
                         )}
                       
                     </tr>   

                    ))}
                    
                    </tbody>
                    
                </table>
            </div>
        </div>
        )
           
    }
}
export default Table


