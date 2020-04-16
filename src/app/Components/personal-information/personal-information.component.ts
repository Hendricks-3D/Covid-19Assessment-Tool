import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/iuser';
import { NodeUtilitiesService } from 'src/app/Services/node-utilities.service';
import { DataStateService } from 'src/app/Services/data-state.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

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

 
constructor(private userState:DataStateService,private nodeUtil:NodeUtilitiesService,private router:Router,private parent:AppComponent) { }

ngOnInit(): void {

  //SET THE USER DATA TO THE DEFAULT OBSERVABLE DATA FROM THE SERVICE CLASS
    this.userState.user.subscribe(currentData=>{
      this.user = currentData;
    });

    this.parent.ngOnInit();
}

  public submitPersonalInfo():void{

    if(  !(this.user.fullName==='') && !(this.user.parish==='')  &&!(this.user.community==='') 
    &&  !(this.user.age=='') &&  !(this.user.mobile==='')  && !(this.user.gender==='')
     && !(this.user.emergency_name==='') && !(this.user.emergency_number==='') ){
        console.log("great");

        this.nodeUtil.postData(this.user);
        this.router.navigateByUrl('confirmation');
    }

   


  }

}
