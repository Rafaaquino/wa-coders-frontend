import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
/**
 * Team component
 */
export class QuoteComponent implements OnInit {
  currentStep: number = 1;
  clienteForm: FormGroup;
  projetoForm: FormGroup;
  cotacaoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.projetoForm = this.formBuilder.group({
      descricao: ['', Validators.required],
      tecnologias: ['', Validators.required],
    });

    this.cotacaoForm = this.formBuilder.group({
      valor: ['', Validators.required],
      observacoes: [''],
    });
  }

  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }

  submitForm() {
    if (this.cotacaoForm.valid) {
      console.log(
        'Dados da cotação enviados:',
        this.clienteForm.value,
        this.projetoForm.value,
        this.cotacaoForm.value
      );
    }
  }
}
