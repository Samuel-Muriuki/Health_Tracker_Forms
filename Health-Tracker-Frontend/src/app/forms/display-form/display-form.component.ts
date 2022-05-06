import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/models/data-form.model';
import { DataFormService } from 'src/app/services/data-form.service';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {
  dataForm?: DataForm[];
  currentDataForm: DataForm = {};
  currentIndex = -1;
  id = '';

  constructor(private dataFormService: DataFormService) { }


  ngOnInit(): void {
    this.retrieveDataForm();
  }
  retrieveDataForm(): void {
    this.dataFormService.getAll()
      .subscribe({
        next: (data) => {
          this.dataForm = data;
          // console.log(data);
        },
        error: (err) => {
          // console.log(err);
        } 
      })
  }
  refreshList(): void {
    this.retrieveDataForm();
    this.currentDataForm = {};
    this.currentIndex = -1;
  }
  setActiveDataForm(dataForm: DataForm, index: number): void {
    this.currentDataForm = dataForm;
    this.currentIndex = index;
  }
}
