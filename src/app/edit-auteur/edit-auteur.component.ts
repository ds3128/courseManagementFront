import {Component, OnInit} from '@angular/core';
import {Auteur} from "../model/auteur.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuteurService} from "../services/auteur.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-auteur',
  templateUrl: './edit-auteur.component.html',
  styleUrls: ['./edit-auteur.component.css']
})
export class EditAuteurComponent implements OnInit{

  auteurId! : number;
  auteur! : Auteur;
  editAuteurFormGroup! : FormGroup;

  constructor(private fb : FormBuilder, private auteurService : AuteurService, private router : Router, private route : ActivatedRoute) {
    this.auteur = this.router.getCurrentNavigation()?.extras.state as Auteur;
  }

  ngOnInit() : void {
    this.auteurId = this.route.snapshot.params['id'];
    this.handleSearchAuteurId();
  }

  handleSearchAuteurId(){
    this.auteurService.searchAuteurById(this.auteurId).subscribe({
      next : (auteur) => {
        this.auteur = auteur;
        this.createEditAuteurFormGroup();
      },
      error : err => {
        console.log(err);
      }
    });
  }

  createEditAuteurFormGroup(): void {
    this.editAuteurFormGroup = this.fb.group({
      id : [this.auteur.id],
      firstName: [this.auteur.firstName, [Validators.required, Validators.minLength(2)]],
      lastName: [this.auteur.lastName, [Validators.required, Validators.minLength(2)]],
      tel: [this.auteur.tel, [Validators.required, Validators.minLength(9)]],
      email: [this.auteur.email, [Validators.required, Validators.email]],
      grade: [this.auteur.grade, [Validators.required]]
    });
  }

  handleUpdateAuteur() {
    const auteur = this.editAuteurFormGroup?.value;
    auteur.id = this.auteur.id;
    this.auteurService.updateAuteur(auteur.id, auteur).subscribe({
      next : (data) => {
        alert("Auteur updated successfully");
        this.router.navigateByUrl("/auteur")
      },
      error : (err) => {
        console.log(err);
      }
    });
  }
}
