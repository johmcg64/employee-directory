var HomeView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
    };

    this.render = function() {
        this.el.html(HomeView.template());
        return this;
    };

	//the reason line 14 gets called is because line 6, the reason the findByName function gets called in memory-store.js is because of this line that follows in main.js:
	//this.store = new MemoryStore(function() { self.route(); }); in the initialize function which is the first function that gets called in the program.
    this.findByName = function() {
        store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(HomeView.liTemplate(employees));
        });
    };

    this.initialize();

}

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());