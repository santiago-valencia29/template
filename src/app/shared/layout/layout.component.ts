import { MediaMatcher } from '@angular/cdk/layout'
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav')
  sidenav!: MatSidenav
  public isShowSidebar: boolean
  public mobileQuery: MediaQueryList
  private mobileQueryListener: () => void

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)')
    this.mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(this.mobileQueryListener)

    this.isShowSidebar = !this.mobileQuery.matches
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener)

    this.sidenav.close()
  }

  ngOnInit() {}
}
