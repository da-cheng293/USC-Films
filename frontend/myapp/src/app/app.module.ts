import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchAheadComponent } from './search-ahead/search-ahead.component';
import { FormsModule } from '@angular/forms';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { CarouselTemplateComponent } from './carousel-template/carousel-template.component';
import { DetailsTemplateComponent } from './details-template/details-template.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { WatchlistTemplateComponent } from './watchlist-template/watchlist-template.component';
import { CastTemplateComponent } from './cast-template/cast-template.component';
import { ReviewTemplateComponent } from './review-template/review-template.component';
import { PopUpTemplateComponent } from './pop-up-template/pop-up-template.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DetailsTvTemplateComponent } from './details-tv-template/details-tv-template.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WatchListComponent,
    FooterComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
    HomePageComponent,
    SearchAheadComponent,
    HomeCarouselComponent,
    CarouselTemplateComponent,
    DetailsTemplateComponent,
    WatchlistTemplateComponent,
    CastTemplateComponent,
    ReviewTemplateComponent,
    PopUpTemplateComponent,
    DetailsTvTemplateComponent
  ],
  imports: [
    LayoutModule,
    YouTubePlayerModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
     
      { path: '', component: HomePageComponent},
      
      
         {path: 'watch/movie/:movie_id', component: MovieDetailsComponent },
         { path: 'watch/tv/:tv_id', component: TvDetailsComponent },
       
      
      
      { path: 'mylist', component: WatchListComponent }
      
      
     
    ], {scrollPositionRestoration: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

