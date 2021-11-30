import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './container/layout/layout.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { TopNavigationComponent } from './component/top-navigation/top-navigation.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, NavigationComponent, TopNavigationComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
