import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.css']
})
export class WineryComponent implements OnInit {
  @Output() serverCreated = new EventEmitter <{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter <{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverCreated.emit(
      {serverName: this.newServerName,
        serverContent: this.newServerContent});

}
  onAddBlueprint() {
    this.blueprintCreated.emit(
      {serverName: this.newServerName,
        serverContent: this.newServerContent});
}}
