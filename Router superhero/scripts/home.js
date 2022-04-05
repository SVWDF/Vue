const store = {
    data: function () {
        return {
            items: [
                {id: 0, naam: 'Superman Hondenpak', omschrijving: 'Neem je hond mee als sidekick op al je avonturen!', prijs: 29.99, afbeelding_src: 'elias-castillo-7-ToFEHzMNw-unsplash.jpg', besteld: 0},
                {id: 1, naam: 'Wonder Woman', omschrijving: 'Laat de kleine meid tonen hoe speciaal ze is!', prijs: 34.99, afbeelding_src: 'gabriela-braga-CVEWeDNsJP4-unsplash.jpg', besteld: 0},
                {id: 2, naam: 'Spiderman masker', omschrijving: 'Je wil niet altijd dat je herkent wordt voor je goede daden!', prijs: 14.99, afbeelding_src: 'joey-nicotra-0EI_4R2r0qg-unsplash.jpg', besteld: 0}
            ],
            pathSmall: 'images/small/',
            pathBig: 'images/big/',
            showCookieMelding: localStorage.getItem('showCookieMelding'),
        }
    },

    methods: {
        toonGroteFoto: function (item) {
            let foto = item.afbeelding_src;
            window.open(this.pathBig + foto,'_blank');
        },

        check: function () {
            this.showCookieMelding = false;
            localStorage.showCookieMelding = this.showCookieMelding;
        },

        saveLocalStorageWinkelwagen: function () {
            let temp = this.items.filter((item) => item.besteld !== 0);
            localStorage.winkelwagen = JSON.stringify(temp);
        },

        VoegToeAanWinkelwagen: function (item) {
            parseInt(item.besteld += 1);
            this.saveLocalStorageWinkelwagen();
            this.$root.aantalInWinkelwagen++
        }
    },

    mounted() {
        if (localStorage.getItem('winkelwagen')) {
            let tempLs = JSON.parse(localStorage.getItem('winkelwagen'));
            tempLs.forEach((ItemInLs) => {
                let gevondenItemData = this.items.find(itemInData => itemInData.id == ItemInLs.id);

                if (gevondenItemData) {
                    gevondenItemData.besteld = ItemInLs.besteld;
                    this.$root.aantalInWinkelwagen = (ItemInLs.besteld);
                }
            })
        }
    }
}

Vue.createApp(store).mount('#homeTemplate')