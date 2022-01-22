import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';
import { AppStateService } from './app-state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    constructor(
        private readonly observer: BreakpointObserver,
        private readonly appService: AppStateService
    ) {}

    @ViewChild(MatSidenav)
    private sidenav!: MatSidenav;

    public toggleSideNav() {
        this.sidenav.toggle();
        this.appService.changeSideBarState(this.sidenav._animationState);
    }
    public ngAfterViewInit() {
        this.observer
            .observe(['(max-width: 800px)'])
            .pipe(delay(1))
            .subscribe((res) => {
                if (res.matches) {
                    this.sidenav.mode = 'over';
                    this.sidenav.close();
                } else {
                    this.sidenav.mode = 'side';
                    this.sidenav.open();
                }
            });
    }
}
