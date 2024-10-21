import {HttpClient} from '@angular/common/http';
import {url} from '../app.config';

export function getUserById(id: string, http: HttpClient) {
  return http.get(url + "api/users/" + id, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
}


export function promoteUserToAdmin(id: string, http: HttpClient) {
  return http.post(url + "admin/" + id, {}, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }).subscribe(message => {
    console.log(message)
  })
}
