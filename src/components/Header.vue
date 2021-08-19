<template>
	<header>
		<nav>
			<div id="brand">
				<span>KOMPAS</span>
				<h1>Karier</h1>
			</div>
			<router-link active-class="nav-active" class="nav-link" to="/"
				>Home</router-link
			>
			<router-link
				active-class="nav-active"
				class="nav-link"
				to="/daftarlowongan"
				>Lowongan Kerja</router-link
			>
		</nav>
	</header>
</template>

<script>
import Button from './Button.vue';
import InputText from './InputText.vue';

export default {
	name: 'Header',
	components: {
		Button,
		InputText,
	},
};
</script>

<style scoped>
header {
	background-color: #1662a0;
	padding: 20px 0;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 20;
}

nav {
	display: flex;
	width: 70%;
	margin: 0 auto;
	color: #fff;
}

#brand {
	font-style: italic;
	text-align: center;
}

nav * {
	margin-right: 20px;
}

#brand span {
	font-size: 12px;
	text-align: center;
}
#brand h1 {
	font-size: 40px;
	font-family: serif;
	font-weight: bold;
	letter-spacing: 2px;
	margin-top: -12px;
}

nav a {
	margin-top: 15px;
}

.nav-link {
	text-decoration: none;
	color: #fff;
	opacity: 0.7;
}

.nav-active {
	opacity: 1;
}
</style>
