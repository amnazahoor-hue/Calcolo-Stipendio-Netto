import { redirect } from "next/navigation";
import { HOME_SLUG } from "@/lib/constants";

export default function RootPage() {
  redirect(HOME_SLUG);
}
