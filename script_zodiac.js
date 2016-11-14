// Configuration de la base de données MongoDB.
// var mongoose = require('mongoose');
// var utilisateur = 'joel';
// var mdp = 'joel@ds051534';
// var adresse = '.mongolab.com:51534/les-grottes-de-kalte';
// mongoose.connect('mongodb://' + utilisateur + ':' + mdp + adresse);




function scriptButton() {
    //window.alert(firstname.value +" is a boss");

    console.log("Le prenom est " + firstname.value);
    console.log("Le nom est " + lastname.value);

    console.log("jour : " + day.value);
    console.log("mois : " + month.value);
    console.log("annee : " + year.value);
    var birthdayM = month.value;
    var birthdayD = day.value;

    if(birthdayM<10)
    {
      birthdayM = "0" + month.value;
    }
    if(birthdayD<10)
    {
      birthdayD = "0" + day.value;
    }
    var birthday = year.value + birthdayM + birthdayD;
    console.log("birthday : " + birthday);

    var signs =
    [["20990121", "goat", "earth"],
    ["20980201", "horse", "earth"],
    ["20970212", "snake", "fire"],
    ["20960125", "dragon", "fire"],
    ["20950205", "rabbit", "wood"],
    ["20940215", "tiger", "wood"],
    ["20930127", "ox", "water"],
    ["20920207", "rat", "water"],
    ["20910218", "pig", "metal"],
    ["20900130", "dog", "metal"],
    ["20890210", "rooster", "earth"],
    ["20880124", "monkey", "earth"],
    ["20870203", "goat", "fire"],
    ["20860214", "horse", "fire"],
    ["20850126", "snake", "wood"],
    ["20840206", "dragon", "wood"],
    ["20830217", "rabbit", "water"],
    ["20820129", "tiger", "water"],
    ["20810209", "ox", "metal"],
    ["20800122", "rat", "metal"],
    ["20790202", "pig", "earth"],
    ["20780212", "dog", "earth"],
    ["20770124", "rooster", "fire"],
    ["20760205", "monkey", "fire"],
    ["20750215", "goat", "wood"],
    ["20740127", "horse", "wood"],
    ["20730207", "snake", "water"],
    ["20720219", "dragon", "water"],
    ["20710131", "rabbit", "metal"],
    ["20700211", "tiger", "metal"],
    ["20690123", "ox", "earth"],
    ["20680203", "rat", "earth"],
    ["20670214", "pig", "fire"],
    ["20660126", "dog", "fire"],
    ["20650205", "rooster", "wood"],
    ["20640217", "monkey", "wood"],
    ["20630129", "goat", "water"],
    ["20620209", "horse", "water"],
    ["20610121", "snake", "metal"],
    ["20600202", "dragon", "metal"],
    ["20590212", "rabbit", "earth"],
    ["20580124", "tiger", "earth"],
    ["20570204", "ox", "fire"],
    ["20560215", "rat", "fire"],
    ["20550128", "pig", "wood"],
    ["20540208", "dog", "wood"],
    ["20530219", "rooster", "water"],
    ["20520201", "monkey", "water"],
    ["20510211", "goat", "metal"],
    ["20500123", "horse", "metal"],
    ["20490202", "snake", "earth"],
    ["20480214", "dragon", "earth"],
    ["20470126", "rabbit", "fire"],
    ["20460206", "tiger", "fire"],
    ["20450217", "ox", "wood"],
    ["20440130", "rat", "wood"],
    ["20430210", "pig", "water"],
    ["20420122", "dog", "water"],
    ["20410201", "rooster", "metal"],
    ["20400212", "monkey", "metal"],
    ["20390124", "goat", "earth"],
    ["20380204", "horse", "earth"],
    ["20370215", "snake", "fire"],
    ["20360128", "dragon", "fire"],
    ["20350208", "rabbit", "wood"],
    ["20340219", "tiger", "wood"],
    ["20330131", "ox", "water"],
    ["20320211", "rat", "water"],
    ["20310123", "pig", "metal"],
    ["20300203", "dog", "metal"],
    ["20290213", "rooster", "earth"],
    ["20280126", "monkey", "earth"],
    ["20270206", "goat", "fire"],
    ["20260217", "horse", "fire"],
    ["20250129", "snake", "wood"],
    ["20240210", "dragon", "wood"],
    ["20230122", "rabbit", "water"],
    ["20220201", "tiger", "water"],
    ["20210212", "ox", "metal"],
    ["20200125", "rat", "metal"],
    ["20190205", "pig", "earth"],
    ["20180216", "dog", "earth"],
    ["20170128", "rooster", "fire"],
    ["20160208", "monkey", "fire"],
    ["20150219", "goat", "wood"],
    ["20140131", "horse", "wood"],
    ["20130210", "snake", "water"],
    ["20120123", "dragon", "water"],
    ["20110203", "rabbit", "metal"],
    ["20100214", "tiger", "metal"],
    ["20090126", "ox", "earth"],
    ["20080207", "rat", "earth"],
    ["20070218", "pig", "fire"],
    ["20060129", "dog", "fire"],
    ["20050209", "rooster", "wood"],
    ["20040122", "monkey", "wood"],
    ["20030201", "goat", "water"],
    ["20020212", "horse", "water"],
    ["20010124", "snake", "metal"],
    ["20000205", "dragon", "metal"],
    ["19990216", "rabbit", "earth"],
    ["19980128", "tiger", "earth"],
    ["19970207", "ox", "fire"],
    ["19960219", "rat", "fire"],
    ["19950131", "pig", "wood"],
    ["19940210", "dog", "wood"],
    ["19930123", "rooster", "water"],
    ["19920204", "monkey", "water"],
    ["19910215", "goat", "metal"],
    ["19900127", "horse", "metal"],
    ["19890206", "snake", "earth"],
    ["19880217", "dragon", "earth"],
    ["19870129", "rabbit", "fire"],
    ["19860209", "tiger", "fire"],
    ["19850220", "ox", "wood"],
    ["19840202", "rat", "wood"],
    ["19830213", "pig", "water"],
    ["19820125", "dog", "water"],
    ["19810205", "rooster", "metal"],
    ["19800216", "monkey", "metal"],
    ["19790128", "goat", "earth"],
    ["19780207", "horse", "earth"],
    ["19770218", "snake", "fire"],
    ["19760131", "dragon", "fire"],
    ["19750211", "rabbit", "wood"],
    ["19740123", "tiger", "wood"],
    ["19730203", "ox", "water"],
    ["19720215", "rat", "water"],
    ["19710127", "pig", "metal"],
    ["19700206", "dog", "metal"],
    ["19690217", "rooster", "earth"],
    ["19680130", "monkey", "earth"],
    ["19670209", "goat", "fire"],
    ["19660121", "horse", "fire"],
    ["19650202", "snake", "wood"],
    ["19640213", "dragon", "wood"],
    ["19630125", "rabbit", "water"],
    ["19620205", "tiger", "water"],
    ["19610215", "ox", "metal"],
    ["19600128", "rat", "metal"],
    ["19590208", "pig", "earth"],
    ["19580218", "dog", "earth"],
    ["19570131", "rooster", "fire"],
    ["19560212", "monkey", "fire"],
    ["19550124", "goat", "wood"],
    ["19540203", "horse", "wood"],
    ["19530214", "snake", "water"],
    ["19520127", "dragon", "water"],
    ["19510206", "rabbit", "metal"],
    ["19500217", "tiger", "metal"],
    ["19490129", "ox", "earth"],
    ["19480210", "rat", "earth"],
    ["19470122", "pig", "fire"],
    ["19460202", "dog", "fire"],
    ["19450213", "rooster", "wood"],
    ["19440125", "monkey", "wood"],
    ["19430205", "goat", "water"],
    ["19420215", "horse", "water"],
    ["19410127", "snake", "metal"],
    ["19400208", "dragon", "metal"],
    ["19390219", "rabbit", "earth"],
    ["19380131", "tiger", "earth"],
    ["19370211", "ox", "fire"],
    ["19360124", "rat", "fire"],
    ["19350204", "pig", "wood"],
    ["19340214", "dog", "wood"],
    ["19330126", "rooster", "water"],
    ["19320206", "monkey", "water"],
    ["19310217", "goat", "metal"],
    ["19300130", "horse", "metal"],
    ["19290210", "snake", "earth"],
    ["19280123", "dragon", "earth"],
    ["19270202", "rabbit", "fire"],
    ["19260213", "tiger", "fire"],
    ["19250124", "ox", "wood"],
    ["19240205", "rat", "wood"],
    ["19230216", "pig", "water"],
    ["19220128", "dog", "water"],
    ["19210208", "rooster", "metal"],
    ["19200220", "monkey", "metal"],
    ["19190201", "goat", "earth"],
    ["19180211", "horse", "earth"],
    ["19170123", "snake", "fire"],
    ["19160203", "dragon", "fire"],
    ["19150214", "rabbit", "wood"],
    ["19140126", "tiger", "wood"],
    ["19130206", "ox", "water"],
    ["19120218", "rat", "water"],
    ["19110130", "pig", "metal"],
    ["19100210", "dog", "metal"],
    ["19090122", "rooster", "earth"],
    ["19080202", "monkey", "earth"],
    ["19070213", "goat", "fire"],
    ["19060125", "horse", "fire"],
    ["19050204", "snake", "wood"],
    ["19040216", "dragon", "wood"],
    ["19030129", "rabbit", "water"],
    ["19020208", "tiger", "water"],
    ["19010219", "ox", "metal"],
    ["19000131", "rat", "metal"],
    ["19000000", "pig", "earth"]];

    //https://www.travelchinaguide.com/intro/social_customs/zodiac/
    //sign/description/strength/weakness
    var signsDescription =
    [["rat","People born in the Year of Rat are instinctive, acute and alert in nature which makes them to be brilliant businessmen. They can always react properly before the worst circumstances take place. They are also sophisticated and popular in social interaction. They are sanguine and very adaptable, being popular with others.","Adaptable, smart, cautious, acute, alert, positive, flexible, outgoing, cheerful","Timid, unstable, stubborn, picky, lack of persistence, querulous"],
    ["ox","Ranking second in Chinese zodiacal signs, the Ox is huge. People often use it to indicate something big in size or number. People born in the Year of Ox bear persistent, simple, honest, and straightforward characteristics. They are talent leaders with strong faith, and strong devotion to work. They are contemplative before taking actions, not easily affected by the surroundings but just follow their concept and ability. Being conservative with a lack of wit in speaking, they usually look silent and sometimes stubborn in their old ways.","honest, industrious, patient, cautious, level-headed, strong-willed, persistent","obstinate, inarticulate, prudish, distant"],
    ["tiger","In most cases, people with Chinese zodiac sign 'Tiger' are powerful, independent, confident and brave. They have strong sense of errantry, being frank and easy to win others' trust. In their middle age, their fate may be uneven, but after hardships, they will enjoy a bright prospect. While they are also likely to be dogmatic, and like showing off when accomplishing something.","Tolerant, loyal, valiant, courageous, trustworthy, intelligent, virtuous","Arrogant, short-tempered, hasty, traitorous"],
    ["rabbit","People born in Year of Rabbit usually impress others with an image of tenderness, grace and sensitive. They are romantic in relationship, having a high demand in life quality. They avoid arguing with others, and have a capability of converting an enemy into a friend. They are homebody and hospitable, and like house fitting-up. They can work with speed and efficiency, do not insist and get angry easily. But they also like hesitating, which makes them lose many chances.","Gentle, sensitive, compassionate, amiable, modest, and merciful","Amorous, hesitant, stubborn, timid, conservative"],
    ["dragon","People with Chinese zodiac sign 'Dragon' are usually a group of people who are lively, intellectual and excitable. They can clearly tell right from wrong. They are upright and frank. However, they are also a bit arrogant and impatient. Female Dragons tend to be overly confident. They hate hypocrisy, gossip and slander. They are not afraid of difficulties but hate to be used or controlled by others.","Decisive, inspiring, magnanimous, sensitive, ambitious, romantic","Eccentric, tactless, fiery, intolerant, unrealistic"],
    ["snake","Usually, people regard snake as a cunning and sly animal, which likes hanging out in darkness. In fact, this animal is also a symbol of wisdom and wit. Therefore, people with Chinese zodiac sign 'Snake', sensitive and humorous, and most of them are gifted in literature and art, such as Goethe and Picasso. Suspicion is their weakness, which makes them hesitant and a bit paranoid.","Soft-spoken, humorous, sympathetic, determined, passionate, smart","Jealous, suspicious, sly, fickle, nonchalant"],
    ["horse","They always impress upon people with dynamic, zealous and generous image. Although endowed with many shinning points, they have to face the weaknesses in their characteristics.","Most have nice personalities, such as warm-hearted, upright and easygoing. Hence, they usually have a lot of friends flocking around them. Independence and endurance makes them more powerful, and they do not easily give up when in difficulties. Positive attitude leads to a brighter direction.","The love of spending seems to be the biggest problem since they must be financially well off to support their social activities and outlook. Besides, their frank attitude at times leads to letting out secret easily. Persistence is what they lack on the path of success."],
    ["goat","People born in the Year of Sheep are tender, polite, filial, clever, and kind-hearted. They have special sensitivity to art and beauty and a special fondness for quiet living. They are wise, gentle and compassionate and can cope with business cautiously and circumspectly. In their daily life, they try to be economical. They are willing to take good care of others, but they should avoid pessimism and hesitation.","gentle, softhearted, considerate, attractive, hardworking, persistent, thrift","indecisive, timid, vain, pessimistic, moody, weak-willed"],
    ["monkey","The general image of people with Chinese zodiac sign 'Monkey' is of always being smart, clever and intelligent, especially in their career and wealth. They are lively, flexible, quick-witted and versatile. In addition, their gentleness and honesty bring them an everlasting love life. Although they were born with enviable skills, they still have several shortcomings, such as an impetuous temper and a tendency to look down upon others.","enthusiastic, self-assured, sociable, innovative","jealous, suspicious, cunning, selfish, arrogant"],
    ["rooster","People born in the Year of Rooster according to Chinese zodiac have many excellent characteristics, such as being honest, bright, communicative and ambitious. Most of them are born pretty or handsome, and prefer to dress up. In daily life, they seldom rely on others. However, they might be enthusiastic about something quickly, but soon be impassive. Thus, they need to have enough faiths and patience to insist on one thing.","Independent, capable, warm-hearted, self-respect, quick minded","Impatient, critical, eccentric, narrow-minded, selfish"],
    ["dog","They are usually independent, sincere, loyal and decisive according to Chinese zodiac analysis. They are not afraid of difficulties in daily life. These shining characteristics make them have harmonious relationship with people around.","Valiant, loyal, responsible, clever, courageous, lively","Sensitive, conservative, stubborn, emotional"],
    ["pig","People with Chinese zodiac sign Pig are considerate, responsible, independent and optimistic. They always show generousness and mercy to endure other people's mistakes, which help them gain harmonious interpersonal relationship. However, sometimes they would behave lazy and lack actions. In addition, pure hearts would let them be cheated easily in daily life.","Warm-hearted, good-tempered, loyal, honest, gentle","Naive, gullible, sluggish, short-tempered"]];

    //http://www.yourchineseastrology.com/five-elements.htm
    var elementsDescription =
    [["wood","Exceptionally gifted, Idealists, Planner, Owl"],
    ["water","Sympathetic, Perfectionist, Coordinator, Chameleon"],
    ["fire","Courageous, Passionate, Good at research, King, Koala"],
    ["earth","Kindness, Tolerant, Honest, Leader, Peacock"],
    ["metal","Determined, Persistent, Workaholic, Manager, Tiger"]];

    var birthdaySign = "";
    var birthdayElement = "";
    for (var yearIndex = 0; yearIndex <signs.length; yearIndex++)
    {
        if (birthday >= signs[yearIndex][0])
        {
          birthdaySign = signs[yearIndex][1];
          birthdayElement = signs[yearIndex][2];
          break;
        }

    }
    console.log("birthdaySign : " + birthdaySign);
    var zodiacImage = "public/images/zodiac_" + birthdaySign + ".png";
    document.getElementById("zodiacImage").src= zodiacImage;
    var answer = "";
    var nameTyped = false;
    if (firstname.value != "")
    {
      answer += firstname.value + " ";
      nameTyped= true;
    }
    if (lastname.value != "")
    {
      answer += lastname.value + " ";
      nameTyped= true;
    }
    if (nameTyped)
    {
      answer += ",";
    }
    answer += "your Chinese Sign is " + birthdaySign + " of " + birthdayElement + " !";
    document.getElementById("answer").innerHTML = answer;
}

