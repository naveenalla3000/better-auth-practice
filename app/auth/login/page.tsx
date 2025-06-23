import LoginForm from "@/components/loginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-white">Login Page</h1>
        <LoginForm />
      </div>
    </div>
  );
}
