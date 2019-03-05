import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrlFeeds = "http://localhost:3000/Ids"; //"https://imoocqa.gugujiankong.com/api/feeds/get";
  private apiUrlGetClubList = "http://localhost:8080/clublist";

  constructor(private http: HttpClient) { }
  /**
   *  从服务器请求球场列表数据
   *
   * @returns {Observable<string[]>}
   * @memberof RestService
   */
  getFeeds(): Observable<string[]> {
    return this.getUrlReturn(this.apiUrlFeeds);
  }

  /**
   *  从服务器请求球场列表数据
   *
   * @returns {Observable<string[]>}
   * @memberof RestService
   */
  getClubList(): Observable<string[]> {
    return this.getUrlReturn(this.apiUrlGetClubList);
  }

  /**
   *
   *  通用获取HTTP请求的数据
   * @private
   * @param {string} url
   * @returns {Observable<string[]>}
   * @memberof RestService
   */
  private getUrlReturn(url: string): Observable<string[]> {
    return this.http.get<string[]>(url)
      .pipe(
        //tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getUrl', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
