import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class WebhookEvents {
  constructor(private eventEmitter: EventEmitter2) {}
  emitEvent(event: string, data: any) {
    this.eventEmitter.emit(event, data);
  }
}
