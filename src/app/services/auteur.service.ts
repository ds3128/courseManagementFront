import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Auteur} from "../model/auteur.model";


@Injectable({
  providedIn: 'root'
})

export class AuteurService {
  backEndHost = "http://localhost:8088";
  constructor(private http : HttpClient) { }

  public getAuteur() : Observable<Auteur[]> {
    return this.http.get<Auteur[]>(this.backEndHost+"/auteur");
  }

  public searchAuteur(keyword : string) : Observable<Auteur[]> {
    return this.http.get<Auteur[]>(this.backEndHost+"/auteur/search?keyword="+keyword);
  }

  public saveAuteur(auteur : Auteur) : Observable<Auteur> {
    return this.http.post<Auteur>(this.backEndHost+"/auteur/newAuteur", auteur);
  }

  public updateAuteur(id: number, auteur: Auteur): Observable<Auteur> {
    return this.http.put<Auteur>(`${this.backEndHost}/auteur/${id}`, auteur);
  }

  public searchAuteurById(id : number) : Observable<Auteur> {
    return this.http.get<Auteur>(`${this.backEndHost}/auteur/${id}`)
  }

  public deleteAuteur(id : number) {
    return this.http.delete(this.backEndHost+"/auteur/"+id);
  }
}
