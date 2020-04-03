import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/iuser';
import { Router } from '@angular/router';
import { DataStateService } from 'src/app/Services/data-state.service';
@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  public user= {} as IUser;
  public choices =["","N","Y"];
  constructor(private router:Router,private userState:DataStateService) { }

  ngOnInit(): void {

    //SET THE USER DATA TO THE DEFAULT OBSERVABLE DATA FROM THE SERVICE CLASS
      this.userState.user.subscribe(currentData=>{
        this.user = currentData;
      });
  }
  public next():void{
    this.router.navigateByUrl('contactHis');
       //UPDATE THE USER DATA SO OTHER COMPONENTS CAN USE
       this.userState.changeUserData(this.user);
       //LOG DATA
       console.log(this.user);
  }




  /**
   * 
   * ALL THE METHODS BELOW WILL CHANGE THE VARAIBLES OF EACH CONTACT HISTORY ITEM
   * SELECTED BY THE USERM AND ALSO CHANGE THE <div> BACKGROOUND COLOR
   */

  changeDiabetes():void{

    if(this.user.pre_diabetes===''|| this.user.pre_diabetes==="N")
    {
      this.user.pre_diabetes ='Y'
      document.getElementById('diabetes').style.backgroundColor="rgb(207, 247, 113)"
     
    }else
    {
      this.user.pre_diabetes= 'N'
      document.getElementById('diabetes').style.backgroundColor="#fafafa"
    }
    
  }


  changeHypertension():void{

    if(this.user.pre_hypertension===''|| this.user.pre_hypertension==="N")
    {
      this.user.pre_hypertension='Y'
      document.getElementById('hypertension').style.backgroundColor="rgb(207, 247, 113)"
     
    }else
    {
      this.user.pre_hypertension= 'N'
      document.getElementById('hypertension').style.backgroundColor="#fafafa"
    }
    
  }



  changeRespitory():void{

    if(this.user.pre_respiratory===''|| this.user.pre_respiratory==="N")
    {
      this.user.pre_respiratory='Y'
      document.getElementById('respitory').style.backgroundColor="rgb(207, 247, 113)"
     
    }else
    {
      this.user.pre_respiratory= 'N'
      document.getElementById('respitory').style.backgroundColor="#fafafa"
    }
    
  }

}
