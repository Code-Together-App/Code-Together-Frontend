import React, { Component } from 'react'
import request from 'superagent'
import TicketDetails from './TicketDetails';
export default class Tickets extends Component {
  state = {
      tickets:[]
  }

  componentDidMount = async () =>{
    const tickets = await request.get('http://localhost:5000/api/v1/tickets/')
    this.setState({tickets:tickets.body.data});
  }
  render() {
    const ticketDetail = this.state.tickets;
    return (
      <div>
        {
          ticketDetail.map((singleTicket,i) =>{
            console.log(singleTicket);
            return <TicketDetails key={i} ticket={singleTicket}/>
          }) 
        }
      </div>
    )
  }
}
