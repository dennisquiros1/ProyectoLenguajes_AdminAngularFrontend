import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { CommsService } from '../comms.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription = Subscription.EMPTY;

  constructor(private location: Location, private commService: CommsService) {}

  ngOnInit() {
    this.subscription = this.commService.showElements$.subscribe(() => {
      document.documentElement.style.setProperty('--nav-item-display', 'flex');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goBack(): void {
    const previousUrl = document.referrer;
    if(previousUrl && !previousUrl.includes('/login')){
      this.location.back();
    }

  }
}
