import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { brokerActions } from './broker.action';
import { BrokerService } from '../services/broker.service';
import { catchError, map, of, switchMap } from 'rxjs';

export const getBrokers$ = createEffect(
  (actions$ = inject(Actions), brokerService = inject(BrokerService)) => {
    return actions$.pipe(
      ofType(brokerActions.getBrokersRequest),
      switchMap(() =>
        brokerService.getBrokers().pipe(
          map((brokers) => brokerActions.getBrokersSuccess({ brokers })),
          catchError((error) => of(brokerActions.getBrokersFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);

// export const setBrokersYearPrice$ = createEffect(
//   (actions$ = inject(Actions)) => {
//     return actions$.pipe(
//       ofType(brokerActions.setBrokersYearPrice),
//       switchMap(() =>
//         of(false).pipe(
//           map((isMonthly) => brokerActions.setBrokersYearPrice({ isMonthly }))
//         )
//       )
//     );
//   },
//   { functional: true }
// );
