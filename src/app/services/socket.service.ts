import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * as SockJS from 'sockjs-client';
import {Stomp} from "@stomp/stompjs"
import baseUrl from './helper';
import { TicketService } from './ticket.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  stompClient:any;
  listTicket:any[]=[];

  constructor(private http:HttpClient,private service:TicketService) { 
    // this.getTicKetByUser();
  }
//  tickets(){
//   return this.listTicket;
//   }
//   connect(){
  
//     const ws=new SockJS(`${baseUrl}/ws`);
//     this.stompClient=Stomp.over(ws);
//     this.stompClient.connect({},()=>{
//       this.stompClient.subcribe('topic/ticket/',(data:any)=>{
//         const ticket=JSON.parse(data);
//         this.listTicket.push(ticket);
//       })
//     })
//   }
  
//   createTicketUsingSocket(ticket:any){
//     this.stompClient.send('/app/ticket/',{},JSON.stringify(ticket));
//   }
//   getTicKetByUser(){
//     this.service.ticketbyuser().subscribe((data:any)=>{
//       this.listTicket=data;
//     })
//   }
//   disconnect(){
//     if(this.stompClient!=null){
//       this.stompClient.disconnect();
//     }
//   }
}
