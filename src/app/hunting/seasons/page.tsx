import { redirect } from "next/navigation";

// /hunting/seasons redirects to /hunting hub
export default function HuntingSeasonsIndex() {
  redirect("/hunting");
}
