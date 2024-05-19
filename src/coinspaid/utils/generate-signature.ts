import * as crypto from 'crypto';
export function generateSignature(requestBody: any) {
  const signature = crypto
    .createHmac('sha512', this.configService.get('COINPAID_SECRET_KEY'))
    .update(JSON.stringify(requestBody))
    .digest('hex');

  return signature;
}
