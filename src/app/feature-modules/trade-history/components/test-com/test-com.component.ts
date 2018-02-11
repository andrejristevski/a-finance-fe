import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-com',
  templateUrl: './test-com.component.html',
  styleUrls: ['./test-com.component.css']
})
export class TestComComponent implements OnInit {

  constructor(private authService: AuthService,
  private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.authService.logout();
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
