var course = new Object();

// course.title = "JavaScript Essential Training";
// course.instructor = "ulise";
// course.published = true;
// course.views = 0;

course = {
    title: "JavaScript Essential Training",
    instructor: "ulise",
    published: true,
    views: 0,
    updateViews: function(){
        return ++course.views;
    }
}

console.log(course);
console.log("views: " + course.views);
course.updateViews();
console.log("views: " + course.views);

