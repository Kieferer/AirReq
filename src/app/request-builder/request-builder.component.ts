import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-request-builder',
  templateUrl: './request-builder.component.html',
  styleUrls: ['./request-builder.component.css']
})
export class RequestBuilderComponent {
  disableSelect = new FormControl(false);
}
