import {
  TuiAppearance,
  TuiButton, TuiIcon,
  TuiLabel,
  TuiRoot,
  TuiTextfieldComponent,
  TuiTextfieldDirective,
  TuiTitle
} from "@taiga-ui/core";
import {Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {TuiBadge, TuiComment, TuiCopy, TuiPassword, TuiTab, TuiTabsHorizontal} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';
import {FormsModule} from '@angular/forms';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {HttpClient} from '@angular/common/http';
import {url} from '../app.config';

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, TuiTitle, TuiBadge, TuiComment, TuiInputNumberModule, FormsModule, TuiTabsHorizontal, TuiTab, RouterLink, TuiAppearance, TuiCardLarge, TuiHeader, TuiButton, TuiTextfieldComponent, TuiLabel, TuiTextfieldDirective, TuiCopy, TuiIcon, TuiPassword],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  protected username: string = "";
  protected password: string = "";

  constructor(protected http: HttpClient, protected router: Router) {
  }

  login() {
    this.http.post(url + "auth/login", {
      username: this.username,
      password: this.password
    }).subscribe((user) => {
      // @ts-ignore
      localStorage.setItem("token", user.jwt_token)
      this.router.navigateByUrl("app")
    })
  }
}
