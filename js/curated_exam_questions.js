/* ============================================================
   BrainBoost – curated_exam_questions.js
   Authentic handcrafted MPSC Prelims & Talathi Bharti Questions
   4-5 high-yield questions for each of the 22 topics
   ============================================================ */

window.CURATED_QUIZ_QUESTIONS = {
  // 1. AVERAGE
  'average': [
    {
      id: 'avg_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'Find the average of all natural numbers from 1 to 97.',
      questionMr: '१ ते ९७ मधील सर्व नैसर्गिक संख्यांची सरासरी किती?',
      options: ['49', '48.5', '50', '48'],
      correct: 0,
      explanation: 'Average of AP = (First + Last)/2 = (1 + 97)/2 = 98/2 = 49.',
      explanationMr: 'अंकगणिती श्रेणीची सरासरी = (पहिले पद + शेवटचे पद) / २ = (१ + ९७) / २ = ४९.'
    },
    {
      id: 'avg_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'The average of 5 consecutive odd numbers is 61. What is the difference between the highest and lowest numbers?',
      questionMr: '५ क्रमवार विषम संख्यांची सरासरी ६१ आहे. तर सर्वात मोठ्या आणि सर्वात लहान संख्येतील फरक किती?',
      options: ['8', '10', '12', '6'],
      correct: 0,
      explanation: 'Difference between highest and lowest of n consecutive odd/even numbers is always 2(n - 1) = 2(5 - 1) = 8.',
      explanationMr: 'n क्रमवार विषम संख्यांमधील फरक = २ × (n - १) = २ × (५ - १) = ८. (संख्या: ५७, ५९, ६१, ६३, ६५).'
    },
    {
      id: 'avg_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'The average weight of 24 students is 35 kg. If the teacher is included, the average increases by 400g. What is the teacher\'s weight?',
      questionMr: '२४ विद्यार्थ्यांचे सरासरी वजन ३५ किलो आहे. शिक्षकाचे वजन मिळवल्यास सरासरी ४०० ग्रॅमने वाढते, तर शिक्षकाचे वजन किती?',
      options: ['45 kg', '44 kg', '42 kg', '46 kg'],
      correct: 0,
      explanation: 'New count = 25. Total increase = 25 × 0.4 kg = 10 kg. Teacher weight = 35 + 10 = 45 kg.',
      explanationMr: 'एकूण व्यक्ती = २५. एकूण वाढ = २५ × ०.४ = १० किलो. शिक्षकाचे वजन = ३५ + १० = ४५ किलो.'
    },
    {
      id: 'avg_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Hard',
      q: 'The average marks of 40 students were 68. Later it was found that 84 was wrongly read as 48. The correct average is:',
      questionMr: '४० विद्यार्थ्यांचे सरासरी गुण ६८ होते. नंतर एकाचे गुण ८४ ऐवजी ४८ वाचल्याचे लक्षात आले. तर खरी सरासरी किती?',
      options: ['68.9', '69.2', '67.8', '69.0'],
      correct: 0,
      explanation: 'Correction = + (84 - 48) = +36. Per student correction = 36/40 = +0.9. Correct avg = 68 + 0.9 = 68.9.',
      explanationMr: 'वाढ = ८४ - ४८ = +३६ गुण. प्रति विद्यार्थी फरक = ३६/४० = +०.९. खरी सरासरी = ६८ + ०.९ = ६८.९.'
    }
  ],

  // 2. PERCENTAGE
  'percentage': [
    {
      id: 'pct_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'If the price of sugar rises by 25%, by what percent must consumption be reduced so expenditure does not increase?',
      questionMr: 'साखरेचा भाव २५% वाढला, तर खर्चात वाढ न होण्यासाठी वापरात किती टक्के घट करावी?',
      options: ['20%', '25%', '16.66%', '15%'],
      correct: 0,
      explanation: 'Reduction % = [R / (100 + R)] × 100 = (25 / 125) × 100 = 20%.',
      explanationMr: 'घट = [२५ / (१०० + २५)] × १०० = (२५ / १२५) × १०० = २०%.'
    },
    {
      id: 'pct_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'A salary is increased by 20% and then decreased by 20%. What is the net change in salary?',
      questionMr: 'पगार आधी २०% वाढवला व नंतर २०% कमी केला, तर निव्वळ किती टक्के बदल होईल?',
      options: ['4% decrease', 'No change', '4% increase', '2% decrease'],
      correct: 0,
      explanation: 'Net change = a + b + ab/100 = 20 - 20 - 400/100 = -4% (4% decrease).',
      explanationMr: 'नेहमी तोटा/घट = x² / १०० % = २०² / १०० = ४% घट.'
    },
    {
      id: 'pct_q3',
      examTag: 'MPSC Group B',
      difficulty: 'Medium',
      q: 'A student gets 30% marks and fails by 15 marks. Another gets 40% and secures 35 marks above passing. Maximum marks are:',
      questionMr: 'एकाला ३०% मिळून १५ गुणांनी नापास झाला. दुसऱ्याला ४०% मिळून उत्तीर्ण गुणांपेक्षा ३५ गुण जास्त मिळाले. तर एकूण कमाल गुण किती?',
      options: ['500', '450', '600', '400'],
      correct: 0,
      explanation: '10% difference = 15 + 35 = 50 marks. 100% = 50 × 10 = 500 marks.',
      explanationMr: '१०% मधील फरक = १५ + ३५ = ५० गुण. १००% = ५० × १० = ५०० गुण.'
    },
    {
      id: 'pct_q4',
      examTag: 'Talathi TCS',
      difficulty: 'Hard',
      q: 'Population of a town is 64,000. It increases by 10% per year. What will it be after 2 years?',
      questionMr: 'एका शहराची लोकसंख्या ६४,००० असून दरवर्षी १०% वाढते, तर २ वर्षांनंतर लोकसंख्या किती असेल?',
      options: ['77,440', '76,800', '78,200', '75,000'],
      correct: 0,
      explanation: '64000 × (1.1)² = 64000 × 1.21 = 77,440.',
      explanationMr: '६४,००० × १.२१ = ७७,४४०.'
    }
  ],

  // 3. PROFIT, LOSS & DISCOUNT
  'profit-loss': [
    {
      id: 'pl_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'If the cost price of 15 pens equals the selling price of 12 pens, the gain percentage is:',
      questionMr: '१५ पेनांची खरेदी किंमत १२ पेनांच्या विक्री किमतीएवढी असेल, तर शेकडा नफा किती?',
      options: ['25%', '20%', '30%', '16.66%'],
      correct: 0,
      explanation: 'Gain % = [(15 - 12) / 12] × 100 = (3 / 12) × 100 = 25%.',
      explanationMr: 'नफा% = (३ / १२) × १०० = २५%.'
    },
    {
      id: 'pl_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'Two articles are sold for ₹990 each. One at 10% gain, the other at 10% loss. Overall result is:',
      questionMr: 'दोन वस्तू प्रत्येकी ₹९९० ला विकल्या. एकावर १०% नफा व दुसऱ्यावर १०% तोटा झाला. तर संपूर्ण व्यवहारात काय झाले?',
      options: ['1% loss', '1% gain', 'No profit no loss', '2% loss'],
      correct: 0,
      explanation: 'Always loss = (common % / 10)² = (10/10)² = 1% loss.',
      explanationMr: 'नेहमी तोटा = १०² / १०० = १% तोटा.'
    },
    {
      id: 'pl_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'A dishonest dealer sells at CP but uses a 900g weight for 1kg. Find his profit percentage.',
      questionMr: 'एक व्यापारी खरेदी भावात माल विकतो, पण १ किलो ऐवजी ९०० ग्रॅमचे खोटे माप वापरतो. तर शेकडा नफा किती?',
      options: ['11.11%', '10%', '12.5%', '9.09%'],
      correct: 0,
      explanation: 'Profit % = [Error / False Weight] × 100 = (100 / 900) × 100 = 11.11%.',
      explanationMr: 'नफा% = (१०० / ९००) × १०० = ११.११% (११ १/९%).'
    },
    {
      id: 'pl_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Hard',
      q: 'By how much percent above CP should a trader mark goods to get 20% profit after a 10% discount?',
      questionMr: '१०% सूट देऊनही २०% नफा मिळवण्यासाठी वस्तूची किंमत खरेदीपेक्षा किती टक्के जास्त छापावी?',
      options: ['33.33%', '30%', '25%', '35%'],
      correct: 0,
      explanation: 'MP/CP = (100 + 20)/(100 - 10) = 120/90 = 4/3. Markup = 1/3 = 33.33%.',
      explanationMr: 'छापील/खरेदी = १२०/९० = ४/३. वाढ = १/३ = ३३.३३%.'
    }
  ],

  // 4. RATIO & PROPORTION
  'ratio-proportion': [
    {
      id: 'rp_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'If A : B = 3 : 4 and B : C = 8 : 9, then A : C is:',
      questionMr: 'जर A : B = ३ : ४ आणि B : C = ८ : ९ असेल, तर A : C किती?',
      options: ['2 : 3', '1 : 2', '3 : 2', '4 : 9'],
      correct: 0,
      explanation: 'A/C = (A/B) × (B/C) = (3/4) × (8/9) = 24/36 = 2/3.',
      explanationMr: 'A/C = (३/४) × (८/९) = २/३ म्हणजेच २ : ३.'
    },
    {
      id: 'rp_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'Incomes of A and B are 5:4 and expenditures 3:2. Each saves ₹1600 per month. A\'s monthly income is:',
      questionMr: 'A व B चे उत्पन्न ५:४ आणि खर्च ३:२ आहे. प्रत्येक जण ₹१६०० वाचवतो, तर A चे मासिक उत्पन्न किती?',
      options: ['₹4,000', '₹3,200', '₹4,800', '₹5,000'],
      correct: 0,
      explanation: 'Savings = (5 - 3) = 2 units = 1600 => 1 unit = 800. A\'s income = 5 × 800 = ₹4000.',
      explanationMr: 'बचत = ५ - ३ = २ युनिट = १६०० => १ युनिट = ८००. A चे उत्पन्न = ५ × ८०० = ₹४,०००.'
    },
    {
      id: 'rp_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'A bag has ₹1, 50p, 25p coins in ratio 5:6:8 totaling ₹210. Find the number of 50-paise coins.',
      questionMr: 'एका पिशवीत ₹१, ५० पैसे व २५ पैशांची नाणी ५:६:८ या प्रमाणात असून एकूण रक्कम ₹२१० आहे. तर ५० पैशांची नाणी किती?',
      options: ['126', '105', '140', '112'],
      correct: 0,
      explanation: 'Value = 5(1) + 6(0.5) + 8(0.25) = 5 + 3 + 2 = 10 units. 10 units = 210 => unit = 21. 50p coins = 6 × 21 = 126.',
      explanationMr: 'मूल्य = ५ + ३ + २ = १० युनिट. १० युनिट = २१० => १ युनिट = २१. नाणी = ६ × २१ = १२६.'
    },
    {
      id: 'rp_q4',
      examTag: 'MPSC Group B',
      difficulty: 'Hard',
      q: 'In a 60L mixture of milk and water (ratio 2:1), how much water must be added to make the ratio 1:2?',
      questionMr: '६० लिटर दुध व पाण्याचे गुणोत्तर २:१ आहे. ते १:२ करण्यासाठी त्यात किती लिटर पाणी टाकावे लागेल?',
      options: ['60 liters', '40 liters', '30 liters', '50 liters'],
      correct: 0,
      explanation: 'Milk = 40L, Water = 20L. New ratio 40 / (20 + x) = 1/2 => 20 + x = 80 => x = 60L.',
      explanationMr: 'दूध = ४० लि, पाणी = २० लि. ४०/(२० + x) = १/२ => x = ६० लिटर.'
    }
  ],

  // 5. TIME, SPEED & DISTANCE
  'time-speed-distance': [
    {
      id: 'tsd_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'A car goes Pune to Mumbai at 60 km/h and returns at 40 km/h. Find average speed.',
      questionMr: 'एक कार पुण्याहून मुंबईला ६० किमी/तास वेगाने जाते व ४० किमी/तास वेगाने परत येते, तर सरासरी वेग किती?',
      options: ['48 km/h', '50 km/h', '45 km/h', '52 km/h'],
      correct: 0,
      explanation: 'Avg Speed = 2xy/(x + y) = (2 × 60 × 40) / 100 = 48 km/h.',
      explanationMr: 'सरासरी वेग = २xy / (x + y) = (२ × ६० × ४०) / १०० = ४८ किमी/तास.'
    },
    {
      id: 'tsd_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'A 200m train at 54 km/h crosses a platform in 30 seconds. Find platform length.',
      questionMr: '५४ किमी/तास वेगाची २०० मी लांबीची गाडी प्लॅटफॉर्मला ३० सेकंदात ओलांडते, तर प्लॅटफॉर्मची लांबी किती?',
      options: ['250 m', '200 m', '300 m', '350 m'],
      correct: 0,
      explanation: 'Speed = 54 × 5/18 = 15 m/s. Dist = 15 × 30 = 450m. Platform = 450 - 200 = 250m.',
      explanationMr: 'वेग = १५ मी/से. एकूण अंतर = १५ × ३० = ४५० मी. प्लॅटफॉर्म = ४५० - २०० = २५० मीटर.'
    },
    {
      id: 'tsd_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'Two trains 120m and 180m run in opposite directions at 42 km/h and 48 km/h. Crossing time is:',
      questionMr: '१२० मी व १८० मी च्या दोन गाड्या परस्पर विरुद्ध दिशेने अनुक्रमे ४२ व ४८ किमी/तास वेगाने धावतात. त्या एकमेकींना किती वेळात ओलांडतील?',
      options: ['12 seconds', '10 seconds', '15 seconds', '14 seconds'],
      correct: 0,
      explanation: 'Total dist = 300m. Rel speed = 42 + 48 = 90 km/h = 25 m/s. Time = 300/25 = 12s.',
      explanationMr: 'एकूण अंतर = ३०० मी. सापेक्ष वेग = ९० किमी/तास = २५ मी/से. वेळ = ३०० / २५ = १२ सेकंद.'
    },
    {
      id: 'tsd_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Medium',
      q: 'Boat goes downstream at 14 km/h and upstream at 8 km/h. Speed of boat in still water is:',
      questionMr: 'बोट प्रवाहाच्या दिशेने १४ किमी/तास व विरुद्ध दिशेने ८ किमी/तास वेगाने जाते, तर संथ पाण्यातील बोटीचा वेग किती?',
      options: ['11 km/h', '10 km/h', '3 km/h', '12 km/h'],
      correct: 0,
      explanation: 'Speed in still water = (14 + 8)/2 = 11 km/h. (Stream speed = (14 - 8)/2 = 3 km/h).',
      explanationMr: 'संथ पाण्यातील वेग = (१४ + ८) / २ = ११ किमी/तास.'
    }
  ],

  // 6. TIME & WORK
  'time-work': [
    {
      id: 'tw_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'A does a job in 12 days, B in 24 days. Working together, they finish in:',
      questionMr: 'A एक काम १२ दिवसांत व B २४ दिवसांत करतो. दोघे मिळून ते काम किती दिवसांत करतील?',
      options: ['8 days', '6 days', '9 days', '10 days'],
      correct: 0,
      explanation: 'Together = (12 × 24) / (12 + 24) = 288 / 36 = 8 days.',
      explanationMr: 'एकत्र दिवस = (१२ × २४) / ३६ = ८ दिवस.'
    },
    {
      id: 'tw_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'A does a work in 20 days, B in 30 days. Both work 5 days, then A leaves. Days B needs to finish remainder:',
      questionMr: 'A एक काम २० दिवसांत व B ३० दिवसांत करतो. ५ दिवस एकत्र काम केल्यावर A सोडून गेला. उरलेले काम B किती दिवसांत संपवेल?',
      options: ['17.5 days', '15 days', '18 days', '20 days'],
      correct: 0,
      explanation: 'Work = 60 units. A=3, B=2. 5 days = 25 units done. Remaining = 35 units. B takes 35/2 = 17.5 days.',
      explanationMr: 'एकूण काम = ६० युनिट. ५ दिवसांत २५ युनिट पूर्ण. शिल्लक = ३५ युनिट. B चे दिवस = ३५ / २ = १७.५ दिवस.'
    },
    {
      id: 'tw_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'If 15 men construct a 100m road in 10 days, how many men are needed for a 200m road in 5 days?',
      questionMr: '१५ मजूर १० दिवसांत १०० मी रस्ता बांधतात, तर ५ दिवसांत २०० मी रस्ता बांधण्यास किती मजूर लागतील?',
      options: ['60 men', '50 men', '45 men', '75 men'],
      correct: 0,
      explanation: '(15 × 10)/100 = (M × 5)/200 => 1.5 = 5M/200 => M = 60.',
      explanationMr: '(१५ × १०) / १०० = (M × ५) / २०० => M = ६० मजूर.'
    },
    {
      id: 'tw_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Hard',
      q: 'Pipe A fills a tank in 8 hrs. With a leak at the bottom, it takes 10 hrs. The leak alone empties the full tank in:',
      questionMr: 'एक नळ टाकी ८ तासांत भरतो, परंतु तळाला गळती असल्याने १० तास लागतात. तर गळतीमुळे भरलेली टाकी किती तासांत रिकामी होईल?',
      options: ['40 hours', '35 hours', '48 hours', '30 hours'],
      correct: 0,
      explanation: 'Tank = 40 units. A = +5, Net = +4 => Leak = -1 unit/hr. Empty time = 40/1 = 40 hrs.',
      explanationMr: 'धारकता = ४० युनिट. गळतीचा वेग = ५ - ४ = १ युनिट/तास. वेळ = ४० / १ = ४० तास.'
    }
  ],

  // 7. SIMPLE & COMPOUND INTEREST
  'simple-compound-interest': [
    {
      id: 'sci_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'A sum doubles in 8 years at simple interest. What is the rate of interest per annum?',
      questionMr: 'सरळव्याजाने एक रक्कम ८ वर्षांत दुप्पट होते, तर व्याजाचा दर (द.सा.द.शे.) किती?',
      options: ['12.5%', '10%', '15%', '12%'],
      correct: 0,
      explanation: 'R = (N - 1) × 100 / T = (2 - 1) × 100 / 8 = 12.5%.',
      explanationMr: 'दर = (दुप्पट - १) × १०० / ८ = १०० / ८ = १२.५%.'
    },
    {
      id: 'sci_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'Difference between CI and SI on a sum for 2 years at 10% is ₹65. The principal sum is:',
      questionMr: '१०% दराने एका रकमेचे २ वर्षांचे चक्रवाढ व्याज व सरळव्याजातील फरक ₹६५ आहे, तर मुद्दल किती?',
      options: ['₹6,500', '₹6,000', '₹7,000', '₹5,500'],
      correct: 0,
      explanation: 'Diff = P(R/100)² => 65 = P(1/100) => P = ₹6500.',
      explanationMr: 'फरक = P × (१०/१००)² => ६५ = P / १०० => मुद्दल = ₹६,५००.'
    },
    {
      id: 'sci_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'A sum triples in 4 years at compound interest. In how many years will it become 27 times itself?',
      questionMr: 'चक्रवाढ व्याजाने एक रक्कम ४ वर्षांत ३ पट होते, तर ती २७ पट होण्यासाठी किती वर्षे लागतील?',
      options: ['12 years', '16 years', '8 years', '10 years'],
      correct: 0,
      explanation: '27 = 3³. Time = 3 × 4 = 12 years.',
      explanationMr: '२७ = ३³. घातांक ३ असल्याने वर्षे = ३ × ४ = १२ वर्षे.'
    },
    {
      id: 'sci_q4',
      examTag: 'MPSC Group B',
      difficulty: 'Hard',
      q: 'Find CI on ₹8,000 for 2 years at 5% per annum compounded annually.',
      questionMr: '₹८,००० मुद्दलाचे दरसाल ५% दराने २ वर्षांचे चक्रवाढ व्याज किती?',
      options: ['₹820', '₹800', '₹840', '₹850'],
      correct: 0,
      explanation: 'Amount = 8000 × 1.05 × 1.05 = ₹8820. CI = 8820 - 8000 = ₹820.',
      explanationMr: 'रास = ८००० × १.०५ × १.०५ = ₹८,८२०. व्याज = ८८२० - ८००० = ₹८२०.'
    }
  ],

  // 8. NUMBER SYSTEM
  'number-system': [
    {
      id: 'ns_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'If the 6-digit number 7504*2 is divisible by 9, find the missing digit *.',
      questionMr: 'जर ७५०४*२ ही संख्या ९ ने विभाज्य असेल, तर * च्या जागी कोणता अंक येईल?',
      options: ['9 (or 0)', '6', '7', '8'],
      correct: 0,
      explanation: 'Sum = 7+5+0+4+*+2 = 18 + *. Divisible by 9 when * is 0 or 9.',
      explanationMr: 'अंकांची बेरीज = १८ + *. ९ ने भाग जाण्यासाठी * = ० किंवा ९ असावा.'
    },
    {
      id: 'ns_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'What is the unit digit of (2467)^153 × (341)^72?',
      questionMr: '(२४६७)^१५३ × (३४१)^७२ या गुणाकारातील एकक स्थानचा अंक कोणता?',
      options: ['7', '1', '3', '9'],
      correct: 0,
      explanation: '153 mod 4 = 1 => 7^1 = 7. 1^72 = 1. Product unit digit = 7 × 1 = 7.',
      explanationMr: '१५३ ला ४ ने भागल्यास बाकी १ उरते => ७^१ = ७. १^७२ = १. एकक अंक = ७ × १ = ७.'
    },
    {
      id: 'ns_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'A number divided by 899 gives remainder 63. If divided by 29, the remainder will be:',
      questionMr: 'एका संख्येला ८९९ ने भागल्यास ६३ बाकी उरते. त्याच संख्येला २९ ने भागल्यास बाकी किती उरेल?',
      options: ['5', '3', '4', '2'],
      correct: 0,
      explanation: '899 is divisible by 29. 63 mod 29 = 5.',
      explanationMr: '६३ ला २९ ने भागल्यास २९ × २ = ५८, बाकी = ५ उरते.'
    },
    {
      id: 'ns_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Hard',
      q: 'Find the sum of the first 30 positive odd numbers.',
      questionMr: 'पहिल्या ३० विषम नैसर्गिक संख्यांची बेरीज किती?',
      options: ['900', '890', '930', '850'],
      correct: 0,
      explanation: 'Sum of first n odd numbers = n² = 30² = 900.',
      explanationMr: 'पहिल्या n विषम संख्यांची बेरीज = n² = ३०² = ९००.'
    }
  ],

  // 9. BODMAS
  'bodmas': [
    {
      id: 'bod_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'Evaluate: 18 - [6 - {4 - (8 - 6 + 3 with bar on 6+3)}]',
      questionMr: 'किंमत काढा: १८ - [६ - {४ - (८ - ६ + ३)}], (६+३ वर रेघ आहे)',
      options: ['17', '15', '19', '12'],
      correct: 0,
      explanation: 'Bar: 6+3=9. 8-9=-1. 4-(-1)=5. 6-5=1. 18-1=17.',
      explanationMr: 'रेघीय कंस आधी: ६+३=९. ८-९=-१. ४-(-१)=५. ६-५=१. १८-१=१७.'
    },
    {
      id: 'bod_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'Simplify: (0.73³ + 0.27³) / (0.73² - 0.73 × 0.27 + 0.27²)',
      questionMr: 'सरळरूप द्या: (०.७३³ + ०.२७³) / (०.७३² - ०.७३ × ०.२७ + ०.२७²)',
      options: ['1', '0.46', '0.54', '1.2'],
      correct: 0,
      explanation: '(a³ + b³)/(a² - ab + b²) = a + b = 0.73 + 0.27 = 1.',
      explanationMr: 'सूत्र: (a³ + b³)/(a² - ab + b²) = a + b = ०.७३ + ०.२७ = १.'
    },
    {
      id: 'bod_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'Express 0.4̄7 (0.4777...) as a vulgar fraction.',
      questionMr: '०.४७७७... चे व्यवहारी अपूर्णांकात रूपांतर करा.',
      options: ['43/90', '47/99', '47/90', '43/99'],
      correct: 0,
      explanation: '(47 - 4)/90 = 43/90.',
      explanationMr: '(४७ - ४) / ९० = ४३/९०.'
    },
    {
      id: 'bod_q4',
      examTag: 'MPSC Group B',
      difficulty: 'Hard',
      q: 'Simplify: 1 + 1 / [1 + 1 / (1 + 1/2)]',
      questionMr: 'सरळरूप द्या: १ + १ / [१ + १ / (१ + १/२)]',
      options: ['8/5', '5/3', '7/5', '11/7'],
      correct: 0,
      explanation: 'Bottom: 1 + 1/2 = 3/2. Next: 1 + 2/3 = 5/3. Top: 1 + 3/5 = 8/5.',
      explanationMr: 'तळातून सोडवल्यास: १ + १/२ = ३/२; १ + २/३ = ५/३; १ + ३/५ = ८/५.'
    }
  ],

  // 10. LCM & HCF
  'lcm-hcf': [
    {
      id: 'lh_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'HCF and LCM of two numbers are 12 and 336. One number is 84. The other is:',
      questionMr: 'दोन संख्यांचा मसावि १२ व लसावि ३३६ आहे. एक संख्या ८४ असल्यास दुसरी संख्या कोणती?',
      options: ['48', '36', '42', '54'],
      correct: 0,
      explanation: 'Other = (12 × 336)/84 = 336/7 = 48.',
      explanationMr: 'दुसरी संख्या = (१२ × ३३६) / ८४ = ४८.'
    },
    {
      id: 'lh_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: '4 bells toll at intervals of 6, 8, 12, 18 seconds. After how much time will they toll together?',
      questionMr: '४ घंटा अनुक्रमे ६, ८, १२, १८ सेकंदांनी वाजतात. त्या किती वेळाने एकत्र वाजतील?',
      options: ['72 seconds', '36 seconds', '48 seconds', '144 seconds'],
      correct: 0,
      explanation: 'LCM(6, 8, 12, 18) = 72 seconds (1 min 12s).',
      explanationMr: 'लसावि(६, ८, १२, १८) = ७२ सेकंद (१ मिनिट १२ सेकंद).'
    },
    {
      id: 'lh_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'Greatest number that divides 43, 91, 183 leaving the same remainder in each case:',
      questionMr: '४३, ९१ व १८३ ला ज्या मोठ्यात मोठ्या संख्येने भागल्यास प्रत्येक वेळी समान बाकी उरेल ती संख्या कोणती?',
      options: ['4', '7', '9', '13'],
      correct: 0,
      explanation: 'HCF of (91-43, 183-91, 183-43) = HCF(48, 92, 140) = 4.',
      explanationMr: 'फरकांचा मसावि: ९१-४३=४८, १८३-९१=९२, १८३-४३=१४०. मसावि = ४.'
    },
    {
      id: 'lh_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Hard',
      q: 'Find HCF of fractions 2/3, 8/9, 10/27.',
      questionMr: '२/३, ८/९, १०/२७ या अपूर्णांकांचा मसावि किती?',
      options: ['2/27', '2/9', '8/27', '10/3'],
      correct: 0,
      explanation: 'HCF of fractions = HCF(numerators)/LCM(denominators) = HCF(2,8,10)/LCM(3,9,27) = 2/27.',
      explanationMr: 'अपूर्णांकांचा मसावि = अंशांचा मसावि / छेदांचा लसावि = २ / २७.'
    }
  ],

  // 11. PERMUTATION & COMBINATION
  'permutation-combination': [
    {
      id: 'pc_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'How many different ways can the letters of the word "LEADER" be arranged?',
      questionMr: '"LEADER" या शब्दातील अक्षरे किती वेगवेगळ्या प्रकारे मांडता येतील?',
      options: ['360', '720', '180', '120'],
      correct: 0,
      explanation: '6 letters with E repeating twice = 6!/2! = 720/2 = 360.',
      explanationMr: 'एकूण अक्षरे ६, \'E\' दोनदा आला आहे => ६! / २! = ७२० / २ = ३६०.'
    },
    {
      id: 'pc_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'In a meeting of 10 people, everyone shakes hands with everyone else once. How many handshakes occur?',
      questionMr: 'एका सभेत १० जणांनी प्रत्येकाने प्रत्येकाशी एकदाच हस्तांदोलन केले, तर एकूण किती हस्तांदोलने होतील?',
      options: ['45', '90', '50', '40'],
      correct: 0,
      explanation: 'Handshakes = n(n-1)/2 = (10 × 9)/2 = 45.',
      explanationMr: 'हस्तांदोलने = १० × ९ / २ = ४५.'
    },
    {
      id: 'pc_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'Two unbiased dice are thrown. What is probability of getting sum 8?',
      questionMr: 'दोन फासे फेकले असता त्यांच्यावरील अंकाची बेरीज ८ येण्याची संभाव्यता किती?',
      options: ['5/36', '1/6', '7/36', '1/9'],
      correct: 0,
      explanation: 'Pairs giving 8: (2,6),(3,5),(4,4),(5,3),(6,2) = 5 pairs. P = 5/36.',
      explanationMr: 'बेरीज ८ असणाऱ्या जोड्या = ५. संभाव्यता = ५/३६.'
    },
    {
      id: 'pc_q4',
      examTag: 'MPSC Group B',
      difficulty: 'Hard',
      q: 'Three coins are tossed. Probability of getting at least one Head is:',
      questionMr: 'तीन नाणी एकाच वेळी उडवली असता किमान एक छापा (Head) मिळण्याची संभाव्यता किती?',
      options: ['7/8', '3/8', '1/2', '5/8'],
      correct: 0,
      explanation: 'P(at least one H) = 1 - P(TTT) = 1 - 1/8 = 7/8.',
      explanationMr: '१ - (एकही छापा नसणे) = १ - १/८ = ७/८.'
    }
  ],

  // 12. ALGEBRA & GEOMETRY
  'algebra-geometry': [
    {
      id: 'ag_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'If x + 1/x = 5, find value of x² + 1/x².',
      questionMr: 'जर x + 1/x = ५ असेल, तर x² + 1/x² ची किंमत किती?',
      options: ['23', '25', '27', '20'],
      correct: 0,
      explanation: 'x² + 1/x² = k² - 2 = 5² - 2 = 23.',
      explanationMr: 'x² + 1/x² = ५² - २ = २५ - २ = २३.'
    },
    {
      id: 'ag_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'A wire bent as square has area 121 cm². Bent into a circle, its radius is (π = 22/7):',
      questionMr: 'तारेचा चौरस केल्यास क्षेत्रफळ १२१ चौ.सेमी भरते. तीच तार वाकवून वर्तुळ केल्यास त्रिज्या किती?',
      options: ['7 cm', '14 cm', '3.5 cm', '11 cm'],
      correct: 0,
      explanation: 'Square side a = 11cm => Perimeter = 44cm. 2πr = 44 => r = 7 cm.',
      explanationMr: 'चौरसाची बाजू = ११ सेमी => परिमिती = ४४ सेमी. २πr = ४४ => त्रिज्या = ७ सेमी.'
    },
    {
      id: 'ag_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'A field 30m by 20m has a 2m wide path around it outside. Area of path is:',
      questionMr: '३० मी × २० मी बागेभोवती बाहेरून २ मी रुंद रस्ता आहे. रस्त्याचे क्षेत्रफळ किती?',
      options: ['216 m²', '200 m²', '240 m²', '180 m²'],
      correct: 0,
      explanation: 'Path area = 2w(L + B + 2w) = 2(2)(30 + 20 + 4) = 4 × 54 = 216 m².',
      explanationMr: 'रस्त्याचे क्षेत्रफळ = २ × २ × (३० + २० + ४) = ४ × ५४ = २१६ चौ.मी.'
    },
    {
      id: 'ag_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Hard',
      q: 'If x + 1/x = 4, find x³ + 1/x³.',
      questionMr: 'जर x + 1/x = ४ असेल, तर x³ + 1/x³ ची किंमत किती?',
      options: ['52', '64', '48', '56'],
      correct: 0,
      explanation: 'x³ + 1/x³ = k³ - 3k = 4³ - 3(4) = 64 - 12 = 52.',
      explanationMr: 'x³ + 1/x³ = ४³ - ३(४) = ६४ - १२ = ५२.'
    }
  ],

  // 13. CODING-DECODING
  'coding-decoding': [
    {
      id: 'cd_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'If "DELHI" is coded as "EDMGI", how will "MUMBAI" be coded?',
      questionMr: '"DELHI" ला "EDMGI" असे लिहिले, तर "MUMBAI" ला कसे लिहिले जाईल?',
      options: ['NTNABH', 'NTMABH', 'NSNABH', 'NTNZBH'],
      correct: 0,
      explanation: 'Alternating +1, -1: M(+1)=N, U(-1)=T, M(+1)=N, B(-1)=A, A(+1)=B, I(-1)=H => NTNABH.',
      explanationMr: 'एकाआड एक +१, -१ चा पॅटर्न: M(+१)=N, U(-१)=T... => NTNABH.'
    },
    {
      id: 'cd_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'If "KING" is coded as "PRMT", how will "RAIL" be coded?',
      questionMr: '"KING" ला "PRMT" लिहिले, तर "RAIL" ला काय लिहिले जाईल?',
      options: ['IZRO', 'IZSO', 'IYRO', 'JZRO'],
      correct: 0,
      explanation: 'Opposite letters (sum 27): R(18)->I(9), A(1)->Z(26), I(9)->R(18), L(12)->O(15) => IZRO.',
      explanationMr: 'विरुद्ध अक्षरांची जोडी (बेरीज २७): R->I, A->Z, I->R, L->O => IZRO.'
    },
    {
      id: 'cd_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Easy',
      q: 'If sky is called sea, sea is called water, water is called air, air is called cloud, where do fish live?',
      questionMr: 'आकाशाला समुद्र, समुद्राला पाणी, पाण्याला हवा, आणि हवेला ढग म्हटले, तर मासे कुठे राहतात?',
      options: ['air', 'water', 'sea', 'cloud'],
      correct: 0,
      explanation: 'Fish live in water. In code, water is called air. Answer is air.',
      explanationMr: 'मासे पाण्यात राहतात. सांकेतिक भाषेत पाण्याला हवा म्हटले आहे. उत्तर: हवा (air).'
    },
    {
      id: 'cd_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Hard',
      q: 'In code, "nik ma pe" = "he is doctor", "pe la zo" = "doctor was here", "ma to" = "he came". Code for "is" is:',
      questionMr: '"nik ma pe" म्हणजे "he is doctor", "pe la zo" म्हणजे "doctor was here", "ma to" म्हणजे "he came". तर "is" चा कोड कोणता?',
      options: ['nik', 'ma', 'pe', 'to'],
      correct: 0,
      explanation: 'doctor=pe, he=ma. In 1st statement, remaining word "is" = "nik".',
      explanationMr: 'doctor=pe, he=ma. पहिल्या वाक्यातील उरलेला "is" = "nik".'
    }
  ],

  // 14. BLOOD RELATIONS
  'blood-relations': [
    {
      id: 'br_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'Pointing to a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to him?',
      questionMr: 'एका मुलाकडे बोट दाखवून सुरेश म्हणाला, "हा माझ्या आईच्या एकुलत्या एका मुलाचा मुलगा आहे." तर सुरेश त्याचे कोण?',
      options: ['Father', 'Brother', 'Uncle', 'Grandfather'],
      correct: 0,
      explanation: 'My mother\'s only son = Suresh himself. Son of Suresh = Suresh\'s son. Suresh is Father.',
      explanationMr: 'आईचा एकुलता एक मुलगा म्हणजे सुरेश स्वतः. मुलाचा तो वडील (Father) लागतो.'
    },
    {
      id: 'br_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'A is B\'s brother. C is A\'s mother. D is C\'s father. E is B\'s son. How is D related to A?',
      questionMr: 'A हा B चा भाऊ आहे. C ही A ची आई आहे. D हे C चे वडील आहेत. तर D चे A शी नाते काय?',
      options: ['Maternal Grandfather', 'Grandfather', 'Uncle', 'Father'],
      correct: 0,
      explanation: 'C is A\'s mother. D is mother\'s father => Maternal Grandfather (आजोबा).',
      explanationMr: 'A ची आई C, आणि आईचे वडील D म्हणजेच आजोबा (Maternal Grandfather).'
    },
    {
      id: 'br_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'P + Q means P is brother of Q, P - Q means P is mother of Q. What does M - N + S mean?',
      questionMr: 'P + Q म्हणजे P हा Q चा भाऊ, P - Q म्हणजे P ही Q ची आई. तर M - N + S चा अर्थ काय?',
      options: ['M is mother of S', 'M is sister of S', 'M is aunt of S', 'M is grandmother of S'],
      correct: 0,
      explanation: 'M is mother of N. N is brother of S. Hence M is mother of S.',
      explanationMr: 'M ही N ची आई आहे व N हा S चा भाऊ आहे. त्यामुळे M ही S ची आई (Mother) आहे.'
    },
    {
      id: 'br_q4',
      examTag: 'MPSC Group B',
      difficulty: 'Hard',
      q: 'A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?',
      questionMr: 'एका स्त्रीने एका पुरुषाची ओळख "माझ्या आईच्या भावाचा मुलगा" अशी करून दिली. तर तो पुरुष त्या स्त्रीचा कोण?',
      options: ['Maternal Cousin', 'Nephew', 'Brother', 'Uncle'],
      correct: 0,
      explanation: 'Mother\'s brother = Mama (Maternal Uncle). Uncle\'s son = Maternal Cousin (मामेभाऊ).',
      explanationMr: 'आईचा भाऊ म्हणजे मामा, आणि मामाचा मुलगा म्हणजे मामेभाऊ (Maternal Cousin).'
    }
  ],

  // 15. DIRECTION SENSE
  'direction-sense': [
    {
      id: 'ds_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'A man walks 10m North, turns Right walks 5m, turns Right walks 10m, turns Left. Facing which direction?',
      questionMr: 'एक व्यक्ती १० मी उत्तरेकडे, मग उजवीकडे ५ मी, पुन्हा उजवीकडे १० मी आणि शेवटी डावीकडे वळतो. तर तो कोणत्या दिशेला तोंड करून आहे?',
      options: ['East', 'West', 'North', 'South'],
      correct: 0,
      explanation: 'North -> Right (East) -> Right (South) -> Left (East).',
      explanationMr: 'उत्तर -> उजवीकडे (पूर्व) -> उजवीकडे (दक्षिण) -> डावीकडे (पूर्व).'
    },
    {
      id: 'ds_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'A person walks 8 km South, turns East and walks 6 km to point B. Shortest distance from start is:',
      questionMr: 'एक जण ८ किमी दक्षिणेकडे, मग पूर्वेकडे ६ किमी चालतो. तर मूळ स्थानापासून सरळ अंतर किती?',
      options: ['10 km', '14 km', '12 km', '9 km'],
      correct: 0,
      explanation: '√(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      explanationMr: 'पायथागोरस: √(८² + ६²) = √१०० = १० किमी.'
    },
    {
      id: 'ds_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'One morning after sunrise, Suresh was facing a pole. The pole\'s shadow fell to his right. Suresh was facing:',
      questionMr: 'एका सकाळी सूर्योदयानंतर सुरेश एका खांबासमोर उभा होता. सावली सुरेशच्या उजवीकडे पडली, तर सुरेशचे तोंड कुठे होते?',
      options: ['South', 'North', 'East', 'West'],
      correct: 0,
      explanation: 'Morning shadow is in West. Right hand = West => Suresh faces South.',
      explanationMr: 'सकाळची सावली पश्चिमेला असते. उजवा हात पश्चिम दिशेला असल्यामुळे सुरेश दक्षिणेकडे (South) तोंड करून आहे.'
    },
    {
      id: 'ds_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Hard',
      q: 'A walks 30m South, turns left walks 40m, turns left walks 30m. How far and in which direction from start?',
      questionMr: 'A ३० मी दक्षिणेकडे, मग डावीकडे ४० मी, पुन्हा डावीकडे ३० मी चालतो. तर तो सुरुवातीच्या जागेपासून किती व कोणत्या दिशेला आहे?',
      options: ['40m East', '40m West', '70m East', '30m North'],
      correct: 0,
      explanation: '30 South and 30 North cancel out. Net displacement is 40m East.',
      explanationMr: 'दक्षिण ३० व उत्तर ३० एकमेकांना खोडतात. निव्वळ अंतर = ४० मी पूर्व (East).'
    }
  ],

  // 16. SYLLOGISM
  'syllogism': [
    {
      id: 'syl_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'Statements: All Mangoes are Fruits. All Fruits are Sweet. Conclusions: I. All Mangoes are Sweet. II. Some Sweet things are Mangoes.',
      questionMr: 'विधाने: सर्व आंबे फळे आहेत. सर्व फळे गोड आहेत. निष्कर्ष: I. सर्व आंबे गोड आहेत. II. काही गोड गोष्टी आंबे आहेत.',
      options: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither follows'],
      correct: 0,
      explanation: 'Mangoes inside Fruits inside Sweet => Both conclusions valid.',
      explanationMr: 'आंबे हे फळांच्या आणि गोडच्या आत असल्यामुळे दोन्ही निष्कर्ष (I आणि II) बरोबर आहेत.'
    },
    {
      id: 'syl_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'Statements: Some pens are books. Some books are pencils. Conclusions: I. Some pens are pencils. II. No pen is a pencil.',
      questionMr: 'विधाने: काही पेन पुस्तके आहेत. काही पुस्तके पेन्सिल आहेत. निष्कर्ष: I. काही पेन पेन्सिल आहेत. II. एकही पेन पेन्सिल नाही.',
      options: ['Either I or II follows', 'Both follow', 'Only I follows', 'Neither follows'],
      correct: 0,
      explanation: 'Complementary pair (Some + No) with same subjects => Either I or II follows.',
      explanationMr: 'पूरक जोडी (काही + एकही नाही) असल्यामुळे एकतर I किंवा II सत्य आहे.'
    },
    {
      id: 'syl_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'Statements: All Birds are Animals. No Animal is a Fish. Conclusions: I. No Bird is a Fish. II. Some Animals are Birds.',
      questionMr: 'विधाने: सर्व पक्षी प्राणी आहेत. एकही प्राणी मासा नाही. निष्कर्ष: I. एकही पक्षी मासा नाही. II. काही प्राणी पक्षी आहेत.',
      options: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither follows'],
      correct: 0,
      explanation: 'Birds inside Animals, no Animal is Fish => No Bird is Fish (True). Some Animals are Birds (True).',
      explanationMr: 'पक्षी प्राण्यांच्या आत असल्याने कोणताही पक्षी मासा नाही आणि काही प्राणी पक्षी आहेत. दोन्ही सत्य.'
    },
    {
      id: 'syl_q4',
      examTag: 'MPSC Group B',
      difficulty: 'Hard',
      q: 'Statements: Some Doctors are Teachers. All Teachers are Engineers. Conclusion: Some Doctors are Engineers.',
      questionMr: 'विधाने: काही डॉक्टर शिक्षक आहेत. सर्व शिक्षक इंजिनिअर आहेत. निष्कर्ष: काही डॉक्टर इंजिनिअर आहेत.',
      options: ['Follows', 'Does not follow', 'Either-or', 'Cannot be determined'],
      correct: 0,
      explanation: 'Doctors overlap with Teachers, and Teachers are fully inside Engineers => Doctors must overlap Engineers.',
      explanationMr: 'डॉक्टर आणि शिक्षक यांच्यातील सामाईक भाग इंजिनिअरच्या आत येत असल्याने निष्कर्ष तंतोतंत सत्य आहे.'
    }
  ],

  // 17. SERIES COMPLETION
  'series-completion': [
    {
      id: 'ser_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'Find the next term: 2, 5, 11, 20, 32, ?',
      questionMr: 'मालिकेतील पुढील संख्या शोधा: २, ५, ११, २०, ३२, ?',
      options: ['47', '45', '46', '48'],
      correct: 0,
      explanation: 'Differences: +3, +6, +9, +12, next is +15. 32 + 15 = 47.',
      explanationMr: 'फरक: +३, +६, +९, +१२, पुढील फरक +१५. ३२ + १५ = ४७.'
    },
    {
      id: 'ser_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'Find the missing number: 0, 7, 26, 63, 124, ?',
      questionMr: 'गाळलेली संख्या शोधा: ०, ७, २६, ६३, १२४, ?',
      options: ['215', '216', '214', '210'],
      correct: 0,
      explanation: 'n³ - 1 pattern: 1³-1, 2³-1, 3³-1, 4³-1, 5³-1 => 6³ - 1 = 216 - 1 = 215.',
      explanationMr: 'n³ - १ मालिका: ६³ - १ = २१६ - १ = २१५.'
    },
    {
      id: 'ser_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'Complete the series: 4, 18, 7, 14, 10, 10, 13, ?',
      questionMr: 'मालिका पूर्ण करा: ४, १८, ७, १४, १०, १०, १३, ?',
      options: ['6', '8', '7', '5'],
      correct: 0,
      explanation: 'Two series: (4, 7, 10, 13, +3) and (18, 14, 10, ?, -4). 10 - 4 = 6.',
      explanationMr: 'दोन मालिका: ४, ७, १०, १३ (+३) आणि १८, १४, १०, ? (-४). १० - ४ = ६.'
    },
    {
      id: 'ser_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Medium',
      q: 'Find next term in letter series: B, E, I, N, T, ?',
      questionMr: 'अक्षर मालिकेतील पुढील पद शोधा: B, E, I, N, T, ?',
      options: ['A', 'Z', 'Y', 'B'],
      correct: 0,
      explanation: 'Positions: 2, 5 (+3), 9 (+4), 14 (+5), 20 (+6) => 20 + 7 = 27 = A.',
      explanationMr: 'स्थान: २, ५ (+३), ९ (+४), १४ (+५), २० (+६) => २० + ७ = २७ म्हणजेच A.'
    }
  ],

  // 18. SEATING ARRANGEMENT & RANKING
  'seating-arrangement': [
    {
      id: 'seat_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'In a class, Rohan ranks 7th from top and 28th from bottom. How many students in class?',
      questionMr: 'एका वर्गात रोहनचा वरून ७ वा आणि खालून २८ वा क्रमांक आहे, तर वर्गात एकूण किती विद्यार्थी आहेत?',
      options: ['34', '35', '33', '36'],
      correct: 0,
      explanation: 'Total = Top + Bottom - 1 = 7 + 28 - 1 = 34.',
      explanationMr: 'एकूण विद्यार्थी = ७ + २८ - १ = ३४.'
    },
    {
      id: 'seat_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'Sita is 10th from left, Gita 9th from right. Swapping seats, Sita is 15th from left. Total girls:',
      questionMr: 'सीता डावीकडून १० वी, गीता उजवीकडून ९ वी आहे. जागा बदलल्यावर सीता डावीकडून १५ वी होते. तर एकूण मुली किती?',
      options: ['23', '24', '22', '25'],
      correct: 0,
      explanation: 'Total = 15 + 9 - 1 = 23.',
      explanationMr: 'एकूण = १५ + ९ - १ = २३ मुली.'
    },
    {
      id: 'seat_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: '6 friends A, B, C, D, E, F sit in a circle facing center. A is opposite D. B is right of A. C is between D and B. Opposite B is:',
      questionMr: '६ मित्र वर्तुळाकार बसले आहेत. A समोर D, A च्या उजवीकडे B आहे. B च्या समोरील जागेवर कोण बसले आहे?',
      options: ['E', 'F', 'C', 'D'],
      correct: 0,
      explanation: 'In 6-person circle, opposite seats are separated by 2 people. Opposite B is E.',
      explanationMr: '६ जणांच्या वर्तुळात समोरासमोरील स्थानांवर B च्या समोर E बसलेला असेल.'
    },
    {
      id: 'seat_q4',
      examTag: 'MPSC Group B',
      difficulty: 'Hard',
      q: '5 friends sit in a row facing North. D is at extreme left. E is between A and B. C is right of B. Person in middle is:',
      questionMr: '५ मित्र उत्तरेकडे तोंड करून रांगेत बसले आहेत. D डाव्या टोकाला, E हा A व B च्या मध्ये, आणि C हा B च्या उजवीकडे आहे. तर मध्यभागी कोण आहे?',
      options: ['E', 'A', 'B', 'C'],
      correct: 0,
      explanation: 'Order: D, A, E, B, C. Middle person is E.',
      explanationMr: 'क्रम: D, A, E, B, C. मध्यभागी E बसला आहे.'
    }
  ],

  // 19. ANALOGY & CLASSIFICATION
  'analogy-classification': [
    {
      id: 'ana_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'Find the missing number: 6 : 222 :: 7 : ?',
      questionMr: '६ : २२२ :: ७ : ? या समसंबंधातील पद शोधा.',
      options: ['350', '343', '336', '348'],
      correct: 0,
      explanation: '6³ + 6 = 216 + 6 = 222. For 7: 7³ + 7 = 343 + 7 = 350.',
      explanationMr: '६³ + ६ = २२२, तसेच ७³ + ७ = ३४३ + ७ = ३५०.'
    },
    {
      id: 'ana_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Easy',
      q: 'Choose the odd one out: 27, 64, 125, 144.',
      questionMr: 'गटात न बसणारी संख्या ओळखा: २७, ६४, १२५, १४४.',
      options: ['144', '64', '125', '27'],
      correct: 0,
      explanation: '27=3³, 64=4³, 125=5³ are perfect cubes. 144 is 12² (not a cube of integer).',
      explanationMr: '२७, ६४, १२५ हे पूर्ण घन आहेत; १४४ हा वर्ग आहे (घन नाही).'
    },
    {
      id: 'ana_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'Maharashtra : Mumbai :: Rajasthan : ?',
      questionMr: 'महाराष्ट्र : मुंबई :: राजस्थान : ?',
      options: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota'],
      correct: 0,
      explanation: 'State : Capital relation. Capital of Rajasthan is Jaipur.',
      explanationMr: 'राज्य : राजधानी समसंबंध. राजस्थानची राजधानी जयपूर आहे.'
    },
    {
      id: 'ana_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Medium',
      q: 'Find the odd pair: (2, 8), (3, 27), (4, 64), (5, 100).',
      questionMr: 'विसंगत जोडी ओळखा: (२, ८), (३, २७), (४, ६४), (५, १००).',
      options: ['(5, 100)', '(4, 64)', '(3, 27)', '(2, 8)'],
      correct: 0,
      explanation: 'All pairs are (n, n³). 5³ = 125, not 100.',
      explanationMr: 'सर्व जोड्या (n, n³) आहेत; ५ चा घन १२५ असावा, १०० नाही.'
    }
  ],

  // 20. CLOCKS & CALENDARS
  'clocks-calendars': [
    {
      id: 'cc_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'Find angle between clock hands at 8:20.',
      questionMr: '८ वाजून २० मिनिटांनी घड्याळाच्या दोन काट्यांमध्ये किती अंशाचा कोन असेल?',
      options: ['130°', '120°', '140°', '125°'],
      correct: 0,
      explanation: '|30(8) - 5.5(20)| = |240 - 110| = 130°.',
      explanationMr: '|३०(८) - ५.५(२०)| = |२४० - ११०| = १३०°.'
    },
    {
      id: 'cc_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: 'At what time between 3 and 4 o\'clock do clock hands coincide?',
      questionMr: '३ ते ४ च्या दरम्यान घड्याळाचे काटे कोणत्या वेळी एकमेकांवर येतील?',
      options: ['16 4/11 min past 3', '15 min past 3', '16 min past 3', '18 2/11 min past 3'],
      correct: 0,
      explanation: '(60/11) × 3 = 180/11 = 16 4/11 minutes past 3.',
      explanationMr: '(६०/११) × ३ = १८०/११ = ३ वाजून १६ ४/११ मिनिटे.'
    },
    {
      id: 'cc_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'If 15th August 2023 was Tuesday, what day was 15th August 2024?',
      questionMr: '१५ ऑगस्ट २०२३ रोजी मंगळवार असल्यास, १५ ऑगस्ट २०२४ रोजी कोणता वार असेल?',
      options: ['Thursday', 'Wednesday', 'Friday', 'Saturday'],
      correct: 0,
      explanation: '2024 is leap year including Feb 29 => +2 odd days. Tuesday + 2 = Thursday.',
      explanationMr: '२०२४ हे लीप वर्ष असल्याने २ वाढीव दिवस. मंगळवार + २ = गुरुवार.'
    },
    {
      id: 'cc_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Easy',
      q: 'A clock shows 3:25. What time is seen in its mirror reflection?',
      questionMr: 'घड्याळात ३:२५ वाजले असल्यास आरशातील प्रतिमेत किती वाजलेले दिसतील?',
      options: ['8:35', '8:25', '9:35', '9:25'],
      correct: 0,
      explanation: '11:60 - 3:25 = 8:35.',
      explanationMr: '११:६० - ३:२५ = ८:३५.'
    }
  ],

  // 21. PUZZLES
  'puzzles': [
    {
      id: 'puz_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'P is taller than Q but shorter than R. S is taller than T but shorter than Q. Who is tallest?',
      questionMr: 'P हा Q पेक्षा उंच पण R पेक्षा बुटका आहे. S हा T पेक्षा उंच पण Q पेक्षा बुटका आहे. सर्वात उंच कोण?',
      options: ['R', 'P', 'S', 'Q'],
      correct: 0,
      explanation: 'R > P > Q > S > T. Tallest is R.',
      explanationMr: 'साखळी: R > P > Q > S > T. सर्वात उंच R आहे.'
    },
    {
      id: 'puz_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Medium',
      q: '4 persons live on floors 1-4. C lives on floor 4. A lives on an odd floor. B lives immediately above A. Who is on floor 3?',
      questionMr: '४ जण १ ते ४ मजल्यांवर राहतात. C चौथ्या मजल्यावर आहे. A विषम मजल्यावर व B हा A च्या वरच्या मजल्यावर आहे. ३ ऱ्या मजल्यावर कोण आहे?',
      options: ['D', 'A', 'B', 'C'],
      correct: 0,
      explanation: 'Floor 4=C, Floor 2=B, Floor 1=A. Floor 3 is D.',
      explanationMr: 'मजला ४=C, मजला २=B, मजला १=A. ३ ऱ्या मजल्यावर D आहे.'
    },
    {
      id: 'puz_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: '3 exams Maths, Science, History on Mon, Tue, Wed. Maths not on Mon. Science immediately after History. Which exam on Wednesday?',
      questionMr: '३ परीक्षा सोम, मंगळ, बुधवारी आहेत. गणित सोमवारी नाही. विज्ञान इतिहासाच्या लगेच नंतर आहे. बुधवारी कोणती परीक्षा आहे?',
      options: ['Maths', 'Science', 'History', 'Cannot determine'],
      correct: 0,
      explanation: 'History on Mon, Science on Tue. Maths must be on Wednesday.',
      explanationMr: 'सोमवारी इतिहास, मंगळवारी विज्ञान, आणि बुधवारी गणित परीक्षा असेल.'
    },
    {
      id: 'puz_q4',
      examTag: 'MPSC Group B',
      difficulty: 'Hard',
      q: 'I am an even number between 10 and 20. The sum of my digits is 7. What number am I?',
      questionMr: 'मी १० ते २० मधील सम संख्या आहे. माझ्या अंकांची बेरीज ७ आहे. मी कोण?',
      options: ['16', '14', '18', '12'],
      correct: 0,
      explanation: 'Even numbers 10-20: 12, 14, 16, 18. 1 + 6 = 7. Number is 16.',
      explanationMr: '१० ते २० मधील सम संख्या: १२, १४, १६, १८. १ + ६ = ७, म्हणून उत्तर १६ आहे.'
    }
  ],

  // 22. NON-VERBAL REASONING
  'non-verbal': [
    {
      id: 'nv_q1',
      examTag: 'Talathi 2023',
      difficulty: 'Easy',
      q: 'A square is divided by both its diagonals into 4 smaller triangles. How many total triangles are in the figure?',
      questionMr: 'एका चौरसाचे दोन्ही कर्ण जोडल्यास ४ लहान त्रिकोण बनतात. त्या आकृतीत एकूण किती त्रिकोण आहेत?',
      options: ['8', '4', '6', '10'],
      correct: 0,
      explanation: '2n formula = 2 × 4 = 8 triangles (4 small + 4 large composite triangles).',
      explanationMr: '२n सूत्र = २ × ४ = ८ त्रिकोण (४ लहान + ४ मोठे).'
    },
    {
      id: 'nv_q2',
      examTag: 'MPSC Prelims',
      difficulty: 'Easy',
      q: 'What is the water image of the letter "M"?',
      questionMr: '"M" या अक्षराची पाण्यातील प्रतिमा कोणती?',
      options: ['W', 'M', 'E', 'N'],
      correct: 0,
      explanation: 'Water inverts top to bottom: "M" flipped vertically becomes "W".',
      explanationMr: 'पाण्यात वरची बाजू खाली उलट होते: "M" चे उलटून "W" बनते.'
    },
    {
      id: 'nv_q3',
      examTag: 'Talathi TCS',
      difficulty: 'Medium',
      q: 'In an unfolded net of a dice, faces 1, 2, 3, 4 are in a straight strip. Which face is opposite to face 1?',
      questionMr: 'उलगडलेल्या फाशामध्ये १, २, ३, ४ ही पृष्ठे सरळ ओळीत आहेत. तर १ च्या समोरील पृष्ठ कोणते?',
      options: ['Face 3', 'Face 4', 'Face 2', 'Face 6'],
      correct: 0,
      explanation: '1-skip rule: Face 1 is opposite to Face 3. Face 2 is opposite to Face 4.',
      explanationMr: 'एकाआड एक नियम: १ च्या समोरील पृष्ठ ३ असेल.'
    },
    {
      id: 'nv_q4',
      examTag: 'MPSC Group C',
      difficulty: 'Medium',
      q: 'What is the mirror image of the word "MOM"?',
      questionMr: '"MOM" या शब्दाची आरशातील प्रतिमा कोणती?',
      options: ['MOM', 'WOW', 'NON', 'MOOW'],
      correct: 0,
      explanation: 'M, O, M are all laterally symmetric letters. Mirrored MOM remains MOM.',
      explanationMr: 'M आणि O ही अक्षरे आरशात बदलत नाहीत, त्यामुळे MOM तसेच MOM दिसेल.'
    }
  ]
};
