/**
 * @des 计算input value长度
 */

type Params = {
  value: SVGStringList,
  max: number,
}

type Return = {
  // 是否超出
  isDeyond: boolean;
  length: number;
};


const getValueLength = ({
  value,
  max
}: Params): Return => {
  const length = (value && value.length) || 0
  const isDeyond = (value || '').length > max
  const data = {
    isDeyond,
    length
  }
 
  return data
}

export default getValueLength