import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-setting';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings> {
  //   return of(userSettings);
  // }
  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post("https://putsreq.com/fA61a0sN0zeOMhBzDInT", userSettings);
    /* to run website add this in code side
     * var parsedBody = JSON.parse(request.body);
        parsedBody.id=1;
      response.body ={entity:parsedBody,message:"successed",success:true};
     */
  }
  getsubscriptionTypes(): Observable<string[]> {
    return of(["Dayly", "Monthly", "Annual", "Lifetime"]);
  }
}
