<template>
    <div>
        <h1 class="cv-title">ABDULLAH OĞUZ TANRIKULU</h1>

        <Section 
            title="PERSONAL DETAILS"
        >
            <KeyValueContent
                :data="personalDetailsData"
            />
        </Section>

        <Section
            title="EDUCATION">
            <HeadContent
                institution="Middle East Technical University"
                mission="B.S in Computer Engineering"
                date="Sep 2012 - Jan 2018"
                location="Ankara"
            />
            <ListContent
                :data="educationListData"
            />
            <KeyValueContent
                :data="educationPairData"
            />
        </Section>

        <Section
            title="EXPERIENCE">
            <HeadContent
                institution="İnnova Bilişim Çözümleri"
                mission="Software Development Senior Specialist"
                date="Apr 2020 - Present"
                location="Odtü Teknokent, Ankara"
            />
            <ListContent
                :data="innovaListData"
            />

            <HeadContent
                institution="ePlatform Bulut Bilişim A.Ş."
                mission="Software Developer"
                date="May 2018 - Mar 2020"
                location="Beytepe Teknokent, Ankara"
            />
            <ListContent
                :data="eplatformListData"
            />

            <HeadContent
                institution="ICterra Bilgi ve İletişim Teknolojileri San. ve Tic. A.Ş."
                mission="Part-time Software Engineer & Internship"
                date="Aug 2016 - Jan 2017"
                location="Odtü Teknokent, Ankara"
            />
            <ListContent
                :data="icterraListData"
            />

            <HeadContent
                institution="JeoIT"
                mission="Part-time Software Developer & Internship"
                date="Jan 2016 - May 2016"
                location="Cyberpark, Ankara"
            />
            <ListContent
                :data="jeoitListData"
            />
        </Section>

        <Section
            title="CERTIFICATES">
            <HeadContent
                institution="Oracle Certified Professional: Java SE 11 Developer"
                date="Aug 2020"
            />
            <KeyValueContent
                :data="java11Data"
            />

            <HeadContent
                institution="Oracle Certified Associate, Java SE 8 Programmer"
                date="Sep 2017"
            />
            <KeyValueContent
                :data="java8Data"
            />
        </Section>

        <Section
            title="PERSONAL PROJECTS">
            <HeadContent
                institution="Mandelbrot"
                mission="It is a fractal shape and known as repeats itself forever"
                date="Jun 2019"
            />
            <KeyValueContent
                :data="mandelbrotData"
            />

            <HeadContent
                institution="Reversi AI"
                mission="An ai software that plays reversi almost perfect."
                date="Apr 2018"
            />
            <KeyValueContent
                :data="reversiAiData"
            />

            <HeadContent
                institution="File Share"
                mission="A software that helps file sending momentarily without size limit"
                date="Mar 2018"
            />
            <KeyValueContent
                :data="fileShareData"
            />
        </Section>

        <div style="height: 80px">
            <img src="/qr.png" width="70px" align="right"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CvVue from '@/types/CvVue'
import Section from '@/components/Section.vue'
import HeadContent from '@/components/HeadContent.vue'
import KeyValueContent from '@/components/KeyValueContent.vue'
import Pair from '@/types/Pair'
import ListContent from '@/components/ListContent.vue'

@Component({
    components: {
        Section,
        HeadContent,
        KeyValueContent,
        ListContent
    }
})
export default class Main extends CvVue {

    personalDetailsData : Array<Pair> = [{
        key: this.bold("Date of Birth"),
        value: "April 3rd, 1994"
    }, {
        key: this.bold("Phone"),
        value: "+90 (538) 359 59 77"
    }, {
        key: this.bold("E-mail"),
        value: "oguztanrikulu94@gmail.com"
    }, {
        key: this.bold("Web"),
        value: this.link("https://otanrikulu.com", "https://otanrikulu.com")
    }, {
        key: this.bold("Marital Status"),
        value: "Single"
    }, {
        key: this.bold("Military Service"),
        value: "Completed"
    }]

    educationListData : Array<string> = [
        `Graduation project is ${this.bold("Secure Cloud")}.`,
        `${this.bold("Secure Cloud")} helps privacy of users using End-to-End encryption.`,
        `Uses ${this.bold("RSA")} and ${this.bold("AES")} encryption algorithms and supports sharing files with users and groups.`,
        `Developed ${this.bold("Owncloud Module")} and ${this.bold("Chrome Application")}.`
    ]

    educationPairData : Array<Pair> = [{
        key: this.bold("Presentation"),
        value: this.link("https://youtube.com/watch?v=mVeEeLvbtpw", "https://youtube.com/watch?v=mVeEeLvbtpw")
    }, {
        key: this.bold("Demo"),
        value: this.link("https://youtube.com/watch?v=fBFUma4CFWQ", "https://youtube.com/watch?v=fBFUma4CFWQ")
    }]

    innovaListData : Array<string> = [
        `Full stack development at ${this.bold("CPS")} project.`,
        `Used technologies are ${this.bold("Java")}, ${this.bold("Vue.js")}, ${this.bold("Spring")}, ${this.bold("Hibernate")}, ${this.bold("Plsql")}, 
            ${this.bold("Redis")}, ${this.bold("Git")} and ${this.bold("IntelliJ")}.`,
        `${this.bold("Backend jobs")}, ${this.bold("Jasper reports")} and ${this.bold("user interfaces")} are developed in CPS.`
    ]

    eplatformListData : Array<string> = [
        `Backend development at ${this.bold("İsg Katip")} and ${this.bold("Defter Beyan Sistemi")} projects.`,
        `Used technologies are ${this.bold("Java")}, ${this.bold("Spring")}, ${this.bold("Hibernate")}, ${this.bold("Liquibase")}, ${this.bold("Postgresql")}, 
            ${this.bold("Git")} and ${this.bold("IntelliJ")}.`,
        `${this.bold("Filter")} and ${this.bold("Business Interaction")} modules are developed in Isg Katip.`,
        `${this.bold("Başvuru")}, ${this.bold("idari")} and ${this.bold("Defter")} modules are developed in Defter Beyan Sistemi.`,
        `Prepared technical interview questions to codeboard.io.`,
        `${this.bold("JUnit")} and ${this.bold("Mockito")} are used for Unit Test and Mocking.`
    ]

    icterraListData : Array<string> = [
        `Full stack web development at ${this.bold("ATES")} project in ${this.bold("Cyber Security Team")}.`,
        `Using technologies are ${this.bold("Java")}, ${this.bold("Play Framework")}, ${this.bold("AngularJS 1")}, ${this.bold("Mysql")}, ${this.bold("Git")}, 
            ${this.bold("ActiveMQ")}.`,
        `Worked on security aspects of the project in order to obtain ${this.bold("Common Criteria Security Certificate")}.`
    ]

    jeoitListData : Array<string> = [
        `Full stack web development at ${this.bold("Belge Arşiv")} project.`,
        `Using technologies are ${this.bold("Asp.net")}, ${this.bold("Javascript")}, ${this.bold("Mssql")}, ${this.bold("Svn")} and ${this.bold("Visual Studio")}.`,
        `Completed tasks as integration of ${this.bold("Tesseract OCR")} library, listening emails and recording as document, adding user help gui with ${this.bold("JQuery")}.`
    ]

    java11Data : Array<Pair> = [{
        key: "Certificate",
        value: this.link("https://otanrikulu.com/OCPJSE11.pdf", "https://otanrikulu.com/OCPJSE11.pdf")
    }, {
        key: "Badge",
        value: this.link("https://youracclaim.com/badges/da7d8e74-25c4-4064-8d6a-a434a3570f0f", "https://youracclaim.com/badges/da7d8e74-25c4-4064-8d6a-a434a3570f0f")
    }]

    java8Data : Array<Pair> = [{
        key: "Certificate",
        value: this.link("https://otanrikulu.com/OCAJSE8.pdf", "https://otanrikulu.com/OCAJSE8.pdf")
    }, {
        key: "Badge",
        value: this.link("https://youracclaim.com/badges/9d5368a1-48d0-49e6-ba50-9e84cacf9220", "https://youracclaim.com/badges/9d5368a1-48d0-49e6-ba50-9e84cacf9220")
    }]

    mandelbrotData : Array<Pair> = [{
        key: "Demo",
        value: this.link("https://otanrikulu.com/Mandelbrot.jar", "https://otanrikulu.com/Mandelbrot.jar")
    }, {
        key: "Code",
        value: this.link("https://github.com/turbulence6th/Mandelbrot", "https://github.com/turbulence6th/Mandelbrot")
    }]

    reversiAiData : Array<Pair> = [{
        key: "Demo",
        value: this.link("https://reversi.otanrikulu.com", "https:/reversi.otanrikulu.com")
    }, {
        key: "Code",
        value: this.link("https://github.com/turbulence6th/ReversiAI-spring", "https://github.com/turbulence6th/ReversiAI-spring")
    }]

    fileShareData : Array<Pair> = [{
        key: "Demo",
        value: this.link("https://file-share.otanrikulu.com/", "https://file-share.otanrikulu.com/")
    }, {
        key: "Code",
        value: this.link("https://github.com/turbulence6th/file-share-v2", "https://github.com/turbulence6th/file-share-v2")
    }]
}
</script>

<style scoped>
.cv-title {
    text-align: center;
    margin-top: 60px;
}
</style>