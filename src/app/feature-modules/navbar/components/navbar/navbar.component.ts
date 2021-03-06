import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.authService.logout();
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
