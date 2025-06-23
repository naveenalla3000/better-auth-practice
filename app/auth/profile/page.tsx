import Signout from "@/components/Signout";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProfilePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if( !session) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
                <div className="w-full max-w-md space-y-8 text-center">
                    <h1 className="text-black">Profile Page</h1>
                    <p className="text-black">You are not logged in.</p>
                </div>
            </div>
        );
    }
    return (
    <div className="min-h-screen  px-8 py-16">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-black">Profile Page</h1>
        <pre>
            {JSON.stringify(session, null, 2)}
        </pre>
        <Signout />
      </div>
    </div>
  );
}