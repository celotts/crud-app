import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:3000/usuarios';
  public httOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // tslint:disable-next-line: object-literal-key-quotes
      'Accept': 'application/json, text/plain'
    })
  };
  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<Customer[]>(`${this.apiUrl}`);
  }

  updateCustomer(customer: Customer) {
    return this.http.put(`${this.apiUrl}/${customer.id}`, JSON.stringify(customer), this.httOpt);
  }

  addCustomer(customer: Customer) {
    return this.http.post(`${this.apiUrl}`, JSON.stringify(customer), this.httOpt);
  }
}
