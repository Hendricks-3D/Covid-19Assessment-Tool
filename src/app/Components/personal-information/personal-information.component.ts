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

 
constructor(private userState:DataStateService,private nodeUtil:NodeUtilitiesService) { }

ngOnInit(): void {

  //SET THE USER DATA TO THE DEFAULT OBSERVABLE DATA FROM THE SERVICE CLASS
    this.userState.user.subscribe(currentData=>{
      this.user = currentData;
    });
}

  public submitPersonalInfo():void{

   this.nodeUtil.postData(this.user);
  console.log(this.user);

  }

}
