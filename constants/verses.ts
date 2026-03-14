// All scriptures, static TS file
export const verses = [];
export interface Verse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export const BOOKS = [
  "Genesis",
  "Exodus",
  "Psalms",
  "Proverbs",
  "Isaiah",
  "Jeremiah",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Hebrews",
  "James",
  "1 Peter",
  "Revelation",
];

export const VERSES: Verse[] = [
  {
    book: "John",
    chapter: 3,
    verse: 16,
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
  },
  {
    book: "John",
    chapter: 3,
    verse: 17,
    text: "For God did not send his Son into the world to condemn the world, but to save the world through him.",
  },
  {
    book: "John",
    chapter: 14,
    verse: 6,
    text: "Jesus answered, I am the way and the truth and the life. No one comes to the Father except through me.",
  },
  {
    book: "John",
    chapter: 14,
    verse: 27,
    text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
  },
  {
    book: "Psalms",
    chapter: 23,
    verse: 1,
    text: "The LORD is my shepherd, I lack nothing.",
  },
  {
    book: "Psalms",
    chapter: 23,
    verse: 2,
    text: "He makes me lie down in green pastures, he leads me beside quiet waters.",
  },
  {
    book: "Psalms",
    chapter: 23,
    verse: 3,
    text: "He refreshes my soul. He guides me along the right paths for his name's sake.",
  },
  {
    book: "Psalms",
    chapter: 23,
    verse: 4,
    text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
  },
  {
    book: "Psalms",
    chapter: 119,
    verse: 105,
    text: "Your word is a lamp for my feet, a light on my path.",
  },
  {
    book: "Psalms",
    chapter: 46,
    verse: 1,
    text: "God is our refuge and strength, an ever-present help in trouble.",
  },
  {
    book: "Psalms",
    chapter: 27,
    verse: 1,
    text: "The LORD is my light and my salvation — whom shall I fear? The LORD is the stronghold of my life — of whom shall I be afraid?",
  },
  {
    book: "Proverbs",
    chapter: 3,
    verse: 5,
    text: "Trust in the LORD with all your heart and lean not on your own understanding.",
  },
  {
    book: "Proverbs",
    chapter: 3,
    verse: 6,
    text: "In all your ways submit to him, and he will make your paths straight.",
  },
  {
    book: "Proverbs",
    chapter: 4,
    verse: 23,
    text: "Above all else, guard your heart, for everything you do flows from it.",
  },
  {
    book: "Isaiah",
    chapter: 40,
    verse: 31,
    text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
  },
  {
    book: "Isaiah",
    chapter: 41,
    verse: 10,
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
  },
  {
    book: "Jeremiah",
    chapter: 29,
    verse: 11,
    text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
  },
  {
    book: "Matthew",
    chapter: 5,
    verse: 3,
    text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
  },
  {
    book: "Matthew",
    chapter: 5,
    verse: 4,
    text: "Blessed are those who mourn, for they will be comforted.",
  },
  {
    book: "Matthew",
    chapter: 5,
    verse: 5,
    text: "Blessed are the meek, for they will inherit the earth.",
  },
  {
    book: "Matthew",
    chapter: 6,
    verse: 33,
    text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
  },
  {
    book: "Matthew",
    chapter: 11,
    verse: 28,
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
  },
  {
    book: "Romans",
    chapter: 8,
    verse: 28,
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
  },
  {
    book: "Romans",
    chapter: 8,
    verse: 38,
    text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God.",
  },
  {
    book: "Romans",
    chapter: 12,
    verse: 2,
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
  },
  {
    book: "Philippians",
    chapter: 4,
    verse: 6,
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
  },
  {
    book: "Philippians",
    chapter: 4,
    verse: 7,
    text: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
  },
  {
    book: "Philippians",
    chapter: 4,
    verse: 13,
    text: "I can do all this through him who gives me strength.",
  },
  {
    book: "Ephesians",
    chapter: 2,
    verse: 8,
    text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.",
  },
  {
    book: "Ephesians",
    chapter: 6,
    verse: 11,
    text: "Put on the full armor of God, so that you can take your stand against the devil's schemes.",
  },
  {
    book: "Hebrews",
    chapter: 11,
    verse: 1,
    text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
  },
  {
    book: "James",
    chapter: 1,
    verse: 2,
    text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds.",
  },
  {
    book: "James",
    chapter: 1,
    verse: 17,
    text: "Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.",
  },
  {
    book: "1 Peter",
    chapter: 5,
    verse: 7,
    text: "Cast all your anxiety on him because he cares for you.",
  },
  {
    book: "Revelation",
    chapter: 21,
    verse: 4,
    text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
  },
  {
    book: "Genesis",
    chapter: 1,
    verse: 1,
    text: "In the beginning God created the heavens and the earth.",
  },
  {
    book: "Genesis",
    chapter: 1,
    verse: 27,
    text: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
  },
  {
    book: "Acts",
    chapter: 1,
    verse: 8,
    text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.",
  },
  {
    book: "2 Timothy",
    chapter: 3,
    verse: 16,
    text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
  },
  {
    book: "1 Corinthians",
    chapter: 13,
    verse: 4,
    text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
  },
  {
    book: "1 Corinthians",
    chapter: 13,
    verse: 13,
    text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
  },
  {
    book: "Galatians",
    chapter: 5,
    verse: 22,
    text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
  },
  {
    book: "Colossians",
    chapter: 3,
    verse: 17,
    text: "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
  },
];

export const DAILY_PSALMS = [
  {
    ref: "Psalm 1:1-2",
    text: "Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers, but whose delight is in the law of the LORD, and who meditates on his law day and night.",
  },
  {
    ref: "Psalm 23:1-3",
    text: "The LORD is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
  },
  {
    ref: "Psalm 27:1",
    text: "The LORD is my light and my salvation — whom shall I fear? The LORD is the stronghold of my life — of whom shall I be afraid?",
  },
  {
    ref: "Psalm 34:8",
    text: "Taste and see that the LORD is good; blessed is the one who takes refuge in him.",
  },
  {
    ref: "Psalm 37:4",
    text: "Take delight in the LORD, and he will give you the desires of your heart.",
  },
  {
    ref: "Psalm 46:1-2",
    text: "God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea.",
  },
  {
    ref: "Psalm 51:10",
    text: "Create in me a pure heart, O God, and renew a steadfast spirit within me.",
  },
  {
    ref: "Psalm 63:1",
    text: "You, God, are my God, earnestly I seek you; I thirst for you, my whole being longs for you, in a dry and parched land where there is no water.",
  },
  {
    ref: "Psalm 91:1-2",
    text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the LORD, He is my refuge and my fortress, my God, in whom I trust.",
  },
  {
    ref: "Psalm 100:4-5",
    text: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name. For the LORD is good and his love endures forever.",
  },
  {
    ref: "Psalm 103:1-2",
    text: "Praise the LORD, my soul; all my inmost being, praise his holy name. Praise the LORD, my soul, and forget not all his benefits.",
  },
  {
    ref: "Psalm 107:1",
    text: "Give thanks to the LORD, for he is good; his love endures forever.",
  },
  {
    ref: "Psalm 118:24",
    text: "This is the day the LORD has made; let us rejoice and be glad in it.",
  },
  {
    ref: "Psalm 119:105",
    text: "Your word is a lamp for my feet, a light on my path.",
  },
  {
    ref: "Psalm 121:1-2",
    text: "I lift up my eyes to the mountains — where does my help come from? My help comes from the LORD, the Maker of heaven and earth.",
  },
  {
    ref: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
  },
  {
    ref: "Psalm 143:8",
    text: "Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life.",
  },
  {
    ref: "Psalm 145:18",
    text: "The LORD is near to all who call on him, to all who call on him in truth.",
  },
  {
    ref: "Psalm 147:3",
    text: "He heals the brokenhearted and binds up their wounds.",
  },
  {
    ref: "Psalm 150:6",
    text: "Let everything that has breath praise the LORD. Praise the LORD.",
  },
  {
    ref: "Psalm 16:8",
    text: "I keep my eyes always on the LORD. With him at my right hand, I will not be shaken.",
  },
  {
    ref: "Psalm 18:2",
    text: "The LORD is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
  },
  {
    ref: "Psalm 19:14",
    text: "May these words of my mouth and this meditation of my heart be pleasing in your sight, LORD, my Rock and my Redeemer.",
  },
  {
    ref: "Psalm 28:7",
    text: "The LORD is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
  },
  {
    ref: "Psalm 30:5",
    text: "Weeping may stay for the night, but rejoicing comes in the morning.",
  },
  {
    ref: "Psalm 31:24",
    text: "Be strong and take heart, all you who hope in the LORD.",
  },
  {
    ref: "Psalm 32:8",
    text: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.",
  },
  {
    ref: "Psalm 55:22",
    text: "Cast your cares on the LORD and he will sustain you; he will never let the righteous be moved.",
  },
  {
    ref: "Psalm 73:26",
    text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
  },
  {
    ref: "Psalm 84:11",
    text: "For the LORD God is a sun and shield; the LORD bestows favor and honor; no good thing does he withhold from those whose walk is blameless.",
  },
];

export const MORNING_PRAYERS = [
  {
    title: "Prayer of Surrender",
    text: "Lord, as I begin this day, I surrender my plans, my worries and my will to You. Let Your purposes be accomplished in and through me. Order my steps and let my life bring glory to Your name. Amen.",
  },
  {
    title: "Prayer for Wisdom",
    text: "Heavenly Father, grant me wisdom for the decisions I face today. Open my eyes to see as You see, and give me a heart that seeks Your counsel above all else. Amen.",
  },
  {
    title: "Prayer for Strength",
    text: "Father God, I come to You acknowledging that I am weak in myself. Clothe me with Your strength today. Let me run this race with endurance, knowing You are with me every step. Amen.",
  },
  {
    title: "Prayer of Gratitude",
    text: "Lord, thank You for the gift of another day. Thank You for Your mercies that are new every morning. Help me to walk in gratitude and not take a single breath for granted. Amen.",
  },
  {
    title: "Prayer for Protection",
    text: "Lord, I put on the full armor of God today. Cover me and my family with Your blood. Go before me and be my rear guard. No weapon formed against me shall prosper. Amen.",
  },
  {
    title: "Prayer for the Day's Work",
    text: "Father, whatever my hands find to do today, let me do it with all my heart as unto You. Let excellence and integrity mark everything I do. May my work be an offering of worship. Amen.",
  },
  {
    title: "Prayer for Peace",
    text: "Prince of Peace, quiet the noise in my mind and the anxieties in my heart. Let Your peace that surpasses all understanding guard my heart and mind in Christ Jesus today. Amen.",
  },
  {
    title: "Prayer for Relationships",
    text: "Lord, help me to love those around me today the way You love me — patiently, kindly and without condition. Let my words build up and not tear down. Make me a vessel of Your love. Amen.",
  },
  {
    title: "Prayer for Faith",
    text: "Father, increase my faith today. Where I have doubted, let me trust. Where I have feared, let me believe. You are faithful and I choose to stand on Your promises this day. Amen.",
  },
  {
    title: "Prayer of Dedication",
    text: "Lord, I dedicate this day entirely to You. Every hour, every moment — use it for Your glory. Let the light of Christ shine through me so that others may see You and be drawn to You. Amen.",
  },
  {
    title: "Prayer for Focus",
    text: "Lord, help me to fix my eyes on You and not on the distractions of this world. Keep me anchored in Your Word throughout this day. Let my mind dwell on what is true, noble and right. Amen.",
  },
  {
    title: "Prayer for Boldness",
    text: "God of all courage, make me bold today. Bold to speak truth, bold to stand for righteousness, bold to share the hope I have in You. Let fear have no place in me. Amen.",
  },
  {
    title: "Prayer of Repentance",
    text: "Lord, search my heart and show me anything that is displeasing to You. I repent and ask for Your forgiveness. Cleanse me and renew a right spirit within me as I go into this day. Amen.",
  },
  {
    title: "Prayer for Provision",
    text: "Jehovah Jireh, my Provider, I trust You to meet every need I have today — physically, financially, emotionally and spiritually. You have never failed and I will not fear. Amen.",
  },
  {
    title: "Prayer for Healing",
    text: "Lord, You are the God who heals. I bring to You every pain, sickness and brokenness. Let Your healing power flow today. Restore what has been lost and make whole what has been broken. Amen.",
  },
  {
    title: "Prayer for Joy",
    text: "Father, let the joy of the Lord be my strength today. Not a happiness that depends on circumstances, but a deep and settled joy that comes from knowing You are on the throne. Amen.",
  },
  {
    title: "Prayer for Humility",
    text: "Lord Jesus, You humbled Yourself for my sake. Teach me that same humility today. Let me think of others before myself and serve without the need for recognition or praise. Amen.",
  },
  {
    title: "Prayer for Discernment",
    text: "Holy Spirit, give me discernment today. Help me to distinguish truth from deception, and to recognize the voice of the Good Shepherd above all other voices. Lead me in paths of righteousness. Amen.",
  },
  {
    title: "Prayer for the Nations",
    text: "Lord, I lift up the nations to You today. Let Your kingdom come and Your will be done on earth as it is in heaven. Raise up labourers for the harvest. Let Your name be known to all peoples. Amen.",
  },
  {
    title: "Prayer for Family",
    text: "Father, I cover my family in prayer today. Protect them, guide them and draw each one closer to You. Let our home be a place where Your presence dwells and Your love is felt. Amen.",
  },
  {
    title: "Prayer of Trust",
    text: "Lord, I choose to trust You today even in the things I cannot see or understand. You are good and Your ways are higher than mine. I rest in the knowledge that You hold all things together. Amen.",
  },
  {
    title: "Prayer for the Lost",
    text: "Father, lay on my heart today those who do not yet know You. Give me opportunities to share the Gospel and give me the courage to take them. May many come to know the saving grace of Jesus. Amen.",
  },
  {
    title: "Prayer for Unity",
    text: "Lord, let there be unity in Your Church today. Break down the walls of division and help us to walk together in love. Let the world know we are Yours by how we love one another. Amen.",
  },
  {
    title: "Prayer for Overflow",
    text: "Lord, fill me to overflowing today with Your Spirit. Let every conversation, every interaction and every action be seasoned with Your grace so that Your life spills out of mine into theirs. Amen.",
  },
  {
    title: "Prayer of New Beginnings",
    text: "God of new mercies, thank You that today is a fresh start. Whatever yesterday held, today is a new page. I receive Your grace and step into this day with expectation and hope. Amen.",
  },
  {
    title: "Prayer for Patience",
    text: "Lord, cultivate patience in me today. When things are slow, when people are difficult, when answers are delayed — let me wait on You with a calm and trusting heart. Amen.",
  },
  {
    title: "Prayer for Contentment",
    text: "Father, teach me to be content in whatever state I find myself, as Paul learned. Help me to find my satisfaction in You alone and not in the things of this world. You are more than enough. Amen.",
  },
  {
    title: "Prayer for Courage",
    text: "Lord, give me the courage of David before Goliath today. Remind me that the battle belongs to You. I will not shrink back but will step forward in Your name and by Your power. Amen.",
  },
  {
    title: "Prayer for Renewal",
    text: "Holy Spirit, renew my mind today. Replace every anxious thought with truth, every discouraging word with promise, and every fear with faith. Transform me by the renewing of my mind. Amen.",
  },
  {
    title: "Prayer of Commission",
    text: "Lord, send me out today as Your ambassador. Wherever I go, let me carry the atmosphere of heaven. Let me be salt and light in every room, every conversation and every situation I enter. Amen.",
  },
];

export const EVENING_VERSES = [
  {
    ref: "Psalm 4:8",
    text: "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.",
  },
  {
    ref: "Matthew 11:28",
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
  },
  {
    ref: "Psalm 121:3-4",
    text: "He will not let your foot slip — he who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep.",
  },
  {
    ref: "Lamentations 3:22-23",
    text: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
  },
  {
    ref: "Psalm 91:11",
    text: "For he will command his angels concerning you to guard you in all your ways.",
  },
  {
    ref: "Proverbs 3:24",
    text: "When you lie down, you will not be afraid; when you lie down, your sleep will be sweet.",
  },
  {
    ref: "John 14:27",
    text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
  },
  {
    ref: "Psalm 127:2",
    text: "In vain you rise early and stay up late, toiling for food to eat — for he grants sleep to those he loves.",
  },
  {
    ref: "Philippians 4:7",
    text: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
  },
  {
    ref: "Isaiah 26:3",
    text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
  },
  {
    ref: "Psalm 3:5",
    text: "I lie down and sleep; I wake again, because the LORD sustains me.",
  },
  {
    ref: "Romans 8:38-39",
    text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God.",
  },
  {
    ref: "Zephaniah 3:17",
    text: "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
  },
  {
    ref: "Numbers 6:24-26",
    text: "The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.",
  },
  {
    ref: "Psalm 73:26",
    text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
  },
  {
    ref: "2 Thessalonians 3:16",
    text: "Now may the Lord of peace himself give you peace at all times and in every way. The Lord be with all of you.",
  },
  { ref: "Psalm 56:3", text: "When I am afraid, I put my trust in you." },
  {
    ref: "1 Peter 5:7",
    text: "Cast all your anxiety on him because he cares for you.",
  },
  {
    ref: "Isaiah 41:10",
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you.",
  },
  {
    ref: "Psalm 29:11",
    text: "The LORD gives strength to his people; the LORD blesses his people with peace.",
  },
  {
    ref: "Deuteronomy 31:8",
    text: "The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
  },
  {
    ref: "Joshua 1:9",
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
  },
  {
    ref: "Psalm 62:1-2",
    text: "Truly my soul finds rest in God; my salvation comes from him. Truly he is my rock and my salvation; he is my fortress, I will never be shaken.",
  },
  {
    ref: "Isaiah 40:31",
    text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
  },
  {
    ref: "Psalm 16:7",
    text: "I will praise the LORD, who counsels me; even at night my heart instructs me.",
  },
  {
    ref: "Micah 7:8",
    text: "Do not gloat over me, my enemy! Though I have fallen, I will rise. Though I sit in darkness, the LORD will be my light.",
  },
  {
    ref: "Romans 15:13",
    text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
  },
  {
    ref: "Psalm 46:10",
    text: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.",
  },
  {
    ref: "Revelation 21:4",
    text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
  },
  {
    ref: "Psalm 131:2",
    text: "But I have calmed and quieted myself, I am like a weaned child with its mother; like a weaned child I am content.",
  },
];
