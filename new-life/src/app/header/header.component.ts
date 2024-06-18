import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'Centrul Internațional de Psihologie și Psihoterapie NEW LIFE THERAPY, examinari psihologice pentru obtinere permis auto,control periodic, angajare, port arma letala si neletala, profil personalitate, dosar medical, psihodiagnostic, psihoterapeut pentru adulti, cupluri, adolescenti si copii. - Miercurea Ciuc - Costoiu Sándor / Costoiu Sándor - Csikszereda - NEW LIFE THERAPY Pszihológiai és Pszihoterápiai Nemzetközi Központ HAJTÁSI ENGEDÉLYHEZ, PERIÓDIKUS VIZSGÁLATOK, ALKALMAZÁSHOZ, FEGYVERTARTÁSI ENGEDÉLYHEZ, SZEMÉLYSÉG PROFIL, ORVOSI DOSSZIÉHOZ, PSZIHOLÓGIAI DIAGNÓZIS PSZIHOLÓGIAI VIZSGÁLATOK Pszichológiai tanácsadás gyerekek, tinédzserek, felnőttek és párok részére' });
    this.meta.addTag({ property: 'og:title', content: 'Titlul Open Graph' });
    // Adaugă orice alte meta-tag-uri de care ai nevoie
  }
}