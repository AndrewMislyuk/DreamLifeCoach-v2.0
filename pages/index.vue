<template>
  <div>
    <TheHeader />
    <MainSection />
    <TeamSection />
    <InfoSection />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import MainSection from '@/components/MainSection'
import TeamSection from '@/components/TeamSection'
import InfoSection from '@/components/InfoSection'

export default {
  components: {
    TheHeader,
    MainSection,
    TeamSection,
    InfoSection,
  },
}
</script>

<style lang="scss">
*,
*:after,
*:before {
  padding: 0;
  margin: 0;
}

body {
  background: rgba(65, 105, 184, 0.8);
  cursor: default;
}
</style>
