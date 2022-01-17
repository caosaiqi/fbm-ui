/**
 * @des 计算input value长度
 */
export type Params = {
  value: string,
  max: number,
}

export type GetValueLengthReturn = {
  // 是否超出
  isBeyond: boolean;
   // chineseLength
  length: number;
};

const CHINESE_RET = /[^\x00-\xff]/g

export const chineseLength = (str: string): number => {
  if (!str || (str && typeof str !== 'string')) return 0
  const len: number = str.replace(CHINESE_RET, '##').length
  return Math.ceil(len / 2);
}

export const validateLength = (
  length,
  max,
) => {
  if (length <= 0 || !max) return false
  return length > max
}

const getValueLength = ({
  value,
  max
}: Params): GetValueLengthReturn => {
  const length = chineseLength(value)
  const isBeyond = validateLength(length, max)

  return {
    isBeyond,
    length
  }
}

export default getValueLength