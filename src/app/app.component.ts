import { Component, OnInit } from '@angular/core';
import { sampleData } from './jsontreegriddata';
import { TreeGridComponent, PageService} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ PageService ]
})
export class AppComponent implements OnInit {
  public data: Object[] = [];

  ngOnInit(): void {
    this.data = sampleData;
  }
}
