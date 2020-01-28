import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let Student1 = {
  name: "Tania Miraz",
  grade_level_current: "1",
  absent: 0,
  hr_teacher: "Melinda Moore",
  reportPeriod: "WINTER 2019-2020",
  att_from: "September 5,2019",
  att_to: "January 15,2020",
  departments: [
    {
      name: "Other",
      courses: [
        {
          course_name: "Behavior and Work Habits",
          curriculum_blurb: "",
          winterComments: `<p>Tania needs a bit of work. She plays well with others when she wants but is very particular about who she plays with and whether or not she will participate in group activities. Tania is a fast talker. She can out-talk most of the children in the class and usually does. This makes her popular and unpopular at the same time. We are working on Tania’s listening and sharing skills. She is a quick learner and often is way ahead of the other students in grasping difficult content. We enjoy Tania quite a bit.</p>
        <p>This is an example of a second paragraph so we can test that it'll render it correctly, since these will be a little bit long, it is using dangerouslySetHTML to render the content</p>`,
          springComments: "",
          standards: [
            {
              standard_name: "Behavior",
              standard_value: "",
              standard_gradescale: "R,O,U,C,NA",
              standard_level: "is_header",
              description: "Relates well with peers",
              scale: "checklist",
              standard_value: "U"
            },
            {
              standard_name: "Relates well with adults",
              standard_level: "is_leaf",
              scale: "checklist",
              standard_value: "U",
              spring_score: ""
            },
            {
              standard_name: "Participates in group activities",
              standard_level: "is_leaf",
              scale: "checklist",
              standard_value: "O",
              spring_score: "O"
            },
            {
              standard_name: "Demonstrates self-control",
              standard_level: "is_leaf",
              scale: "checklist",
              standard_value: "U",
              spring_score: "R"
            },
            {
              standard_name: "Observes class routines",
              standard_level: "is_leaf",
              scale: "checklist",
              standard_value: "U",
              spring_score: "R"
            },
            {
              standard_name: "Works independently and productively",
              standard_level: "is_leaf",
              scale: "checklist",
              standard_value: "U",
              spring_score: "R"
            },
            {
              standard_name: "Cooperates in small group/partnership work",
              standard_level: "is_leaf",
              scale: "checklist",
              standard_value: "U",
              spring_score: "R"
            },
            {
              standard_name: "Cooperates in large group work",
              standard_level: "is_leaf",
              scale: "checklist",
              standard_value: "U",
              spring_score: "R"
            },
            {
              standard_name: "Work Habits",
              standard_level: "is_header",
              scale: "checklist",
              standard_value: "U",
              spring_score: "R"
            },
            {
              standard_name:
                "An example of an item that is only evaluated in spring",
              standard_level: "is_leaf",

              scale: "checklist",
              standard_value: "",
              spring_score: "R"
            },

            {
              standard_name:
                "An example of an item that is only evaluated in winter",
              standard_level: "is_leaf",

              scale: "checklist",
              standard_value: "R",
              spring_score: ""
            },
            {
              standard_name:
                "An example of an item whose description is extremely long, causing it to bleed into the second line",
              standard_level: "is_leaf",

              scale: "checklist",
              standard_value: "U",
              spring_score: "C"
            },

            {
              standard_name:
                "An example of a raw score item only evaluted in winter",
              standard_level: "is_leaf",

              scale: "percent",
              standard_value: "80%",
              spring_score: ""
            },
            {
              standard_name:
                "An example of a raw score item only evaluated in spring",
              standard_level: "is_leaf",

              scale: "percent",
              standard_value: "",
              spring_score: "100%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            },
            {
              standard_name: "An example of a raw score",
              standard_level: "is_leaf",
              scale: "percent",
              standard_value: "50%",
              spring_score: "82%"
            }
          ]
        },
        {
          course_name: "Language Arts - Writing",
          curriculum_blurb:
            "Writing work in first grade focuses on children taking all the crative and wonderful ideas that are in their heads and getting them onto paper. Through planning and illustrating, students spend time developing their ideas before beginning their initial drafts. Numerous opportunities are given for both self-directed and structured writing pieces that take the students through each step of the writing process. As students grow as spellers they are encouraged to take risks and use invented spelling, while also applying the sight words and spelling patterns covered in class. Students polish their work a they continue to practice mechanics, handwriting and overall presentation.",
          winterComments:
            "Tania needs a bit of work. She plays well with others when she wants but is very particular about who she plays with and whether or not she will participate in group activities. Tania is a fast talker. She can out-talk most of the children in the class and usually does. This makes her popular and unpopular at the same time. We are working on Tania’s listening and sharing skills. She is a quick learner and often is way ahead of the other students in grasping difficult content. We enjoy Tania quite a bit.",
          springComments: "",
          standards: [
            {
              standard_name:
                "Is able to hold a complete thought and put it into written form",
              standard_level: "is_leaf",

              spring_score: "I",
              scale: "checklist",
              standard_value: ""
            },
            {
              standard_name: "Can read their own writing",
              standard_level: "is_leaf",
              spring_score: "I",
              scale: "checklist",
              standard_value: ""
            },
            {
              standard_name: "Uses writing structure (Beginning, Middle, End)",
              standard_level: "is_leaf",
              spring_score: "I",
              scale: "checklist",
              standard_value: ""
            },
            {
              standard_name: "Is wiling to take risks with phonetic spelling",
              standard_level: "is_leaf",
              spring_score: "I",
              scale: "checklist",
              standard_value: ""
            },
            {
              standard_name: "Correctly spells practiced sight words",
              standard_level: "is_leaf",
              spring_score: "I",
              scale: "checklist",
              standard_value: ""
            },
            {
              standard_name: "Leaves spaced between words",
              standard_level: "is_leaf",
              spring_score: "I",
              scale: "checklist",
              standard_value: ""
            }
          ]
        }
      ]
    }
  ]
};

ReactDOM.render([<App student={Student1} />], document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
