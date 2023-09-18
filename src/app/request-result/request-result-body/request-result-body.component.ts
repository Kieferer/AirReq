import {Component, OnInit} from '@angular/core';
import { RequestService } from "../../request.service";

@Component({
  selector: 'app-request-result-body',
  templateUrl: './request-result-body.component.html',
  styleUrls: ['./request-result-body.component.css']
})
export class RequestResultBodyComponent implements OnInit{
  receivedResult: any;
  constructor(private requestService: RequestService) {}
  ngOnInit() {
    this.requestService.result$.subscribe(data => {
      this.receivedResult = data.result;
    });
  }
}
