import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <input type="submit" value="Submit" />
          <label>
            Message:
            <input type="text" name="message" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </p>
    </div>
  );
}
