import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './models/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private api: string;

  constructor(private readonly http: HttpClient) {
    this.api = 'http://localhost:4200';
  }

  public findAll(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.api}/assets/albums.json`);
  }
}
