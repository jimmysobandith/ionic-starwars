import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

/**
 * Generated class for the DetailPeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-people',
  templateUrl: 'detail-people.html',
})
export class DetailPeoplePage {

  idPerson;
  person;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private swapiProvider: SwapiProvider) {
      this.idPerson = navParams.get('idPeople');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPeoplePage', this.idPerson);
    this.swapiProvider.getPeople(this.idPerson).subscribe(data => {
      this.person = data;
    });
  }

}
