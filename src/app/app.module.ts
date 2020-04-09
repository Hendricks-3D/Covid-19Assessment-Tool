import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
import { ContactHistoryComponent } from './Components/Travel/contact-history.component';
import { SymptomsComponent } from './Components/symptoms/symptoms.component';
import { HttpClientModule } from '@angular/common/http';
import { ConditionComponent } from './Components/condition/condition.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    ContactHistoryComponent,
    SymptomsComponent,
    ConditionComponent,
    ContactComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
