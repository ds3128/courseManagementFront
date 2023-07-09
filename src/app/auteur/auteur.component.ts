import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuteurService } from '../services/auteur.service';
import { Router } from '@angular/router';
import { Auteur } from '../model/auteur.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit {

  auteur!: Observable<Auteur[]>;
  errorMessage!: string;
  searchFormGroup: FormGroup | undefined;

  constructor(
    private auteurService: AuteurService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: ''
    });
    this.handleSearchAuteur();
  }

  handleSearchAuteur() {
    const keyword = this.searchFormGroup?.value.keyword;
    this.auteur = this.auteurService.searchAuteur(keyword).pipe(
      catchError(err => {
        console.log(err.message)
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteAuteur(a: Auteur) {
    const conf = confirm('Are you sure?');
    if (!conf) return;
    this.auteurService.deleteAuteur(a.id).subscribe({
      next: () => {
        this.auteur = this.auteur.pipe(
          tap(data => {
            const index = data.indexOf(a);
            if (index > -1) {
              data.splice(index, 1);
            }
          })
        );
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleEditAuteur(auteur: Auteur) {
    this.router.navigateByUrl("/edit-auteur/" + auteur.id).then(r  => {

    });
  }
}
