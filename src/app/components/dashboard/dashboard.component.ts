import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: any[] = [
    {title:'Post one',category:"Web Development", Date:" 12/20/2020"},
    {title:'Post two',category:"Tech Gadgets", Date:" 12/21/2020"},
    {title:'Post Three',category:"Web Development", Date:" 12/22/2020"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
