import { Component } from '@angular/core';

// create a model-like template for an employer
export class Employer {
  id: number | undefined;
  name: string | undefined;
  city: string | undefined;
}

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {
  // make a list of mock Employers
  EMPLOYERS: Employer[] = [
    { id: 500, name: 'Royal Bank', city: 'Toronto' },
    { id: 501, name: 'Element6', city: 'Barrie' },
    { id: 502, name: 'LabX Media Group', city: 'Midland' }
  ];
}
