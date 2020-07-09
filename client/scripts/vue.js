let chat = new Vue ({
    el: '#chat',
    data: {
        state: 'default',
        header: 'Наш чат',
        newMessage: ''
    },
    methods: {
        saveItem: function() {
            this.items.push({
                label: this.newMessage,
                purchased: false,
            });
            this.newMessage = '';
    },
    changeState: function(newState) {
        this.state = newState;
        this.newItem = '';
    },
})