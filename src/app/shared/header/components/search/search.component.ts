import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public isShowInput = false

  public showInput(): void {
    this.isShowInput = true
  }

  constructor() {}

  ngOnInit() {}
}
