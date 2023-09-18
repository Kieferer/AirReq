import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios from 'axios';
import {RequestService} from "../request.service";

@Component({
  selector: 'app-request-builder',
  templateUrl: './request-builder.component.html',
  styleUrls: ['./request-builder.component.css']
})
export class RequestBuilderComponent {
  constructor(private requestService: RequestService) {}
  disableSelect = new FormControl(false);
  selectedHttpMethod: string = 'GET';
  url: string = '';
  sendResult(content: string) {
    this.requestService.setResult({ result: content });
  }
  async sendRequest() {
    try {
      const response= await axios({
        method: this.selectedHttpMethod ? this.selectedHttpMethod : 'GET',
        url: this.url
      })
      this.sendResult(response.data);
    } catch (error) {
      this.sendResult(error + "");
    }
  }
}
