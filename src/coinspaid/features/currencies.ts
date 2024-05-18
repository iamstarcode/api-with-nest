export class Currencies {
  url: any;
  options: RequestInit;

  constructor({ options, url }: { options: RequestInit; url: string }) {
    this.options = options;
    this.url = url;
  }
  async getCurrenciesList() {
    const res = await fetch(this.url, this.options);
  }
}
