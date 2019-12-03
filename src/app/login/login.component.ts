import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorageService';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface IUser {
  id?: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser: IUser = null;
  localStorageService: LocalStorageService<IUser>;
  user: IUser = { username: '', password: '' };
  constructor(private router: Router, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('user');
  }

  ngOnInit() {
    this.currentUser = this.localStorageService.getItemsFromLocalStorage();
    if (this.currentUser != null) {
      this.router.navigate(['contacts']);
    }


  }

  login(user: IUser) {
    console.log('login user: ', user);
    const defaultUser: IUser = { username: 'victor', password: 'lo123' };
    if (user.username !== '' && user.password !== '') {
      if (user.username === defaultUser.username && user.password === defaultUser.password) {
        this.localStorageService.saveItemsToLocalStorage(user);
        this.router.navigate(['contacts', user]);
      } else {
        this.toastService.showToast('warning', 'Login in failed! Please enter correct information', 2000);
      }
    } else {
      this.toastService.showToast('danger', 'Login in failed! Please fill in information', 15000);
    }
  }

}
