import {GENERATE} from "../regex.constant";

export function generateCaptcha(){
  let uniquechar = '';
  for (let i = 0; i < 6; i++) {
    uniquechar += GENERATE.charAt(
      Math.random() * GENERATE.length)
  }
  return uniquechar;
}
