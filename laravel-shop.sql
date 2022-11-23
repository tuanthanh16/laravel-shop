-- MariaDB dump 10.19  Distrib 10.4.25-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: laravel-shop
-- ------------------------------------------------------
-- Server version	10.4.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (2,'Sweets',NULL,NULL,'sweets'),(3,'Snacks',NULL,NULL,'snacks'),(4,'Sauces',NULL,NULL,'sauces'),(5,'Milk Products',NULL,NULL,'milk'),(6,'Meat Products',NULL,NULL,'meat'),(7,'Drinks',NULL,NULL,'drinks');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `customers_email_unique` (`email`),
  UNIQUE KEY `customers_phone_unique` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discounts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `value` decimal(8,2) DEFAULT NULL,
  `percentage` decimal(8,2) DEFAULT NULL,
  `valid_from` date DEFAULT NULL,
  `valid_to` date DEFAULT NULL,
  `coupon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discounts`
--

LOCK TABLES `discounts` WRITE;
/*!40000 ALTER TABLE `discounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2014_10_12_200000_add_two_factor_columns_to_users_table',1),(4,'2019_08_19_000000_create_failed_jobs_table',1),(5,'2019_12_14_000001_create_personal_access_tokens_table',1),(6,'2022_10_26_135345_create_sales_table',1),(7,'2022_10_26_135856_create_products_table',1),(8,'2022_10_26_140820_create_sale_details_table',1),(9,'2022_10_26_141220_create_categories_table',1),(10,'2022_10_26_141435_create_discounts_table',1),(11,'2022_10_26_141829_create_customers_table',1),(12,'2022_10_28_105230_add_total_to_sale',1),(14,'2022_11_19_160527_change_type_of_description',2),(15,'2022_11_22_093852_add_image_to_categories_table',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `stock` int(10) unsigned DEFAULT NULL,
  `cat_id` bigint(20) unsigned DEFAULT NULL,
  `discount_id` bigint(20) unsigned DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `products` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (89,NULL,'Feta','Feta  is a Greek brined white cheese made from sheep\'s milk or from a mixture of sheep and goat\'s milk. It is soft, with small or no holes, a compact touch, few cuts, and no skin.',79.00,13,5,NULL,'feta',NULL,NULL,NULL),(90,NULL,'Madzarov Cheese ','Dimitar Madjarov Natural Sheep\'s White Cheese 400g. Sheep cheese is a traditional product for Bulgaria, which contains a rich composition of vitamins and minerals.',80.00,14,5,NULL,'cheese_madzarov',NULL,NULL,NULL),(91,NULL,'Merone Cheese','Merone brined cheese “Siren” is moderately hard and less salty. It is characterized by a rich, extremely pleasant taste and aroma.',81.00,15,5,NULL,'cheese_merone',NULL,NULL,NULL),(92,NULL,'Merone Cheese','Merone brined cheese “Siren” is moderately hard and less salty. It is characterized by a rich, extremely pleasant taste and aroma.',82.00,16,5,NULL,'cheese_merone2',NULL,NULL,NULL),(93,NULL,'Osogovsko Cheese ','This cheese is obtained from the milk of cows that graze on the slopes of the Osogovo mountains, near the village of Sokolarci, North Macedonia.',83.00,13,5,NULL,'cheese_osogovsko',NULL,NULL,NULL),(94,NULL,'Poljorad Cheese','Fresher in taste and softer in texture than American Cream Cheese, Poljorad Vlasicki Cream Cheese is a popular spread across all generations in the Balkans and former Yugoslav Republics.  We make our Cream Cheese with only three pure ingredients: cow\'s milk, cream and a pinch of sea salt. The result is a cream cheese with a pleasing, milky flavor that is delicious eaten on toast, a bagel or pita bread.',84.00,13,5,NULL,'cheese_poljorad',NULL,NULL,NULL),(95,NULL,'Smoked Cheese','“Kapnisto” smoked cheese is made from cow\'s milk. It is distinguished for its especially fine aroma and subtly smoky taste.',85.00,13,5,NULL,'cheese_smoked',NULL,NULL,NULL),(96,NULL,'Milk',' Since 1952 up to this day, Company BIMILK has become synonymous for tradition, quality dairy products and successful business operations.',32.00,13,5,NULL,'milk',NULL,NULL,NULL),(97,NULL,'Milk “Moja Kravica”','Since 1952 up to this day, Company BIMILK has become synonymous for tradition, quality dairy products and successful business operations.',32.00,13,5,NULL,'milk_moja_kravica',NULL,NULL,NULL),(98,NULL,'Yogurt','Bulgarian Yogurt is a unique fermented milk product which is world famous as a food of health and longevity. GENESIS TM starter cultures for home preparation of original yogurt are symbiotic combinations of the strains Lactobacillus bulgaricus and Streptococcus thermophilus, isolated from natural sources and selected according to their health effects. ',50.00,13,5,NULL,'yogurt',NULL,NULL,NULL),(99,NULL,'Burek','Hand-crafted frozen burek with minced meat. Country of origin: North Macedonia. Ingredients: wheat flour 40%, filling 29% (ground beef 19%, dehydrated onion10%, salt, black pepper) water 24%, salt, glycrol, palm oil, sunflower oil.',90.00,7,6,NULL,'burek',NULL,NULL,NULL),(100,NULL,'Burek','Burqa of hand-rolled dough stuffed with beef, frozen. Ingredients: wheat flour white type 400, water, ground beef, dehydrated onion, salt, black pepper, vegetable oils (sunflower and rapeseed), corn starch.',90.00,7,6,NULL,'burek2',NULL,NULL,NULL),(101,NULL,'Smoked Sausage','This traditional salami is produced only from top-grade red meat and carefully selected natural spices, making it an ideal choice for delicious everyday family meals. Country of origin: Croatia. Ingredients: pork meat, salt, potassium chloride, dextrose, spices and spice extracts, aromas, antioxidant E301 and rosemary extract, preservatives E250 and E251.',90.00,7,6,NULL,'cajna_kobasica',NULL,NULL,NULL),(102,NULL,'Čevapčiči','Grilled meat rolls. Depending on the area, cevapcici are from 4 to 12 cm long and are made from different types of meat. Again and again, the grilled temptations from Bosnia and Herzegovina are said to be the most famous and best, while there is an interesting rivalry between the cevapcici from Sarajevo, Banjaluka, Tuzla and Travnik.',89.00,12,6,NULL,'cevapcici',NULL,NULL,NULL),(103,NULL,'Akrokolion: Greek Ham','Greek dried ham. Sometimes referred to as country ham, our ham has a unique, incomparable taste. Ingredients: Pork leg 65%, Drinking water, Edible salt, Potato starch, Stabilizers E250, E451, Thickener E407, Antioxidant E301, Spice and vegetable extracts, Natural aroma.',79.00,12,6,NULL,'greek_ham',NULL,NULL,NULL),(104,NULL,'Grill Sausage',' This Grill Sausage\'s recipe and length make it ideal primarily for grilling. Made from carefully selected and high quality raw meat, this product is a great choice for every true lover of the grill. Country of origin: Serbia. ',99.00,6,6,NULL,'kobasica1',NULL,NULL,NULL),(105,NULL,'Pljeskavica','Hamburger, made from 100% beef according to the original recipe, ideal for grilling or roasting. Country of origin: Serbia. Ingredients: Beef (90%), onions, table salt, paprika, pepper, flavor enhancer monosodium glutamate, stabilizer sodium bicarbonate.',199.00,20,6,NULL,'pljeskavica',NULL,NULL,NULL),(106,NULL,'Pljeskavica','PIK Pljeskavica is a product with a spicier taste with an accentuated paprika component and a slightly accentuated aroma of barbecue and smoke. Country of origin: Croatia. Ingredients: Beef (90%), onions, table salt, paprika, pepper, flavor enhancer monosodium glutamate, stabilizer sodium bicarbonate.',199.00,20,6,NULL,'pljeskavica2',NULL,NULL,NULL),(107,NULL,'Chicken Salami','Gluten and soy free high quality chicken sausage, without flavor enhancers. Source of Selenium. Country of origin: Slovenia. Ingredients: mechanically deboned chicken meat (65%), chicken meat 15%, water, sunflower oil, salt, dextrose, pea flour, stabilizer E450, thickener E412, natural spices, spice extracts, antioxidant E316, preservative E250.',89.00,12,6,NULL,'salami',NULL,NULL,NULL),(108,NULL,'Sudžuk','Ready to eat traditional beef salami. Country of origin: Bosnia and Herzegovina. Ingredients: beef, curing salt (sodium chloride, preservative: sodium nitrite), spices.',99.00,3,6,NULL,'sudzuk',NULL,NULL,NULL),(109,NULL,'Alfa','ALFA is a blonde light lager, cool thirst quencher, with rich foam and easy-to- drink. It has soft malt and yeast aroma.  It was the first consumer beer with a  Greek name.   It contains 5% alcohol. ',33.00,15,7,NULL,'alfa',NULL,NULL,NULL),(110,NULL,'Birra Korça','Birra Korça is the first beer brewed in Albania. This beer is a very high quality beer. Its special characteristics, such as the alcohol content within the standards, the pleasant aroma, the quite good bouquet, the viscosity are dedicated to the high standards of production. This beer is 100% malto.  The alcohol content is 4.1%.',33.00,23,7,NULL,'birra_korca',NULL,NULL,NULL),(111,NULL,'Jelen','Jelen pivo is a pale lager produced by the Apatin Brewery from Serbia that belongs to American-Canadian concern Molson Coors.  Jelen has won various awards within Serbia and participates in a variety of sponsorships. Its logo is a bugling red deer; jelen means deer. It contains 4,6% alcohol and belongs to the class of light lagers. ',32.00,24,7,NULL,'jelen',NULL,NULL,NULL),(112,NULL,'Karlovačko','A popular beer in Croatia. It is the signature product of brewer Karlovačka Pivovara, a Heineken International subsidiary, located in the city of Karlovac. Its makers describe it as \"golden-yellow\" in color and \"refreshingly\" bitter in taste. The alcohol content is 4.5%. ',39.00,19,7,NULL,'karlovacko',NULL,NULL,NULL),(113,NULL,'Laško','Laško Club is a Slovenian pale beer with specific sweet character and mild bitterness, made of top domestic and foreign recognised sorts of hop. Due to longer fermentation periods, minimal use of non-sugared types of wheat and higher percentage of malt, it is classified as a premium beer. The alcohol content is 4.9%. ',39.00,19,7,NULL,'lasko',NULL,NULL,NULL),(114,NULL,'Mythos','A light straw-coloured, lager beer introduced in 1997 and produced by the Olympic Brewery, a subsidiary of Carlsberg Group. The alcohol content is 4.7%. ',34.00,30,7,NULL,'mythos',NULL,NULL,NULL),(115,NULL,'Šumensko','Bulgarian Lager 330ml is one of the most famous Bulgarian beers. It is still popular and loved all throughout Bulgaria. The alcohol content is 4.3%. ',32.00,29,7,NULL,'shumensko',NULL,NULL,NULL),(116,NULL,'Skopsko','A combination of high quality ingredients, completed with love and almost 90 years of tradition... This is SKOPSKO! It is one of the strongest Macedonian brands and definitely the strongest beer brand in the country. SKOPSKO is synonymous with quality, consistency, tradition, trust and uniqueness. The alcohol content is 4.9%.',32.00,30,7,NULL,'skopsko',NULL,NULL,NULL),(117,NULL,'Tuzlanski Pilsner','Tuzla pilsner is the oldest brand of Pivare Tuzla, Bosnia which is produced according to a very demanding and old recipe, in a completely natural way. Pale gold colour, white foam head and aroma of corn grains, wet cardboard, grass. The alcohol content is 4.2%.',35.00,40,7,NULL,'tuzlanski_pilsner',NULL,NULL,NULL),(118,NULL,'Zaječarsko','A light beer produced and bottled by the United Serbian Breweries. With its tradition and unique taste, this beer is synonymous with real refreshment and pleasure. The alcohol content is 4.5%.',33.00,40,7,NULL,'zajecarsko',NULL,NULL,NULL),(119,NULL,'Kozlovič Malvazija','Gentle on the nose as well, not too dominant. There is plenty of ripe, juicy yellow fruits, ripe apricots, and hints of tropical fruits. Quite ripe. Dry on the palate, with moderate acidities and medium-bodied, even slightly salty. The palate’s fruit character seems to be significantly more diverse than on the nose, showing extra layers of dried Mediterranean herbs and spices. ',419.00,13,7,NULL,'kozlovic_malvazija',NULL,NULL,NULL),(120,NULL,'Kratošija','A Macedonian red wine using the Kratošija grape for vibrant and bright redcurrants, cherry and red berries. Ripe and silky with a profound red / blue colour. Shows plum and mulberry notes on the palate. ',120.00,14,7,NULL,'kratosija',NULL,NULL,NULL),(121,NULL,'Krauthaker Graševina','A fresh wine by type, abundant fruit on the nose with some floral overtones, warm on the palate, finely rounded, harmonious, with solid body. Beautiful glowing crystal colour of yellow straw, considerably intense aroma hinting fresh apples and some vineyard peaches, also suggesting some bright field flowers. Taste is vibrant with good acidity finishing with pleasant mild bitterness specific to the wine variety.',549.00,13,7,NULL,'krauthaker_grasevina',NULL,NULL,NULL),(122,NULL,'Mavrud','Many wine lovers already know and have tried our VINICA Mavrud, made from dried grapes. A wine that has been officially rated as the best wine in Bulgaria. Mavrud made from dried grapes but now without contact with oak. Dried grapes, pure fruit, enormous concentration, a lot of layers on the palate and this everything with a minimum human influence on the taste. ',469.00,13,7,NULL,'mavrud',NULL,NULL,NULL),(123,NULL,'Pyritis','Pure nose, full of minerality and flint which is a typical hint of Santorini’s Assyrtiko. Notes of matured stone-fruits and tart of citrus fruits. The palate shows considerable depth and genuine concentration, rich and dense with finesse and well balanced acidity. Long aftertaste with saltiness and minerality. ',409.00,14,7,NULL,'pyritis',NULL,NULL,NULL),(124,NULL,'Retsina','Traditional Greek dry white wine from the Peloponnese with the taste and aroma of pine resin. For more than half a century, the Dionysos brand has been synonymous with retsina, the traditional Greek pine-grape wine.',89.00,16,7,NULL,'retsina',NULL,NULL,NULL),(125,NULL,'Sarris Robola','Sarris Robola of Kefalonia: A white wine with vibrant character, bright fruitiness and seductive palate that represents a unique “terroir”. It’s a result of the passion and experience of people who make it. Pale lemon color and elegant aromas of pear, green apple and lime. ',469.00,30,7,NULL,'sarris_robola',NULL,NULL,NULL),(126,NULL,'Starosel','Originating from the region of Thracian Lowlands, Bulgaria. An enjoyable dry white wine and surprisingly full flavoured at the same tame. The aromatic tones of the Muscat compiment gently the elegance of the chardonnay. An excellent wine to pair with many dishes.',169.00,16,7,NULL,'starosel',NULL,NULL,NULL),(127,NULL,'Tamyanka','Tamyanka is a typical Bulgarian grape veriety for the production of high-quality wines. It\'s a rare grape, also known en grown on small territories in other neighbouring countries as well such as Macedonia, Serbia, etc.',208.00,16,7,NULL,'tamyanka',NULL,NULL,NULL),(128,NULL,'Terra Tangra','Excellent balance between full body with mild acidity and ripe tannins; Blackberries, black currant, wild cherry, prune; Gentle earthy notes, fine black chocolate, smoke, tobacco, truffles; Smooth, fruity finish with subtle oaky flavours.',299.00,16,7,NULL,'terra_tangra',NULL,NULL,NULL),(129,NULL,'Chips','Salted serbian chips.',29.00,16,3,NULL,'chips',NULL,NULL,NULL),(130,NULL,'Freestyle Snacks','Salted snacks.',28.00,17,3,NULL,'freestyle_snacks',NULL,NULL,NULL),(131,NULL,'Jannis','Salted Snacks. Origin: Greece',29.00,18,3,NULL,'jannis',NULL,NULL,NULL),(132,NULL,'Kokice','Classic Serbian popcorn.',32.00,19,3,NULL,'kokice',NULL,NULL,NULL),(133,NULL,'Kroki','Salted snacks.',29.00,23,3,NULL,'kroki',NULL,NULL,NULL),(134,NULL,'Mix Josh','Salted snacks.',29.00,23,3,NULL,'mix',NULL,NULL,NULL),(135,NULL,'Pitsinia','Salted snacks.',32.00,23,3,NULL,'pitsinia',NULL,NULL,NULL),(136,NULL,'Ribice','Salted snacks.',19.00,23,3,NULL,'ribice',NULL,NULL,NULL),(137,NULL,'Smoki','Salted snacks.',20.00,23,3,NULL,'smoki',NULL,NULL,NULL),(138,NULL,'Trik','Salted snacks.',21.00,12,3,NULL,'trik',NULL,NULL,NULL),(139,NULL,'Baklava','Baklava is a layered pastry dessert made of filo pastry, filled with chopped nuts, and sweetened with syrup or honey.',39.00,13,2,NULL,'baklava',NULL,NULL,NULL),(140,NULL,'Caprice','Filled chocolate bars. Country of origin: Greece',42.00,14,2,NULL,'caprice',NULL,NULL,NULL),(141,NULL,'Eurocrem','Eurocrem is a two-colored hazelnut- and cocoa-flavored sweet milk chocolate spread, produced by a Swisslion Group factory in Gornji Milanovac, Serbia.',49.00,15,2,NULL,'eurokrem',NULL,NULL,NULL),(142,NULL,'Halva','Halva belongs to one of the oldest oriental sweets. The name comes from the Arabic word hilwa, sweet.',50.00,16,2,NULL,'halva',NULL,NULL,NULL),(143,NULL,'Išleri','Stuffed fatty biscuit with cocoa cream product and chocolate topping. Country of origin: Serbia,',51.00,17,2,NULL,'isleri',NULL,NULL,NULL),(144,NULL,'Jadran','Waffle product with milk and cocoa cream.',52.00,18,2,NULL,'jadran',NULL,NULL,NULL),(145,NULL,'Mini',' Crunchy almond brittle bites with a delicate milk chocolate coating.',29.00,19,2,NULL,'mini',NULL,NULL,NULL),(146,NULL,'Plazma Keks Biscuits',' 300 g Lane Biscuits (in Serbian: mleveni plazma keks) are all you need to free your culinary imagination!',32.00,20,2,NULL,'plazma',NULL,NULL,NULL),(147,NULL,'Šumi','ŠUMI MIX offers real sweet fun in a combination of various flavors and shapes of candies.',29.00,21,2,NULL,'sumi',NULL,NULL,NULL),(148,NULL,'Trilece','A trilece is a sponge cake—soaked in three kinds of milk: evaporated milk, condensed milk, and whole milk. This is a very light cake, with many air bubbles. Country of origin: Albania.',43.00,22,2,NULL,'trilece',NULL,NULL,NULL),(149,NULL,'Ajvar','The specific climate in the southern part of Macedonia enables the production of delicious and fresh peppers and tomatoes. No other country in the world has so many homemade paprika recipes. Traditionally, from late summer to early autumn, the irresistible smell of roasted peppers spreads from every yard, reminding us that it\'s open season. The fine texture and aromatic aromas are the result of a perfectly balanced ratio of peppers and eggplant, which gives a specific character to each MAMA\'S jar.',89.00,40,4,NULL,'ajvar',NULL,NULL,NULL),(150,NULL,'Zeleni ajvar','The specific climate in the southern part of Macedonia enables the production of delicious and fresh peppers and tomatoes. No other country in the world has so many homemade paprika recipes. Traditionally, from late summer to early autumn, the irresistible smell of roasted peppers spreads from every yard, reminding us that it\'s open season. The fine texture and aromatic aromas are the result of a perfectly balanced ratio of peppers and eggplant, which gives a specific character to each MAMA\'S jar.',89.00,32,4,NULL,'zeleni_ajvar',NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale_details`
--

DROP TABLE IF EXISTS `sale_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) unsigned NOT NULL,
  `sale_id` bigint(20) unsigned NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_details`
--

LOCK TABLES `sale_details` WRITE;
/*!40000 ALTER TABLE `sale_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `sale_nr` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total` decimal(10,2) unsigned NOT NULL DEFAULT 0.00,
  `date` date DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `customer_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dijana','dijana','didimx.18@gmail.com',NULL,'$2y$10$q0agUQeuB2pk5O5sfSJ1qut8s0hZ49x4/LiUrD/pyL3kUdYegh/ZG',NULL,NULL,NULL,NULL,NULL,'2022-11-06 13:06:41','2022-11-06 13:06:41');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-23 11:24:29
