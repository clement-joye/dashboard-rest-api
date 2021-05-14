import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { DashboardCard } from './dashboard-card.model';
import { DashboardCardResource } from './dashboard-card-resource.interface';
import { DataService } from '../data.service';

var jsonQuery = require('json-query');

@Component({
  selector: 'dashboard-gallery',
  templateUrl: './dashboard-gallery.component.html',
  styleUrls: ['./dashboard-gallery.component.scss']
})
export class DashboardGalleryComponent implements OnInit {

  faSyncAlt = faSyncAlt;
  
  title: string = "Dashboard";

  cards: DashboardCard[] = [];

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {

    this.cards = this.dataService.getData();

    console.log(this.cards);

    this.cards.forEach( (card) => { 
      card.isLoading = true;
      this.getCardData(card);
    })
  }

  getCardData(card: DashboardCard, i: number = 0) {

    let resource = card.resources[i];
    let variables = card.variables;

    let request = prepareRequest(resource, variables, card.pat);
    console.log(request.url);

    return this.http.get<string>(request.url, { headers: request.httpOptions }).subscribe(

      (data: string) => {
        postRequest(data, resource, variables);
        if(++i < card.resources.length) { this.getCardData(card, i); }
        else { card.isLoading = false; }
      },

      (error: any) => {
        console.log(`Backend server returned an error (${error.status} - ${error.message})`);
        console.log(resource);
        console.log(variables);
        card.isLoading = false;
        card.variables['status'] = 'Unknown';
      }
    );
  }

  reloadCard(card: DashboardCard) {
    card.isLoading = true;
    this.getCardData(card);
  }
}

function SubtituteString(urlStr: string, json: { [key: string] : string }) {

  Object.keys(json).forEach(function(key) {
    urlStr = urlStr.replace('${' + key + '}', json[key])
  })
  return urlStr;
}

function prepareRequest(resource: DashboardCardResource, variables: { [key: string] : string }, pat: string) {

  let url = SubtituteString(resource.absoluteUrl, variables);

  const httpOptions = new HttpHeaders({ 
    'Authorization': `Basic ${btoa(`"":${pat}`)}`, 
    'Accept': 'application/json' 
  });

  return { url, httpOptions };
}

function postRequest(data: any, resource: DashboardCardResource, variables: { [key: string] : string }) {

  Object.keys(resource.values).forEach(function(key) {
    var query = SubtituteString(resource.values[key], variables).replace(/'/g, '"');
    var result = jsonQuery(query, { data: data, allowRegexp: true });
    variables[key] = result.value;
    console.log(result.value);
  })
}