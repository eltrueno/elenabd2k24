<template>
    <div id="compcontainer" class="text-white bg-black">
        <div id="spotlightcontainer" @mousemove="moveSpotlight" class="h-full w-full fixed top-0 left-0">
            <div id="spotlight" :class="!spotActive && 'disabled'"></div>
            <div class="flex flex-col justify-center items-center w-full h-full space-y-20">
                <div class="text-5xl harrypfont px-20">
                    <p class="text-pretty text-center select-none" v-if="nquestion===1"><vue-writer  :array="[question1]" :typeSpeed="50" :eraseSpeed="33" :delay="typeDelay" :start="typeStart" /></p>
                    <p class="text-pretty text-center select-none" v-if="nquestion===2"><vue-writer  :array="[question2]" :typeSpeed="50" :eraseSpeed="33" :delay="typeDelay" :start="typeStart" /></p>
                    <p class="text-pretty text-center select-none" v-if="nquestion===3"><vue-writer  :array="[question3]" :typeSpeed="50" :eraseSpeed="33" :delay="typeDelay" :start="typeStart" /></p>
                    <p class="text-pretty text-center select-none" v-if="nquestion===4"><vue-writer  :array="[question4]" :typeSpeed="50" :eraseSpeed="33" :delay="typeDelay" :start="typeStart" /></p>
                    <p class="text-pretty text-center select-none" v-if="nquestion===5"><vue-writer  :array="[question5]" :typeSpeed="50" :eraseSpeed="33" :delay="typeDelay" :start="typeStart" /></p>
                </div>
                <div v-if="nquestion===1" class="w-full flex h-fit justify-around">
                    <Hextechbutton @click="wrongAnswer(1)">{{btn1}}</Hextechbutton>
                    <Hextechbutton @click="firstQuestionOk">{{btn2}}</Hextechbutton>
                    <Hextechbutton @click="wrongAnswer(3)">{{btn3}}</Hextechbutton>
                </div>
                <div  v-if="nquestion===2" class="w-full flex h-fit justify-around">
                    <Hextechbutton @click="wrongAnswer(1)">{{btn1}}</Hextechbutton>
                    <Hextechbutton @click="wrongAnswer(2)">{{btn2}}</Hextechbutton>
                    <Hextechbutton @click="secondQuestionOk">{{btn3}}</Hextechbutton>
                </div>
                <div  v-if="nquestion===3" class="w-full flex h-fit justify-around">
                    <Hextechbutton @click="thirdQuestionOk">{{btn1}}</Hextechbutton>
                    <Hextechbutton @click="wrongAnswer(2)">{{btn2}}</Hextechbutton>
                    <Hextechbutton @click="wrongAnswer(3)">{{btn3}}</Hextechbutton>
                </div>
                <div  v-if="nquestion===4" class="w-full flex h-fit justify-around">
                    <Hextechbutton @click="fourthQuestionOk">{{btn1}}</Hextechbutton>
                    <Hextechbutton @click="wrongAnswer(2)">{{btn2}}</Hextechbutton>
                    <Hextechbutton @click="wrongAnswer(3)">{{btn3}}</Hextechbutton>
                </div>
                <div  v-if="nquestion===5" class="w-full flex h-fit justify-around">
                    <Hextechbutton @click="gotocake()">{{btn1}}</Hextechbutton>
                </div>
            </div>
        </div>

        <!--
        <div id="firstquestion" v-if="!firstquestion" class="w-full flex h-fit justify-around">
                <Hextechbutton class="realbtn" @click="console.log('asdasd')">Alohomora</Hextechbutton>
                <Hextechbutton class="realbtn">Lumos</Hextechbutton>
                <Hextechbutton class="realbtn">Flipendo</Hextechbutton>
        </div>
        <div v-else>

        </div>
        -->
    </div>
    <!--<spotlight :active="true" :opacity="0.97" :size="lightsize"/>-->
</template>
<style scoped >
    #compcontainer{
        background-image: v-bind(bgimgurl);
        background-position: center;
        background-size: cover;
        height: 100vh;
    }
    :deep(.spotlight,.spotlight__overlay) {
        cursor: url('/elenabd2k24/varitasnape.webp'), alias !important;
    }
    #spotlightcontainer{
        pointer-events:painted;
    }
    #spotlight {
        pointer-events:none;
    }

    #spotlight.disabled{
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    #spotlight {
        width: 100vw;
        height: 100vh;
        /*background: radial-gradient(circle at v-bind(spotX) v-bind(spotY), #88e2ca00 v-bind(firstLightRad), #000000f0 v-bind(secondLightRad));*/
        background: radial-gradient(circle at v-bind(spotX) v-bind(spotY), #88e2ca00 v-bind(firstLightRad), #000000f8 v-bind(secondLightRad));
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    #firstquestion{
        pointer-events: auto; 
    }

    @font-face {
    font-family: 'harrypotter';
    src: url('/elenabd2k24/fonts/harryp.ttf') format('truetype');
    }  

    .harrypfont{
        font-family: 'harrypotter', Helvetica, sans-serif;
    }


</style>
<script setup>
    import { ref, onMounted } from 'vue';
    import Hextechbutton from './Hextechbutton.vue';

    const spotX = ref(0)
    const spotY = ref(0)
    const spotActive = ref(true)
    const firstLightRad = ref("10px")
    const secondLightRad = ref("33px")
    const typeDelay = ref(99900)
    const typeStart = ref(0)
    const bgimgurl = ref("url('https://images2.alphacoders.com/112/1128762.jpg')")
    const moveSpotlight = (e) => {
        const {clientX, clientY} = e
        spotX.value = clientX + 'px'
        spotY.value = clientY + 'px'
    }
    const toggleSpotlight = () => {
        /*spotActive.value ? play(): reverse();*/
        spotActive.value = !spotActive.value
    }

    function wrongAnswer(num){
        if(num===1){
            btn1.value = "INCORRECTO :/"
        }else if(num===2){
            btn2.value = "INCORRECTO :/"
        }else if(num===3){
            btn3.value = "INCORRECTO :/"
        }
    }

    function firstQuestionOk(){
        firstLightRad.value = "75px"
        secondLightRad.value = "150px"
        nquestion.value = 2
        btn1.value = "Engorgio"
        btn2.value = "Confundo"
        btn3.value = "Lumos Maxima"
    }

    function secondQuestionOk(){
        toggleSpotlight()
        nquestion.value = 3
        btn1.value = "Revelio"
        btn2.value = "Reducto"
        btn3.value = "Leviosa"
    }

    function thirdQuestionOk(){
        bgimgurl.value = "url('https://www.gamespot.com/a/uploads/original/1816/18167535/4097544-hogwartslegacyhousechestdaedaliankeyslocationsguide-.jpg')"
        nquestion.value = 4
        btn1.value = "Alohomora"
        btn2.value = "Sociolomadridismus"
        btn3.value = "Muffliato"
    }

    function fourthQuestionOk(){
        nquestion.value = 5
        btn1.value = "Coger pastel"
    }

    function gotocake(){
        window.location.href = 'cake';
    }

    const nquestion = ref(1)

    const question1 = ref("Vaya... No se puede ver casi nada, necesitamos mas luz. Que conjuro debemos utilizar?")
    const question2 = ref("Muy bien! Pero... parece que seguimos necesitando mas luz. Sabes algun conjuro para iluminar totalmente algo?")
    const question3 = ref("Perfecto! Hmm no parece haber nada interesante a simple vista... Que podrias hacer?")
    const question4 = ref("Mira, un cofre! Pero esta cerrado. Quizas puedas usar un conjuro para abrirlo")
    const question5 = ref("Vaya, Increible! Hay un pastel de cumpleaños! Vamos, cogelo, es para ti")
    const btn1 = ref("Alohomora")
    const btn2 = ref("Lumos")
    const btn3 = ref("Flipendo")


</script>