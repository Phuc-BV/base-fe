import { FormGroup, Validators } from "@angular/forms";

export class ValidatorCommon {

    static checkIsNullEmptyUndefined(keyword: any): boolean {
        if (keyword !== null && keyword !== '' && keyword !== undefined) {
            return true;
        }
        return false;
    }

    static setValidatorFormGroup(formGroup: FormGroup, values: string[]) {
        for (const value of values) {
            formGroup.controls[value].setValidators([Validators.required]);
            formGroup.controls[value].updateValueAndValidity();
        }
    }
}