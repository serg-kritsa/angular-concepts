import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './logging.service';
import { Account } from "../shared/account.interface";

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    }
  ];
  statusUpdated = new EventEmitter<Account>();

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
