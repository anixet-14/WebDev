// Nested callbacks = callback hell
getUser(1, function(user) {
    getPosts(user.id, function(posts) {
        getComments(posts[0].id, function(comments) {
            getLikes(comments[0].id, function(likes) {
                console.log("User, posts, comments, likes fetched!");
            });
        });
    });
});
