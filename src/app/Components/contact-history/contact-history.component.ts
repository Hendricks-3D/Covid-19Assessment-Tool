import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/iuser';
import { Router } from '@angular/router';
import { DataStateService } from 'src/app/Services/data-state.service';
@Component({
  selector: 'app-contact-history',
  templateUrl: './contact-history.component.html',
  styleUrls: ['./contact-history.component.css']
})
export class ContactHistoryComponent implements OnInit {

  public user= {} as IUser;
 
  public showConditions:boolean = false;
  constructor(private router:Router,private userState:DataStateService) { }

  ngOnInit(): void {

    //SET THE USER DATA TO THE DEFAULT OBSERVABLE DATA FROM THE SERVICE CLASS
      this.userState.user.subscribe(currentData=>{
        this.user = currentData;
      });
  }

  public  next():void{
    this.router.navigateByUrl('personalInfo');
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

  changeTravel():void{
    console.log("It works");
    if(this.user.travel===''|| this.user.travel=="N")
    {
      this.user.travel ='Y'
      document.getElementById('travel').style.backgroundColor="rgb(207, 247, 113)"
      console.log(this.user.symptom_fatique);
    }else
    {
      this.user.travel= 'N'
      document.getElementById('travel').style.backgroundColor="#fafafa"
    }
    
  }

  changeContact():void{
    console.log("It works");
    if(this.user.contact_travel_other===''|| this.user.contact_travel_other=="N")
    {
      this.user.contact_travel_other ='Y'
      document.getElementById('contact').style.backgroundColor="rgb(207, 247, 113)"
     
    }else
    {
      this.user.contact_travel_other= 'N'
      document.getElementById('contact').style.backgroundColor="#fafafa"
    }
    
  }


  changeContactFlu():void{
    console.log("It works");
    if(this.user.contact_flu_other===''|| this.user.contact_flu_other=="N")
    {
      this.user.contact_flu_other ='Y'
      document.getElementById('contactFlu').style.backgroundColor="rgb(207, 247, 113)"
     
    }else
    {
      this.user.contact_flu_other= 'N'
      document.getElementById('contactFlu').style.backgroundColor="#fafafa"
    }
    
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
  }


}
