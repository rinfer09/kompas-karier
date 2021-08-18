<template>
	<div class="content">
		<Title>
			<h1>Jadilah Bagian Dari Perubahan Indonesia</h1>
			<span>Bekerja dengan hati dan dedikasi bersama kami</span>
			<div class="find">
				<InputText v-model="pekerjaan" icon="&#xF002; pekerjaan" />
				<InputText icon="&#xf3c5; lokasi" v-model="lokasi" />
				<div class="button-container">
					<Button @click="cariHandler" width="40px" height="40px"
						><i class="fas fa-search"></i
					></Button>
					<span>atau</span>
					<Button @click="lihatLowonganHandler" height="40px" width="200px"
						>Lihat Semua karier</Button
					>
				</div>
			</div>
		</Title>
		<section class="tujuan-section">
			<h1 class="section-title">Tujuan Kami</h1>
			<div class="tujuan">
				<article>
					<h2>Bekerja dengan tujuan baik</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
						aperiam hic ducimus cumque numquam quam quasi, sunt ipsum eaque non
						a voluptatem quisquam magni aliquid porro ipsam, veniam architecto
						nemo.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
						obcaecati labore illo ipsam nobis maiores, architecto consequatur
						voluptate molestiae nihil consectetur ab repellat nostrum explicabo
						eum accusamus eius corrupti unde!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
						obcaecati labore illo ipsam nobis maiores, architecto consequatur
						voluptate molestiae nihil consectetur ab repellat nostrum explicabo
						eum accusamus eius corrupti unde!
					</p>
				</article>
				<div class="foto-container">
					<img src="../assets/foto.png" alt="foto potrait" />
				</div>
			</div>
		</section>
		<section class="quote-section">
			<div class="quote">
				<q
					>Bekerja dalam bidang apapun sesungguhnya adalah interaksi, kombinasi
					yang kreatif antara intelek dan hati</q
				>
				<h3>Jakob Oetama</h3>
			</div>
		</section>
		<section class="tentang-section">
			<h1 class="section-title">Tentang kami</h1>
			<div class="tentang-kami">
				<article>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
						aperiam hic ducimus cumque numquam quam quasi, sunt ipsum eaque non
						a voluptatem quisquam magni aliquid porro ipsam, veniam architecto
						nemo.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
						obcaecati labore illo ipsam nobis maiores, architecto consequatur
						voluptate molestiae nihil consectetur ab repellat nostrum explicabo
						eum accusamus eius corrupti unde! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Accusantium nihil ratione cum. Minus
						maxime ab dolore beatae exercitationem nesciunt nostrum ut, quisquam
						eum praesentium deserunt explicabo blanditiis vero eveniet
						asperiores?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
						obcaecati labore illo ipsam nobis maiores, architecto consequatur
						voluptate molestiae nihil consectetur ab repellat nostrum explicabo
						eum accusamus eius corrupti unde! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Nam eveniet eos illo. Facilis,
						cupiditate culpa officia sint et, nobis delectus omnis non
						voluptatem laudantium voluptates amet. Distinctio autem repellat
						dolor!
					</p>
				</article>
			</div>
		</section>
	</div>
</template>

<script>
import Title from '../components/Title';
import Button from '../components/Button';
import InputText from '../components/InputText';
import router from '../router';

export default {
	name: 'Home',
	components: {
		Title,
		Button,
		InputText,
	},
	data() {
		return {
			pekerjaan: '',
			lokasi: '',
		};
	},
	methods: {
		lihatLowonganHandler: function(e) {
			router.push('daftarlowongan');
		},
		cariHandler: function(e) {
			router.push({
				path: 'daftarlowongan',
				query: { lokasi: this.lokasi, pekerjaan: this.pekerjaan, divisi: '' },
			});
		},
	},
};
</script>

<style scoped>
.search-icon {
	width: 15px;
	color: white;
}

.find {
	display: flex;
	margin: 20px auto 0;
	width: 60%;
}

.button-container {
	flex: 2;
}

.button-container > * {
	margin: 0 10px;
}
.tujuan,
.tentang-kami {
	display: flex;
	width: 70%;
	margin: 0 auto;
}
.section-title {
	text-align: center;
	margin: 30px;
	font-size: 36px;
}

article {
	flex: 2;
	padding: 40px;
}

p {
	text-align: justify;
	margin-bottom: 20px;
}

.foto-container {
	flex: 1;
}

.quote-section {
	text-align: center;
	background-color: #dadada;
	color: #1662a0;
	padding: 100px;
}

q {
	font-size: 20px;
	font-style: italic;
}

.tentang-kami {
	text-align: center;
}

.tentang-kami h1 {
	margin: 20px 0;
}

.tentang-kami article {
	margin-top: -30px;
}
</style>
