import { useState } from "react";
import UserDetails from "./UserDetails";
import SetPassword from "./SetPassword";
import Confirm from "./Confirm";

function MainForm() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);

  function next() {
    if (currentIndex === 1) {
      // Check if passwords match
      if (password !== password2) {
        return setError("Passwords do not match");
      }
    }

    setCurrentIndex((c) => c + 1);
  }

  function prev() {
    setCurrentIndex((c) => c - 1);
  }

  function submit() {
    alert("Submitted!");
  }

  switch (currentIndex) {
    case 0:
      return (
        <UserDetails
          error={error}
          values={{ firstName, lastName, username, agreed }}
          onChanges={{ setFirstName, setLastName, setUsername, setAgreed }}
          next={next}
        />
      );
    case 1:
      return (
        <SetPassword
          error={error}
          passwords={[password, password2]}
          onChanges={{ setPassword, setPassword2 }}
          next={next}
          prev={prev}
        />
      );
    case 2:
      return <Confirm values={{ firstName, lastName, username }} submit={submit} prev={prev} />;
    default:
      return;
  }
}

export default MainForm;
