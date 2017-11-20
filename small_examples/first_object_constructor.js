function Course(title, instructor, published, views){
    this.title = title;
    this.instructor = instructor;
    this.published = published;
    this.views = views;
    this.updateViews = function(){
        return ++this.views;
    }
}

var courses = [
    new Course("js essential", "ulise", true, 0),
    new Course("js essential", "ulise2", true, 0),
    new Course("js essential", "ulise3", true, 0),
];

console.log(courses);
console.log(courses[1].updateViews());