import type { ComponentProps } from "react";
import { cn } from "~/utils";

const brands: Record<string, true> = {
	monero: true,
	hooli: true,
	yelp: true,
	"cc-visa": true,
	lastfm: true,
	shopware: true,
	"creative-commons-nc": true,
	aws: true,
	redhat: true,
	yoast: true,
	cloudflare: true,
	ups: true,
	wpexplorer: true,
	dyalog: true,
	bity: true,
	stackpath: true,
	buysellads: true,
	"first-order": true,
	modx: true,
	guilded: true,
	vnv: true,
	"js-square": true,
	"square-js": true,
	microsoft: true,
	qq: true,
	orcid: true,
	java: true,
	invision: true,
	"creative-commons-pd-alt": true,
	centercode: true,
	"glide-g": true,
	drupal: true,
	"hire-a-helper": true,
	"creative-commons-by": true,
	unity: true,
	whmcs: true,
	rocketchat: true,
	vk: true,
	untappd: true,
	mailchimp: true,
	"css3-alt": true,
	"reddit-square": true,
	"square-reddit": true,
	"vimeo-v": true,
	contao: true,
	"square-font-awesome": true,
	deskpro: true,
	sistrix: true,
	"instagram-square": true,
	"square-instagram": true,
	"battle-net": true,
	"the-red-yeti": true,
	"hacker-news-square": true,
	"square-hacker-news": true,
	edge: true,
	napster: true,
	"snapchat-square": true,
	"square-snapchat": true,
	"google-plus-g": true,
	artstation: true,
	markdown: true,
	sourcetree: true,
	"google-plus": true,
	diaspora: true,
	foursquare: true,
	"stack-overflow": true,
	"github-alt": true,
	"phoenix-squadron": true,
	pagelines: true,
	algolia: true,
	"red-river": true,
	"creative-commons-sa": true,
	safari: true,
	google: true,
	"font-awesome-alt": true,
	"square-font-awesome-stroke": true,
	atlassian: true,
	"linkedin-in": true,
	"digital-ocean": true,
	nimblr: true,
	chromecast: true,
	evernote: true,
	"hacker-news": true,
	"creative-commons-sampling": true,
	adversal: true,
	"creative-commons": true,
	"watchman-monitoring": true,
	fonticons: true,
	weixin: true,
	shirtsinbulk: true,
	codepen: true,
	"git-alt": true,
	lyft: true,
	rev: true,
	windows: true,
	"wizards-of-the-coast": true,
	"square-viadeo": true,
	"viadeo-square": true,
	meetup: true,
	centos: true,
	adn: true,
	cloudsmith: true,
	"pied-piper-alt": true,
	"dribbble-square": true,
	"square-dribbble": true,
	codiepie: true,
	node: true,
	mix: true,
	steam: true,
	"cc-apple-pay": true,
	scribd: true,
	openid: true,
	instalod: true,
	expeditedssl: true,
	sellcast: true,
	"square-twitter": true,
	"twitter-square": true,
	"r-project": true,
	delicious: true,
	freebsd: true,
	vuejs: true,
	accusoft: true,
	ioxhost: true,
	"fonticons-fi": true,
	"app-store": true,
	"cc-mastercard": true,
	"itunes-note": true,
	golang: true,
	kickstarter: true,
	grav: true,
	weibo: true,
	uncharted: true,
	firstdraft: true,
	"square-youtube": true,
	"youtube-square": true,
	"wikipedia-w": true,
	rendact: true,
	wpressr: true,
	angellist: true,
	"galactic-republic": true,
	"nfc-directional": true,
	skype: true,
	joget: true,
	fedora: true,
	"stripe-s": true,
	meta: true,
	laravel: true,
	hotjar: true,
	"bluetooth-b": true,
	"sticker-mule": true,
	"creative-commons-zero": true,
	hips: true,
	behance: true,
	reddit: true,
	discord: true,
	chrome: true,
	"app-store-ios": true,
	"cc-discover": true,
	wpbeginner: true,
	confluence: true,
	mdb: true,
	dochub: true,
	"accessible-icon": true,
	ebay: true,
	amazon: true,
	unsplash: true,
	yarn: true,
	"square-steam": true,
	"steam-square": true,
	"500px": true,
	"square-vimeo": true,
	"vimeo-square": true,
	asymmetrik: true,
	"font-awesome-flag": true,
	"font-awesome-logo-full": true,
	"font-awesome": true,
	gratipay: true,
	apple: true,
	hive: true,
	gitkraken: true,
	keybase: true,
	"apple-pay": true,
	padlet: true,
	"amazon-pay": true,
	"github-square": true,
	"square-github": true,
	stumbleupon: true,
	fedex: true,
	"phoenix-framework": true,
	shopify: true,
	neos: true,
	hackerrank: true,
	researchgate: true,
	swift: true,
	angular: true,
	speakap: true,
	angrycreative: true,
	"y-combinator": true,
	empire: true,
	envira: true,
	"gitlab-square": true,
	"square-gitlab": true,
	studiovinari: true,
	"pied-piper": true,
	wordpress: true,
	"product-hunt": true,
	firefox: true,
	linode: true,
	goodreads: true,
	"odnoklassniki-square": true,
	"square-odnoklassniki": true,
	jsfiddle: true,
	sith: true,
	themeisle: true,
	page4: true,
	hashnode: true,
	react: true,
	"cc-paypal": true,
	squarespace: true,
	"cc-stripe": true,
	"creative-commons-share": true,
	bitcoin: true,
	keycdn: true,
	opera: true,
	"itch-io": true,
	umbraco: true,
	"galactic-senate": true,
	ubuntu: true,
	draft2digital: true,
	stripe: true,
	houzz: true,
	gg: true,
	dhl: true,
	"pinterest-square": true,
	"square-pinterest": true,
	xing: true,
	blackberry: true,
	"creative-commons-pd": true,
	playstation: true,
	quinscape: true,
	less: true,
	"blogger-b": true,
	opencart: true,
	vine: true,
	paypal: true,
	gitlab: true,
	typo3: true,
	"reddit-alien": true,
	yahoo: true,
	dailymotion: true,
	affiliatetheme: true,
	"pied-piper-pp": true,
	bootstrap: true,
	odnoklassniki: true,
	"nfc-symbol": true,
	ethereum: true,
	"speaker-deck": true,
	"creative-commons-nc-eu": true,
	patreon: true,
	avianex: true,
	ello: true,
	gofore: true,
	bimobject: true,
	"facebook-f": true,
	"google-plus-square": true,
	"square-google-plus": true,
	mandalorian: true,
	"first-order-alt": true,
	osi: true,
	"google-wallet": true,
	"d-and-d-beyond": true,
	periscope: true,
	fulcrum: true,
	cloudscale: true,
	forumbee: true,
	mizuni: true,
	schlix: true,
	"square-xing": true,
	"xing-square": true,
	bandcamp: true,
	wpforms: true,
	cloudversify: true,
	usps: true,
	megaport: true,
	magento: true,
	spotify: true,
	"optin-monster": true,
	fly: true,
	aviato: true,
	itunes: true,
	cuttlefish: true,
	blogger: true,
	flickr: true,
	viber: true,
	soundcloud: true,
	digg: true,
	"tencent-weibo": true,
	symfony: true,
	maxcdn: true,
	etsy: true,
	"facebook-messenger": true,
	audible: true,
	"think-peaks": true,
	bilibili: true,
	erlang: true,
	"cotton-bureau": true,
	dashcube: true,
	"42-group": true,
	innosoft: true,
	"stack-exchange": true,
	elementor: true,
	"pied-piper-square": true,
	"square-pied-piper": true,
	"creative-commons-nd": true,
	palfed: true,
	superpowers: true,
	resolving: true,
	xbox: true,
	searchengin: true,
	tiktok: true,
	"facebook-square": true,
	"square-facebook": true,
	renren: true,
	linux: true,
	glide: true,
	linkedin: true,
	hubspot: true,
	deploydog: true,
	twitch: true,
	ravelry: true,
	mixer: true,
	"lastfm-square": true,
	"square-lastfm": true,
	vimeo: true,
	mendeley: true,
	uniregistry: true,
	figma: true,
	"creative-commons-remix": true,
	"cc-amazon-pay": true,
	dropbox: true,
	instagram: true,
	cmplid: true,
	facebook: true,
	gripfire: true,
	"jedi-order": true,
	uikit: true,
	"fort-awesome-alt": true,
	phabricator: true,
	ussunnah: true,
	earlybirds: true,
	"trade-federation": true,
	autoprefixer: true,
	whatsapp: true,
	slideshare: true,
	"google-play": true,
	viadeo: true,
	line: true,
	"google-drive": true,
	servicestack: true,
	simplybuilt: true,
	bitbucket: true,
	imdb: true,
	deezer: true,
	"raspberry-pi": true,
	jira: true,
	docker: true,
	screenpal: true,
	bluetooth: true,
	gitter: true,
	"d-and-d": true,
	microblog: true,
	"cc-diners-club": true,
	"gg-circle": true,
	"pied-piper-hat": true,
	"kickstarter-k": true,
	yandex: true,
	readme: true,
	html5: true,
	sellsy: true,
	sass: true,
	wirsindhandwerk: true,
	wsh: true,
	buromobelexperte: true,
	salesforce: true,
	"octopus-deploy": true,
	medapps: true,
	ns8: true,
	"pinterest-p": true,
	apper: true,
	"fort-awesome": true,
	waze: true,
	"cc-jcb": true,
	"snapchat-ghost": true,
	snapchat: true,
	"fantasy-flight-games": true,
	rust: true,
	wix: true,
	"behance-square": true,
	"square-behance": true,
	supple: true,
	rebel: true,
	css3: true,
	staylinked: true,
	kaggle: true,
	"space-awesome": true,
	deviantart: true,
	cpanel: true,
	"goodreads-g": true,
	"git-square": true,
	"square-git": true,
	"square-tumblr": true,
	"tumblr-square": true,
	trello: true,
	"creative-commons-nc-jp": true,
	"get-pocket": true,
	perbyte: true,
	grunt: true,
	weebly: true,
	connectdevelop: true,
	leanpub: true,
	"black-tie": true,
	themeco: true,
	python: true,
	android: true,
	bots: true,
	"free-code-camp": true,
	hornbill: true,
	js: true,
	ideal: true,
	git: true,
	dev: true,
	sketch: true,
	"yandex-international": true,
	"cc-amex": true,
	uber: true,
	github: true,
	php: true,
	alipay: true,
	youtube: true,
	skyatlas: true,
	"firefox-browser": true,
	replyd: true,
	suse: true,
	jenkins: true,
	twitter: true,
	rockrms: true,
	pinterest: true,
	buffer: true,
	npm: true,
	yammer: true,
	btc: true,
	dribbble: true,
	"stumbleupon-circle": true,
	"internet-explorer": true,
	"telegram-plane": true,
	telegram: true,
	"old-republic": true,
	"square-whatsapp": true,
	"whatsapp-square": true,
	"node-js": true,
	"edge-legacy": true,
	"slack-hash": true,
	slack: true,
	medrt: true,
	usb: true,
	tumblr: true,
	vaadin: true,
	quora: true,
	reacteurope: true,
	"medium-m": true,
	medium: true,
	amilia: true,
	mixcloud: true,
	flipboard: true,
	viacoin: true,
	"critical-role": true,
	sitrox: true,
	discourse: true,
	joomla: true,
	mastodon: true,
	airbnb: true,
	"wolf-pack-battalion": true,
	"buy-n-large": true,
	gulp: true,
	"creative-commons-sampling-plus": true,
	strava: true,
	ember: true,
	"canadian-maple-leaf": true,
	teamspeak: true,
	pushed: true,
	"wordpress-simple": true,
	nutritionix: true,
	wodu: true,
	"google-pay": true,
	intercom: true,
	zhihu: true,
	korvue: true,
	pix: true,
	"steam-symbol": true,
};

type IconProps = ComponentProps<"i"> & {
	name: keyof typeof brands | string;
	size?: number;
};

export function Icon({ className, name, size, style, ...other }: IconProps) {
	const base = brands[name] ? "fa-brands" : "fa-solid";
	return (
		<div>
			<i
				{...other}
				className={cn("fa-fw", base, `fa-${name}`, className)}
				style={{
					lineHeight: "inherit",
					fontSize: size ? `${size}px` : undefined,
					...style,
				}}
			/>
		</div>
	);
}
