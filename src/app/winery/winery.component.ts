import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.css']
})
export class WineryComponent implements OnInit {
  @Output() serverCreated = new EventEmitter <{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter <{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit(
      {serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value});

}
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value});
}}
