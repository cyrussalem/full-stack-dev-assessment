import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../../services/read-data.service';
import { TableData } from '../../model/table-data.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrl: './view-table.component.scss'
})
export class ViewTableComponent implements OnInit{
  TableValues: TableData[] = [];
  isError: boolean = false;

 constructor(private readDataService: ReadDataService) {}

 //used to read data from the localhost server
  ngOnInit(): void {
    setInterval(() => {
      this.readDataService.getTableData().subscribe((data: TableData[]) =>  {
        if(data) {
          this.TableValues = data;
          this.isError = false
        }
      }, (error: HttpErrorResponse) => {
        this.isError = true
      });
    }, 1000);
  }
}