import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
import { ContactHistoryComponent } from './Components/contact-history/contact-history.component';
import { SymptomsComponent } from './Components/symptoms/symptoms.component';
import { ConditionComponent } from './Components/condition/condition.component';


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
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
