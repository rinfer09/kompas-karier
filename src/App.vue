<template>
	<Header ref="header" />
	<router-view :daftarLowongan="lowongan"></router-view>
	<Footer />
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

const data = [
	{
		id: 1,
		namaPekerjaan: 'Web Developer',
		divisi: 'IT Department',
		kategori: 'Full Time',
		tentang:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		tanggal: 'January 17, 2021-February 20, 2021',
		lokasi: 'Jakarta',
		perusahan: 'PT Kompas Media Nusantara',
		syarat: [
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
		],
	},
	{
		id: 2,
		namaPekerjaan: 'Marketing Consultant',
		divisi: 'Marketing',
		kategori: 'Full Time',
		tentang:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		tanggal: 'January 17, 2021-February 20, 2021',
		lokasi: 'Jakarta',
		perusahan: 'PT Kompas Media Nusantara',
		syarat: [
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
		],
	},
	{
		id: 3,
		namaPekerjaan: 'Marketing Consultant',
		divisi: 'Marketing',
		kategori: 'Full Time',
		tentang:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		tanggal: 'January 17, 2021-February 20, 2021',
		lokasi: 'Depok',
		perusahan: 'PT Kompas Media Nusantara',
		syarat: [
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
		],
	},
	{
		id: 4,
		namaPekerjaan: 'Web Developer',
		divisi: 'IT Department',
		kategori: 'Full Time',
		tentang:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		tanggal: 'January 17, 2021-February 20, 2021',
		lokasi: 'Bandung',
		perusahan: 'PT Kompas Media Nusantara',
		syarat: [
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
		],
	},
	{
		id: 5,
		namaPekerjaan: 'Accountant',
		divisi: 'Finance',
		kategori: 'Full Time',
		tentang:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		tanggal: 'January 17, 2021-February 20, 2021',
		lokasi: 'Bandung',
		perusahan: 'PT Kompas Media Nusantara',
		syarat: [
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
		],
	},
	{
		id: 6,
		namaPekerjaan: 'Accountant',
		divisi: 'Finance',
		kategori: 'Part Time',
		tentang:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		tanggal: 'January 17, 2021-February 20, 2021',
		lokasi: 'Jakarta',
		perusahan: 'PT Kompas Media Nusantara',
		syarat: [
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
			'Lorem ipsum is placeholder text commonly',
		],
	},
];

export default {
	name: 'App',
	components: {
		Header,
		Footer,
	},

	data() {
		return {
			lowongan: data,
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #000;
}

* {
	margin: 0;
	padding: 0;
}
</style>
