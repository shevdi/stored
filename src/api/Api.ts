import { bind } from 'decko';

import HttpActions from './HttpActions';
import urls from './urls';
import config from './config';

class Api {
  protected actions: HttpActions;
  protected authActions: HttpActions;
  protected token: string;

  constructor() {
    this.authActions = new HttpActions(urls.baseAuthUrl, `Basic ${config.clientId}:${config.clientSecret}`);
  }

  @bind
  public authorize(token: string) {
    if (token) {
      localStorage.setItem('token', token);
    }
    const accessToken = localStorage.getItem('token');
    this.actions = new HttpActions(urls.baseDiskUrl, `OAuth ${accessToken}`);
    if (accessToken) {
      return accessToken;
    }
  }

  @bind
  public unauthorize() {
    localStorage.removeItem('token');
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
    return data.data._embedded.items;
  }

  @bind
  public async getFiles() {
    const url = urls.files;
    const data = await this.actions.get<any>(url);
    return data;
  }
}

export default Api;
