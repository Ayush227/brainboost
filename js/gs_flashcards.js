/* ============================================================
   BrainBoost – gs_flashcards.js
   100 High-Yield 3D Flashcards for MPSC & Talathi Bharti
   20 History | 20 Geography | 20 Economy | 20 Polity | 20 Science
   ============================================================ */

window.MPSC_GS = window.MPSC_GS || { oneLiners: [], shortTricks: [], flashcards: [] };

window.MPSC_GS.flashcards = [
  // ── HISTORY FLASHCARDS (1 to 20) ──
  {
    id: 'fc_01', subject: 'history',
    q: 'सत्यशोधक समाजाची स्थापना कोणी, केव्हा व कोठे केली?',
    qEn: 'Who founded Satyashodhak Samaj, when and where?',
    a: 'महात्मा ज्योतिराव फुले यांनी २४ सप्टेंबर १८७३ रोजी पुणे येथे केली.',
    aEn: 'Mahatma Jyotirao Phule on 24 September 1873 in Pune.',
    tip: 'ब्रीदवाक्य: "सर्वसाक्षी जगत्पती । त्याला नकोच मध्यस्थी ॥"'
  },
  {
    id: 'fc_02', subject: 'history',
    q: 'मराठी वृत्तपत्रसृष्टीचे जनक कोणास म्हणतात आणि पहिले वृत्तपत्र कोणते?',
    qEn: 'Who is known as father of Marathi journalism and what was the first newspaper?',
    a: 'बाळशास्त्री जांभेकर; पहिले वृत्तपत्र "दर्पण" (६ जानेवारी १८३२).',
    aEn: 'Balshastri Jambhekar; first newspaper "Darpan" (6 January 1832).',
    tip: '६ जानेवारी हा दिवस महाराष्ट्रात "पत्रकार दिन" म्हणून साजरा केला जातो.'
  },
  {
    id: 'fc_03', subject: 'history',
    q: 'भारतात मुलींची पहिली शाळा कोणी व कधी सुरू केली?',
    qEn: 'Who started India\'s first girls\' school and when?',
    a: '१८४८ मध्ये भिडे वाडा, पुणे येथे सावित्रीबाई फुले व महात्मा ज्योतिराव फुले यांनी.',
    aEn: 'In 1848 at Bhide Wada, Pune by Savitribai Phule & Mahatma Jyotirao Phule.',
    tip: '३ जानेवारी (सावित्रीबाई फुले जयंती) हा दिवस "बालिका दिन" म्हणून साजरा होतो.'
  },
  {
    id: 'fc_04', subject: 'history',
    q: 'कोल्हापुरात मागासवर्गीयांसाठी ५०% आरक्षण जाहीर करणारे छत्रपती कोण?',
    qEn: 'Which king announced 50% reservation for backward classes in Kolhapur?',
    a: 'राजर्षी छत्रपती शाहू महाराज (२६ जुलै १९०२).',
    aEn: 'Rajarshi Chhatrapati Shahu Maharaj on 26 July 1902.',
    tip: '२६ जुलै हा दिवस महाराष्ट्रात "सामाजिक न्याय दिन" म्हणून पाळला जातो.'
  },
  {
    id: 'fc_05', subject: 'history',
    q: 'डॉ. बाबासाहेब आंबेडकरांनी ऐतिहासिक महाड चवदार तळे सत्याग्रह कधी केला?',
    qEn: 'When did Dr. B.R. Ambedkar lead the historic Mahad Satyagraha?',
    a: '२० मार्च १९२७ रोजी (हा दिवस "सामाजिक सक्षमीकरण दिन" म्हणून साजरा होतो).',
    aEn: '20 March 1927 (celebrated as Social Empowerment Day).',
    tip: '२५ डिसेंबर १९२७ रोजी महाड येथेच मनुस्मृतीचे दहन करण्यात आले.'
  },
  {
    id: 'fc_06', subject: 'history',
    q: 'काँग्रेसचे पहिले ग्रामीण अधिवेशन कोठे व कोणाच्या अध्यक्षतेखाली भरले?',
    qEn: 'Where was INC\'s first rural session held and who presided?',
    a: '१९३६ मध्ये फैजपूर (जळगाव) येथे पंडित जवाहरलाल नेहरू यांच्या अध्यक्षतेखाली.',
    aEn: 'At Faizpur (Jalgaon) in 1936 under Pt. Jawaharlal Nehru.',
    tip: 'हे भारतीय राष्ट्रीय काँग्रेसचे ५० वे (सुवर्ण महोत्सवी) अधिवेशन होते.'
  },
  {
    id: 'fc_07', subject: 'history',
    q: 'महाराष्ट्रात आद्यक्रांतिकारक म्हणून कोणास ओळखले जाते?',
    qEn: 'Who is regarded as the first revolutionary (Adya Krantikarak) of Maharashtra?',
    a: 'उमाजी नाईक (३ फेब्रुवारी १८३४ रोजी पुण्यात फाशी देण्यात आली).',
    aEn: 'Umaji Naik (hanged on 3 February 1834 in Pune).',
    tip: 'त्यांनी ब्रिटिशांविरुद्ध पहिला सशस्त्र जाहीरनामा काढला होता.'
  },
  {
    id: 'fc_08', subject: 'history',
    q: '१८५७ च्या उठावात सातारच्या छत्रपतींची बाजू मांडण्यासाठी लंडनला गेलेले वकील कोण?',
    qEn: 'Who went to London to advocate the cause of Satara\'s Chhatrapati during the 1857 era?',
    a: 'रंगा बापूजी गुप्ते.',
    aEn: 'Ranga Bapuji Gupte.',
    tip: 'सातारा हे डलहौसीने १८४८ मध्ये खालसा केलेले भारतातील पहिले संस्थान होते.'
  },
  {
    id: 'fc_09', subject: 'history',
    q: '"शेतकऱ्यांचा आसूड" आणि "गुलामगिरी" या ग्रंथांचे लेखक कोण आहेत?',
    qEn: 'Who authored "Shetkaryancha Asud" and "Gulamgiri"?',
    a: 'महात्मा ज्योतिराव फुले.',
    aEn: 'Mahatma Jyotirao Phule.',
    tip: '"गुलामगिरी" हे पुस्तक अमेरिकेतील निग्रो दास्यमुक्ती लढ्याला अर्पण केले.'
  },
  {
    id: 'fc_10', subject: 'history',
    q: 'महर्षी धोंडो केशव कर्वे यांनी महिला विद्यापीठाची स्थापना कधी केली?',
    qEn: 'When did Maharshi Dhondo Keshav Karve establish SNDT Women\'s University?',
    a: '१९१६ मध्ये मुंबई/पुणे येथे (एसएनडीटी महिला विद्यापीठ).',
    aEn: 'In 1916 at Pune/Mumbai (SNDT Women\'s University).',
    tip: 'त्यांना १९५८ मध्ये वयाच्या १०० व्या वर्षी भारतरत्न प्रदान करण्यात आला.'
  },
  {
    id: 'fc_11', subject: 'history',
    q: 'गोपाळ गणेश आगरकर यांनी १८८८ मध्ये कोणते स्वतंत्र वृत्तपत्र सुरू केले?',
    qEn: 'Which independent newspaper did Gopal Ganesh Agarkar start in 1888?',
    a: '"सुधारक" (Sudharak - ब्रीदवाक्य: "इष्ट असेल ते बोलणार, साध्य असेल ते करणार").',
    aEn: '"Sudharak" (Motto: "Will speak what is right, will do what is achievable").',
    tip: 'त्यापूर्वी ते लोकमान्य टिळकांच्या \'केसरी\' चे पहिले संपादक होते.'
  },
  {
    id: 'fc_12', subject: 'history',
    q: 'पुणे करारावर (Poona Pact) कोणाच्या स्वाक्षऱ्या झाल्या व कधी झाला?',
    qEn: 'Who signed the Poona Pact and when?',
    a: '२४ सप्टेंबर १९३२ रोजी येरवडा जेलमध्ये डॉ. आंबेडकर व पं. मदनमोहन मालवीय (गांधीजींच्या वतीने).',
    aEn: '24 September 1932 at Yerwada Jail by Dr. Ambedkar & Pt. Madan Mohan Malaviya.',
    tip: 'यात स्वतंत्र मतदारसंघांऐवजी राखीव जागांची संख्या ७१ वरून १४८ करण्यात आली.'
  },
  {
    id: 'fc_13', subject: 'history',
    q: 'प्रतिसरकारची (क्रांतिसिंह नाना पाटील) स्थापना कोठे व कधी झाली?',
    qEn: 'Where and when was the Prati-Sarkar established by Krantisinh Nana Patil?',
    a: '१९४२ च्या चले जाव चळवळीदरम्यान सातारा जिल्ह्यात.',
    aEn: 'In Satara district during the Quit India Movement of 1942.',
    tip: 'याच्या सशस्त्र दलाला \'तुफान सेना\' (जी. डी. बापू लाड) म्हटले जात असे.'
  },
  {
    id: 'fc_14', subject: 'history',
    q: 'संयुक्त महाराष्ट्र चळवळीत किती हुतात्म्यांनी बलिदान दिले?',
    qEn: 'How many martyrs sacrificed their lives in the Samyukta Maharashtra Movement?',
    a: '१०६ हुतात्मे (फ्लोरा फाउंटन, मुंबई येथे हुतात्मा स्मारक आहे).',
    aEn: '106 martyrs (Martyrs\' Memorial at Flora Fountain, Mumbai).',
    tip: '१ मे १९६० रोजी मुंबईसह संयुक्त महाराष्ट्र राज्याची स्थापना झाली.'
  },
  {
    id: 'fc_15', subject: 'history',
    q: 'भारतीय राष्ट्रीय काँग्रेसची स्थापना कधी व कोठे झाली?',
    qEn: 'When and where was the Indian National Congress founded?',
    a: '२८ डिसेंबर १८८५ रोजी गोकुळदास तेजपाल संस्कृत कॉलेज, मुंबई येथे (७२ प्रतिनिधी).',
    aEn: '28 December 1885 at Gokuldas Tejpal Sanskrit College, Mumbai (72 delegates).',
    tip: 'पहिले अध्यक्ष: व्योमेशचंद्र बॅनर्जी; संस्थापक: अ‍ॅलन ऑक्टाव्हियन ह्यूम (A.O. Hume).'
  },
  {
    id: 'fc_16', subject: 'history',
    q: '१८५७ च्या उठावास "पहिले भारतीय स्वातंत्र्यसमर" असे कोणी म्हटले?',
    qEn: 'Who described the 1857 Revolt as the "First War of Indian Independence"?',
    a: 'स्वातंत्र्यवीर विनायक दामोदर सावरकर यांनी (लंडनमध्ये १९०९ मध्ये ग्रंथ लिहिला).',
    aEn: 'Swatantryaveer Vinayak Damodar Savarkar in his 1909 book.',
    tip: 'त्यांनी १९०४ मध्ये नाशिक येथे \'अभिनव भारत\' या क्रांतिकारक संघटनेची स्थापना केली.'
  },
  {
    id: 'fc_17', subject: 'history',
    q: 'शाहू महाराजांनी कोल्हापूर संस्थानात प्राथमिक शिक्षण मोफत व सक्तीचे कधी केले?',
    qEn: 'When did Shahu Maharaj make primary education free and compulsory in Kolhapur?',
    a: '१९१७ मध्ये ऐतिहासिक कायदा करून.',
    aEn: 'In 1917 by passing a historic statutory enactment.',
    tip: 'त्यांनी अस्पृश्य विद्यार्थ्यांसाठी \'मिस क्लार्क वसतिगृह\' स्थापन केले.'
  },
  {
    id: 'fc_18', subject: 'history',
    q: 'पंडिता रमाबाई यांनी विधवा व निराधार महिलांसाठी पुण्यात कोणती संस्था सुरू केली?',
    qEn: 'Which institution did Pandita Ramabai start in Pune for widows and destitute women?',
    a: 'शारदा सदन (१८८९) आणि मुक्ती सदन (केडगाव).',
    aEn: 'Sharada Sadan (1889) and Mukti Sadan (Kedgaon).',
    tip: 'त्यांचे प्रसिद्ध पुस्तक: "The High-Caste Hindu Woman" (१८८७).'
  },
  {
    id: 'fc_19', subject: 'history',
    q: 'गांधीजींनी १९३० चा ऐतिहासिक मिठाचा सत्याग्रह कुठून सुरू केला?',
    qEn: 'From where did Mahatma Gandhi start the historic Salt March in 1930?',
    a: '१२ मार्च १९३० रोजी साबरमती आश्रम ते दांडी (६ एप्रिल रोजी मीठ उचलून कायदा मोडला).',
    aEn: 'From Sabarmati Ashram on 12 March 1930 to Dandi (broke law on 6 April).',
    tip: 'महाराष्ट्रात वडाळा, शिरोडा आणि मालवण येथे मिठाचे मोठे सत्याग्रह झाले.'
  },
  {
    id: 'fc_20', subject: 'history',
    q: 'हैदराबाद मुक्तिसंग्राम कोणत्या लष्करी कारवाईद्वारे यशस्वी झाला?',
    qEn: 'Through which military operation was Hyderabad Princely State liberated?',
    a: '"ऑपरेशन पोलो" (पोलीस कारवाई - १३ ते १७ सप्टेंबर १९४८).',
    aEn: '"Operation Polo" (Police action - 13 to 17 September 1948).',
    tip: '१७ सप्टेंबर हा दिवस "मराठवाडा मुक्ती संग्राम दिन" म्हणून साजरा केला जातो.'
  },

  // ── GEOGRAPHY FLASHCARDS (21 to 40) ──
  {
    id: 'fc_21', subject: 'geography',
    q: 'महाराष्ट्रातील सर्वोच्च पर्वतशिखर कोणते आणि त्याची उंची किती?',
    qEn: 'What is the highest mountain peak in Maharashtra and its elevation?',
    a: 'कळसूबाई (अहमदनगर जिल्हा), उंची १,६४६ मीटर.',
    aEn: 'Kalsubai (Ahmednagar district), elevation 1,646 meters.',
    tip: 'दुसऱ्या क्रमांकाचे सर्वोच्च शिखर: साल्हेर (१,५६७ मी., नाशिक).'
  },
  {
    id: 'fc_22', subject: 'geography',
    q: 'महाराष्ट्राचा सर्वात जास्त क्षेत्र व्यापलेला नदीचे खोरे कोणते?',
    qEn: 'Which river basin covers the largest area in Maharashtra?',
    a: 'गोदावरी खोरे (महाराष्ट्राचे सुमारे ४९% क्षेत्र व्यापते).',
    aEn: 'Godavari Basin (covers ~49% of Maharashtra\'s geographical area).',
    tip: 'गोदावरीस \'दक्षिणेची गंगा\' किंवा \'वृद्ध गंगा\' मानले जाते.'
  },
  {
    id: 'fc_23', subject: 'geography',
    q: 'मुंबई ते नाशिक दरम्यान राष्ट्रीय महामार्गावर कोणता महत्त्वाचा घाट लागतो?',
    qEn: 'Which major pass connects Mumbai to Nashik on the National Highway?',
    a: 'थळ घाट (कसारा घाट).',
    aEn: 'Thal Ghat (Kasara Ghat).',
    tip: 'मुंबई ते पुणे दरम्यान \'बोर घाट\' (खंडाळा घाट) लागतो.'
  },
  {
    id: 'fc_24', subject: 'geography',
    q: 'महाराष्ट्रात सर्वाधिक पाऊस कोठे पडतो आणि त्यास काय म्हणतात?',
    qEn: 'Which place receives highest rainfall in Maharashtra and what is it called?',
    a: 'आंबोली (सिंधुदुर्ग जिल्हा, सरासरी सुमारे ७५० सेमी); यास "महाराष्ट्राचे चेरापुंजी" म्हणतात.',
    aEn: 'Amboli (Sindhudurg district, ~750 cm); called "Cherrapunji of Maharashtra".',
    tip: 'सह्याद्रीच्या पश्चिमेकडील उतारावर प्रतिरोध (Orographic) प्रकारचा पाऊस पडतो.'
  },
  {
    id: 'fc_25', subject: 'geography',
    q: 'दख्खनच्या पठारावरील रेगूर मृदा कोणत्या खडकाच्या विदारणातून तयार झाली आहे?',
    qEn: 'Regur soil of Deccan Plateau is formed by weathering of which rock?',
    a: 'बेसाल्ट (ज्वालामुखीच्या लाव्हापासून बनलेला अग्निजन्य खडक).',
    aEn: 'Basalt (volcanic igneous rock).',
    tip: 'रेगूर मृदेत ओलावा टिकवून ठेवण्याची प्रचंड क्षमता असते (कापसाची काळी माती).'
  },
  {
    id: 'fc_26', subject: 'geography',
    q: 'महाराष्ट्रात जांभी मृदा (Laterite Soil) प्रामुख्याने कोणत्या जिल्ह्यांत आढळते?',
    qEn: 'In which districts is Laterite Soil predominantly found in Maharashtra?',
    a: 'रत्नागिरी, सिंधुदुर्ग आणि कोल्हापूर-सातारा जिल्ह्यांच्या पश्चिम भागात.',
    aEn: 'Ratnagiri, Sindhudurg, and western parts of Kolhapur and Satara.',
    tip: 'जांभी मृदा काजू, आंबा आणि मसाल्यांच्या पिकांसाठी अत्यंत उपयुक्त असते.'
  },
  {
    id: 'fc_27', subject: 'geography',
    q: 'महाराष्ट्रातील उल्कापातामुळे निर्माण झालेले खाऱ्या पाण्याचे सरोवर कोणते?',
    qEn: 'Which saltwater lake in Maharashtra was formed by a meteorite impact?',
    a: 'लोणार सरोवर (बुलढाणा जिल्हा) - आंतरराष्ट्रीय रामसर स्थळ.',
    aEn: 'Lonar Lake (Buldhana district) - Ramsar Wetland site.',
    tip: 'हे बेसॉल्ट खडकातील जगातील एकमेव हायपर-व्हेलॉसिटी उल्का आघाती सरोवर आहे.'
  },
  {
    id: 'fc_28', subject: 'geography',
    q: 'कोयना जलविद्युत प्रकल्पास महाराष्ट्राची काय म्हटले जाते?',
    qEn: 'Koyna Hydroelectric Project is referred to as what of Maharashtra?',
    a: 'महाराष्ट्राची "भाग्यलक्ष्मी" (Bhagyalakshmi of Maharashtra).',
    aEn: '"Bhagyalakshmi of Maharashtra" (largest hydroelectric power station).',
    tip: 'कोयना धरणाच्या जलाशयाला \'शिवाजी सागर\' म्हणतात.'
  },
  {
    id: 'fc_29', subject: 'geography',
    q: 'महाराष्ट्रातील कोणते शहर "विद्येचे माहेरघर" आणि "पूर्वेचे ऑक्सफर्ड" म्हणून ओळखले जाते?',
    qEn: 'Which city in Maharashtra is known as "Oxford of the East"?',
    a: 'पुणे शहर.',
    aEn: 'Pune city.',
    tip: 'नागपूरला \'संत्र्यांची राजधानी\' आणि नाशिकला \'द्राक्षांची / वाईन राजधानी\' म्हणतात.'
  },
  {
    id: 'fc_30', subject: 'geography',
    q: 'भारतातील पहिले अणुऊर्जा केंद्र महाराष्ट्रात कोठे स्थापन झाले?',
    qEn: 'Where was India\'s first nuclear power station established in Maharashtra?',
    a: 'तारापूर (पालघर जिल्हा, १९६९ मध्ये अमेरिकेच्या सहकार्याने).',
    aEn: 'Tarapur (Palghar district, in 1969 with US assistance).',
    tip: 'हे आशियातील सर्वात पहिले व्यावसायिक अणुऊर्जा केंद्र होते.'
  },
  {
    id: 'fc_31', subject: 'geography',
    q: 'महाराष्ट्रातील सर्वात लांब पश्चिमेकडे वाहणारी नदी कोणती?',
    qEn: 'Which is the longest west-flowing river in Maharashtra?',
    a: 'तापी नदी (महाराष्ट्रातील लांबी सुमारे २०८ किमी, उगम: बैतुल, मध्य प्रदेश).',
    aEn: 'Tapi River (~208 km in MH, origin at Multai/Betul in Madhya Pradesh).',
    tip: 'तापी खोऱ्याने महाराष्ट्राचे सुमारे १०% क्षेत्र व्यापले आहे.'
  },
  {
    id: 'fc_32', subject: 'geography',
    q: 'भीमा नदीचा उगम कोठे होतो आणि तिचे प्रसिद्ध धार्मिक ठिकाण कोणते?',
    qEn: 'Where does the Bhima River originate and what is its famous pilgrimage town?',
    a: 'भीमाशंकर (पुणे, १२ ज्योतिर्लिंगांपैकी एक); पंढरपुरात हिला \'चंद्रभागा\' म्हणतात.',
    aEn: 'Bhimashankar (Pune, Jyotirlinga); called \'Chandrabhaga\' at Pandharpur.',
    tip: 'सोलापूर जिल्ह्यात उजनी धरण भीमा नदीवर बांधण्यात आले आहे.'
  },
  {
    id: 'fc_33', subject: 'geography',
    q: 'महाराष्ट्रातील पहिले राष्ट्रीय उद्यान कोणते आणि ते कोठे आहे?',
    qEn: 'Which was Maharashtra\'s first National Park and where is it located?',
    a: 'ताडोबा राष्ट्रीय उद्यान (१९५५, चंद्रपूर जिल्हा).',
    aEn: 'Tadoba National Park (1955, Chandrapur district).',
    tip: 'ताडोबा-अंधारी हा महाराष्ट्रातील प्रसिद्ध व्याघ्र प्रकल्प (Tiger Reserve) आहे.'
  },
  {
    id: 'fc_34', subject: 'geography',
    q: 'महाराष्ट्रातील कोणत्या जिल्ह्यामध्ये वनांचे प्रमाण (टक्केवारी) सर्वाधिक आहे?',
    qEn: 'Which district in Maharashtra has the highest forest cover percentage?',
    a: 'गडचिरोली (सुमारे ६८% क्षेत्र वनाच्छादित).',
    aEn: 'Gadchiroli district (~68% geographical area under forest).',
    tip: 'सर्वात कमी वनक्षेत्र लातूर जिल्ह्यात (१ टक्क्यापेक्षा कमी) आहे.'
  },
  {
    id: 'fc_35', subject: 'geography',
    q: 'महाराष्ट्राचा समुद्रकिनारा किती किमी लांबीचा आहे?',
    qEn: 'What is the total coastline length of Maharashtra?',
    a: '७२० किलोमीटर (अरबी समुद्राला लागून असलेला किनारा).',
    aEn: '720 kilometers along the Arabian Sea.',
    tip: 'सर्वाधिक समुद्रकिनारा रत्नागिरी जिल्ह्याला (२३७ किमी) लाभला आहे.'
  },
  {
    id: 'fc_36', subject: 'geography',
    q: 'महाराष्ट्राचे राज्य प्राणी, राज्य पक्षी आणि राज्य फुलपाखरू कोणते?',
    qEn: 'What are Maharashtra\'s State Animal, State Bird, and State Butterfly?',
    a: 'प्राणी: शेकरू (मोठी खार), पक्षी: हरियाल (हळद्या), फुलपाखरू: ब्लू मॉर्मॉन (Blue Mormon).',
    aEn: 'Animal: Shekru (Giant Squirrel); Bird: Hariyal; Butterfly: Blue Mormon.',
    tip: 'राज्य वृक्ष: आंबा; राज्य फूल: ताम्हण (जारूल).'
  },
  {
    id: 'fc_37', subject: 'geography',
    q: 'महाराष्ट्रातील कोणते थंड हवेचे ठिकाण "विदर्भाचे नंदनवन" म्हणून ओळखले जाते?',
    qEn: 'Which hill station is known as the "Nandanvan of Vidarbha"?',
    a: 'चिखलदरा (अमरावती जिल्हा, सातपुडा पर्वत / गाविलगड टेकड्या).',
    aEn: 'Chikhaldara (Amravati district, Satpura range / Gawilgarh hills).',
    tip: 'हे महाराष्ट्रातील एकमेव कॉफी उत्पादक थंड हवेचे ठिकाण आहे.'
  },
  {
    id: 'fc_38', subject: 'geography',
    q: 'महाराष्ट्रात दगडी कोळशाचे मुख्य साठे कोणत्या नदीच्या खोऱ्यात आढळतात?',
    qEn: 'In which river valley are Maharashtra\'s major coal deposits found?',
    a: 'वर्धा-वैनगंगा आणि वणी-बल्लारपूर खोऱ्यात (चंद्रपूर, यवतमाळ, नागपूर).',
    aEn: 'Wardha-Wainganga valley (Chandrapur, Yavatmal, Nagpur).',
    tip: 'चंद्रपूर येथील बल्लारपूर हे कोळशाच्या खाणींसाठी व कागद गिरणीसाठी प्रसिद्ध आहे.'
  },
  {
    id: 'fc_39', subject: 'geography',
    q: 'माथेरान हे थंड हवेचे ठिकाण कोणत्या जिल्ह्यात आहे आणि त्याची विशेषता काय?',
    qEn: 'In which district is Matheran hill station located and its unique feature?',
    a: 'रायगड जिल्हा; वाहनांना पूर्ण बंदी असलेले आशियातील एकमेव प्रदूषणमुक्त पर्यटनस्थळ.',
    aEn: 'Raigad district; Asia\'s only automobile-free eco-sensitive hill station.',
    tip: 'नेरळ ते माथेरान दरम्यान धावणारी \'टॉय ट्रेन\' पर्यटकांचे आकर्षण आहे.'
  },
  {
    id: 'fc_40', subject: 'geography',
    q: 'गोदावरी आणि भीमा नद्यांच्या खोऱ्यांना वेगळी करणारी डोंगररांग कोणती?',
    qEn: 'Which mountain range separates the Godavari and Bhima river basins?',
    a: 'हरिश्चंद्र-बालाघाट डोंगररांग.',
    aEn: 'Harishchandra-Balaghat range.',
    tip: 'सातमाळा-अजिंठा रांग तापी व गोदावरी खोऱ्यांना वेगळी करते.'
  },

  // ── ECONOMY FLASHCARDS (41 to 60) ──
  {
    id: 'fc_41', subject: 'economy',
    q: 'भारतीय रिझर्व्ह बँकेची (RBI) स्थापना केव्हा व कोणत्या आयोगाच्या शिफारशीने झाली?',
    qEn: 'When was RBI established and on which Commission\'s recommendation?',
    a: '१ एप्रिल १९३५ रोजी हिल्टन यंग आयोगाच्या शिफारशीने (RBI Act 1934).',
    aEn: '1 April 1935 based on Hilton Young Commission (RBI Act 1934).',
    tip: 'RBI चे राष्ट्रीयीकरण १ जानेवारी १९४९ रोजी झाले; पहिले गव्हर्नर ऑस्बॉर्न स्मिथ होते.'
  },
  {
    id: 'fc_42', subject: 'economy',
    q: 'नाबार्डची (NABARD) स्थापना कोणत्या समितीच्या शिफारशीने व कधी झाली?',
    qEn: 'When and on whose recommendation was NABARD established?',
    a: '१२ जुलै १९८२ रोजी शिवरामन समितीच्या शिफारशीनुसार.',
    aEn: '12 July 1982 on the recommendation of B. Sivaraman Committee.',
    tip: 'मुख्यालय: मुंबई (कृषी व ग्रामीण विकासाची सर्वोच्च पुनर्वित्त बँक).'
  },
  {
    id: 'fc_43', subject: 'economy',
    q: 'भारतात १४ मोठ्या व्यापारी बँकांचे पहिले राष्ट्रीयीकरण कधी झाले?',
    qEn: 'When was the first nationalisation of 14 major commercial banks carried out?',
    a: '१९ जुलै १९६९ रोजी तत्कालीन पंतप्रधान इंदिरा गांधी यांच्या कार्यकाळात.',
    aEn: '19 July 1969 under PM Indira Gandhi (deposits above Rs 50 crore).',
    tip: 'दुसरे राष्ट्रीयीकरण १५ एप्रिल १९८० रोजी ६ बँकांचे करण्यात आले.'
  },
  {
    id: 'fc_44', subject: 'economy',
    q: 'नियोजन आयोगाऐवजी "नीती आयोग" (NITI Aayog) ची स्थापना कधी करण्यात आली?',
    qEn: 'When was NITI Aayog established replacing the Planning Commission?',
    a: '१ जानेवारी २०१५ रोजी; भारताचे पंतप्रधान त्याचे पदसिद्ध अध्यक्ष असतात.',
    aEn: '1 January 2015; Prime Minister of India is its ex-officio Chairman.',
    tip: 'NITI = National Institution for Transforming India (थिंक टँक).'
  },
  {
    id: 'fc_45', subject: 'economy',
    q: 'वस्तू व सेवा कर (GST) देशभरात कधी व कोणत्या घटनादुरुस्तीने लागू झाला?',
    qEn: 'When did GST come into effect in India and via which Amendment?',
    a: '१ जुलै २०१७ रोजी १०१ व्या घटनादुरुस्ती कायदा २०१६ द्वारे.',
    aEn: '1 July 2017 via 101st Constitutional Amendment Act 2016.',
    tip: 'GST कौन्सिलचे अध्यक्ष केंद्रीय अर्थमंत्री असतात (कलम २७९-अ).'
  },
  {
    id: 'fc_46', subject: 'economy',
    q: 'भारताचे नवीन आर्थिक धोरण (LPG धोरण) कधी व कोणाच्या काळात जाहीर झाले?',
    qEn: 'When was India\'s New Economic Policy (LPG) announced and by whom?',
    a: '२४ जुलै १९९१ (पंतप्रधान पी. व्ही. नरसिंह राव व अर्थमंत्री डॉ. मनमोहन सिंग).',
    aEn: '24 July 1991 (PM P.V. Narasimha Rao & FM Dr. Manmohan Singh).',
    tip: 'LPG = Liberalisation (उदारीकरण), Privatisation (खाजगीकरण), Globalisation (जागतिकीकरण).'
  },
  {
    id: 'fc_47', subject: 'economy',
    q: 'भारतीय राज्यघटनेत केंद्रीय अर्थसंकल्पास (Budget) अधिकृतपणे काय संबोधले आहे?',
    qEn: 'What is the Union Budget officially termed in the Indian Constitution?',
    a: 'कलम ११२ अन्वये "वार्षिक वित्तीय विवरणपत्र" (Annual Financial Statement).',
    aEn: 'Article 112: "Annual Financial Statement".',
    tip: 'घटनेत कुठेही \'Budget\' हा शब्द वापरलेला नाही; राज्यांचे बजेट कलम २०२ मध्ये आहे.'
  },
  {
    id: 'fc_48', subject: 'economy',
    q: 'राजकोषीय तूट (Fiscal Deficit) म्हणजे नेमके काय?',
    qEn: 'What exactly does Fiscal Deficit represent?',
    a: 'एकूण खर्च − एकूण महसूल (कर्ज वगळून) = सरकारचे एकूण कर्ज घेण्याचे प्रमाण.',
    aEn: 'Total Budget Expenditure − Total Receipts (excluding borrowings) = Net borrowing.',
    tip: 'हे सरकारचे त्या वर्षातील एकूण कर्ज उभारणीचे उद्दिष्ट दर्शवते.'
  },
  {
    id: 'fc_49', subject: 'economy',
    q: 'भारतातील पहिली पंचवार्षिक योजना कोणत्या मॉडेलवर आधारित होती?',
    qEn: 'On which model was India\'s First Five-Year Plan based?',
    a: 'हॅरॉड-डोमार मॉडेल (Harrod-Domar Model, १९५१-५६ - मुख्य भर कृषीवर).',
    aEn: 'Harrod-Domar Model (1951-56, primary focus on agriculture).',
    tip: 'दुसरी योजना पी. सी. महालनोबिस यांच्या जड उद्योग मॉडेलवर आधारित होती.'
  },
  {
    id: 'fc_50', subject: 'economy',
    q: 'भारतात हरितक्रांतीचे जनक कोणास मानले जाते?',
    qEn: 'Who is known as the Father of Green Revolution in India?',
    a: 'डॉ. एम. एस. स्वामीनाथन (१९६० च्या दशकात गव्हाच्या उच्च उत्पादन वाणांचा वापर).',
    aEn: 'Dr. M.S. Swaminathan (introduced High Yielding Varieties of wheat).',
    tip: 'महाराष्ट्रात हरितक्रांतीचे प्रणेते वसंतराव नाईक मानले जातात.'
  },
  {
    id: 'fc_51', subject: 'economy',
    q: 'भारतात श्वेतक्रांतीचे (Operation Flood / दुग्धक्रांती) जनक कोण आहेत?',
    qEn: 'Who is regarded as Father of White Revolution (Operation Flood) in India?',
    a: 'डॉ. व्हर्गिस कुरियन (अमुल - आणंद, गुजरात; राष्ट्रीय डेअरी विकास मंडळ).',
    aEn: 'Dr. Verghese Kurien (Amul / NDDB).',
    tip: '२६ नोव्हेंबर (त्यांची जयंती) हा "राष्ट्रीय दुग्ध दिन" म्हणून साजरा होतो.'
  },
  {
    id: 'fc_52', subject: 'economy',
    q: 'भारतातील पहिली प्रादेशिक ग्रामीण बँक (RRB) कोणती व कधी स्थापन झाली?',
    qEn: 'Which was India\'s first Regional Rural Bank (RRB) and when was it set up?',
    a: 'प्रथमा बँक (मुरादाबाद, उत्तर प्रदेश - २ ऑक्टोबर १९७५; प्रायोजक: सिंडिकेट बँक).',
    aEn: 'Prathama Bank (Moradabad, UP - 2 October 1975; sponsored by Syndicate Bank).',
    tip: 'नरसिंहम कार्यगटाच्या शिफारशीवरून RRBs ची स्थापना करण्यात आली.'
  },
  {
    id: 'fc_53', subject: 'economy',
    q: 'रेपो रेट (Repo Rate) म्हणजे काय?',
    qEn: 'What is Repo Rate in monetary economics?',
    a: 'ज्या व्याजदराने रिझर्व्ह बँक व्यापारी बँकांना अल्पमुदतीसाठी कर्ज पुरवते तो दर.',
    aEn: 'The rate at which RBI lends short-term funds to commercial banks.',
    tip: 'उलट: रिव्हर्स रेपो रेटवर RBI बँकांकडून अतिरिक्त निधी स्वीकारते.'
  },
  {
    id: 'fc_54', subject: 'economy',
    q: 'भारतामध्ये वित्तीय वर्ष (Financial Year) चा कालावधी कोणता असतो?',
    qEn: 'What is the period of Financial Year in India?',
    a: '१ एप्रिल ते ३१ मार्च.',
    aEn: '1 April to 31 March.',
    tip: 'RBI चे लेखा वर्षही आता १ एप्रिल ते ३१ मार्च असे भारत सरकारशी सुसंगत केले आहे.'
  },
  {
    id: 'fc_55', subject: 'economy',
    q: 'जनगणना २०११ नुसार महाराष्ट्राची एकूण साक्षरता टक्केवारी किती आहे?',
    qEn: 'What is Maharashtra\'s total literacy rate as per Census 2011?',
    a: '८२.३% (पुरुष साक्षरता: ८८.४%, स्त्री साक्षरता: ७५.९%).',
    aEn: '82.3% (Male: 88.4%, Female: 75.9%).',
    tip: 'भारताची सरासरी साक्षरता ७३.०% आहे.'
  },
  {
    id: 'fc_56', subject: 'economy',
    q: 'जनगणना २०११ नुसार महाराष्ट्रात सर्वाधिक लोकसंख्या असलेला जिल्हा कोणता?',
    qEn: 'Which was the most populous district in Maharashtra as per Census 2011?',
    a: 'ठाणे जिल्हा (१.१० कोटी - २०१४ मध्ये पालघर वेगळा होण्यापूर्वी).',
    aEn: 'Thane district (1.10 crore - before Palghar bifurcation in 2014).',
    tip: 'सध्या सर्वात जास्त लोकसंख्या पुणे जिल्ह्यात आहे.'
  },
  {
    id: 'fc_57', subject: 'economy',
    q: 'दारिद्र्य मोजण्यासाठी तेंडुलकर समितीने (२००९) कोणता निकष वापरला?',
    qEn: 'What criterion was recommended by the Tendulkar Committee (2009) for poverty?',
    a: 'मासिक दरडोई उपभोग खर्च (MPCE: ग्रामीण भागात रु. २७/दिवस, शहरी भागात रु. ३३/दिवस).',
    aEn: 'Monthly Per Capita Consumption Expenditure (MPCE: Rs 27 rural, Rs 33 urban per day).',
    tip: 'त्यांनी केवळ कॅलरी निकषाऐवजी शिक्षण व आरोग्याचा समावेश केला.'
  },
  {
    id: 'fc_58', subject: 'economy',
    q: 'भारतात चलनविषयक धोरण (Monetary Policy) कोण ठरवते?',
    qEn: 'Who determines the Monetary Policy in India?',
    a: 'RBI ची ६ सदस्यीय चलनविषयक धोरण समिती (Monetary Policy Committee - MPC).',
    aEn: '6-member Monetary Policy Committee (MPC) chaired by RBI Governor.',
    tip: 'MPC चे चलनवाढ लक्ष्य (Inflation Target) ४% (± २%) निश्चित केले आहे.'
  },
  {
    id: 'fc_59', subject: 'economy',
    q: 'भारतामध्ये चलनी नोटांवर (२ रुपयांपासून पुढे) कोणाची स्वाक्षरी असते?',
    qEn: 'Whose signature appears on Indian currency notes (Rs 2 and above)?',
    a: 'RBI चे गव्हर्नर (फक्त १ रुपयाच्या नोटेवर केंद्रीय वित्त सचिवांची स्वाक्षरी असते).',
    aEn: 'RBI Governor (only the 1 Rupee note bears the signature of Finance Secretary).',
    tip: '१ रुपयाची नोट व सर्व नाणी भारत सरकारकडून जारी केली जातात.'
  },
  {
    id: 'fc_60', subject: 'economy',
    q: 'पंतप्रधान जन धन योजना (PMJDY) चे घोषवाक्य काय आहे आणि ती कधी सुरू झाली?',
    qEn: 'What is the motto of Pradhan Mantri Jan Dhan Yojana and when was it launched?',
    a: '२८ ऑगस्ट २०१४; घोषवाक्य: "मेरा खाता, भाग्य विधाता".',
    aEn: '28 August 2014; Motto: "Mera Khata, Bhagya Vidhata".',
    tip: 'वित्तीय समावेशन (Financial Inclusion) साठी जगातील सर्वात मोठी योजना.'
  },

  // ── POLITY FLASHCARDS (61 to 80) ──
  {
    id: 'fc_61', subject: 'polity',
    q: 'डॉ. बाबासाहेब आंबेडकरांनी कोणत्या कलमास "घटनेचा आत्मा आणि हृदय" म्हटले?',
    qEn: 'Which Article was termed "Heart and Soul of Constitution" by Dr. Ambedkar?',
    a: 'कलम ३२ (घटनात्मक उपायांचा अधिकार - ५ प्राधिलेख / Writs).',
    aEn: 'Article 32 (Right to Constitutional Remedies - 5 Writs).',
    tip: 'उच्च न्यायालयात रिट्स कलम २२६ अन्वये दाखल केल्या जातात.'
  },
  {
    id: 'fc_62', subject: 'polity',
    q: 'राज्यघटनेच्या सरनाम्यात ४२ व्या घटनादुरुस्तीने (१९७६) कोणते ३ शब्द जोडले?',
    qEn: 'Which 3 words were added to the Preamble by the 42nd Amendment in 1976?',
    a: '"समाजवादी" (Socialist), "धर्मनिरपेक्ष" (Secular) आणि "अखंडता" (Integrity).',
    aEn: '"Socialist", "Secular", and "Integrity".',
    tip: 'सरनाम्यात आजवर फक्त एकदाच (१९७६ मध्ये) दुरुस्ती करण्यात आली आहे.'
  },
  {
    id: 'fc_63', subject: 'polity',
    q: 'महाराष्ट्रात पंचायत राज व्यवस्था केव्हा व कोणत्या समितीच्या अहवालानुसार लागू झाली?',
    qEn: 'When was Panchayati Raj adopted in Maharashtra and on which report?',
    a: '१ मे १९६२ रोजी वसंतराव नाईक समितीच्या शिफारशींनुसार (महाराष्ट्र ९ वे राज्य ठरले).',
    aEn: '1 May 1962 based on Vasantrao Naik Committee (9th state in India).',
    tip: 'भारतात पहिले राज्य राजस्थान (२ ऑक्टोबर १९५९, नागौर).'
  },
  {
    id: 'fc_64', subject: 'polity',
    q: 'ग्रामपंचायतीमध्ये लोकसंख्येनुसार किमान व कमाल सदस्य संख्या किती असते?',
    qEn: 'What is the minimum and maximum elected member strength of a Gram Panchayat?',
    a: 'किमान ७ आणि कमाल १७ सदस्य (विषम संख्या: ७, ९, ११, १३, १५, १७).',
    aEn: 'Minimum 7 and maximum 17 members (odd numbers: 7, 9, 11, 13, 15, 17).',
    tip: 'वॉर्ड व सदस्यसंख्या निश्चित करण्याचा अधिकार जिल्हाधिकाऱ्याला असतो.'
  },
  {
    id: 'fc_65', subject: 'polity',
    q: 'ग्रामपंचायतीचा पदसिद्ध सचिव कोण असतो आणि त्याची नियुक्ती कोण करते?',
    qEn: 'Who is the ex-officio Secretary of Gram Panchayat and who appoints him?',
    a: 'ग्रामसेवक; त्याची नियुक्ती जिल्हा परिषदेचे मुख्य कार्यकारी अधिकारी (CEO) करतात.',
    aEn: 'Gram Sevak; appointed by Chief Executive Officer (CEO) of Zilla Parishad.',
    tip: 'तो वर्ग-३ चा कर्मचारी असतो आणि त्याचे वेतन जिल्हा निधीतून दिले जाते.'
  },
  {
    id: 'fc_66', subject: 'polity',
    q: 'एका आर्थिक वर्षात ग्रामसभेच्या किमान किती बैठका होणे बंधनकारक आहे?',
    qEn: 'What is the minimum number of Gram Sabha meetings mandatory in a financial year?',
    a: 'किमान ४ बैठका (अध्यक्षस्थान सरपंच किंवा त्यांच्या अनुपस्थितीत उपसरपंच भूषवतात).',
    aEn: 'Minimum 4 meetings (presided over by Sarpanch or Up-Sarpanch).',
    tip: '२६ जानेवारी, १ मे, १५ ऑगस्ट आणि २ ऑक्टोबर या दिवशी सर्वसाधारणपणे बैठका होतात.'
  },
  {
    id: 'fc_67', subject: 'polity',
    q: 'स्थानिक स्वराज्य संस्थांमध्ये महिलांसाठी ५०% आरक्षण देणारे महाराष्ट्र कितवे राज्य होते?',
    qEn: 'Did Maharashtra introduce 50% reservation for women in local bodies?',
    a: 'होय, एप्रिल २०११ पासून महाराष्ट्रात स्थानिक स्वराज्य संस्थांत महिलांना ५०% आरक्षण आहे.',
    aEn: 'Yes, Maharashtra implemented 50% reservation for women in local bodies in April 2011.',
    tip: 'बिहार हे महिलांना ५०% आरक्षण देणारे देशातील पहिले राज्य होते (२००६).'
  },
  {
    id: 'fc_68', subject: 'polity',
    q: 'भारताच्या राष्ट्रपतींना पद व गोपनीयतेची शपथ कोण देतात?',
    qEn: 'Who administers the Oath of Office to the President of India?',
    a: 'सर्वोच्च न्यायालयाचे सरन्यायाधीश (CJI) किंवा त्यांच्या अनुपस्थितीत ज्येष्ठतम न्यायाधीश.',
    aEn: 'Chief Justice of India (CJI) or the seniormost available Judge of Supreme Court.',
    tip: 'कलम ६० अन्वये राष्ट्रपतींची शपथ विहित केली आहे.'
  },
  {
    id: 'fc_69', subject: 'polity',
    q: 'कोणते विधेयक धनविधेयक (Money Bill) आहे की नाही हे ठरवण्याचा अंतिम अधिकार कोणाचा?',
    qEn: 'Who has the final power to certify whether a bill is a Money Bill or not?',
    a: 'लोकसभा अध्यक्ष (Speaker of Lok Sabha - कलम ११०).',
    aEn: 'Speaker of Lok Sabha (Article 110).',
    tip: 'धनविधेयक केवळ राष्ट्रपतींच्या पूर्वसंमतीने प्रथम लोकसभेतच मांडता येते.'
  },
  {
    id: 'fc_70', subject: 'polity',
    q: 'संसदेच्या दोन्ही सभागृहांची संयुक्त बैठक (Joint Sitting) चे अध्यक्षपद कोण भूषवतात?',
    qEn: 'Who presides over the Joint Sitting of both Houses of Parliament?',
    a: 'लोकसभा अध्यक्ष (Speaker of Lok Sabha - कलम १०८).',
    aEn: 'Speaker of Lok Sabha (Article 108).',
    tip: 'संयुक्त बैठक राष्ट्रपती बोलावतात; धनविधेयक व घटनादुरुस्ती विधेयकावर संयुक्त बैठक नसते.'
  },
  {
    id: 'fc_71', subject: 'polity',
    q: 'राज्यसभेचे पदसिद्ध सभापती (Ex-officio Chairman) कोण असतात?',
    qEn: 'Who is the ex-officio Chairman of Rajya Sabha?',
    a: 'भारताचे उपराष्ट्रपती (कलम ६४ व ८९).',
    aEn: 'Vice-President of India (Article 64 & 89).',
    tip: 'उपराष्ट्रपती हे राज्यसभेचे सदस्य नसतात, त्यामुळे त्यांना सामान्य स्थितीत मतदानाचा हक्क नसतो.'
  },
  {
    id: 'fc_72', subject: 'polity',
    q: 'भारताच्या नियंत्रक व महालेखापरीक्षकाचा (CAG) कार्यकाळ किती वर्षांचा असतो?',
    qEn: 'What is the tenure of the Comptroller and Auditor General (CAG) of India?',
    a: '६ वर्षे किंवा वयाची ६५ वर्षे, यांपैकी जे आधी पूर्ण होईल तो (कलम १४८).',
    aEn: '6 years or up to 65 years of age, whichever is earlier (Article 148).',
    tip: 'CAG ला "सार्वजनिक तिजोरीचा संरक्षक" (Guardian of Public Purse) म्हणतात.'
  },
  {
    id: 'fc_73', subject: 'polity',
    q: 'मतदानाचे वय २१ वरून १८ वर्षे कोणत्या घटनादुरुस्तीने करण्यात आले?',
    qEn: 'Which Constitutional Amendment lowered the voting age from 21 to 18 years?',
    a: '६१ वी घटनादुरुस्ती कायदा १९८८ (अंमलबजावणी मार्च १९८९ - कलम ३२६).',
    aEn: '61st Constitutional Amendment Act 1988 (implemented March 1989 - Article 326).',
    tip: 'राजीव गांधी यांच्या कार्यकाळात हा महत्त्वपूर्ण निर्णय घेण्यात आला.'
  },
  {
    id: 'fc_74', subject: 'polity',
    q: 'माहितीचा अधिकार कायदा (RTI Act) भारतात केव्हापासून लागू झाला?',
    qEn: 'When did the Right to Information (RTI) Act come into force in India?',
    a: '१२ ऑक्टोबर २००५ पासून.',
    aEn: 'From 12 October 2005.',
    tip: 'माहिती मिळण्याचा सर्वसाधारण कालावधी ३० दिवस; जीवन व स्वातंत्र्याशी संबंधित ४८ तास.'
  },
  {
    id: 'fc_75', subject: 'polity',
    q: 'महाराष्ट्र विधानसभेची व विधानपरिषदेची सदस्यसंख्या किती आहे?',
    qEn: 'What is the strength of Maharashtra Legislative Assembly and Council?',
    a: 'विधानसभा: २८८ सदस्य; विधानपरिषद: ७८ सदस्य.',
    aEn: 'Assembly (Vidhan Sabha): 288 members; Council (Vidhan Parishad): 78 members.',
    tip: 'विधानसभेत SC साठी २९ आणि ST साठी २५ जागा राखीव आहेत.'
  },
  {
    id: 'fc_76', subject: 'polity',
    q: 'भारतात प्रथमच लोकायुक्त संस्था स्थापन करणारे राज्य कोणते?',
    qEn: 'Which was the first state in India to establish the institution of Lokayukta?',
    a: 'महाराष्ट्र राज्य (१९७१ मध्ये कायदा, पहिले लोकायुक्त न्या. एस. पी. कोतवाल).',
    aEn: 'Maharashtra (1971 Act, First Lokayukta: Justice S.P. Kotval).',
    tip: 'भ्रष्टाचाराविरुद्ध जनतेच्या तक्रारींची दखल घेणारी ही स्वायत्त संस्था आहे.'
  },
  {
    id: 'fc_77', subject: 'polity',
    q: 'जमीन महसूल कारभारात गाव नमुना ७ आणि गाव नमुना १२ चा अर्थ काय?',
    qEn: 'What do Village Form VII and Village Form XII represent in 7/12 extract?',
    a: 'गाव नमुना ७: जमिनीचा मालकी हक्क; गाव नमुना १२: पिकांची नोंद व क्षेत्र.',
    aEn: 'Form VII: Ownership & rights record; Form XII: Crop inspection register.',
    tip: '७/१२ उतारा तयार करणे व अद्ययावत ठेवणे हे तलाठ्याचे मुख्य कर्तव्य आहे.'
  },
  {
    id: 'fc_78', subject: 'polity',
    q: 'राष्ट्रपती वटहुकूम (Ordinance) कोणत्या कलमाखाली काढू शकतात?',
    qEn: 'Under which Article can the President promulgate an Ordinance?',
    a: 'कलम १२३ (राज्यपाल कलम २१३ अन्वये वटहुकूम काढतात).',
    aEn: 'Article 123 (Governor issues Ordinance under Article 213).',
    tip: 'संसदेचे अधिवेशन सुरू झाल्यानंतर ६ आठवड्यांच्या आत त्यास संसदेची मान्यता लागते.'
  },
  {
    id: 'fc_79', subject: 'polity',
    q: 'भारतीय राज्यघटनेत मूलभूत कर्तव्ये कोणत्या समितीच्या शिफारशीने जोडली गेली?',
    qEn: 'Fundamental Duties were added to Constitution on whose recommendation?',
    a: 'स्वर्णसिंग समिती (४२ वी घटनादुरुस्ती १९७६ - कलम ५१-अ, भाग ४-अ).',
    aEn: 'Swaran Singh Committee (42nd Amendment 1976 - Article 51A, Part IVA).',
    tip: 'सध्या एकूण ११ मूलभूत कर्तव्ये आहेत (११ वे कर्तव्य ८६ व्या दुरुस्तीने २००२ मध्ये जोडले).'
  },
  {
    id: 'fc_80', subject: 'polity',
    q: 'राष्ट्रीय पंचायत राज दिन दरवर्षी कोणत्या तारखेला साजरा केला जातो?',
    qEn: 'On which date is National Panchayati Raj Day celebrated annually in India?',
    a: '२४ एप्रिल (कारण ७३ वा घटनादुरुस्ती कायदा २४ एप्रिल १९९३ रोजी अंमलात आला).',
    aEn: '24 April (73rd Constitutional Amendment Act came into force on 24 April 1993).',
    tip: 'पंचायतीसाठी राज्यघटनेत ११ वी अनुसूची (२९ विषय) समाविष्ट आहे.'
  },

  // ── SCIENCE FLASHCARDS (81 to 100) ──
  {
    id: 'fc_81', subject: 'science',
    q: 'कोणता रक्तगट "सर्वयोग्य दाता" (Universal Donor) मानला जातो?',
    qEn: 'Which blood group is regarded as the Universal Donor?',
    a: 'ओ निगेटिव्ह (O negative).',
    aEn: 'O negative.',
    tip: 'एबी पॉझिटिव्ह (AB+) हा "सर्वयोग्य ग्राहक" (Universal Recipient) आहे.'
  },
  {
    id: 'fc_82', subject: 'science',
    q: 'स्कर्व्ही (हिरड्यांमधून रक्त येणे) हा आजार कोणत्या जीवनसत्वाच्या कमतरतेमुळे होतो?',
    qEn: 'Deficiency of which vitamin causes Scurvy?',
    a: 'व्हिटॅमिन सी (अ‍ॅस्कॉर्बिक अ‍ॅसिड); आवळा हा त्याचा सर्वोत्तम नैसर्गिक स्रोत आहे.',
    aEn: 'Vitamin C (Ascorbic Acid); Amla is the richest natural source.',
    tip: 'अन्न शिजवताना उष्णतेमुळे व्हिटॅमिन सी सर्वात आधी नष्ट होते.'
  },
  {
    id: 'fc_83', subject: 'science',
    q: 'निकटदृष्टिता (Myopia) दोष दूर करण्यासाठी चष्म्यात कोणते भिंग वापरतात?',
    qEn: 'Which lens is used in spectacles to correct Myopia (Short-sightedness)?',
    a: 'अंतर्गोल भिंग (Concave Lens).',
    aEn: 'Concave Lens.',
    tip: 'दूरदृष्टिता (Hypermetropia) दूर करण्यासाठी बहिर्गोल भिंग (Convex Lens) वापरतात.'
  },
  {
    id: 'fc_84', subject: 'science',
    q: 'खाण्याचा सोडा आणि धुण्याचा सोडा यांची रासायनिक नावे कोणती?',
    qEn: 'What are the chemical names of Baking Soda and Washing Soda?',
    a: 'खाण्याचा सोडा: सोडियम बायकार्बोनेट (NaHCO₃); धुण्याचा: सोडियम कार्बोनेट (Na₂CO₃·10H₂O).',
    aEn: 'Baking: Sodium Bicarbonate (NaHCO₃); Washing: Sodium Carbonate (Na₂CO₃·10H₂O).',
    tip: 'बायकार्बोनेट = घरात खाण्याचा स्वयंपाक \'बाय\' करते म्हणून NaHCO₃.'
  },
  {
    id: 'fc_85', subject: 'science',
    q: 'कक्ष तापमानाला (Room Temp) द्रव अवस्थेत आढळणारा एकमेव धातू आणि अधातू कोणता?',
    qEn: 'Which is the only liquid metal and only liquid non-metal at room temperature?',
    a: 'द्रव धातू: पारा (Mercury - Hg); द्रव अधातू: ब्रोमीन (Bromine - Br).',
    aEn: 'Liquid metal: Mercury (Hg); Liquid non-metal: Bromine (Br).',
    tip: 'पारा हा थर्मामीटर व बॅरोमीटरमध्ये वापरला जातो.'
  },
  {
    id: 'fc_86', subject: 'science',
    q: 'पेशीचे "ऊर्जा केंद्र" (Powerhouse of the Cell) कोणास म्हटले जाते?',
    qEn: 'Which organelle is known as the Powerhouse of the Cell?',
    a: 'तंतुकणिका (Mitochondria) - येथे ATP च्या स्वरूपात ऊर्जा निर्माण होते.',
    aEn: 'Mitochondria (generates cellular energy in the form of ATP).',
    tip: 'लयकारिका (Lysosomes) यांना पेशीच्या \'आत्मघाती पिशव्या\' (Suicide Bags) म्हणतात.'
  },
  {
    id: 'fc_87', subject: 'science',
    q: 'इन्सुलिन हे संप्रेरक शरीरातील कोणत्या ग्रंथीमधून स्रवते?',
    qEn: 'Insulin hormone is secreted by which organ/gland in the human body?',
    a: 'स्वादुपिंडातील (Pancreas) लँगरहॅन्सच्या बीटा पेशींमधून.',
    aEn: 'Beta cells of the Islets of Langerhans in the Pancreas.',
    tip: 'इन्सुलिन रक्तातील ग्लुकोजची पातळी नियंत्रित करते; कमतरतेमुळे मधुमेह होतो.'
  },
  {
    id: 'fc_88', subject: 'science',
    q: 'मानवी शरीरातील सर्वात मोठी ग्रंथी कोणती आहे?',
    qEn: 'Which is the largest gland in the human body?',
    a: 'यकृत (Liver); हे पित्तरस (Bile) तयार करते.',
    aEn: 'Liver; it produces Bile juice stored in Gall Bladder.',
    tip: 'मानवी शरीरातील सर्वात मोठे बाह्य अंग = त्वचा (Skin).'
  },
  {
    id: 'fc_89', subject: 'science',
    q: 'तांबड्या रक्तपेशींचे (RBC) आयुष्य किती दिवस असते आणि त्यांची निर्मिती कोठे होते?',
    qEn: 'What is the lifespan of Red Blood Cells and where are they formed?',
    a: 'आयुष्य: सुमारे १२० दिवस; निर्मिती: अस्थिमज्जा (Bone Marrow).',
    aEn: 'Lifespan: ~120 days; Formed in: Red Bone Marrow.',
    tip: 'मृत RBCs प्लीहा (Spleen) मध्ये नष्ट होतात, म्हणून प्लीहेला \'RBCs चे स्मशान\' म्हणतात.'
  },
  {
    id: 'fc_90', subject: 'science',
    q: 'हिवताप (मलेरिया) कोणत्या परजीवीमुळे होतो आणि त्याचा प्रसार कोणता डास करतो?',
    qEn: 'What causes Malaria and which mosquito acts as its vector?',
    a: 'प्लास्मोडियम (Plasmodium) आदिजीव; प्रसार: मादी ॲनोफिलीस डास.',
    aEn: 'Plasmodium protozoa; transmitted by female Anopheles mosquito.',
    tip: 'डेंग्यू आणि चिकुनगुनिया \'एडिस इजिप्ती\' (Aedes) डासामुळे पसरतात.'
  },
  {
    id: 'fc_91', subject: 'science',
    q: 'क्षयरोगापासून (TB) बालकांच्या संरक्षणासाठी कोणती लस टोचली जाते?',
    qEn: 'Which vaccine is administered to infants to protect against Tuberculosis?',
    a: 'बीसीजी (BCG - Bacillus Calmette-Guérin) लस.',
    aEn: 'BCG (Bacillus Calmette-Guérin) vaccine.',
    tip: 'क्षयरोग हा मायकोबॅक्टेरियम ट्युबरक्युलॉसिस या जिवाणूमुळे होतो.'
  },
  {
    id: 'fc_92', subject: 'science',
    q: 'मानवी रक्ताचा सामान्य pH किती असतो?',
    qEn: 'What is the normal pH of human blood?',
    a: '७.३५ ते ७.४५ (किंचित अल्कधर्मी / Slightly Alkaline).',
    aEn: '7.35 to 7.45 (slightly alkaline).',
    tip: 'pH ७ = उदासीन (उदा. शुद्ध पाणी), ७ पेक्षा कमी = आम्लधर्मी, ७ पेक्षा जास्त = अल्कधर्मी.'
  },
  {
    id: 'fc_93', subject: 'science',
    q: 'पाण्याची घनता (Maximum Density) कोणत्या तापमानाला सर्वाधिक असते?',
    qEn: 'At what temperature is the density of water maximum?',
    a: '४ अंश सेल्सिअस (4°C) तापमानाला (पाण्याचे असंगत आचरण).',
    aEn: 'At 4°C (due to anomalous expansion of water).',
    tip: 'या गुणधर्मामुळे थंड प्रदेशात तलावाचा वरचा थर गोठला तरी खाली जलचर जिवंत राहतात.'
  },
  {
    id: 'fc_94', subject: 'science',
    q: 'ध्वनीचा वेग कोणत्या माध्यमात सर्वाधिक असतो आणि कोणत्या माध्यमात प्रवास करू शकत नाही?',
    qEn: 'In which medium is sound speed highest and where can it not travel?',
    a: 'स्थायू माध्यमात (उदा. स्टील) सर्वाधिक; निर्वात पोकळीत (Vacuum) प्रवास करू शकत नाही.',
    aEn: 'Highest in solids (e.g. steel); cannot travel through vacuum.',
    tip: 'प्रकाशाचा वेग उलट निर्वात पोकळीत सर्वाधिक (३ × १०⁸ मी/सेकंद) असतो.'
  },
  {
    id: 'fc_95', subject: 'science',
    q: 'पृथ्वीच्या गुरुत्वाकर्षणातून बाहेर पडण्यासाठी आवश्यक मुक्तीवेग (Escape Velocity) किती?',
    qEn: 'What is the escape velocity from the surface of Earth?',
    a: '११.२ किलोमीटर प्रति सेकंद (11.2 km/s).',
    aEn: '11.2 kilometers per second (11.2 km/s).',
    tip: 'चंद्रावरील मुक्तीवेग सुमारे २.३८ किमी/सेकंद आहे.'
  },
  {
    id: 'fc_96', subject: 'science',
    q: 'पितळ (Brass) आणि कासे (Bronze) ही कोणत्या धातूंची संमिश्रे आहेत?',
    qEn: 'What are the metallic constituents of Brass and Bronze?',
    a: 'पितळ: तांबे (Cu) + जस्त (Zn); कासे: तांबे (Cu) + कथिल/टिन (Sn).',
    aEn: 'Brass: Copper + Zinc; Bronze: Copper + Tin.',
    tip: 'स्टेनलेस स्टीलमध्ये लोह, क्रोमियम, निकेल व कार्बन असतो.'
  },
  {
    id: 'fc_97', subject: 'science',
    q: 'वनस्पतींमध्ये पाणी व अन्न यांचे वहन करणाऱ्या उती कोणत्या?',
    qEn: 'Which tissues conduct water and food in plants?',
    a: 'पाणी व खनिजे: जलवाहिनी (Xylem); अन्न: रसवाहिनी (Phloem).',
    aEn: 'Water & minerals: Xylem; Synthesized food: Phloem.',
    tip: 'झायलम ऊर्ध्व दिशेने वहन करते, तर फ्लोएम सर्व दिशांना अन्न पुरवते.'
  },
  {
    id: 'fc_98', subject: 'science',
    q: 'कॅन्सरवरील उपचारासाठी कोणते किरणोत्सारी समस्थानिक (Radioisotope) वापरतात?',
    qEn: 'Which radioisotope is widely used in radiotherapy for Cancer?',
    a: 'कोबाल्ट-६० (Cobalt-60).',
    aEn: 'Cobalt-60 (emits penetrating gamma rays).',
    tip: 'गलगंड (थायरॉईड) उपचारासाठी आयोडीन-१३१ (Iodine-131) वापरतात.'
  },
  {
    id: 'fc_99', subject: 'science',
    q: 'मानवी शरीरात गुणसूत्रांच्या (Chromosomes) किती जोड्या असतात?',
    qEn: 'How many pairs of chromosomes are present in human cells?',
    a: '२३ जोड्या (एकूण ४६ गुणसूत्रे: २२ जोड्या अलिंगी व १ जोडी लिंग गुणसूत्रे - XX/XY).',
    aEn: '23 pairs (46 chromosomes total: 22 autosome pairs + 1 sex pair).',
    tip: 'डाऊन सिंड्रोम हा २१ व्या गुणसूत्राच्या ट्रायसोमीमुळे (Trisomy 21) होतो.'
  },
  {
    id: 'fc_100', subject: 'science',
    q: 'विद्युत बल्बमध्ये टंगस्टनच्या तारेचे ऑक्सिडायझेशन टाळण्यासाठी कोणता वायू भरतात?',
    qEn: 'Which gas is filled inside an electric incandescent bulb?',
    a: 'अरगॉन (Argon - निष्क्रिय वायू) किंवा नायट्रोजन वायू.',
    aEn: 'Argon (inert gas) or Nitrogen gas.',
    tip: 'टंगस्टनचा वितळण बिंदू (Melting point) अत्यंत उच्च (सुमारे ३,४२२°C) असतो.'
  }
];
