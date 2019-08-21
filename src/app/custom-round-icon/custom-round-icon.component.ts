import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-round-icon',
  templateUrl: './custom-round-icon.component.html',
  styleUrls: ['./custom-round-icon.component.scss'],
})
export class CustomRoundIconComponent implements OnInit {
  @Input()
  iconType = '';
  
  @Input()
  iconSrc = '';
  
  @Input()
  size = 'icon-sm';
  
  constructor() { }
  ngOnInit() {

  }

}
