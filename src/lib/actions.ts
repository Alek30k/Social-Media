"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { ObjectId } from "bson";

const { userId } = auth();

console.log(userId);

export const addPost = async (formData: FormData) => {
  const desc = formData.get("desc") as string;

  const { userId } = auth();

  // if (!ObjectId.isValid(userId)) {
  //   throw new Error('Invalid user ID format!');
  // }
  const userObjectId = new ObjectId(userId);

  if (!userId) throw new Error("User is not authenticated!");
  try {
    const resp = await prisma.post.create({
      data: {
        userId: userObjectId,
        desc,
      },
    });
    console.log("post creado", resp);
  } catch (error) {
    console.log(error);
  }
};
