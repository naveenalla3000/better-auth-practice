import RegisterForm from "@/components/registerForm";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-white">Register Page</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
