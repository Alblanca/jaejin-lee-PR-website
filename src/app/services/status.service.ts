import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusUrl = '/api/status';

  constructor(private http: HttpClient) { }

  // Get the status
  getStatus(): Promise<void | any> {
    // @ts-ignore
    return this.http.get(this.statusUrl, {observe: "response"})
      .subscribe(response => {
        console.log(response.status);
      })
  }

  // Error handling
  private error (error: any) {
    let message = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(message);
  }
}
