import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Broker } from '../models/broker';

export const brokerActions = createActionGroup({
  source: 'Broker',
  events: {
    'Get Brokers Request': emptyProps(),
    'Get Brokers Success': props<{ brokers: Broker[] }>(),
    'Get Brokers Failure': props<{ error: string }>(),
    'Set Brokers Year Price': props<{ isMonthly: boolean }>(),
    'Add Broker': props<{ broker: Broker }>(),
    'Remove Broker': props<{ broker: Broker }>(),
  },
});
