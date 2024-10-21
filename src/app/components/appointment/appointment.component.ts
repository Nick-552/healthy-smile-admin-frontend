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
import {getUserById} from '../../utils/user-utils';

@Component({
  selector: 'appointments-component',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, TuiTitle, TuiBadge, TuiComment, TuiInputNumberModule, FormsModule, TuiTabsHorizontal, TuiTab, TuiRadioList, TuiTable, TuiCheckbox, TuiCell, TuiIcon, TuiChip, TuiInitialsPipe, TuiAutoColorPipe, TuiAvatar, TuiStatus, TuiItemsWithMoreComponent, TuiLink, TuiDropdownOpen, TuiDropdownOptionsDirective, TuiDropdownDirective, TuiButton, TuiProgressBar, NgIf, NgForOf, TuiMore],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  protected data: any[] = []

  constructor(protected http: HttpClient) {
    const address = "192.168.246.205"
    http.get<any[]>(url + "api/appointments", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).subscribe((appointments) => {
      // @ts-ignore
      this.data = appointments
      this.data.forEach((value, index) => {
        getUserById(value.doctorId, this.http).subscribe((doctor) => {
          // @ts-ignore
          this.data[index].doctorId = doctor.name + " " + doctor.surname + " " + doctor.patronymic
        })
        if(value.patientId != null) {
          getUserById(value.patientId, this.http).subscribe((patient) => {
            // @ts-ignore
            this.data[index].patientId = patient.name + " " + patient.surname + " " + patient.patronymic
          })
        }
      })
    })
  }
}
