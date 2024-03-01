const wineCards = [
  {
    title: 'Andis Sauvignon Blanc',
    image: '/images/all_stamped_wines/andis.png',
    date: '2023-12-07',
    desc: 'Super citrus-y wine in a refreshing way!'
          + ' I had this with some lemon garlic scallop pasta'
          + ' and it was incredible. (B)',
    official_desc: 'Our Sauvignon Blanc shows lemon blossom aromas, tangy but ripe citrus flavors, and a hint of fresh-cut green apples backed by a refreshing acidity to make this medium-bodied wine extremely appealing. Serve chilled alongside seafood, light pasta dishes, and chicken.',
  },
  {
    title: 'Betwixt Chardonnay',
    image: '/images/all_stamped_wines/betwixt.png',
    date: '2023-12-10',
    desc: 'This one is a favorite of mine for sure.'
          + ' I can only really describe it as a buttery'
          + ' but not overwhlemingly so. It\'s great on'
          + ' its own, but I put it in French Onion Soup'
          + ' recently and it stole the show. (A+)',
    official_desc: 'Offering up pretty aromas of buttered apples, citrus oil and subtle white truffle that are subtly framed by new oak, the 2016 Chardonnay Steiner Vineyard is full-bodied, succulent and flavorful, with an ample, even lavish attack but with good underlying, balancing acidity. Concentrated and lingering, it\'s a lovely example of Sonoma County Chardonnay.',
  },
  {
    title: 'Cellars 33 Chardonnay',
    image: '/images/all_stamped_wines/cellars33_chard.png',
    date: '2024-01-14',
    desc: 'Honestly don\'t recall this one super well outside of it just being a solid pick all around. (B)',
    official_desc: 'A clean nose of meyer lemon and white flowers leads to a seamless entry to the palate and a delightful, refreshing Chardonnay.',
  },
  {
    title: 'Cellars 33 Zinfandel',
    image: '/images/all_stamped_wines/cellars33_zin.png',
    date: '2024-01-20',
    desc: 'So Zinfandels are some of my favorites in general due to their peppery notes, and this one hit all the highlights backed with a full fruity body! (A)',
    official_desc: 'An all-around well-balanced Zin with aromas and flavors of fresh roses, wild strawberries, black cherry, black and red currant, prune, raisin, dried violets and a dusty-desert earthiness.',
  },
  {
    title: 'Chateau Hostens-Picant Cuvee Des Demoiselles',
    image: '/images/all_stamped_wines/hostenspicant.png',
    date: '2024-02-22',
    desc: 'I\'m gonna be real, I took French growing up but I could barely read this label. Banger wine though. (A+)',
    official_desc: 'Its beautiful light yellow color with bright reflections evokes the youth of this wine. After a first nose of hawthorn, mirabelle plum and exotic fruits, it reveals a more mineral character with notes of rifle stones. In the mouth, the attack is frank, clear, with a frame already very coated full of vivacity and solar power. The limestone plateau brings all the necessary balance to this wine in this great vintage. This wine will be accessible from its early youth, but above all it has a wonderful aging potential of ten years.',
  },
  {
    title: 'Josh Cabernet Sauvignon',
    image: '/images/all_stamped_wines/josh.png',
    date: '2024-02-08',
    desc: 'The boy Josh. It may not be the fanciest wine, but you can get him nearly anywhere, and he\'ll never disappoint. Classic all around pick. (B+)',
    official_desc: 'Blackberry, toasted hazelnut, and cinnamon, complemented by hints of vanilla and toasted oak.',
  },
  {
    title: 'Kalinero Nero Di Troia',
    image: '/images/all_stamped_wines/kalinero.png',
    date: '2024-01-25',
    desc: 'I\'m not typically a fan of vanilla-y wines, I think most of the time they do a bit too much with it. That being said, this one paired a dulled vanilla with a fully bodied fruity flavor and it was elite. Tasted a lot like how I imagine Dr.Pepper tasted to me when I was 11, perfection. (A+)',
    official_desc: 'Its nose is reminiscent of prunes with a hint of vanilla and prunes carry on to the palette along with some rubarb and raspberries. It has a slight amount of tannins that hug your cheeks. It is easy to drink and balanced. From a small family estate in Northern Puglia in Southern Italy.',
  },
  {
    title: 'Lucas and Lewellen Pinot Noir',
    image: '/images/all_stamped_wines/lucasandlewellen_pinot.png',
    date: '2023-12-07',
    desc: 'Pinots are always heavy wines to me, and this kept that aspect of the grape while not beating me down over a long finishing flavor. (A)',
    official_desc: 'Silky tannins and balanced acidity support flavors of ripe cherry, fresh forest, and a trace of sweet earth persisting over a long finish.',
  },
  {
    title: 'Menage a Trois Red Blend',
    image: '/images/all_stamped_wines/menage.png',
    date: '2023-12-07',
    desc: 'Always gonna be a fan of a budget pick. Grab this one at TJs for a nice red wine to deglaze a pan with, then enjoy a couple glasses (as is tradition) before dinner is plated. (B)',
    official_desc: 'California - Our Ménage à Trois Red wine exposes the fresh, ripe, jam like fruit that is the calling card of California wine. Add pink to your cheeks with bold blackberry and ripe raspberry flavors and firm tannins.',
  },
  {
    title: 'Langhe Arneis Doc Moroso',
    image: '/images/all_stamped_wines/moroso.png',
    date: '2024-02-05',
    desc: 'After initially trying this at my wine club\'s wine tasting, I knew what I was going to pick up for dinner immediately. Peachy/Apricot white wines just have this distinct flavor I\'m trying to put my finger on, but for the time being rest assured I\'ll simply just be getting more. (A)',
    official_desc: 'The result is a wine characterized by a bright golden yellow color that opens on the nose with notes of dehydrated peach and apricot fruit, papaya and ginger, orange peel and bergamot.',
  },
  {
    title: 'Stars and Dust Rose',
    image: '/images/all_stamped_wines/starsdust.png',
    date: '2023-12-07',
    desc: 'I think rose gets a bad rep from people who drink too much wine. A lot of them are very samey and a bit too sweet. They almost don\'t want to be wines sometimes. Not this one though. Top to bottom this impressed, tasted like how I imagined rose would taste when it was first explained, a good mix of dry citrusy notes followed by a light but full bodied finish. (A+)',
    official_desc: 'Wild herbs and white cherry on the nose with layers of strawberry, pomegranate and an earthy, saline type of minerality on the long finish. It\'s literally the beach bottled.',
  },
  {
    title: 'Westerly Malbec',
    image: '/images/all_stamped_wines/westerly_malbec.png',
    date: '2024-01-30',
    desc: 'Ok so apparently this wine doesn\'t exist. Looked up and down and Westerly doesn\'t even make a Malbec. Which is a shame because the one I had from them was great! Can\'t recall well what this tasted like (a great sign), but I paired it with steak and asparagus. Definitely recall being impressed. (A)',
    official_desc: '',
  },
];

export default wineCards;
