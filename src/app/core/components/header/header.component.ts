import { Component, OnInit } from '@angular/core';
import { BrokerState } from '../../../features/models/brokerState';
import { Store } from '@ngrx/store';
import { selectSelectedBrokers } from '../../../features/store/broker.reducer';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent implements OnInit {
  selectedBrokersCount$!: Observable<number>;

  constructor(private store: Store<{ broker: BrokerState }>) {}

  ngOnInit(): void {
    this.selectedBrokersCount$ = this.store
      .select(selectSelectedBrokers)
      .pipe(map((brokers) => brokers.length));
  }
}
