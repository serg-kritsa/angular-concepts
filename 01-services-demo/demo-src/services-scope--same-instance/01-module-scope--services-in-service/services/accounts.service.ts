import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable()
// if will be used other services inside, should be used injectable decorator
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    }
  ];

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
