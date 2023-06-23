import { Directive } from '@angular/core';
import {
  Validator,
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
  ɵValue
} from '@angular/forms';

@Directive({
  selector: '[appEmailvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvalidatorDirective,
      multi: true,
    },
  ],
})
export class EmailvalidatorDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
   const value = control.value as string;
    if (value.includes('test')) {
      return { inValidEmail: true };
    }
    return null;
  }
}
