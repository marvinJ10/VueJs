//create a vue component
Vue.component('task-list',{
    template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',

    //data of the sub tasks
    data(){
        return{
            tasks:[
                { task: 'Apply for the Smart DL', complete: true},
                { task: 'Pay the bills', complete: true},
                { task: 'Say No to Ujinga', complete: true},
                { task: 'Practise Every Day', complete: true},
            ]
        }
    }
});
    //The Task itself
Vue.component('task',{
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});