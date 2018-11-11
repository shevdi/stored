import { bind } from 'decko';

import HttpActions from './HttpActions';
import urls from './urls';
import config from './config';

class Api {
  protected actions: HttpActions;
  protected authActions: HttpActions;

  constructor() {
    this.actions = new HttpActions(urls.baseDiskUrl, `OAuth AQAAAAAtu5B_AAVJ1NgpycdQKU93jKLRQCisDFw`);
    this.authActions = new HttpActions(urls.baseAuthUrl, `Basic ${config.clientId}:${config.clientSecret}`);
  }

  @bind
  public async authorize(code: string) {
    const url = urls.token;
    const data = await this.authActions.post<any>(
      url,
      {
        grant_type: 'authorization_code',
        code,
      },
    );
    return data;
  }

  @bind
  public async getDiskInfo() {
    const url = urls.disk;
    const data = await this.actions.get<any>(url, {});
    return data;
  }

  @bind
  public async getResources(path: string) {
    const url = urls.resources;
    const data = await this.actions.get<any>(url, { path });
    return {
      folderName: data.data.name,
      folderPath: data.data.path,
      resources: data.data._embedded.items,
    };
  }

  @bind
  public async getFiles() {
    const url = urls.files;
    const data = await this.actions.get<any>(url);
    return data;
  }
}

export default Api;
