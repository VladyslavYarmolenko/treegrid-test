import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ToolbarModule, ToolbarAllModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonAllModule , CheckBoxAllModule} from '@syncfusion/ej2-angular-buttons';
import { DatePickerModule, DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ContextMenuService, FreezeService, TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    TreeGridAllModule,
    SparklineAllModule,
    DialogModule,
    DropDownListAllModule,
    MultiSelectAllModule,
    ToolbarModule,
    ButtonAllModule,
    CheckBoxAllModule,
    DatePickerModule,
    NumericTextBoxAllModule
  ],
  providers: [
    FreezeService,
    ContextMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
