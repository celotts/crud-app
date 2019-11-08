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
    private customerService: CustomerService) {
  }

  ngOnInit() {
    this.store.select(fromStore.getCustomers).subscribe(resCustomer => this.customers = resCustomer);

    this.store.select(fromStore.getCustomerById(3)).subscribe(resCustomer => {
      console.log(resCustomer);
    });


    this.store.dispatch(new fromStore.LoadCustomer());
  }

  deleteClient(id) {

  }

  editClient(customer) {

  }
}
