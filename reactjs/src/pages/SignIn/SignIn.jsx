import React from "react";
import styles from "./signIn.module.css";
import Form from "../../components/Forms/SignInForm";
import Provider from "../../components/Provider/Provider";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign In With</h1>
      <Provider />
      <Form />
    </div>
  );
}
