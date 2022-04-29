import { Component, OnInit } from '@angular/core';
import { LabForm } from 'src/app/models/lab-form.model'; 
import { LabFormService } from 'src/app/services/lab-form.service';

@Component({
  selector: 'app-lab-display-forms',
  templateUrl: './lab-display-forms.component.html',
  styleUrls: ['./lab-display-forms.component.css']
})
export class LabDisplayFormsComponent implements OnInit {
  labForm?: LabForm[];
  currentLabForm: LabForm = {};
  currentIndex = -1;
  id = '';
  constructor(private labFormService: LabFormService) { }

  ngOnInit(): void {
    this.retrieveLabForm();
  }
  retrieveLabForm(): void {
    this.labFormService.getAll()
    .subscribe({
      next: (lab) => {
        this.labForm = lab;
        console.log(lab);
      },
      error: (err) => {
        console.log(err);
      } 
    })
  }
  refreshList(): void {
    this.retrieveLabForm();
    this.currentLabForm = {};
    this.currentIndex = -1;
  }
  setActiveLabForm(labForm: LabForm, index: number): void {
    this.currentLabForm = labForm;
    this.currentIndex = index;
  }
}
