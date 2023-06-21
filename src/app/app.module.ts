import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesDetailesComponent } from './employees-detailes/employees-detailes.component';
import { EmployeesCardsComponent } from './employees-cards/employees-cards.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { TampletRefVariableComponent } from './tamplet-ref-variable/tamplet-ref-variable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { PerfigentSelectComponent } from './perfigent-select/perfigent-select.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component'
import { RouterModule } from '@angular/router';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { QueryStringRoutingComponent } from './query-string-routing/query-string-routing.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { HeadphoneComponent } from './headphone/headphone.component';
import { AdminModule } from './admin/admin.module';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { DemoPipe } from './appPipes/demo.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { GetBooksComponent } from './BookApi/get-books/get-books.component';
import { SetBooksComponent } from './BookApi/set-books/set-books.component';
import { EditBookComponent } from './BookApi/edit-book/edit-book.component';
import { FilterPipePipe } from './BookApi/filter-pipe.pipe';
import {ToastrModule} from 'ngx-toastr';
import { PrimeNgBooksComponent } from './PrimengKendoUI/prime-ng-books/prime-ng-books.component';
import { KendoUIBooksComponent } from './PrimengKendoUI/kendo-uibooks/kendo-uibooks.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { GridModule } from '@progress/kendo-angular-grid'
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ExcelModule } from '@progress/kendo-angular-grid';
import { PDFModule } from '@progress/kendo-angular-grid';
import { SVGIconModule } from '@progress/kendo-angular-icons';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesDetailesComponent,
    EmployeesCardsComponent,
    TwoWayBindingComponent,
    RadioButtonComponent,
    TampletRefVariableComponent,
    NgSwitchComponent,
    DropDownListComponent,
    PerfigentSelectComponent,
    AppNavBarComponent,
    NgClassExampleComponent,
    QueryStringRoutingComponent,
    ProductCardsComponent,
    LaptopComponent,
    MobileComponent,
    HeadphoneComponent,
    PipeExampleComponent,
    DemoPipe,
    TemplateDrivenFormComponent,
    BookListComponent,
    GetBooksComponent,
    SetBooksComponent,
    EditBookComponent,
    FilterPipePipe,
    PrimeNgBooksComponent,
    KendoUIBooksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar : true,
      progressAnimation : 'increasing'
    }),
    TableModule,
    ButtonModule,
    ExcelModule,
    PDFModule,
    SVGIconModule,
    // RouterModule.forRoot([
    //   {'path' : 'emplist' , 'component' : EmployeesDetailesComponent},
    //   {'path' : 'empcard' , 'component' : EmployeesCardsComponent},
    //   {'path' : 'radio' , 'component' : RadioButtonComponent},
    //   {'path' : 'templetrefvariable' , 'component' :  TampletRefVariableComponent},
    //   {'path' : 'switchcase' , 'component' :  NgSwitchComponent},
    //   {'path' : 'dropdown' , 'component' :  DropDownListComponent},
    //   {'path' : 'queryString' , 'component' :  QueryStringRoutingComponent},
    //   {'path' : 'products' , children : [
    //     {'path' : '' , 'component' : ProductCardsComponent},
    //     {'path' : 'laptop' , 'component' : LaptopComponent},
    //     {'path' : 'mobile' , 'component' : MobileComponent},
    //     {'path' : 'headphone' , 'component' : HeadphoneComponent}
    //   ]},

    // ]),
    AdminModule,
    GridModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
