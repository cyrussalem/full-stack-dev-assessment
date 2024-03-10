import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../../services/read-data.service';
import { TableData } from '../../model/table-data.model';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrl: './view-table.component.scss'
})
export class ViewTableComponent implements OnInit{
  TableValues: TableData[] = [];

 constructor(private readDataService: ReadDataService) {}

 //used to read data from the localhost server
  ngOnInit(): void {
    setInterval(() => {
      this.readDataService.getTableData().subscribe((data: any) =>  {
        this.TableValues = data;
      });
    }, 1000);
  }
}