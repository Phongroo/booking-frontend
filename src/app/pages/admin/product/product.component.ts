import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { ProductModalComponent } from './product-modal/product-modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{  
  constructor(private modalService: NgbModal,private service:ProductService){}
  product:any;
  ngOnInit(): void {
    this.getall();
   }
   getall(){
    this.service.product(this.product).subscribe((data:any)=>{
      this.product=data;
      console.log(this.product)
     },(error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data','error')
     }
     )
   }

   openModal(item?: any, type?: string) {
    const modalRef = this.modalService.open(ProductModalComponent,
      {
        centered: true,
        size: 'xl',
        backdrop: 'static'
      });
      modalRef.componentInstance.item = item;
      modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
        this.getall();
        this.modalService.dismissAll();
      })
      modalRef.componentInstance.type = type;
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
