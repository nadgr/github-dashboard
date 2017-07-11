'use strict';

import {Polymer} from 'polymer-npm-wrapper';


import './template.html';


class RepoInfo {

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
    this.is = 'x-repo-info';
    this.properties = {
      repoName: {
        type: String,
        value: '' 
      },
      repoDescr: {
        type: String,
        value: ''
      },
      issuesNum: {
        type: Number,
        value: 0
      },
      pullsNumber: {
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

Polymer(RepoInfo);