<template>
  <div class="card w-1/2 lg:w-1/3 p-8 h-full">
    <div class="card-container bg-white p-6 flex flex-col rounded-3xl h-full justify-between text-center shadow-xl">
        <img :src="item.img" alt="" class="rounded-full mx-auto">
        <div>
            <p class="text-2xl pb-2 font-semibold">{{item.title}}</p>
            <p class="text-xl">{{item.subtitle}}</p>
        </div>
        <a href="https://www.nois3.it/" target=”_blank” class="btn rounded-lg self-center bg-btn text-white active:bg-white">Button</a>
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
    .card-container{
        img{
            width: 100px;
            height: 100px;
        }
        .btn{
            padding: 0.3rem 0.7rem;
            border: 3px solid transparent;
            transition: all 0.4s ease-in-out;
            &:visited{
                background-color: #ca0d00;
            }
            &:hover{
                transform: scale(1.1);
            }
        }
    }
}
</style>