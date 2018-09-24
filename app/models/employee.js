import DS from 'ember-data';

export default DS.Model.extend({
    first_name: DS.attr('string'),
    surname: DS.attr('string'),
    age: DS.attr('number'),
    date_of_birth: DS.attr('date'),
    gender: DS.attr('string'),
    income_tax: DS.attr('number'),
    national_insurance: DS.attr('number'),
    salary: DS.attr('number'),
    take_home: DS.attr('number'),
    title: DS.attr('string')
});
