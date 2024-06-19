import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private meta: Meta) {}
  ngOnInit() {
    // Meta tag-uri pentru SEO
    this.meta.addTags([
      { name: 'description', content: 'Centrul Internațional de Psihologie și Psihoterapie NEW LIFE THERAPY, examinari psihologice pentru obtinere permis auto, control periodic, angajare, port arma letala si neletala, profil personalitate, dosar medical, psihodiagnostic, psihoterapeut pentru adulti, cupluri, adolescenti si copii. NEW LIFE THERAPY Pszihológiai és Pszihoterápiai Nemzetközi Központ, pszichológiai vizsgálatok vezetői engedély megszerzéséhez, időszakos vizsgálatok, alkalmazáshoz, halálos és nem halálos fegyver viseléséhez, személyiség profil, orvosi dosszié, pszichodiagnosztika, pszichoterapeuta felnőttek, párok, serdülők és gyermekek számára.' },
      { name: 'keywords', content: 'psihologie, psihoterapie, terapie, Miercurea Ciuc, Harghita, sănătate mentală, consiliere, terapie de cuplu, terapie de grup, pszichológia, pszichoterápia, terápia, Csíkszereda, Hargita, mentális egészség, tanácsadás, párterápia, csoportterápia' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.site-tau.ro/' },
      { property: 'og:title', content: 'New Life Therapy - Cabinet de Psihologie și Psihoterapie în Miercurea Ciuc / Pszichológiai és Pszichoterápiai Központ Csíkszeredában' },
      { property: 'og:description', content: 'Cabinet de Psihologie și Psihoterapie în Miercurea Ciuc, oferind terapie individuală, de cuplu și de grup. Pszichológiai és pszichoterápiai központ Csíkszeredában, egyéni, pár- és csoportterápia.' },
      { property: 'og:image', content: 'https://www.site-tau.ro/assets/img/logo-new-life.jpg' }
    ]);
  }
}