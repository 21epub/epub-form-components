import ReadOnly from './ReadOnly/ReadOnly'
import IsRequired from './IsRequired/IsRequired'
import Max from './Max/Max'
import Min from './Min/Min'
import Precision from './Precision/Precision'

export const getValidate = (ValidateType: string) => {
  const validateMap = {
    is_required: IsRequired,
    read_only: ReadOnly,
    min: Min,
    max: Max,
    precision: Precision
  }

  return Reflect.get(validateMap, ValidateType) ?? IsRequired
}
