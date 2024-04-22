import React from "react";
import { readUserData, readUserSession } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function Home() {
	const { data } = await readUserSession();
	console.log(data)
    if (!data.session) {
      return redirect("/auth");
    }
	return (
		<div>
			<h1>Build Dashboard with role access using Next.js + Supabase </h1>
		</div>
	);
}
