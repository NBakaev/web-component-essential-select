import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {EssentialSelectComponent} from 'angular-essential-select';

const EVENT_ESSENTIAL_SELECT_CHANGE = 'ESSENTIAL_SELECT_CHANGE';
const EVENT_ESSENTIAL_SELECT_INIT = 'ESSENTIAL_SELECT_INIT';

@Component({
  selector: 'web-essential-select',
  templateUrl: './web-essential-select.component.html',
  styleUrls: ['./web-essential-select.component.css']
})
export class WebEssentialSelectComponent implements OnInit {

  @ViewChild('es') es: EssentialSelectComponent;

  // @Input() options: any;
  // value: any;

  @Input()
  public options: string[] = [
    'The group of optimal control systems', 'Department for Foreign Economic Affairs',
    'option 1', 'option 2', 'another option', 'somethin else', 'and another one', 'finally last option',
    'hurr durr', 'herp derp', 'hurrrr', 'durrrr', 'derp derp'
  ];

  public value = 'herp derp';

  @Input()
  set select(val) {
    this.es.value = val;
    this.es.ngDoCheck();
  }

  constructor(private readonly element: ElementRef) {
  }

  ngOnInit() {
    this.sentEvent(EVENT_ESSENTIAL_SELECT_INIT, {component: this, element: this.element});
  }

  onChange($event) {
    this.sentEvent(EVENT_ESSENTIAL_SELECT_CHANGE, $event);
  }

  private sentEvent(name: string, data: any) {
    (this.element.nativeElement as Element).dispatchEvent(new CustomEvent(name, { bubbles: true, detail: { newValue: data } }));
  }

}
