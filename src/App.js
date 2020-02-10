import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { findByLabelText } from "@testing-library/dom";
let stuff = new Array();
const SHOW_SPRING_SEMESTER = false;
const App = props => {
  let student = props.student;
  return (
    <div class="studentContainer">
      <div class="studentDetails">
        <div>
          Student:{" "}
          <b>
            {student.first_name} {student.last_name}
          </b>
        </div>
        <div>Teacher: {student.hr_teacher}</div>
      </div>
      <div class="studentDetails">
        <div>Days Absent: {student.att_absent}</div>
        <div>
          Report Period: {student.att_from} - {student.att_to}
        </div>
      </div>
      <div class="explanation">
        <p>Dear Families,</p>
        <p>
          We write this Home Report as a summary of the first semester, from
          September to the first weeks of January. It covers Social-Emotional
          Development, Approach to Learning, Language Arts (Reading & Writing),
          Mathematics, Core Curriculum (Units of Study in K-2), Social Studies
          (3-5), and Science (3-5). Your child’s team of teachers worked on this
          report collectively and it serves as one piece of our communication
          around your child’s education. This report complements the many ways
          we recognize and celebrate your child’s progress, such as
          parent-teacher conferences, end of unit culminating activities, and
          parent communications.
        </p>
        <p>
          We have designed student checklist items that thoroughly cover the
          priorities and goals of our program. To indicate your child’s progress
          for both semesters, we have created the indicators below:
        </p>
        <p>
          <b>Rarely Observed</b> (R): Student rarely displays use of skills or
          concepts and requires consistent teacher support. Specific attention
          is being placed on that skill or concept for the student.
        </p>
        <p>
          <b>Occasionally Observed</b> (O): Student is working towards their
          independent use of skills and concepts. Their performance can be
          inconsistent but is progressing with teacher support.
        </p>
        <p>
          <b>Usually Observed</b> (U): Student is showing consistent growth in
          their independent use of skills and concepts. Student has responded to
          lessons and teacher support.
        </p>
        <p>
          <b>Consistently Observed</b> (C): Student displays consistent and
          independent use of skills or concepts. This is an area of particular
          strength.
        </p>
        <p>
          Your child’s checklist items will be mostly identical between the 1st
          and 2nd semesters. This will help you to clearly see your child’s
          progress from the beginning to the end of the year. If a checklist
          item is left blank on your child’s report, this indicates that the
          skill is not covered in this particular semester. In Mathematics, new
          checklist items will be added for units covered in the 2nd semester.
        </p>
        <p>
          Each child develops at their own rate and has their own set of
          strengths and areas for growth. Because the majority of our checklist
          items are year long goals, your child is likely to have a majority of
          <i>Occasionally Observed</i> at this point in the school year.
        </p>
        <p>
          Your child’s classroom teacher(s) also wrote a personalized paragraph
          for your child’s Social-Emotional Development and Approach to
          Learning. These personalized narratives are written to capture all
          that makes your child unique and cover items that cannot be captured
          in a checklist.
        </p>
        <p>
          Please take your time reading through the report as the teachers took
          a great deal of time writing and completing it. We also recommend that
          you pick out a few strengths and challenges for your child to think
          about. That said, please don’t overwhelm your child with a detailed
          analysis. Most importantly, it is important for both you and your
          child to know that development and growth are part of the learning
          process.
        </p>
        <p>
          All the best,
          <br />
          Joe
        </p>
      </div>
      <div className="upperLeftMargin">{`${student.first_name.toUpperCase()} ${student.last_name.toUpperCase()} - GRADE ${student.grade_level_current.toUpperCase()}`}</div>
      <div className="upperRightMargin">{`${student.first_name.toUpperCase()} ${student.last_name.toUpperCase()} - GRADE ${student.grade_level_current.toUpperCase()}`}</div>
      {student.departments.courses.map(subj => (
        <React.Fragment>
          <div class="subjectTitle">{subj.course_name}</div>
          {subj.curriculum_blurb.length > 0 && (
            <div class="blurb">
              {subj.curriculum_blurb.split("\n").map((item, i) => {
                return <p key={i} dangerouslySetInnerHTML={{ __html: item }} />;
              })}
            </div>
          )}

          <div>
            {(subj.course_name === "Approach to Learning" ||
              subj.course_name === "Social-Emotional Development") &&
              subj.comment.length > 0 && (
                <div class="comment">
                  <div class="header">COMMENTS:</div>
                  {subj.comment.split("\n").map((item, i) => {
                    return (
                      <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    );
                  })}
                </div>
              )}
          </div>
          {subj.standards.length > 1 && (
            <React.Fragment>
              <div class="descriptors">
                <div>
                  <i>Performance Indicators:</i>
                </div>
                <div>
                  <b>R</b> = Rarely Observed
                </div>
                <div>
                  <b>O</b> = Occasionally Observed
                </div>
                <div>
                  <b>U</b> = Usually Observed
                </div>
                <div>
                  <b>C</b> = Consistently Observed
                </div>
              </div>

              <table class="checklistOverall">
                <col style={{ width: "55%" }} />
                <colgroup span="4"></colgroup>
                {SHOW_SPRING_SEMESTER && (
                  <React.Fragment>
                    <colgroup span="4"></colgroup>
                  </React.Fragment>
                )}
                <thead>
                  <tr>
                    <td rowspan="2" style={{ width: "55%" }}></td>
                    <th
                      colspan="4"
                      scope="colgroup"
                      style={{
                        marginTop: "20px",
                        height: "27px",
                        width: "20%",
                        color: "white",
                        backgroundColor: "#f54530",
                        padding: "5px",
                        fontWeight: "400",
                        borderLeft: "4px solid black",
                        borderRight: "4px solid black",
                        borderTop: "2px solid black"
                      }}
                    >
                      WINTER
                    </th>
                    {SHOW_SPRING_SEMESTER && (
                      <th
                        colspan="4"
                        scope="colgroup"
                        style={{
                          marginTop: "20px",
                          height: "27px",
                          width: "20%",
                          color: "white",
                          fontWeight: "400",
                          backgroundColor: "#f54530",
                          padding: "5px",
                          borderLeft: "4px solid black",
                          borderRight: "4px solid black",
                          borderTop: "2px solid black"
                        }}
                      >
                        SPRING
                      </th>
                    )}
                  </tr>
                  <tr>
                    <th class="individualCell leftEdge">R</th>
                    <th class="individualCell ">O</th>

                    <th class="individualCell">U</th>
                    <th class="individualCell rightEdge">C</th>
                    {SHOW_SPRING_SEMESTER && (
                      <React.Fragment>
                        {" "}
                        <th class="individualCell leftEdge">R</th>
                        <th class="individualCell ">O</th>
                        <th class="individualCell">U</th>
                        <th class="individualCell rightEdge">C</th>
                      </React.Fragment>
                    )}
                  </tr>
                </thead>
                {subj.standards.map(item => (
                  <React.Fragment>
                    {item.standard_level == "is_header" && (
                      <tr class="checklistCategory ">
                        <th
                          class="checklistDescriptors heading"
                          scope="row"
                          dangerouslySetInnerHTML={{
                            __html: item.standard_name
                          }}
                        ></th>
                        <td style={{ borderLeft: "4px solid black" }}></td>
                        <td></td>
                        <td></td>
                        <td style={{ borderRight: "4px solid black" }}></td>
                        {SHOW_SPRING_SEMESTER && (
                          <React.Fragment>
                            {" "}
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{ borderRight: "4px solid black" }}></td>
                          </React.Fragment>
                        )}
                      </tr>
                    )}
                    {item.standard_level == "is_leaf" && (
                      <tr class="checklistDescriptors">
                        <th
                          scope="row"
                          style={{
                            textAlign: "left",
                            fontWeight: "100",
                            padding: "5px"
                          }}
                          dangerouslySetInnerHTML={{
                            __html: item.standard_name
                          }}
                        ></th>
                        {item.standard_gradescale == "0 - 100" && (
                          <React.Fragment>
                            <td
                              colspan="4"
                              className={`${
                                item.standard_value.length == 0 ? "striped" : ""
                              } individualCell leftEdge rightEdge`}
                            >
                              {item.standard_value}{item.standard_value.length > 0 && '%'}
                            </td>
                            {SHOW_SPRING_SEMESTER && (
                              <React.Fragment>
                                <td
                                  colspan="4"
                                  class={`${
                                    item.spring_score.length == 0
                                      ? "striped"
                                      : ""
                                  } individualCell leftEdge rightEdge`}
                                >
                                  {item.spring_score}
                                </td>
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        )}
                        {item.standard_gradescale == "R, O, U, C, n/a" && (
                          <React.Fragment>
                            {item.standard_value == "N/A" && (
                              <td
                                colspan="4"
                                className={`striped individualCell leftEdge rightEdge `}
                              />
                            )}

                            {item.standard_value !== "N/A" &&
                              ["R", "O", "U", "C"].map((score, i) => (
                                <td
                                  className={`${
                                    score == "N/A" ? "striped" : ""
                                  } individualCell ${
                                    i == 0 ? "leftEdge" : " "
                                  } ${i == 3 ? "rightEdge" : ""}`}
                                >
                                  {score == item.standard_value ? "X" : ""}
                                </td>
                              ))}
                            {SHOW_SPRING_SEMESTER && (
                              <React.Fragment>
                                {" "}
                                {item.spring_score == "N/A" && (
                                  <td
                                    colspan="4"
                                    className={` striped individualCell leftEdge rightEdge `}
                                  />
                                )}
                                {item.standard_value !== "N/A" &&
                                  ["R", "O", "U", "C"].map((score, i) => (
                                    <td
                                      className={`${
                                        score == "N/A" ? "striped" : ""
                                      } individualCell ${
                                        i == 0 ? "leftEdge" : " "
                                      } ${i == 3 ? "rightEdge" : ""}`}
                                    >
                                      {score == item.spring_score ? "X" : ""}
                                    </td>
                                  ))}{" "}
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        )}
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </table>
            </React.Fragment>
          )}
          {subj.course_name !== "Approach to Learning" &&
            subj.course_name !== "Social-Emotional Development" &&
            subj.comment.length > 0 && (
              <div class="comment">
                <div class="header">COMMENTS:</div>
                {subj.comment.split("\n").map((item, i) => {
                  return (
                    <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  );
                })}
              </div>
            )}
        </React.Fragment>
      ))}

      <div class="end"></div>
    </div>
  );
};

export default App;
