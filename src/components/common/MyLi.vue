<template>
	<div>
		<li>
			<slot></slot>
		</li>
	</div>
</template>

<script type="text/javascript">
export default {
  name:'my-li',
  data (){
    return{

    }
  }
}


</script>

<style type="text/css" scoped>
	li {
	  list-style: none;
	  float: left;
	  width: 25%;
	  text-align: center;
	}

</style>
