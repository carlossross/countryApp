import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``,
})
export class SearchboxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  onValue: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('txtInput')
  txtInput!: ElementRef;

  search() {
    this.onValue.emit(this.txtInput.nativeElement.value);
    this.txtInput.nativeElement.value = '';
  }
}
