import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { routes } from 'src/app/consts'
import { User } from 'src/app/models'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: User
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>()
  public routes: typeof routes = routes
  public flatlogicEmail: string = 'https://flatlogic.com'

  public signOutEmit(): void {
    this.signOut.emit()
  }
  constructor() {}

  ngOnInit() {}
}
