import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Go Safe Travels';
  constructor(private router:Router){}
  ngOnInit() {

    // for top
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)   
    });
  }
}

  //dropdown close
  


