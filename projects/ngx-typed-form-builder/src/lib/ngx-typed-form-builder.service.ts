import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, AbstractControlOptions, ValidatorFn, AsyncValidatorFn, FormControl, FormArray } from '@angular/forms';
export declare abstract class TypedAbstractControl<T> extends AbstractControl {
  readonly value: T;
  abstract setValue(value: T, options?: Object): void;
  abstract patchValue(value: T, options?: Object): void;
  abstract reset(value?: T, options?: Object): void;
}

export declare abstract class TypedFormControl<T> extends FormControl {
  readonly value: T;
  reset(value: Parameters<TypedAbstractControl<T>['reset']>[0], options: Parameters<FormControl['reset']>[1]): void;
  patchValue(value: Parameters<TypedAbstractControl<T>['patchValue']>[0], options: Parameters<FormControl['patchValue']>[1]): void;
  setValue(value: Parameters<TypedAbstractControl<T>['setValue']>[0], options: Parameters<FormControl['setValue']>[1]): void
}
export declare abstract class TypedFormGroup<Types> extends FormGroup {
  controls: { [P in keyof Types]: TypedAbstractControl<Types[P]> };
  patchValue(
    value: { [P in keyof Partial<Types>]: TypedAbstractControl<Types[P]> },
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    }
  ): void;
  setValue(
    value: { [P in keyof Partial<Types>]: TypedAbstractControl<Types[P]> },
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    }
  ): void;
  //TODO: add inner path
  //@ts-ignore
  get(path: Array<keyof Types> | keyof Types): AbstractControl | null;
}
@Injectable()
export class NgxTypedFormBuilder {
  constructor(public fb: FormBuilder) {
  }
  control<T>(formState: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): TypedFormControl<T> {
    return (<any>this.fb.control(formState, validatorOrOpts, asyncValidator)) as TypedFormControl<T>;
  }
  group<T>(controlsConfig: { [key in keyof T]: any; }, options?: AbstractControlOptions | { [key: string]: any; } | null): TypedFormGroup<T> {
    return (<any>this.fb.group(controlsConfig, options)) as TypedFormGroup<T>;
  }
  array(controlsConfig: any[], validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormArray {
    return this.fb.array(controlsConfig, validatorOrOpts, asyncValidator)
  }
}