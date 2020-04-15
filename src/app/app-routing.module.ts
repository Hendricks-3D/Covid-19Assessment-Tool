import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
import { ContactHistoryComponent } from './Components/Travel/contact-history.component';
import { SymptomsComponent } from './Components/symptoms/symptoms.component';
import { ConditionComponent } from './Components/condition/condition.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConfirmationPageComponent } from './Components/confirmation-page/confirmation-page.component';


const routes: Routes = [
  {
    path:'',
    component:SymptomsComponent
  },
    {
      path:'personalInfo',
      component:PersonalInformationComponent
    },
    {
      path:'contactHis',
      component:ContactHistoryComponent
    },
    {
      path:'symptoms',
      component:SymptomsComponent
    },
    {
      path:'condition',
      component:ConditionComponent
    },
    {
      path:'contact',
      component:ContactComponent
    },
    {
      path:'confirmation',
      component:ConfirmationPageComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
