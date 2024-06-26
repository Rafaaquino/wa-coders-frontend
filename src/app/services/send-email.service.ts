import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISendMail } from '../models/sendMail.interface';
import { environment } from 'src/environments/environment';
import { IQuote } from '../models/client.interface';

@Injectable({
  providedIn: 'root',
})
export class SendEmailService {
  constructor(private http: HttpClient) {}

  sendMail(email: ISendMail): Observable<ISendMail> {
    return this.http.post<ISendMail>(
      environment.host_api + `/emails/send-email`,
      email
    );
  }

  sendMailQuote(quote: IQuote): Observable<IQuote> {
    return this.http.post<IQuote>(
      environment.host_api + `/emails/send-quotes`,
      quote
    );
  }
}
