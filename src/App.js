import React, { Fragment } from "react";
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
          Student: <b>{student.name}</b>
        </div>
        <div>Teacher: {student.hr_teacher}</div>
      </div>
      <div class="studentDetails">
        <div>Days Absent: {student.absent}</div>
        <div>
          Report Period: {student.att_from} - {student.att_to}
        </div>
      </div>
      <div class="explanation">
        <p>
          The purpose of this report card is to provide you with information
          about your child’s learning and growth in school. Our aim is for this
          report to complement the parent-teacher conferences and other
          communications you have with your teachers. To best assist academic
          progress, we ask that you share this information with your child in a
          constructive and supportive manner. We recommend that you pick out a
          few strengths and challenges for you and your child to think about.
        </p>
        <p>
          The skills and concepts listed in this report represent what we expect
          students to acquire by the end of the year. We have chosen three
          indicators to represent each student’s current performance within
          these skills and concepts. For clarity, the performance indicators
          should be understood as the following.
        </p>
        <p>
          <b>Not Yet Developed</b> - Student rarely displays use of skills or
          concepts without teacher support. This is an area of concern. This
          means that specific attention is being placed on that skill or concept
          for your child.
        </p>
        <p>
          <b>Developing</b> - Student is progressing in their independent use of
          skills and concepts while still require- ing some teacher support.
        </p>
        <p>
          <b>Independent</b> - Student displays consistent and independent use
          of skills or concepts.
        </p>
        <p>
          <b>N/A</b> - Skills of concepts not applicable to this marking period.
        </p>
      </div>
      <div className="upperLeftMargin">{`${student.name.toUpperCase()} - GRADE ${student.grade_level_current.toUpperCase()}`}</div>
      <div className="upperRightMargin">{`${student.name.toUpperCase()} - GRADE ${student.grade_level_current.toUpperCase()}`}</div>
      {student.departments[0].courses.map(subj => (
        <Fragment>
          <div class="subjectTitle">{subj.course_name}</div>
          {subj.curriculum_blurb.length > 0 && (
            <div class="blurb">{subj.curriculum_blurb}</div>
          )}

          <div>
            {subj.winterComments.length > 0 && (
              <div class="comment">
                <div class="header">WINTER COMMENTS:</div>
                <div
                  dangerouslySetInnerHTML={{ __html: subj.winterComments }}
                ></div>
              </div>
            )}
            {subj.springComments.length > 0 && (
              <div class="comment">
                <div class="header">SPRING COMMENTS:</div>
                <div
                  dangerouslySetInnerHTML={{ __html: subj.springComments }}
                ></div>
              </div>
            )}
          </div>
          <div class="descriptors">
            <div>
              <i>Performance Indicators:</i>
            </div>
            <div>
              <b>U</b> = Unobserved
            </div>
            <div>
              <b>R</b> = Rarely Observed
            </div>
            <div>
              <b>O</b> = Often Observed
            </div>
            <div>
              <b>C</b> = Consistently Observed
            </div>
          </div>
          <table class="checklistOverall">
            <col style={{ width: "55%" }} />
            <colgroup span="4"></colgroup>
            {SHOW_SPRING_SEMESTER && (
              <Fragment>
                <colgroup span="4"></colgroup>
              </Fragment>
            )}
            <thead>
              <tr>
                <td rowspan="2" style={{ width: "55%" }}></td>
                <th
                  colspan="4"
                  scope="colgroup"
                  style={{
                    marginTop: "20px",
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
                  <Fragment>
                    {" "}
                    <th class="individualCell leftEdge">R</th>
                    <th class="individualCell ">O</th>
                    <th class="individualCell">U</th>
                    <th class="individualCell rightEdge">C</th>
                  </Fragment>
                )}
              </tr>
            </thead>
            {subj.standards.map(item => (
              <Fragment>
                {item.standard_level == "is_header" && (
                  <tr class="checklistCategory ">
                    <th class="checklistDescriptors heading" scope="row">
                      {item.standard_name}
                    </th>
                    <td style={{ borderLeft: "4px solid black" }}></td>
                    <td></td>
                    <td></td>
                    <td style={{ borderRight: "4px solid black" }}></td>
                    {SHOW_SPRING_SEMESTER && (
                      <Fragment>
                        {" "}
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{ borderRight: "4px solid black" }}></td>
                      </Fragment>
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
                    >
                      {item.standard_name}
                    </th>
                    {item.scale == "percent" && (
                      <Fragment>
                        <td
                          colspan="4"
                          className={`${
                            item.standard_value.length == 0 ? "striped" : ""
                          } individualCell leftEdge rightEdge`}
                        >
                          {item.standard_value}
                        </td>
                        {SHOW_SPRING_SEMESTER && (
                          <Fragment>
                            <td
                              colspan="4"
                              class={`${
                                item.spring_score.length == 0 ? "striped" : ""
                              } individualCell leftEdge rightEdge`}
                            >
                              {item.spring_score}
                            </td>
                          </Fragment>
                        )}
                      </Fragment>
                    )}
                    {item.scale == "checklist" && (
                      <Fragment>
                        {item.standard_value.length == 0 && (
                          <td
                            colspan="4"
                            className={`striped individualCell leftEdge rightEdge `}
                          />
                        )}
                        {item.standard_value.length > 0 &&
                          ["R", "O", "U", "C"].map((score, i) => (
                            <td
                              className={`individualCell ${
                                i == 0 ? "leftEdge" : " "
                              } ${i == 3 ? "rightEdge" : ""}`}
                            >
                              {score == item.standard_value ? "X" : ""}
                            </td>
                          ))}
                        {SHOW_SPRING_SEMESTER && (
                          <Fragment>
                            {" "}
                            {item.spring_score.length == 0 && (
                              <td
                                colspan="4"
                                className={`striped individualCell leftEdge rightEdge `}
                              />
                            )}
                            {item.spring_score.length > 0 &&
                              ["R", "O", "U", "C"].map((score, i) => (
                                <td
                                  className={`individualCell ${
                                    i == 0 ? "leftEdge" : " "
                                  } ${i == 3 ? "rightEdge" : ""}`}
                                >
                                  {score == item.spring_score ? "X" : ""}
                                </td>
                              ))}{" "}
                          </Fragment>
                        )}
                      </Fragment>
                    )}
                  </tr>
                )}
              </Fragment>
            ))}
          </table>
        </Fragment>
      ))}

      <div class="end"></div>
    </div>
  );
};

export default App;
