'use strict';

import {Polymer} from 'polymer-npm-wrapper';


import './template.html';


class FilterContainer {

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
    this.is = 'x-filter-container';
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

Polymer(FilterContainer);