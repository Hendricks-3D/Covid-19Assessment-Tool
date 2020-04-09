/**
 * THIS SERVICE KEEPS TRACK OF THE USER INFORMATION 
 * THAT IS USED BETWEEN THE VARIOUS COMPONENTS.
 * 
 * 
 * IT USES THE BEHAVIORSUBJECT MODULE TO ALLOW ME TO OBSERVE AND SUBSCRIBE TO THE 
 * DATA IN EACH COMPONENT AND PUSH THE NEW DATA BACK TO THE userDataSource 
 * varable.
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { IUser } from '../Interface/iuser';


@Injectable({
  providedIn: 'root'
})
export class DataStateService {

  private userDataSource = new BehaviorSubject<IUser>({
    //personal information
        fullName:'',
    
        email:'',
        parish:'',
        community:'',
        age:'',
        gender:'',
        mobile:'',
        latitude:0,
        longitude:0,
    
        //symptoms
        symptom_running_nose:'N',
        symptom_fever:'N',
        symptom_breathing:'N',
        symptom_fatigue:'N',
        symptom_date:'N',
        symptom_cough:'N',
        symptom_sore_throat:'N',
        symptom_chest_pain:'N',
        symptom_none:'N',
        //travel information
        travel:'N',
        travel_date:'',
        contact_travel_other:'N',
        contact_flu_other:'N',
        //contact
        contact_confirm:'N',
        contact_suspect:'N',
        contact_symptom:'N',
        contact_travel:'N',
    
        //Pre Existing condition
        pre_diabetes:'N',
        pre_hypertension:'N',
        pre_respiratory:'N',
        pre_lung:'N',
        pre_sickle:'N',
        pre_heart:'N',
    
        //travel
      countries:'',
      departure_date:'',
      arrival_date:'',
      flight_number:'',
      departure_port:'',
      arrival_port:'',

      emergency_name:'',
      emergency_number:'',


    
    });
  user = this.userDataSource.asObservable();



  constructor() { }


  changeUserData(newData: IUser) {
    this.userDataSource.next(newData);
  }
}
