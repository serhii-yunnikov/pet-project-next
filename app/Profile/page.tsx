import { getServerSession } from "next-auth";
import { authConfig } from "../configs/auth";
import Image from 'next/image'
import { Container } from "@mui/material";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      {session ? (
        <>
          <h1>{session?.user?.name}</h1>
          {/* <Image
            src={session?.user?.image as string}
            alt="profile photo"
            width={300}
            height={300}
          /> */}
        </>
      ) : (
        <h1>Profile not found</h1>
      )}
    </div>
  );
}
