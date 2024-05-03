import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICountry } from 'src/app/models/country.interface';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
/**
 * Team component
 */
export class QuoteComponent implements OnInit {
  quoteForm: FormGroup;
  currentStep: number = 2;
  selectedCountry: any;
  countries: ICountry[];
  value: Date;
  plataforms = [
    { name: 'web', code: 'web' },
    { name: 'mobile', code: 'mobile' },
    { name: 'both', code: 'both' },
  ];

  servicesType = [
    {
      name: 'Custom Software Development',
      code: 'Custom Software Development',
    },
    { name: 'Website', code: 'Website' },
    { name: 'Mobile App Development', code: 'Mobile App Development' },
    {
      name: 'Software Development Outsourcing',
      code: 'Software Development Outsourcing',
    },
    { name: 'UX/UI Design Branding', code: 'integrations and improvements' },
    {
      name: 'integrations and improvements',
      code: 'integrations and improvements',
    },
  ];

  prefferTecnology = [
    { name: 'Angular', code: 'angular' },
    { name: 'React', code: 'react' },
    { name: 'Node', code: 'node' },
    { name: 'Java', code: 'java' },
    { name: '.NET', code: 'dotnet' },
    { name: 'React Native', code: 'react-native' },
    { name: 'Flutter', code: 'flutter' },
    { name: 'Swift', code: 'swift' },
    { name: 'Android', code: 'android' },
    { name: 'MongoDB', code: 'mongodb' },
    { name: 'MySQL', code: 'mysql' },
    { name: 'Docker', code: 'docker' },
    { name: 'Google Cloud', code: 'google-cloud' },
    { name: 'AWS', code: 'aws' },
    { name: 'Azure', code: 'azure' },
    { name: 'Wordpress', code: 'wordpress' },
    { name: "I don't know yet", code: 'dont-know' },
  ];

  constructor(private fb: FormBuilder) {
    this.countries = [
      { name: 'United States', code: 'US' },
      { name: 'Canada', code: 'CA' },
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'England', code: 'UK' },
    ];
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    const step4Controls = {};
    this.prefferTecnology.forEach((technology) => {
      step4Controls[technology.code] = [false]; // Initially unchecked
    });

    this.quoteForm = this.fb.group({
      step1: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        country: ['', Validators.required],
        city: ['', Validators.required],
        company: ['', Validators.required],
      }),
      step2: this.fb.group({
        serviceType: ['', Validators.required],
        objectiveSoftware: ['', Validators.required],
        platform: ['', Validators.required],
        deadline: ['', Validators.required],
      }),
      step3: this.fb.group({
        projectScope: ['', Validators.required],
        features: [''],
        integrations: [''],
      }),
      step4: this.fb.group(step4Controls),
      step5: this.fb.group({
        prefferDesing: [''],
        security: [''],
      }),
      step6: this.fb.group({
        budget: ['', Validators.required],
        additionalNotes: [''],
      }),
    });
  }

  nextStep() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  getProgress(): string {
    return ((this.currentStep - 1) / 5) * 100 + '%';
  }

  submitForm() {
    if (this.quoteForm.valid) {
      this.removeFalseValues(this.quoteForm.value);
      const formValues = {
        ...this.quoteForm.value.step1,
        ...this.quoteForm.value.step2,
        ...this.quoteForm.value.step3,
        ...this.quoteForm.value.step4,
        ...this.quoteForm.value.step5,
        ...this.quoteForm.value.step6,
      };

      console.log(this.quoteForm.value);
    } else {
      this.markFormGroupTouched(this.quoteForm);
    }
  }

  removeFalseValues(form: any): void {
    if (form && form.step4) {
      Object.keys(form.step4).forEach((key) => {
        if (!form.step4[key]) {
          delete form.step4[key];
        }
      });
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}
