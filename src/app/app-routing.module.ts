import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { TicketComponent } from './pages/admin/ticket/ticket.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ManagerComponent } from './pages/admin/manager/manager.component';
import { EvaluateComponent } from './pages/evaluate/evaluate.component';
import { StatisticalComponent } from './pages/user/statistical/statistical.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,children:[     
      {
        path:'booking',component:BookingComponent,      
      },
      {
        path:'evaluate',component:EvaluateComponent,      
      },
    ]
  },
  {
  path:'signup',component:SignupComponent,pathMatch:'full',

},
{
  path:'login',component:LoginComponent,pathMatch:'full',
},
{
  path:'admin',component:DashboardComponent,canActivate:[AdminGuard],children:[
    {
      path:'',component:WelcomeComponent,
    },
    {
      path:'profile',component:ProfileComponent
    },
    {
      path:'category',component:ViewCategoriesComponent
    },
    {
      path:'add-category',component:AddCategoryComponent
    },
    {
      path:'product',component:ProductComponent
    },
    {
      path:'ticket',component:TicketComponent
    },
    {
      path:'manager',component:ManagerComponent
    },
    {
      path:'view-questions/:qId/:title',component:ViewQuizQuestionsComponent
    },
    {
      path:'add-question/:qId/:title',component:AddQuestionComponent
    }
    
  ],
},
{
  path:'user-dashboard',component:UserDashboardComponent,canActivate:[NormalGuard],children:[
    {
      path:'',component:StartComponent
    },
    {
      path:'instructions/:qId',component:InstructionsComponent
    },
    {
      path:'statistical',component:StatisticalComponent
    },
    
    
  ],
},
{
  path:'start/:qId',component:StartComponent,canActivate:[NormalGuard]
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
