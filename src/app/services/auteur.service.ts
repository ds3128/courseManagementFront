import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Auteur} from "../model/auteur.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class AuteurService {

  constructor(private http : HttpClient) {
  }

  public getAuteur() : Observable<Auteur[]> {
    return this.http.get<Auteur[]>(environment.backendHost+"/auteur");
  }

  public searchAuteur(keyword : string) : Observable<Auteur[]> {
    return this.http.get<Auteur[]>(environment.backendHost+"/auteur/search?keyword="+keyword);
  }

  public saveAuteur(auteur : Auteur) : Observable<Auteur> {
    return this.http.post<Auteur>(environment.backendHost+"/auteur/newAuteur", auteur);
  }

  public updateAuteur(id: number, auteur: Auteur): Observable<Auteur> {
    console.log(id, auteur)
    return this.http.put<Auteur>(environment.backendHost +"/auteur/"+id, auteur);
  }

  public searchAuteurById(id : number) : Observable<Auteur> {
    return this.http.get<Auteur>(environment.backendHost +"/auteur/"+id)
  }

  public deleteAuteur(id : number) {
    return this.http.delete(environment.backendHost+"/auteur/"+id);
  }

}
