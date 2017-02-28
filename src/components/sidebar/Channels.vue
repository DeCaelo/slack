<template>

    <div class="channels__container">
      <h2 class="ui inverted center aligned header">Channels <i class="add circle icon add_channel" @click="openChannelModal"></i></h2>
        <div class="channels__list">
          <ul>
            <li class="channels__item">affichage liste</li>
          </ul>
        </div>

        <div class="ui basic modal" id="channelModal">
          <div class="ui icon header">
            Ajouter un Channel
        </div>

        <div class="content">
          <div class="ui inverted form">
            <div class="field">
              <label for="new_channel">Nom du Channel</label>
                <input type="text" name="new_channel" v-model="new_channel" id="new_channel">
            </div>

            <div class="ui error message">

            </div>
          </div>
        </div>

          <div class="actions">
            <div class="ui red basic cancel inverted button">
              <i class="remove icon"></i>Annuler
            </div>
            <div class="ui green inverted button">
              <i class="checkmark icon"></i>Ajouter
            </div>
        </div>
      </div>
    </div>

</template>

<script>

    export default {
        name: 'channels',
        data () {
          return {
            channels: [],
            new_channel: '',
            errors: []
          }
        },
        methods: {
          openChannelModal () {
            $("#channelModal").modal('show')
        }
      }
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

