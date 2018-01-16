import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';
import { DetailPeoplePage } from '../detail-people/detail-people';

/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {

  people = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private swapiProvider: SwapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
    this.swapiProvider.listPeople().subscribe(data => {
      this.people = data;
    });
  }

  personSelected(person) {
    const idPeople = person.url.slice('https://swapi.co/api/people/'.length, -1);
    this.navCtrl.push(DetailPeoplePage, { idPeople: idPeople });
  }

}
