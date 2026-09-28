import AuthShell from "@/components/auth/AuthShell";
import AuthShowcase from "@/components/auth/AuthShowcase";
import RegisterForm from "@/components/auth/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create a free ByteSpace account and start learning today.",
};

const RegisterPage = () => (
  <AuthShell
    showcase={
      <AuthShowcase
        title="Sign up and come in"
        description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      />
    }
    form={<RegisterForm />}
  />
);

export default RegisterPage;
