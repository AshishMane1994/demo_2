import { Component, OnInit } from '@angular/core';
import{ AbstractControl,FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

form: FormGroup = new FormGroup({
  fullname: new FormControl(''),
  username: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  acceptTerms: new FormControl(false),
});
submitted = false;
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
    
        acceptTerms: [false, Validators.requiredTrue]
      },
    
    );
  }



  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}






  
