<template>
  <div>
    <TheHeader />
    <MainSection id="main" />
    <TeamSection id="team" />
    <InfoSection id="info" />
    <ProgramsSection id="program" />
    <PaymentsSection id="payments" />
    <ContactsSection id="contacts" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import MainSection from '@/components/MainSection'
import TeamSection from '@/components/TeamSection'
import InfoSection from '@/components/InfoSection'
import ProgramsSection from '@/components/ProgramsSection'
import PaymentsSection from '@/components/PaymentsSection'
import ContactsSection from '@/components/ContactsSection'

export default {
  components: {
    TheHeader,
    MainSection,
    TeamSection,
    InfoSection,
    ProgramsSection,
    PaymentsSection,
    ContactsSection,
    TheFooter,
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
  background: #fff;
  cursor: default;
}

html {
  scroll-behavior: smooth;
}
</style>
