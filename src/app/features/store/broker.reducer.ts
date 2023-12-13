import { createFeature, createReducer, on } from '@ngrx/store';
import { brokerActions } from './broker.action';
import { BrokerState } from '../models/brokerState';

const initialState: BrokerState = {
  brokers: [],
  isLoading: false,
  isMonthly: true,
  selectedBrokers: [],
  error: '',
};

const brokerFeature = createFeature({
  name: 'broker',
  reducer: createReducer(
    initialState,
    on(brokerActions.getBrokersRequest, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(brokerActions.getBrokersSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      brokers: action.brokers,
    })),
    on(brokerActions.getBrokersFailure, (state, action) => ({
      ...state,
      error: action.error,
      isLoading: false,
    })),
    on(brokerActions.setBrokersYearPrice, (state, action) => ({
      ...state,
      isMonthly: action.isMonthly,
      isLoading: false,
    })),
    on(brokerActions.addBroker, (state, action) => ({
      ...state,
      selectedBrokers: [...state.selectedBrokers, action.broker],
      isLoading: false,
    })),
    on(brokerActions.removeBroker, (state, action) => ({
      ...state,
      selectedBrokers: [
        ...state.selectedBrokers.filter(
          (broker) => broker.id !== action.broker.id
        ),
      ],
      isLoading: false,
    }))
  ),
});

export const {
  name: brokerFeatureKey,
  reducer: brokerReducer,
  selectBrokers,
  selectIsLoading,
  selectError,
  selectIsMonthly,
  selectSelectedBrokers,
} = brokerFeature;
