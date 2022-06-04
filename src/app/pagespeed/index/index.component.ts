import { Component, OnInit } from '@angular/core';

import { WebScanResult } from "../web-scan-result";
import {PagespeedService} from "../pagespeed.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  webScanResult: WebScanResult | undefined;

  constructor( public pagespeedService : PagespeedService) { }

  ngOnInit(): void {
    this.pagespeedService.scan().subscribe((data: WebScanResult ) => {
      this.webScanResult = data;
      console.log(this.webScanResult);
      })
  }

}
