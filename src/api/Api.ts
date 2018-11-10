import { bind } from 'decko';

import HttpActions from './HttpActions';
import urls from './urls';

class Api {
  protected actions: HttpActions;

  constructor() {
    this.actions = new HttpActions(urls.baseUrl);
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
