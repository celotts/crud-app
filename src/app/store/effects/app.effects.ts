import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as fromCustomerActions from '../actions/customer.action';
import { CustomerService } from 'src/app/services/customer.service';
import { Action } from '@ngrx/store';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService) { }

  @Effect()
  // tslint:disable-next-line: max-line-length
  loadCustomers$: Observable<Action> = this.actions$.pipe(
    ofType(fromCustomerActions.LOAD_CUSTOMERS),
    switchMap(() => this.customerService.getCustomers()
      .pipe(
        map(respCustomer => {
          return new fromCustomerActions.LoadCustomerSuccess(respCustomer);
        },
          catchError(error => of(new fromCustomerActions.LoadCustomerFail(error)))
        ),
      )
    )
  );

  // Update Customer
  @Effect()
  updateCustomer$: Observable<Action> = this.actions$.pipe(
    ofType(fromCustomerActions.UPDATE_CUSTOMER),
    map((action: fromCustomerActions.UpdateCustomer) => action.payload),
    switchMap((payload) => this.customerService.updateCustomer(payload)
      .pipe(
        map(resCustomer => new fromCustomerActions.UpdateCustomerSuccess(resCustomer)
        ),
        catchError(error => of(new fromCustomerActions.UpdateCustomerFail(error)))
      ))
  );
}
