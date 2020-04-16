import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/iuser';
import { Router } from '@angular/router';
import { DataStateService } from 'src/app/Services/data-state.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public user= {} as IUser;
 
  public showConditions:boolean = false;
  public travel:boolean = false;
  constructor(private router:Router,private userState:DataStateService, private parent:AppComponent) { }

  ngOnInit(): void {

    //SET THE USER DATA TO THE DEFAULT OBSERVABLE DATA FROM THE SERVICE CLASS
      this.userState.user.subscribe(currentData=>{
        this.user = currentData;
      });

      this.parent.ngOnInit();
  }

  public next():void{
    this.user.navigationTracker=5;
    this.router.navigateByUrl('personalInfo');
          //UPDATE THE USER DATA SO OTHER COMPONENTS CAN USE
          this.userState.changeUserData(this.user);
    
        console.log(this.user);


  }


  public show():void{
    document.getElementById('no').style.backgroundColor="#fafafa";
    document.getElementById('yes').style.backgroundColor="rgb(207, 247, 113)"
    this.showConditions = true;
  }


  public hide():void{
    document.getElementById('yes').style.backgroundColor="#fafafa";
    document.getElementById('no').style.backgroundColor="rgb(207, 247, 113)"

    this.showConditions =false;
    this.travel = true;
  }




  //confirmed


  public yesConfirm():void{
    document.getElementById('no-confirm').style.backgroundColor="#fafafa";
    document.getElementById('yes-confirm').style.backgroundColor="rgb(207, 247, 113)"
    this.user.contact_confirm='Y'
  }


  public noConfirm():void{
    document.getElementById('yes-confirm').style.backgroundColor="#fafafa";
    document.getElementById('no-confirm').style.backgroundColor="rgb(207, 247, 113)"
    this.user.contact_confirm='N'

  }


  //suspect
  public yesSuspect():void{
    document.getElementById('no-suspect').style.backgroundColor="#fafafa";
    document.getElementById('yes-suspect').style.backgroundColor="rgb(207, 247, 113)";
    this.user.contact_suspect='Y';
  }


  public noSuspect():void{
    document.getElementById('yes-suspect').style.backgroundColor="#fafafa";
    document.getElementById('no-suspect').style.backgroundColor="rgb(207, 247, 113)";

    this.user.contact_suspect='N';
  }



  //symptom

  public yesSymptom():void{
    document.getElementById('no-symptom').style.backgroundColor="#fafafa";
    document.getElementById('yes-symptom').style.backgroundColor="rgb(207, 247, 113)"
    this.user.contact_symptom='Y'
  }


  public noSymptom():void{
    document.getElementById('yes-symptom').style.backgroundColor="#fafafa";
    document.getElementById('no-symptom').style.backgroundColor="rgb(207, 247, 113)";

    this.user.contact_symptom='N'
  }


  //travel
  public yesTravel():void{
    document.getElementById('no-travel').style.backgroundColor="#fafafa";
    document.getElementById('yes-travel').style.backgroundColor="rgb(207, 247, 113)";
    this.user.contact_travel='Y';
  }


  public noTravel():void{
    document.getElementById('yes-travel').style.backgroundColor="#fafafa";
    document.getElementById('no-travel').style.backgroundColor="rgb(207, 247, 113)";
    this.user.contact_travel='N';
  }





}
