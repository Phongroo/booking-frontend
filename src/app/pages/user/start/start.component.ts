import { LocationStrategy } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionService } from 'src/app/services/question.service';
import { SocketService } from 'src/app/services/socket.service';
import { TicketService } from 'src/app/services/ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{
  constructor(private modalService: NgbModal,private service:TicketService,private socketService:SocketService){}
  ticket:any;
  
  isSubmit = false;
  ngOnInit(): void {
    this.getall();
   
   
   }
  
   getall(){
    this.service.ticketbyuser().subscribe((data:any)=>{
      this.ticket=data;
      console.log(this.ticket)
     },(error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data','error')
     }
     )
   }

   updateStatus(id:any){
    Swal.fire({
      icon:'info',
      title:'Are you sure?',
      confirmButtonText:'Update',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this.service.updateStatus(id).subscribe(
          (data)=>{
            this.getall();
            this.isSubmit=true;
            Swal.fire('Success!!','Ticket Update','success');
          },(error)=>{
            Swal.fire('Error!!','Ticket Update fail','error');
          }
        );
      }
    })
  }
  

 

}