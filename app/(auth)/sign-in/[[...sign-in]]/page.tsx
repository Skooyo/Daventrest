import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex bg-white w-full h-screen justify-center items-center">
      <SignIn />
    </div>
  )
}