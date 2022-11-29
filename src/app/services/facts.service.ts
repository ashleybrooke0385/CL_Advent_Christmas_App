import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  // inject http client
  constructor(private http: HttpClient) { }

  // CRUD actions
  getFacts() {
    return this.http.get("https://advent-christmas-app-default-rtdb.firebaseio.com/christmas_facts.json")
  }

  addFact() {}

  removeFact() {}

}
