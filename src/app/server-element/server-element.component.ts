import {
  Component,
  Input,
  OnChanges,
  DoCheck,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild, ViewChild, ElementRef
} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Use can switch Emulated to None or Native
})
// for all hooks, implementing is a must for it to work.
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string };
  @ViewChild('heading') header: ElementRef;
  @Input() name: string;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('constructor called!');
  }

  // explain hooks
  ngOnChanges(changes:SimpleChanges) {
    console.log('ngOnChange called!');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph :' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked !');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
