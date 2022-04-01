const winkelwagen = {
    data: function() {
        return {
            pathSmall: "images/small/",
            pathBig: "images/big/",
            items: []
        }
    },
    methods: {
        toonGroteFoto: function(src) {
            window.open(this.pathBig + src);
        },
        verwijder: function(index) {
            this.items.splice(index, 1);
            this.saveLocalStorageWinkelwagen();
        },
        aantalAanpassing: function(index) {
            if (this.items[index].besteld == 0) {
                this.items.splice(index, 1);
            }
            this.saveLocalStorageWinkelwagen()
        },
        saveLocalStorageWinkelwagen: function() {
            localStorage.setItem("winkelwagen", JSON.stringify(this.items));
        }
    },
    computed: {
        totalePrijs: function() {
            let totaal = 0;
            this.items.forEach(item => {
                if (item.besteld > 0) {
                    totaal += item.besteld * item.prijs
                }
            })
            return totaal
        },
        totaalAantalItems: function() {
            let totaal = 0;
            if (this.items.length > 0) {
                this.items.forEach(item => {
                    if (item.besteld > 0) {
                        totaal += parseInt(item.besteld)
                    }
                })
            }
            return totaal
        }
    }
}

Vue.createApp(winkelwagen).mount('#winkelwagenTemplate')