import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/models/data-form.model';
import { DataFormService } from 'src/app/services/data-form.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  dataForm: DataForm = {
    id: '',
    first_name: '',
    last_name: '',
    age: '',
    gender: '',
    signs_and_symptoms: '',
    patient_type: '',
    condition: '',
    test: '',
    disease_found: '',
    
  }
  // dataForm = new FormGroup ({
  //   // id: '',
  //   first_name: new FormControl(''),
  //   last_name: new FormControl(''),
  //   age: new FormControl(''),
  //   gender: new FormControl(''),
  //   signs_and_symptoms: new FormControl(''),
  //   patient_type: new FormControl(''),
  //   condition: new FormControl(''),
  //   test: new FormControl(''),
  //   disease_found: new FormControl(''),
  // });
  submitted = false;

  constructor(private dataFormService: DataFormService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    this.dataFormService.getById(this.router.snapshot.params['id']).subscribe((result: any)=>{
      console.log(result)

      // this.dataForm = new 
    });
  };

  updateDataForm(): void {
    const data = {
      id: this.dataForm.id,
      first_name: this.dataForm.first_name,
      last_name: this.dataForm.last_name,
      age: this.dataForm.age,
      gender: this.dataForm.gender,
      signs_and_symptoms: this.dataForm.signs_and_symptoms,
      patient_type: this.dataForm.patient_type,
      condition: this.dataForm.condition,
      test: this.dataForm.test,
      disease_found: this.dataForm.disease_found,
    };
    this.dataFormService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
  // newDataForm(): void {
  //   this.submitted = false;
  //   this.dataForm = {
  //     // id: '',
  //     first_name: '',
  //     last_name: '',
  //     age: '',
  //     gender: '',
  //     signs_and_symptoms: '',
  //     patient_type: '',
  //     condition: '',
  //     test: '',
  //     disease_found: '',
  //   }
  // }
}
