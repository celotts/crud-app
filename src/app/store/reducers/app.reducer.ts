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

export function reducer(state = initialState, action) {
  switch (action.type) {
    case fromCustomerActions.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true
      };
    }
    default: {
      return state;
    }
  }
}
