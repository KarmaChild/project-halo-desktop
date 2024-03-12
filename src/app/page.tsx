import {Navbar} from "@/app/components/navbar/Navbar";
import {UserNameTextEntry} from "@/app/components/UserNameTextEntry/UserNameTextEntry";
import {UserNameSignUpButton} from "@/app/components/UserNameTextEntry/UserNameSignUpButton";

export default function Home() {

    return (
      <div className="overflow-y-auto h-screen">
          <main className="max-w-[1280px] mx-auto border-2 border-amber-950">
              <div className="flex justify-center">
                  <Navbar/>
              </div>
              {/* first page */}
              <div className="relative h-screen">
                  <div className="absolute top-[200px] left-10">
                      <p className="font-bold text-64">
                          One Link<br/>
                          One Mini Website<br/>
                          All of You
                      </p>
                  </div>
                  <div className="absolute top-[500px] left-10 w-[785px]">
                      <p className="font-light text-30">
                          Your platform for showcasing your finest work, sharing services
                          info, and connecting with your customers across all socials. Claim
                          your username now.
                      </p>
                  </div>
                  <div className="absolute top-[650px] left-10">
                      <UserNameTextEntry/>
                      <div className="ml-[380px]">
                          <UserNameSignUpButton/>
                      </div>
                  </div>
              </div>
              {/* second page */}
              <div className="relative h-screen mt-4 bg-black">
                  <div className="absolute top-10 left-0 right-0">
                      <div className="text-center w-[1090px] h-[137px] m-auto">
                          <p className="text-white font-bold text-64">
                              Lead generation for ✨beauty✨ professionals, oversimplified
                          </p>
                      </div>
                  </div>
                  <div className="absolute top-[500px] left-10 w-[785px]">
                      <p className="text-white font-light text-30">
                          More content for the second page.
                      </p>
                  </div>
              </div>
          </main>
      </div>
  );
}
