import { Component } from '@angular/core';
import { IUser } from './Interface/iuser';
import { DataStateService } from './Services/data-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CovidSelfAssessment';
  public user = {} as IUser;



  constructor(private userState:DataStateService) {


    
   }

  ngOnInit(): void {

    

    //SET THE USER DATA TO THE DEFAULT OBSERVABLE DATA FROM THE SERVICE CLASS
      this.userState.user.subscribe(currentData=>{
        this.user = currentData;
      });
     

      this.navigationTracker();

      
  }



  public navigationTracker():void{

    if(this.user.navigationTracker===1){//Highlight symptom

      document.getElementById('side-symptom').style.backgroundColor="#ffffff";
      document.getElementById('symptom-text').style.color="rgba(132,189,0,1)";
   
      console.log(this.user.navigationTracker);


      document.getElementById('side-personal').style.backgroundColor="rgba(132,189,0,1)";
      document.getElementById('personal-text').style.color="#ffffff";


      document.getElementById('contact-text').style.color="#ffffff";
      document.getElementById('travel-text').style.color="#ffffff";
      document.getElementById('condition-text').style.color="#ffffff";
      
    }
    else if(this.user.navigationTracker===2){//Highlight condition
      console.log(this.user.navigationTracker);
      document.getElementById('side-condition').style.backgroundColor="#ffffff";
      document.getElementById('condition-text').style.color="rgba(132,189,0,1)";

      //Change back previous tab to normal color
      document.getElementById('side-symptom').style.backgroundColor="rgba(132,189,0,1)";
      document.getElementById('symptom-text').style.color="#ffffff";

    }
    
    
    else if(this.user.navigationTracker===3){//Highlight travel Hiostory
      console.log(this.user.navigationTracker);
      document.getElementById('side-travel').style.backgroundColor="#ffffff";
      document.getElementById('travel-text').style.color="rgba(132,189,0,1)";


      document.getElementById('side-condition').style.backgroundColor="rgba(132,189,0,1)";
      document.getElementById('condition-text').style.color="#ffffff";

    }

    else  if(this.user.navigationTracker===4){//Highlight travel History
      console.log(this.user.navigationTracker);
      document.getElementById('side-contact').style.backgroundColor="#ffffff";
      document.getElementById('contact-text').style.color="rgba(132,189,0,1)";


      document.getElementById('side-travel').style.backgroundColor="rgba(132,189,0,1)";
      document.getElementById('travel-text').style.color="#ffffff";
    }
    
    else if (this.user.navigationTracker===5){//Highlight travel personal information
      console.log(this.user.navigationTracker);
      document.getElementById('side-personal').style.backgroundColor="#ffffff";
      document.getElementById('personal-text').style.color="rgba(132,189,0,1)";


      document.getElementById('side-contact').style.backgroundColor="rgba(132,189,0,1)";
      document.getElementById('contact-text').style.color="#ffffff";
    }


  }
}
