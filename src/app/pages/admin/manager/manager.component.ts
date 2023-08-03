import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ManagerService } from 'src/app/services/manager.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { ProductModalComponent } from '../product/product-modal/product-modal.component';
import { ManagerModalComponent } from './manager-modal/manager-modal.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit{
  constructor(private modalService: NgbModal,private service:ManagerService,private  productService:ProductService, private userService:UserService){}
  cart:any;
  listProduct?: Array<any>;
  ngOnInit(): void {
    this.getall();
   }
   getallProduct(){
    this.productService.product(this.listProduct).subscribe((data:any)=>{
      this.listProduct=data;
      console.log(this.listProduct)
     },(error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data','error')
     }
     )
   }
   getall(){
    this.service.cart(this.cart).subscribe((data:any)=>{
      this.cart=data;
      console.log(this.cart)
     },(error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data','error')
     }
     )
   }

   openModal(item?: any, type?: string) {
    const modalRef = this.modalService.open(ManagerModalComponent,
      {
        centered: true,
        size: 'xl',
        backdrop: 'static'
      });
      modalRef.componentInstance.item = item;
      modalRef.componentInstance.listProduct = this.listProduct;
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


