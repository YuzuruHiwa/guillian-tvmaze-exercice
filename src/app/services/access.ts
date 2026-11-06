import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccessService {
  private readonly _enabled = signal(false);
  readonly enabled = this._enabled.asReadonly();

  toggle(): void {
    this._enabled.update((enabled) => !enabled);
  }
}
