import { Component } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})


export class PipeExampleComponent {
  date = new Date();
  msg : string = 'Hello Angular'
}
