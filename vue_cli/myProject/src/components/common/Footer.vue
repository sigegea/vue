<template>
    <ul class="footer">
            <li>电影</li>
            <li>音乐</li>
            <li>书籍</li>
            <li>图片</li>
    </ul>
</template>

<script>
export default {
    
}
</script>


<style scoped>
.footer{
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    height: 1rem;
}
.footer li{
    flex-grow: 1;
}
</style>
