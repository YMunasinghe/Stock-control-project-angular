import { Component } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {
  searchTerm: string = '';
  searchResults: string[] = [];

  constructor() { }

  search(): void {
    // search logic
    // This could involve making HTTP requests to a backend service or filtering data locally
    // For simplicity, we'll just split the search term by space and return matching results

    if (this.searchTerm.trim() === '') {
      this.searchResults = [];
      return;
    }

    const searchTerms = this.searchTerm.split('');
    // Mock data for demonstration purposes
    const data = ['Result 1', 'Result 2', 'Result 3', 'Result 4', 'Result 5'];

    this.searchResults = data.filter(result => {
      return searchTerms.every(term => result.toLowerCase().includes(term.toLowerCase()));
    });
  }
}
