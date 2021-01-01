<template>
  <div>
    <TheHeader />
    <MainSection />
    <TeamSection />
    <InfoSection />
    <ProgramsSection />
    <PaymentsSection />
    <ContactsSection />
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
  background: rgba(65, 105, 184, 0.8);
  cursor: default;
}
</style>
