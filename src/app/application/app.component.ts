import {TuiRoot, TuiTitle} from "@taiga-ui/core";
import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {TuiBadge, TuiComment, TuiTab, TuiTabsHorizontal} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';
import {FormsModule} from '@angular/forms';
import {routes} from '../app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, TuiTitle, TuiBadge, TuiComment, TuiInputNumberModule, FormsModule, TuiTabsHorizontal, TuiTab, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(protected router: Router) {
  }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    if(token == null) {
      this.router.navigateByUrl("login")
    }
  }




}
