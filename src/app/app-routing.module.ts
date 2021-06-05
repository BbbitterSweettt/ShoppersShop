import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { MenComponent } from './men/men.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  { path:'home' , component: HomeComponent},
  { path:'log-in' , component:LogInComponent},
  { path:'sign-up' , component: SignUpComponent},
  { path:'men' , component: MenComponent},
  { path:'women' , component: WomenComponent},
  { path:'update-profile', component: UpdateProfileComponent},
  { path:'order-history', component: OrderHistoryComponent},
  { path:'product-details', component: ProductDetailsComponent},
  { path:'' , 
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path:'**' ,  component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
