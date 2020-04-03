import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/iuser';
import { Router } from '@angular/router';
import { DataStateService } from 'src/app/Services/data-state.service';
@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  public user = {} as IUser;
 
  constructor(private router:Router,private userState:DataStateService) { }

  ngOnInit(): void {

    //SET THE USER DATA TO THE DEFAULT OBSERVABLE DATA FROM THE SERVICE CLASS
      this.userState.user.subscribe(currentData=>{
        this.user = currentData;
      });
  }

  public next():void{
    this.router.navigateByUrl('condition');

    //UPDATE THE USER DATA SO OTHER COMPONENTS CAN USE
    this.userState.changeUserData(this.user);
    //LOG DATA
    console.log(this.user);

    this.getLocation();
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
      document.getElementById('nose').style.backgroundColor="rgb(207, 247, 113)"
     
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
      
    }else
    {
      this.user.symptom_breathing= 'N'
      document.getElementById('breathing').style.backgroundColor="#fafafa"

    }
    
  }

  changeFatique():void{
    console.log("It works");
    if(this.user.symptom_fatique===''|| this.user.symptom_fatique=="N")
    {
      this.user.symptom_fatique= 'Y'
      document.getElementById('fatique').style.backgroundColor="rgb(207, 247, 113)"
      console.log(this.user.symptom_fatique);
    }else
    {
      this.user.symptom_fatique = 'N'
      document.getElementById('fatique').style.backgroundColor="#fafafa"
    }
    
  }



  //------------------------------------------------------------------------------------------

}
