import React from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <p>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>
        <b>
          total of{" "}
          {parts.reduce((sum, p) => {
            return (sum += p.exercises);
          }, 0)}
        </b>
      </p>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
