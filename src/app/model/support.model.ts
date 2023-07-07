export interface SupportModel {
  id: number;
  title: string;
  typeSupport: TypeSupport;
  linkDirectory: string;
  documentContent: string; // Ou tout autre type approprié pour représenter les données binaires (par exemple, ArrayBuffer)
  videoContent: string; // Ou tout autre type approprié pour représenter les données binaires (par exemple, ArrayBuffer)
  auteur: string;
}

export enum TypeSupport {
  DOCUMENTS = "DOCUMENTS",
  LINKS = "LINKS",
  VIDEO = "VIDEO"
}

