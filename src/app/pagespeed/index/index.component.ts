import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { WebScanResult } from "../web-scan-result";
import {PagespeedService} from "../pagespeed.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'Angular Form Validation Tutorial';
  angForm: FormGroup | undefined;
  webScanResult: WebScanResult | undefined;

  constructor( public pagespeedService : PagespeedService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.pagespeedService.scan().subscribe((data: WebScanResult ) => {
      this.webScanResult = data;
      console.log(this.webScanResult);
      })
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

}
