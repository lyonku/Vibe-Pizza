import { hashSync } from "bcrypt";

export const categories = [
  {
    name: "Пиццы",
  },
  {
    name: "Завтрак",
  },
  {
    name: "Закуски",
  },
  {
    name: "Коктейли",
  },
  {
    name: "Кофе",
  },
];

export const ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
  {
    name: "Креветки",
    price: 199,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/11eee5d51d4c576da0f0db611c8947bd.webp",
  },
  {
    name: "Баварские колбаски",
    price: 129,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/11ee9d3660793feda24a236677d3013e.webp",
  },
  {
    name: "Бекон",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F",
  },
  {
    name: "Пряная говядина",
    price: 119,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.webp",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    desc: "Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7970321044479C1D1085457A36EB.webp",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    desc: "Сытный и сбалансированный завтрак — омлет с поджаристой корочкой, пикантная пепперони, томаты и моцарелла",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp",
    categoryId: 2,
  },
  {
    name: "Омлет с беконом",
    desc: "Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.webp",
    categoryId: 2,
  },
  {
    name: "Омлет сырный",
    desc: "Горячий завтрак из омлета с поджаристой корочкой, моцарелла, кубики брынзы, сыры чеддер и пармезан",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE797033873EB1B4B77F7E70BBA37E.webp",
    categoryId: 2,
  },
  {
    name: "Сырники со сгущенным молоком",
    desc: "Нежные сырники, приготовленные в печи, с порционным сгущенным молоком",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61877A2EE09AA2178718EFB59C.webp",
    categoryId: 2,
  },
  {
    name: "Сырники с малиновым вареньем",
    desc: "Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61B7B71E8AA288725FC097A7BE.webp",
    categoryId: 2,
  },
  {
    name: "Паста с креветками",
    desc: "Паста из печи с креветками, томатами, моцареллой, соусом альфредо и чесноком",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEFAF3EBF5FBE38A44307BB6788AA0.webp",
    categoryId: 3,
  },
  {
    name: "Паста Мясная",
    desc: "Паста из печи с митболами, соусом бургер, моцареллой, фирменным томатным соусом и чесноком",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE797018D60B9B8D278F668BD4D3C7.webp",
    categoryId: 3,
  },
  {
    name: "Ланчбокс с куриными крыльями",
    desc: "Горячий сытный обед из куриных крылышек со специями и ароматом копчения, пряного картофеля из печи и соуса барбекю",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE796FC8BE09CA8AB2DC9E77BDE64A.webp",
    categoryId: 3,
  },
  {
    name: "Ланчбокс с куриными кусочками",
    desc: "Горячий сытный обед из нежных куриных кусочков, пряного картофеля из печи и сырного соуса",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE796FC8E6C0298C0A9B098DA8AE5D.webp",
    categoryId: 3,
  },
  {
    name: "Вайбич чоризо барбекю",
    desc: "Насыщенный вкус острых колбасок чоризо и пикантной пепперони с соусами бургер и барбекю, свежими томатами, маринованными огурчиками, моцареллой и луком в румяной чиабатте",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE796FF041FE1F94C903576DCFD01E.webp",
    categoryId: 3,
  },
  {
    name: "Вайбич ветчина и сыр",
    desc: "Поджаристая чиабатта и знакомое сочетание ветчины, цыпленка, моцареллы со свежими томатами, соусом ранч и чесноком",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE796FF0059B799A17F57A9E64C725.webp",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом 🌱",
    desc: "Запеченная в печи картошечка с пряными специями. В комплекте сырный соус",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EED646A9CD324C962C6BEA78124F19.webp",
    categoryId: 3,
  },
  {
    name: "Картофель из печи 🌱",
    desc: "Запеченная в печи картошечка — привычный вкус и мало масла. В составе пряные специи",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EED646B7AC9C38BA256320DD31C4D5.webp",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    desc: "Нежное куриное мясо в хрустящей панировке",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45EACC4D7EABC10E0A0E0C2C67A.webp",
    categoryId: 3,
  },
  {
    name: "Вайбстер",
    desc: "Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE796F96D11392A2F6DD73599921B9.webp",
    categoryId: 3,
  },
  {
    name: "Острый Вайбстер 🌶️🌶️",
    desc: "Горячая закуска с цыпленком, перчиком халапеньо, маринованными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE796FD3B594068F7A752DF8161D04.webp",
    categoryId: 3,
  },
  {
    name: "Вайбстер с ветчиной",
    desc: "Горячий завтрак с ветчиной, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7970259D888E98B6407EE6B994D9.webp",
    categoryId: 3,
  },
  {
    name: "Молочный коктейль Ежевика-малина",
    desc: "Сливочная прохлада классического молочного коктейля с добавлением лесных ягод",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EF4CE5FC600B3F988C3672BE140FE4.webp",
    categoryId: 4,
  },
  {
    name: "Шоколадный молочный коктейль",
    desc: "Очаровательная шоколадная нежность. Попробуйте молочный коктейль с какао и мороженым",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EF5BBD5B6FCF0DAE38822628A8CA06.webp",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    desc: "Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE796FA1F50F8F8111A399E4C1A1E3.webp",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль 👶",
    desc: "В мире так много коктейлей, но классика — вечна. Попробуйте наш молочный напиток с мороженым",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE796F93FB126693F96CB1D3E403FB.webp",
    categoryId: 4,
  },
  {
    name: "Кофе Карамельный капучино",
    desc: "Если не шоколад, то карамель! А капучино с карамельным сиропом особенно хорош",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Капучино",
    desc: "Король среди кофейных напитков — классический капучино. Для любителей сбалансированного кофейно-молочного вкуса",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61AE1813B4AB42D8927D061035.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    desc: "Горячий напиток на основе эспрессо с увеличенной порцией молока и кокосовым сиропом",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61B19FA07090EE88B0ED347F42.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    desc: "Пара глотков горячего Американо, и вы будете готовы покорять этот день",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61B044583596548A59078BBD33.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Латте",
    desc: "Когда хочется нежную молочную пенку, на помощь приходит классический латте",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    categoryId: 5,
  },
];

export const pizzas = [
  {
    name: "Бефстроганов",
    desc: "Пряная говядина, шампиньоны, ароматный грибной соус, маринованные огурчики, моцарелла, красный лук, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E4417B796B852CA22778AB59F7.webp",
    categoryId: 1,
  },
  {
    name: "Мясная с аджикой 🌶️🌶️",
    desc: "Баварские колбаски, острый соус аджика, острые колбаски чоризо, цыпленок, пикантная пепперони, моцарелла, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EF438E9DE514FB9742C94B62F9AA66.webp",
    categoryId: 1,
  },
  {
    name: "Креветки со сладким чили",
    desc: "Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEFB595D8EFBFD84DD0BAA86BD6B64.webp",
    categoryId: 1,
  },
  {
    name: "Двойной цыпленок ",
    desc: "Цыпленок, моцарелла, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D614D1BB6CB8DED93790D79E466.webp",
    categoryId: 1,
  },
  {
    name: "Жюльен",
    desc: "Цыпленок, шампиньоны, ароматный грибной соус, лук, сухой чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61762B28A4ADBCB9A502D3E644.webp",
    categoryId: 1,
  },
  {
    name: "Хайповый микс",
    desc: "Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEE2431ADD0338AE036C746E9566A6.webp",
    categoryId: 1,
  },
  {
    name: "Песто",
    desc: "Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D613BE37FDEB9EC820896BF8D3C.webp",
    categoryId: 1,
  },
  {
    name: "Диабло 🌶️🌶️",
    desc: "Острые колбаски чоризо, острый перец халапеньо, соус барбекю, митболы из говядины, томаты, сладкий перец, красный лук, моцарелла, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.webp",
    categoryId: 1,
  },
  {
    name: "Пепперони фреш",
    desc: "Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6130241E75B0AB33725248C0D0.webp",
    categoryId: 1,
  },
  {
    name: "Сырная",
    desc: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
    categoryId: 1,
  },
  {
    name: "Чоризо фреш",
    desc: "Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
    categoryId: 1,
  },
  {
    name: "Аррива!",
    desc: "Цыпленок, острые колбаски чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6134BC4150BDD8E792D866AB52.webp",
    categoryId: 1,
  },
  {
    name: "Бургер-пицца",
    desc: "Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.webp",
    categoryId: 1,
  },
  {
    name: "Маргарита 🌱",
    desc: "Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.webp",
    categoryId: 1,
  },
  {
    name: "Цыпленок барбекю",
    desc: "Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6110059795842D40396BCF1E73.webp",
    categoryId: 1,
  },
  {
    name: "Гавайская",
    desc: "Двойная порция цыпленка, ананасы, моцарелла, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.webp",
    categoryId: 1,
  },
  {
    name: "Четыре сезона",
    desc: "Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.webp",
    categoryId: 1,
  },
];
