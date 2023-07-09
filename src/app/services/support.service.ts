import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SupportModel} from "../model/support.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class SupportService {
  constructor(private http : HttpClient) { }

  public getSupport() : Observable<SupportModel[]> {
    return this.http.get<SupportModel[]>(environment.backendHost + "/support");
  }

  public searchSupport(keyword : string) : Observable<SupportModel[]> {
    return this.http.get<SupportModel[]>(environment.backendHost + "/support/search?keyword="+keyword);
  }

  public saveSupport(support : SupportModel) : Observable<SupportModel> {
    return this.http.post<SupportModel>(environment.backendHost + "/support/newSupport", support);
  }

  public updateSupport(id: number, support: SupportModel): Observable<SupportModel> {
    return this.http.put<SupportModel>(environment.backendHost + "/support/{id}", support);
  }

  public deleteSupport(id : number) {
    return this.http.delete(environment.backendHost + "/support/"+id);
  }
}
