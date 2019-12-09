import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { findByLabelText } from "@testing-library/dom";
let stuff = new Array();

const App = props => {
  let student = props.student;
  return (
    <div class="studentContainer">
      <div class="studentDetails">
        <div>
          Student: <b>{student.name}</b>
        </div>
        <div>Teacher: {student.teacher}</div>
      </div>
      <div class="studentDetails">
        <div>
          Days Absent: {student.absent}
          <br></br>
          Days Tardy: {student.tardy}
        </div>
        <div>Report Period: {student.reportPeriod}</div>
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
      <h2
        style={{ display: "none" }}
      >{`${student.name.toUpperCase()} - ${student.grade.toUpperCase()}`}</h2>
      {student.subjects.map(subj => (
        <Fragment>
          <div class="subjectTitle">{subj.title}</div>
          {subj.blurb.length > 0 && <div class="blurb">{subj.blurb}</div>}
          <div class="descriptors">
            <div>
              <i>Performance Indicators:</i>
            </div>
            <div>
              <b>N</b> = Not Yet Developed
            </div>
            <div>
              <b>D</b> = Developing
            </div>
            <div>
              <b>I</b> = Independent
            </div>
            <div>
              <b>N/A</b> = Not Applicable
            </div>
          </div>
          <table class="checklistOverall">
            <col style={{ width: "55%" }} />
            <colgroup span="4"></colgroup>
            <colgroup span="4"></colgroup>
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
              </tr>
              <tr>
                <th class="individualCell leftEdge">N</th>
                <th class="individualCell">D</th>
                <th class="individualCell">I</th>
                <th class="individualCell rightEdge">N/A</th>
                <th class="individualCell leftEdge">N</th>
                <th class="individualCell">D</th>
                <th class="individualCell">I</th>
                <th class="individualCell rightEdge">N/A</th>
              </tr>
            </thead>
            {subj.checklist.map(category => (
              <Fragment>
                <tr class="checklistCategory ">
                  <th class="checklistDescriptors heading" scope="row">
                    {category.name}
                  </th>
                  <td style={{ borderLeft: "4px solid black" }}></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ borderLeft: "4px solid black" }}></td>
                  <td></td>
                  <td></td>
                  <td style={{ borderRight: "4px solid black" }}></td>
                </tr>
                {category.items.map(item => (
                  <tr class="checklistDescriptors">
                    <th
                      scope="row"
                      style={{
                        textAlign: "left",
                        fontWeight: "100",
                        padding: "5px"
                      }}
                    >
                      {item.description}
                    </th>
                    {["N", "D", "I", "N/A"].map((score, i) => (
                      <td
                        className={`individualCell ${
                          i == 0 ? "leftEdge" : " "
                        } ${i == 3 ? "rightEdge" : ""}`}
                      >
                        {score == item.winter_score ? "X" : ""}
                      </td>
                    ))}
                    {["N", "D", "I", "N/A"].map((score, i) => (
                      <td
                        className={`individualCell ${
                          i == 0 ? "leftEdge" : " "
                        } ${i == 3 ? "rightEdge" : ""}`}
                      >
                        {score == item.spring_score ? "X" : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </table>
          <div>
            {subj.winterComments.length > 0 && (
              <div class="comment">
                <div class="header">WINTER COMMENTS:</div>
                <div>{subj.winterComments}</div>
              </div>
            )}
            {subj.springComments.length > 0 && (
              <div class="comment">
                <div class="header">SPRING COMMENTS:</div>
                <div>{subj.springComments}</div>
              </div>
            )}
          </div>
        </Fragment>
      ))}

      <div class="end"></div>
    </div>
  );
};

export default App;
