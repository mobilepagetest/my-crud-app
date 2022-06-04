import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WebScanResult } from "./web-scan-result";
import { MyURL} from "./my-url";


@Injectable({
  providedIn: 'root'
})
export class PagespeedService {

  private apiURL = "http://localhost:8080"

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  scan(): Observable<WebScanResult> {
    let myUrl: MyURL = { url:"http://kunstcontor.de" }; // OK
    return this.httpClient.post<WebScanResult>(this.apiURL + '/scan?simulate=true&saveResult=false', JSON.stringify(myUrl), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
