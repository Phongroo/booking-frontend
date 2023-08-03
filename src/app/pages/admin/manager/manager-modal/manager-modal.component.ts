import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ManagerService } from 'src/app/services/manager.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager-modal',
  templateUrl: './manager-modal.component.html',
  styleUrls: ['./manager-modal.component.css']
})
export class ManagerModalComponent implements OnInit{
  @Input() item: any;
  @Input() type: any ;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  
  Form:any ;  
  product:any ;
  user:any ;
  listproduct:any ;
  listuser:any ;
  isSubmit: boolean = false;
  loading: boolean = false;
  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder,private service:ManagerService,
  private  productService:ProductService, private userService:UserService){}
  ngOnInit(): void {
    this.getall();
    this.getallUser();
    this.initForm();
   
  }
 


  getall(){
    this.productService.product(this.listproduct).subscribe((data:any)=>{
      this.listproduct=data;
      console.log(this.listproduct)
     },(error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data','error')
     }
     )
   }
   getallUser(){
    this.userService.user(this.listuser).subscribe((data:any)=>{
      this.listuser=data;
     
     },(error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data','error')
     }
     )
   }
   onSelectStartHour(e:any){
    this.userService.userbyId(e.target.value).subscribe((data:any)=>{
      this.user=data;
      console.log(this.user);
      
    })
    
    
   }

  initForm() {
    this.Form ={
      productId:'',
      userId:''
    }
    }
  
  submit(){
    
    this.isSubmit = true;   
    this.loading = true;
    const payload = this.Form;    
    
    if (this.type === 'CREATE') {
      
      this.create(payload);
    } else if (this.item && this.type === 'EDIT') {
      this.update(payload);
    }
  }


  create(payload: any) {
    console.log(payload);

    this.service.addcart(payload).subscribe((res:any) => {
             
        this.passEntry.emit(res.data);
     
      this.loading = false;
    }, err => {
     
      this.loading = false;
    });
  }

  update(payload: any) {
    console.log(payload);
    this.service.updateCart(payload).subscribe((res:any) => {
      
        this.passEntry.emit(res.data);
      
      this.loading = false;
    }, err => {
      
      this.loading = false;
    });
  }

  closeModal() {
    this.activeModal.dismiss();
  }


}

