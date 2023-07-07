import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseModel} from "../model/course.model";


@Injectable({
  providedIn: 'root'
})

export class CoursService {
  backEndHost = "http://localhost:8088";
  constructor(private http : HttpClient) { }

  public getCourse() : Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(this.backEndHost+"/course/allCourse");
  }

  public searchCourse(keyword : string) : Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(this.backEndHost+"/course/search?keyword="+keyword);
  }

  public saveCourse(course : CourseModel) : Observable<CourseModel> {
    return this.http.post<CourseModel>(this.backEndHost+"/course/newCourse", course);
  }

  public updateCourse(course: CourseModel, id: number): Observable<CourseModel> {
    return this.http.put<CourseModel>(`${this.backEndHost}/course/updateCourse/${id}`, course);
  }

  public deleteCourse(id : number) {
    return this.http.delete(this.backEndHost+"/"+id);
  }
}
