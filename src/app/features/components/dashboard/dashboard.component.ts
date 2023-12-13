import { Component, OnInit } from '@angular/core';
import { FilterBarComponent } from '@exo-brice/core/components/filter-bar/filter-bar.component';
import { NavigationComponent } from '@exo-brice/core/components/navigation/navigation.component';
import { CardComponent } from '@exo-brice/ui/card/card.component';
import { Store } from '@ngrx/store';
import { BrokerState } from '../../models/brokerState';
import {
  selectBrokers,
  selectIsMonthly,
  selectSelectedBrokers,
} from '../../store/broker.reducer';
import { brokerActions } from '../../store/broker.action';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Broker } from '../../models/broker';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavigationComponent,
    CardComponent,
    FilterBarComponent,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent implements OnInit {
  brokers$!: Observable<Broker[] | null | undefined>;
  isMonthly$!: Observable<boolean>;
  isVisible = true;
  brokerCount$!: Observable<number>;
  selectedBrokers$!: Observable<Broker[]>;

  constructor(private store: Store<{ broker: BrokerState }>) {}

  ngOnInit(): void {
    this.store.dispatch(brokerActions.getBrokersRequest());
    this.brokers$ = this.store.select(selectBrokers);
    this.selectedBrokers$ = this.store.select(selectSelectedBrokers);

    this.brokerCount$ = this.store
      .select(selectBrokers)
      .pipe(map((brokers) => brokers!.length));

    this.isMonthly$ = this.store.select(selectIsMonthly);
  }
}
