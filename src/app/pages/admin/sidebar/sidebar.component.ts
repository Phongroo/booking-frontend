import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  categories:any;
  constructor(public loginservice:LoginService,private categoryService:CategoryService){}
  ngOnInit(): void {
    this.categoryService.categories(this.categories).subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories)
     },(error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data','error')
     }
     )
   
  }
  logout(){
  this.loginservice.logout();
    window.location.reload();
    // this.router.navigate(['/login']);
   
  }


}



