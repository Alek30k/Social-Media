"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const { userId } = auth();

console.log(userId);

export const addPost = async (formData: FormData) => {};
