import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICountry } from 'src/app/models/country.interface';
import { SendEmailService } from 'src/app/services/send-email.service';

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
  currentStep: number = 1;
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

  constructor(
    private fb: FormBuilder,
    private _sendEmailService: SendEmailService
  ) {
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
      this._sendEmailService.sendMailQuote(this.quoteForm.value).subscribe({
        next: this.onSubmitQuoteSuccess.bind(this),
        error: this.onSubmitQuoteError.bind(this),
      });

      console.log(this.quoteForm.value);
    } else {
      this.markFormGroupTouched(this.quoteForm);
    }
  }

  onSubmitQuoteSuccess(response) {
    console.log(response);
    this.quoteForm.reset();
    this.currentStep = 1;
  }

  onSubmitQuoteError(error) {
    console.log(error);
  }

  removeFalseValues(form: any): void {
    if (form && form.step4) {
      const prefferTecnologies = {};
      Object.keys(form.step4).forEach((key) => {
        if (!form.step4[key]) {
          delete form.step4[key];
        }
        if (form.step4[key]) {
          prefferTecnologies[key] = key;
        }
      });
      const prefferTecnologys = this.extractTechnologies(prefferTecnologies);
      form['step4'] = { prefferTecnology: prefferTecnologys };
    }
  }

  extractTechnologies(prefferTecnologys: any): string[] {
    const selectedTechnologies: string[] = [];
    Object.keys(prefferTecnologys).forEach((key) => {
      selectedTechnologies.push(key);
    });
    return selectedTechnologies;
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
