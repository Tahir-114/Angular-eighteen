import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signForm!: FormGroup;
  forbiddenuserName = ['Anna', 'Lukas'];

  ngOnInit(): void {
    this.signForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(
          null, 
          [Validators.required, this.forbiddenNames.bind(this)]
        ),
        'email': new FormControl(
          null, 
          [Validators.required, Validators.email], 
          this.forbiddenEmails.bind(this) // Ensure 'this' context is bound
        ),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signForm.setValue({
      'userData':{
        'username': 'Max',
        'email': 'max@gmail.com'
      },
      'gender': 'male',
      'hobbies': []

    });
    this.signForm.patchValue({
      'userData':{
        'username' : 'Anna'
      }
    })
  }

  get hobbies(): FormArray {
    return this.signForm.get('hobbies') as FormArray;
  }

  onSubmit() {
    console.log(this.signForm);
    this.signForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    this.hobbies.push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenuserName.indexOf(control.value) !== -1) {
      return { 'Name is Forbidden': true };
    }
    return null;
  }

  forbiddenEmails(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise<ValidationErrors | null>((resolve) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
