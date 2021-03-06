import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
report!:string;
  constructor(private http:HttpClient ) { 
    console.log("service is ready");
    // this.report= "/reports/";
  }

  getReport(){
    return this.http.get("https://safespacebackendgp.herokuapp.com/reports/")
    .pipe(((response: any) => response));
  }
}
