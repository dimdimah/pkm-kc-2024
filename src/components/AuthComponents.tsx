import { UserButton, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

export default function AuthComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex justify-between">
        <UserButton showName />
      </header>
      <main>
        <SignedOut>
          <SignIn />
        </SignedOut>
        <SignedIn>{children}</SignedIn>
      </main>
    </>
  );
}
