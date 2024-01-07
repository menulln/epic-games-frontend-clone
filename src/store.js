function storeComponent() {
    const main = document.createElement('main');

    main.appendChild(saleComponent());
    
    function saleComponent() {
        const article = document.createElement('article');

        div.appendChild(saleBannerComponent('festive-sale'));
        div.appendChild(saleBannerComponent('voucher'));
        div.appendChild(saleBannerComponent('gifts'));

        function saleBannerComponent(type) {
            const img = document.createElement('img');

            img.src = `../src/images/store_banners/banner_${type}.png`;

            return img;
        }

        return article;
    }

    return main;
}

export { storeComponent };