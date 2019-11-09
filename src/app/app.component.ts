import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { Customer } from './models/customer.model';
import { CustomerService } from './services/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  usuarioInput: any;
  customers: Customer[];
  display = 'none';
  isEditModeEnabled = false;
  persona: Customer = {};

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

  addCustomer(myForm: NgForm) {
    const userId = new Date().getTime();
    const newCustomer = myForm.value;
    newCustomer.id = userId;

    if (newCustomer.name !== null && newCustomer !== undefined) {
      this.store.dispatch(new fromStore.AddCustomer(newCustomer));
      this.closeModal(myForm);
    }
  }

  updateCustomer(myForm: NgForm) {
    this.store.dispatch(new fromStore.UpdateCustomer(myForm.value));
    this.closeModal(myForm);
  }

  editClient(customer) {
    this.isEditModeEnabled = true;
    this.persona = { ...customer };
    this.display = 'block';
    console.log(customer);
  }

  openModalDialog() {
    this.isEditModeEnabled = false;
    this.display = 'block';
  }

  closeModal(myForm: NgForm) {
    this.display = 'none';
  }
}
