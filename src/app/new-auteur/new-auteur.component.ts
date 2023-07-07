import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuteurService} from "../services/auteur.service";
import {Router} from "@angular/router";
import {Auteur} from "../model/auteur.model";

@Component({
  selector: 'app-new-auteur',
  templateUrl: './new-auteur.component.html',
  styleUrls: ['./new-auteur.component.css']
})
export class NewAuteurComponent implements OnInit{

  newAuteurFormGroup! : FormGroup;

  constructor(private fb : FormBuilder, private auteurService : AuteurService, private router : Router) {
  }

  ngOnInit() : void {
    this.newAuteurFormGroup = this.fb.group({
      firstName : this.fb.control(null, [Validators.required, Validators.minLength(5)]),
      lastName : this.fb.control(null, [Validators.required, Validators.minLength(5)]),
      tel : this.fb.control(null, [Validators.required, Validators.minLength(9)]),
      email : this.fb.control(null, [Validators.required, Validators.email]),
      grade : this.fb.control(null, [Validators.required])
    })
  }

  handleSaveAuteur() {
    let auteur : Auteur = this.newAuteurFormGroup.value;
    this.auteurService.saveAuteur(auteur).subscribe({
      next : (data) => {
        alert("Auteur has been successfully saved");
        this.router.navigateByUrl("/auteur");
      },
      error : err => {
        console.log(err);
      }
    })
  }
}
