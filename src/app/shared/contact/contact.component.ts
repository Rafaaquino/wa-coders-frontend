import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from 'src/app/services/send-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

/**
 * Contact-component
 */
export class ContactComponent implements OnInit {
  // Form
  formEmail: FormGroup;
  submitted = false;
  msgs: any[] = [];
  showMessage: boolean;

  constructor(
    private _sendMailService: SendEmailService,
    public fb: FormBuilder
  ) {
    this.formEmail = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Validation
    this.showMessage = false;
  }
  ValidateFrom() {
    var name = this.formEmail.get('name').value;
    var email = this.formEmail.get('email').value;
    var subject = this.formEmail.get('subject').value;
    var text = this.formEmail.get('text').value;

    if (name == '' || name == null) {
      document.getElementById('error-msg')!.innerHTML =
        "<div class='alert alert-warning error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>*Please enter a name*</div>";
      return false;
    }
    if (email == '' || email == null) {
      document.getElementById('error-msg')!.innerHTML =
        "<div class='alert alert-warning error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>*Please enter a email*</div>";
      return false;
    }
    if (subject == '' || subject == null) {
      document.getElementById('error-msg')!.innerHTML =
        "<div class='alert alert-warning error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>*Please enter a subject*</div>";
      return false;
    }
    if (text == '' || text == null) {
      document.getElementById('error-msg')!.innerHTML =
        "<div class='alert alert-warning error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>*Please enter a message*</div>";
      return false;
    }
    return true;
  }

  sendMsg() {
    if (this.ValidateFrom()) {
      this._sendMailService.sendMail(this.formEmail.value).subscribe({
        next: this.onSubmitSuccess.bind(this),
        error: this.onSubmitError.bind(this),
      });
    }
  }

  onSubmitSuccess(response) {
    //document.getElementById('error-msg')!.innerHTML =
    // "<div class='alert alert-success error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>Email successfully sent</div>";
    this.show();
    this.formEmail.reset();
  }

  onSubmitError(error: any) {
    console.log(error);
  }

  show() {
    this.showMessage = true;
    this.msgs.push({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }

  hide() {
    this.showMessage = false;
    this.msgs = [];
  }
}
