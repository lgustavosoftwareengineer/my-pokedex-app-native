/* eslint-disable @typescript-eslint/no-explicit-any */
import {FormikConfig, FormikErrors, FormikState, useFormik} from 'formik';
import React, {FormEvent} from 'react';

export type UseFormConfig<T> = FormikConfig<T>;

export type UseForm<T> = {
  values: T;
  handleChange: (e: React.ChangeEvent<any> | string) => void;
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
  resetForm: (nextState?: Partial<FormikState<T>>) => void;
  isValid: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => Promise<void> | Promise<FormikErrors<T>>;
  errors: FormikErrors<T>;
  getFieldProps: (fieldName: string) => {
    value: any;
    onChangeText: (e: string | React.ChangeEvent<any>) => void;
    onPressDeleteText: () => Promise<void> | Promise<FormikErrors<T>>;
    error: any;
  };
};

export function useForm<T>(config: UseFormConfig<T>): UseForm<T> {
  const {
    values,
    handleChange,
    handleSubmit,
    resetForm,
    isValid,
    setFieldValue,
    errors,
    ...rest
  } = useFormik<T>(config);

  function getFieldProps(fieldName: string) {
    return {
      value: values[fieldName as keyof T],
      onChangeText: handleChange(fieldName),
      onPressDeleteText: () => setFieldValue(fieldName, ''),
      error: errors[fieldName as keyof T],
    };
  }

  return {
    values,
    handleChange,
    handleSubmit,
    resetForm,
    isValid,
    setFieldValue,
    errors,
    ...rest,
    getFieldProps,
  };
}
