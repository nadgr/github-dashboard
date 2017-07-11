'use strict';

import {Polymer} from 'polymer-npm-wrapper';
import moment from 'moment';
import lodash from 'lodash';

import './template.html';


class Container {

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
		this.is = 'x-container';
		this.properties = {
			repos: {
				type: Number,
				value: 0
			},
			users: {
				type: Number,
				value: 0
			},
			arr: {
				type: Array,
				value: []
			}
		}
	}

	/**
	 * When the component is attached into the DOM.
	 *
	 * @return {null}
	 */
	attached(){
		//const moment = require('moment');
		const giturl = 'https://api.github.com';
		const orgs = 'orgs';
		const usr = 'users';
		const repos = 'repos';
		const firm = 'contactlab';
		const pubMembers = 'public_members';
		const eventsUrl = 'events';

		let changedPropObj = {};
		let clabUsrUrl = `${giturl}/${usr}/${firm}`;
		let clabOrgsUrl = `${giturl}/${orgs}/${firm}`; // https://api.github.com/orgs/contactlab
		let members = [];
 
		// GET PUBLIC REPOS
		/*(() => {
			fetch(clabOrgsUrl).then(response => {
				return response.json();
			}).then(data => {
				this.repos = data.public_repos;
			}).catch(err => {
				console.log(response.status, reponse.statusText);
			});
		// GET PUBLIC MEMBERS
			fetch(`${clabOrgsUrl}/${pubMembers}`).then(response => {
				return response.json();
			}).then(data => {
				data.forEach(element => {
					members.push(element.login);
				});
				this.users = members.length;
			}).catch(err => {
				console.log('nope');
			});

		})();*/
		//GET PUBLIC MEMBERS
		/*(() => {
			fetch(`${clabOrgsUrl}/${pubMembers}`).then(response => {
				return response.json();
			}).then(data => {
				data.forEach(element => {
					members.push(element.login);
				});
				this.users = members.length;
			}).catch(err => {
				console.log('nope');
			});
		})();*/

		// EVENTS: CREATED AT, REPO NAME
		
		(() => {
			fetch(`${clabUsrUrl}/${repos}`).then(response => {
				return response.json();
			}).then(data => {
				const objForFilter = data.map(element => {
					return {
						label: element.created_at.slice(0, 4),
						value: element.full_name
					}
				});
				this.arr = objForFilter;
			}).catch(err => {
				console.log('nope');
			});
		})();

	}
	
}

Polymer(Container);