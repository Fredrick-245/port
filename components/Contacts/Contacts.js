import React from "react";
import classes from "./Contacts.module.css";
import HireForm from "./HireForm";

export default function Contacts() {
  return (
    <div className={classes.contact} id="Contact">
      <div className={classes.form}>
        <h1>Hire Me.</h1>
        <p>
          I am available for freelance work or any full time job.Connect with me
          via phone:<a href="tel:0708219438">&nbsp;0708219438</a> or just email
          me through{" "}
          <a href="mailto:ndemofredrick245@gmail.com">
            &nbsp;ndemofredrick245@gmail.com
          </a>
          <HireForm/>
        </p>
      </div>
      <div>
        <img alt="picture of Fredrick Ndemo" />
      </div>
    </div>
  );
}
