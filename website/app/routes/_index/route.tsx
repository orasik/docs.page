import type { LinksFunction } from "@vercel/remix";
import { Feature } from "./Feature";
import { Heading } from "./Heading";

export const links: LinksFunction = () => {
	return [
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			href: "/_docs.page/favicon/apple-touch-icon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			href: "/_docs.page/favicon/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			href: "/_docs.page/favicon/favicon-16x16.png",
		},
		{
			rel: "manifest",
			href: "/_docs.page/favicon/site.webmanifest",
		},
		{
			rel: "mask-icon",
			href: "/_docs.page/favicon/safari-pinned-tab.svg",
			color: "#5bbad5",
		},
	];
};

export default function Homepage() {
	return (
		<>
			<section className="py-16 px-4 text-center lg:py-32 lg:text-left">
				<div className="mx-auto max-w-6xl tracking-wider">
					<div className="mb-4 flex items-center justify-center space-x-4 lg:justify-start">
						<h3 className="font-anton text-4xl">docs.page</h3>
						<a
							href="https://github.com/invertase/docs.page"
							className="text-gray-700 transition-colors duration-100 hover:text-black dark:text-gray-300 dark:hover:text-white"
						>
							<svg
								className="h-10 w-10 "
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<title>Logo</title>
								<path
									fillRule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</div>
					<h1 className="font-anton mb-4 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-6xl text-transparent dark:from-gray-100 dark:via-gray-300 dark:to-gray-200 lg:text-8xl">
						Instant{" "}
						<span className="bg-gradient-to-br from-green-400 to-blue-500 bg-clip-text text-transparent">
							Open Source
						</span>{" "}
						docs <br /> with zero configuration.
					</h1>
				</div>
			</section>
			<div className="mx-auto max-w-5xl px-4 lg:px-0">
				<Heading step={1} from="from-purple-400" to="to-red-500">
					<span>
						Add a{" "}
						<span className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
							docs
						</span>{" "}
						directory to your GitHub repository.
					</span>
				</Heading>
				<div className="mt-16 items-center lg:ml-20 lg:flex">
					<div className="flex-1">
						<p className="px-3 text-lg">
							docs.page sources content directly from any Open Source GitHub
							repository.
						</p>
						<p className="mt-4 px-3 text-lg">
							To get started, create an empty{" "}
							<code className="text-red-400">docs</code> directory and a config{" "}
							<code className="text-red-400">docs.json</code> file, both at the
							root of your repository.
						</p>
					</div>
					<div className="flex-1">
						<div className="mt-10 lg:mt-0 lg:pl-8">
							<div>
								<div className="mx-6 rounded-tr rounded-tl border-t border-l border-r border-gray-700 py-3" />
								<div className="flex items-center rounded border border-gray-700 py-3 px-3 font-mono text-sm shadow-xl">
									<svg
										height="16"
										viewBox="0 0 16 16"
										version="1.1"
										width="16"
										className="mr-3 text-white"
									>
										<title>Edit</title>
										<path
											fill="currentColor"
											fillRule="evenodd"
											d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"
										/>
									</svg>
									<div className="flex-col pr-8">
										<span className="flex">docs</span>
										<span className="flex">docs.json</span>
									</div>
									<span className="text-gray-600">A few seconds ago</span>
								</div>
								<div className="mx-6 rounded-br rounded-bl border-b border-l border-r border-gray-700 py-3" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-32 max-w-5xl px-4 lg:px-0">
				<Heading step={2} from="from-green-400" to="to-blue-500">
					<span>
						Create an{" "}
						<span className="bg-gradient-to-br from-green-400 to-blue-500 bg-clip-text text-transparent">
							index.mdx
						</span>{" "}
						file.
					</span>
				</Heading>
				<div className="mt-16 flex flex-col-reverse items-center lg:ml-20 lg:flex-row">
					<div className="w-full flex-1">
						<div className="mt-10 pr-5 lg:mt-0">
							<div>
								<div className="rounded-tr rounded-tl border border-gray-700 px-3 py-2">
									<code className="text-sm">docs/index.mdx</code>
								</div>
								<div className="flex">
									<div className="flex-1 border-r border-l border-gray-700 p-3 font-mono">
										<div># Installation</div>
										<br />
										<div>```bash</div>
										<div>npm install myawesomelib</div>
										```
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1">
						<p className="px-3 text-lg">
							Create an <code className="text-blue-500">index.mdx</code> file at
							the root of your <code className="text-blue-500">/docs</code>{" "}
							directory. docs.page supports nested pages based on your directory
							structure of the directory.
						</p>
						<p className="mt-4 px-3 text-lg">
							Start by writing some{" "}
							<a href="https://www.markdownguide.org/">Markdown</a> content.
							Installation pages are always a great place to start!
						</p>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-32 max-w-5xl px-4 lg:px-0">
				<Heading step={3} from="from-yellow-400" to="to-yellow-500">
					<span>Checkout your new documentation!</span>
				</Heading>
				<div className="mt-10 lg:ml-20 lg:flex" />
			</div>
			<div className="mx-auto mt-32 max-w-5xl px-4 lg:px-0">
				<Heading step={4} from="from-green-400" to="to-green-500">
					<span>Learn more...</span>
				</Heading>
				<div className="mt-10 grid gap-16 text-center lg:ml-20 lg:grid-cols-2">
					<Feature href="https://use.docs.page/configuration">
						<span slot="title" className="text-blue-500">
							Configure
						</span>
						<span slot="text">
							Add a <code className="text-blue-400">docs.json</code> file to the
							root of the repository to configure your project by adding a
							theme, search, navigation, analytics and more.
						</span>
						<span slot="icon" />
					</Feature>
					<Feature href="https://use.docs.page/previews">
						<span slot="title" className="text-pink-400">
							Previews
						</span>
						<span slot="text">
							Previewing docs locally with our new Local Preview Mode.
							Previewing changes on branches and pull requests works out of the
							box with zero configuration. Install our GitHub bot for preview
							assistance.
						</span>
						<span slot="icon" />
					</Feature>
					<Feature href="https://use.docs.page/components/accordion">
						<span slot="title" className="text-yellow-400">
							Components
						</span>
						<span slot="text">
							By using MDX we provide custom React components to help you build
							better documentation.
						</span>
						<span slot="icon" />
					</Feature>
					<Feature href="https://use.docs.page/custom-domains">
						<span slot="title" className="text-green-400">
							Domains
						</span>
						<span slot="text">
							Using a custom domain name? Simply create a pull request & point
							your domain to our servers. We&apos;ll take care of the rest.
						</span>
						<span slot="icon" />
					</Feature>
					<Feature href="https://use.docs.page/github-bot">
						<span slot="title" className="text-purple-500">
							GitHub Bot
						</span>
						<span slot="text">
							Install our GitHub bot on repositories using docs.page. Any new
							Pull Requests will automatically display a publicly available
							deployment preview URL for your documentation.
						</span>
						<span slot="icon">
							{/* <!-- <AnnotationIcon width={80} /> --> */}
						</span>
					</Feature>
					<Feature href="https://use.docs.page/search">
						<span slot="title" className="text-red-500">
							Search
						</span>
						<span slot="text">
							Add your DocSearch application ID to your configuration file and
							instantly get full blown documentation search for free, powered by
							Algolia.
						</span>
						<span slot="icon">
							{/* <!-- <SearchCircleIcon width={80} /> --> */}
						</span>
					</Feature>
				</div>
				<footer className="mt-20 mb-5 flex p-4 font-mono text-sm opacity-50 transition-opacity hover:opacity-100">
					<div className="flex-grow dark:text-white ">
						<div>
							<span>© {new Date().getFullYear()}</span>
							<a href="https://invertase.io" className="hover:underline">
								Invertase
							</a>
							<span>| docs.page</span>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
