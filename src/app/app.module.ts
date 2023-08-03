import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule}from '@angular/material/button';
import {MatInputModule}from '@angular/material/input';
import {MatFormFieldModule}from '@angular/material/form-field';
import {MatSnackBarModule}from '@angular/material/snack-bar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import{FormsModule} from '@angular/forms'
import{HttpClientModule} from'@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import{MatCardModule} from '@angular/material/card';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon'
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import{MatListModule}from'@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import {MatDividerModule} from '@angular/material/divider';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import{MatSlideToggleModule} from '@angular/material/slide-toggle';
import{ MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ProductComponent } from './pages/admin/product/product.component';
import { ProductModalComponent } from './pages/admin/product/product-modal/product-modal.component';
import { NgbModule, NgbModalModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketComponent } from './pages/admin/ticket/ticket.component';
import { HomesidebarComponent } from './pages/homesidebar/homesidebar.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingModalComponent } from './pages/booking/booking-modal/booking-modal.component';
import { ManagerComponent } from './pages/admin/manager/manager.component';
import { ManagerModalComponent } from './pages/admin/manager/manager-modal/manager-modal.component';
import { EvaluateComponent } from './pages/evaluate/evaluate.component';
import { EvaluateModalComponent } from './pages/evaluate/evaluate-modal/evaluate-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatisticalComponent } from './pages/user/statistical/statistical.component';
import { DatePipe } from '@angular/common';

import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent, 
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UserSidebar,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    ProductComponent,    
    ProductModalComponent,
    TicketComponent,
    HomesidebarComponent,
    BookingComponent,
    BookingModalComponent,
    ManagerComponent,
    ManagerModalComponent,
    EvaluateComponent,
    EvaluateModalComponent,
    StatisticalComponent,
    
  ],
  imports: [
    
    BrowserModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgbModalModule, 
    ReactiveFormsModule,
    NgbModule,  
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })
   
  
  ],
  providers: [authInterceptorProviders, DatePipe,NgbDropdown],
  bootstrap: [AppComponent]
})
export class AppModule { }
