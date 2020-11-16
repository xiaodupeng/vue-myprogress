<template>
    <div>
        <svg :width="diameter + strokewidth" :height="diameter + strokewidth" class="svg">
            <circle :r="diameter/2" :cy="diameter/2 + strokewidth/2" :cx="diameter/2 + strokewidth/2" :stroke-width="strokewidth" :stroke="bgcolor" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
            <circle :r="diameter/2" :cy="diameter/2 + strokewidth/2" :cx="diameter/2 + strokewidth/2" :stroke-width="strokewidth" :stroke="fillcolor" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-dashoffset="-0px"  :stroke-dasharray="3.14 * diameter" class="progress"/>
        </svg>
    </div>
</template>

<script>
export default {
    name:"myprogress",
    props: ['progressnum','bgcolor','fillcolor','diameter','strokewidth','clockwise'],
    data() {
        return {

        };
    },
    components: {

    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {
        this.setProgress()
    },
    methods: {
        setProgress(){
            let path = document.getElementsByClassName("progress")[0]
            let number = this.clockwise ? (this.diameter * 3.14 - this.diameter * 3.14 * this.progressnum) : -(this.diameter * 3.14 - this.diameter * 3.14 * this.progressnum)
            path.setAttribute("stroke-dashoffset",number);
        }
    },
};
</script>

<style scoped>
    svg {
        transform: rotate(-90deg);
    }
</style>
