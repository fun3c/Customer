<template>
  <div id="app">
   
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  list-style: none;
}

::-webkit-scrollbar {
width: 10px; /*对垂直流动条有效*/
height: 10px; /*对水平流动条有效*/
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track{
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: rgb(255, 255, 255);
border-radius: 3px;
}


/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb{
border-radius: 7px;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: #666666;
}


// /*定义两端按钮的样式*/
// ::-webkit-scrollbar-button {
// // background-color:cyan;
// }

// /*定义右下角汇合处的样式*/
// ::-webkit-scrollbar-corner {
// background:khaki;
// }
</style>
