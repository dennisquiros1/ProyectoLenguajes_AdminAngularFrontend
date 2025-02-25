import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommsService {
  private showElementsSubject = new Subject<void>();

  showElements$ = this.showElementsSubject.asObservable();

  triggerShowElementsEvent() {
    this.showElementsSubject.next();
  }
}
