import * as fromCustomerActions from '../actions/customer.action';
import { Customer } from '../../models/customer.model';

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
    default: {
      return state;
    }
  }
}


export const getCustomers = (state: CustomerState) => state.data;
export const getCustomerLoaded = (state: CustomerState) => state.loaded;
export const getCustomerLoading = (state: CustomerState) => state.loading;
export const getCustomerError = (state: CustomerState) => state.error;
