import { Component, Input } from '@angular/core';

import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);

    const account = this.account
    const id = this.id
    const acc = { ...account,  status, id}
    console.log('tx', acc);
    this.accountsService.statusUpdated.emit(acc);
  }
}
