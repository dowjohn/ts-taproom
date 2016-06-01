// var apiKey = require('./../.env').apiKey;

//this function will get from the github api a specific user and return there 30 most recent repos including a link

// exports.getRepos = function(gitName){
//     $.get('https://api.github.com/users/' + gitName + '/repos?access_token=' + apiKey).then(function(response){
//         var arrayRepos = response;
//         arrayRepos.forEach(function(repo) {
//             console.log(repo);
//             $('.outputRepos').append('<li><a href='+ repo.html_url + '>' + repo.name + ': ' + repo.description + '</a></li>');
//         });
//     }).fail(function(error){
//         console.log(error.responseJSON.message);
//     });
// };
