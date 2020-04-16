import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/iuser';
import { Router } from '@angular/router';
import { DataStateService } from 'src/app/Services/data-state.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  public user= {} as IUser;
  
  public showConditions:boolean = false;
  public NoCondition = false;
  constructor(private router:Router,private userState:DataStateService, private parent:AppComponent) { }

  ngOnInit(): void {

    //SET THE USER DATA TO THE DEFAULT OBSERVABLE DATA FROM THE SERVICE CLASS
      this.userState.user.subscribe(currentData=>{
        this.user = currentData;
      });

      this.parent.ngOnInit();
  }
  public next():void{
    this.user.navigationTracker=3;
    this.userState.changeUserData(this.user);
    if(this.NoCondition || this.user.pre_diabetes==='Y' || this.user.pre_heart==='Y'
    || this.user.pre_hypertension==='Y'|| this.user.pre_lung==='Y'|| this.user.pre_respiratory==='Y'
    || this.user.pre_sickle==='Y')
    {
          this.router.navigateByUrl('contactHis');
       //UPDATE THE USER DATA SO OTHER COMPONENTS CAN USE
       this.userState.changeUserData(this.user);

    }


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



  changeHeart():void{

    if(this.user.pre_heart===''|| this.user.pre_heart==="N")
    {
      this.user.pre_heart='Y'
      document.getElementById('heart').style.backgroundColor="rgb(207, 247, 113)"
     
    }else
    {
      this.user.pre_heart= 'N'
      document.getElementById('heart').style.backgroundColor="#fafafa"
    }
    
  }



  changeSickle():void{

    if(this.user.pre_sickle===''|| this.user.pre_sickle==="N")
    {
      this.user.pre_sickle='Y'
      document.getElementById('sickle').style.backgroundColor="rgb(207, 247, 113)"
     
    }else
    {
      this.user.pre_sickle= 'N'
      document.getElementById('sickle').style.backgroundColor="#fafafa"
    }
    
  }


  changeLung():void{

    if(this.user.pre_lung===''|| this.user.pre_lung==="N")
    {
      this.user.pre_lung='Y'
      document.getElementById('lung').style.backgroundColor="rgb(207, 247, 113)"
     
    }else
    {
      this.user.pre_lung= 'N'
      document.getElementById('lung').style.backgroundColor="#fafafa"
    }
    
  }

//-------------------------------------------------------------------------------------



  //Methods that will hide and show UI  elements
  public show():void{
    document.getElementById('no').style.backgroundColor="#fafafa";
    document.getElementById('yes').style.backgroundColor="rgb(207, 247, 113)"
    this.showConditions = true;
  }


  public hide():void{
    document.getElementById('yes').style.backgroundColor="#fafafa";
    document.getElementById('no').style.backgroundColor="rgb(207, 247, 113)"
    this.NoCondition = true;
    this.showConditions =false;
  }


  //--------------------------------------------------------------------
}
