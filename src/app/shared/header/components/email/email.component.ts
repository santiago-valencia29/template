import { Component, Input, OnInit } from '@angular/core'
import { Email } from 'src/app/models'

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input()
  emails!: Email[]
  public colors: string[] = ['yellow', 'green', 'blue', 'ping']
  constructor() {}

  ngOnInit() {}
}
