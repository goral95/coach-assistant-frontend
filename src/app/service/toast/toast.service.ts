import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService) { }

  public success(msg: string): void {
    this.messageService.add({ severity: 'success', summary: this.translateService.instant(msg)});
  }

  public info(msg: string): void {
    this.messageService.add({ severity: 'info', summary: this.translateService.instant(msg)});
  }

  public error(msg: string): void {
    this.messageService.add({ severity: 'error', summary: this.translateService.instant(msg)});
  }

  public warn(msg: string): void {
    this.messageService.add({ severity: 'warn', summary: this.translateService.instant(msg)});
  }

}
