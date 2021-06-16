const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: '',
            taskListVisible: true
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleTaskList() {
            this.taskListVisible = !this.taskListVisible;
        }
    },
    computed: {
        buttonCaption() {
            return  this.taskListVisible ? 'Hide List' : 'Show List';
        }
    }
    
});
app.mount('#assignment');