import * as fromCustomerActions from '../actions/customer.action';
import { Customer } from '../../models/customer.model';
import { logging } from 'protractor';
import { UPDATE_CUSTOMER_FAIL } from '../actions/customer.action';

export interface CustomerState {
  data: Customer[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: CustomerState = {
  data: [],
  loaded: false,
  loading: false,
  error: ''
};

export function reducer(state = initialState, action: fromCustomerActions.CustomerActions) {

  switch (action.type) {
    case fromCustomerActions.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromCustomerActions.LOAD_CUSTOMERS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case fromCustomerActions.LOAD_CUSTOMERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case fromCustomerActions.UPDATE_CUSTOMER_SUCCESS: {
      const data = state.data.map(customer => {
        if (customer.id === action.payload.id) {
          return action.payload;
        } else {
          return customer;
        }
      });

      return {
        ...state,
        data,
        loaded: true,
        loading: false
      };
    }

    case fromCustomerActions.UPDATE_CUSTOMER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}


export const getCustomers = (state: CustomerState) => state.data;
export const getCustomerLoaded = (state: CustomerState) => state.loaded;
export const getCustomerLoading = (state: CustomerState) => state.loading;
export const getCustomerError = (state: CustomerState) => state.error;
