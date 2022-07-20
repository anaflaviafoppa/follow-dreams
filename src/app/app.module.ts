import {Injectable, NgModule} from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/pages/main/main.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { AccordionComponent } from './views/components/accordion/accordion.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './views/components/footer/footer.component';
// @ts-ignore
import * as Hammer from 'hammerjs';
import { ExperienceComponent } from './views/components/experience/experience.component';
import { TooltipComponent } from './views/components/tooltip/tooltip.component';


@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override = <any> {
  /*  swipe: { direction: Hammer.DIRECTION_ALL },*/
    swipeup: { direction: Hammer.DIRECTION_UP },
    swipedown: { direction: Hammer.DIRECTION_DOWN },
  };
}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    AccordionComponent,
    FooterComponent,
    ExperienceComponent,
    TooltipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    }
  ],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
