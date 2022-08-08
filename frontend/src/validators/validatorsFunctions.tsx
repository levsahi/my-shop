import React from 'react';


import { ValidatorType } from '../enum/validator';




export const VALIDATOR_REQUIRE = () => ({ type: ValidatorType.VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: ValidatorType.VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val:any) => ({
  type: ValidatorType.VALIDATOR_TYPE_MINLENGTH,
  val: val
});
export const VALIDATOR_MAXLENGTH = (val:any) => ({
  type: ValidatorType.VALIDATOR_TYPE_MAXLENGTH,
  val: val
});
export const VALIDATOR_EMAIL = () => ({ type: ValidatorType.VALIDATOR_TYPE_EMAIL });

export const VALIDATOR_NUMBER = () => ({ type: ValidatorType.VALIDATOR_TYPE_NUMBER });



