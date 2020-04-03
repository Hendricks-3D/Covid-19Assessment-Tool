import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/iuser';
import { NodeUtilitiesService } from 'src/app/Services/node-utilities.service';
import { DataStateService } from 'src/app/Services/data-state.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

 public user = {} as IUser;
 public gender = ['',"Male",'Female'];
 public parishes = ['',
  'Hanover','Saint Elizabeth','Trelawny','Westmoreland',
  'Clarendon','Manchester',"Saint Ann",'Saint Catherine','Saint Mary',
  'Kingston','Portland','Saint Andrew','Saint Thomas'

];
 public test ={
  "id":"101", 
  "sender": "Smart Park",
  "reciever":"Odain",
  "message":"Hi Admin the parking area you parked in cost JMD $100.00 per hour.",
  "sentTime":"24 March 2020 5:27:23",
  "status":"sent"
}
 
constructor(private userState:DataStateService) { }

ngOnInit(): void {

  //SET THE USER DATA TO THE DEFAULT OBSERVABLE DATA FROM THE SERVICE CLASS
    this.userState.user.subscribe(currentData=>{
      this.user = currentData;
    });
}

  public submitPersonalInfo():void{

   // this.nodeUtil.postData(this.user);
  // this.nodeUtil.postData(this.test); 
  console.log(this.user);

  }

}
