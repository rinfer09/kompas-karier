<template>
	<div class="detail-Lowongan">
		<Title class="title">
			<h1>{{ lowongan.namaPekerjaan }}</h1>
			<h3>{{ lowongan.kategori }} &#8226; {{ lowongan.divisi }}</h3>
			<div class="button-container">
				<Button width="120px">Daftar</Button>
			</div>
		</Title>
		<div class="content">
			<div class="box-kiri">
				<section class="tentang-pekerjaan">
					<h1>Tentang Pekerjaan</h1>
					<p>{{ lowongan.tentang }}</p>
				</section>
				<section class="syarat-pekerjaan">
					<h1>Syarat Pekerjaan</h1>
					<ul v-for="(syarat, index) in lowongan.syarat" :key="index">
						<li>{{ syarat }}</li>
					</ul>
				</section>
			</div>

			<section class="detil-pekerjaan">
				<h1>Detil Pekerjaan</h1>
				<h4>Lokasi Pekerjaan</h4>
				<p>{{ lowongan.lokasi }}</p>
				<h4>Departemen</h4>
				<p>{{ lowongan.divisi }}</p>
				<h4>Perusahan</h4>
				<p>{{ lowongan.perusahan }}</p>
				<div class="button-container">
					<Button width="250px">Daftar</Button>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import Title from '../components/Title';
import Button from '../components/Button';

export default {
	name: 'DetailLowongan',
	components: { Title, Button },
	props: ['daftarLowongan'],

	data() {
		return {
			id: 0,
			lowongan: {},
		};
	},
	created() {
		this.id = this.$route.params.id;
		this.lowongan = this.daftarLowongan.find(({ id }) => id == this.id);
		console.log(this.lowongan);
	},
};
</script>

<style scoped>
.box {
	width: 1000px;
	height: 500px;
}

.title {
	text-align: left;
}

.button-container {
	margin: 30px 0;
}

.content {
	width: 80%;
	margin: 30px auto;
	display: flex;
}

section {
	min-height: 300px;
	width: 80%;
	border-radius: 20px;
	padding: 20px;
}

section h1 {
	border-left: solid 5px #e3931f;
	margin: 30px 0 20px;
}

li {
	margin: 10px 0;
}

h4 {
	margin: 20px 0 5px;
}
</style>
