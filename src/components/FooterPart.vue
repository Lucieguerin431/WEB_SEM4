<template>
	<footer>
		<ul>
			<li><a class="footer-elem link" href="mailto:info@epicfocus.com">info@epicfocus.com</a></li>
			<li><a class="footer-elem link" href="tel:+33 (0)1 95 74 42 43">+33 (0)1 95 74 42 43</a></li>
			<p class="footer-elem">©lucieguerin | 2024</p>
		</ul>
	</footer>
</template>
<script>
export default {
	name: "FooterPart",
}
</script>
<style scoped>
footer {
	background: #fff6f1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 3% 0;
	margin-top: 5%;
	border-top: 2px solid #000000;

}

ul {
	list-style: none;
}

.footer-elem {
	color: #000000;
	opacity: 0.33;
}

.link:hover {
	color: #E3622E;
	opacity: 0.99;
}
</style>