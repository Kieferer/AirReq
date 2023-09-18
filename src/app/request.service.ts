import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private resultSubject = new BehaviorSubject<any>(null);
  public result$ = this.resultSubject.asObservable();

  setResult(result: any) {
    this.resultSubject.next(result);
  }
}
