import {Navbar} from "@/app/components/navbar/Navbar";
import {UserNameTextEntry} from "@/app/components/UserNameTextEntry/UserNameTextEntry";
import {UserNameSignUpButton} from "@/app/components/UserNameTextEntry/UserNameSignUpButton";

export default function Home() {
  return (
      <main className="relative h-screen max-w-screen-lg mx-auto border-2 border-amber-950">
          <div className="flex justify-center">
              <Navbar/>
          </div>
          <div className="absolute top-[200px] left-10">
              <p className="font-bold text-64">
                  One Link<br/>
                  One Mini Website<br/>
                  All of You
              </p>
          </div>
          <div className="absolute top-[500px] left-10 w-[785px]">
              <p className="font-light text-30">
                  Your platform for showcasing your finest work, sharing services info, and connecting with your customers across all socials. Claim your username now.
              </p>
          </div>
          <div className="absolute top-[650px] left-10">
              <UserNameTextEntry/>
              <div className="ml-[380px] z-100">
                  <UserNameSignUpButton/>
              </div>
          </div>
      </main>
  );
}
