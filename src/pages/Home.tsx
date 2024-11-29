import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BriefcaseBusiness, School } from "lucide-react";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import HomeTabs from "@/features/HomeTabs";

export default function Home() {
  return (
    <section className="h-screen w-screen bg-[#FDF7F0] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <Avatar className="w-32 h-32">
          <AvatarImage
            src="/profile.jpg"
            className="w-full h-full object-cover"
          />
          <AvatarFallback>JW</AvatarFallback>
        </Avatar>

        <Label className="mt-4 text-2xl font-bold">Jin Won Lee</Label>

        <div className="mt-2 flex gap-6 text-sm">
          <div className="flex gap-1">
            <BriefcaseBusiness strokeWidth={1.25} size={20} />
            <Label className="m-auto">Ultium CAM</Label>
          </div>
          <div className="flex gap-1">
            <School strokeWidth={1.25} size={20} />
            <Label className="m-auto">McGill University</Label>
          </div>
          <a className="flex gap-1 text-black hover:text-gray-600">
            <RiLinkedinBoxFill size={20} />
            <Label className="m-auto">LinkedIn</Label>
          </a>
          <a className="flex gap-1 text-black hover:text-gray-600">
            <RiGithubFill size={20} />
            <Label className="m-auto">Github</Label>
          </a>
        </div>

        <div className="grid mt-4 space-y-1">
          <Label className="text-center max-w-lg text-sm text-gray-600">
            I enjoy development and 3D modeling because it lets me be creative.
          </Label>{" "}
          <Label className="text-center max-w-lg text-sm text-gray-600">
            When I’m not doing projects, I play music and shred the slopes :)
          </Label>
        </div>
      </div>

      <HomeTabs />
    </section>
  );
}
