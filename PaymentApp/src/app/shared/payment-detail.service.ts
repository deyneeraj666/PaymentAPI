import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44308/api/PaymentDetails'
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  postPaymentDetail() {
    var headerobj = {headers:new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post(this.baseURL, this.formData,headerobj);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }


}
