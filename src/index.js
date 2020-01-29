import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let FinalObj = [
  {
    id: "522",
    last_name: "Abrams",
    first_name: "Everett",
    att_from: "Sep 5, 2019",
    att_to: "Jan 15, 2020",
    att_absent: "0",
    att_late: "2",
    hr_teacher: "Jose Ramos",
    assistant_teacher: "Fiona Evans",
    grade_level_current: "1",
    departments: {
      courses: [
        {
          course_name: "Behavior and Work Habits",
          curriculum_blurb: "",
          comment: "",
          standards: [
            {
              standard_name: "Behavior",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_header"
            },
            {
              standard_name: "Relates well with peers",
              standard_value: "D",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Relates well with adults",
              standard_value: "D",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Participates in group activities",
              standard_value: "D",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Demonstrates self-control",
              standard_value: "D",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Observes class routines",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Work Habits",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_header"
            },
            {
              standard_name: "Works independently and productively",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Cooperates in small group/partnership work",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Cooperates in large group work",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Is attentive during class instruction",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Participates during class discussion and activities",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Is able to respond to the work and the ideas of others",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Follows directions",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Sustains effort",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Organizes and uses materials well",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Completes class assignments",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            }
          ]
        },
        {
          course_name: "Language Arts - Reading",
          curriculum_blurb:
            "First grade reading instruction occurs through a wide variety of daily activities that help to develop early decoding skills, oral and written comprehension, fluency, appreciation of fiction and nonfiction and an overall love of books. Through read-alouds and group conversations, students build on their understanding of story structures and text features of different types of books. Students work in small reading groups to practice connecting with the text: predicting, asking questions, and making meaning of what they are reading. During independent reading students are guided toward books that are a good fit for them, so that they may practice reading and strengthen their skills. Through reading and classwork, students continue to develop decoding skills and build up their sight word vocabulary. They also build fluency while they read aloud by focusing on punctuation marks and phrasing.",
          comment: "",
          standards: [
            {
              standard_name: "Engages and participates in read alouds",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Able to discuss and retell stories read aloud",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Engages in independent reading",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Uses a variety of decoding strategies such as picture cues and context",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Knows first grade phonics patterns",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Uses phonetic rules and patterns to decode text",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Knows first grade sight words",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Reads with fluency and automaticity",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Uses punctuation to guide expression and phrasing",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Makes predictions about the story",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Able to discuss and retell stories read independently",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Makes deeper connections (e.g., text-to-self, inferences)",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            }
          ]
        },
        {
          course_name: "Language Arts - Writing",
          curriculum_blurb:
            "Writing work in first grade focuses on children taking all the creative and wonderful ideas that are in their heads and getting them onto paper. Through planning and illustrating, students spend time developing their ideas before beginning their initial drafts. Numerous opportunities are given for both self-directed and structured writing pieces that take the students through each step of the writing process. As students grow as spellers they are encouraged to take risks and use invented spelling, while also applying the sight words and spelling patterns covered in class. Students polish their work as they continue to practice mechanics, handwriting and overall presentation.",
          comment: "",
          standards: [
            {
              standard_name:
                "Is able to hold a complete thought and put it into written form",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Can read their own writing",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Uses writing structure (Beginning, Middle, End)",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Adds descriptive details",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Is willing to take risks with phonetic spelling",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Learning to use spelling patterns in writing (CVC words, blends, digraphs)",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Correctly spells practiced sight words",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Leaves spaces between words",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            }
          ]
        },
        {
          course_name: "Math",
          curriculum_blurb:
            "First grade math occurs throughout the school day, whether it is morning meeting activities, partner games, or guided explorations. Students work to develop their overall number sense by visualizing problems, using manipulatives and organizers, and explaining their thinking through words and pictures. Familiarity with number value comes through activities and projects that involve skip counting, estimating, graphing and sequencing. Children become problem solvers as they practice a variety of strategies to work through context-based story problems and exercise their ability to compute using addition and subtraction. Work with money, time, and geometry occurs throughout the year, both through daily activity work and deeper hands-on explorations, many of which revolve around real world problem solving.",
          comment: "",
          standards: [
            {
              standard_name: "Reads, writes and sequences numbers to 100",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Understands quantity (comparing, estimating, and part-whole relationship)",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Able to skip count accurately by 2's, 5's and 10's",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Able to count backwards from 20",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Identifies coins, their values and equivalencies",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Uses a variety of materials and strategies for problem solving",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Represents thinking using words, numbers and/or pictures",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Knows combinations of 10",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Knows doubles",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Knows how to add on and count back to compute accurately",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Uses a variety of strategies to compute accurately",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Is able to identify and describe patterns in shape and number",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Identifies and describes characteristics of geometric shapes",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Knows how to combine shapes to make other shapes",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Sorts and classifies common attributes",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Collects, creates, and interprets data on a graph",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Tells time to the hour and half hour",
              standard_value: "",
              standard_gradescale: "N, D, I, n/a",
              standard_level: "is_leaf"
            }
          ]
        }
      ]
    }
  }
];
let Student1 = {
  first_name: "Tania",
  last_name: "Miraz",
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

ReactDOM.render(
  [<App student={FinalObj[0]} />],
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
