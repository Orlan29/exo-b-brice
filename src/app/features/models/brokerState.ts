import { Broker } from './broker';

export interface BrokerState {
  brokers: Broker[] | null | undefined;
  isLoading: boolean;
  isMonthly: boolean;
  selectedBrokers: Broker[];
  error: string;
}
