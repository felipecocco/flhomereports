import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let FinalObj = [
  {
    id: "1004",
    last_name: "Acosta",
    first_name: "Kristian",
    att_from: "",
    att_to: "",
    att_absent: "",
    att_late: "",
    hr_teacher: "Dani Cardia and Test Teacher",
    assistant_teacher: "",
    grade_level_current: "5",
    departments: {
      courses: [
        {
          course_name: "Social-Emotional Development",
          curriculum_blurb: "",
          comment:
            "Kristian has transitioned smoothly into 5th grade, and it is a pleasure to have him in class. He is generally attentive to classroom routines, though can easily become distracted and engage in chatty behavior. He is receptive to redirection and is typically able to reorient his attention. Kris connects well with his peers and has a number of friendships in his grade. He collaborates well with his peers, though he can become silly, and he is developing his ability to maintain focus on the task at hand. While Kris is quite reserved and has been slow to open up in class, increasingly he is communicating more with his teachers. Overall, Kris is a valuable member of our classroom community.",
          standards: [
            {
              standard_name:
                "Shows an awareness of and respect for personal space (themselves and others)",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates self-control in structured situations",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates self-control in unstructured situations",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Expresses ideas and feelings with others",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Interacts positively and respectfully with peers",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Interacts positively and respectfully with adults",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates awareness of the perspectives of others",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Shows empathy, kindness, and caring for others",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Attempts to resolve friendship and fairness issues",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Assumes responsibility for own behavior",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Positively impacts school community with ideas and actions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            }
          ]
        },
        {
          course_name: "Approach to Learning",
          curriculum_blurb: "",
          comment:
            "Kristian is a thoughtful and perceptive student we would love to hear more from. We continue to encourage Kris to participate in class. When he does contribute to group discussions, Kris’ comments demonstrate his understanding of the topic at hand. While he does not typically exhibit interest in school assignments, Kris is general diligent in completing his work and able to maintain focus. His homework assignments are completed on time and demonstrate care.",
          standards: [
            {
              standard_name: "Observes daily classroom routines",
              standard_value: "U",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Transitions appropriately between class times",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Keeps belongings, assignments, and homework organized",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Extends learning by using materials with care, purpose, and creativity",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Listens actively during lessons, work times, and discussions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Understands and follows oral directions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Understands and follows written directions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Participates in class discussions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates motivation and takes initiative during work times",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Cooperates, collaborates, and works productively in a group",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Displays flexible thinking and uses a variety of problem-solving strategies",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Seeks assistance when needed",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Responds positively to feedback, support, and redirection",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Sustains focus and engagement during work times",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Applies previous knowledge during lessons, work times, and discussions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            }
          ]
        },
        {
          course_name: "Language Arts",
          curriculum_blurb: "",
          comment: "",
          standards: [
            {
              standard_name: "READING",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name:
                "Automatically reads sight words and multisyllabic words with prefixes, suffixes, and greek/latin roots",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Reads with fluency",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Reads for meaning and can recognize decoding mistakes and when text is confusing",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "COMPREHENSION",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name:
                "Determines main ideas, recalls important details, and uses evidence to support thinking about more complex text featuring multiple main events and problems",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Summarizes text in sequence, including problem, solution, and characters",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Makes appropriate predictions based on literal and inferential information from the text",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Infers character traits, motivation, feelings, and character change",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Derives larger messages, themes, or ideas by putting information together from different points in a novel or story",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Actively listens and participates in discussions about stories and books",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Uses a variety of strategies to derive the meaning of new vocabulary",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Reads books within independent reading range to completion",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Can search for information in a text to answer questions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Integrates new information and ideas to create new understandings",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Understands different genres and their characteristics, including nonfiction",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Notices a writerâ€™s use of poetic and figurative language and sound devices",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates interest and understanding of read alouds and class conversations",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Participates, organizes and expresses ideas about stories/text in class conversations",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "WRITING",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name:
                "Demonstrates effort to write legibly and observes guiding lines on a page",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates understanding of spelling patterns, base words, prefixes, suffixes and can apply to written work",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Spells high-frequency words and word endings that include plurals and verb tenses",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Crafts well built sentences  (e.g. clauses, simple and complex sentence structure)",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Structures writing to be easy to understand by organizing details in a logical manner",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates understanding of paragraph structure",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates a range of word choice, vocabulary, and transition words to support written ideas",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Employs common grammar rules",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Uses thoughtful leads to open writing, and concludes writing with a strong sense of closure",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Independently revise writing to improve clarity",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Independently initiates writing tasks and maintains an appropriate pace",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Conveys a tone and purpose for writing",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Plans, organizes, and revises written work",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            }
          ]
        },
        {
          course_name: "Mathematics",
          curriculum_blurb: "",
          comment: "",
          standards: [
            {
              standard_name: "APPROACH TO THE STUDY OF MATHEMATICS",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name: "Puts care and effort into work",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Uses time effectively",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Effectively organizes written work on the page",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates motivation and takes initiative during work times",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Can focus and work well independently",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Perseveres when faced with a challenge.",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Takes intellectual risks when approaching unfamiliar tasks, both when working in a group or independently",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Seeks assistance when needed",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Responds positively to feedback, support and redirection",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Follows through with corrections",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Uses math manipulatives skillfully and appropriately",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Participates in class discussions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Listens actively and shows intellectual curiosity during class instruction and discussions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Cooperates, collaborates and works productively in a group",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Shows enthusiasm and enjoyment for mathematics",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "GENERAL CONCEPTUAL UNDERSTANDING AND SKILL DEVELOPMENT",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name:
                "Effectively communicates thoughts and ideas verbally using appropriate mathematical vocabulary",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Effectively communicates thoughts and ideas in written form using appropriate mathematical vocabulary",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Refers to and/or applies previously learned concepts during work times and discussions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Has attained basic math fact fluency of addition/subtraction facts under 20 and multiplication/division facts through the 12 times table",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Applies appropriate and effective mental math strategies when performing mathematical operations",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Estimates using mental math skills, checking for the reasonableness of computational calculations",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Demonstrates a developing number sense",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Able to recognize, identify and articulate patterns",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Applies learned concepts when solving word problems and higher order thinking tasks",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Applies effective strategies when solving non-routine problems",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Has mastered whole number computation skills: Addition Algorithm, Subtraction Algorithm, Multiplication Algorithm (3-digit by 2-digit), Division Algorithm (2-digit divisors and 4-digit dividends)",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Score on Early Fall Math Fact Fluency Assessment",
              standard_value: "",
              standard_gradescale: "0 - 100",
              standard_level: "is_leaf"
            },
            {
              standard_name: "STATISTICS &amp; GRAPHING UNIT",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name:
                "Able to work with and integrate datasets, frequency distributions,",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrated understanding of the measures of central tendency, including range and outliers",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Able to articulate the effect an additional datum would have on the statistics generated for the dataset",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Able to create and conduct a survey, analyze and interpret the results, and communicate the significance of the findings",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Quality of written work (homework, classwork, projects) during this unit reflected thought, care, and effort",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Score on Grade-Wide Graphing &amp; Statistics Assessment",
              standard_value: "",
              standard_gradescale: "0 - 100",
              standard_level: "is_leaf"
            },
            {
              standard_name: "NUMBER THEORY UNIT",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name:
                "Demonstrated understanding of the Number Theory concepts presented in this unit",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Quality of written work (homework, classwork, projects) during this unit reflected thought, care and effort, and demonstrated clarity of thinking",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Able to differentiate, apply, integrate and extend concepts in this unit",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Able to utilize number theory concepts learned in class when solving non-routine, complex, multi-step problems",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Score on Grade-Wide Number Theory Assessment",
              standard_value: "",
              standard_gradescale: "0 - 100",
              standard_level: "is_leaf"
            },
            {
              standard_name: "PLACE VALUE",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name:
                "Demonstrated understanding of the Place Value concepts presented in this unit",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Able to apply the concepts when solving word problems and higher order thinking tasks",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Quality of written work (homework, classwork, projects) during this unit reflected thought, care and effort",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            }
          ]
        },
        {
          course_name: "Social Studies",
          curriculum_blurb: "",
          comment: "",
          standards: [
            {
              standard_name: "DEVELOPING QUESTIONS AND RESEARCHING TOPICS",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name: "Asks relevant questions to extend learning",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Uses research skills of note taking, outlining, and summarizing to compile and organize information for various projects",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Recognizes dynamics of historical continuity and change over periods of time",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Creates an understanding of the past and present by analyzing different forms of evidence used to make meaning (including primary and secondary sources)",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Presents information in an organized manner so an audience can follow.  Uses visual displays to enhance understanding",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "MAKING CONNECTIONS AND THINKING CRITICALLY",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name:
                "Participates in units of study with curiosity and enthusiasm",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Understands concepts explored in class",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Evaluates information to determine relevance",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Engages in dialogue about issues and is developing a point of view",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Identifies multiple perspectives on current and historical events",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Forms and expresses opinions with others during discussions about current and historical events",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "COMMUNITY ENGAGEMENT",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name:
                "Identifies rights and responsibilities in the classroom, school, and community",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Shows connections to school and/or local community by sharing ideas for service, stewardship, allyship, or community building",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Identifies situations in which social actions are required and participates in action-oriented problem solving",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates respect for the perspectives and rights of others in conversation and classroom discussions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Shows respect in issues involving difference and conflict; participate in negotiating and compromising in the resolution of differences and conflict",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            }
          ]
        },
        {
          course_name: "Science",
          curriculum_blurb: "",
          comment: "",
          standards: [
            {
              standard_name: "SKILLS OF A SCIENTIST",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name: "Makes and records observations",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Uses scientific tools carefully and appropriately",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Uses observations to support hypotheses",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Creates procedures to answer experimental questions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Appropriately interprets tabular and graphic data",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Communicates through written work",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Communicates through oral presentation",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Keeps a thorough and organized record of work",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates an understanding of the concepts of experimental variable and control",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "APPROACH TO SCIENCE",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_header"
            },
            {
              standard_name:
                "Is able to self-reflect on processes and concepts learned",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Seeks assistance when needed",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Perseveres when faced with a challenge",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Takes intellectual risks",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Uses time effectively",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Responds positively to feedback, support and redirection",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Demonstrates motivation and takes initiative during worktimes",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Cooperates, collaborates and works productively in a group",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Can focus and work well independently",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Participates in class discussions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Is a respectful member of the classroom",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name:
                "Listens actively and shows intellectual curiosity during class instruction and discussions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Follows oral and/or written directions",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            },
            {
              standard_name: "Transitions appropriately between activities",
              standard_value: "",
              standard_gradescale: "R, O, U, C, n/a",
              standard_level: "is_leaf"
            }
          ]
        }
      ]
    }
  }
];

ReactDOM.render(
  [<App student={FinalObj[0]} />],
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
