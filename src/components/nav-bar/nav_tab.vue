<template>
  <div>
    <div class="wrapper">
      <div class="navbar">
        <i class="fas fa-home icon-home" />
        <i class="fas fa-cog icon-settings" />
        <div class="circle">
          <i class="fas fa-plus plus-icon" />
        </div>
        <div class="circle-background" />
      </div>
    </div>
  </div>
</template>


<style lang="scss">

$navbar-height: 100px;
$circle-radius: 80px;
$background-color: #000;

.wrapper {
  height: 100%;

  background-color: $backgroundColor;

  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  position: fixed;
  bottom: env(safe-area-inset-bottom);

  min-width: 400px;
  height: $navbar-height;

  background-color: white;
  border-radius: 25px;
  box-shadow: 0 10px 20px rgb(82 74 74 / 30%);

  padding-right: 35px;
  padding-left: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.circle {
  margin-bottom: 0;

  position: absolute;
  bottom: calc(100px - ($circle-radius / 2));
  left: 50%;
  z-index: 9;

  width: $circle-radius;
  height: $circle-radius;
  overflow: hidden;

  background-color: rgb(255 94 0);
  border-radius: 40px;
  box-shadow: 0 5px 5px rgb(255 147 85 / 35%);

  transition: height 0.3s;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.circle-background {
  margin-bottom: 0;

  position: absolute;
  bottom: calc(100px - #{$circle-radius + 20} / 2);
  left: 50%;

  width: calc(#{$circle-radius} + 20px);
  height: calc(#{$circle-radius} + 20px);

  background-color: $backgroundColor;
  border-radius: calc(#{$circle-radius + 20} / 2);

  transform: translateX(-50%);
}

</style>
