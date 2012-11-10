# Hello TangoSource!

## Deploy instructions

### GitHub — [Team][2], [Repo][3]

~~~sh
git clone git@github.com:nko3/tangosource.git
~~~

### Nodejitsu — [More details][5], [Handbook][4]

~~~sh
npm install -g jitsu
jitsu login --username nko3-tangosource --password beYcE/kSw9vb6hs/
jitsu deploy
~~~

## Tips

### Vote KO Widget

![Vote KO widget](http://f.cl.ly/items/1n3g0W0F0G3V0i0d0321/Screen%20Shot%202012-11-04%20at%2010.01.36%20AM.png)

Use our "Vote KO" widget to let from your app directly. Here's the code for
including it in your site:

~~~html
<iframe src="http://nodeknockout.com/iframe/tangosource" frameborder=0 scrolling=no allowtransparency=true width=115 height=25>
</iframe>
~~~

### Tutorials & Free Services

If you're feeling a bit lost about how to get started or what to use, we've
got some [great resources for you](http://nodeknockout.com/resources).

First, we've pulled together a great set of tutorials about some of node's
best and most useful libraries:

* [How to install node and npm](http://blog.nodeknockout.com/post/33857791331/how-to-install-node-npm)
* [Getting started with Express](http://blog.nodeknockout.com/post/34180474119/getting-started-with-express)
* [Real-time communication with Socket.IO](http://blog.nodeknockout.com/post/34243127010/knocking-out-socket-io)
* [Data persistence with Mongoose](http://blog.nodeknockout.com/post/34302423628/getting-started-with-mongoose)
* [OAuth integration using Passport](http://blog.nodeknockout.com/post/34765538605/getting-started-with-passport)
* [Debugging with Node Inspector](http://blog.nodeknockout.com/post/34843655876/debugging-with-node-inspector)
* [and many more](http://nodeknockout.com/resources#tutorials)&hellip;

Also, we've got a bunch of great free services provided by sponsors,
including:

* [MongoLab](http://nodeknockout.com/resources#mongolab) - for Mongo hosting
* [Monitaur](http://nodeknockout.com/resources#monitaur) - for server monitoring
* [Ratchet.io](http://nodeknockout.com/resources#ratchetio) - for exception tracking
* [Teleportd](http://nodeknockout.com/resources#teleportd) - real-time photo streams
* [and more](http://nodeknockout.com/resources#tutorials)&hellip;

## Have fun!

If you have any issues, we're on IRC in #nodeknockout and #nodejitsu on
freenode, email us at <all@nodeknockout.com>, or tweet
[@node_knockout](https://twitter.com/node_knockout).

[2]: https://github.com/organizations/nko3/teams/280815
[3]: https://github.com/nko3/tangosource
[4]: http://handbook.jit.su
[5]: http://blog.nodeknockout.com/post/35279199042/introduction-to-jitsu-deployment

For TANGOSOURCE Team
====================

###API

GET /api/v1/projects
  [{
    _id: 0,
    id: 0,
    name: "name"
  }]

GET /api/v1/projects/:id
    {
      _id: 0,
      id: 0,
      name: "name"
    }

GET /api/v1/projects/:id/tasks
    [{
      _id: 0,
      id: 0,
      project_id: 0,
      title: "",
      url: "",
      description: "",
      requested_by: "",
      owned_by: "",
      labels: ""
    }]

GET /api/v1/projects/:id/tasks/:id
    {
      _id: 0,
      id: 0,
      project_id: 0,
      title: "",
      url: "",
      description: "",
      requested_by: "",
      owned_by: "",
      labels: ""
    }

GET /api/v1/projects/:id/games
    [{
      _id: 0,
      name: "",
      archived: false
    }]

GET /api/v1/projects/:id/games/:id
    {
      _id: 0,
      name: "",
      archived: false,
      tasks: [1, 3, 4]
    }

POST /api/v1/games/new
    {
      name: "",
      project_id: ""
    }

DELETE /api/v1/projects/:id/games/:id
    {
      _id: ""
    }

POST /api/v1/projects/:id/games/add_tasks
    {
      name: ""
    }

=== Branch management policy

There are two important things we need to keep in mind, before start new feature make sure that you are on top of develop, the following steps are exactly for doing that via `git fetch`

  git fetch origin
  git rebase origin/develop
  git checkout -b new_feature

And the last thing is that before open your pull request resolve possible conflicts if there are too many changes in develop, the following steps will help you on doing that

  git checkout your_feature
  git fetch origin
  git rebase develop origin/develop
  git rebase develop
  git push origin your_feature (-f if necessary)

Happy versioning!
