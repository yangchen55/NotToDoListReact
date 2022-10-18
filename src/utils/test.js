const strLength = 6;
const chars =
  "asdfghhjkewoiurfgbvjnctygiohpjbhjkvnxcjirhgvjkGSDIUHOIFJPOWERTIGPOEPFOVJKLCBNROWEURIOWVNOKJWEPO";

export const randomStr = () => {
  let str = "";
  for (let i = 0; i < strLength; i++) {
    const position = Math.round(Math.random() * chars.length);
    str += chars[position];
  }
  return str;
};
