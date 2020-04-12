import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://localhost:3000/products";
  constructor(private httpClient: HttpClient) { }


 



  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      //client side errors
      errorMessage = `Error: ${error.error.message}`;
    }
    else {
      //side side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  public sendGetRequest() {
    //add safe URL encoded_page parameter 
    
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  }


}
