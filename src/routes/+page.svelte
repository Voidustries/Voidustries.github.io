<script lang="ts">
	import { onMount } from 'svelte';

	const GITHUB_URL = 'https://github.com/Voidustries';
	const ACCENT = '#c9b6e8';

	const NOUNS = [
    'people',
    'nerds',
    'geeks',
    'degenerates',
    'insomniacs',
    'tinkerers',
    'night owls',
    'hobbyists',
    'idiots',
    'lunatics',
    'shut-ins',
    'caffeine addicts',
    'loose cannons',
    'unemployables',
    'hermits',
    'sleepless freaks',
    'night gremlins',
    'menaces to sleep',
    'weirdos',
    'misfits',
    'oddballs',
    'basement dwellers',
    'screen zombies',
    'code monkeys',
    'bug hunters',
    'terminal junkies',
    'procrastinators',
    'chronic overthinkers',
    'rabbit-holers',
    'tab hoarders',
    'energy drink casualties',
    'sunlight avoiders',
    'wifi squatters',
    'notification addicts',
    'doom scrollers',
    'buffer overflow enthusiasts',
    'stack overflow refugees',
    'merge conflict survivors',
    'yak shavers',
    'scope creep victims',
    'deadline dodgers',
    'side quest chasers',
    'perpetual beta testers',
    'forum lurkers',
    'discord dwellers',
    'reply guys',
    'know-it-alls',
    'sofa strategists',
    'armchair experts',
    'link clickers',
    'rogue agents',
    'wildcards',
    'oddities',
    'malcontents',
    'troublemakers',
    'agents of chaos',
    'rule breakers',
    'system crashers',
    'error throwers',
    'null pointers',
    'infinite loopers',
    'race condition enjoyers',
    'segfault survivors',
    'ratio takers',
    'basement goblins'
	];
	const GLYPHS = '▚▞█▓▒░/\\|<>=+*#@$%&';

	let noun = $state(NOUNS[0]);
	let heroEl: HTMLDivElement;
	let orbAEl: HTMLDivElement;
	let orbBEl: HTMLDivElement;

	function randomGlyphs(n: number): string {
		let s = '';
		for (let i = 0; i < n; i++) s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
		return s;
	}

	onMount(() => {
		let index = 0;
		let frame = 0;
		let prev = NOUNS[0];
		let phase: 'hold' | 'dissolve' | 'reveal' = 'hold';
		const HOLD_FRAMES = 85;
		const DISSOLVE_FRAMES = 9;

		const engine = setInterval(() => {
			const target = NOUNS[index];
			frame++;

			if (phase === 'hold') {
				if (frame >= HOLD_FRAMES) {
					prev = target;
					index = (index + 1) % NOUNS.length;
					phase = 'dissolve';
					frame = 0;
				}
				return;
			}

			const next = NOUNS[index];

			if (phase === 'dissolve') {
				const len = Math.max(
					1,
					Math.round(prev.length + (next.length - prev.length) * (frame / DISSOLVE_FRAMES))
				);
				noun = randomGlyphs(len);
				if (frame >= DISSOLVE_FRAMES) {
					phase = 'reveal';
					frame = 0;
				}
				return;
			}

			const locked = Math.min(frame, next.length);
			let out = next.slice(0, locked);
			for (let i = locked; i < next.length; i++) out += next[i] === ' ' ? ' ' : randomGlyphs(1);
			noun = out;
			if (locked >= next.length) {
				phase = 'hold';
				frame = 0;
			}
		}, 42);

		function onMove(e: MouseEvent) {
			const rect = heroEl.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width - 0.5;
			const y = (e.clientY - rect.top) / rect.height - 0.5;
			orbAEl.style.transform = `translate(${(x * 44).toFixed(1)}px, ${(y * 44).toFixed(1)}px)`;
			orbBEl.style.transform = `translate(${(x * -30).toFixed(1)}px, ${(y * -30).toFixed(1)}px)`;
		}
		heroEl.addEventListener('mousemove', onMove);

		return () => {
			clearInterval(engine);
			heroEl.removeEventListener('mousemove', onMove);
		};
	});
</script>

<div class="hero" bind:this={heroEl} style="--accent: {ACCENT}">
	<div class="orb orb-a" bind:this={orbAEl}></div>
	<div class="orb orb-b" bind:this={orbBEl}></div>
	<div class="vignette"></div>

	<div class="content">
		<header>
			<img src="/logo-cream.svg" alt="Voidustries" class="logo" />
			<nav>
				<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">github</a>
			</nav>
		</header>

		<div class="copy">
			<div class="eyebrow">est. in a group chat</div>
			<h1>
				<span class="line1">A few <span class="accent">{noun}</span></span>
				<span>who keep building things</span>
				<span>instead of sleeping</span>
			</h1>
			<p>Voidustries is where those things live. Nothing is done.</p>
			<div class="cta">
				<a class="button" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
			</div>
		</div>

		<footer>
			<span>voidustries.ca</span>
			<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">github</a>
		</footer>
	</div>
</div>

<style>
	:global(html, body) {
		margin: 0;
		background: #15121b;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	.hero {
		position: relative;
		min-height: 100vh;
		overflow: hidden;
		background: #15121b;
		color: #ece7f2;
		font-family: 'Space Grotesk', sans-serif;
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		pointer-events: none;
		transition: transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	.orb-a {
		top: 4%;
		left: 12%;
		width: min(620px, 60vw);
		height: min(620px, 60vw);
		background: radial-gradient(circle, rgba(201, 182, 232, 0.42), rgba(201, 182, 232, 0) 65%);
		filter: blur(20px);
	}

	.orb-b {
		top: 14%;
		left: 52%;
		width: min(520px, 50vw);
		height: min(520px, 50vw);
		background: radial-gradient(circle, rgba(168, 216, 192, 0.34), rgba(168, 216, 192, 0) 65%);
		filter: blur(24px);
		transition-duration: 1.3s;
	}

	.vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(120% 90% at 50% 0%, rgba(21, 18, 27, 0) 30%, rgba(21, 18, 27, 0.75) 100%);
		pointer-events: none;
	}

	.content {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: clamp(20px, 4vw, 26px) clamp(20px, 6vw, 48px);
	}

	.logo {
		height: 20px;
		width: auto;
		display: block;
	}

	nav {
		display: flex;
		gap: 30px;
		font-size: 14px;
		font-family: 'JetBrains Mono', monospace;
	}

	.copy {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: clamp(48px, 10vw, 150px) clamp(20px, 6vw, 48px);
		max-width: 980px;
	}

	.eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: #a8d8c0;
		margin-bottom: 28px;
	}

	h1 {
		margin: 0;
		font-size: clamp(34px, 6vw, 68px);
		line-height: 1.06;
		font-weight: 500;
		letter-spacing: -0.03em;
	}

	h1 > span {
		display: block;
	}

	.line1 {
		white-space: nowrap;
	}

	.accent {
		color: var(--accent);
	}

	p {
		margin: 30px 0 0;
		font-size: clamp(16px, 2vw, 19px);
		line-height: 1.65;
		color: #b5abc2;
		max-width: 540px;
	}

	.cta {
		display: flex;
		gap: 14px;
		margin-top: 44px;
	}

	.button {
		padding: 13px 24px;
		border-radius: 999px;
		background: var(--accent);
		color: #221f2b;
		font-size: 15px;
		font-weight: 500;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 40px clamp(20px, 6vw, 48px) 44px;
		border-top: 1px solid #241f2e;
		font-family: 'JetBrains Mono', monospace;
		font-size: 13px;
		color: #6d6479;
	}

	@media (prefers-reduced-motion: reduce) {
		.orb {
			transition: none;
		}
	}
</style>
