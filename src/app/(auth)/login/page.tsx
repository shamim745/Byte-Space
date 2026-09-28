import AuthShell from "@/components/auth/AuthShell";
import AuthShowcase from "@/components/auth/AuthShowcase";
import LoginForm from "@/components/auth/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to ByteSpace to continue learning.",
};

const LoginPage = () => (
  <AuthShell
    showcase={
      <AuthShowcase
        title="Sign in with ease"
        description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      />
    }
    form={<LoginForm />}
  />
);

export default LoginPage;
