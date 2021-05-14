import { Injectable } from '@angular/core';
import { DashboardCard } from './dashboard-gallery/dashboard-card.model';
import { datasources, cards } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(): DashboardCard[]{

    let dashboardCards: DashboardCard[] = [];

    cards.forEach( (card: any) => {
      card["resources"] = datasources.filter( (x) => x["name"] == card["datasource"])[0].resources;
      dashboardCards.push(card);
    })

    return dashboardCards;
  }
}
