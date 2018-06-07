import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatementOnePage } from '../pages/statement-one/statement-one';
import { StatementTwoPage } from '../pages/statement-two/statement-two';
import { ConclusionPage } from '../pages/conclusion/conclusion';
import { InferencePage } from '../pages/inference/inference';
import { ResultPage } from '../pages/result/result';
import { Inference2Page } from '../pages/inference2/inference2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StatementOnePage,
    StatementTwoPage,
    ConclusionPage,
    InferencePage,
    Inference2Page,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StatementOnePage,
    StatementTwoPage,
    ConclusionPage,
    InferencePage,
    Inference2Page,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
