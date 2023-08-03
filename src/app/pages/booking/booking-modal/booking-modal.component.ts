import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SocketService } from 'src/app/services/socket.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.css']
})
export class BookingModalComponent implements OnInit{
  @Input() item: any;
  @Input() type: any ;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  productId:any;
  ticketForm:any ;
  isSubmit = false;
  loading: boolean = false;
  productName:any;
  num:any;
  status:any;

  constructor(private service:TicketService,private activeModal: NgbActiveModal,private socketService:SocketService){}
  ngOnInit(): void {
   
   this.productId=this.item.id;
   console.log(this.productId);
   this.initForm();
   
   
   
  }
  initForm() {
    this.ticketForm = { 
      productId:this.productId,

      customers:{ fullName: '',
      email: '' ,
      phoneNumber:''}    
         
    }
    ;
    
  }

  submit(){
    
    this.isSubmit = true;   
    this.loading = true;
    const payload = this.ticketForm;    
    if (this.type === 'CREATE') {
      this.create(payload);
    }
  }


  create(payload: any) {
    console.log(payload);

    this.service.addTicket(payload).subscribe((res:any) => {
      this.num=res.data.num;
      this.status=res.data.status;
      this.productName=this.item.name;
      this.isSubmit = true;  
      //this.passEntry.emit(res.data);
      this.loading = false;
      
      
    }, err => {
     
      this.loading = false;
    });;
  }

  
  printPage(){ window.print();
  }
  closeModal() {
    this.activeModal.dismiss();
  }


}
