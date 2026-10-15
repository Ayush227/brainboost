/* ============================================================
   BrainBoost – exam_patterns_data.js
   Comprehensive Exam Question Patterns & Types for MPSC & Talathi
   Human-readable, clear formulas (No raw LaTeX codes)
   ============================================================ */

window.EXAM_PATTERNS = {
  /* ============================================================
     MATHEMATICS TOPICS (12 Topics)
     ============================================================ */

  // 1. AVERAGE (सरासरी)
  'average': [
    {
      title: 'Pattern 1: Average of Consecutive Numbers & Sequences',
      titleMr: 'प्रकार १: क्रमवार नैसर्गिक / सम / विषम संख्यांची सरासरी',
      formula: 'Average = (First Term + Last Term) ÷ 2   |   किंवा   |   Sum = [n × (n + 1)] ÷ 2',
      formulaDesc: 'जेव्हा संख्यांमधील फरक समान असतो (अंकगणिती श्रेणी), तेव्हा सरासरी नेहमी पहिले पद व शेवटचे पद यांची सरासरी असते.',
      question: 'Find the average of all natural numbers between 1 and 97.',
      questionMr: '१ ते ९७ मधील सर्व नैसर्गिक संख्यांची सरासरी किती?',
      solution: `
        <strong>🔍 Understanding the Pattern:</strong><br>
        The numbers are 1, 2, 3, 4, ... 97. The difference between consecutive terms is constant (d = 1).<br><br>
        <strong>⚡ Direct Shortcut Formula:</strong><br>
        <div style="font-size:1.05rem;font-weight:700;color:var(--accent-gold);margin:6px 0;">Average = (First Term + Last Term) ÷ 2 = (1 + 97) ÷ 2 = 98 ÷ 2 = 49</div>
        <strong>📝 Step-by-Step Method:</strong><br>
        • First Term = 1<br>
        • Last Term = 97<br>
        • Sum = [97 × (97 + 1)] ÷ 2 = (97 × 98) ÷ 2 = 4753<br>
        • Average = 4753 ÷ 97 = <strong>49</strong>.<br>
        <em>💡 Tip:</em> Never waste time adding 1 to 97! Always use (First + Last) ÷ 2 for uniform sequences.
      `
    },
    {
      title: 'Pattern 2: Finding Largest/Smallest Term from Average of Consecutive Numbers',
      titleMr: 'प्रकार २: क्रमवार संख्यांच्या सरासरीवरून सर्वात मोठी/लहान संख्या शोधणे',
      formula: 'Middle Term = Average   [जेव्हा पदांची संख्या विषम (3, 5, 7...) असते]',
      formulaDesc: 'विषम संख्यांच्या संख्येत सरासरी हीच अचूक मधली संख्या असते.',
      question: 'The average of 5 consecutive odd numbers is 61. What is the difference between the highest and lowest numbers?',
      questionMr: '५ क्रमवार विषम संख्यांची सरासरी ६१ आहे. तर सर्वात मोठ्या आणि सर्वात लहान संख्येतील फरक किती?',
      solution: `
        <strong>🔍 Understanding the Pattern:</strong><br>
        Since count n = 5 (odd count), the average (61) is the exact middle number.<br><br>
        <strong>⚡ Easy Breakdown:</strong><br>
        • Sequence: _ , _ , <strong>61</strong> , _ , _<br>
        • Consecutive odd numbers: 57, 59, <strong>61</strong>, 63, 65.<br>
        • Smallest = 57, Largest = 65.<br>
        • Difference = 65 - 57 = <strong>8</strong>.<br><br>
        <strong>⚡ Instant Exam Trick:</strong><br>
        Difference between largest and smallest for 'n' consecutive even/odd numbers is always <code>2 × (n - 1)</code>!<br>
        Difference = 2 × (5 - 1) = <strong>8</strong> (Can be solved in 2 seconds without finding numbers!).
      `
    },
    {
      title: 'Pattern 3: Inclusion / Exclusion of a Member (New Average)',
      titleMr: 'प्रकार ३: नवीन व्यक्तीचा समावेश झाल्यावर सरासरीत होणारा बदल',
      formula: 'Weight/Age of New Person = New Average + (Old Count × Increase in Average)',
      formulaDesc: 'नवीन व्यक्तीचे वय/वजन = जुनी सरासरी + (एकूण नवीन व्यक्ती × सरासरीत वाढ)',
      question: 'The average weight of 24 students is 35 kg. If the teacher\'s weight is included, the average increases by 400 grams. Find the weight of the teacher.',
      questionMr: '२४ विद्यार्थ्यांचे सरासरी वजन ३५ किलो आहे. शिक्षकाचे वजन मिळवल्यास सरासरी ४०० ग्रॅमने वाढते. तर शिक्षकाचे वजन किती?',
      solution: `
        <strong>🔍 Understanding the Pattern:</strong><br>
        When the teacher enters, the total count becomes 24 + 1 = 25 members. Each of the 25 members gets a 400g increase.<br><br>
        <strong>⚡ Quick Calculation:</strong><br>
        • 400 grams = 0.4 kg.<br>
        • Total increase brought by teacher = 25 × 0.4 kg = 10 kg.<br>
        • Teacher\'s weight = Old Average + Total Increase = 35 + 10 = <strong>45 kg</strong>.<br><br>
        <strong>📝 Traditional Verification:</strong><br>
        • Total weight of 24 students = 24 × 35 = 840 kg.<br>
        • Total weight of 25 people = 25 × 35.4 = 885 kg.<br>
        • Teacher = 885 - 840 = <strong>45 kg</strong>.
      `
    },
    {
      title: 'Pattern 4: Replacement of a Person',
      titleMr: 'प्रकार ४: जुन्या व्यक्तीऐवजी नवीन व्यक्ती बदलणे (Replacement)',
      formula: 'New Person = Replaced Person ± (Total Members × Change in Average)',
      formulaDesc: 'व्यक्तींची एकूण संख्या बदलत नाही, फक्त एकूण वजनात फरक पडतो.',
      question: 'The average age of 8 men increases by 2 years when two men aged 21 and 23 are replaced by two new men. What is the average age of the two new men?',
      questionMr: '८ पुरुषांपैकी २१ व २३ वर्षे वयाच्या दोघांऐवजी नवीन दोन पुरुष घेतल्यास सरासरी २ वर्षांनी वाढते, तर नवीन दोघांचे सरासरी वय किती?',
      solution: `
        <strong>🔍 Understanding the Pattern:</strong><br>
        Total count remains 8. Net increase in total age = 8 × 2 = 16 years.<br><br>
        <strong>⚡ Step-by-step Solution:</strong><br>
        • Sum of ages of replaced men = 21 + 23 = 44 years.<br>
        • Sum of ages of new 2 men = 44 + 16 = 60 years.<br>
        • Average age of the two new men = 60 ÷ 2 = <strong>30 years</strong>.
      `
    },
    {
      title: 'Pattern 5: Wrong Entry Correction',
      titleMr: 'प्रकार ५: चुकीची नोंद दुरुस्त करून खरी सरासरी काढणे',
      formula: 'Correct Average = Given Average + [(Correct Value − Wrong Value) ÷ Total Count]',
      formulaDesc: 'फरक धनात्मक आल्यास सरासरीत वाढ करावी, ऋणात्मक आल्यास वजा करावी.',
      question: 'The average marks of 40 students were found to be 68. Later it was found that a mark of 84 was wrongly entered as 48. Find the correct average.',
      questionMr: '४० विद्यार्थ्यांचे सरासरी गुण ६८ निघाले. नंतर लक्षात आले की ८४ ऐवजी चुकून ४८ नोंदवले गेले. तर खरी सरासरी किती?',
      solution: `
        <strong>🔍 Understanding the Pattern:</strong><br>
        84 should have been added, but only 48 was added. So total was under-calculated by 84 - 48 = 36 marks.<br><br>
        <strong>⚡ Shortcut Correction:</strong><br>
        • Net mark increase needed = +36 marks.<br>
        • Correction per student = +36 ÷ 40 = +0.9 marks.<br>
        • Correct Average = 68 + 0.9 = <strong>68.9</strong>.
      `
    }
  ],

  // 2. PERCENTAGE (शेकडेवारी)
  'percentage': [
    {
      title: 'Pattern 1: Price-Consumption-Expenditure (खर्च स्थिर ठेवणे)',
      titleMr: 'प्रकार १: भाव वाढल्यास खर्चात बदल न होण्यासाठी वापरात घट',
      formula: 'Percentage Reduction = [R ÷ (100 + R)] × 100%   |   किंवा भाव कमी झाल्यास वाढ = [R ÷ (100 − R)] × 100%',
      formulaDesc: 'किंमत R% ने वाढल्यास किंवा कमी झाल्यास खर्च स्थिर ठेवण्याचे थेट सूत्र.',
      question: 'If the price of sugar increases by 25%, by what percent must a household reduce its consumption so that expenditure remains unchanged?',
      questionMr: 'साखरेचा भाव २५% ने वाढला, तर घरगुती खर्चात वाढ होऊ नये म्हणून वापरात किती टक्के घट करावी?',
      solution: `
        <strong>🔍 Step-by-Step Solution:</strong><br>
        • Given R = 25% increase.<br>
        • Reduction in consumption = [25 ÷ (100 + 25)] × 100 = (25 ÷ 125) × 100 = (1/5) × 100 = <strong>20%</strong>.<br>
        <em>💡 Intuition:</em> Suppose initial price was ₹100 for 100 kg. New price is ₹125 for 100 kg. In ₹100, you now get 80 kg, which is a 20% drop.
      `
    },
    {
      title: 'Pattern 2: Successive Percentage Change / Net Effect',
      titleMr: 'प्रकार २: लागोपाठ शेकडा बदल (Net Effect)',
      formula: 'Net Change % = a + b + [(a × b) ÷ 100]%',
      formulaDesc: 'वाढीसाठी (+) आणि घटीसाठी (-) चिन्ह वापरावे.',
      question: 'The salary of an employee is first increased by 20% and then decreased by 20%. What is the net change in his salary?',
      questionMr: 'एका कर्मचाऱ्याचा पगार आधी २०% वाढवला व नंतर २०% कमी केला. तर त्याच्या पगारात निव्वळ किती टक्के बदल होईल?',
      solution: `
        <strong>⚡ Formula Application:</strong><br>
        • a = +20, b = -20.<br>
        • Net Change = 20 - 20 + [20 × (-20)] ÷ 100 = 0 - 400 ÷ 100 = <strong>-4% (4% Decrease)</strong>.<br>
        <em>💡 Rule:</em> When an amount is increased by x% and then decreased by x%, there is always a loss/decrease of <code>x² ÷ 100 %</code>!
      `
    },
    {
      title: 'Pattern 3: Marks & Passing Criteria',
      titleMr: 'प्रकार ३: परीक्षार्थी उत्तीर्ण-अनुत्तीर्ण गुण व कमाल गुण',
      formula: 'Total Marks = [(Deficit Marks + Surplus Marks) ÷ Difference in %] × 100',
      formulaDesc: 'दोन उमेदवारांच्या टक्केवारीतील फरक हा त्यांच्या गुणांमधील अंतराएवढा असतो.',
      question: 'A candidate gets 30% marks and fails by 15 marks. Another candidate gets 40% marks and secures 35 marks more than the pass mark. Find the maximum marks of the examination.',
      questionMr: 'एका विद्यार्थ्याला ३०% गुण मिळून तो १५ गुणांनी नापास झाला. दुसऱ्याला ४०% गुण मिळून उत्तीर्ण गुणांपेक्षा ३५ गुण जास्त मिळाले. तर परीक्षा एकूण किती गुणांची होती?',
      solution: `
        <strong>🔍 Step-by-Step Understanding:</strong><br>
        • Difference between percentages = 40% - 30% = 10%.<br>
        • Marks difference between the two = 15 (short) + 35 (extra) = 50 marks.<br>
        • So, 10% of Total Marks = 50.<br>
        • Total Maximum Marks = (50 ÷ 10) × 100 = <strong>500 marks</strong>.<br>
        • Passing marks = 30% of 500 + 15 = 150 + 15 = 165 marks.
      `
    },
    {
      title: 'Pattern 4: Population Growth / Depreciation',
      titleMr: 'प्रकार ४: लोकसंख्या वाढ किंवा यंत्राचे घसारा मूल्य',
      formula: 'Population after n years = P × (1 ± R ÷ 100)ⁿ',
      formulaDesc: 'दरवर्षी R% वाढ असल्यास (+), घसारा/कपात असल्यास (-) वापरा.',
      question: 'The present population of a town is 64,000. It increases at the rate of 10% per annum. What will be its population after 2 years?',
      questionMr: 'एका शहराची सध्याची लोकसंख्या ६४,००० आहे. ती दरवर्षी १०% दराने वाढते, तर २ वर्षांनंतर त्या शहराची लोकसंख्या किती होईल?',
      solution: `
        <strong>⚡ Quick Fraction Method:</strong><br>
        • 10% increase means multiplying factor = 11/10.<br>
        • Population after 2 years = 64,000 × (11/10) × (11/10) = 64,000 × (121/100) = 640 × 121 = <strong>77,440</strong>.
      `
    }
  ],

  // 3. PROFIT, LOSS & DISCOUNT (नफा, तोटा व सूट)
  'profit-loss': [
    {
      title: 'Pattern 1: Two Items Sold at Same SP with Same Gain% and Loss%',
      titleMr: 'प्रकार १: दोन वस्तूंची विक्री किंमत समान असताना एकीवर नफा व दुसरीवर तोटा',
      formula: 'Always Loss % = (Common % ÷ 10)² = (x² ÷ 100)%',
      formulaDesc: 'अशा व्यवहारात नेहमी तोटाच होतो, कधीही नफा होत नाही.',
      question: 'A shopkeeper sells two articles for ₹990 each. On one he gains 10% and on the other he loses 10%. Find his overall profit or loss percentage.',
      questionMr: 'दुकानदाराने दोन वस्तू प्रत्येकी ₹९९० ला विकल्या. एका वस्तूवर १०% नफा व दुसऱ्या वस्तूवर १०% तोटा झाला. तर संपूर्ण व्यवहारात किती टक्के नफा किंवा तोटा झाला?',
      solution: `
        <strong>⚡ 2-Second Exam Trick:</strong><br>
        • When Selling Price is same and profit% = loss% = x:<br>
        • Net Result = Always Loss = x² ÷ 100 % = 10² ÷ 100 = <strong>1% Loss</strong>.<br>
        • Notice that the actual SP value (₹990) does not even need to be calculated!
      `
    },
    {
      title: 'Pattern 2: CP of M Articles = SP of N Articles',
      titleMr: 'प्रकार २: M वस्तूंची खरेदी किंमत = N वस्तूंची विक्री किंमत',
      formula: 'Profit % = [(M − N) ÷ N] × 100%',
      formulaDesc: 'छेदामध्ये नेहमी विक्री केलेल्या वस्तूंची संख्या (N) येते.',
      question: 'If the cost price of 15 pens is equal to the selling price of 12 pens, find the gain percentage.',
      questionMr: 'जर १५ पेनांची खरेदी किंमत ही १२ पेनांच्या विक्री किमतीएवढी असेल, तर शेकडा नफा किती?',
      solution: `
        <strong>🔍 Understanding the Concept:</strong><br>
        By selling 12 pens, the shopkeeper recovers the full cost of 15 pens. That leaves 3 pens as pure profit on 12 pens sold.<br><br>
        <strong>⚡ Formula:</strong><br>
        • Profit% = [(15 - 12) ÷ 12] × 100 = (3 ÷ 12) × 100 = (1/4) × 100 = <strong>25% Profit</strong>.
      `
    },
    {
      title: 'Pattern 3: Dishonest Dealer / False Weights',
      titleMr: 'प्रकार ३: खोट्या वजनाचा वापर करणारा व्यापारी',
      formula: 'Gain % = [Error ÷ False Weight] × 100%',
      formulaDesc: 'नफा% = (वजनातील तफावत ÷ दिलेले खोटे वजन) × १००%',
      question: 'A dishonest dealer professes to sell his goods at cost price, but uses a weight of 900 grams for a 1 kg weight. Find his gain percentage.',
      questionMr: 'एक व्यापारी खरेदी किमतीत माल विकण्याचा दावा करतो, पण १ किलो वजनाऐवजी ९०० ग्रॅमचे खोटे माप वापरतो. तर त्याला किती टक्के नफा होतो?',
      solution: `
        <strong>🔍 Step-by-Step Solution:</strong><br>
        • True Weight = 1000 grams.<br>
        • False Weight = 900 grams.<br>
        • Error (saved weight) = 1000 - 900 = 100 grams.<br>
        • Gain% = (100 ÷ 900) × 100 = 100 ÷ 9 = <strong>11.11% (11 1/9%)</strong>.
      `
    },
    {
      title: 'Pattern 4: Marked Price, Successive Discount & Profit%',
      titleMr: 'प्रकार ४: छापील किंमत, सूट व नफ्याचे गुणोत्तर',
      formula: 'Marked Price (छापील) ÷ Cost Price (खरेदी) = (100 + Profit %) ÷ (100 − Discount %)',
      formulaDesc: 'खरेदी किंमत व छापील किंमत यांच्यातील थेट संबंध.',
      question: 'How much percent above the cost price must a shopkeeper mark his goods so that after giving a discount of 10%, he still earns a profit of 20%?',
      questionMr: '१०% सूट देऊनही २०% नफा मिळवण्यासाठी दुकानदाराने वस्तूची किंमत खरेदीपेक्षा किती टक्के जास्त छापावी?',
      solution: `
        <strong>⚡ Direct Ratio Formula:</strong><br>
        • MP ÷ CP = (100 + 20) ÷ (100 - 10) = 120 ÷ 90 = 4 ÷ 3.<br>
        • That means if CP = 3, MP = 4.<br>
        • Markup = (4 - 3) ÷ 3 = 1/3 = <strong>33.33% (33 1/3%)</strong> above CP.
      `
    }
  ],

  // 4. RATIO & PROPORTION (गुणोत्तर व प्रमाण)
  'ratio-proportion': [
    {
      title: 'Pattern 1: Combining Ratios (A:B and B:C to A:B:C)',
      titleMr: 'प्रकार १: स्वतंत्र गुणोत्तरांचे एकत्रित गुणोत्तर तयार करणे',
      formula: 'If A : B = a : b and B : C = c : d  ➔  A : B : C = (a × c) : (b × c) : (b × d)',
      formulaDesc: 'दोन्ही गुणोत्तरांमध्ये सामाईक असलेल्या पदाचे मूल्य समान करणे.',
      question: 'If A : B = 3 : 4 and B : C = 8 : 9, find A : B : C and A : C.',
      questionMr: 'जर A : B = ३ : ४ आणि B : C = ८ : ९ असेल, तर A : B : C आणि A : C चे प्रमाण काढा.',
      solution: `
        <strong>🔍 Step-by-Step Balancing:</strong><br>
        • Notice B is 4 in first ratio and 8 in second ratio.<br>
        • Multiply the first ratio by 2 to make B equal to 8: A : B = 6 : 8.<br>
        • Now combine: A : B : C = <strong>6 : 8 : 9</strong>.<br>
        • A : C = 6 : 9 = <strong>2 : 3</strong>.
      `
    },
    {
      title: 'Pattern 2: Income, Expenditure & Savings',
      titleMr: 'प्रकार २: उत्पन्न, खर्च आणि बचतीचे गुणोत्तर',
      formula: 'Income = Expenditure + Savings   [किंवा बचत = उत्पन्न − खर्च]',
      formulaDesc: 'समान बचत असल्यास क्रॉस मल्टिप्लिकेशन ट्रिक वापरता येते.',
      question: 'The monthly incomes of A and B are in the ratio 5 : 4 and their expenditures are in the ratio 3 : 2. If each saves ₹1600 per month, find the income of A.',
      questionMr: 'A आणि B च्या उत्पन्नाचे गुणोत्तर ५ : ४ असून त्यांच्या खर्चाचे गुणोत्तर ३ : २ आहे. जर प्रत्येकाची मासिक बचत ₹१६०० असेल, तर A चे मासिक उत्पन्न किती?',
      solution: `
        <strong>🔍 Intuitive Unit Method:</strong><br>
        • Income ratio: A = 5 units, B = 4 units.<br>
        • Expenditure ratio: A = 3 units, B = 2 units.<br>
        • Savings = (Income - Expenditure): A = 5 - 3 = 2 units, B = 4 - 2 = 2 units.<br>
        • Here both save 2 units, which equals ₹1600!<br>
        • 1 unit = ₹800.<br>
        • A\'s income = 5 units = 5 × 800 = <strong>₹4,000</strong>.
      `
    },
    {
      title: 'Pattern 3: Coin Denominations in a Bag',
      titleMr: 'प्रकार ३: पिशवीतील नाण्यांचे प्रकार व एकूण मूल्य',
      formula: 'Total Value = Sum of (Coin Ratio × Coin Value in ₹)',
      formulaDesc: 'सर्व नाण्यांचे मूल्य रुपयांमध्ये रूपांतरित करून एकूण रकमेस भागणे.',
      question: 'A bag contains ₹1, 50-paise, and 25-paise coins in the ratio 5 : 6 : 8. If the total value of money is ₹210, find the number of 50-paise coins.',
      questionMr: 'एका पिशवीत ₹१, ५० पैसे व २५ पैशांची नाणी ५ : ६ : ८ या प्रमाणात आहेत. एकूण रक्कम ₹२१० असल्यास ५० पैशांची नाणी किती?',
      solution: `
        <strong>🔍 Step-by-Step Solution:</strong><br>
        • ₹1 coins = 5x coins = ₹(5x)<br>
        • 50-paise coins = 6x coins = ₹(6x × 0.50) = ₹(3x)<br>
        • 25-paise coins = 8x coins = ₹(8x × 0.25) = ₹(2x)<br>
        • Total Value = 5x + 3x + 2x = 10x.<br>
        • 10x = 210  =>  x = 21.<br>
        • Number of 50-paise coins = 6x = 6 × 21 = <strong>126 coins</strong>.
      `
    }
  ],

  // 5. TIME, SPEED & DISTANCE (वेळ, वेग आणि अंतर)
  'time-speed-distance': [
    {
      title: 'Pattern 1: Average Speed for Equal Distance (Going & Returning)',
      titleMr: 'प्रकार १: समान अंतरासाठी सरासरी वेग (जाणे व येणे)',
      formula: 'Average Speed = (2 × x × y) ÷ (x + y)',
      formulaDesc: 'जेव्हा अंतर समान असते, तेव्हा सरासरी वेग अंतरावर अवलंबून नसतो.',
      question: 'A car travels from Pune to Mumbai at 60 km/h and returns at 40 km/h. Find the average speed for the entire journey.',
      questionMr: 'एक कार पुण्याहून मुंबईला ६० किमी/तास वेगाने जाते व ४० किमी/तास वेगाने परत येते. तर संपूर्ण प्रवासाचा सरासरी वेग किती?',
      solution: `
        <strong>⚡ Harmonic Mean Formula:</strong><br>
        • Avg Speed = (2 × 60 × 40) ÷ (60 + 40) = 4800 ÷ 100 = <strong>48 km/h</strong>.<br>
        <em>⚠️ Caution:</em> Never do (60 + 40) ÷ 2 = 50 km/h! Average speed is always less than arithmetic mean because more time is spent at lower speed.
      `
    },
    {
      title: 'Pattern 2: Train Crossing a Pole vs Platform',
      titleMr: 'प्रकार २: आगगाडी खांब किंवा प्लॅटफॉर्म ओलांडणे',
      formula: 'Time (Pole) = Train Length ÷ Speed   |   Time (Platform) = (Train Length + Platform Length) ÷ Speed',
      formulaDesc: 'खांब/माणूस ओलांडताना अंतर = गाडीची लांबी. प्लॅटफॉर्म ओलांडताना अंतर = दोन्ही लांबींची बेरीज.',
      question: 'A 200m long train running at 54 km/h crosses a railway platform in 30 seconds. Find the length of the platform.',
      questionMr: '५४ किमी/तास वेगाने धावणारी २०० मीटर लांबीची आगगाडी एका प्लॅटफॉर्मला ३० सेकंदात ओलांडते, तर प्लॅटफॉर्मची लांबी किती?',
      solution: `
        <strong>🔍 Step-by-Step Conversion:</strong><br>
        • Convert speed to m/s: 54 × (5/18) = 15 m/s.<br>
        • Total distance traveled in 30s = Speed × Time = 15 × 30 = 450 meters.<br>
        • Total Distance = Train Length + Platform Length<br>
        • 450 = 200 + Platform Length<br>
        • Platform Length = 450 - 200 = <strong>250 meters</strong>.
      `
    },
    {
      title: 'Pattern 3: Relative Speed of Two Trains',
      titleMr: 'प्रकार ३: दोन आगगाड्यांचा सापेक्ष वेग (एकाच दिशेने व विरुद्ध दिशेने)',
      formula: 'Relative Speed = S₁ + S₂ (Opposite Direction)   |   Relative Speed = |S₁ − S₂| (Same Direction)',
      formulaDesc: 'ओलांडण्याचा वेळ = (दोन्ही गाड्यांच्या लांबींची बेरीज) ÷ सापेक्ष वेग',
      question: 'Two trains 120m and 180m in length are running in opposite directions at 42 km/h and 48 km/h. In what time will they pass each other?',
      questionMr: '१२० मी व १८० मी लांबीच्या दोन आगगाड्या परस्पर विरुद्ध दिशेने अनुक्रमे ४२ किमी/तास व ४८ किमी/तास वेगाने धावत आहेत. त्या एकमेकींना किती वेळात ओलांडतील?',
      solution: `
        <strong>⚡ Relative Speed Solution:</strong><br>
        • Total Distance to cross = 120 + 180 = 300 meters.<br>
        • Relative Speed (Opposite direction) = 42 + 48 = 90 km/h.<br>
        • Convert to m/s: 90 × (5/18) = 25 m/s.<br>
        • Time = Distance ÷ Speed = 300 ÷ 25 = <strong>12 seconds</strong>.
      `
    },
    {
      title: 'Pattern 4: Boats and Streams (प्रवाहाच्या दिशेने व विरुद्ध)',
      titleMr: 'प्रकार ४: बोट आणि प्रवाह (Downstream & Upstream)',
      formula: 'Boat in Still Water = (Downstream + Upstream) ÷ 2   |   Stream Speed = (Downstream − Upstream) ÷ 2',
      formulaDesc: 'Downstream = प्रवाहाच्या दिशेने वेग, Upstream = प्रवाहाच्या विरुद्ध दिशेने वेग',
      question: 'A boat travels downstream at 14 km/h and upstream at 8 km/h. Find the speed of the boat in still water and speed of the stream.',
      questionMr: 'एक बोट प्रवाहाच्या दिशेने १४ किमी/तास वेगाने जाते आणि प्रवाहाच्या विरुद्ध दिशेने ८ किमी/तास वेगाने येते. तर संथ पाण्यातील बोटीचा वेग व प्रवाहाचा वेग किती?',
      solution: `
        <strong>⚡ Direct Formula:</strong><br>
        • Speed of boat in still water = (14 + 8) ÷ 2 = 22 ÷ 2 = <strong>11 km/h</strong>.<br>
        • Speed of water current = (14 - 8) ÷ 2 = 6 ÷ 2 = <strong>3 km/h</strong>.
      `
    }
  ],

  // 6. TIME & WORK (काम आणि काळ)
  'time-work': [
    {
      title: 'Pattern 1: Combined Work (A and B Working Together)',
      titleMr: 'प्रकार १: दोघांनी मिळून काम करणे (LCM युनिट पद्धत)',
      formula: 'Days Together = (A × B) ÷ (A + B)   |   किंवा एकूण काम = LCM(A, B)',
      formulaDesc: 'एकूण काम = लसावि मानून प्रत्येकाची एका दिवसाची क्षमता (Efficiency) काढणे.',
      question: 'A can do a piece of work in 12 days and B can do it in 24 days. How many days will they take working together?',
      questionMr: 'A एक काम १२ दिवसांत पूर्ण करतो आणि B तेच काम २४ दिवसांत पूर्ण करतो. तर दोघे मिळून ते काम किती दिवसांत करतील?',
      solution: `
        <strong>⚡ Modern LCM Method:</strong><br>
        • Total Work = LCM of (12, 24) = 24 units.<br>
        • A\'s 1-day work = 24 ÷ 12 = 2 units/day.<br>
        • B\'s 1-day work = 24 ÷ 24 = 1 unit/day.<br>
        • Combined 1-day work = 2 + 1 = 3 units/day.<br>
        • Days required = 24 ÷ 3 = <strong>8 days</strong>.
      `
    },
    {
      title: 'Pattern 2: Person Leaving Before or After Some Days',
      titleMr: 'प्रकार २: काही दिवसांनी काम सोडून जाणे किंवा सामील होणे',
      formula: 'Remaining Work = Total Work − Work Done Together',
      formulaDesc: 'उरलेले काम = शिल्लक काम ÷ उरलेल्या व्यक्तीची एका दिवसाची क्षमता.',
      question: 'A can do a job in 20 days and B in 30 days. They work together for 5 days, and then A leaves. In how many more days will B finish the remaining work?',
      questionMr: 'A एक काम २० दिवसांत व B ३० दिवसांत करतो. दोघांनी ५ दिवस एकत्र काम केल्यावर A काम सोडून गेला. तर उरलेले काम B एकटा किती दिवसांत संपवेल?',
      solution: `
        <strong>🔍 Step-by-Step Breakdown:</strong><br>
        • Total Work = LCM(20, 30) = 60 units.<br>
        • A does 3 units/day, B does 2 units/day.<br>
        • Together in 5 days: (3 + 2) × 5 = 25 units done.<br>
        • Remaining work = 60 - 25 = 35 units.<br>
        • B alone takes = 35 ÷ 2 = <strong>17.5 days</strong> (17 दिवस आणि अर्धा दिवस).
      `
    },
    {
      title: 'Pattern 3: Men, Women, Days & Hours Equivalence',
      titleMr: 'प्रकार ३: कामगार, दिवस, तास व काम सूत्र (M1 D1 H1 / W1)',
      formula: '(M₁ × D₁ × H₁) ÷ W₁ = (M₂ × D₂ × H₂) ÷ W₂',
      formulaDesc: 'W = केलेले काम किंवा मजुरी. बाकी सर्व घटक अंशात येतात.',
      question: 'If 15 men can construct a 100m road in 10 days, how many men are required to construct a 200m road in 5 days?',
      questionMr: '१५ मजूर १० दिवसांत १०० मीटर लांब रस्ता बांधतात, तर ५ दिवसांत २०० मीटर लांब रस्ता बांधण्यासाठी किती मजूर लागतील?',
      solution: `
        <strong>⚡ Formula Substitution:</strong><br>
        • (15 × 10) ÷ 100 = (M2 × 5) ÷ 200<br>
        • 150 ÷ 100 = 5 M2 ÷ 200<br>
        • 1.5 = M2 ÷ 40<br>
        • M2 = 1.5 × 40 = <strong>60 men</strong>.
      `
    },
    {
      title: 'Pattern 4: Pipes and Cisterns with Leaks',
      titleMr: 'प्रकार ४: नळ व पाण्याची टाकी (छिद्र/गळती असणे)',
      formula: 'Net Filling Rate = Inlet Rate − Leak Rate',
      formulaDesc: 'गळतीचे काम वजा (-) मानून एकूण धारकतेचा लसावि काढा.',
      question: 'Pipe A can fill a tank in 8 hours, but due to a leak at the bottom, it takes 10 hours. In how many hours can the leak alone empty the full tank?',
      questionMr: 'एक नळ टाकी ८ तासांत भरतो, परंतु तळाला छिद्र असल्यामुळे टाकी भरण्यास १० तास लागतात. तर फक्त त्या छिद्रामुळे भरलेली टाकी किती तासांत रिकामी होईल?',
      solution: `
        <strong>⚡ LCM Unit Method:</strong><br>
        • Capacity of Tank = LCM(8, 10) = 40 units.<br>
        • Pipe A efficiency = +5 units/hour.<br>
        • Combined (A + Leak) = +4 units/hour.<br>
        • Leak emptying efficiency = 5 - 4 = 1 unit/hour.<br>
        • Time taken by leak alone = 40 ÷ 1 = <strong>40 hours</strong>.
      `
    }
  ],

  // 7. SIMPLE & COMPOUND INTEREST (सरळव्याज व चक्रवाढ व्याज)
  'simple-compound-interest': [
    {
      title: 'Pattern 1: Sum Becomes N Times in T Years (SI)',
      titleMr: 'प्रकार १: सरळव्याजाने रक्कम N पट होणे',
      formula: 'Rate × Time = (N − 1) × 100',
      formulaDesc: 'व्याज = मुद्दलाच्या (N - 1) पट होते.',
      question: 'A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?',
      questionMr: 'सरळव्याजाने एक रक्कम ८ वर्षांत दुप्पट होते, तर व्याजाचा दर दरसाल दरकडा (द.सा.द.शे.) किती?',
      solution: `
        <strong>⚡ 5-Second Exam Trick:</strong><br>
        • Here N = 2, T = 8 years.<br>
        • R × 8 = (2 - 1) × 100<br>
        • R × 8 = 100<br>
        • R = 100 ÷ 8 = <strong>12.5% p.a.</strong>
      `
    },
    {
      title: 'Pattern 2: Difference between CI and SI for 2 Years and 3 Years',
      titleMr: 'प्रकार २: २ वर्षे व ३ वर्षांतील चक्रवाढ व सरळव्याजातील फरक',
      formula: '2-Year Difference = P × (R ÷ 100)²   |   3-Year Difference = P × (R ÷ 100)² × [3 + (R ÷ 100)]',
      formulaDesc: 'MPSC व तलाठी परीक्षेतील सर्वाधिक विचारला जाणारा हमखास शॉर्टकट.',
      question: 'The difference between CI and SI on a certain sum of money for 2 years at 10% per annum is ₹65. Find the principal sum.',
      questionMr: 'एका रकमेचे १०% दराने २ वर्षांचे चक्रवाढ व्याज व सरळव्याज यांतील फरक ₹६५ आहे, तर ती मुद्दल किती?',
      solution: `
        <strong>⚡ Direct Shortcut Formula:</strong><br>
        • Difference = P × (R ÷ 100)²<br>
        • 65 = P × (10 ÷ 100)²<br>
        • 65 = P × (1 ÷ 100)<br>
        • P = 65 × 100 = <strong>₹6,500</strong>.
      `
    },
    {
      title: 'Pattern 3: Compound Interest Multiplier Power Rule',
      titleMr: 'प्रकार ३: चक्रवाढ व्याजाने रक्कम पटीत वाढण्याचा नियम',
      formula: 'जर रक्कम T वर्षांत k पट होते  ➔  ती (m × T) वर्षांत kᵐ पट होईल',
      formulaDesc: 'चक्रवाढ व्याजात पटीचा घातांक हा वर्षांच्या पटीत वाढतो.',
      question: 'A sum under compound interest triples (3 times) in 4 years. In how many years will it become 27 times itself?',
      questionMr: 'चक्रवाढ व्याजाने एक रक्कम ४ वर्षांत ३ पट होते, तर ती रक्कम २७ पट होण्यासाठी किती वर्षे लागतील?',
      solution: `
        <strong>⚡ Multiplier Rule:</strong><br>
        • 3 times = 3¹ in 4 years.<br>
        • 27 times = 3³.<br>
        • Since power is 3, Time = 3 × 4 = <strong>12 years</strong>.
      `
    }
  ],

  // 8. NUMBER SYSTEM (संख्या पद्धती)
  'number-system': [
    {
      title: 'Pattern 1: Divisibility Tests & Finding Missing Digit',
      titleMr: 'प्रकार १: कसोट्यांवर आधारित गाळलेला अंक शोधणे',
      formula: 'Divisibility by 9: अंकांची बेरीज ९ ने विभाज्य   |   By 11: |विषम स्थानावरील बेरीज − सम स्थानावरील बेरीज| = 0 किंवा 11',
      formulaDesc: 'संख्या न भागता कसोट्यांचा वापर करून सेकंदात उत्तर काढणे.',
      question: 'If the 6-digit number 7504*2 is divisible by 9, find the missing digit *.',
      questionMr: 'जर ७५०४*२ ही ६ अंकी संख्या ९ ने पूर्ण निःशेष विभाज्य असेल, तर * च्या जागी कोणता अंक येईल?',
      solution: `
        <strong>🔍 Rule for 9:</strong><br>
        • Sum of digits = 7 + 5 + 0 + 4 + * + 2 = 18 + *.<br>
        • For 18 + * to be divisible by 9, the single digit * can be <strong>0 or 9</strong>.<br>
        • If non-zero digit is asked, * = <strong>9</strong> (or 0 if allowed).
      `
    },
    {
      title: 'Pattern 2: Unit Digit of Large Powers',
      titleMr: 'प्रकार २: मोठ्या घातांकांचा एकक स्थानचा अंक शोधणे',
      formula: 'Unit Digit = Power mod 4   [Cyclicity of 2, 3, 7, 8 is 4]',
      formulaDesc: 'घातांकाला ४ ने भागून बाकी काढावी. बाकी ० असल्यास घातांक ४ मानावा.',
      question: 'What is the unit digit of (2467)^153 × (341)^72?',
      questionMr: '(२४६७)^१५३ × (३४१)^७२ या गुणाकारातील एकक स्थानचा अंक कोणता?',
      solution: `
        <strong>⚡ Cyclicity Method:</strong><br>
        • For 7^153: Divide 153 by 4: 153 = 4 × 38 + 1 (Remainder = 1).<br>
        • Unit digit of 7^1 = 7.<br>
        • For 1^72: Unit digit of 1 raised to any power is always 1.<br>
        • Net unit digit = 7 × 1 = <strong>7</strong>.
      `
    },
    {
      title: 'Pattern 3: Division Algorithm & Successive Remainders',
      titleMr: 'प्रकार ३: एका संख्येने भागल्यावर बाकी, तर दुसऱ्या संख्येने भागल्यास बाकी',
      formula: 'New Remainder = Old Remainder ÷ New Divisor (बाकी शोधणे)',
      formulaDesc: 'जर पहिला भाजक दुसऱ्या भाजकाने विभाज्य असेल, तर थेट जुन्या बाकीला नवीन भाजकाने भागावे.',
      question: 'A number when divided by 899 gives a remainder 63. If the same number is divided by 29, what will be the remainder?',
      questionMr: 'एका संख्येला ८९९ ने भागल्यास ६३ बाकी उरते. त्याच संख्येला २९ ने भागल्यास बाकी किती उरेल?',
      solution: `
        <strong>⚡ 3-Second Shortcut:</strong><br>
        • Check: Does 29 divide 899? Yes (29 × 31 = 899).<br>
        • Directly divide the remainder 63 by 29:<br>
        • 63 = 29 × 2 + 5 (Remainder = 5).<br>
        • Answer = <strong>5</strong>.
      `
    }
  ],

  // 9. BODMAS / SIMPLIFICATION (सरलीकरण)
  'bodmas': [
    {
      title: 'Pattern 1: Order of Operations with Vinculum (रेघीय कंस)',
      titleMr: 'प्रकार १: रेघीय कंस व BODMAS नियमावली',
      formula: 'Sequence: Vinculum (रेघ) ➔ Brackets () {} [] ➔ Of (चे/चा) ➔ Division ÷ ➔ Multiplication × ➔ Addition + ➔ Subtraction −',
      formulaDesc: 'सर्वात आधी रेषेखालील क्रिया (Vinculum), मग कंस, मग चे/चा, मग भागाकार, गुणाकार, बेरीज, वजाबाकी.',
      question: 'Evaluate: 18 - [6 - {4 - (8 - 6 + 3 with bar on 6+3)}]',
      questionMr: 'किंमत काढा: १८ - [६ - {४ - (८ - ६ + ३)}], जेथे ६+३ वर रेघ आहे.',
      solution: `
        <strong>🔍 Step-by-Step Execution:</strong><br>
        1. Vinculum bar first: 6 + 3 = 9.<br>
        2. Round bracket: 8 - 9 = -1.<br>
        3. Curly bracket: 4 - (-1) = 4 + 1 = 5.<br>
        4. Square bracket: 6 - 5 = 1.<br>
        5. Final subtraction: 18 - 1 = <strong>17</strong>.
      `
    },
    {
      title: 'Pattern 2: Algebraic Identities in Arithmetic Simplification',
      titleMr: 'प्रकार २: बैजिक सूत्रांवर आधारित सरलीकरण',
      formula: '(a³ + b³) ÷ (a² − ab + b²) = a + b   |   (a³ − b³) ÷ (a² + ab + b²) = a − b',
      formulaDesc: 'मोठे दशांश गुणाकार न करता सूत्राचा थेट वापर करणे.',
      question: 'Simplify: (0.73 × 0.73 × 0.73 + 0.27 × 0.27 × 0.27) / (0.73 × 0.73 - 0.73 × 0.27 + 0.27 × 0.27)',
      questionMr: 'सरळरूप द्या: (०.७३³ + ०.२७³) / (०.७३² - ०.७३ × ०.२७ + ०.२७²)',
      solution: `
        <strong>⚡ Identity Recognition:</strong><br>
        • Let a = 0.73, b = 0.27.<br>
        • Expression is (a³ + b³) ÷ (a² - ab + b²) = a + b.<br>
        • Answer = 0.73 + 0.27 = <strong>1</strong>.
      `
    },
    {
      title: 'Pattern 3: Recurring Decimals to Fractions',
      titleMr: 'प्रकार ३: आवर्ती दशांश अपूर्णांकाचे व्यवहारी अपूर्णांकात रूपांतर',
      formula: '0.āb = (ab − a) ÷ 90   |   0.āb̄ = ab ÷ 99',
      formulaDesc: 'आवर्ती अंकांबद्दल ९ आणि विना-आवर्ती अंकांबद्दल ० छेदात येतात.',
      question: 'Convert 0.4777... (0.4̄7) into a common fraction.',
      questionMr: '०.४७७७... (०.४̄७) या आवर्ती दशांशाचे व्यवहारी अपूर्णांकात रूपांतर करा.',
      solution: `
        <strong>⚡ Formula:</strong><br>
        • Full number minus non-repeating part = 47 - 4 = 43.<br>
        • One recurring digit (9) and one non-recurring digit after decimal (0) = 90.<br>
        • Fraction = <strong>43 / 90</strong>.
      `
    }
  ],

  // 10. LCM & HCF (मसावि आणि लसावि)
  'lcm-hcf': [
    {
      title: 'Pattern 1: Product Relation (HCF × LCM = Product of Numbers)',
      titleMr: 'प्रकार १: दोन संख्यांचा गुणाकार = मसावि × लसावि',
      formula: 'First Number × Second Number = HCF × LCM',
      formulaDesc: 'दोन संख्यांच्या बाबतीत हा नियम तंतोतंत लागू पडतो.',
      question: 'The HCF and LCM of two numbers are 12 and 336 respectively. If one of the numbers is 84, find the other number.',
      questionMr: 'दोन संख्यांचा मसावि १२ व लसावि ३३६ आहे. त्यांपैकी एक संख्या ८४ असल्यास दुसरी संख्या कोणती?',
      solution: `
        <strong>⚡ Formula Application:</strong><br>
        • Other Number = (HCF × LCM) ÷ First Number<br>
        • Other Number = (12 × 336) ÷ 84 = 336 ÷ 7 = <strong>48</strong>.
      `
    },
    {
      title: 'Pattern 2: Bells Ringing Together / Traffic Lights',
      titleMr: 'प्रकार २: घंटा एकाच वेळी वाजणे / दिवे एकत्र लागणे',
      formula: 'Next Simultaneous Time = LCM of Individual Time Intervals',
      formulaDesc: 'अशा प्रश्नांत नेहमी दिलेल्या सेकंदांचा/मिनिटांचा लसावि काढावा.',
      question: 'Four bells toll together at intervals of 6, 8, 12, and 18 seconds. After how much time will they toll together next?',
      questionMr: 'चार घंटा अनुक्रमे ६, ८, १२ आणि १८ सेकंदांच्या अंतराने वाजतात. त्या एकाच वेळी वाजल्यानंतर पुन्हा किती वेळात एकत्र वाजतील?',
      solution: `
        <strong>🔍 Step-by-Step LCM:</strong><br>
        • Prime factorization:<br>
          6 = 2 × 3<br>
          8 = 2³<br>
          12 = 2² × 3<br>
          18 = 2 × 3²<br>
        • LCM = 2³ × 3² = 8 × 9 = <strong>72 seconds (1 min 12 seconds)</strong>.
      `
    },
    {
      title: 'Pattern 3: Greatest Number Leaving the Same Remainder',
      titleMr: 'प्रकार ३: प्रत्येक वेळी समान बाकी ठेवणारी मोठ्यात मोठी संख्या',
      formula: 'Required Number = HCF of (|x − y|, |y − z|, |z − x|)',
      formulaDesc: 'संख्यांमधील फरकांचा मसावि काढल्यास बाकी आपोआप निघून जाते.',
      question: 'Find the greatest number that will divide 43, 91, and 183 so as to leave the same remainder in each case.',
      questionMr: '४३, ९१ आणि १८३ ला ज्या मोठ्यात मोठ्या संख्येने भागल्यास प्रत्येक वेळी समान बाकी उरेल अशी संख्या कोणती?',
      solution: `
        <strong>⚡ Difference Method:</strong><br>
        • Find differences between the pairs:<br>
          91 - 43 = 48<br>
          183 - 91 = 92<br>
          183 - 43 = 140<br>
        • Now find HCF of (48, 92, 140):<br>
          48 = 4 × 12<br>
          92 = 4 × 23<br>
          140 = 4 × 35<br>
        • Common factor HCF = <strong>4</strong>.
      `
    }
  ],

  // 11. PERMUTATION, COMBINATION & PROBABILITY (क्रमपरिवर्तन, संचयन व संभाव्यता)
  'permutation-combination': [
    {
      title: 'Pattern 1: Word Letter Rearrangements with Repetition',
      titleMr: 'प्रकार १: शब्दातील अक्षरांची मांडणी व पुनरावृत्ती सूत्र',
      formula: 'Total Arrangements = n! ÷ (p! × q! × r!)   [p, q, r are count of repeating letters]',
      formulaDesc: 'एकूण अक्षरांचे फॅक्टोरिअल भागिले पुनरावृत्ती होणाऱ्या अक्षरांचे फॅक्टोरिअल.',
      question: 'In how many different ways can the letters of the word "LEADER" be arranged?',
      questionMr: '"LEADER" या शब्दातील अक्षरे किती वेगवेगळ्या प्रकारे मांडता येतील?',
      solution: `
        <strong>🔍 Step-by-Step Solution:</strong><br>
        • Total letters n = 6.<br>
        • Letter \'E\' repeats 2 times.<br>
        • Total Ways = 6! ÷ 2! = 720 ÷ 2 = <strong>360 ways</strong>.
      `
    },
    {
      title: 'Pattern 2: Handshake / Matches Formula',
      titleMr: 'प्रकार २: हस्तांदोलने व सामने संख्या सूत्र',
      formula: 'Total Handshakes = [n × (n − 1)] ÷ 2',
      formulaDesc: 'n व्यक्ती एकमेकांशी एकदाच हस्तांदोलन करतात.',
      question: 'In a business meeting of 10 people, everyone shakes hands with everyone else exactly once. How many total handshakes occur?',
      questionMr: 'एका सभेमध्ये १० व्यक्ती उपस्थित होत्या. प्रत्येकाने दुसऱ्याशी एकदाच हस्तांदोलन केले, तर एकूण किती हस्तांदोलने होतील?',
      solution: `
        <strong>⚡ Formula:</strong><br>
        • Handshakes = [10 × (10 - 1)] ÷ 2 = (10 × 9) ÷ 2 = 90 ÷ 2 = <strong>45 handshakes</strong>.
      `
    },
    {
      title: 'Pattern 3: Probability with Dice and Coins',
      titleMr: 'प्रकार ३: फासे (Dice) आणि नाणी यांची संभाव्यता',
      formula: 'Probability P(E) = (अनुकूल शक्यता) ÷ (एकूण नमुना अवकाश)',
      formulaDesc: 'दोन फासे टाकल्यास एकूण शक्यता = 6 × 6 = 36.',
      question: 'Two unbiased dice are thrown together. What is the probability of getting a sum of 8?',
      questionMr: 'दोन फासे एकाच वेळी फेकले असता, त्यांच्यावरील अंकाची बेरीज ८ येण्याची संभाव्यता किती?',
      solution: `
        <strong>🔍 Step-by-Step Outcomes:</strong><br>
        • Total sample space = 6 × 6 = 36.<br>
        • Pairs giving sum = 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> Total 5 pairs.<br>
        • Probability P(E) = <strong>5 / 36</strong>.
      `
    }
  ],

  // 12. ALGEBRA & GEOMETRY (बीजगणित व भूमिती)
  'algebra-geometry': [
    {
      title: 'Pattern 1: Reciprocal Quadratic Identities (x + 1/x = k)',
      titleMr: 'प्रकार १: x + 1/x = k वरून वर्ग व घन काढणे',
      formula: 'If x + 1/x = k  ➔  x² + 1/x² = k² − 2   |   x³ + 1/x³ = k³ − 3k',
      formulaDesc: 'MPSC व Saralseva परीक्षेत वारंवार येणारा शॉर्टकट.',
      question: 'If x + 1/x = 5, find the value of x² + 1/x² and x³ + 1/x³.',
      questionMr: 'जर x + 1/x = ५ असेल, तर x² + 1/x² आणि x³ + 1/x³ चे मूल्य किती?',
      solution: `
        <strong>⚡ Direct Shortcut:</strong><br>
        • x² + 1/x² = 5² - 2 = 25 - 2 = <strong>23</strong>.<br>
        • x³ + 1/x³ = 5³ - 3(5) = 125 - 15 = <strong>110</strong>.
      `
    },
    {
      title: 'Pattern 2: Wire Bending - Square to Circle',
      titleMr: 'प्रकार २: तारेचे रूपांतर - चौरसाचे वर्तुळात रूपांतर (परिमिती समान)',
      formula: 'Perimeter of Square (4 × a) = Circumference of Circle (2 × π × r)',
      formulaDesc: 'तार तीच असल्याने दोन्ही आकारांची परिमिती/परीघ समान असतो.',
      question: 'A wire bent into the shape of a square encloses an area of 121 cm². If the same wire is bent into a circle, find the radius of the circle.',
      questionMr: 'एका तारेचा चौरस केला असता त्याचे क्षेत्रफळ १२१ चौ.सेमी भरते. तीच तार वाकवून वर्तुळ तयार केल्यास त्या वर्तुळाची त्रिज्या किती असेल?',
      solution: `
        <strong>🔍 Step-by-Step Solution:</strong><br>
        1. Area of square = a² = 121  =>  Side a = 11 cm.<br>
        2. Total wire length = Perimeter = 4 × 11 = 44 cm.<br>
        3. Circumference of circle = 2 × (22/7) × r = 44.<br>
        4. r = (44 × 7) ÷ 44 = <strong>7 cm</strong>.
      `
    },
    {
      title: 'Pattern 3: Area of Rectangular Border / Path',
      titleMr: 'प्रकार ३: आयताकृती बागेभोवती असणाऱ्या रस्त्याचे क्षेत्रफळ',
      formula: 'Area of Outside Path = 2 × w × (Length + Breadth + 2 × w)',
      formulaDesc: 'w = रस्त्याची रुंदी, Length = लांबी, Breadth = रुंदी',
      question: 'A rectangular field 30m long and 20m wide is surrounded outside by a 2m wide path. Find the area of the path.',
      questionMr: '३० मीटर लांब व २० मीटर रुंद आयताकृती बागेभोवती बाहेरून २ मीटर रुंदीचा रस्ता आहे. त्या रस्त्याचे क्षेत्रफळ किती?',
      solution: `
        <strong>⚡ Direct Formula:</strong><br>
        • Area = 2 × 2 × (30 + 20 + 2 × 2) = 4 × (54) = <strong>216 m²</strong>.<br>
        <em>Verification:</em> Outer area = (30+4) × (20+4) = 34 × 24 = 816. Inner area = 30 × 20 = 600. Path = 816 - 600 = 216 m².
      `
    }
  ],

  /* ============================================================
     REASONING TOPICS (10 Topics)
     ============================================================ */

  // 13. CODING-DECODING (सांकेतिक भाषा)
  'coding-decoding': [
    {
      title: 'Pattern 1: Positional Shifting (+N / -N / Alternating)',
      titleMr: 'प्रकार १: अक्षरांचे स्थान पुढे किंवा मागे सरकवणे',
      formula: 'Coded Letter = Original Position ± N   (Use EJOTY: E=5, J=10, O=15, T=20, Y=25)',
      formulaDesc: 'स्थान संख्या लिहून त्यातील फरक (+1, -1 किंवा +2, +3...) सहज ओळखावा.',
      question: 'If "DELHI" is coded as "EDMGI", how will "MUMBAI" be coded?',
      questionMr: 'जर एका सांकेतिक भाषेत "DELHI" ला "EDMGI" असे लिहिले, तर "MUMBAI" ला कसे लिहिले जाईल?',
      solution: `
        <strong>🔍 Analyzing Pattern:</strong><br>
        • D (+1) -> E<br>
        • E (-1) -> D<br>
        • L (+1) -> M<br>
        • H (-1) -> G<br>
        • I (+1) -> J  (Alternating +1, -1)<br><br>
        <strong>⚡ Apply to MUMBAI:</strong><br>
        • M (+1) -> N<br>
        • U (-1) -> T<br>
        • M (+1) -> N<br>
        • B (-1) -> A<br>
        • A (+1) -> B<br>
        • I (-1) -> H<br>
        • Result = <strong>NTNABH</strong>.
      `
    },
    {
      title: 'Pattern 2: Reverse Alphabet / Opposite Letter Coding',
      titleMr: 'प्रकार २: विरुद्ध अक्षरांची जोडी (बेरीज = २७)',
      formula: 'Opposite Letter Position = 27 − Letter Position   (A↔Z, B↔Y, C↔X, D↔W...)',
      formulaDesc: 'जोडीतील दोन्ही अक्षरांच्या क्रमांकांची बेरीज नेहमी २७ असते.',
      question: 'If "KING" is coded as "PRMT", how will "RAIL" be coded?',
      questionMr: 'एका सांकेतिक भाषेत "KING" ला "PRMT" लिहिले जाते, तर "RAIL" ला काय लिहिले जाईल?',
      solution: `
        <strong>⚡ Opposite Pairs Rule (Sum = 27):</strong><br>
        • K(11) + P(16) = 27<br>
        • I(9) + R(18) = 27<br>
        • N(14) + M(13) = 27<br>
        • G(7) + T(20) = 27<br><br>
        <strong>Apply to RAIL:</strong><br>
        • R(18) -> I(9)<br>
        • A(1) -> Z(26)<br>
        • I(9) -> R(18)<br>
        • L(12) -> O(15)<br>
        • Code = <strong>IZRO</strong>.
      `
    },
    {
      title: 'Pattern 3: Direct Substitution Coding ("Called As...")',
      titleMr: 'प्रकार ३: थेट नाव बदल (उदा. पांढऱ्याला लाल म्हटले तर...)',
      formula: 'Direct Rule: True Answer ➔ Substituted Code Name (पुढील सांकेतिक नाव)',
      formulaDesc: 'खऱ्या प्रश्नाचे वास्तव उत्तर शोधून फक्त पुढचे नाव उत्तर म्हणून निवडावे.',
      question: 'If "sky" is called "sea", "sea" is called "water", "water" is called "air", and "air" is called "cloud", where do fish live?',
      questionMr: 'जर \'आकाशाला\' \'समुद्र\' म्हटले, \'समुद्राला\' \'पाणी\' म्हटले, \'पाण्याला\' \'हवा\' म्हटले आणि \'हवेला\' \'ढग\' म्हटले, तर मासे कुठे राहतात?',
      solution: `
        <strong>🔍 2-Step Logic:</strong><br>
        1. Where do fish actually live? Answer: In "water" (पाणी).<br>
        2. What is "water" called in the code? Code says: "water is called air".<br>
        • Correct Answer = <strong>air (हवा)</strong>.
      `
    },
    {
      title: 'Pattern 4: Fictitious Language Message Coding (Chinese Coding)',
      titleMr: 'प्रकार ४: सांकेतिक भाषेतील वाक्यांची तुलना व विलोपन पद्धत',
      formula: 'Common Words Across Sentences ➔ Common Code Words',
      formulaDesc: 'दोन वाक्यांची तुलना करून समान शब्द व समान सांकेतिक शब्द वेगळे काढावेत.',
      question: 'In a code, "nik ma pe" means "he is doctor", "pe la zo" means "doctor was here", and "ma to" means "he came". What is the code for "is"?',
      questionMr: '"nik ma pe" म्हणजे "he is doctor", "pe la zo" म्हणजे "doctor was here" आणि "ma to" म्हणजे "he came" असल्यास "is" चा कोड कोणता?',
      solution: `
        <strong>🔍 Comparison Method:</strong><br>
        • Compare 1st & 2nd: Common word is "doctor", common code is <strong>"pe"</strong>.<br>
        • Compare 1st & 3rd: Common word is "he", common code is <strong>"ma"</strong>.<br>
        • In 1st sentence, remaining word is "is" and remaining code is <strong>"nik"</strong>.<br>
        • Code for "is" = <strong>nik</strong>.
      `
    }
  ],

  // 14. BLOOD RELATIONS (रक्तसंबंध)
  'blood-relations': [
    {
      title: 'Pattern 1: Pointing / Introducing Statements',
      titleMr: 'प्रकार १: फोटो किंवा व्यक्तीकडे बोट दाखवून केलेली ओळख',
      formula: 'Solve Backwards from the Speaker: "माझ्या आईच्या एकुलत्या एका मुलाचा..."',
      formulaDesc: 'वाक्याचा शेवटचा भाग आधी सोडवून स्वतःच्या जागी ठेवून पहावे.',
      question: 'Pointing to a boy in a photograph, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
      questionMr: 'एका मुलाच्या फोटोकडे बोट दाखवून सुरेश म्हणाला, "हा माझ्या आईच्या एकुलत्या एका मुलाचा मुलगा आहे." तर सुरेशचे त्या मुलाशी नाते काय?',
      solution: `
        <strong>🔍 Step-by-Step Breakdown:</strong><br>
        • "My mother\'s only son" -> Suresh himself (सुरेश स्वतः).<br>
        • "Son of Suresh" -> Suresh\'s son.<br>
        • Therefore, Suresh is the boy\'s <strong>Father (वडील)</strong>.
      `
    },
    {
      title: 'Pattern 2: Multi-Person Family Tree Puzzle',
      titleMr: 'प्रकार २: कौटुंबिक पिढ्यांचा आलेख (Family Tree)',
      formula: 'Level +1: Parents/Uncle/Aunt   |   Level 0: Siblings/Self   |   Level -1: Children',
      formulaDesc: 'पुरुषासाठी (+), स्त्रीसाठी (-) व पती-पत्नीसाठी (=) चिन्ह वापरा.',
      question: 'A is B\'s brother. C is A\'s mother. D is C\'s father. E is B\'s son. How is D related to A?',
      questionMr: 'A हा B चा भाऊ आहे. C ही A ची आई आहे. D हे C चे वडील आहेत. E हा B चा मुलगा आहे. तर D चे A शी नाते काय?',
      solution: `
        <strong>🔍 Tree Representation:</strong><br>
        • A(+) and B are brother-sister/brother-brother.<br>
        • C(-) is the mother of A.<br>
        • D(+) is the father of mother C.<br>
        • Mother\'s father is <strong>Maternal Grandfather (आजोबा)</strong>.
      `
    },
    {
      title: 'Pattern 3: Coded Blood Relations (चिन्हांकित नातेसंबंध)',
      titleMr: 'प्रकार ३: गणिती चिन्हांवर आधारित नातेसंबंध (Coded Relations)',
      formula: 'P + Q ➔ P is brother/father of Q   |   P − Q ➔ P is mother of Q   [Decode Left to Right]',
      formulaDesc: 'डावीकडून उजवीकडे प्रत्येक चिन्हाचा अर्थ बदलून नाते जोडावे.',
      question: 'If P + Q means P is brother of Q, P - Q means P is mother of Q, and P × Q means P is sister of Q, what does M - N + S mean?',
      questionMr: 'जर P + Q म्हणजे P हा Q चा भाऊ, P - Q म्हणजे P ही Q ची आई, तर M - N + S चा अर्थ काय?',
      solution: `
        <strong>🔍 Decode Left to Right:</strong><br>
        • M - N means: M is the mother of N.<br>
        • N + S means: N is the brother of S.<br>
        • Since N and S are siblings, M is also the mother of S.<br>
        • Relation: M is the <strong>Mother (आई)</strong> of S.
      `
    }
  ],

  // 15. DIRECTION SENSE (दिशा ज्ञान चाचणी)
  'direction-sense': [
    {
      title: 'Pattern 1: Right/Left Turns & Final Facing Direction',
      titleMr: 'प्रकार १: डावीकडे-उजवीकडे वळणे व अंतिम दिशा',
      formula: 'Right Turn = 90° Clockwise   |   Left Turn = 90° Counter-Clockwise',
      formulaDesc: '१ उजवीकडे वळणे व १ डावीकडे वळणे एकमेकांना रद्द (Cancel) करतात.',
      question: 'A man walks 10m North, turns Right, walks 5m, turns Right again, walks 10m, and finally turns Left. In which direction is he now facing?',
      questionMr: 'एक व्यक्ती १० मी उत्तरेकडे चालतो, उजवीकडे वळून ५ मी चालतो, पुन्हा उजवीकडे वळून १० मी चालतो, आणि शेवटी डावीकडे वळतो. तर तो आता कोणत्या दिशेला तोंड करून उभा आहे?',
      solution: `
        <strong>⚡ Direct Turn Tracking:</strong><br>
        • Starts: Facing North.<br>
        • 1st Right turn -> Facing East.<br>
        • 2nd Right turn -> Facing South.<br>
        • Final Left turn from South -> Facing <strong>East (पूर्व)</strong>.
      `
    },
    {
      title: 'Pattern 2: Shortest Distance from Starting Point (Pythagoras)',
      titleMr: 'प्रकार २: मूळ स्थानापासून सर्वात कमी अंतर (पायथागोरस सिद्धांत)',
      formula: 'Shortest Distance = √[(Horizontal Distance)² + (Vertical Distance)²]',
      formulaDesc: 'नेहमी काटकोन त्रिकोणातील त्रिकुटे (3-4-5, 6-8-10, 5-12-13) लक्षात ठेवावीत.',
      question: 'A person walks 8 km South, turns East and walks 6 km to reach point B. What is the shortest distance from his starting point?',
      questionMr: 'एक व्यक्ती ८ किमी दक्षिणेकडे चालून पूर्वेकडे वळतो व ६ किमी चालून B बिंदूवर पोहोचतो. तर मूळ स्थानापासून त्याचे सरळ अंतर किती?',
      solution: `
        <strong>⚡ Pythagoras Application:</strong><br>
        • Distance = √(8² + 6²) = √(64 + 36) = √100 = <strong>10 km</strong>.<br>
        • Direction from starting point = South-East (आग्नेय).
      `
    },
    {
      title: 'Pattern 3: Shadow Problems at Sunrise / Sunset',
      titleMr: 'प्रकार ३: सूर्योदय व सूर्यास्ताच्या वेळी पडणारी सावली',
      formula: 'Morning / Sunrise (सकाळी) ➔ Shadow is in WEST   |   Evening / Sunset (संध्याकाळी) ➔ Shadow is in EAST',
      formulaDesc: 'सावली नेहमी सूर्याच्या विरुद्ध दिशेला पडते.',
      question: 'One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was Suresh facing?',
      questionMr: 'एका सकाळी सूर्योदयानंतर सुरेश एका खांबासमोर उभा होता. खांबाची सावली सुरेशच्या उजव्या बाजूला पडली, तर सुरेशचे तोंड कोणत्या दिशेला होते?',
      solution: `
        <strong>🔍 Step-by-Step Logic:</strong><br>
        1. Time: Morning -> Shadow always falls towards the <strong>WEST</strong>.<br>
        2. Shadow falls to Suresh\'s Right side -> Suresh\'s Right = West.<br>
        3. If Right hand is West and Left hand is East, Suresh is facing <strong>SOUTH (दक्षिण)</strong>.
      `
    }
  ],

  // 16. SYLLOGISM (तर्क व अनुमान)
  'syllogism': [
    {
      title: 'Pattern 1: Universal Positive ("All A are B" and "All B are C")',
      titleMr: 'प्रकार १: सर्व (All) विधाने आणि निष्कर्ष',
      formula: 'All A are B  +  All B are C   ➔   All A are C   |   Some C are A',
      formulaDesc: 'आतल्या वर्तुळातून बाहेर जाताना "सर्व" व "काही" दोन्ही सत्य; बाहेरून आत येताना फक्त "काही" सत्य.',
      question: 'Statements: 1. All Mangoes are Fruits. 2. All Fruits are Sweet. Conclusions: I. All Mangoes are Sweet. II. Some Sweet things are Mangoes.',
      questionMr: 'विधाने: १. सर्व आंबे फळे आहेत. २. सर्व फळे गोड आहेत. निष्कर्ष: I. सर्व आंबे गोड आहेत. II. काही गोड गोष्टी आंबे आहेत.',
      solution: `
        <strong>🔍 Venn Diagram Analysis:</strong><br>
        • Mango circle is completely inside Fruit circle.<br>
        • Fruit circle is completely inside Sweet circle.<br>
        • Conclusion I: Mangoes inside Sweet -> <strong>Valid</strong>.<br>
        • Conclusion II: Some part of Sweet is Mango -> <strong>Valid</strong>.<br>
        • Both Conclusions I and II follow.
      `
    },
    {
      title: 'Pattern 2: Complementary Either/Or Pair (काही + एकही नाही)',
      titleMr: 'प्रकार २: एकतर निष्कर्ष I किंवा II सत्य (Either-Or Pair)',
      formula: 'Either-Or Rule: One Positive (Some) + One Negative (No) with identical terms',
      formulaDesc: 'दोन निष्कर्षांपैकी एक निश्चितपणे खरा असणे.',
      question: 'Statements: Some pens are books. Some books are pencils. Conclusions: I. Some pens are pencils. II. No pen is a pencil.',
      questionMr: 'विधाने: काही पेन पुस्तके आहेत. काही पुस्तके पेन्सिल आहेत. निष्कर्ष: I. काही पेन पेन्सिल आहेत. II. एकही पेन पेन्सिल नाही.',
      solution: `
        <strong>🔍 Either-Or Test:</strong><br>
        1. Definite relation between pens and pencils is NOT given.<br>
        2. So individual Conclusion I is not definitely true, and Conclusion II is not definitely true.<br>
        3. But pen and pencil must either overlap (Some) or not overlap (No).<br>
        • Result: <strong>Either I or II follows</strong>.
      `
    }
  ],

  // 17. SERIES COMPLETION (मालिका पूर्ण करणे)
  'series-completion': [
    {
      title: 'Pattern 1: Difference of Difference (द्विस्तरीय फरक)',
      titleMr: 'प्रकार १: फरकाचा फरक (Step Difference Series)',
      formula: 'Differences between terms form an Arithmetic Progression (AP)',
      formulaDesc: 'पहिल्या फरकात नियम न दिसल्यास फरकाचा फरक काढावा.',
      question: 'Find the next number in the series: 2, 5, 11, 20, 32, ?',
      questionMr: 'मालिकेतील पुढील संख्या शोधा: २, ५, ११, २०, ३२, ?',
      solution: `
        <strong>🔍 Step Differences:</strong><br>
        • 5 - 2 = +3<br>
        • 11 - 5 = +6<br>
        • 20 - 11 = +9<br>
        • 32 - 20 = +12<br>
        • Pattern of differences: 3, 6, 9, 12... (multiples of 3).<br>
        • Next difference = +15.<br>
        • Next term = 32 + 15 = <strong>47</strong>.
      `
    },
    {
      title: 'Pattern 2: Cube/Square with Offset (n³ ± 1 or n² ± n)',
      titleMr: 'प्रकार २: घन किंवा वर्ग वजा/अधिक १ (n³ - 1 मालिका)',
      formula: 'Term Pattern: n³ − 1   |   किंवा   |   n² + 1',
      formulaDesc: 'संख्या घनाच्या जवळ (७, २६, ६३, १२४...) दिसताच हा पॅटर्न ओळखावा.',
      question: 'Find the missing number: 0, 7, 26, 63, 124, ?',
      questionMr: 'गाळलेली संख्या शोधा: ०, ७, २६, ६३, १२४, ?',
      solution: `
        <strong>⚡ Cube Minus 1 Pattern:</strong><br>
        • 1³ - 1 = 1 - 1 = 0<br>
        • 2³ - 1 = 8 - 1 = 7<br>
        • 3³ - 1 = 27 - 1 = 26<br>
        • 4³ - 1 = 64 - 1 = 63<br>
        • 5³ - 1 = 125 - 1 = 124<br>
        • Next term = 6³ - 1 = 216 - 1 = <strong>215</strong>.
      `
    },
    {
      title: 'Pattern 3: Alternating / Twin Series (दोन मालिकांचे मिश्रण)',
      titleMr: 'प्रकार ३: एकाआड एक येणारी संयुक्त मालिका',
      formula: 'Series 1: Odd positions (1, 3, 5...)   |   Series 2: Even positions (2, 4, 6...)',
      formulaDesc: 'संख्या एकदा वाढून पुन्हा कमी होत असल्यास दोन स्वतंत्र मालिका असतात.',
      question: 'What comes next in: 4, 18, 7, 14, 10, 10, 13, ?',
      questionMr: 'मालिका पूर्ण करा: ४, १८, ७, १४, १०, १०, १३, ?',
      solution: `
        <strong>🔍 Separate the Two Tracks:</strong><br>
        • Track 1 (Odd positions): 4, 7, 10, 13 (+3 each step)<br>
        • Track 2 (Even positions): 18, 14, 10, ? (-4 each step)<br>
        • Next term belongs to Track 2: 10 - 4 = <strong>6</strong>.
      `
    }
  ],

  // 18. SEATING ARRANGEMENT & RANKING (बैठक व्यवस्था व क्रमवारी)
  'seating-arrangement': [
    {
      title: 'Pattern 1: Total Persons in a Row (Left/Right or Top/Bottom)',
      titleMr: 'प्रकार १: रांगेतील एकूण व्यक्ती काढणे',
      formula: 'Total Persons = (Rank from Left + Rank from Right) − 1',
      formulaDesc: 'एकाच व्यक्तीची दोन्ही बाजूंनी मोजणी झाल्यामुळे १ वजा करावा लागतो.',
      question: 'In a class of students, Rohan is ranked 7th from the top and 28th from the bottom. How many students are there in the class?',
      questionMr: 'एका वर्गात रोहनचा वरून ७ वा आणि खालून २८ वा क्रमांक आहे, तर त्या वर्गात एकूण किती विद्यार्थी आहेत?',
      solution: `
        <strong>⚡ Direct Formula:</strong><br>
        • Total = Top Rank + Bottom Rank - 1<br>
        • Total = 7 + 28 - 1 = 35 - 1 = <strong>34 students</strong>.
      `
    },
    {
      title: 'Pattern 2: Interchanging Positions in a Row',
      titleMr: 'प्रकार २: जागांची अदलाबदल झाल्यावर एकूण व्यक्ती शोधणे',
      formula: 'Total = (New Rank of Person A + Old Rank of Person B) − 1',
      formulaDesc: 'एकाच जागेचे दोन्ही संदर्भ एकत्र जोडून १ वजा करणे.',
      question: 'In a row of girls, Sita is 10th from the left and Gita is 9th from the right. When they interchange their places, Sita becomes 15th from the left. How many girls are in the row?',
      questionMr: 'मुलींच्या रांगेत सीता डावीकडून १० वी आणि गीता उजवीकडून ९ वी आहे. त्यांनी जागांची अदलाबदल केल्यास सीता डावीकडून १५ वी होते. तर रांगेत एकूण किती मुली आहेत?',
      solution: `
        <strong>🔍 Step-by-Step Logic:</strong><br>
        • Gita\'s original seat was 9th from right.<br>
        • Now Sita sits on that same seat and is 15th from left.<br>
        • That single seat is 15th from left and 9th from right!<br>
        • Total = 15 + 9 - 1 = <strong>23 girls</strong>.
      `
    },
    {
      title: 'Pattern 3: Circular Seating Facing the Center',
      titleMr: 'प्रकार ३: वर्तुळाकार टेबलाभोवती केंद्राकडे तोंड करून बसणे',
      formula: 'Facing Center: Clockwise = LEFT   |   Counter-Clockwise = RIGHT',
      formulaDesc: 'केंद्राकडे तोंड असताना उजवी बाजू म्हणजे घड्याळाच्या काट्यांच्या विरुद्ध दिशा.',
      question: '6 friends A, B, C, D, E, F sit in a circle facing the center. A is opposite D. B is to the immediate right of A. C is between D and B. Who is sitting opposite B?',
      questionMr: '६ मित्र वर्तुळाकार बसले आहेत. A च्या समोर D आहे. B हा A च्या लगतच उजवीकडे आहे. C हा D आणि B च्या मध्ये आहे. तर B च्या समोर कोण बसले आहे?',
      solution: `
        <strong>🔍 Circular Slot Analysis:</strong><br>
        • In a 6-person circle, opposite seats have 2 people between them.<br>
        • A is at Position 1, D is at Position 4 (opposite).<br>
        • B is immediate right of A -> Position 2.<br>
        • Opposite of Position 2 (B) is Position 5, which is occupied by <strong>E</strong>.
      `
    }
  ],

  // 19. ANALOGY & CLASSIFICATION (समसंबंध व वर्गीकरण)
  'analogy-classification': [
    {
      title: 'Pattern 1: Number Analogy (Cubes & Squares Relations)',
      titleMr: 'प्रकार १: संख्या समसंबंध [n : (n³ + n) किंवा वर्ग संबंध]',
      formula: 'First Pair: a ➔ f(a)   ::   Second Pair: b ➔ f(b)',
      formulaDesc: 'पहिल्या दोन पदांमधील गणिती संबंध ओळखून तोच तिसऱ्या पदाला लागू करणे.',
      question: 'Find the missing number: 6 : 222 :: 7 : ?',
      questionMr: '६ : २२२ :: ७ : ? या समसंबंधातील प्रश्नचिन्हाच्या जागी काय येईल?',
      solution: `
        <strong>⚡ Logic Discovery:</strong><br>
        • 6³ + 6 = 216 + 6 = 222.<br>
        • Apply the exact same rule (n³ + n) to 7:<br>
        • 7³ + 7 = 343 + 7 = <strong>350</strong>.
      `
    },
    {
      title: 'Pattern 2: Odd One Out / Classification (विसंगत घटक)',
      titleMr: 'प्रकार २: गटात न बसणारा शब्द किंवा संख्या ओळखणे',
      formula: 'Rule: Identify the common property shared by 3 options; 1 option is the outlier',
      formulaDesc: 'मूळ संख्या, पूर्ण वर्ग, पूर्ण घन किंवा अवयव यांवर आधारित फरक शोधणे.',
      question: 'Find the odd one out: 27, 64, 125, 144.',
      questionMr: 'गटात न बसणारी संख्या ओळखा: २७, ६४, १२५, १४४.',
      solution: `
        <strong>🔍 Category Analysis:</strong><br>
        • 27 = 3³ (Cube)<br>
        • 64 = 4³ (Cube)<br>
        • 125 = 5³ (Cube)<br>
        • 144 = 12² (Square, but NOT a cube of integer).<br>
        • The odd one is <strong>144</strong>.
      `
    }
  ],

  // 20. CLOCKS & CALENDARS (घड्याळ व दिनदर्शिका)
  'clocks-calendars': [
    {
      title: 'Pattern 1: Angle Between Clock Hands at Given Time',
      titleMr: 'प्रकार १: दिलेल्या वेळेस तासकाटा व मिनिटकाटा यांमधील कोन',
      formula: 'Angle θ = |30 × H − 5.5 × M|°   (H = तास, M = मिनिटे)',
      formulaDesc: 'उत्तर १८०° पेक्षा मोठे आल्यास ३६०° मधून वजा करावे.',
      question: 'Find the angle between the hour hand and minute hand of a clock at 8:20.',
      questionMr: '८ वाजून २० मिनिटांनी घड्याळाच्या दोन काट्यांमध्ये किती अंशाचा कोन असेल?',
      solution: `
        <strong>⚡ Angle Formula:</strong><br>
        • H = 8, M = 20.<br>
        • Angle = |30(8) - 5.5(20)| = |240 - 110| = <strong>130°</strong>.
      `
    },
    {
      title: 'Pattern 2: Time when Clock Hands Coincide (0° Angle)',
      titleMr: 'प्रकार २: दोन्ही काटे एकमेकांवर येण्याची वेळ',
      formula: 'Minutes past H = (60 ÷ 11) × H minutes',
      formulaDesc: 'काटे दर तासाला एकदा एकत्र येतात (१२ तासांत ११ वेळा).',
      question: 'At what time between 3 and 4 o\'clock will the hands of a clock coincide?',
      questionMr: '३ ते ४ च्या दरम्यान घड्याळाचे दोन्ही काटे कोणत्या अचूक वेळेस एकमेकांवर येतील?',
      solution: `
        <strong>⚡ Coincidence Shortcut:</strong><br>
        • Minutes = (60 ÷ 11) × 3 = 180 ÷ 11 = <strong>16 4/11 minutes past 3</strong> (३ वाजून १६ ४/११ मिनिटे).
      `
    },
    {
      title: 'Pattern 3: Calendar Odd Days & Leap Year Forward Jump',
      titleMr: 'प्रकार ३: दिनदर्शिका - वाढीव दिवस (Odd Days) व वार काढणे',
      formula: 'Normal Year = +1 Day forward   |   Leap Year (with Feb 29) = +2 Days forward',
      formulaDesc: 'फेब्रुवारीचा २९ वा दिवस प्रवासात आल्यास २ दिवस पुढे जावे.',
      question: 'If 15th August 2023 was a Tuesday, what day of the week was 15th August 2024?',
      questionMr: '१५ ऑगस्ट २०२३ रोजी मंगळवार असल्यास, १५ ऑगस्ट २०२४ रोजी कोणता वार असेल?',
      solution: `
        <strong>🔍 Leap Year Analysis:</strong><br>
        • 2024 is a leap year (divisible by 4).<br>
        • The period between Aug 2023 and Aug 2024 includes 29th Feb 2024.<br>
        • Therefore, add 2 odd days to Tuesday:<br>
        • Tuesday + 2 days = <strong>Thursday (गुरुवार)</strong>.
      `
    },
    {
      title: 'Pattern 4: Mirror Image of Clock Time',
      titleMr: 'प्रकार ४: घड्याळाची आरशातील प्रतिमा व वेळ',
      formula: 'Mirror Time = 11:60 − Given Clock Time',
      formulaDesc: 'दिलेली वेळ ११:६० मधून वजा करावी (१२ पेक्षा जास्त असल्यास २३:६० मधून वजा करावी).',
      question: 'A clock shows 3:25. What time will be seen in its mirror image?',
      questionMr: 'घड्याळात ३:२५ वाजले असल्यास आरशातील प्रतिमेत किती वाजलेले दिसतील?',
      solution: `
        <strong>⚡ 11:60 Subtraction Rule:</strong><br>
        • 11:60 - 3:25 = <strong>8:35</strong>.
      `
    }
  ],

  // 21. PUZZLES (कोडी व तुलना)
  'puzzles': [
    {
      title: 'Pattern 1: Height / Weight Comparison Chain (तुलना साखळी)',
      titleMr: 'प्रकार १: उंची किंवा वजनाची तुलनात्मक साखळी',
      formula: 'Convert Statements to Inequality Chain: A > B > C > D',
      formulaDesc: 'सर्वात उंच/जास्त एका टोकाला आणि सर्वात कमी दुसऱ्या टोकाला ठेवा.',
      question: 'Among 5 friends, P is taller than Q but shorter than R. S is taller than T but shorter than Q. Who is the tallest and who is the shortest?',
      questionMr: '५ मित्रांमध्ये P हा Q पेक्षा उंच पण R पेक्षा बुटका आहे. S हा T पेक्षा उंच पण Q पेक्षा बुटका आहे. तर सर्वात उंच आणि सर्वात बुटका कोण?',
      solution: `
        <strong>🔍 Inequality Chain:</strong><br>
        1. "P is taller than Q but shorter than R" -> R > P > Q.<br>
        2. "S is taller than T but shorter than Q" -> Q > S > T.<br>
        3. Combine the two statements: <strong>R > P > Q > S > T</strong>.<br>
        • Tallest = <strong>R</strong>, Shortest = <strong>T</strong>.
      `
    },
    {
      title: 'Pattern 2: Floor / Box Arrangement Puzzle',
      titleMr: 'प्रकार २: मजले (Floors) आणि व्यक्तींचे स्थान नियोजन',
      formula: 'Draw fixed floor numbers (1 to N) and lock definite clues first',
      formulaDesc: 'निश्चित माहिती आधी भरावी व उर्वरित जागांची तपासणी करावी.',
      question: '4 persons A, B, C, D live on 4 floors (1 to 4). C lives on floor 4. A lives on an odd floor. B lives immediately above A. Which floor does D live on?',
      questionMr: '४ व्यक्ती १ ते ४ मजल्यांवर राहतात. C चौथ्या मजल्यावर राहतो. A विषम मजल्यावर राहतो. B हा A च्या लगतच्या वरच्या मजल्यावर राहतो. तर D कोणत्या मजल्यावर राहतो?',
      solution: `
        <strong>🔍 Floor Placement:</strong><br>
        • Floor 4 = C.<br>
        • A is on an odd floor (Floor 1 or Floor 3).<br>
        • If A were on Floor 3, B would be on Floor 4, but Floor 4 is already occupied by C!<br>
        • Hence, A must be on Floor 1, and B is on Floor 2.<br>
        • The remaining Floor 3 belongs to <strong>D</strong>.
      `
    }
  ],

  // 22. NON-VERBAL REASONING (आकृती आधारित बुद्धिमत्ता)
  'non-verbal': [
    {
      title: 'Pattern 1: Counting Triangles in Geometric Figures',
      titleMr: 'प्रकार १: भौमितिक आकृत्यांमधील त्रिकोणांची संख्या मोजणे',
      formula: 'Square with Both Diagonals = 2 × n   [n = inner small segments]',
      formulaDesc: 'चौरसातील दोन्ही कर्ण जोडल्यास लहान भागांच्या संख्येची दुप्पट करावी.',
      question: 'A square is divided by both its diagonals into 4 smaller triangles. How many total triangles are there in the figure?',
      questionMr: 'एका चौरसाचे दोन्ही कर्ण जोडल्यामुळे ४ लहान त्रिकोण तयार होतात. तर त्या आकृतीत एकूण किती त्रिकोण आहेत?',
      solution: `
        <strong>⚡ 2n Formula:</strong><br>
        • Number of inner small segments n = 4.<br>
        • Total triangles = 2 × 4 = <strong>8 triangles</strong>.<br>
        • (4 small triangles + 4 large triangles formed by halves).
      `
    },
    {
      title: 'Pattern 2: Mirror Image vs Water Image Transformation',
      titleMr: 'प्रकार २: आरशातील व पाण्यातील प्रतिमांचे नियम',
      formula: 'Mirror Image: Left ↔ Right (Top/Bottom same)   |   Water Image: Top ↔ Bottom (Left/Right same)',
      formulaDesc: 'आरशात डावी-उजवी बाजू बदलते; पाण्यात वरची-खालची बाजू उलटी होते.',
      question: 'What is the water image of the letters "E" and "M"?',
      questionMr: '"E" आणि "M" या अक्षरांची पाण्यातील प्रतिमा कशी दिसेल?',
      solution: `
        <strong>🔍 Inversion Rules:</strong><br>
        • For \'E\': It is symmetrical horizontally, so upside down it still looks like <strong>E</strong>.<br>
        • For \'M\': Flipping upside down turns it into <strong>W</strong>.
      `
    },
    {
      title: 'Pattern 3: Cube & Dice Unfolding (उघड्या फाशाची विरुद्ध पृष्ठे)',
      titleMr: 'प्रकार ३: उलगडलेल्या फाशाची समोरासमोरील पृष्ठे',
      formula: 'Alternate Face Rule: एका सरळ रेषेत एकाआड एक येणारी पृष्ठे परस्पर विरुद्ध असतात (1-Skip Rule)',
      formulaDesc: 'उलगडलेल्या फाशामध्ये १ पृष्ठ सोडून पुढील पृष्ठ समोरासमोर येते.',
      question: 'In an unfolded net of a dice, faces 1, 2, 3, 4 are in a straight horizontal strip. Which face is opposite to face 1?',
      questionMr: 'उलगडलेल्या फाशामध्ये १, २, ३, ४ ही पृष्ठे एका आडव्या ओळीत सलग आहेत. तर पृष्ठ १ च्या विरुद्ध कोणते पृष्ठ असेल?',
      solution: `
        <strong>⚡ 1-Skip Rule:</strong><br>
        • Skip face 2:<br>
        • Face 1 is opposite to <strong>Face 3</strong>.<br>
        • Face 2 is opposite to <strong>Face 4</strong>.
      `
    }
  ]
};
