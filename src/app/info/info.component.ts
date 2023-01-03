import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  inputSurname: string;
  inputName: string;
  inputEmail: string;
  inputDate:string;
  inputGender:string;
  inputPassword: string;

  ngOnInit():void {
    this.inputSurname = localStorage.getItem("inputSurname");
    this.inputName = localStorage.getItem("inputName");
    this.inputEmail = localStorage.getItem("inputEmail");
    this.inputDate = localStorage.getItem("inputDate");
    this.inputGender = localStorage.getItem("inputGender");
    this.inputPassword = localStorage.getItem("inputPassword");
  }
}
