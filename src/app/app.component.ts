import { Component, OnInit } from '@angular/core';
import { sampleData } from './jsontreegriddata';
import { PageService, ContextMenuService, EditSettingsModel, EditService } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    PageService,
    ContextMenuService,
    EditService
  ]
})
export class AppComponent implements OnInit {
  public data: Object[] = [];
  public contextMenuItems: string[] = [];
  public editing: EditSettingsModel | undefined;

  ngOnInit(): void {
    this.data = sampleData;
    this.contextMenuItems = [
      'AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
      'Edit', 'Delete', 'Save', 'Cancel',
      'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
      'LastPage', 'NextPage'
    ];
    this.editing = { allowDeleting: true, allowEditing: true, mode: 'Row' };
  }
}
