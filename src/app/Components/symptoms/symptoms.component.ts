import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/iuser';
import { Router } from '@angular/router';
import { DataStateService } from 'src/app/Services/data-state.service';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  public user = {} as IUser;
 
  constructor(private router:Router,private userState:DataStateService,private parent:AppComponent ) { }

  ngOnInit(): void {

    
      
    //SET THE USER DATA TO THE DEFAULT OBSERVABLE DATA FROM THE SERVICE CLASS
      this.userState.user.subscribe(currentData=>{
        this.user = currentData;
      });
this.parent.ngOnInit();
      
  }

  public next():void{

    this.user.navigationTracker=2;
    if(this.user.symptom_none==='Y' || this.user.symptom_running_nose==='Y'|| this.user.symptom_breathing==='Y'
    || this.user.symptom_chest_pain==='Y'|| this.user.symptom_cough==='Y'|| this.user.symptom_fatigue==='Y'|| this.user.symptom_fever==='Y'
    || this.user.symptom_sore_throat==='Y')
    {


      this.router.navigateByUrl('condition');

      //UPDATE THE USER DATA SO OTHER COMPONENTS CAN USE
      this.userState.changeUserData(this.user);

  
      this.getLocation();
    }else{
      return;
    }
   
  }



  //GET USER CURRENT LONGITUDE AND LATITUDE
  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.user.longitude = position.coords.longitude;
          this.user.latitude= position.coords.latitude;
          
          console.log(this.user.latitude,this.user.longitude);
        });
    } else {
       console.log("No support for geolocation")
    }
  }


  /**
   * 
   * ALL THE METHODS BELOW WILL CHANGE THE VARAIBLES OF EACH SYMPTOM
   * SELECTED BY THE USERM AND ALSO CHANGE THE <div> BACKGROOUND COLOR
   */

  runnyNose():void{
    console.log("It works");
    if(this.user.symptom_running_nose===''|| this.user.symptom_running_nose=="N")
    {
      this.user.symptom_running_nose = 'Y'
      document.getElementById('nose').style.backgroundColor="rgb(207, 247, 113)";

      //change No symptom to N
      if(this.user.symptom_none==='Y')
      this.changeNoSymptom()
     
    }else
    {
      this.user.symptom_running_nose = 'N'
      document.getElementById('nose').style.backgroundColor="#fafafa"
     
    }
    
  }//end of runnny Nose

  changeFever():void{
    console.log("It works");
    if(this.user.symptom_fever===''|| this.user.symptom_fever=="N")
    {
      this.user.symptom_fever = 'Y'
      document.getElementById('fever').style.backgroundColor="rgb(207, 247, 113)"

      //change No symptom to N
      if(this.user.symptom_none==='Y')
      this.changeNoSymptom()
     
    }else
    {
      this.user.symptom_fever= 'N'
      document.getElementById('fever').style.backgroundColor="#fafafa"
    
    }
    
  }


  changeBreathing():void{
    console.log("It works");
    if(this.user.symptom_breathing===''|| this.user.symptom_breathing=="N")
    {
      this.user.symptom_breathing= 'Y'
      document.getElementById('breathing').style.backgroundColor="rgb(207, 247, 113)"
      //change No symptom to N
      if(this.user.symptom_none==='Y')
      this.changeNoSymptom()
      
    }else
    {
      this.user.symptom_breathing= 'N'
      document.getElementById('breathing').style.backgroundColor="#fafafa"

    }
    
  }

  changeFatigue():void{
    console.log("It works");
    if(this.user.symptom_fatigue===''|| this.user.symptom_fatigue=="N")
    {
      this.user.symptom_fatigue= 'Y'
      document.getElementById('fatique').style.backgroundColor="rgb(207, 247, 113)"
      console.log(this.user.symptom_fatigue);

      //change No symptom to N
      if(this.user.symptom_none==='Y')
      this.changeNoSymptom()
    }else
    {
      this.user.symptom_fatigue = 'N'
      document.getElementById('fatique').style.backgroundColor="#fafafa"
    }
    
  }


  changeCough():void{
    console.log("It works");
    if(this.user.symptom_cough===''|| this.user.symptom_cough=="N")
    {
      this.user.symptom_cough= 'Y'
      document.getElementById('cough').style.backgroundColor="rgb(207, 247, 113)";

      //change No symptom to N
      if(this.user.symptom_none==='Y')
      this.changeNoSymptom();
      
    }else
    {
      this.user.symptom_cough = 'N'
      document.getElementById('cough').style.backgroundColor="#fafafa"
    }
    
  }

  changeChest():void{
    console.log("It works");
    if(this.user.symptom_chest_pain===''|| this.user.symptom_chest_pain=="N")
    {
      this.user.symptom_chest_pain= 'Y'
      document.getElementById('chest').style.backgroundColor="rgb(207, 247, 113)"
      //change No symptom to N
      if(this.user.symptom_none==='Y')
      this.changeNoSymptom()
     
    }else
    {
      this.user.symptom_chest_pain= 'N'
      document.getElementById('chest').style.backgroundColor="#fafafa"
    }
    
  }


  changeThroat():void{
    console.log("It works");
    if(this.user.symptom_sore_throat===''|| this.user.symptom_sore_throat=="N")
    {
      this.user.symptom_sore_throat= 'Y'
      document.getElementById('throat').style.backgroundColor="rgb(207, 247, 113)";

      //change No symptom to N
      if(this.user.symptom_none==='Y')
      this.changeNoSymptom()
      
    }else
    {
      this.user.symptom_sore_throat = 'N'
      document.getElementById('throat').style.backgroundColor="#fafafa"
    }
    
  }



  changeNoSymptom():void{
    console.log("It works");
    if(this.user.symptom_none===''|| this.user.symptom_none=="N")
    {
      this.user.symptom_none= 'Y';
      document.getElementById('no-symptom').style.backgroundColor="rgb(207, 247, 113)";

      if(this.user.symptom_running_nose==='Y')
        this.runnyNose();

      if(this.user.symptom_breathing==='Y')
        this.changeBreathing();

      if(this.user.symptom_chest_pain==='Y')
      this.changeChest()

       if(this.user.symptom_cough==='Y')
        this.changeCough();
       
       if(this.user.symptom_fatigue==='Y')
       this.changeFatigue();

      if(this.user.symptom_fever==='Y')
      this.changeFever()

      if(this.user.symptom_sore_throat==='Y')
      this.changeThroat()

    }else
    {
      this.user.symptom_none = 'N'
      document.getElementById('no-symptom').style.backgroundColor="#fafafa"

    }
    
  }





  //------------------------------------------------------------------------------------------

}
