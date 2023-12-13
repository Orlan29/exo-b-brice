import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrokerState } from '../../../features/models/brokerState';
import { Store } from '@ngrx/store';
import { brokerActions } from '../../../features/store/broker.action';
import { FormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { selectBrokers } from '../../../features/store/broker.reducer';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.sass',
})
export class FilterBarComponent {
  @Input() isSidenavHidden!: boolean;
  @Input() itemCount!: number | null;
  @Output() isSidenavHiddenChange = new EventEmitter<boolean>();

  state!: boolean;
  selectedBrokersCount$!: Observable<number | undefined>;

  constructor(private store: Store<{ broker: BrokerState }>) {}

  toggleSwitch(event: boolean) {
    this.store.dispatch(
      brokerActions.setBrokersYearPrice({ isMonthly: !event })
    );
  }

  toggleSidenavVisibility(): void {
    const value = !this.isSidenavHidden;
    return this.isSidenavHiddenChange.emit(value);
  }
}
