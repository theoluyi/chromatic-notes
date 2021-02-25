import faker from 'faker'
var txtgen = require("txtgen")

// HELPER FUNCTIONS FOR CREATING DATA
const capitalizedSentence = (sentence) => {
  return sentence.split(' ').map( 
    word => (word[0].toUpperCase()) + word.slice(1)
  ).join(' ')
}

const titleFactory = () => {
  let title = faker.random.words()
  if (title.split().length < 2) {
    title = title.concat(`${' ' + faker.random.words()}`)
  }
  return capitalizedSentence(title)
}

const noteTextFactory = () => {
  let numOfGraphs = Math.floor(Math.random() * 6) + 1;
  return txtgen.article([numOfGraphs]);
}

const noteIdFactory = () => (Math.floor(Math.random() * 100) + 1)

export const noteFactory = () => {
  return {
    note_id: noteIdFactory(),
    note_title: titleFactory(),
    date_created: "2010-04-23T18:25:43.511Z",
    note_text: noteTextFactory()
  }
}

// console.log(noteFactory())

const notesArrayFactory = () => {
  let numOfNotes = Math.floor(Math.random() * 10) + 1;
  let notesArray = []
  while (numOfNotes) {
    notesArray.push(noteFactory());
    --numOfNotes
  }
  return notesArray
}

var notebooks = [
  {
    name: "Dark Blue",
    color: "dark-blue",
    notes: notesArrayFactory()
  },
  {
    name: "Dark Red",
    color: "dark-red",
    notes: notesArrayFactory()
  },
  {
    name: "Dark Green",
    color: "dark-green",
    notes: notesArrayFactory()
  },
  {
    name: "Blue",
    color: "blue",
    notes: notesArrayFactory()
  },
  {
    name: "Red",
    color: "red",
    notes: notesArrayFactory()
  },
  {
    name: "Green",
    color: "green",
    notes: notesArrayFactory()
  },
  {
    name: "Light Blue",
    color: "light-blue",
    notes: notesArrayFactory()
  },
  {
    name: "Light Red",
    color: "light-red",
    notes: notesArrayFactory()
  },
  {
    name: "Light Green",
    color: "light-green",
    notes: notesArrayFactory()
  },
];

// const oldCopyOfNotebooks = [
//   {
//     name: "Dark Blue",
//     color: "dark-blue",
//     notes: notesArrayFactory()
//   },
//   {
//     name: "Dark Red",
//     color: "dark-red",
//     notes: notesArrayFactory()
//   },
//   {
//     name: "Dark Green",
//     color: "dark-green",
//     notes: [
//       {
//         note_id: 1,
//         note_title: "Note 1: PostgreSQL (from Wikipedia)",
//         date_created: "2011-04-23T18:25:43.511Z",
//         note_text:
//           "PostgreSQL (/ˈpoʊstɡrɛs ˌkjuː ˈɛl/),[12] also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.[13][14] In 1996, the project was renamed to PostgreSQL to reflect its support for SQL. After a review in 2007, the development team decided to keep the name PostgreSQL and the alias Postgres.[15] PostgreSQL features transactions with Atomicity, Consistency, Isolation, Durability (ACID) properties, automatically updatable views, materialized views, triggers, foreign keys, and stored procedures.[16] It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server,[17][18][19] and is also available for Linux, FreeBSD, OpenBSD, and Windows.",
//       },
//       {
//         note_id: 2,
//         note_title: "Note 2: Linux (from Wikipedia)",
//         date_created: "2012-04-23T18:25:43.511Z",
//         note_text:
//           "Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system.[20] Because of the dominance of Android on smartphones, Linux also has the largest installed base of all general-purpose operating systems.[21][22][23] Although it is used by only around 2.3 percent of desktop computers,[24][25] the Chromebook, which runs the Linux kernel-based Chrome OS, dominates the US K–12 education market and represents nearly 20 percent of sub-$300 notebook sales in the US.[26] Linux is the leading operating system on servers (over 96.4% of the top 1 million web servers' operating systems are Linux),[27] leads other big iron systems such as mainframe computers, and is the only OS used on TOP500 supercomputers (since November 2017, having gradually eliminated all competitors).[28][29][30] Linux also runs on embedded systems, i.e. devices whose operating system is typically built into the firmware and is highly tailored to the system. This includes routers, automation controls, smart home technology (like Google Nest),[31] televisions (Samsung and LG Smart TVs use Tizen and WebOS, respectively),[32][33][34] automobiles (for example, Tesla, Audi, Mercedes-Benz, Hyundai, and Toyota all rely on Linux),[35] digital video recorders, video game consoles, and smartwatches.[36] The Falcon 9's and the Dragon 2's avionics use a customized version of Linux.[37] Linux is one of the most prominent examples of free and open-source software collaboration. The source code may be used, modified and distributed commercially or non-commercially by anyone under the terms of its respective licenses, such as the GNU General Public License.[19] 90% of all cloud infrastructure is powered by Linux including supercomputers and cloud providers.[38] 74% of smartphones in the world are Linux-based.[39]",
//       },
//       {
//         note_id: 3,
//         note_title: "Note 3: LAMP (Software Bundle) (from Wikipedia)",
//         date_created: "2013-04-23T18:25:43.511Z",
//         note_text:
//           "LAMP (Linux, Apache, MySQL, PHP/Perl/Python) is a very common example of a web service stack, named as an acronym of the names of its original four open-source components: the Linux operating system, the Apache HTTP Server, the MySQL relational database management system (RDBMS), and the PHP programming language. The LAMP components are largely interchangeable and not limited to the original selection. As a solution stack, LAMP is suitable for building dynamic web sites and web applications.[1] Since its creation, the LAMP model has been adapted to other componentry, though typically consisting of free and open-source software. For example, an equivalent installation on the Microsoft Windows family of operating systems is known as WAMP and an equivalent installation on macOS is known as MAMP.",
//       },
//       {
//         note_id: 4,
//         note_title: "Note 4: Web Service (from Wikipedia)",
//         date_created: "2014-04-23T18:25:43.511Z",
//         note_text:
//           "Web service From Wikipedia, the free encyclopedia Jump to navigationJump to search The term Web service (WS) is either: a service offered by an electronic device to another electronic device, communicating with each other via the World Wide Web, or a server running on a computer device, listening for requests at a particular port over a network, serving web documents (HTML, JSON, XML, images), and creating[clarification needed] web applications services, which serve in solving specific domain problems over the Web (WWW, Internet, HTTP) In a Web service a Web technology such as HTTP is used for transferring machine-readable file formats such as XML and JSON. In practice, a web service commonly provides an object-oriented Web-based interface to a database server, utilized for example by another Web server, or by a mobile app, that provides a user interface to the end-user. Many organizations that provide data in formatted HTML pages will also provide that data on their server as XML or JSON, often through a Web service to allow syndication, for example, Wikipedia's Export. Another application offered to the end-user may be a mashup, where a Web server consumes several Web services at different machines and compiles the content into one user interface.",
//       },
//     ],
//   },
//   {
//     name: "Blue",
//     color: "blue",
//     notes: [
//       {
//         note_id: 1,
//         note_title: "Note 1: PostgreSQL (from Wikipedia)",
//         date_created: "2011-04-23T18:25:43.511Z",
//         note_text:
//           "PostgreSQL (/ˈpoʊstɡrɛs ˌkjuː ˈɛl/),[12] also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.[13][14] In 1996, the project was renamed to PostgreSQL to reflect its support for SQL. After a review in 2007, the development team decided to keep the name PostgreSQL and the alias Postgres.[15] PostgreSQL features transactions with Atomicity, Consistency, Isolation, Durability (ACID) properties, automatically updatable views, materialized views, triggers, foreign keys, and stored procedures.[16] It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server,[17][18][19] and is also available for Linux, FreeBSD, OpenBSD, and Windows.",
//       },
//       {
//         note_id: 2,
//         note_title: "Note 2: Linux (from Wikipedia)",
//         date_created: "2012-04-23T18:25:43.511Z",
//         note_text:
//           "Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system.[20] Because of the dominance of Android on smartphones, Linux also has the largest installed base of all general-purpose operating systems.[21][22][23] Although it is used by only around 2.3 percent of desktop computers,[24][25] the Chromebook, which runs the Linux kernel-based Chrome OS, dominates the US K–12 education market and represents nearly 20 percent of sub-$300 notebook sales in the US.[26] Linux is the leading operating system on servers (over 96.4% of the top 1 million web servers' operating systems are Linux),[27] leads other big iron systems such as mainframe computers, and is the only OS used on TOP500 supercomputers (since November 2017, having gradually eliminated all competitors).[28][29][30] Linux also runs on embedded systems, i.e. devices whose operating system is typically built into the firmware and is highly tailored to the system. This includes routers, automation controls, smart home technology (like Google Nest),[31] televisions (Samsung and LG Smart TVs use Tizen and WebOS, respectively),[32][33][34] automobiles (for example, Tesla, Audi, Mercedes-Benz, Hyundai, and Toyota all rely on Linux),[35] digital video recorders, video game consoles, and smartwatches.[36] The Falcon 9's and the Dragon 2's avionics use a customized version of Linux.[37] Linux is one of the most prominent examples of free and open-source software collaboration. The source code may be used, modified and distributed commercially or non-commercially by anyone under the terms of its respective licenses, such as the GNU General Public License.[19] 90% of all cloud infrastructure is powered by Linux including supercomputers and cloud providers.[38] 74% of smartphones in the world are Linux-based.[39]",
//       },
//       {
//         note_id: 3,
//         note_title: "Note 3: LAMP (Software Bundle) (from Wikipedia)",
//         date_created: "2013-04-23T18:25:43.511Z",
//         note_text:
//           "LAMP (Linux, Apache, MySQL, PHP/Perl/Python) is a very common example of a web service stack, named as an acronym of the names of its original four open-source components: the Linux operating system, the Apache HTTP Server, the MySQL relational database management system (RDBMS), and the PHP programming language. The LAMP components are largely interchangeable and not limited to the original selection. As a solution stack, LAMP is suitable for building dynamic web sites and web applications.[1] Since its creation, the LAMP model has been adapted to other componentry, though typically consisting of free and open-source software. For example, an equivalent installation on the Microsoft Windows family of operating systems is known as WAMP and an equivalent installation on macOS is known as MAMP.",
//       },
//       {
//         note_id: 4,
//         note_title: "Note 4: Web Service (from Wikipedia)",
//         date_created: "2014-04-23T18:25:43.511Z",
//         note_text:
//           "Web service From Wikipedia, the free encyclopedia Jump to navigationJump to search The term Web service (WS) is either: a service offered by an electronic device to another electronic device, communicating with each other via the World Wide Web, or a server running on a computer device, listening for requests at a particular port over a network, serving web documents (HTML, JSON, XML, images), and creating[clarification needed] web applications services, which serve in solving specific domain problems over the Web (WWW, Internet, HTTP) In a Web service a Web technology such as HTTP is used for transferring machine-readable file formats such as XML and JSON. In practice, a web service commonly provides an object-oriented Web-based interface to a database server, utilized for example by another Web server, or by a mobile app, that provides a user interface to the end-user. Many organizations that provide data in formatted HTML pages will also provide that data on their server as XML or JSON, often through a Web service to allow syndication, for example, Wikipedia's Export. Another application offered to the end-user may be a mashup, where a Web server consumes several Web services at different machines and compiles the content into one user interface.",
//       },
//     ],
//   },
//   {
//     name: "Red",
//     color: "red",
//     notes: [
//       {
//         note_id: 1,
//         note_title: "Note 1: PostgreSQL (from Wikipedia)",
//         date_created: "2011-04-23T18:25:43.511Z",
//         note_text:
//           "PostgreSQL (/ˈpoʊstɡrɛs ˌkjuː ˈɛl/),[12] also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.[13][14] In 1996, the project was renamed to PostgreSQL to reflect its support for SQL. After a review in 2007, the development team decided to keep the name PostgreSQL and the alias Postgres.[15] PostgreSQL features transactions with Atomicity, Consistency, Isolation, Durability (ACID) properties, automatically updatable views, materialized views, triggers, foreign keys, and stored procedures.[16] It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server,[17][18][19] and is also available for Linux, FreeBSD, OpenBSD, and Windows.",
//       },
//       {
//         note_id: 2,
//         note_title: "Note 2: Linux (from Wikipedia)",
//         date_created: "2012-04-23T18:25:43.511Z",
//         note_text:
//           "Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system.[20] Because of the dominance of Android on smartphones, Linux also has the largest installed base of all general-purpose operating systems.[21][22][23] Although it is used by only around 2.3 percent of desktop computers,[24][25] the Chromebook, which runs the Linux kernel-based Chrome OS, dominates the US K–12 education market and represents nearly 20 percent of sub-$300 notebook sales in the US.[26] Linux is the leading operating system on servers (over 96.4% of the top 1 million web servers' operating systems are Linux),[27] leads other big iron systems such as mainframe computers, and is the only OS used on TOP500 supercomputers (since November 2017, having gradually eliminated all competitors).[28][29][30] Linux also runs on embedded systems, i.e. devices whose operating system is typically built into the firmware and is highly tailored to the system. This includes routers, automation controls, smart home technology (like Google Nest),[31] televisions (Samsung and LG Smart TVs use Tizen and WebOS, respectively),[32][33][34] automobiles (for example, Tesla, Audi, Mercedes-Benz, Hyundai, and Toyota all rely on Linux),[35] digital video recorders, video game consoles, and smartwatches.[36] The Falcon 9's and the Dragon 2's avionics use a customized version of Linux.[37] Linux is one of the most prominent examples of free and open-source software collaboration. The source code may be used, modified and distributed commercially or non-commercially by anyone under the terms of its respective licenses, such as the GNU General Public License.[19] 90% of all cloud infrastructure is powered by Linux including supercomputers and cloud providers.[38] 74% of smartphones in the world are Linux-based.[39]",
//       },
//       {
//         note_id: 3,
//         note_title: "Note 3: LAMP (Software Bundle) (from Wikipedia)",
//         date_created: "2013-04-23T18:25:43.511Z",
//         note_text:
//           "LAMP (Linux, Apache, MySQL, PHP/Perl/Python) is a very common example of a web service stack, named as an acronym of the names of its original four open-source components: the Linux operating system, the Apache HTTP Server, the MySQL relational database management system (RDBMS), and the PHP programming language. The LAMP components are largely interchangeable and not limited to the original selection. As a solution stack, LAMP is suitable for building dynamic web sites and web applications.[1] Since its creation, the LAMP model has been adapted to other componentry, though typically consisting of free and open-source software. For example, an equivalent installation on the Microsoft Windows family of operating systems is known as WAMP and an equivalent installation on macOS is known as MAMP.",
//       },
//       {
//         note_id: 4,
//         note_title: "Note 4: Web Service (from Wikipedia)",
//         date_created: "2014-04-23T18:25:43.511Z",
//         note_text:
//           "Web service From Wikipedia, the free encyclopedia Jump to navigationJump to search The term Web service (WS) is either: a service offered by an electronic device to another electronic device, communicating with each other via the World Wide Web, or a server running on a computer device, listening for requests at a particular port over a network, serving web documents (HTML, JSON, XML, images), and creating[clarification needed] web applications services, which serve in solving specific domain problems over the Web (WWW, Internet, HTTP) In a Web service a Web technology such as HTTP is used for transferring machine-readable file formats such as XML and JSON. In practice, a web service commonly provides an object-oriented Web-based interface to a database server, utilized for example by another Web server, or by a mobile app, that provides a user interface to the end-user. Many organizations that provide data in formatted HTML pages will also provide that data on their server as XML or JSON, often through a Web service to allow syndication, for example, Wikipedia's Export. Another application offered to the end-user may be a mashup, where a Web server consumes several Web services at different machines and compiles the content into one user interface.",
//       },
//     ],
//   },
//   {
//     name: "Green",
//     color: "green",
//     notes: [
//       {
//         note_id: 1,
//         note_title: "Note 1: PostgreSQL (from Wikipedia)",
//         date_created: "2011-04-23T18:25:43.511Z",
//         note_text:
//           "PostgreSQL (/ˈpoʊstɡrɛs ˌkjuː ˈɛl/),[12] also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.[13][14] In 1996, the project was renamed to PostgreSQL to reflect its support for SQL. After a review in 2007, the development team decided to keep the name PostgreSQL and the alias Postgres.[15] PostgreSQL features transactions with Atomicity, Consistency, Isolation, Durability (ACID) properties, automatically updatable views, materialized views, triggers, foreign keys, and stored procedures.[16] It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server,[17][18][19] and is also available for Linux, FreeBSD, OpenBSD, and Windows.",
//       },
//       {
//         note_id: 2,
//         note_title: "Note 2: Linux (from Wikipedia)",
//         date_created: "2012-04-23T18:25:43.511Z",
//         note_text:
//           "Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system.[20] Because of the dominance of Android on smartphones, Linux also has the largest installed base of all general-purpose operating systems.[21][22][23] Although it is used by only around 2.3 percent of desktop computers,[24][25] the Chromebook, which runs the Linux kernel-based Chrome OS, dominates the US K–12 education market and represents nearly 20 percent of sub-$300 notebook sales in the US.[26] Linux is the leading operating system on servers (over 96.4% of the top 1 million web servers' operating systems are Linux),[27] leads other big iron systems such as mainframe computers, and is the only OS used on TOP500 supercomputers (since November 2017, having gradually eliminated all competitors).[28][29][30] Linux also runs on embedded systems, i.e. devices whose operating system is typically built into the firmware and is highly tailored to the system. This includes routers, automation controls, smart home technology (like Google Nest),[31] televisions (Samsung and LG Smart TVs use Tizen and WebOS, respectively),[32][33][34] automobiles (for example, Tesla, Audi, Mercedes-Benz, Hyundai, and Toyota all rely on Linux),[35] digital video recorders, video game consoles, and smartwatches.[36] The Falcon 9's and the Dragon 2's avionics use a customized version of Linux.[37] Linux is one of the most prominent examples of free and open-source software collaboration. The source code may be used, modified and distributed commercially or non-commercially by anyone under the terms of its respective licenses, such as the GNU General Public License.[19] 90% of all cloud infrastructure is powered by Linux including supercomputers and cloud providers.[38] 74% of smartphones in the world are Linux-based.[39]",
//       },
//       {
//         note_id: 3,
//         note_title: "Note 3: LAMP (Software Bundle) (from Wikipedia)",
//         date_created: "2013-04-23T18:25:43.511Z",
//         note_text:
//           "LAMP (Linux, Apache, MySQL, PHP/Perl/Python) is a very common example of a web service stack, named as an acronym of the names of its original four open-source components: the Linux operating system, the Apache HTTP Server, the MySQL relational database management system (RDBMS), and the PHP programming language. The LAMP components are largely interchangeable and not limited to the original selection. As a solution stack, LAMP is suitable for building dynamic web sites and web applications.[1] Since its creation, the LAMP model has been adapted to other componentry, though typically consisting of free and open-source software. For example, an equivalent installation on the Microsoft Windows family of operating systems is known as WAMP and an equivalent installation on macOS is known as MAMP.",
//       },
//       {
//         note_id: 4,
//         note_title: "Note 4: Web Service (from Wikipedia)",
//         date_created: "2014-04-23T18:25:43.511Z",
//         note_text:
//           "Web service From Wikipedia, the free encyclopedia Jump to navigationJump to search The term Web service (WS) is either: a service offered by an electronic device to another electronic device, communicating with each other via the World Wide Web, or a server running on a computer device, listening for requests at a particular port over a network, serving web documents (HTML, JSON, XML, images), and creating[clarification needed] web applications services, which serve in solving specific domain problems over the Web (WWW, Internet, HTTP) In a Web service a Web technology such as HTTP is used for transferring machine-readable file formats such as XML and JSON. In practice, a web service commonly provides an object-oriented Web-based interface to a database server, utilized for example by another Web server, or by a mobile app, that provides a user interface to the end-user. Many organizations that provide data in formatted HTML pages will also provide that data on their server as XML or JSON, often through a Web service to allow syndication, for example, Wikipedia's Export. Another application offered to the end-user may be a mashup, where a Web server consumes several Web services at different machines and compiles the content into one user interface.",
//       },
//     ],
//   },
//   {
//     name: "Light Blue",
//     color: "light-blue",
//     notes: [
//       {
//         note_id: 1,
//         note_title: "Note 1: PostgreSQL (from Wikipedia)",
//         date_created: "2011-04-23T18:25:43.511Z",
//         note_text:
//           "PostgreSQL (/ˈpoʊstɡrɛs ˌkjuː ˈɛl/),[12] also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.[13][14] In 1996, the project was renamed to PostgreSQL to reflect its support for SQL. After a review in 2007, the development team decided to keep the name PostgreSQL and the alias Postgres.[15] PostgreSQL features transactions with Atomicity, Consistency, Isolation, Durability (ACID) properties, automatically updatable views, materialized views, triggers, foreign keys, and stored procedures.[16] It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server,[17][18][19] and is also available for Linux, FreeBSD, OpenBSD, and Windows.",
//       },
//       {
//         note_id: 2,
//         note_title: "Note 2: Linux (from Wikipedia)",
//         date_created: "2012-04-23T18:25:43.511Z",
//         note_text:
//           "Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system.[20] Because of the dominance of Android on smartphones, Linux also has the largest installed base of all general-purpose operating systems.[21][22][23] Although it is used by only around 2.3 percent of desktop computers,[24][25] the Chromebook, which runs the Linux kernel-based Chrome OS, dominates the US K–12 education market and represents nearly 20 percent of sub-$300 notebook sales in the US.[26] Linux is the leading operating system on servers (over 96.4% of the top 1 million web servers' operating systems are Linux),[27] leads other big iron systems such as mainframe computers, and is the only OS used on TOP500 supercomputers (since November 2017, having gradually eliminated all competitors).[28][29][30] Linux also runs on embedded systems, i.e. devices whose operating system is typically built into the firmware and is highly tailored to the system. This includes routers, automation controls, smart home technology (like Google Nest),[31] televisions (Samsung and LG Smart TVs use Tizen and WebOS, respectively),[32][33][34] automobiles (for example, Tesla, Audi, Mercedes-Benz, Hyundai, and Toyota all rely on Linux),[35] digital video recorders, video game consoles, and smartwatches.[36] The Falcon 9's and the Dragon 2's avionics use a customized version of Linux.[37] Linux is one of the most prominent examples of free and open-source software collaboration. The source code may be used, modified and distributed commercially or non-commercially by anyone under the terms of its respective licenses, such as the GNU General Public License.[19] 90% of all cloud infrastructure is powered by Linux including supercomputers and cloud providers.[38] 74% of smartphones in the world are Linux-based.[39]",
//       },
//       {
//         note_id: 3,
//         note_title: "Note 3: LAMP (Software Bundle) (from Wikipedia)",
//         date_created: "2013-04-23T18:25:43.511Z",
//         note_text:
//           "LAMP (Linux, Apache, MySQL, PHP/Perl/Python) is a very common example of a web service stack, named as an acronym of the names of its original four open-source components: the Linux operating system, the Apache HTTP Server, the MySQL relational database management system (RDBMS), and the PHP programming language. The LAMP components are largely interchangeable and not limited to the original selection. As a solution stack, LAMP is suitable for building dynamic web sites and web applications.[1] Since its creation, the LAMP model has been adapted to other componentry, though typically consisting of free and open-source software. For example, an equivalent installation on the Microsoft Windows family of operating systems is known as WAMP and an equivalent installation on macOS is known as MAMP.",
//       },
//       {
//         note_id: 4,
//         note_title: "Note 4: Web Service (from Wikipedia)",
//         date_created: "2014-04-23T18:25:43.511Z",
//         note_text:
//           "Web service From Wikipedia, the free encyclopedia Jump to navigationJump to search The term Web service (WS) is either: a service offered by an electronic device to another electronic device, communicating with each other via the World Wide Web, or a server running on a computer device, listening for requests at a particular port over a network, serving web documents (HTML, JSON, XML, images), and creating[clarification needed] web applications services, which serve in solving specific domain problems over the Web (WWW, Internet, HTTP) In a Web service a Web technology such as HTTP is used for transferring machine-readable file formats such as XML and JSON. In practice, a web service commonly provides an object-oriented Web-based interface to a database server, utilized for example by another Web server, or by a mobile app, that provides a user interface to the end-user. Many organizations that provide data in formatted HTML pages will also provide that data on their server as XML or JSON, often through a Web service to allow syndication, for example, Wikipedia's Export. Another application offered to the end-user may be a mashup, where a Web server consumes several Web services at different machines and compiles the content into one user interface.",
//       },
//     ],
//   },
//   {
//     name: "Light Red",
//     color: "light-red",
//     notes: [
//       {
//         note_id: 1,
//         note_title: "Note 1: PostgreSQL (from Wikipedia)",
//         date_created: "2011-04-23T18:25:43.511Z",
//         note_text:
//           "PostgreSQL (/ˈpoʊstɡrɛs ˌkjuː ˈɛl/),[12] also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.[13][14] In 1996, the project was renamed to PostgreSQL to reflect its support for SQL. After a review in 2007, the development team decided to keep the name PostgreSQL and the alias Postgres.[15] PostgreSQL features transactions with Atomicity, Consistency, Isolation, Durability (ACID) properties, automatically updatable views, materialized views, triggers, foreign keys, and stored procedures.[16] It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server,[17][18][19] and is also available for Linux, FreeBSD, OpenBSD, and Windows.",
//       },
//       {
//         note_id: 2,
//         note_title: "Note 2: Linux (from Wikipedia)",
//         date_created: "2012-04-23T18:25:43.511Z",
//         note_text:
//           "Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system.[20] Because of the dominance of Android on smartphones, Linux also has the largest installed base of all general-purpose operating systems.[21][22][23] Although it is used by only around 2.3 percent of desktop computers,[24][25] the Chromebook, which runs the Linux kernel-based Chrome OS, dominates the US K–12 education market and represents nearly 20 percent of sub-$300 notebook sales in the US.[26] Linux is the leading operating system on servers (over 96.4% of the top 1 million web servers' operating systems are Linux),[27] leads other big iron systems such as mainframe computers, and is the only OS used on TOP500 supercomputers (since November 2017, having gradually eliminated all competitors).[28][29][30] Linux also runs on embedded systems, i.e. devices whose operating system is typically built into the firmware and is highly tailored to the system. This includes routers, automation controls, smart home technology (like Google Nest),[31] televisions (Samsung and LG Smart TVs use Tizen and WebOS, respectively),[32][33][34] automobiles (for example, Tesla, Audi, Mercedes-Benz, Hyundai, and Toyota all rely on Linux),[35] digital video recorders, video game consoles, and smartwatches.[36] The Falcon 9's and the Dragon 2's avionics use a customized version of Linux.[37] Linux is one of the most prominent examples of free and open-source software collaboration. The source code may be used, modified and distributed commercially or non-commercially by anyone under the terms of its respective licenses, such as the GNU General Public License.[19] 90% of all cloud infrastructure is powered by Linux including supercomputers and cloud providers.[38] 74% of smartphones in the world are Linux-based.[39]",
//       },
//       {
//         note_id: 3,
//         note_title: "Note 3: LAMP (Software Bundle) (from Wikipedia)",
//         date_created: "2013-04-23T18:25:43.511Z",
//         note_text:
//           "LAMP (Linux, Apache, MySQL, PHP/Perl/Python) is a very common example of a web service stack, named as an acronym of the names of its original four open-source components: the Linux operating system, the Apache HTTP Server, the MySQL relational database management system (RDBMS), and the PHP programming language. The LAMP components are largely interchangeable and not limited to the original selection. As a solution stack, LAMP is suitable for building dynamic web sites and web applications.[1] Since its creation, the LAMP model has been adapted to other componentry, though typically consisting of free and open-source software. For example, an equivalent installation on the Microsoft Windows family of operating systems is known as WAMP and an equivalent installation on macOS is known as MAMP.",
//       },
//       {
//         note_id: 4,
//         note_title: "Note 4: Web Service (from Wikipedia)",
//         date_created: "2014-04-23T18:25:43.511Z",
//         note_text:
//           "Web service From Wikipedia, the free encyclopedia Jump to navigationJump to search The term Web service (WS) is either: a service offered by an electronic device to another electronic device, communicating with each other via the World Wide Web, or a server running on a computer device, listening for requests at a particular port over a network, serving web documents (HTML, JSON, XML, images), and creating[clarification needed] web applications services, which serve in solving specific domain problems over the Web (WWW, Internet, HTTP) In a Web service a Web technology such as HTTP is used for transferring machine-readable file formats such as XML and JSON. In practice, a web service commonly provides an object-oriented Web-based interface to a database server, utilized for example by another Web server, or by a mobile app, that provides a user interface to the end-user. Many organizations that provide data in formatted HTML pages will also provide that data on their server as XML or JSON, often through a Web service to allow syndication, for example, Wikipedia's Export. Another application offered to the end-user may be a mashup, where a Web server consumes several Web services at different machines and compiles the content into one user interface.",
//       },
//     ],
//   },
//   {
//     name: "Light Green",
//     color: "light-green",
//     notes: [
//       {
//         note_id: 1,
//         note_title: "Note 1: PostgreSQL (from Wikipedia)",
//         date_created: "2011-04-23T18:25:43.511Z",
//         note_text:
//           "PostgreSQL (/ˈpoʊstɡrɛs ˌkjuː ˈɛl/),[12] also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.[13][14] In 1996, the project was renamed to PostgreSQL to reflect its support for SQL. After a review in 2007, the development team decided to keep the name PostgreSQL and the alias Postgres.[15] PostgreSQL features transactions with Atomicity, Consistency, Isolation, Durability (ACID) properties, automatically updatable views, materialized views, triggers, foreign keys, and stored procedures.[16] It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server,[17][18][19] and is also available for Linux, FreeBSD, OpenBSD, and Windows.",
//       },
//       {
//         note_id: 2,
//         note_title: "Note 2: Linux (from Wikipedia)",
//         date_created: "2012-04-23T18:25:43.511Z",
//         note_text:
//           "Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system.[20] Because of the dominance of Android on smartphones, Linux also has the largest installed base of all general-purpose operating systems.[21][22][23] Although it is used by only around 2.3 percent of desktop computers,[24][25] the Chromebook, which runs the Linux kernel-based Chrome OS, dominates the US K–12 education market and represents nearly 20 percent of sub-$300 notebook sales in the US.[26] Linux is the leading operating system on servers (over 96.4% of the top 1 million web servers' operating systems are Linux),[27] leads other big iron systems such as mainframe computers, and is the only OS used on TOP500 supercomputers (since November 2017, having gradually eliminated all competitors).[28][29][30] Linux also runs on embedded systems, i.e. devices whose operating system is typically built into the firmware and is highly tailored to the system. This includes routers, automation controls, smart home technology (like Google Nest),[31] televisions (Samsung and LG Smart TVs use Tizen and WebOS, respectively),[32][33][34] automobiles (for example, Tesla, Audi, Mercedes-Benz, Hyundai, and Toyota all rely on Linux),[35] digital video recorders, video game consoles, and smartwatches.[36] The Falcon 9's and the Dragon 2's avionics use a customized version of Linux.[37] Linux is one of the most prominent examples of free and open-source software collaboration. The source code may be used, modified and distributed commercially or non-commercially by anyone under the terms of its respective licenses, such as the GNU General Public License.[19] 90% of all cloud infrastructure is powered by Linux including supercomputers and cloud providers.[38] 74% of smartphones in the world are Linux-based.[39]",
//       },
//       {
//         note_id: 3,
//         note_title: "Note 3: LAMP (Software Bundle) (from Wikipedia)",
//         date_created: "2013-04-23T18:25:43.511Z",
//         note_text:
//           "LAMP (Linux, Apache, MySQL, PHP/Perl/Python) is a very common example of a web service stack, named as an acronym of the names of its original four open-source components: the Linux operating system, the Apache HTTP Server, the MySQL relational database management system (RDBMS), and the PHP programming language. The LAMP components are largely interchangeable and not limited to the original selection. As a solution stack, LAMP is suitable for building dynamic web sites and web applications.[1] Since its creation, the LAMP model has been adapted to other componentry, though typically consisting of free and open-source software. For example, an equivalent installation on the Microsoft Windows family of operating systems is known as WAMP and an equivalent installation on macOS is known as MAMP.",
//       },
//       {
//         note_id: 4,
//         note_title: "Note 4: Web Service (from Wikipedia)",
//         date_created: "2014-04-23T18:25:43.511Z",
//         note_text:
//           "Web service From Wikipedia, the free encyclopedia Jump to navigationJump to search The term Web service (WS) is either: a service offered by an electronic device to another electronic device, communicating with each other via the World Wide Web, or a server running on a computer device, listening for requests at a particular port over a network, serving web documents (HTML, JSON, XML, images), and creating[clarification needed] web applications services, which serve in solving specific domain problems over the Web (WWW, Internet, HTTP) In a Web service a Web technology such as HTTP is used for transferring machine-readable file formats such as XML and JSON. In practice, a web service commonly provides an object-oriented Web-based interface to a database server, utilized for example by another Web server, or by a mobile app, that provides a user interface to the end-user. Many organizations that provide data in formatted HTML pages will also provide that data on their server as XML or JSON, often through a Web service to allow syndication, for example, Wikipedia's Export. Another application offered to the end-user may be a mashup, where a Web server consumes several Web services at different machines and compiles the content into one user interface.",
//       },
//     ],
//   },
// ];

export default notebooks;
