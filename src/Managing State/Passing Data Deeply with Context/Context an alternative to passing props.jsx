/**
 * Melewatkan prop antar komponen bisa jadi pekerjaan yang rumit ketika memiliki banyak komponen
 * React menyediakan context sebagai alternatif yang membuat parent komponen dapat menyediakan data
 * (prop) ke semua komponen tree dibawahnya
 * 
 * Ada 3 tahapan penggunaan context:
 * 
 * 1. Membuat context
 * 2. Menggunakan context tersebut di seluruh komponen yang membutuhkan data (prop)
 * 3. Menyediakan context dari komponen yang menentukan / menginisialisasi data (prop)
 */

import Heading from "./Heading";
import Section from "./Section";

export default function Page(){
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>SubHeading</Heading>
          <Heading>SubHeading</Heading>
          <Heading>SubHeading</Heading>
          <Section>
            <Heading>SubSubHeading</Heading>
            <Heading>SubSubHeading</Heading>
            <Heading>SubSubHeading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  )
}
