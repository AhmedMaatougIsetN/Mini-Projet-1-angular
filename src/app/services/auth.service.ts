import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'user', password: '123', roles: ['USER'] }
  ];

  loggedUser = '';
  isloggedIn = false;
  roles: string[] = [];

  constructor(private router: Router) {}

  signIn(user: User): boolean {
    const validUser = this.users.find(current =>
      current.username === user.username && current.password === user.password
    );
    if (!validUser) return false;

    this.loggedUser = validUser.username;
    this.isloggedIn = true;
    this.roles = validUser.roles;
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    return true;
  }

  isAdmin(): boolean {
    return this.roles.includes('ADMIN');
  }

  logout(): void {
    this.loggedUser = '';
    this.isloggedIn = false;
    this.roles = [];
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('isloggedIn');
    this.router.navigate(['/login']);
  }

  restoreSession(): boolean {
    const username = localStorage.getItem('loggedUser');
    const user = this.users.find(current => current.username === username);
    if (localStorage.getItem('isloggedIn') !== 'true' || !user) {
      localStorage.removeItem('loggedUser');
      localStorage.removeItem('isloggedIn');
      return false;
    }

    this.loggedUser = user.username;
    this.isloggedIn = true;
    this.roles = user.roles;
    return true;
  }
}
