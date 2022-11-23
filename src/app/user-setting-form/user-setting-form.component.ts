import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-setting';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  };
  //subscriptionTypes = ["one", "two", "three", "four"];
  subscriptionTypes!: Observable<string[]>;
  singleModel: string = "On";
  startDate!: Date;
  startTime!: Date;
  userRating = 0;
  maxRating = 10;
  isReadonly = false;
  userSettings: UserSettings = { ...this.originalUserSettings };
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getsubscriptionTypes();
    this.startDate = new Date();
  }
  onSubmit(form: NgForm) {
    debugger
    console.log(form.value);
    this.dataService.postUserSettingsForm(form.value).subscribe(
      res => {
        debugger
        console.log("sucess" + res)
      },
      // err => {
      //   debugger
      //   console.log("error" + err)
      // },
      error => this.httpHandError(error),
      () => {
        debugger
        console.log("complete")
      }
    );
  }
  httpHandError(error: any) {

  }
  onBlur(field: NgModel) {
    debugger
    console.log(field);
  }
}
