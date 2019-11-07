import * as fromCustomerActions from '../actions/customer.action';
import { Customer } from '../../models/customer.model';


export interface CustomerState {
  data: Customer[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: CustomerState = {
  data: [
    {
      name: 'Henry',
      age: 22,
      email: 'henry@email.com',
      id: 1
    },
    {
      id: 3,
      name: 'Carmen',
      age: 30,
      email: 'carmen@email.com'
    },
    {
      id: 4,
      name: 'Miguel',
      age: 28,
      email: 'miguel@email.com'
    },
    {
      name: 'Esteban',
      age: 40,
      email: 'esteban@email.com',
      id: 1572300257635
    },
    {
      name: 'Mario',
      age: 25,
      email: 'mario@email.com',
      id: 1572371378938
    }
  ],
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
