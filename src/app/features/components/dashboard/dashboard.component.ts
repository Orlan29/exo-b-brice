import { Component } from '@angular/core';
import { NavigationComponent } from '@exo-brice/core/components/navigation/navigation.component';
import { CardComponent } from '@exo-brice/ui/card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavigationComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {

}
