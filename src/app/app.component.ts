import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { Customer } from './models/customer.model';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  customers: Customer[];
  constructor(
    private store: Store<fromStore.AppState>,
    private customerService: CustomerService) { }

  ngOnInit() {
    /* this.store.select('customers').subscribe(resCustomer => {
      this.customers = resCustomer.data;
    }); */

    this.customerService.getCustomers()
      .subscribe(resCustomer => this.customers = resCustomer);

  }

  deleteClient(id) {

  }

  editClient(customer) {

  }
}
