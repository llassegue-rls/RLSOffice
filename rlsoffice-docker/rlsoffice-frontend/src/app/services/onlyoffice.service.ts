import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlyofficeService {

  initDocumentEditor(containerId: string, config: any): void {
    new DocsAPI.DocEditor(containerId, config);
  }
}
