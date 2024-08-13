"use server";

import { auth } from "@clerk/nextjs/server";

const { userId } = auth();

console.log(userId);

export const addPost = async (formData: FormData) => {};
