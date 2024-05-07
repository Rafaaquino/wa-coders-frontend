export interface IQuote {
  step1: Step1;
  step2: Step2;
  step3: Step3;
  step4: Step4;
  step5: Step5;
  step6: Step6;
}

export interface Step1 {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  company: string;
}

export interface Step2 {
  serviceType: string;
  objectiveSoftware: string;
  platform: string;
  deadline: string;
}

export interface Step3 {
  projectScope: string;
  features: string;
  integrations: string;
}

export interface Step4 {
  prefferTecnology: string[];
}

export interface Step5 {
  prefferDesing: string;
  security: string;
}

export interface Step6 {
  budget: string;
  additionalNotes: string;
}
