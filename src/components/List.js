const skills = [
  {
    skill: {
      id: 1,
      skillName: "HTML/CSS",
    },
  },
  {
    skill: {
      id: 2,
      skillName: "Git",
    },
  },
  {
    skill: {
      id: 3,
      skillName: "React",
    },
  },
  {
    skill: {
      id: 4,
      skillName: "MERN Stack",
    },
  },
];

function SkillList(props) {
  return (
    <ul className="list-group">
      {skills.map((skill) => (
        <li className="list-group-item">{`${skill.skill.skillName}`}</li>
      ))}
    </ul>
  );
}

export default SkillList;

// import React from "react";

// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object

// const skillsList = skills.map((skill) => <h2>{skill.skill.skillName}</h2>);

// export default function List({ skills }) {
//   return (
//     <div>
//       <div>{skillsList}</div>
//
//     </div>
//   );
// }
