import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-evaluate-modal',
  templateUrl: './evaluate-modal.component.html',
  styleUrls: ['./evaluate-modal.component.css']
})
export class EvaluateModalComponent implements OnInit{
  @Input() item: any;  
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  ticketId:any;
  rating:any;
  constructor(private service:TicketService,private activeModal: NgbActiveModal){}
  ngOnInit(): void {
    this.GetRating();
    this.ticketId=this.item.id;
    
  }

  ratingcontrol=new FormControl(0);
  GetRating(){

    this.rating=this.ratingcontrol.value;
    
  }
  submit(){
    this.service.updateRating(this.ticketId,this.rating).subscribe(
      (res:any)=>{
        this.passEntry.emit(res.data);
        
      }
    )

  }
  closeModal(){
    this.activeModal.dismiss();
  }
  
  

}
