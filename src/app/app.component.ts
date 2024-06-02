import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { TrailerComponent } from "./trailer/trailer.component";
import { FeaturesComponent } from "./features/features.component";
import { FaqComponent } from "./faq/faq.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeroComponent, TrailerComponent, FeaturesComponent, FaqComponent, ContactComponent, FooterComponent]
})
export class AppComponent {
  title = 'game-app';
}
