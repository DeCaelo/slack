<template>

<div class="sidebar">
    <h1 class="ui inverted center aligned header">Slack</h1>
    <connected-user></connected-user>
     <channels></channels>
    <div class="ui divider"></div>
</div>

</template>

<script>
    import ConnectedUser from './ConnectedUser'
    import Channels from './Channels'

    export default {
    name: 'sidebar',
    components: { ConnectedUser, Channels }
    }
</script>

<style scoped>
.sidebar{
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    width: 300px;
    padding: 10px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #4d394b;
    padding-top: 110px;
}
</style>
