import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccessService } from '../../services/access';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  readonly access = inject(AccessService);
}
