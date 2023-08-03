import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuizService } from 'src/app/services/quiz.service';
import { TicketService } from 'src/app/services/ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit{
  constructor(private modalService: NgbModal,private service:TicketService){}
  ticket:any;
  ngOnInit(): void {
    this.getall();
   }
   getall(){
    this.service.ticket().subscribe((data:any)=>{
      this.ticket=data;
      console.log(this.ticket)
     },(error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data','error')
     }
     )
   }

   openModal(item?: any, type?: string) {
    // const modalRef = this.modalService.open(ProductModalComponent,
    //   {
    //     centered: true,
    //     size: 'xl',
    //     backdrop: 'static'
    //   });
    //   modalRef.componentInstance.item = item;
    //   modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
    //     this.getall();
    //     this.modalService.dismissAll();
    //   })
    //   modalRef.componentInstance.type = type;
  }
  

  delete(payload:any){
    Swal.fire({
      icon:'info',
      title:'Are you sure?',
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this.service.delete(payload).subscribe(
          (data)=>{
            this.getall();
            Swal.fire('Success!!','Product delete','success');
          },(error)=>{
            Swal.fire('Error!!','Product delete fail','error');
          }
        );
      }
    })
  }

}