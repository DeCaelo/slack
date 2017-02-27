
<template>

    <div class="connectedUser__container">
      <div class="ui items">
        <div class="item">
          <div class="ui mini image">
              <img  alt="avatar">
          </div>
          <div class="middle aligned content">
              <div class="ui container">
                  <div class="ui inverted header">
                    nom utilisateur
                  </div>
              </div>
          </div>
          <div class="extra">
              <button class="ui circular icon right floated button">
                  <i class="icon sign out"></i>
              </button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
    name: 'connected-user',
  }
</script>

<style scoped>
  .connectedUser__container{
    position: absolute;
    background-color: #4d394b;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 90px;
    padding: 8px;
    box-shadow: -4px 1px 8px 3px #2b1d18;
  }
</style>
