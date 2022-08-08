import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  navActive:boolean = false;
  ngOnInit(): void {
    this.router.events.subscribe(()=>{
      this.navActive = false;
    })
  }
  /**
   * ### Description
   * Takes no arguements and when clicked check to see if the sidebar is open if it is not then it will open it. If not closes sidebar
   */
  toggleNav(){
    this.navActive = !this.navActive;
  }

}
