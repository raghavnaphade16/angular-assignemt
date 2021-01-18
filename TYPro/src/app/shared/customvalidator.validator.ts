import { FormGroup, AbstractControl, ValidationErrors } from "@angular/forms";
export function validFirstChar(control: AbstractControl) {
    
    if (!control.value.match(/^[A-Za-z]*$/)) {
      return { validFchar: true };
    }
    return null;
  }

    // [0-9 ]{10}
export function validPhNo(control:AbstractControl){
    if (control.value.length !=10 ) {
        return { validPNo: true };
    }
        return null;
}
export function validPNoChar(control:AbstractControl){
    if (!control.value.match(/^[0-9]*$/) ) {
        return { validPNChar: true };
    }
        return null;
}

// export function ConfirmedValidator(controlName: string, matchingControlName: string){
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];
//         if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
//             return;
//         }
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ confirmedValidator: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }

// }
