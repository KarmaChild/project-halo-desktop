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
                  <div className="absolute top-[200px] left-10 leading-tight">
                      <p className="font-bold text-64">
                          One Link<br/>
                          One Mini Website<br/>
                          All of You
                      </p>
                  </div>
                  <div className="absolute top-[500px] left-10 w-[785px] leading-tight">
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
                  <div className="bg-grey h-[584px] w-[300px] absolute top-[200px] left-[885px] rounded-[30px]">
                  </div>
              </div>
              {/* second page */}
              <div className="relative h-screen mt-4 bg-black">
                  <div className="absolute top-10 left-0 right-0">
                      <div className="text-center w-[1090px] h-[137px] m-auto leading-tight ">
                          <p className="text-white font-bold text-64">
                              Lead generation for ✨beauty✨ professionals, oversimplified
                          </p>
                      </div>
                  </div>
                  <div className="flex flex-row absolute top-[250px] left-10 w-[1151px] h-[842px]">
                      <div className="relative top-[50px]">
                          <div className="text-center w-[260px] h-[80px] leading-tight">
                              <p className="text-white font-regular text-30">
                                  Create your own mini website
                              </p>
                          </div>
                          <div className="bg-grey h-[500px] w-[250px] rounded-[30px]">
                          </div>
                      </div>
                      <div className="relative top-[50px] ml-12">
                          <div className="text-center w-[260px] h-[80px] leading-tight">
                              <p className="text-white font-regular text-30">
                                  Easy access to your best work
                              </p>
                          </div>
                          <div className="bg-grey h-[500px] w-[250px] rounded-[30px]">
                          </div>
                      </div>
                      <div className="relative top-[50px] ml-12">
                          <div className="text-center w-[260px] h-[80px] leading-tight">
                              <p className="text-white font-regular text-30">
                                  All your links in one place
                              </p>
                          </div>
                          <div className="bg-grey h-[500px] w-[250px] rounded-[30px]">
                          </div>
                      </div>
                      <div className="relative top-[50px] ml-12">
                          <div className="text-center w-[260px] h-[80px] leading-tight">
                              <p className="text-white font-regular text-30">
                                  Powered by community reviews
                              </p>
                          </div>
                          <div className="bg-grey h-[500px] w-[250px] rounded-[30px]">
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </div>
    );
}
