import { Component } from '@angular/core';
<<<<<<< HEAD
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
=======
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
>>>>>>> b8d8e01aecd5ca58ea5921e2c2b744f81ed431c4

@Component({
  selector: 'app-admin-layout',
  standalone: true,
<<<<<<< HEAD
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
=======
  imports: [RouterOutlet, Sidebar],
>>>>>>> b8d8e01aecd5ca58ea5921e2c2b744f81ed431c4
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout {

}