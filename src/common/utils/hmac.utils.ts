import * as crypto from 'crypto';

export class HmacUtils {
  static generateSecretKey(): string {
    return crypto.randomBytes(64).toString('base64');
  }

  static calculateHMAC(key: string, data: string): string {
    return crypto.createHmac('sha256', key).update(data).digest('base64');
  }

  static verifyHMAC(providedHmac: string, data: string, secretKey: string): boolean {
    const generatedHmac = HmacUtils.calculateHMAC(secretKey, data);
    return crypto.timingSafeEqual(Buffer.from(providedHmac), Buffer.from(generatedHmac));
  }

  static keySurveyPeriod(id: number, companyId: number): string {
    return `surveyPeriod:external:${id}:${companyId}`;
  }

  static keyAssessmentPeriod(id: number, companyId: number): string {
    return `assessment:external:${id}:${companyId}`;
  }

  static keyAssessmentPeriodResult(id: number, companyId: number): string {
    return `assessment-result:external:${id}:${companyId}`;
  }
}
