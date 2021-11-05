import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'}) // shortcut // instead of app.module
export class UserService {
  activatedEmitter = new Subject<boolean>();
}
