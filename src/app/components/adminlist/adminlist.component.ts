import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrl: './adminlist.component.css'
})
export class AdminlistComponent {
  @Input() admins: any[] = [];
}
