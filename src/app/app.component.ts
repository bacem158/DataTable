import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface dataTable{
  Annotators : string;
  ActualFile : string;
  TranscriptionTime : string;
  NumberOfSegmentWithHelp : number;
  DureeMoyenneDeSegement : string;
  Projects : string
}

const ELEMENT_DATA: dataTable[] = [
  {Annotators : 'Fethi',ActualFile : 'File1.wav' ,TranscriptionTime : '1h 23 min 3 s' ,NumberOfSegmentWithHelp : 44 ,DureeMoyenneDeSegement : '3 min' ,Projects:'Projet 1 / Projet2 '  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'table';
  // defining our columns
  displayedColumns: string[] = ['Annotators','Actual File','Transcription Time',
                                'Number of segment with help','Durée moyenne de segement','Projects'];
  // initializing the data
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
