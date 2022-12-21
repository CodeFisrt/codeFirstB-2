import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() tabsArry: string[]= [];
  activeTab: number = 2;
  constructor() { }

  ngOnInit(): void {
  }
  setTab(tab:number){
    this.activeTab = tab;
  }

}
