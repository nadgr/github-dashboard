'use strict';

import {Polymer} from 'polymer-npm-wrapper';


import './template.html';


class CardContainer {

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
    this.is = 'x-card-container';
    this.properties = {

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

Polymer(CardContainer);