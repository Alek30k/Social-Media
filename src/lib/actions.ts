"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

const { userId } = auth();

console.log(userId);

export const addPost = async (formData: FormData) => {
  const desc = formData.get("desc") as string;

  console.log(desc);
  const { userId } = auth();

  if (!userId) throw new Error("User is not authenticated!");
  try {
    const resp = await prisma.post.create({
      data: {
        userId,
        desc,
      },
    });
    console.log("post creado", resp);
  } catch (error) {
    console.log(error);
  }
};
