import { Injectable, inject } from '@angular/core';
import { Subject} from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ModalProductComponent } from '@myComponents/modal-product/modal-product.component';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  // modalController = inject(ModalController);
  private eventSubject = new Subject<any>();

  emitEvent(event: any) {
    this.eventSubject.next(event);
  }

  getEvent() {
    return this.eventSubject.asObservable();
  }


}
