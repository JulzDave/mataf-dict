import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppStateService {
    private sideBarState = new BehaviorSubject<string>('open');
    currentSideBarState$ = this.sideBarState.asObservable()
    constructor() {}
    changeSideBarState(nextSideBarState: string){
      this.sideBarState.next(nextSideBarState)
    }
}
