import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './jsontreegriddata';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { Column, PageSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ PageService ]
})
export class AppComponent implements OnInit {
  public data!: Object[];
  public pageSettings!: PageSettingsModel;
  public sortSettings!: SortSettingsModel;

  public dropData!: Object[];
  public fields!: Object;
  public filterDurationTemplate!: Object;
  public filterPriorityTemplate!: Object;
  @ViewChild('treegrid')
  public treeGridObj!: TreeGridComponent;

  ngOnInit(): void {
    this.data = sampleData;
    this.pageSettings = { pageSize: 10 };
    this.sortSettings = {
      columns: [
        {
          field: 'taskID',
          direction: 'Ascending'
        }
      ]
    };

    this.dropData = [
      { id: 'Parent', mode: 'Parent' },
      { id: 'Child', mode: 'Child' },
      { id: 'Both', mode: 'Both' },
      { id: 'None', mode: 'None' },
    ];
    this.fields = { text: 'mode', value: 'id' };

    this.getFilterDuration();
    this.getFilterPriority();
  }

  onChange(e: ChangeEventArgs): void {
    let mode: any = <string>e.value;
    this.treeGridObj.filterSettings.hierarchyMode = mode;
    this.treeGridObj.clearFiltering();
  }

  getFilterDuration(): void {
    this.filterDurationTemplate = {
      create: (args: { element: Element, column: Column }) => {
        let dd: HTMLInputElement = document.createElement('input');
        dd.id = 'duration';
        return dd;
      },
      write: (args: { element: Element, column: Column }) => {
        let dataSource: string[] = ['All', '0', '1', '3', '4', '5', '6', '8', '9'];
        const dropDownFilter = new DropDownList({
          dataSource: dataSource,
          value: 'All',
          change: (e: ChangeEventArgs) => {
            let valuenum: any = +e.value;
            let id: any = <string>dropDownFilter.element.id;
            let value: any = <string>e.value;
            if ( value !== 'All') {
                this.treeGridObj.filterByColumn( id, 'equal', valuenum );
            } else {
                this.treeGridObj.removeFilteredColsByField(id);
            }
          }
        });
        dropDownFilter.appendTo('#duration');
      }
    }
  }

  getFilterPriority(): void {
    this.filterPriorityTemplate = {
      create: (args: { element: Element, column: Column }) => {
        let dd: HTMLInputElement = document.createElement('input');
        dd.id = 'priority';
        return dd;
      },
      write: (args: { element: Element, column: Column }) => {
        let dataSource: string[] = ['All', 'Low', 'Normal', 'High', 'Critical'];
        const dropDownFilter = new DropDownList({
          dataSource: dataSource,
          value: 'All',
          change: (e: ChangeEventArgs) => {
            let valuenum: any = e.value;
            let id: any = <string>dropDownFilter.element.id;
            let value: any = <string>e.value;
            if ( value !== 'All') {
                this.treeGridObj.filterByColumn( id, 'equal', valuenum );
            } else {
                this.treeGridObj.removeFilteredColsByField(id);
            }
          }
        });
        dropDownFilter.appendTo('#priority');
      }
    }
  }
}
