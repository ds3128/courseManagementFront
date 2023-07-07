import {SupportModel} from "./support.model";

export interface CourseModel{
  id : number;
  title : string;
  description : string;
  times : string;
  nbCredit : number;
  detailSupport : SupportModel[];
}
