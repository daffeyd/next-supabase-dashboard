"use server";
import { createSupbaseServerClientReadOnly } from "../supabase";

export async function readUserSession() {
	const supabase = await createSupbaseServerClientReadOnly();

	return supabase.auth.getSession();
}

export async function readUserData() {
	const supabase = await createSupbaseServerClientReadOnly();

	return supabase.auth.getUser();
}

