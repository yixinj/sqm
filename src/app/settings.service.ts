import { Injectable } from '@angular/core';

export interface Settings {
  id: boolean;
  name: boolean;
  progress: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    id: true,
    name: true,
    progress: true
  };

  constructor() { }

}
