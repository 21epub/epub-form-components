import ReadOnly from './ReadOnly';
import IsRequired from '../FormSingleCheckbox';
import Max from './Max';
import Min from './Min';
import Precision from './Precision';

export const getValidate = (ValidateType: string) => {
  const validateMap = {
    is_required: IsRequired,
    read_only: ReadOnly,
    min: Min,
    max: Max,
    precision: Precision,
  };

  return Reflect.get(validateMap, ValidateType) || IsRequired;
};
