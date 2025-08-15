import { ThemeProvider } from "@/components/theme-provider";

export default function PapiWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
