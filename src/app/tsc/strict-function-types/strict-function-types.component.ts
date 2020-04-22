import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ValidatorFn,
  FormControl,
  ValidationErrors,
  FormGroup,
  Validators,
} from '@angular/forms';

// https: // www.stephanboyer.com/post/132/what-are-covariance-and-contravariance

const code = `
const samePasswordValidator: ValidatorFn = (
  form: FormControl
): ValidationErrors | null => {
  const oldPasswordControl = form.get('oldPassword');
  const newPasswordControl = form.get('newPassword');

  if (!oldPasswordControl || !newPasswordControl) {
    throw new Error(
      \`Can not find oldPassword or newPassword in the form: \${form.toString()}\`
    );
  }

  const oldPassword = oldPasswordControl.value;
  const newPassword = newPasswordControl.value;

  if (oldPassword === newPassword) {
    return {
      passwordNotChanged: true,
    };
  }

  return null;
};
`;

// export declare interface ValidatorFn {
//   (control: AbstractControl): ValidationErrors | null;
// }

// export declare class FormControl extends AbstractControl { ... }

const samePasswordValidator: ValidatorFn = (
  form: FormControl
): ValidationErrors | null => {
  const oldPasswordControl = form.get('oldPassword');
  const newPasswordControl = form.get('newPassword');

  if (!oldPasswordControl || !newPasswordControl) {
    throw new Error(
      `Can not find oldPassword or newPassword in the form: ${form.toString()}`
    );
  }

  const oldPassword = oldPasswordControl.value;
  const newPassword = newPasswordControl.value;

  if (oldPassword === newPassword) {
    return {
      passwordNotChanged: true,
    };
  }

  return null;
};

@Component({
  selector: 'app-strict-function-types',
  templateUrl: './strict-function-types.component.html',
  styleUrls: ['./strict-function-types.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrictFunctionTypesComponent {
  code = code;
  showResult = false;

  form = new FormGroup(
    {
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
    },
    { validators: [samePasswordValidator] }
  );
}
