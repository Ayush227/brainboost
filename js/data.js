/* ============================================================
   BrainBoost – data.js
   All topics, flashcards, quiz questions, shortcuts, tips
   ============================================================ */

const BB = window.BB = {};

/* ── TOPICS ─────────────────────────────────────────────────── */
BB.topics = [
  /* ---- REASONING ---- */
  {
    id: 'coding-decoding', category: 'reasoning', icon: '🔐',
    title: 'Coding-Decoding',
    subtitle: 'Sign Language Patterns',
    desc: 'Understand how letters/numbers are coded into symbols or other characters using fixed rules.',
    tags: ['Pattern', 'Logic', 'Substitution'],
    color: '#6c63ff',
    concepts: [
      {
        title: 'Letter Shifting',
        body: 'Each letter is shifted by a fixed number of positions in the alphabet. Example: A+3 = D.',
        formula: 'Coded letter = Original + N  (mod 26)',
        example: 'If "CAT" is coded as "FDW", each letter is shifted by +3.',
        trick: 'Write A-Z as 1-26. Spot the difference between pairs of corresponding letters.'
      },
      {
        title: 'Reverse Coding',
        body: 'Letters are replaced by their mirror counterpart: A-Z, B-Y, C-X...',
        formula: 'Code(X) = 27 - Position(X)',
        example: '"FACE" becomes "UZXV" (F=6, mirror=21=U, etc.)',
        trick: 'A+Z=27, B+Y=27 — all pairs always sum to 27!'
      },
      {
        title: 'Number-Letter Coding',
        body: 'Letters are replaced by numbers based on their position (A=1, B=2 ... Z=26).',
        formula: 'A=1, B=2, ..., Z=26',
        example: '"DOG" becomes "4-15-7"',
        trick: 'For reverse: A=26, B=25 ... Z=1'
      }
    ],
    practiceCount: 45, difficulty: 'Medium'
  },
  {
    id: 'blood-relations', category: 'reasoning', icon: '👨‍👩‍👧',
    title: 'Blood Relations',
    subtitle: 'Family Tree Analysis',
    desc: 'Determine relationships between family members using given clues.',
    tags: ['Family', 'Logic', 'Tree'],
    color: '#ff6b35',
    concepts: [
      {
        title: 'Generation Levels',
        body: 'Grandparents (Gen +2), Parents (Gen +1), Self/Siblings (Gen 0), Children (Gen -1), Grandchildren (Gen -2).',
        formula: 'Draw a tree from top (oldest) to bottom (youngest)',
        example: '"A is father of B, B is son of C" — A is son of C.',
        trick: 'Always draw a family tree before solving. Use boxes for males, circles for females.'
      },
      {
        title: 'Gender Indicators',
        body: 'Key words: Son/Father/Brother/Uncle/Grandfather = Male. Daughter/Mother/Sister/Aunt/Grandmother = Female.',
        formula: 'Male: Son, Father, Brother, Uncle, Husband, Grandfather, Nephew\nFemale: Daughter, Mother, Sister, Aunt, Wife, Grandmother, Niece',
        example: '"A\'s brother\'s mother\'s husband" = A\'s Father',
        trick: 'Chain simplification: Brother\'s mother = Mother. Mother\'s husband = Father.'
      }
    ],
    practiceCount: 38, difficulty: 'Medium'
  },
  {
    id: 'direction-sense', category: 'reasoning', icon: '🧭',
    title: 'Direction Sense',
    subtitle: 'Navigation & Distance',
    desc: 'Find direction and distance after a series of turns using compass directions.',
    tags: ['Directions', 'Distance', 'Geometry'],
    color: '#00d4ff',
    concepts: [
      {
        title: 'Compass Directions',
        body: 'N/S/E/W and diagonals NE/NW/SE/SW. Right turns: N->E->S->W->N. Left turns: N->W->S->E->N.',
        formula: 'Right turn = 90 degrees clockwise. Left turn = 90 degrees counter-clockwise.',
        example: 'Facing North, turn Right = now facing East.',
        trick: 'Use "Never Eat Shredded Wheat" for N-E-S-W clockwise!'
      },
      {
        title: 'Shortest Distance',
        body: 'After all moves, use Pythagoras theorem for perpendicular paths.',
        formula: 'Shortest Distance = sqrt(x squared + y squared)',
        example: 'Walk 3m East, 4m North = Distance from start = sqrt(9+16) = 5m',
        trick: 'Cancel opposite moves first: 5E + 3W = 2E net. Then apply Pythagoras.'
      },
      {
        title: 'Shadow Problems',
        body: 'Morning: sun rises in East, shadows point West. Evening: sun in West, shadows point East.',
        formula: 'Morning shadow: points West. Evening shadow: points East.',
        example: 'Man faces South in morning = shadow falls to his right (West).',
        trick: 'Shadow is always OPPOSITE to sun direction.'
      }
    ],
    practiceCount: 32, difficulty: 'Easy'
  },
  {
    id: 'syllogism', category: 'reasoning', icon: '🔵',
    title: 'Syllogism',
    subtitle: 'Logical Conclusions & Venn Diagrams',
    desc: 'Draw logical conclusions from given statements using Venn diagram technique.',
    tags: ['Logic', 'Venn', 'Conclusion'],
    color: '#a855f7',
    concepts: [
      {
        title: 'Types of Statements',
        body: 'A: All A are B (Universal Positive). E: No A is B (Universal Negative). I: Some A are B (Particular Positive). O: Some A are not B (Particular Negative).',
        formula: 'A: All | E: No | I: Some | O: Some...not',
        example: '"All cats are animals" = Type A statement.',
        trick: 'Use AEIO to remember the 4 types of categorical propositions.'
      },
      {
        title: 'Venn Diagram Approach',
        body: 'Draw circles for each category. Overlap = some relation. Inner circle = all relation. Separate circles = no relation.',
        formula: 'Draw ALL possible diagrams, check if conclusion is true in ALL cases.',
        example: '"All A are B, All B are C" -- Conclusion: All A are C (Valid)',
        trick: 'A conclusion is valid ONLY if it holds true in EVERY possible diagram.'
      }
    ],
    practiceCount: 50, difficulty: 'Hard'
  },
  {
    id: 'series-completion', category: 'reasoning', icon: '🔢',
    title: 'Series Completion',
    subtitle: 'Number & Letter Series',
    desc: 'Identify the pattern in a series and find the missing or next term.',
    tags: ['Pattern', 'Numbers', 'Letters'],
    color: '#22c55e',
    concepts: [
      {
        title: 'Arithmetic Series',
        body: 'Each term differs by a constant value (common difference).',
        formula: 'an = a1 + (n-1)d',
        example: '2, 5, 8, 11, ___ -- d=3 -- Next = 14',
        trick: 'Find difference between consecutive terms. If constant -> arithmetic series.'
      },
      {
        title: 'Geometric Series',
        body: 'Each term is multiplied/divided by a constant ratio.',
        formula: 'an = a1 x r^(n-1)',
        example: '3, 6, 12, 24, ___ -- r=2 -- Next = 48',
        trick: 'Check if ratio of consecutive terms is constant.'
      },
      {
        title: 'Mixed/Alternating Series',
        body: 'Two or more interleaved series. Split odd/even terms separately.',
        formula: 'Odd positions: series 1. Even positions: series 2.',
        example: '2, 5, 4, 10, 6, 15, 8, ___ -- Odd: +2 -- Even: +5 -- Answer: 20',
        trick: 'Separate the series by position. Solve each independently.'
      }
    ],
    practiceCount: 55, difficulty: 'Medium'
  },
  {
    id: 'seating-arrangement', category: 'reasoning', icon: '💺',
    title: 'Seating Arrangement',
    subtitle: 'Circular & Linear',
    desc: 'Determine the position of persons in a circular or linear arrangement from given clues.',
    tags: ['Arrangement', 'Circular', 'Linear'],
    color: '#f59e0b',
    concepts: [
      {
        title: 'Linear Arrangement',
        body: 'People sit in a row. "Right of A" means towards increasing positions. Fix one person first.',
        formula: 'Fix one anchor, then place others relative to anchor.',
        example: 'A is 3rd from left, B is 2nd from right in a row of 5 -- A at pos 3, B at pos 4.',
        trick: 'Always make a numbered line and fill in known positions first.'
      },
      {
        title: 'Circular Arrangement',
        body: 'People sit around a table. Fix one person as reference.',
        formula: 'Circular arrangements = (n-1)!',
        example: 'Fix A at top. Then place others based on clues.',
        trick: 'Always fix one person. "Immediate right" in circular = clockwise next seat.'
      }
    ],
    practiceCount: 42, difficulty: 'Hard'
  },
  {
    id: 'analogy-classification', category: 'reasoning', icon: '🔗',
    title: 'Analogy & Classification',
    subtitle: 'Finding Relationships & Odd One Out',
    desc: 'Find pairs with similar relationships, or identify the odd member in a group.',
    tags: ['Analogy', 'OddOneOut', 'Pattern'],
    color: '#ec4899',
    concepts: [
      {
        title: 'Word Analogy',
        body: 'Find the relationship in the given pair. Apply the same to the incomplete pair.',
        formula: 'A:B :: C:? -- Relation(A,B) = Relation(C,?)',
        example: 'Doctor:Hospital :: Teacher:School (Place of work)',
        trick: 'State the relationship as a sentence: "A is the [relationship] of B".'
      },
      {
        title: 'Classification (Odd One Out)',
        body: 'Find the item that does NOT belong to the group.',
        formula: 'Find common property of 3 items -- 4th without that property = odd one.',
        example: 'Cat, Dog, Crow, Cow -- Crow is the only bird. Answer: Crow.',
        trick: 'Look for category, property, size, usage, or structure differences.'
      }
    ],
    practiceCount: 48, difficulty: 'Easy'
  },
  {
    id: 'clocks-calendars', category: 'reasoning', icon: '🕐',
    title: 'Clocks & Calendars',
    subtitle: 'Time & Date Problems',
    desc: 'Find angles between clock hands, day of week for a given date, and calendar patterns.',
    tags: ['Clocks', 'Calendars', 'Time'],
    color: '#0ea5e9',
    concepts: [
      {
        title: 'Clock Angles',
        body: 'Hour hand moves 0.5 deg/min. Minute hand moves 6 deg/min. Relative speed = 5.5 deg/min.',
        formula: 'Angle = |30H - 5.5M|  (H=hours, M=minutes)',
        example: 'At 3:30 -- |30x3 - 5.5x30| = |90 - 165| = 75 degrees',
        trick: 'If angle > 180, subtract from 360. Hands coincide every 65 5/11 minutes.'
      },
      {
        title: 'Day of the Week',
        body: 'Use the "odd days" method. Each ordinary year = 52 weeks + 1 odd day.',
        formula: 'Odd days: Jan=3, Feb=0(3 leap), Mar=3, Apr=2, May=3, Jun=2...',
        example: 'Calculate total odd days from reference date to find the day.',
        trick: 'Leap year: Feb has 29 days. Divisible by 4 (century years need /400).'
      }
    ],
    practiceCount: 35, difficulty: 'Medium'
  },
  {
    id: 'puzzles', category: 'reasoning', icon: '🧩',
    title: 'Puzzles',
    subtitle: 'Logical Brain Teasers',
    desc: 'Complex multi-constraint problems requiring systematic deduction and grid method.',
    tags: ['Grid', 'Deduction', 'Logic'],
    color: '#14b8a6',
    concepts: [
      {
        title: 'Grid Method',
        body: 'Create a table with all persons/items and check/cross cells based on clues.',
        formula: 'Positive clue = tick in cell. Negative clue = cross in cell. Each row/column has exactly one tick.',
        example: '"A likes Cricket" -- Mark tick for A-Cricket, cross for A in all other sports.',
        trick: 'Process definite (direct) clues first, then use elimination for indirect ones.'
      }
    ],
    practiceCount: 30, difficulty: 'Hard'
  },
  {
    id: 'non-verbal', category: 'reasoning', icon: '🖼️',
    title: 'Non-Verbal Reasoning',
    subtitle: 'Figures, Mirrors & Paper Folding',
    desc: 'Solve problems based on visual patterns, figure series, mirror images, and paper folding.',
    tags: ['Visual', 'Mirror', 'Figures'],
    color: '#8b5cf6',
    concepts: [
      {
        title: 'Mirror Images',
        body: 'Left-right flip when mirror is on the RIGHT side. Top-bottom flip when mirror is BELOW.',
        formula: 'Right mirror: image is LEFT-RIGHT reversed.',
        example: 'Letter "b" in right mirror looks like "d".',
        trick: 'Mirror time: 11:60 minus shown time = actual time. E.g., 2:30 -> 9:30.'
      },
      {
        title: 'Paper Folding & Cutting',
        body: 'Track how folds create symmetrical cut patterns. Unfold mentally step by step.',
        formula: 'n folds = 2^n layers. A cut through n-fold paper creates pattern on all layers.',
        example: 'Square folded once diagonally, corner cut -- unfold shows 2 holes symmetrically.',
        trick: 'Unfold in REVERSE order. Each fold doubles the pattern symmetrically.'
      }
    ],
    practiceCount: 40, difficulty: 'Medium'
  },
  /* ---- MATHEMATICS ---- */
  {
    id: 'number-system', category: 'math', icon: '🔢',
    title: 'Number System',
    subtitle: 'Types & Properties of Numbers',
    desc: 'Natural, whole, integers, rational, irrational, real numbers and their properties.',
    tags: ['Natural', 'Prime', 'Divisibility'],
    color: '#6c63ff',
    concepts: [
      {
        title: 'Divisibility Rules',
        body: 'Quick tests to check divisibility without full division.',
        formula: 'Div2: ends 0,2,4,6,8 | Div3: digit sum div by 3 | Div9: digit sum div by 9 | Div11: alternating sum = 0 or 11x',
        example: 'Is 792 divisible by 9? 7+9+2=18, 18/9=2 YES',
        trick: 'Div by 6 = div by 2 AND 3. Div by 12 = div by 4 AND 3.'
      },
      {
        title: 'Unit Digit Pattern',
        body: 'Powers of numbers have repeating unit digit cycles.',
        formula: '2^n cycle: 2,4,8,6 (period 4) | 3^n: 3,9,7,1 | 7^n: 7,9,3,1 | 8^n: 8,4,2,6',
        example: 'Unit digit of 7^53: 53 mod 4 = 1 -- position 1 in cycle -- unit digit = 7',
        trick: 'Find remainder when power is divided by cycle length. Match to cycle position.'
      }
    ],
    practiceCount: 60, difficulty: 'Medium'
  },
  {
    id: 'bodmas', category: 'math', icon: '➗',
    title: 'BODMAS / Simplification',
    subtitle: 'Order of Operations',
    desc: 'Simplify complex expressions using the BODMAS rule in correct order.',
    tags: ['BODMAS', 'Simplification', 'Operations'],
    color: '#f59e0b',
    concepts: [
      {
        title: 'BODMAS Rule',
        body: 'B = Brackets, O = Of (Power/Roots), D = Division, M = Multiplication, A = Addition, S = Subtraction.',
        formula: 'Brackets -> Of -> Divide -> Multiply -> Add -> Subtract',
        example: '5 + 3 x 2^2 - 1 = 5 + 12 - 1 = 16',
        trick: 'Solve LEFT to RIGHT for same-level operations (D and M together, then A and S).'
      }
    ],
    practiceCount: 40, difficulty: 'Easy'
  },
  {
    id: 'lcm-hcf', category: 'math', icon: '🔁',
    title: 'LCM & HCF',
    subtitle: 'Least Common Multiple & Highest Common Factor',
    desc: 'Find LCM and HCF using prime factorization and apply to word problems.',
    tags: ['LCM', 'HCF', 'Prime Factors'],
    color: '#10b981',
    concepts: [
      {
        title: 'HCF',
        body: 'HCF = product of MINIMUM powers of common prime factors.',
        formula: 'HCF = Product of common primes with LOWEST powers',
        example: 'HCF(36,48): 36=2^2 x 3^2, 48=2^4 x 3 -- HCF=2^2 x 3=12',
        trick: 'LCM x HCF = Product of the two numbers (for 2 numbers only).'
      },
      {
        title: 'Word Problem Types',
        body: 'Bells ringing together = LCM. Largest tile size = HCF.',
        formula: 'Maximum / Largest / Greatest -> HCF. Minimum / Least time -> LCM.',
        example: 'Bells ring every 4 and 6 seconds. Together again: LCM(4,6) = 12 seconds.',
        trick: '"Maximum" keyword -> HCF. "Minimum" keyword -> LCM. This solves 90% of problems!'
      }
    ],
    practiceCount: 35, difficulty: 'Medium'
  },
  {
    id: 'percentage', category: 'math', icon: '%',
    title: 'Percentage',
    subtitle: 'Conversions, Change & Applications',
    desc: 'Calculate percentages, percentage change, and apply to real-world problems.',
    tags: ['Percent', 'Change', 'Applications'],
    color: '#0ea5e9',
    concepts: [
      {
        title: 'Percentage Formula',
        body: 'Express a number as a fraction of 100.',
        formula: 'Percent = (Part / Whole) x 100',
        example: '45 out of 150 = (45/150)x100 = 30%',
        trick: 'Fraction-percent: 1/4=25%, 1/3=33.33%, 1/5=20%, 1/8=12.5%, 1/6=16.67%'
      },
      {
        title: 'Successive Percentage Changes',
        body: 'Two consecutive percentage changes: net effect formula.',
        formula: 'Net% = a + b + (ab/100)  [increases a% then b%]',
        example: '+20% then -20% = 20 + (-20) + (20x-20)/100 = -4% net loss',
        trick: 'For same % up then down: always a net LOSS of (a/10)^2 percent.'
      }
    ],
    practiceCount: 55, difficulty: 'Medium'
  },
  {
    id: 'profit-loss', category: 'math', icon: '💰',
    title: 'Profit, Loss & Discount',
    subtitle: 'Business Mathematics',
    desc: 'Calculate profit/loss percentage, selling price, cost price, and discount problems.',
    tags: ['Profit', 'Loss', 'Discount'],
    color: '#22c55e',
    concepts: [
      {
        title: 'Core Formulas',
        body: 'Key relationships between Cost Price (CP), Selling Price (SP), Profit and Loss.',
        formula: 'Profit = SP - CP\nProfit% = (Profit/CP) x 100\nSP = CP x (1 + P%/100)',
        example: 'CP=200, SP=250 -- Profit=50 -- Profit%=25%',
        trick: 'Always calculate profit/loss on COST PRICE, not selling price.'
      },
      {
        title: 'Dishonest Shopkeeper',
        body: 'Uses false weights. Actual profit is more than declared.',
        formula: 'Profit% = [(True weight - False weight) / False weight] x 100',
        example: 'Uses 900g instead of 1kg -- Profit = 100/900 x 100 = 11.1%',
        trick: 'Error weight goes in denominator, not true weight!'
      }
    ],
    practiceCount: 50, difficulty: 'Medium'
  },
  {
    id: 'average', category: 'math', icon: '📊',
    title: 'Average',
    subtitle: 'Mean, Weighted Average & Applications',
    desc: 'Calculate average, find missing values, and solve weighted average problems.',
    tags: ['Mean', 'Average', 'Data'],
    color: '#8b5cf6',
    concepts: [
      {
        title: 'Average Formula',
        body: 'Sum of observations divided by number of observations.',
        formula: 'Average = Sum / Count\nSum = Average x Count',
        example: 'Average of 4,7,8,9,12 = 40/5 = 8',
        trick: 'For consecutive integers: avg = (First + Last) / 2'
      }
    ],
    practiceCount: 30, difficulty: 'Easy'
  },
  {
    id: 'ratio-proportion', category: 'math', icon: '⚖️',
    title: 'Ratio & Proportion',
    subtitle: 'Comparisons & Direct/Inverse',
    desc: 'Work with ratios, proportions, and solve partnership and mixing problems.',
    tags: ['Ratio', 'Proportion', 'Partnership'],
    color: '#f59e0b',
    concepts: [
      {
        title: 'Ratio Basics',
        body: 'A ratio compares two quantities. a:b = a/b. Always express in simplest form.',
        formula: 'If a:b = m:n then a=km, b=kn for some k.',
        example: 'Ratio 3:5, total 80 -- 3k+5k=80 -- k=10 -- parts: 30 and 50',
        trick: 'Add ratio parts, divide total to find "per part" value, then multiply.'
      }
    ],
    practiceCount: 40, difficulty: 'Medium'
  },
  {
    id: 'time-speed-distance', category: 'math', icon: '🚆',
    title: 'Time, Speed & Distance',
    subtitle: 'Trains, Boats & Streams',
    desc: 'Solve problems on relative speed, train crossing, boat upstream/downstream.',
    tags: ['Speed', 'Train', 'Boat', 'Stream'],
    color: '#0ea5e9',
    concepts: [
      {
        title: 'Core Formula',
        body: 'The fundamental relationship between speed, distance and time.',
        formula: 'Speed = Distance / Time\nDistance = Speed x Time',
        example: 'Train travels 360km in 4 hours -- Speed = 90 km/h',
        trick: 'km/h to m/s: multiply by 5/18. m/s to km/h: multiply by 18/5.'
      },
      {
        title: 'Boat & Stream',
        body: 'Downstream = with current (faster). Upstream = against current (slower).',
        formula: 'Downstream = b + r, Upstream = b - r\nBoat speed = (D+U)/2, Stream = (D-U)/2',
        example: 'Downstream=12, Upstream=8 -- Boat speed=10, Stream=2',
        trick: 'Boat speed = avg of down+upstream. Stream speed = half their difference.'
      }
    ],
    practiceCount: 55, difficulty: 'Hard'
  },
  {
    id: 'time-work', category: 'math', icon: '⚙️',
    title: 'Time & Work',
    subtitle: 'Efficiency, Pipes & Tanks',
    desc: 'Solve problems involving work rates, combined work, and pipe filling/emptying.',
    tags: ['Work', 'Pipes', 'Efficiency'],
    color: '#8b5cf6',
    concepts: [
      {
        title: 'Work Rate Approach',
        body: 'If A does work in n days, A\'s 1-day work = 1/n. Combined rate = sum of individual rates.',
        formula: '1/A + 1/B = 1/T (combined time T)\nT = AB/(A+B)',
        example: 'A: 10 days, B: 15 days -- T = (10x15)/(10+15) = 6 days',
        trick: 'Take LCM of days as total work units. Assign daily work units. Add rates.'
      }
    ],
    practiceCount: 45, difficulty: 'Medium'
  },
  {
    id: 'simple-compound-interest', category: 'math', icon: '🏦',
    title: 'Simple & Compound Interest',
    subtitle: 'SI, CI & Effective Rate',
    desc: 'Calculate interest, amount, rate and time for both simple and compound interest.',
    tags: ['SI', 'CI', 'Interest', 'Banking'],
    color: '#22c55e',
    concepts: [
      {
        title: 'Simple Interest',
        body: 'Interest calculated only on principal amount.',
        formula: 'SI = P x R x T / 100\nAmount = P + SI',
        example: 'P=1000, R=10%, T=3 -- SI = 1000x10x3/100 = 300',
        trick: 'For same P,R,T: CI > SI always. Difference for 2 years = P x (R/100)^2.'
      },
      {
        title: 'Compound Interest',
        body: 'Interest calculated on principal + accumulated interest.',
        formula: 'A = P(1 + R/100)^n\nCI = A - P',
        example: 'P=1000, R=10%, n=2 -- A=1000x1.1^2=1210 -- CI=210',
        trick: 'CI for 2 years = SI + SI^2/100 (SI% of SI). Very useful shortcut!'
      }
    ],
    practiceCount: 48, difficulty: 'Medium'
  },
  {
    id: 'permutation-combination', category: 'math', icon: '🎲',
    title: 'Permutation, Combination & Probability',
    subtitle: 'Counting, Selection & Chance',
    desc: 'Count arrangements and selections, calculate probability for events.',
    tags: ['Permutation', 'Combination', 'Probability'],
    color: '#ec4899',
    concepts: [
      {
        title: 'Permutation',
        body: 'Number of ARRANGEMENTS of r items from n items (order matters).',
        formula: 'P(n,r) = n! / (n-r)!',
        example: 'Arrange 3 out of 5 letters: P(5,3) = 60',
        trick: '"Arrangement / Order matters" -> Permutation. Think PIN code.'
      },
      {
        title: 'Combination',
        body: 'Number of SELECTIONS of r items from n items (order does NOT matter).',
        formula: 'C(n,r) = n! / [r! x (n-r)!]',
        example: 'Choose 3 from 5: C(5,3) = 10',
        trick: '"Selection / Group / Committee" -> Combination.'
      },
      {
        title: 'Probability',
        body: 'Likelihood of an event occurring.',
        formula: 'P(E) = Favorable outcomes / Total outcomes',
        example: 'P(sum=7) on 2 dice = 6/36 = 1/6',
        trick: 'P(A or B) = P(A)+P(B)-P(A and B). P(not A) = 1-P(A).'
      }
    ],
    practiceCount: 50, difficulty: 'Hard'
  },
  {
    id: 'algebra-geometry', category: 'math', icon: '📐',
    title: 'Algebra & Geometry',
    subtitle: 'Area, Volume, Perimeter & Equations',
    desc: 'Solve algebraic equations and calculate area, perimeter and volume of standard shapes.',
    tags: ['Algebra', 'Area', 'Volume', 'Geometry'],
    color: '#0ea5e9',
    concepts: [
      {
        title: 'Key Algebraic Identities',
        body: 'Standard identities to expand or factor expressions quickly.',
        formula: '(a+b)^2 = a^2+2ab+b^2\n(a-b)^2 = a^2-2ab+b^2\n(a+b)(a-b) = a^2-b^2',
        example: '(103)^2 = (100+3)^2 = 10000+600+9 = 10609',
        trick: 'Use (a+b)^2 to mentally square numbers near 100 or 50.'
      },
      {
        title: 'Area & Volume Formulas',
        body: 'Area and volume of common shapes.',
        formula: 'Triangle: (1/2)bh | Circle: pi*r^2 | Cylinder: pi*r^2*h | Sphere: (4/3)*pi*r^3',
        example: 'Cylinder r=7, h=10 -- V = (22/7) x 49 x 10 = 1540 cu.units',
        trick: 'Cone volume = (1/3) of cylinder with same r and h.'
      }
    ],
    practiceCount: 55, difficulty: 'Medium'
  }
];

/* ── FLASHCARDS ─────────────────────────────────────────────── */
BB.flashcards = [
  { id:1, topicId:'number-system', q:'What is the divisibility rule for 11?', a:'Alternating sum of digits must be 0 or divisible by 11.', formula:'(d1-d2+d3-...) = 0 or 11k. E.g., 1001: 1-0+0-1=0' },
  { id:2, topicId:'number-system', q:'What is the cycle of unit digits of powers of 3?', a:'The cycle is 3, 9, 7, 1 (period 4).', formula:'3^1=3, 3^2=9, 3^3=27, 3^4=81 -- repeats every 4' },
  { id:3, topicId:'percentage', q:'Convert 1/8 to percentage.', a:'12.5%', formula:'1/8 x 100 = 12.5%' },
  { id:4, topicId:'percentage', q:'If price increases 20% then decreases 20%, what is net change?', a:'Net LOSS of 4%.', formula:'Net = a+b+ab/100 = 20+(-20)+(-400/100) = -4%' },
  { id:5, topicId:'profit-loss', q:'A shopkeeper uses 800g instead of 1kg. Find profit%?', a:'25%', formula:'Profit% = (1000-800)/800 x 100 = 25%' },
  { id:6, topicId:'simple-compound-interest', q:'Find CI on 2000 at 10% p.a. for 2 years.', a:'420', formula:'A = 2000 x (1.1)^2 = 2420 -- CI = 420' },
  { id:7, topicId:'time-speed-distance', q:'Convert 90 km/h to m/s.', a:'25 m/s', formula:'90 x 5/18 = 25 m/s' },
  { id:8, topicId:'time-speed-distance', q:'Downstream 15 km/h, Upstream 9 km/h. Find boat speed and stream speed.', a:'Boat = 12 km/h, Stream = 3 km/h', formula:'Boat = (15+9)/2 = 12, Stream = (15-9)/2 = 3' },
  { id:9, topicId:'time-work', q:'A does work in 10 days, B in 15 days. Together in how many days?', a:'6 days', formula:'T = (10x15)/(10+15) = 150/25 = 6 days' },
  { id:10, topicId:'lcm-hcf', q:'Three bells ring every 6, 8, 12 minutes. When do they ring together?', a:'Every 24 minutes', formula:'LCM(6,8,12) = 24' },
  { id:11, topicId:'ratio-proportion', q:'Ratio 3:5, total = 96. Find the larger share.', a:'60', formula:'3k+5k=96 -- k=12 -- larger=5x12=60' },
  { id:12, topicId:'average', q:'Average of 5 numbers is 10. A 6th number (16) is added. New average?', a:'11', formula:'Total=50+16=66. Avg=66/6=11' },
  { id:13, topicId:'coding-decoding', q:'In a code, "BOOK" is written as "CPPL". What is the rule?', a:'Each letter is shifted +1 (B->C, O->P, O->P, K->L)', formula:'Code = Letter + 1' },
  { id:14, topicId:'blood-relations', q:'A is B\'s brother. B is C\'s daughter. C is D\'s mother. How is A related to D?', a:'A is D\'s grandson', formula:'D->C(daughter)->B(daughter)->A(brother) -- A is D\'s grandson' },
  { id:15, topicId:'direction-sense', q:'A walks 3km North, then 4km East. Straight line distance from start?', a:'5 km', formula:'sqrt(3^2 + 4^2) = sqrt(25) = 5 km' },
  { id:16, topicId:'clocks-calendars', q:'Find the angle between clock hands at 3:30.', a:'75 degrees', formula:'|30x3 - 5.5x30| = |90-165| = 75 degrees' },
  { id:17, topicId:'syllogism', q:'All cats are animals. All animals are living. Conclusion: All cats are living -- valid?', a:'Yes, valid.', formula:'A is subset of B, B is subset of C -- A is subset of C.' },
  { id:18, topicId:'series-completion', q:'Complete: 2, 6, 12, 20, 30, ?', a:'42', formula:'Differences: 4,6,8,10,12 -- Next = 42' },
  { id:19, topicId:'permutation-combination', q:'In how many ways can 4 people sit in a row?', a:'24', formula:'4! = 4x3x2x1 = 24' },
  { id:20, topicId:'algebra-geometry', q:'(a+b)^2 - (a-b)^2 = ?', a:'4ab', formula:'(a^2+2ab+b^2)-(a^2-2ab+b^2) = 4ab' },
  { id:21, topicId:'fractions-decimals', q:'Convert 0.666... to a fraction.', a:'2/3', formula:'x=0.666... -- 10x=6.666... -- 9x=6 -- x=6/9=2/3' },
  { id:22, topicId:'bodmas', q:'Simplify: 5 + 3 x 4 - 2^2', a:'13', formula:'= 5 + 12 - 4 = 13 (power before multiplication and addition)' },
  { id:23, topicId:'seating-arrangement', q:'5 people sit in a circle. How many arrangements?', a:'24 arrangements', formula:'(5-1)! = 4! = 24' },
  { id:24, topicId:'analogy-classification', q:'Doctor : Hospital :: Teacher : ?', a:'School', formula:'Relation: Person -- Place of work' },
  { id:25, topicId:'non-verbal', q:'A clock shows 4:50 in a mirror (mirror on right). Actual time?', a:'7:10', formula:'11:60 - 4:50 = 7:10' },
  { id:26, topicId:'puzzles', q:'I am even. Greater than 10, less than 20. Sum of digits = 7. What am I?', a:'16', formula:'Even numbers 10-20: 12,14,16,18. 1+6=7' },
  { id:27, topicId:'number-system', q:'Is 1 a prime number?', a:'No! 1 is neither prime nor composite.', formula:'Prime must have exactly 2 factors. 1 has only 1 factor.' },
  { id:28, topicId:'time-speed-distance', q:'Train 150m long crosses a bridge 850m long at 50 km/h. Time taken?', a:'72 seconds', formula:'Distance=1000m. Speed=50x5/18 m/s. Time=1000/(250/18)=72s' },
  { id:29, topicId:'permutation-combination', q:'Probability of getting sum 8 on two dice?', a:'5/36', formula:'Pairs: (2,6),(3,5),(4,4),(5,3),(6,2) = 5/36' },
  { id:30, topicId:'ages', q:'A is twice as old as B. 5 years ago, A was 3x B. Find current ages.', a:'A=20, B=10', formula:'a=2b. a-5=3(b-5) -- 2b-5=3b-15 -- b=10, a=20' }
];

/* ── QUIZ QUESTIONS ──────────────────────────────────────────── */
BB.questions = [
  { id:1, topicId:'percentage', q:'A price rises from 200 to 250. Find % increase.', options:['25%','20%','30%','15%'], correct:0, explanation:'(50/200)x100 = 25%', hint:'% change = (change/original)x100', difficulty:'easy' },
  { id:2, topicId:'time-speed-distance', q:'A car travels 120 km in 2 hours. What is its speed in m/s?', options:['16.67 m/s','33.33 m/s','60 m/s','20 m/s'], correct:0, explanation:'120/2=60 km/h. x5/18 = 16.67 m/s', hint:'km/h to m/s: multiply by 5/18', difficulty:'medium' },
  { id:3, topicId:'profit-loss', q:'CP=400, SP=500. Profit%?', options:['25%','20%','30%','15%'], correct:0, explanation:'(100/400)x100 = 25%', hint:'Profit% = (Profit/CP)x100', difficulty:'easy' },
  { id:4, topicId:'lcm-hcf', q:'LCM of 12 and 18 is?', options:['36','24','72','18'], correct:0, explanation:'12=2^2 x 3, 18=2 x 3^2. LCM=2^2 x 3^2=36', hint:'LCM = highest powers of all prime factors', difficulty:'easy' },
  { id:5, topicId:'time-work', q:'A does a job in 6 days, B in 12 days. Together in how many days?', options:['4 days','3 days','5 days','6 days'], correct:0, explanation:'T=6x12/(6+12)=72/18=4 days', hint:'T = AB/(A+B)', difficulty:'medium' },
  { id:6, topicId:'simple-compound-interest', q:'SI on 1000 at 8% p.a. for 3 years?', options:['240','280','200','320'], correct:0, explanation:'SI = 1000x8x3/100 = 240', hint:'SI = PRT/100', difficulty:'easy' },
  { id:7, topicId:'series-completion', q:'Next in series: 1, 4, 9, 16, 25, ?', options:['36','49','32','30'], correct:0, explanation:'Series of perfect squares: 1^2,2^2,3^2,4^2,5^2,6^2=36', hint:'These are perfect squares!', difficulty:'easy' },
  { id:8, topicId:'ratio-proportion', q:'Ratio 2:3:5, total = 200. Find the smallest share.', options:['40','60','100','50'], correct:0, explanation:'2k+3k+5k=200 -- k=20 -- smallest=2x20=40', hint:'Multiply ratio parts by k, set up equation for total', difficulty:'medium' },
  { id:9, topicId:'direction-sense', q:'A walks 6km East, 8km North. Distance from start?', options:['10 km','14 km','12 km','6 km'], correct:0, explanation:'sqrt(6^2+8^2) = sqrt(100) = 10 km', hint:'Pythagoras theorem for perpendicular directions', difficulty:'easy' },
  { id:10, topicId:'clocks-calendars', q:'Angle between clock hands at 6:00?', options:['180','90','120','0'], correct:0, explanation:'Hour hand at 180, minute hand at 0 -- difference = 180 degrees', hint:'At 6:00, hour hand points straight down', difficulty:'easy' },
  { id:11, topicId:'coding-decoding', q:'If APPLE = BQQMF, what is CAT?', options:['DBU','ECV','ACT','CBD'], correct:0, explanation:'Each letter +1: C->D, A->B, T->U -> DBU', hint:'Find the shift value from APPLE->BQQMF', difficulty:'easy' },
  { id:12, topicId:'blood-relations', q:'"A is the brother of B. B is the son of C." How is A related to C?', options:['Son','Daughter','Nephew','Brother'], correct:0, explanation:'B is C\'s son, A is B\'s brother -- A is also C\'s son', hint:'Draw a family tree!', difficulty:'easy' },
  { id:13, topicId:'syllogism', q:'All dogs are animals. Some animals are wild. Conclusion: Some dogs are wild?', options:['Invalid','Valid','Possibly Valid','Data insufficient'], correct:0, explanation:'Cannot conclude all dogs fall into the "some" category. Invalid.', hint:'Draw a Venn diagram with all possible cases.', difficulty:'hard' },
  { id:14, topicId:'permutation-combination', q:'How many 3-letter words from letters A,B,C,D (no repetition)?', options:['24','12','16','64'], correct:0, explanation:'P(4,3) = 4x3x2 = 24', hint:'P(n,r) = n!/(n-r)!', difficulty:'medium' },
  { id:15, topicId:'average', q:'Average of 5 numbers is 10. If a 6th number (16) is added, new average?', options:['11','12','10.5','13'], correct:0, explanation:'Total=50+16=66. Avg=66/6=11', hint:'Find total sum first, add new number, divide by new count', difficulty:'easy' },
  { id:16, topicId:'algebra-geometry', q:'Area of a circle with radius 7 cm (pi = 22/7)?', options:['154','49','44','132'], correct:0, explanation:'pi x r^2 = 22/7 x 49 = 154 sq cm', hint:'Area = pi x r^2', difficulty:'easy' },
  { id:17, topicId:'number-system', q:'What is the unit digit of 7^53?', options:['7','9','3','1'], correct:0, explanation:'7 cycle: 7,9,3,1 (period 4). 53=4x13+1 -- position 1 -- unit digit 7', hint:'Find the remainder when dividing the power by the cycle length', difficulty:'hard' },
  { id:18, topicId:'bodmas', q:'Value of: 10 + 5 x 2 - 3^2?', options:['11','19','12','7'], correct:0, explanation:'= 10 + 10 - 9 = 11', hint:'BODMAS: solve power first (3^2=9), then x, then +/-', difficulty:'medium' },
  { id:19, topicId:'seating-arrangement', q:'6 people in a circular arrangement. How many ways?', options:['120','720','60','24'], correct:0, explanation:'(6-1)! = 5! = 120', hint:'Circular arrangements = (n-1)!', difficulty:'medium' },
  { id:20, topicId:'analogy-classification', q:'4, 9, 25, 49, 121, ? Find the next.', options:['169','144','196','225'], correct:0, explanation:'Squares of primes: 2^2,3^2,5^2,7^2,11^2,13^2=169', hint:'Are these squares of specific types of numbers?', difficulty:'medium' },
  { id:21, topicId:'profit-loss', q:'Two articles sold at 99 each: one at 10% profit, one at 10% loss. Net?', options:['1% loss','1% profit','No profit no loss','2% loss'], correct:0, explanation:'CP1=90, CP2=110. Total CP=200, SP=198. Loss=2/200=1%', hint:'In same % profit and loss at same SP: always a loss! (P%/10)^2', difficulty:'hard' },
  { id:22, topicId:'ages', q:'A is 3x B. 5 years later, A will be 2x B. Find B\'s current age.', options:['5','10','15','20'], correct:0, explanation:'a=3b. a+5=2(b+5) -- 3b+5=2b+10 -- b=5', hint:'Set up two equations and solve simultaneously', difficulty:'medium' },
  { id:23, topicId:'ratio-proportion', q:'If 5:x = 25:30, find x.', options:['6','5','4','7'], correct:0, explanation:'5x30 = x x 25 -- 150 = 25x -- x=6', hint:'Product of means = product of extremes', difficulty:'easy' },
  { id:24, topicId:'time-speed-distance', q:'Two trains 200m and 300m approach each other at 80 km/h each. Crossing time?', options:['11.25 s','20 s','9 s','15 s'], correct:0, explanation:'Relative speed=160 km/h=400/9 m/s. Dist=500m. Time=11.25s', hint:'Opposite direction: add speeds. Distance = sum of lengths', difficulty:'hard' },
  { id:25, topicId:'non-verbal', q:'A clock shows 4:50 in a mirror (mirror on right). Actual time?', options:['7:10','4:50','8:10','3:50'], correct:0, explanation:'11:60 - 4:50 = 7:10', hint:'Mirror time: 11 hrs 60 min minus shown time', difficulty:'hard' }
];

/* ── SHORTCUTS / TRICKS ──────────────────────────────────────── */
BB.shortcuts = [
  { id:1, category:'math', title:'Square of numbers ending in 5', icon:'5', body:'Any number ending in 5 can be squared instantly.', formula:'(n5)^2 = n x (n+1) followed by 25', example:'35^2 = 3x4|25 = 1225\n65^2 = 6x7|25 = 4225\n95^2 = 9x10|25 = 9025', vedic:false },
  { id:2, category:'vedic', title:'Multiply by 11 (Vedic)', icon:'11', body:'Multiply any 2-digit number by 11 instantly.', formula:'Add the two digits, put sum in middle. If sum > 9, carry over.', example:'52 x 11: digits 5,2 middle=7 -> 572\n87 x 11: 8+7=15 carry -> 957', vedic:true },
  { id:3, category:'vedic', title:'Square near 100 (Vedic)', icon:'100', body:'Square any number close to 100 without pen.', formula:'(100+d)^2 = (100+2d) x 100 + d^2', example:'98^2=(96)x100+4=9604\n103^2=(106)x100+9=10609', vedic:true },
  { id:4, category:'math', title:'Multiply any number by 5', icon:'x5', body:'Multiplying by 5 = halving and multiplying by 10.', formula:'n x 5 = (n/2) x 10', example:'368 x 5 = 184 x 10 = 1840\n73 x 5 = 36.5 x 10 = 365', vedic:false },
  { id:5, category:'math', title:'Divisibility by 9', icon:'9', body:'No need to divide -- just add the digits!', formula:'Sum of all digits divisible by 9 = number is divisible by 9', example:'729: 7+2+9=18, 18/9=2 YES\n12345: 1+2+3+4+5=15 NO', vedic:false },
  { id:6, category:'math', title:'Percentage swap trick', icon:'%', body:'x% of y = y% of x. Always pick the easier version!', formula:'x% of y = y% of x', example:'32% of 25 = 25% of 32 = 8\n18% of 50 = 50% of 18 = 9', vedic:false },
  { id:7, category:'vedic', title:'Nikhilam Multiplication', icon:'NK', body:'Multiply numbers close to 10, 100 using Nikhilam Sutra.', formula:'Find deviation from base\nLeft = cross-subtract\nRight = product of deviations', example:'8 x 7 (base 10): deviations -2,-3\nLeft: 8-3=5. Right: 2x3=6\nAnswer: 56', vedic:true },
  { id:8, category:'vedic', title:'Square near 50 (Vedic)', icon:'50', body:'Square any number near 50 using simple formula.', formula:'(50+d)^2 = (25+d) x 100 + d^2', example:'48^2=(25-2)x100+4=2304\n52^2=(25+2)x100+4=2704\n53^2=27x100+9=2809', vedic:true },
  { id:9, category:'reasoning', title:'Blood Relation Chain trick', icon:'BR', body:'Simplify relation chains without full tree drawing.', formula:'Brother\'s Mother = Mother\nMother\'s Husband = Father\nFather\'s Brother = Uncle', example:'"A\'s brother\'s mother\'s husband\'s daughter"\n= A\'s father\'s daughter = A\'s sister', vedic:false },
  { id:10, category:'reasoning', title:'Shadow direction trick', icon:'SH', body:'Instantly determine shadow direction.', formula:'Morning (sun=East): Shadow -> WEST\nEvening (sun=West): Shadow -> EAST', example:'Man faces South in morning -- shadow falls to his RIGHT (West)', vedic:false },
  { id:11, category:'math', title:'Train crossing shortcut', icon:'TR', body:'Crossing problems solved in seconds.', formula:'Same dir: Relative speed = S1-S2\nOpposite: Relative speed = S1+S2\nTime = (L1+L2)/Relative Speed', example:'150m & 100m trains at 60 & 40 km/h opposite:\nTime=250/(100x5/18)=9 seconds', vedic:false },
  { id:12, category:'math', title:'LCM vs HCF keyword trick', icon:'LH', body:'Identify whether to use LCM or HCF from question keywords.', formula:'"Together again", "Simultaneously" -> LCM\n"Largest piece", "Max size", "Greatest" -> HCF', example:'Bells ring every 4,6,8 min. Together after LCM(4,6,8)=24 min', vedic:false },
  { id:13, category:'math', title:'Profit-Loss: Same SP same %', icon:'PL', body:'When sold at same SP with same % profit & loss: always a loss!', formula:'Loss% = (Common%/10)^2', example:'Each at 100, 10% profit & 10% loss:\nLoss% = (10/10)^2 = 1% loss', vedic:false },
  { id:14, category:'math', title:'Sum of first n natural numbers', icon:'SN', body:'Instantly sum 1+2+3...+n', formula:'S = n(n+1)/2', example:'1+2+...+100 = 100x101/2 = 5050\n1+2+...+50 = 50x51/2 = 1275', vedic:false },
  { id:15, category:'reasoning', title:'Clock angle formula', icon:'CL', body:'Calculate clock angles in 5 seconds.', formula:'Angle = |30H - 5.5M|', example:'At 4:20 -> |120-110|=10 degrees\nAt 2:45 -> |60-247.5|=187.5 -> reflex=172.5', vedic:false },
  { id:16, category:'vedic', title:'Cross multiplication (2-digit x 2-digit)', icon:'CM', body:'Multiply any two 2-digit numbers using Vedic cross method.', formula:'AB x CD = AC | AD+BC | BD (handle carries)', example:'23 x 14:\nLeft: 2x1=2\nMiddle: 2x4+3x1=11\nRight: 3x4=12\n= 2|11|12 -> 322', vedic:true },
  { id:17, category:'math', title:'HCF by Euclidean Algorithm', icon:'HC', body:'Fastest method to find HCF of two numbers.', formula:'HCF(a,b) = HCF(b, a mod b) repeat till remainder=0', example:'HCF(48,36): 48=1x36+12 -> HCF(36,12): 36=3x12+0 -> HCF=12', vedic:false },
  { id:18, category:'math', title:'Compound Interest 2-year shortcut', icon:'CI', body:'Find CI for 2 years without full formula.', formula:'CI = SI + (SI^2)/100\nwhere SI is for 1 year', example:'P=1000, R=10%, SI for 1yr=100\nCI = 100+100 + (100x10/100) = 210', vedic:false },
  { id:19, category:'math', title:'Average of consecutive numbers', icon:'AV', body:'Find average of consecutive numbers instantly.', formula:'Average = (First + Last) / 2', example:'Avg of 11 to 21 = (11+21)/2 = 16\nAvg of 1 to n = (n+1)/2', vedic:false },
  { id:20, category:'reasoning', title:'Mirror image time trick', icon:'MI', body:'Find real time from mirror reflection of clock.', formula:'Mirror time = 11:60 - Shown time', example:'Mirror shows 2:30 -> 11:60-2:30=9:30\nMirror shows 8:15 -> 11:60-8:15=3:45', vedic:false }
];

/* ── DAILY TIPS ──────────────────────────────────────────────── */
BB.dailyTips = [
  { topic:'Vedic Math', tip:'To multiply any number by 11: add adjacent digits and put them between the first and last digit. E.g., 47 x 11 = 4(4+7)7 = 4(11)7 -> carry -> 517.' },
  { topic:'Clock Trick', tip:'The angle between clock hands = |30H - 5.5M|. At 3:15 it is |90-82.5|=7.5 degrees. Memorize this formula!' },
  { topic:'LCM vs HCF', tip:'"Ringing together" -> LCM. "Largest piece size" -> HCF. This keyword trick alone solves 80% of LCM/HCF word problems.' },
  { topic:'Mirror Image', tip:'For mirror time: 11 hours 60 minutes minus the shown time = actual time. E.g., mirror shows 2:30 -> 11:60-2:30 = 9:30.' },
  { topic:'Series Trick', tip:'If you see a series like 2, 5, 10, 17, 26... find differences: 3,5,7,9 -- consecutive odd numbers! Next difference=11, so next term=37.' },
  { topic:'Probability', tip:'P(at least one) = 1 - P(none). Much easier than counting all favorable cases directly.' },
  { topic:'Percentage Swap', tip:'x% of y = y% of x. So 32% of 25 is the same as 25% of 32 = 8. Always convert to the simpler version!' },
  { topic:'Blood Relations', tip:'When solving blood relation chains, simplify step by step. "Brother\'s mother" = "Mother". "Mother\'s husband" = "Father". Never skip a step!' },
  { topic:'Trains', tip:'Two trains crossing in opposite directions: add their speeds. Same direction: subtract. Distance = sum of their lengths.' },
  { topic:'Compound Interest', tip:'CI - SI (for 2 years) = P x (R/100)^2. This gives the extra interest that CI earns over SI.' }
];

/* ── ACHIEVEMENTS ────────────────────────────────────────────── */
BB.achievements = [
  { id:'first_quiz', icon:'🎯', name:'First Quiz', desc:'Complete your first quiz', condition: p => p.totalQuizzes >= 1 },
  { id:'streak_3', icon:'🔥', name:'3-Day Fire', desc:'3 day streak', condition: p => p.streak >= 3 },
  { id:'streak_7', icon:'💥', name:'Week Warrior', desc:'7 day streak', condition: p => p.streak >= 7 },
  { id:'perfect_score', icon:'💯', name:'Perfectionist', desc:'Get 100% in a quiz', condition: p => p.perfectQuizzes >= 1 },
  { id:'100_solved', icon:'✅', name:'Century', desc:'Solve 100 questions', condition: p => p.totalSolved >= 100 },
  { id:'speed_demon', icon:'⚡', name:'Speed Demon', desc:'Finish blitz quiz', condition: p => p.blitzComplete >= 1 },
  { id:'scholar', icon:'📚', name:'Scholar', desc:'Study 5 topics', condition: p => p.topicsStudied >= 5 },
  { id:'xp_1000', icon:'⭐', name:'Star Learner', desc:'Earn 1000 XP', condition: p => p.totalXP >= 1000 },
  { id:'accuracy_80', icon:'🏹', name:'Sharp Shooter', desc:'80%+ accuracy overall', condition: p => p.accuracy >= 80 },
  { id:'night_owl', icon:'🦉', name:'Night Owl', desc:'Study after 10 PM', condition: p => p.nightStudy >= 1 },
  { id:'flashcard_50', icon:'🃏', name:'Card Master', desc:'Review 50 flashcards', condition: p => p.flashcardsReviewed >= 50 },
  { id:'all_topics', icon:'🌟', name:'All-Rounder', desc:'Study all 20 topics', condition: p => p.topicsStudied >= 20 }
];

/* ── LEADERBOARD MOCK DATA ───────────────────────────────────── */
BB.mockLeaderboard = [
  { name:'Arjun S.', xp:4820, avatar:'AS', color:'#6c63ff' },
  { name:'Priya M.', xp:4350, avatar:'PM', color:'#ec4899' },
  { name:'Rohit K.', xp:3910, avatar:'RK', color:'#f59e0b' },
  { name:'Sneha T.', xp:3650, avatar:'ST', color:'#10b981' },
  { name:'Vikram P.', xp:3200, avatar:'VP', color:'#0ea5e9' },
  { name:'Ananya R.', xp:2980, avatar:'AR', color:'#8b5cf6' },
  { name:'Kiran B.', xp:2750, avatar:'KB', color:'#ef4444' },
  { name:'Deepa N.', xp:2500, avatar:'DN', color:'#14b8a6' },
  { name:'Suresh L.', xp:2100, avatar:'SL', color:'#f97316' },
  { name:'Meera G.', xp:1890, avatar:'MG', color:'#a855f7' }
];

/* ═══════════════════════════════════════════════════════════════
   APP_DATA BRIDGE
   Transforms flat BB arrays → per-topic enriched objects that
   app.js expects (topic.lessons, topic.shortcuts, topic.quizzes,
   topic.flashcards, topic.examples).
   ═══════════════════════════════════════════════════════════════ */
(function buildAppData() {
  const topicsEnriched = BB.topics.map(t => {
    // ── lessons: from concepts ──────────────────────────────────
    const lessons = (t.concepts || []).map(c => ({
      title: c.title,
      content: [
        c.body,
        c.formula ? `<div class="formula-box">📐 <strong>Formula:</strong> ${c.formula.replace(/\n/g, '<br>')}</div>` : '',
        c.trick  ? `<div class="trick-box">💡 <strong>Trick:</strong> ${c.trick}</div>` : ''
      ].filter(Boolean).join(''),
    }));

    // ── examples: from concepts' example fields ─────────────────
    const examples = (t.concepts || []).filter(c => c.example).map((c, i) => ({
      q: `Example for ${c.title}`,
      answer: c.example,
      solution: c.trick || c.body,
    }));

    // ── shortcuts: BB.shortcuts filtered by category match ──────
    const catMap = { reasoning: 'reasoning', math: 'math', vedic: 'vedic' };
    const topicShortcuts = BB.shortcuts.filter(s => {
      // Match shortcuts to this topic by category or by title keyword
      const topicWords = t.title.toLowerCase().split(/\W+/);
      const shortcutWords = (s.title + ' ' + s.body).toLowerCase();
      const catMatch = (t.category === 'reasoning' && s.category === 'reasoning') ||
                       (t.category === 'math' && (s.category === 'math' || s.category === 'vedic'));
      const titleHit = topicWords.some(w => w.length > 3 && shortcutWords.includes(w));
      return titleHit;
    });
    // Fallback: give every topic 2 generic shortcuts from its category
    const shortcuts = topicShortcuts.length > 0 ? topicShortcuts :
      BB.shortcuts.filter(s =>
        t.category === 'reasoning' ? s.category === 'reasoning' :
        (s.category === 'math' || s.category === 'vedic')
      ).slice(0, 2);

    // Normalise shortcuts to { title, content } shape used in renderShortcutsPanel
    const shortcutsNorm = shortcuts.map(s => ({
      ...s,
      content: [
        s.body,
        s.formula ? `<div class="formula-box">📐 ${s.formula.replace(/\n/g, '<br>')}</div>` : '',
        s.example ? `<div class="example-inline">📝 ${s.example.replace(/\n/g, '<br>')}</div>` : ''
      ].filter(Boolean).join('')
    }));

    // ── quizzes: BB.questions filtered by topicId ──────────────
    const rawQ = BB.questions.filter(q => q.topicId === t.id);
    // Normalise question shape: app.js uses q.question, q.explanation
    const quizzes = rawQ.map(q => ({
      ...q,
      question: q.q,
      explanation: q.explanation || q.hint || '',
    }));

    // ── flashcards: BB.flashcards filtered by topicId ──────────
    const rawFC = BB.flashcards.filter(fc => fc.topicId === t.id);
    // Normalise: app.js uses card.front / card.back
    const flashcards = rawFC.map(fc => ({
      ...fc,
      front: fc.q,
      back: [fc.a, fc.formula ? `Formula: ${fc.formula}` : ''].filter(Boolean).join('\n'),
    }));

    return {
      ...t,
      lessons,
      examples,
      shortcuts: shortcutsNorm,
      quizzes,
      flashcards,
    };
  });

  window.APP_DATA = {
    topics: topicsEnriched,
    shortcuts: BB.shortcuts,
    flashcards: BB.flashcards,
    questions: BB.questions,
    dailyTips: BB.dailyTips,
    achievements: BB.achievements,
    leaderboard: BB.mockLeaderboard,
  };
})();

/* ═══════════════════════════════════════════════════════════════
   STATE & PERSISTENCE
   ═══════════════════════════════════════════════════════════════ */
(function initState() {
  const STORAGE_KEY = 'brainboost_state_v1';

  function defaultState() {
    return {
      lang: 'en',
      bookmarks: [],
      progress: {},   // topicId -> 0|1
      quizScores: {}, // questionId -> 0|1
      streak: 0,
      lastStudyDate: null,
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return Object.assign(defaultState(), JSON.parse(raw));
    } catch(e) {}
    return defaultState();
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(window.STATE));
    } catch(e) {}
  }

  // ── Streak logic ─────────────────────────────────────────────
  function updateStreak(state) {
    const today = new Date().toDateString();
    if (state.lastStudyDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    state.streak = state.lastStudyDate === yesterday ? (state.streak || 0) + 1 : 1;
    state.lastStudyDate = today;
    saveState();
  }

  window.STATE = loadState();
  updateStreak(window.STATE);

  // ── Global helpers used by app.js ────────────────────────────
  window.saveState = saveState;

  window.isBookmarked = function(topicId) {
    return window.STATE.bookmarks.includes(topicId);
  };

  window.toggleBookmark = function(topicId) {
    const idx = window.STATE.bookmarks.indexOf(topicId);
    if (idx === -1) {
      window.STATE.bookmarks.push(topicId);
      saveState();
      return true; // added
    } else {
      window.STATE.bookmarks.splice(idx, 1);
      saveState();
      return false; // removed
    }
  };

  window.markTopicComplete = function(topicId) {
    window.STATE.progress[topicId] = 1;
    saveState();
  };
})();

