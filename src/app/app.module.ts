
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PostPage } from '../pages/post/post';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ComunhaoPage } from '../pages/comunhao/comunhao';
import { RelacionamentoPage } from '../pages/relacionamento/relacionamento';
import { MissaoPage } from '../pages/missao/missao';
import { TabsPage } from '../pages/tabs/tabs';
import { CommentPage } from '../pages/comment/comment';
import { IndexPage } from '../pages/index/index';

import { WordpressService } from '../services/wordpress.service';
import { AuthenticationService } from '../services/authentication.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { YtProvider } from '../providers/yt/yt';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';
import { PlaylistPage } from '../pages/playlist/playlist';
import { VideosPage } from '../pages/videos/videos';
import { SideMenuContentComponent } from '../pages/menu/side-menu-content.component';

@NgModule({
  declarations: [
    MyApp,
    PostPage,
    HomePage,
    LoginPage,
    RegisterPage,
    ComunhaoPage,
    RelacionamentoPage,
    MissaoPage,
    TabsPage,
    PlaylistPage,
    VideosPage,
    CommentPage,
    SideMenuContentComponent,
    IndexPage
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostPage,
    HomePage,
    LoginPage,
    RegisterPage,
    ComunhaoPage,
    RelacionamentoPage,
    MissaoPage,
    TabsPage,
    PlaylistPage,
    VideosPage,
    CommentPage,
    IndexPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    WordpressService,
    AuthenticationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YtProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
