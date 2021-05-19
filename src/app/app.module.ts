import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {IndexComponent} from './index/index.component';
import {BiographyComponent} from './biography/biography.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DevSkillsComponent} from './dev-skills/dev-skills.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		IndexComponent,
		BiographyComponent,
		NavComponent,
		FooterComponent,
		NotFoundComponent,
		DevSkillsComponent,
		ContactsComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
