import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { EmployeesCardsComponent } from '../employees-cards/employees-cards.component';
import { EmployeesDetailesComponent } from '../employees-detailes/employees-detailes.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { TampletRefVariableComponent } from '../tamplet-ref-variable/tamplet-ref-variable.component';
import { NgSwitchComponent } from '../ng-switch/ng-switch.component';
import { DropDownListComponent } from '../drop-down-list/drop-down-list.component';
import { QueryStringRoutingComponent } from '../query-string-routing/query-string-routing.component';
import { ProductCardsComponent } from '../product-cards/product-cards.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';
import { HeadphoneComponent } from '../headphone/headphone.component';
import { PipeExampleComponent } from '../pipe-example/pipe-example.component';
import { TemplateDrivenFormComponent } from '../template-driven-form/template-driven-form.component';
import { BookListComponent } from '../book-list/book-list.component';
import { NgClassExampleComponent } from '../ng-class-example/ng-class-example.component';
import { GetBooksComponent } from '../BookApi/get-books/get-books.component';
import { SetBooksComponent } from '../BookApi/set-books/set-books.component';
import { EditBookComponent } from '../BookApi/edit-book/edit-book.component';
import { PrimeNgBooksComponent } from '../PrimengKendoUI/prime-ng-books/prime-ng-books.component';
import { KendoUIBooksComponent } from '../PrimengKendoUI/kendo-uibooks/kendo-uibooks.component';

const routes: Routes = [
  {
    'path': '',
    'component': HomeComponent
  },
  {
    'path': 'user/:id',
    'component': UserComponent
  },
  {
    'path': 'user',
    'component': UserComponent
  },
  {
    'path': 'post',
    'component': PostComponent
  },
  {
    'path': 'emplist',
    'component': EmployeesDetailesComponent
  },
  {
    'path': 'empcard',
    'component': EmployeesCardsComponent
  },
  {
    'path': 'radio',
    'component': RadioButtonComponent
  },
  {
    'path': 'templetrefvariable',
    'component': TampletRefVariableComponent
  },
  {
    'path': 'switchcase',
    'component': NgSwitchComponent
  },
  {
    'path': 'dropdown',
    'component': DropDownListComponent
  },
  {
    'path': 'queryString',
    'component': QueryStringRoutingComponent
  },
  {
    'path': 'pipeExample',
    'component': PipeExampleComponent
  },
  {
    'path': 'templateDrivenForm',
    'component': TemplateDrivenFormComponent
  },
  {
    'path': 'bookList',
    'component': BookListComponent
  },
  {
    'path': 'ngclassExample',
    'component':  NgClassExampleComponent
  },
  {
    'path': 'GetBooks',
    'component':  GetBooksComponent
  },
  {
    'path': 'setBook',
    'component': SetBooksComponent
  },
  {
    'path': 'editBook/:id',
    'component': EditBookComponent
  },
  {
    'path' : 'primeNgBooks',
    'component' : PrimeNgBooksComponent
  },
  {
    'path' : 'KendoUIBooks',
    'component' : KendoUIBooksComponent
  },
  {'path' : 'products' , children : [
        {'path' : '' , 'component' : ProductCardsComponent},
        {'path' : 'laptop' , 'component' : LaptopComponent},
        {'path' : 'mobile' , 'component' : MobileComponent},
        {'path' : 'headphone' , 'component' : HeadphoneComponent}
      ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
