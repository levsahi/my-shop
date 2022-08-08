import { ValidatorType } from '../enum/validator';
import { Validator } from '../interface/Validator';


export const validate = (value = "", validators:Validator[]) => {
    let isValid = true;
    let messageArray:JSX.Element[] = [];
    for (const validator of validators) {
      
  
      switch(validator.type){
        case ValidatorType.VALIDATOR_TYPE_REQUIRE:
          isValid = isValid && value.length > 0
          if(!(value.length > 0))
             messageArray.push(<p key={validator.type}>This field are required</p>)
        break;
        case ValidatorType.VALIDATOR_TYPE_MINLENGTH:
            isValid = isValid && value.length >= validator.val;
            if(!(value.length >= validator.val))
              messageArray.push(<p key={validator.type}>This field are required {validator.val} minimum length</p>)
        break;
        case ValidatorType.VALIDATOR_TYPE_MAXLENGTH:
            isValid = isValid && value.length <= validator.val;
            if(!(value.length <= validator.val))
              messageArray.push(<p key={validator.type}>This field are required {validator.val} maximum length</p>)
        break;
        case ValidatorType.VALIDATOR_TYPE_EMAIL:
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
            if(!(/^\S+@\S+\.\S+$/.test(value))){
              messageArray.push(<p key={validator.type}>This field are required correct email</p>)
            }
        break;
        case ValidatorType.VALIDATOR_TYPE_NUMBER:
            isValid = isValid && /^\d+$/.test(value);
            if(!(/^\d+$/.test(value))){
              messageArray.push(<p key={validator.type}>This field are required only numers</p>)
            }
        break;
        default:
          break;
      }
  
    }
    return {isValid,messageArray};
  };