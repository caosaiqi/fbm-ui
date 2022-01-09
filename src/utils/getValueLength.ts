/**
 * @des 计算input value长度
 */

type Params = {
  value: string,
  max: number,
}

type Return = {
  // 是否超出
  isBeyond: boolean;
  length: number;
};

const CHINESE_RET = /[^\x00-\xff]/g

const chineseLength = (str: string): number => {
  if (!str || (str && typeof str !== 'string')) return 0
  const len: number = str.replace(CHINESE_RET, '##').length
  return Math.ceil(len / 2);
}

const getValueLength = ({
  value,
  max
}: Params): Return => {
  const length = chineseLength(value)
  const isBeyond = length > max
  const data = {
    isBeyond,
    length
  }

  return data
}

export default getValueLength