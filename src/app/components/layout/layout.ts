import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';

@Component({
  imports: [Header, RouterOutlet],
  selector: 'app-layout',
  templateUrl: './layout.html',
})
export class Layout {}
