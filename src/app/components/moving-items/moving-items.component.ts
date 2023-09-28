import { Component } from '@angular/core';
// import { DataService } from './data.service';

@Component({
  selector: 'app-moving-items',
  templateUrl: './moving-items.component.html',
  styleUrls: ['./moving-items.component.css']
})
export class MovingItemsComponent {
  startDate: string="";
  endDate: string="";
  filteredData: any[] = [];
  isLoading = false;

  // constructor(private dataService: DataService) {}

  constructor() {

  }

  search(): void {
    // this.isLoading = true;
    // this.dataService.filterDataByDateRange(this.startDate, this.endDate).subscribe(
    //   (result) => {
    //     this.filteredData = result;
    //     this.isLoading = false;
    //   },
    //   (error) => {
    //     // Handle error and show appropriate feedback to the user
    //     this.isLoading = false;
    //   }
    // );
  }
}
