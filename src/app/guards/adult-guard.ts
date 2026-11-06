import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccessService } from '../services/access';

export const adultGuard: CanActivateFn = () => {
  const access = inject(AccessService);
  const router = inject(Router);

  return access.enabled() ? true : router.parseUrl('/?access=required');
};
