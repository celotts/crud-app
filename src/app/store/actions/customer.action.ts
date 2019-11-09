import { Action } from '@ngrx/store';
import { Customer } from '../../models/customer.model';

export const LOAD_CUSTOMERS = '[Customer] Load customers';
export const LOAD_CUSTOMERS_SUCCESS = '[Customer] Load customers success';

export const LOAD_CUSTOMERS_FAIL = '[Customer] Load customers fail';

// Update Customer
export const UPDATE_CUSTOMER = '[Customer] Update customer';
export const UPDATE_CUSTOMER_SUCCESS = '[Customer] Update customer success';
export const UPDATE_CUSTOMER_FAIL = '[Customer] Update customer fail';

// ADD Customer
export const ADD_CUSTOMER = '[Customer] Add customer';
export const ADD_CUSTOMER_SUCCESS = '[Customer] Add customer success';
export const ADD_CUSTOMER_FAIL = '[Customer] Add customer fail';


export class LoadCustomer implements Action {
  readonly type = LOAD_CUSTOMERS;
}

export class LoadCustomerSuccess implements Action {
  readonly type = LOAD_CUSTOMERS_SUCCESS;

  constructor(public payload: Customer[]) { }
}

export class LoadCustomerFail implements Action {
  readonly type = LOAD_CUSTOMERS_FAIL;

  constructor(public payload: any) { }

}

export class AddCustomer implements Action {
  readonly type = ADD_CUSTOMER;

  constructor(public payload: Customer) { }
}

export class UpdateCustomer implements Action {
  readonly type = UPDATE_CUSTOMER;

  constructor(public payload: Customer) { }
}

export class UpdateCustomerSuccess implements Action {
  readonly type = UPDATE_CUSTOMER_SUCCESS;

  constructor(public payload: any) { }
}

export class UpdateCustomerFail implements Action {
  readonly type = UPDATE_CUSTOMER_FAIL;

  constructor(public payload: any) { }
}


export type CustomerActions =
  LoadCustomer |
  LoadCustomerSuccess |
  LoadCustomerFail |
  UpdateCustomer |
  UpdateCustomerSuccess |
  UpdateCustomerFail;
