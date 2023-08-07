<template>
    <div>
        {{content}}
        <!-- {{index}} -->
        <span>{{rootCommentCounts - index}}楼</span>

        <!-- {{createDate | format}} -->
        <!-- <span>{{comment.createDate | formatTime}}</span> -->
	    <i class="el-icon-time"></i>&nbsp;{{comment.createDate | format}}

    </div>
</template>

<script>
   
export default {
    name: 'Item',
    props: {
      id: String,
      userVo: Object,
      childrens: [],
      content: String,
      index: Number,
      rootCommentCounts: Number,
    //   createDate: String,
      comment:Object
    },
}
</script>

<style scoped>

</style>