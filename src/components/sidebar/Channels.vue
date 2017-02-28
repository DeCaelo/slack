<template>

    <div class="channels__container">
        <h2 class="ui inverted center aligned header">Channels <i class="add circle icon add_channel" ></i></h2>
        <div class="channels__list">
          <ul>
            <li class="channels__item">affichage liste</li>
          </ul>
        </div>

</template>

<script>

    export default {
        name: 'channels'
    }
</script>

<style scoped>
  .channels__list {
    min-height: 100px;
    max-height: 300px!important;
    overflow-y: auto!important;
  }
  .channels__container ul{
    margin: 0;
    padding: 0;
  }
  .channels__item{
    height: 30px;
    margin: 8px;
    list-style: none;
    background-color: #4c9689;
    cursor: pointer;
    line-height: 30px;
    border-radius: 2px;
    padding-left: 12px;
    font-weight: bold;
    font-size: 1.1em;
    }
  .channel__count{
    float:right;
  }
  .is_active{
    background-color: #407a70;
  }
  .channels__item:hover{
    background-color: #407a70;
  }
  .add_channel{
    cursor: pointer;
    color: #695666;
  }
  .add_channel:hover{
    color: #689F38;
  }
  .ui.header>.icon {
    font-size: 1.2em;
  }
</style>

