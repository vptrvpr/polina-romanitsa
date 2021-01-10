<template>
    <div id="app">
        <v-carousel cycle interval="3000">
            <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
            >
                <v-sheet
                        height="100%"
                        tile
                >
                    <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                    >
                        <div class="display-3" style="display: flex;justify-content: center;width: 100%;height: 100%;">
                            <img style="height: 100%" :src="item.src">
                        </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <HelloWorld msg="Полина Романица (Содержанка)"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        data() {
            return {
                carousel: 0,
                items: [
                    { src: 'https://sun9-75.userapi.com/impg/lYawBanESmMvQwrl3BUMpvkueCfsv89j6UE9Zw/pLH_aNDOMp4.jpg?size=828x1002&quality=96&proxy=1&sign=103cb9dc0e5b8c831be85931b5183e2c&type=album', },
                    { src: 'https://sun9-63.userapi.com/impg/2m4LtUdGq-uDDVCERnsuItNjnry-jQmIS4a-4w/ob0ZH8cxgVg.jpg?size=828x824&quality=96&proxy=1&sign=0328a609d4da34bd5d286ea304e96204&type=album', },
                    { src: 'https://sun9-7.userapi.com/impg/ltdcs3LYxXK-e3jieKpgqbACS2vXgHz5G8vI0A/wS3iudubGpc.jpg?size=828x864&quality=96&proxy=1&sign=70955d2c37129da1bc54da53fba49b7b&type=album', },
                ],
            }
        }
    }
</script>

<style>
    .v-window__next {
        right: 0;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
