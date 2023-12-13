import { Component, Input } from '@angular/core';
import { Broker } from '../../../features/models/broker';
import { BrokerState } from '../../../features/models/brokerState';
import { Store } from '@ngrx/store';
import { brokerActions } from '../../../features/store/broker.action';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent {
  @Input() broker!: Broker;
  @Input() isMonthly!: boolean | null;
  @Input() selectedBroker?: Broker;

  isChecked = false;

  constructor(private store: Store<{ broker: BrokerState }>) {}

  handleAddBroker(isChecked: boolean, broker: Broker): void {
    if (isChecked) this.store.dispatch(brokerActions.addBroker({ broker }));
    else this.store.dispatch(brokerActions.removeBroker({ broker }));
  }
}
