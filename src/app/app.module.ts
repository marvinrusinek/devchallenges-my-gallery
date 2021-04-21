import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './my-gallery/containers/header/header.component';
import { MainComponent } from './my-gallery/containers/main/main.component';
import { FooterComponent } from './my-gallery/containers/footer/footer.component';
import { ContainerComponent } from './my-gallery/containers/container/container.component';
import { LazyImgDirective } from './my-gallery/containers/main/lazy-img.directive';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-gallery',
    pathMatch: 'full'
  },
  {
    path: 'my-gallery',
    loadChildren: () =>
      import('./my-gallery/routing/my-gallery-routing.module').then(m => m.MyGalleryRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ContainerComponent,
    LazyImgDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
