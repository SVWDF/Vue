const winkelwagen = {
    data: function () {
        return {
            pathSmall: 'images/small/',
            pathBig: 'images/big/',
            items: [],
            showCookieMelding: localStorage.getItem('showCookieMelding'),
        }
    }, 

    methods: {
        toonGroteFoto: function (item) {
            let foto = item.afbeelding_src;
            window.open(this.pathBig + foto,'_blank');
        },

        verwijder: function (index) {
            this.items.splice(index, 1);
            this.saveLocalStorageWinkelwagen();
        },

        aantalAanpassing: function (index) {
            this.items[index].besteld = parseInt(event.target.value);
            this.saveLocalStorageWinkelwagen();
        },

        saveLocalStorageWinkelwagen: function () {
            localStorage.setItem('winkelwagen', JSON.stringify(this.items));
        } 
    },
    computed: {
        totalePrijs: function () {
            let totaal = 0;
            this.items.forEach(prijzen => {
                if (prijzen.besteld > 0) {
                    totaal += (prijzen.prijs * prijzen.besteld);
                }
            });
            return totaal.toFixed(2);
        },
        totaalAantalItems: function () {
            let totaal = 0;
            this.items.forEach(items => {
                if (items.besteld > 0) {
                    totaal += items.besteld;
                }
            });
            return totaal;
        }
    },

    mounted() {
        if (localStorage.getItem('winkelwagen')) {
            this.items = JSON.parse(localStorage.getItem('winkelwagen'));
        }

        if (localStorage.getItem('showCookiemelding')) {
            this.showCookieMelding = localStorage.getItem('showCookieMelding');
        }

    },

    watch: {
        totaalAantalItems(newValue) {
            this.$root.aantalInWinkelwagen = newValue
        }
    }
}

Vue.createApp(winkelwagen).mount('#winkelwagenTemplate')