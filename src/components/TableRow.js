import React, { Component } from 'react'

export default class TableRow extends Component {
    AddRow = () =>{
        let changerows = this.state.row
        changerows.push('')
        this.setState({rows: changerows})
     
     }
     AddCol = () =>{
         let changecol = this.state.col
         changecol.push('')
         this.setState({rows: changecol})
      
      }
      DelRow = () =>{
         let changerows = this.state.row
         changerows.pop('')
         this.setState({rows: changerows})
      
      }
       DelCol = () =>{
         let changecol = this.state.col
         changecol.pop('')
         this.setState({col: changecol})
      
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
