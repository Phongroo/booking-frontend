import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit{
  @Input() item: any;
  @Input() type: any ;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  
  productForm:any ;
  isSubmit: boolean = false;
  loading: boolean = false;
  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder,private service:ProductService){}
  ngOnInit(): void {
   
    if (this.item !=null) {
      console.log(this.item);
      console.log(this.type);
      
      
     this.productForm=this.item;
    }
    else{ this.initForm();}
   
  }

  initForm() {
    this.productForm = {     
      name: '',
      desccription: ''     
    };
  }
  submit(){
    
    this.isSubmit = true;   
    this.loading = true;
    const payload = this.productForm;    
    if (this.type === 'CREATE') {
      this.create(payload);
    } else if (this.item && this.type === 'EDIT') {
      this.update(payload);
    }
  }


  create(payload: any) {
    console.log(payload);

    this.service.addproduct(payload).subscribe((res:any) => {
             
        this.passEntry.emit(res.data);
     
      this.loading = false;
    }, err => {
     
      this.loading = false;
    });
  }

  update(payload: any) {
    console.log(payload);
    this.service.updateProduct(payload).subscribe((res:any) => {
      
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
