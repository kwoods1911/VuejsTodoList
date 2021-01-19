new Vue({
    el: "#vue-app",
    data: {
        name: "Khari",
        job: "Programmer",
        age: 26,
        website: "https://www.youtube.com/",
        websiteTag: '<a href="https://www.youtube.com/">YoutTube2</a>'
    },
    methods: {
        greet: function(time){
            return "Good " + time + " " + this.name;
        },

        test: function(){
            console.log('You clicked me!');
        }
    }

});