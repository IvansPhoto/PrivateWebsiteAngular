import { Component, OnInit } from '@angular/core';
import RouteNames from "../../Helpers/RouteNames";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }

  Routes = RouteNames;

}
