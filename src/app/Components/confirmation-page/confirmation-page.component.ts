import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStateService } from 'src/app/Services/data-state.service';
import { IUser } from 'src/app/Interface/iuser';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  public user= {} as IUser;

  constructor(private router:Router,private userState:DataStateService) { }

  ngOnInit(): void {
    this.user.travel=''
  }


  public next():void{

    this.router.navigateByUrl('symptom');
          //UPDATE THE USER DATA SO OTHER COMPONENTS CAN USE
          this.userState.changeUserData(this.user);
    
        console.log(this.user);


  }
}
