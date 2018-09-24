import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
    firstName: null,
    employees: null,
    filteredEmployees: null,

    didReceiveAttrs() {
        this._super(...arguments);
        let employees = Ember.get(this, 'employees');
        //console.log(employees);
        Ember.set(this, 'filteredEmployees', employees);
    },

    actions: {
        filterListOfEmployees() {
            let firstName = Ember.get(this, 'firstName');
            let employees = Ember.get(this, 'employees');
            let narrowedEmployeesList = employees.filterBy('first_name', firstName);
            //console.log(narrowedEmployeesList);
            if(narrowedEmployeesList.length !== 0) {
                Ember.set(this, 'filteredEmployees', narrowedEmployeesList);
            } else {
                Ember.set(this, 'filteredEmployees', employees);
            }  
        }
    }
});
