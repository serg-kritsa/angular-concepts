import { EventEmitter } from '@angular/core';

import { LoggingService } from './logging.service';

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    }
  ];

  constructor() {}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
