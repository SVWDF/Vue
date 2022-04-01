const home = {
    data: function() {
        return {
            pathSmall: "images/small/",
            pathBig: "images/big/",
            items: [{
                    id: 1,
                    naam: "hondenpak superman",
                    omschrijving: "Neem je hond mee als sidekick op al je avonturen!",
                    prijs: 29.99,
                    src: "elias-castillo-7-ToFEHzMNw-unsplash.jpg",
                    besteld: 0
                },
                {
                    id: 2,
                    naam: "Wonder Woman",
                    omschrijving: "Laat de kleine meid tonen hoe speciaal ze is!",
                    prijs: 34.99,
                    src: "gabriela-braga-CVEWeDNsJP4-unsplash.jpg",
                    besteld: 0
                },
                {
                    id: 3,
                    naam: "Spiderman masker",
                    omschrijving: "Je wil niet altijd dat je herkent wordt voor je goede daden!",
                    prijs: 14.99,
                    src: "joey-nicotra-0EI_4R2r0qg-unsplash.jpg",
                    besteld: 0
                }
            ],
            winkelwagen: [],
        }
    },
    methods: {
        toonGroteFoto: function(src) {
            window.open(this.pathBig + src);
        },
        saveLocalStorageWinkelwagen: function() {
            let temp = this.items.filter((item) => item.besteld !== 0);
            localStorage.setItem("winkelwagen", JSON.stringify(temp));
        },
        VoegToeAanWinkelwagen: function(index) {
            this.items[index].besteld++;
            this.aantalInWinkelwagen++;
            this.saveLocalStorageWinkelwagen();
        }
    }
}

Vue.createApp(home).mount('#homeTemplate')