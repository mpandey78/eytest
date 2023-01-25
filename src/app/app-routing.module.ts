import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { GetDataComponent } from './get-data/get-data.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  
  {path:'',redirectTo:'/home',pathMatch:'full'},

  {path:'home',component:GetDataComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'crud',component:CrudOperationComponent},
  {path:'addTodo',component:AddtodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
