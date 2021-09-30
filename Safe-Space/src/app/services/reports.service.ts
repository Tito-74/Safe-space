import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
report!:string;
  constructor(private http:HttpClient ) { 
    console.log("service is ready");
   
  }

  getProfile(report:any){
    return this.http.get("")
    .pipe(((response: any) => response));
  }
}
