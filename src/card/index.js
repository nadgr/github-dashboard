'use strict';

//import {Polymer} from 'polymer-npm-wrapper';


import './template.html';


class Card {

  /**
  * Behaviors required by the component
  */
  get behaviors() {
    return [];
  }

  /**
  * Component name, propertiers, behaviors and declared listeners
  */
  beforeRegister(){
    this.is = 'x-card';
    this.properties = {
        value: {
            type: Number,
            value: 0
        }
    }
  }

  /**
  * When the component is attached into the DOM.
  *
  * @return {null}
  */
  attached(){

  }

}

Polymer(Card);