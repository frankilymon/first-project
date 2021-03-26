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
  OnDestroy
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
  @Input() name: string;
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
