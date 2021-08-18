<template>
	<Title>
		<h1>Temukan karir Impianmu</h1>
		<span>Mulai berkarir dan temukan tujuanmu bersama kami</span>
		<div class="find">
			<InputText
				v-model="pekerjaan"
				class="inputText"
				icon="&#xF002; pekerjaan"
			/>
			<InputText v-model="lokasi" class="inputText" icon="&#xf3c5; lokasi" />
			<InputText v-model="divisi" class="inputText" icon="&#xf007; divisi" />
		</div>
	</Title>
	<div class="karir-container">
		<KarirBox
			:lowongan="lowongan"
			v-for="lowongan in activePekerjaan"
			:key="lowongan.id"
		/>
	</div>
</template>

<script>
import Title from '../components/Title';
import Button from '../components/Button';
import InputText from '../components/InputText';
import KarirBox from '../components/KarirBox';
import router from '../router';

export default {
	name: 'DaftarLowongan',
	components: { Title, Button, InputText, KarirBox },
	data() {
		return {
			pekerjaan: this.$route.query.pekerjaan,
			lokasi: this.$route.query.lokasi,
			divisi: this.$route.query.divisi,
		};
	},
	props: ['daftarLowongan'],
	computed: {
		activePekerjaan: function() {
			console.log(typeof this.pekerjaan);
			return this.daftarLowongan.filter(({ namaPekerjaan, lokasi, divisi }) => {
				console.log(divisi.toLowerCase().includes(this.divisi));
				return (
					namaPekerjaan.toLowerCase().includes(this.pekerjaan) &&
					lokasi.toLowerCase().includes(this.lokasi) &&
					divisi.toLowerCase().includes(this.divisi)
				);
			});
		},
	},
};
</script>

<style scoped>
.find {
	position: relative;
	background-color: white;
	width: 60%;
	margin: 0 auto;
	left: 0;
	right: 0;
	top: 120px;
	padding: 40px 0;
	border-radius: 10px;
	box-shadow: 1px 2px 5px #a3a1a1;
}

.karir-container {
	width: 80%;
	margin: 100px auto 20px;
}

h1 {
	font-family: serif;
	font-size: 48px;
}

span {
	font-style: italic;
	font-size: 14px;
}

.inputText {
	border: solid 1px black;
}
</style>
