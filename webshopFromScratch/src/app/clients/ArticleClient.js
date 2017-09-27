const mockArticles = [
    {
        id: 1,
        name: "Aro H-Milch 3,5%",
        size: "1 l",
        price: 0.99,
        image: "https://metro.scene7.com/is/image/metroDE/DE_PIM_702904001001_01",
        description: "Unbelievable but true, this is really just milk. The exquisite milk comes in a handy 1l packaging."
    },
    {
        id: 2,
        name: "Aro Blütenhonig flüssig",
        size: "500 g",
        price: 2.89,
        image: "https://metro.scene7.com/is/image/metroDE/DE_PIM_561132001001_01",
        description: "The real honey experience."
    }
];

// Instead of loading articles here (long running operation) we just return the mock articles
exports.loadArticles = function() {
    return new Promise(function (resolve, reject) {
        resolve(mockArticles);
    });
};