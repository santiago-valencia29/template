import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Email, User } from 'src/app/shared/models'
import { AuthService, EmailService } from 'src/app/services'
import { routes } from '../../../../consts'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isMenuOpened!: boolean
  @Output() isShowSidebar = new EventEmitter<boolean>()
  public user$: Observable<User>
  public emails$: Observable<Email[]>
  public routers: typeof routes = routes

  constructor(
    private router: Router,
    private userService: AuthService,
    private emailService: EmailService
  ) {
    this.user$ = this.userService.getUser()
    this.emails$ = this.emailService.loadEmails()
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened

    this.isShowSidebar.emit(this.isMenuOpened)
  }

  // public signOut(): void {
  //   this.router.navigate([this.routers.LOGIN])
  // }
}
