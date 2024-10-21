import {HttpClient} from '@angular/common/http';
import {url} from '../app.config';

export function promoteUserToDoctor(id: string, spec: string, info: string, photoUrl: string, http: HttpClient) {
  return http.post(url + "api/doctors", {
    user_id: id,
    specialization: spec,
    info: info,
    photo: photoUrl
  }, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }).subscribe(message => {
    console.log(message)
  })
}
