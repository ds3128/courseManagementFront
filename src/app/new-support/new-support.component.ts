import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-support',
  templateUrl: './new-support.component.html',
  styleUrls: ['./new-support.component.css']
})
export class NewSupportComponent implements  OnInit{

  typeSupport! : FormGroup;

  constructor(private fb : FormBuilder) {
  }

  ngOnInit() : void {
  }
}
