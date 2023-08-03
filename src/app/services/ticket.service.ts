import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http:HttpClient) { }

  public ticket(){
    return this.http.get(`${baseUrl}/ticket/list`);
  }
  public addTicket(ticket:any){
    return this.http.post(`${baseUrl}/ticket/`,ticket);
  }
  public updateStatus(ticketId:any){
    return this.http.post(`${baseUrl}/ticket/update/${ticketId}`,ticketId);
  }
  public delete(ticket:any){
    return this.http.delete(`${baseUrl}/ticket/delete`,ticket);
  }
  public getTicketId(ticketId:any){
    return this.http.post(`${baseUrl}/ticket/updateTicket`,ticketId);
  }
  public ticketbyuser(){
    return this.http.get(`${baseUrl}/ticket/getTicketByUse`);
  }
  public getTicketByPhone(phoneNumber:any){
    return this.http.post(`${baseUrl}/ticket/ticketByPhone/${phoneNumber}`,phoneNumber);
  }

  public updateRating(ticketId:any,rating:any){
    return this.http.post(`${baseUrl}/ticket/updateRating/${ticketId}/${rating}`,rating);
  }

  public getStatistical(payload:any){
    return this.http.post(`${baseUrl}/ticket/getStatistical`,payload);
  }
}

