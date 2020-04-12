import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];

  constructor(private dataService: DataService) { }



  ngOnInit(): void {
    this.dataService.sendGetRequest()
      .subscribe((data:any[]) => {
        console.log(data);
        this.products = data;
      })
  }



}
