Chromatic Notes
To run this project locally on your own computer,

Clone the project
in the project directory, run npm install, then npm start
open localhost:3000/
that should be it I think?!
About Chromatic Notes
Technologies Used: JavaScript, React, React Hooks, React Router, React Bootstrap, Draft.js, Faker.js, txtgen.js, Plain CSS, Flexbox



Note: this app has no backend at present, so you can edit notes, but notes will regenerate upon page refresh; old notes and changes will not be saved. 



tl;dr version: tagging is a bad organizational structure for note-taking apps. To make folders work even better, I think it will help to return to basics and mimic the look and experience of everyday physical items/data structures like a book, a table of contents, and a page, to give a note-taking app a more intuitive feel and help users locate important notes.





Long Version:

I've been interested in note-taking apps for a while. In 2016 I worked a fairly intense consulting job where information overload was a daily challenge; 50 emails a day, meetings, notebook notes, phone call notes, etc. Many of my co-workers were using Evernote as part or as a main feature of their organization system. Some advocated tags, some notebooks as the basic organizational unit, but nobody seemed too sure.

I went with tags, and to this day, I live with the consequences. My Evernote is the love child of a dumpster fire and a shitstorm. I got a twisted knot of notebooks and tags wrapping around thousands of notes, a shambolic organizational structure, attempting and failing to contain the mess like a constipated boa constrictor.

After reading an article by Thiago Forte called Tagging is Broken: Why the Tagging Concept in Evernote and Everywhere Else Sucks, I finally had my answer for why tagging had failed so miserably.

Since I began coding, I have wanted to build my own note-taking app that tackles this problem that seems to plague Evernote and so many other note-taking apps and organizational features. I find this interesting because it deals not just with how to structure data, but with how to do so in a way that is intuitive to people.

In Chromatic Notes, my goal was to create a simple and intuitive interface that makes one forget about tags entirely and instead approach the placement of notes in an intuitive way. I wanted the notebooks to look like actual books and the notes to look like actual pages in them, so that the experience of writing would feel embodied and physical, tied to a location. Since location is a primary feature of how humans remember things (people ask themselves "where'd I put my car keys?" not "in what category of container did I put my car keys?") I wanted the app to reflect this. It's a simple start, but I'm pleasantly satisfied with it.