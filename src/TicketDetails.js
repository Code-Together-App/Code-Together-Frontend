import React, { Component } from 'react'
export default class TicketDetails extends Component {
  render() {
    console.log(this.props.ticket)
    return (
      <div>
      
       Tickets:{this.props.ticket.name}
       <button>Done</button>
       <button>Update</button>
      
      </div>
    )
  }
}
