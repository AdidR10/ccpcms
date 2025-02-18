import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.scss']
})
export class AdmiPostComponent {
  @Input() page!: string;
}
