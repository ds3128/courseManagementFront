import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SupportModel} from "../model/support.model";


@Injectable({
  providedIn: 'root'
})

export class SupportService {
  backEndHost = "http://localhost:8088";
  constructor(private http : HttpClient) { }

  public getSupport() : Observable<SupportModel[]> {
    return this.http.get<SupportModel[]>(this.backEndHost+"/support");
  }

  public searchSupport(keyword : string) : Observable<SupportModel[]> {
    return this.http.get<SupportModel[]>(this.backEndHost+"/support/search?keyword="+keyword);
  }

  public saveSupport(support : SupportModel) : Observable<SupportModel> {
    return this.http.post<SupportModel>(this.backEndHost+"/support/newSupport", support);
  }

  public updateSupport(id: number, support: SupportModel): Observable<SupportModel> {
    return this.http.put<SupportModel>(`${this.backEndHost}/support/${id}`, support);
  }

  public deleteSupport(id : number) {
    return this.http.delete(this.backEndHost+"/support/"+id);
  }
}
