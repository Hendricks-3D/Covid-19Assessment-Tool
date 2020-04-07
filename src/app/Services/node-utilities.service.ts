/**
 * THIS SERVICE IS USED TO POST THE USER INFORMATION TO THE DATABASE
 * USING HTTP CLIENT
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse, } from '@angular/common/http'
import { IUser } from '../Interface/iuser';


@Injectable({
  providedIn: 'root'
})
export class NodeUtilitiesService {

  private postUrl:string = `http://18.191.167.252:3010/innovate/covid/insert/`;
  private getUrl;
  
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Authrization':'my-auth-token'
    })
  }
  constructor(private http: HttpClient) { }


  public postData(object:IUser):void{
    this.http.post(this.postUrl,object).toPromise().then(data=>{
      console.log(data);
    },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
        }
    
    )
  }

}
