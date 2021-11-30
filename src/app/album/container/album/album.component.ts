import { AlbumService } from './../../album.service';
import { Breadcrumb } from './../../../shared/breadcrumb/model/breadcrumb';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  public albums: Album[];
  public breadcrumb!: Breadcrumb;

  constructor(private readonly albumService: AlbumService) {
    this.albums = [];
  }

  ngOnInit(): void {
    this.breadcrumb = {
      title: 'Album Grid Without Filterable',
      text: 'Check our latest albums',
      link: 'Albums Grid',
    };
    this.albumService.findAll().subscribe((data: Album[]) => {
      this.albums = data;
    });
  }
}
