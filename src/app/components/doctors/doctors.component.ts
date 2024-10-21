import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  TuiAutoColorPipe, TuiButton, TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  TuiIcon,
  TuiInitialsPipe,
  TuiLink,
  TuiRoot,
  TuiTitle
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiCheckbox,
  TuiChip,
  TuiComment, TuiItemsWithMoreComponent, TuiMore, TuiProgressBar,
  TuiRadioList, TuiStatus,
  TuiTab,
  TuiTabsHorizontal
} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';
import {FormsModule} from '@angular/forms';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiCell} from '@taiga-ui/layout';
import {NgForOf, NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {url} from '../../app.config';

@Component({
  selector: 'doctors-component',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, TuiTitle, TuiBadge, TuiComment, TuiInputNumberModule, FormsModule, TuiTabsHorizontal, TuiTab, TuiRadioList, TuiTable, TuiCheckbox, TuiCell, TuiIcon, TuiChip, TuiInitialsPipe, TuiAutoColorPipe, TuiAvatar, TuiStatus, TuiItemsWithMoreComponent, TuiLink, TuiDropdownOpen, TuiDropdownOptionsDirective, TuiDropdownDirective, TuiButton, TuiProgressBar, NgIf, NgForOf, TuiMore],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

  protected data: any = []

  constructor(http: HttpClient) {
    http.get<any[]>(url + "api/doctors", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).subscribe((users) => {
      // @ts-ignore
      this.data = users.map(user => user.user_info)
    })
  }
}
