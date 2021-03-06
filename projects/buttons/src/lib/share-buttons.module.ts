import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareButtons, ShareButtonsConfig, CONFIG } from '@ngx-share/core';
import { ShareButtonModule } from '@ngx-share/button';

import { ShareButtonsComponent } from './share-buttons.component';
import { ExpandButtonComponent } from './expand-button.component';

export function ShareButtonsFactory(config: ShareButtonsConfig) {
  return new ShareButtons(config);
}

@NgModule({
  declarations: [
    ShareButtonsComponent,
    ExpandButtonComponent
  ],
  imports: [
    ShareButtonModule,
    CommonModule
  ],
  exports: [
    ShareButtonModule,
    ShareButtonsComponent
  ]
})
export class ShareButtonsModule {
  static forRoot(config?: ShareButtonsConfig): ModuleWithProviders {
    return {
      ngModule: ShareButtonsModule,
      providers: [
        {provide: CONFIG, useValue: config},
        {
          provide: ShareButtons,
          useFactory: ShareButtonsFactory,
          deps: [CONFIG]
        }
      ]
    };
  }
}
