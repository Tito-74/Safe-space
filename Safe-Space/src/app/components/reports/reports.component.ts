import { ReportsService } from './../../services/reports.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
report:any
  constructor(private reportsservice:ReportsService) { }
  
  getReports(){
    this.reportsservice.getReport().subscribe(data=>{
      console.log("hello");
      return data;
      
    }
    );
  }

  ngOnInit(): void {
    // this.report = "reports"
    this. getReports()
  }

}
