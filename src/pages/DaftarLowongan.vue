<template>
	<Title>
		<h1>Temukan karir Impianmu</h1>
		<span>Mulai berkarir dan temukan tujuanmu bersama kami</span>
		<div class="find">
			<div class="input-container">
				<InputText
					v-model="pekerjaan"
					class="inputText"
					icon="&#xF002; pekerjaan"
				/>
			</div>
			<div class="input-container">
				<InputText v-model="lokasi" class="inputText" icon="&#xf3c5; lokasi" />
			</div>
			<div class="input-container">
				<InputText v-model="divisi" class="inputText" icon="&#xf007; divisi" />
			</div>
		</div>
	</Title>
	<div class="karir-container">
		<KarirBox
			:lowongan="lowongan"
			v-for="lowongan in activePekerjaan"
			:key="lowongan.id"
		/>
	</div>
	<h4 class="notfound" v-if="activePekerjaan.length <= 0">
		Pekerjakan Tidak Ditemukan
	</h4>
</template>

<script>
import Title from '../components/Title';
import Button from '../components/Button';
import InputText from '../components/InputText';
import KarirBox from '../components/KarirBox';

export default {
	name: 'DaftarLowongan',
	components: { Title, Button, InputText, KarirBox },
	data() {
		return {
			pekerjaan: this.$route.query.pekerjaan ? this.$route.query.pekerjaan : '',
			lokasi: this.$route.query.lokasi ? this.$route.query.lokasi : '',
			divisi: this.$route.query.divisi ? this.$route.query.divisi : '',
		};
	},
	props: ['daftarLowongan'],

	computed: {
		activePekerjaan: function() {
			return this.daftarLowongan.filter(({ namaPekerjaan, lokasi, divisi }) => {
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
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	background-color: white;
	margin: 0 auto;
	left: 0;
	right: 0;
	top: 120px;
	padding: 40px 20px;
	border-radius: 10px;
	box-shadow: 1px 2px 5px #a3a1a1;
}

.karir-container {
	width: 80%;
	margin: 100px auto 20px;
}

.input-container {
	margin: 5px 20px;
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

.notfound {
	font-size: 30px;
	text-align: center;
	padding: 50px 0;
}
</style>
