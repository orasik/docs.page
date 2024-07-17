import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
	useRouteError,
} from "@remix-run/react";

import type { ReactElement } from "react";
import zoom from "react-medium-image-zoom/dist/styles.css?url";
import { ErrorLayout } from "./ErrorLayout";
import type { BundleErrorResponse } from "./api";
import styles from "./styles.css?url";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: styles },
	{
		rel: "stylesheet",
		href: zoom,
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#0B0D0E" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=auto"
				/>
				<link href="/_docs.page/fa/fontawesome.min.css" rel="stylesheet" />
				<link href="/_docs.page/fa/brands.min.css" rel="stylesheet" />
				<link href="/_docs.page/fa/solid.min.css" rel="stylesheet" />
				<Meta />
				<Links />
			</head>
			<body
				className="antialiased bg-background text-gray-900 dark:text-gray-200"
				style={{
					textRendering: "optimizeLegibility",
				}}
			>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary() {
	const error = useRouteError();

	let title = "Something went wrong";
	let description = "An unexpected error occurred.";

	const body = (children: ReactElement) => (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }`,
				}}
			/>
			{children}
		</>
	);

	if (isRouteErrorResponse(error)) {
		const isBundleError = error.data !== null && typeof error.data === "object";

		if (isBundleError) {
			return body(<ErrorLayout error={error.data as BundleErrorResponse} />);
		}

		if (error.status === 404) {
			title = "Page not found";
			description = "The page you were looking for could not be found.";
		}
	}

	return body(<ErrorLayout title={title} description={description} />);
}