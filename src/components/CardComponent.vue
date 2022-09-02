<template>
  <div class="card w-1/3 p-8 h-full">
    <div class="card-container p-6 flex flex-col rounded-3xl h-full justify-between text-center shadow-xl">
        <img :src="item.img" alt="" class="rounded-full mx-auto">
        <div>
            <p class="text-2xl pb-2 font-semibold">{{item.title}}</p>
            <p class="text-xl">{{item.subtitle}}</p>
        </div>
        <div class="btn rounded-lg self-center"><a href="/">Button</a></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['item'],
}
</script>

<style lang="scss">
@import '../style/vars';
.card{
    height: 100%;
    .card-container{
        background-color: $white;
        img{
            width: 100px;
            height: 100px;
        }
        .btn{
            padding: 0.5rem 1rem;
            background-color: $btn;
            a{
                color: $white;
            }
        }
    }
}
</style>