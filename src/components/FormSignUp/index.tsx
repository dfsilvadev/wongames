import Link from "next/link";

import { AccountCircle, Lock } from "@styled-icons/material-outlined";
import { EmailOutline } from "@styled-icons/evaicons-outline";

import { FormWrapper, FormLink } from "components/Form";
import Button from "components/Button";
import TextField from "components/TextField";

const FormSignUp = () => {
  return (
    <FormWrapper>
      <form action="">
        <TextField
          name="name"
          placeholder="Name"
          type="text"
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<EmailOutline />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
        />
        <Button size="large" fullWidth>
          Sign up now
        </Button>
        <FormLink>
          Already have an account?{" "}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignUp;
