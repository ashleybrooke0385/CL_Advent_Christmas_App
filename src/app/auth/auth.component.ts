import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const { email, password } = form.value;
    this.authService.login(email, password).subscribe({
      next: (res) => {
        console.log('Auth Success: ', res);
      },
      error: (err) => console.error(err),
    });
    form.reset();
  }
}
