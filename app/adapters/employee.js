import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    init() {
        this._super(...arguments);
    
        this.set('headers', {     
            'Authorization': 'fourth-js-interview-data',
        });
    },
    host: 'https://fourth-js-interview-b392e.firebaseapp.com',  
    pathForType() {
        return 'employees';
    }
});
