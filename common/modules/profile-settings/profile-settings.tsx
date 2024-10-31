import { User } from "@prisma/client";
import { FC } from "react";
import { AdditionalSettings, ProfilePassword, ProfilePersonalInfo } from "./components";

interface ProfileSettingsProps {
  data: User;
  provider: string;
}

export const ProfileSettings: FC<ProfileSettingsProps> = ({ data, provider }) => {
  return (
    <div className="flex flex-col gap-10 flex-1 items-start pb-10">
      <ProfilePersonalInfo data={data} />
      <div className="flex justify-between w-full gap-10">
        <ProfilePassword provider={provider} />
        <AdditionalSettings />
      </div>
    </div>
  );
};