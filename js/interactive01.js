const button = document.getElementById("interactive01");
const message = document.getElementById("interactive01-message");
var clicks = 0;
const messages = [
	"You thought you good? Nope.",
	"This isn't your kingdom.",
	"You won't even like it.",
	"404: Decess Acnied. Wait, that's illegal in English.",
	"GDucpm is having a shower. Wait forever.",
	"This isn't asking for consent. This is trying to break into it.",
	"This button is... suspicious.",
	"GDucpm uses Arch, btw.",
	"A full commitment's what I'm thinking of... You wouldn't get this from any other guy",
	"I... just wanna tell you how I'm feeling... Gotta make you understand",
	"Clicking a button is neither polite or impolite.",
	"Have you ever questioned your existence?",
	"Not fun. 10/10 disagree. Stop clicking.",
	"Richard... Mathew Stalman.",
	"Hello!",
	"\\e[-39m lol? \\e[0m",
	"The person in front of you is Clubstep. Wait, it's not even a person; it's a demon.",
	"The world goes the opposite way.",
	"This is a fake door. It cannot be opened.",
	"Oh, have you tried running XWayland inside Xorg?",
	"Why are you still here? Want some money?",
	"I might be hallucinating right now.",
	"Never gonna run around and desert you",
	"sudo /usr/bin/sudo /usr/bin/bash -c '/usr/bin/sudo /usr/bin/rm ~/sussy.txt'&&systemctl reboot",
	"Don't you mind staying outside?",
	"Man, why are you running KDE Plasma with gdm?",
	"I don't think what you think.",
	"GDucpm is offline. Try `ping archlinux.org` instead.",
	"What you're seeing here is nothing.",
	"Fun fact: Press Alt+[SysRq]+C and your Linux system will crash.",
	"93n700 4rch f3d0r4 u6un7u 41pin3 514ckw4r3 0p3n5u53 3l3m3n74ry min7 m4nj4r0",
	"Wow, why are you running htop inside neovim?",
	"exec /usr/bin/pls_stop_clicking"
];
button.addEventListener("click", () => {
	const random = Math.floor(Math.random() * messages.length);
	if (clicks > 0) {
		message.textContent = messages[random] + " (Please try again)";
	} else {
		message.textContent = "An unknown error has occurred. However, please click again NOW that it might actually work.";
	}
	clicks++;
	// Add shake animation
	message.classList.remove("shake"); // reset if already shaking
	void message.offsetWidth;          // trick to re-trigger animation
	message.classList.add("shake");
});
