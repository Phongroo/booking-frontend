import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from 'src/app/services/ticket.service';
import { EvaluateModalComponent } from './evaluate-modal/evaluate-modal.component';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit{
  phoneNumber:any='';
  ticket:any;
  constructor(private modalService: NgbModal,private service:TicketService){}
  ngOnInit(): void {
    this.getTicket();
  }
  getTicket(){
    this.service.getTicketByPhone(this.phoneNumber).subscribe(
      (data:any)=>{
        this.ticket=data;
      }
     
    )
  }

  openModal(item:any){
    const modalRef = this.modalService.open(EvaluateModalComponent,
      {
        centered: true,
        size: 'xl',
        backdrop: 'static'
      });
      modalRef.componentInstance.item = item;
      modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
        this.getTicket();
        this.modalService.dismissAll();
      })
     
  }
  
}
