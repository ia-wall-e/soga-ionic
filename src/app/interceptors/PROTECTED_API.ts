import { HttpContextToken } from '@angular/common/http';
export const CHECK_JWT = new HttpContextToken<boolean>(() => false);