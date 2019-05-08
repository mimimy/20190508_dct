<template>
	<div class="tmpl">
		<mt-header :title="title">
			<div @click="goback" slot="left">
				<mt-button icon="back">back</mt-button>
			</div>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'nav-bar',
		props:['title'],
		data (){
			return{
				
			}
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}
		}
	}


</script>

<style scoped>
	.tmpl .mint-header{
		background-color: #1d4e75;
	}

</style>