import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let Student1 = {
  name: "Camilla Sarraf-Mueller",
  grade: "Grade 1",
  absent: 0,
  tardy: 5,
  teacher: "Melinda Moore",
  reportPeriod: "September 5, 2019 - January 15, 2020",

  subjects: [
    {
      title: "Behavior and Work Habits",
      blurb: "",
      winterComments:
        "Tania needs a bit of work. She plays well with others when she wants but is very particular about who she plays with and whether or not she will participate in group activities. Tania is a fast talker. She can out-talk most of the children in the class and usually does. This makes her popular and unpopular at the same time. We are working on Tania’s listening and sharing skills. She is a quick learner and often is way ahead of the other students in grasping difficult content. We enjoy Tania quite a bit.",
      springComments: "",
      checklist: [
        {
          name: "Behavior",
          items: [
            {
              description: "Relates well with peers",
              winter_score: "I",
              spring_score: "N/A"
            },
            {
              description: "Relates well with adults",
              winter_score: "D",
              spring_score: ""
            },
            {
              description: "Participates in group activities",
              winter_score: "D",
              spring_score: ""
            },
            {
              description: "Demonstrates self-control",
              winter_score: "D",
              spring_score: ""
            },
            {
              description: "Observes class routines",
              winter_score: "D",
              spring_score: ""
            }
          ]
        },
        {
          name: "Work Habits",
          items: [
            {
              description: "Works independently and productively",
              winter_score: "I",
              spring_score: "N/A"
            },
            {
              description: "Cooperates in small group/partnership work",
              winter_score: "D",
              spring_score: ""
            },
            {
              description: "Cooperates in large group work",
              winter_score: "I",
              spring_score: "N/A"
            },
            {
              description: "Is attentive during class instruction",
              winter_score: "D",
              spring_score: ""
            },
            {
              description:
                "Participates during class discussion and activities",
              winter_score: "I",
              spring_score: "N/A"
            },
            {
              description:
                "Is able to repond to the work and the ideas of others",
              winter_score: "D",
              spring_score: ""
            },
            {
              description: "Follows directions",
              winter_score: "I",
              spring_score: "N/A"
            },
            {
              description: "Sustains effort",
              winter_score: "D",
              spring_score: ""
            },
            {
              description: "Organizes and uses materials well",
              winter_score: "I",
              spring_score: "N/A"
            },
            {
              description: "Completes class assignments",
              winter_score: "D",
              spring_score: ""
            }
          ]
        }
      ]
    },
    {
      title: "Language Arts - Writing",
      blurb:
        "Writing work in first grade focuses on children taking all the crative and wonderful ideas that are in their heads and getting them onto paper. Through planning and illustrating, students spend time developing their ideas before beginning their initial drafts. Numerous opportunities are given for both self-directed and structured writing pieces that take the students through each step of the writing process. As students grow as spellers they are encouraged to take risks and use invented spelling, while also applying the sight words and spelling patterns covered in class. Students polish their work a they continue to practice mechanics, handwriting and overall presentation.",
      winterComments:
        "Tania needs a bit of work. She plays well with others when she wants but is very particular about who she plays with and whether or not she will participate in group activities. Tania is a fast talker. She can out-talk most of the children in the class and usually does. This makes her popular and unpopular at the same time. We are working on Tania’s listening and sharing skills. She is a quick learner and often is way ahead of the other students in grasping difficult content. We enjoy Tania quite a bit.",
      springComments: "",
      checklist: [
        {
          name: "Writing",
          items: [
            {
              description:
                "Is able to hold a complete thought and put it into written form",
              spring_score: "I",
              winter_score: ""
            },
            {
              description: "Can read their own writing",
              spring_score: "I",
              winter_score: ""
            },
            {
              description: "Uses writing structure (Beginning, Middle, End)",
              spring_score: "I",
              winter_score: ""
            },
            {
              description: "Is wiling to take risks with phonetic spelling",
              spring_score: "I",
              winter_score: ""
            },
            {
              description: "Correctly spells practiced sight words",
              spring_score: "I",
              winter_score: ""
            },
            {
              description: "Leaves spaced between words",
              spring_score: "I",
              winter_score: ""
            }
          ]
        }
      ]
    }
  ]
};
let Student2 = {
  ...Student1,
  name: "Albert Swanson",
  grade: "GRADE 4",
  tardy: 20,
  teacher: "Maggie Morrison"
};

ReactDOM.render(
  [<App student={Student1} />, <App student={Student2} />],
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
