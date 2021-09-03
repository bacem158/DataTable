import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

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
  {Annotators : 'Fethi',ActualFile : 'File1.wav' ,TranscriptionTime : '1h 23 min 3 s' ,NumberOfSegmentWithHelp : 44 ,DureeMoyenneDeSegement : '3 min' ,Projects:'Projet 1 / Projet2 '  },
  {Annotators : 'Fethi',ActualFile : 'File1.wav' ,TranscriptionTime : '1h 23 min 3 s' ,NumberOfSegmentWithHelp : 44 ,DureeMoyenneDeSegement : '3 min' ,Projects:'Projet 1 / Projet2 '  },
  {Annotators : 'Fethi',ActualFile : 'File1.wav' ,TranscriptionTime : '1h 23 min 3 s' ,NumberOfSegmentWithHelp : 44 ,DureeMoyenneDeSegement : '3 min' ,Projects:'Projet 1 / Projet2 '  },

]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @ViewChild(MatPaginator) paginator : MatPaginator;
  title = 'table';
  // defining our columns
  displayedColumns: string[] = ['Annotators','Actual File','Transcription Time',
                                'Number of segment with help','Durée moyenne de segement','Projects'];
  // initializing the data
  dataSource = ELEMENT_DATA;
}
