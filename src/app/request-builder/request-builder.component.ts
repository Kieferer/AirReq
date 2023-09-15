import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-request-builder',
  templateUrl: './request-builder.component.html',
  styleUrls: ['./request-builder.component.css']
})
export class RequestBuilderComponent {
  disableSelect = new FormControl(false);
  selectedHttpMethod: string = 'GET';
  url: string = '';

  async sendRequest() {
    const response= await axios({
      method: this.selectedHttpMethod ? this.selectedHttpMethod : 'GET',
      url: this.url
    })
    console.log(response)
  }
}
