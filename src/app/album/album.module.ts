import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './container/album/album.component';
import { AlbumItemComponent } from './component/album-item/album-item.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { BreadcrumbModule } from '../shared/breadcrumb/breadcrumb.module';
import { AlbumService } from './album.service';

@NgModule({
  declarations: [AlbumComponent, AlbumItemComponent, PaginationComponent],
  imports: [CommonModule, BreadcrumbModule],
  providers: [AlbumService],
})
export class AlbumModule {}
