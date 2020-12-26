const strings = {
     onboarding: {
          skip: "SKIP",
          board1: {
               header: "We’re you partner from day one",
               subheader: "All in one",
               text: "Studia offers course delivery tools that are simple to use and powerful in practice"
          },
          board2: {
               header: "Hassle-free of papers mess",
               subheader: "Digitizing",
               text: "Set yourself free for the new era of digitization, everything should be automated"
          },
          board3: {
               header: "Bring life to your course",
               subheader: "Interactivity",
               text: "Analytics and tools to help you being aware of your students and teacher assistants progress"
          },
     },
     profile: {
          editeprofile: {
               name: "Name",
               desc: "Description ( Brief bio )",
               university: "University",
               collage: "Collage",
               gender: "Gender",
               button: "UPDATE",
          },
          changepassword: {
               header: "Please type your old and new password below",
               oldpassword: 'your old password',
               newpassword: 'your new password',
               oldpass: "Old password",
               newpass: "New password",
               repass: "Re-type new password",
               button: "Change",
          },
          profileScreen: {
               info: {
                    header: "Dr Name",
                    text: "any thing any thingany thingany thingany thingany thing",
                    sub: "Helwan University  Cairo-Egypt"
               },
               activity: {
                    info1: "Answered",
                    info2: "Asked",
                    info3: "Liked",
               },
               button: 'Edite Profile',
               yourinfo: "Your Info",
               change: "Change Password",
          },
     },
     login: {
          header: "Login to your account",
          passAlert: "The password is not correct",
          emailAlert: "The email is not correct",
          email: 'Email Address',
          password: 'Password',
          emailholder: 'your email',
          passwordholder: 'your password',
          loginBtn: 'LOGIN',
          forgot: 'Forgot Your Password?',
          remember: 'Remember me'
     },
     forgot: {
          header: 'Oops!',
          subHeader: 'Please put your email below to send you a reset link',
          email: 'Email Address',
          sendBtn: 'SEND'
     },
     home: {
          onGoing: "Ongoing lectures/sections",
     },
     supject: {
          taps: {
               tap1: "STATISTICS",
               tap2: "ASSISTANTS",
               tap3: "PROJECT",
          },
          statistic: {
               info: {
                    info1: "Missed Sections",
                    info2: "Missed Lectures",
                    info3: "Teacher Assistants",
                    info4: "Enrolled Students",
               },
               card1: {
                    header: "Lecatures Statistic ( This Month )",
                    circles: {
                         circle1: "Absents",
                         circle2: "Attendants",
                         circle3: "Circles",
                    }
               },
               card2: {
                    header: "Sections Statistic ( This Month )",
                    circles: {
                         circle1: "Absents",
                         circle2: "Attendants",
                         circle3: "Circles",
                    }
               },
          },
          assistant: "[ Assistant Name ]",
          Projects: {
               info: {
                    info1: "All Teams",
                    info2: "Team Members",
                    info3: "Project Phases",
               },
               card1: {
                    header: "Project phase 1",
                    circles: {
                         circle1: "Absent Teams",
                         circle2: "Attendants Teams",
                         circle3: "Delayed Teams",
                    }
               },
               card2: {
                    header: "Project phase 2",
                    circles: {
                         circle1: "Absent Teams",
                         circle2: "Attendants Teams",
                         circle3: "Delayed Teams",
                    }
               },
          },
          assistantprofile: {
               button: "Remove",
               info: {
                    info1: "Missed Sections",
                    info2: "Enrolied Students",
               },
               card1: {
                    header: "Sections Statistic ( This Month )",
                    circles: {
                         circle1: "Absents",
                         circle2: "Attendants",
                         circle3: "Circles",
                    }
               },
          }
     },
     circle: {
          name: "Circle Name",
          button: "23 Enrolled",
          student: {
               name: "[ Student Name ]",
               id: "[ Student id ]",
          },
          addnew: {
               label: "Circle Name",
               timer: "Timer",
               warn: "You could choose a time to force a circle close at automatically.",
               button: "Next",
          },
          info: {
               name: "[ Circle Name ]",
               warn: "Your circle is broadcasted and students are ready to connect",
               card1: {
                    header: "Time Frame",
                    sub: "Mins",
               },
               card2: {
                    header: "Student connected",
                    sub: "Students",
               },
          }
     },
     invetation: {
          header: "Course Invitation",
          body: "You have been invited to join [course name] by professor [name]",
          button1: "Decline",
          button2: "Accept",
     },
     menu: {
          name: "Dr. Name",
          college: "Professor at College name",
          home: "Home",
          ls: "Add section/lecture",
          supjects: "Subjects",
          circles: "Circles",
          addcircle: "Add circle",
          settings: "Settings",
     },
     ls: {
          info: {
               subject: "Subject",
               subjectplaceholder: "Select your Subject",
               location: "Location",
               locationplaceholder: "Location",
          },
          data: {
               day: "wedensday",
               time: "8:15am - 9:30am",
               emtpy: "You don't have any timetables yet",
               button: {
                    header: "Add Timetables",
                    sub: "3 Timetables",
               },
               yourtimetables: "Your Timetables",
          },
          timetable: {
               header: "When do you like this meetup?",
               warn: "You can add multiple time from picker below for only a single day and click save.",
               from: "From",
               to: "To",
               button: "Save",
          }

     },
}



export default strings;
