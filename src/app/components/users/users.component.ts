import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  TuiAutoColorPipe, TuiButton, TuiDataListComponent, TuiDialog, TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  TuiIcon,
  TuiInitialsPipe,
  TuiLink, TuiOptGroup, TuiOption,
  TuiRoot, TuiTextfieldComponent, TuiTextfieldDirective,
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
import {TuiInputModule, TuiInputNumberModule} from '@taiga-ui/legacy';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiCell} from '@taiga-ui/layout';
import {NgForOf, NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {url} from '../../app.config';
import {promoteUserToAdmin} from '../../utils/user-utils';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {promoteUserToDoctor} from '../../utils/doctor-utils';

@Component({
  selector: 'users-component',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, TuiTitle, TuiBadge, TuiComment, TuiInputNumberModule, FormsModule, TuiTabsHorizontal, TuiTab, TuiRadioList, TuiTable, TuiCheckbox, TuiCell, TuiIcon, TuiChip, TuiInitialsPipe, TuiAutoColorPipe, TuiAvatar, TuiStatus, TuiItemsWithMoreComponent, TuiLink, TuiDropdownOpen, TuiDropdownOptionsDirective, TuiDropdownDirective, TuiButton, TuiProgressBar, NgIf, NgForOf, TuiMore, TuiOptGroup, TuiOption, TuiDataListComponent, TuiDialog, ReactiveFormsModule, TuiInputModule, TuiAutoFocus, TuiTextfieldDirective, TuiTextfieldComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  protected data: any = []
  protected open = false;

  protected readonly userManagement = [
    {
      title: "Управление правами",
      items: [
        {
          "title": "Сделать админом",
          "action": (userId: any) => {
            promoteUserToAdmin(userId, this.http)
          }
        },
        {
          "title": "Сделать доктором",
          "action": (userId: any) => {
            console.log("Сделать доктором")
            this.showDialog()
            this.userToDoctorId = userId
          }
        }
      ]
    }
  ]


  doctorSpec: any;
  doctorInfo: any;
  doctorPhoto: any;
  userToDoctorId: any;


  constructor(protected http: HttpClient) {
    http.get(url + "api/users", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).subscribe((users) => {
      this.data = users
    })
  }

  protected showDialog(): void {
    this.open = true;
  }

  createDoctor() {
    promoteUserToDoctor(this.userToDoctorId, this.doctorSpec, this.doctorInfo, this.doctorPhoto, this.http)
    this.open = false
  }
}
