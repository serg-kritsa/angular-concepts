import { Component, Input } from '@angular/core';

import { AccountsService } from '../../services/accounts.service';
import { Account } from "../../shared/account.interface";

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css'],
})
export class ReceiverComponent {
  account: {name: string, status: string};
  id: number;

  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (data: Account) => {
        console.log('rx', data);
        this.account = data
      }  
    );
  }

}
