TXE.Fixtures = {

  projects: [
    {_id: 0, id: 0, name: "First" },
    {_id: 1, id: 1, name: "Second" },
    {_id: 2, id: 2, name: "Third" },
    {_id: 3, id: 3, name: "Fourth" },
    {_id: 4, id: 4, name: "Fifth" }
  ],

  tasks: [
    {_id: 0, id: 0, project_id: 0, title: "First title", url: "pivotaltracker.com/projects/sample?story_id=123412341234", description: "First description", requested_by: "Eduardo Ruiz", owned_by: "Antonio Chavez", labels: "nodejs, backbone, integration"},
    {_id: 1, id: 1, project_id: 0, title: "Second title", url: "pivotaltracker.com/projects/sample?story_id=123412341234", description: "Second description", requested_by: "Narciso Guillen", owned_by: "Eduardo Ruiz", labels: "nodejs, css, integration"},
    {_id: 2, id: 2, project_id: 1, title: "Third title", url: "pivotaltracker.com/projects/sample?story_id=123412341234", description: "Third description", requested_by: "Jaime Gonzalez", owned_by: "Narciso Guillen", labels: "nodejs, passenger, integration"},
    {_id: 3, id: 3, project_id: 1, title: "Fourth title", url: "pivotaltracker.com/projects/sample?story_id=123414341234", description: "Fourth description", requested_by: "Antonio Chavez", owned_by: "Jaime Gonzalez", labels: "nodejs, foundation, integration"},
    {_id: 4, id: 4, project_id: 2, title: "Fifth title", url: "pivotaltracker.com/projects/sample?story_id=123412541234", description: "Fifth description", requested_by: "Victor Chapa", owned_by: "Oscar Vargas", labels: "nodejs, responsive-design, integration"},
    {_id: 5, id: 5, project_id: 2, title: "Sixth title", url: "pivotaltracker.com/projects/sample?story_id=123412641234", description: "Sixth description", requested_by: "Oscar Vargas", owned_by: "Victor Chapa", labels: "nodejs, local-storage, integration"},
    {_id: 6, id: 6, project_id: 3, title: "Seventh title", url: "pivotaltracker.com/projects/sample?story_id=123472341234", description: "Seventh description", requested_by: "Federico Ramallo", owned_by: "Daniel Lopez", labels: "nodejs, mongodb, integration"},
    {_id: 7, id: 7, project_id: 3, title: "Eigth title", url: "pivotaltracker.com/projects/sample?story_id=123412771234", description: "Eigth description", requested_by: "Daniel Gaytan", owned_by: "Federico Ramallo", labels: "nodejs, SCRUM, integration"},
    {_id: 8, id: 8, project_id: 4, title: "Nineth title", url: "pivotaltracker.com/projects/sample?story_id=123412441234", description: "Nineth description", requested_by: "Marco Gallardo", owned_by: "Alejandro Espinoza", labels: "nodejs, extjs, integration"},
    {_id: 9, id: 9, project_id: 4, title: "Tenth title", url: "pivotaltracker.com/projects/sample?story_id=123412344434", description: "Tenth description", requested_by: "Daniel Lopez", owned_by: "Marco Gallardo", labels: "nodejs, MVC, integration"},
    {_id: 10, id: 10, project_id: 4, title: "Eleventh title", url: "pivotaltracker.com/projects/sample?story_id=123412234234", description: "Eleventh description", requested_by: "Marco Guzman", owned_by: "Daniel Gaytan", labels: "nodejs, coffeescript, integration"}
  ],

  games: [
    {_id: 0, id: 0, name: "First game", archived: false, tasks: [0,1]},
    {_id: 1, id: 1, name: "Second game", archived: false, tasks: [2,3]},
    {_id: 2, id: 2, name: "Third game", archived: false, tasks: [4,5]},
    {_id: 3, id: 3, name: "Fourth game", archived: false, tasks: [6,7]},
    {_id: 4, id: 4, name: "Fifth game", archived: false, tasks: [8,9,10]}
  ]

}
