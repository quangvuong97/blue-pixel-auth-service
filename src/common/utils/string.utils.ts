export class StringUtils {
  static isLatin1(str: string) {
    for (let i = 0; i < str.length; i += 1) {
      if (str.charCodeAt(i) > 255) return false;
    }
    return true;
  }
}
