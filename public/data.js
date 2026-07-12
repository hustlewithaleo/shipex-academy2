/* ============================================================
   COURSE DATA — single source of truth
   ------------------------------------------------------------
   Everything (dashboard, course page, watch view) reads from
   this file. To add a course later, push another object into
   COURSES with the same shape. To wire real videos, set each
   lesson's `src` to your video URL and `poster` to a thumbnail.
   ============================================================ */

const COURSES = [
  {
    id: "ecom-masterclass",
    title: "The E-Commerce Masterclass by Zakaria Airakaz",
    tagline: "The full system — build, launch, and scale a brand from zero.",
    // thumbnail shown on the dashboard card. Swap for your own art anytime.
    cover: "https://i.imgur.com/DIybl5f.png",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$1,500",
    chapters: [
      {
        id: "ch1",
        title: "Unlock the 100M$ Version of Yourself",
        lessons: [
          { id: "c1-1", title: "Mindset Stuff. Motivation. Discipline", duration: "53m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/1.%20Unlock%20the%20100M%24%20Version%20of%20Yourself/1.%20MINDSET%20STUFF.%20MOTIVATION.%20DISCIPLINE.mp4", resources: [] },
          { id: "c1-2", title: "Track Your Life - More Green Means You're Making Money, More Red Means You're Getting Fucked", duration: "14m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/1.%20Unlock%20the%20100M%24%20Version%20of%20Yourself/2.%20Track%20Your%20Life%20-%20More%20Green%20Means%20You're%20Making%20Money%2C%20More%20Red%20Means%20You're%20Getting%20Fucked%20(online-video-cutter.com).mp4", resources: [
            {"name": "Track Your life MasterClass.xlsx", "size": "9 KB"}
          ] },
          { id: "c1-3", title: "The Cheat Code That Makes Business Feel Like a Game You Can't Stop Winning", duration: "23m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/1.%20Unlock%20the%20100M%24%20Version%20of%20Yourself/3.%20The%20Cheat%20Code%20That%20Makes%20Business%20Feel%20Like%20a%20Game%20You%20Can't%20Stop%20Winning.mp4", resources: [] },
          { id: "c1-4", title: "How To Unfuck Your Life And Protect It To Go To The 100M$", duration: "45m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/1.%20Unlock%20the%20100M%24%20Version%20of%20Yourself/4.%20How%20To%20Unfuck%20Your%20Life%20And%20Protect%20It%20To%20Go%20To%20The%20100M%24.mp4", resources: [] },
          { id: "c1-5", title: "Long-Term Thinking - The Real Secret to Building Serious Wealth", duration: "23m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/1.%20Unlock%20the%20100M%24%20Version%20of%20Yourself/5.%20Long-Term%20Thinking%20-%20The%20Real%20Secret%20to%20Building%20Serious%20Wealth.mp4", resources: [] },
          { id: "c1-6", title: "Don't Get Mad and Don't Expect Results That You Know You Didn't Work For", duration: "25m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/1.%20Unlock%20the%20100M%24%20Version%20of%20Yourself/6.%20Don't%20Get%20Mad%20and%20Don't%20Expect%20Results%20That%20You%20Know%20You%20Didn't%20Work%20For.mp4", resources: [] },
          { id: "c1-7", title: "How to increase your energy", duration: "16m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/1.%20Unlock%20the%20100M%24%20Version%20of%20Yourself/7.%20How%20to%20increase%20your%20energy.mp4", resources: [] }
        ],
      },
      {
        id: "ch2",
        title: "Ecom Masterclass",
        sections: [
          {
            id: "ch2-s1",
            title: "The Art of Selling",
            lessons: [
              { id: "c2-1-1", title: "The Art of Selling", duration: "1h 5m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/1.%20The%20Art%20of%20Selling/1.%20The%20Art%20of%20Selling.mp4", resources: [] }
            ],
          },
          {
            id: "ch2-s2",
            title: "Product Research MasterClass",
            lessons: [
              { id: "c2-2-1", title: "Product Research MasterClass Part 1", duration: "1h 23m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/2.%20Product%20Research%20MasterClass/2.%20Product%20Research%20MasterClass%20Part%201.mp4", resources: [
                {"name": "Product Research Pt .1.docx", "size": "1.3 MB"}
              ] },
              { id: "c2-2-2", title: "Product Research MasterClass by Zakaria Airakaz Part II Facebook & Tiktok Shop", duration: "1h 19m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/2.%20Product%20Research%20MasterClass/3.%20Product%20Research%20MasterClass%20by%20Zakaria_Airakaz%20Part%20II%20Facebook%20%26%20Tiktok%20Shop.mp4", resources: [
                {"name": "Product Research Pt .2.docx", "size": "139 KB"},
                {"name": "Product Selection.xlsx", "size": "8 KB"}
              ] },
              { id: "c2-2-3", title: "Product Research MasterClass by Zakaria Airakaz Part Ill product researchs on reddit", duration: "1h 3m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/2.%20Product%20Research%20MasterClass/4.%20Product%20Research%20MasterClass%20by%20Zakaria_Airakaz%20Part%20Ill%20product%20researchs%20on%20reddit.mp4", resources: [] }
            ],
          },
          {
            id: "ch2-s3",
            title: "Market Research - Avatar Research",
            lessons: [
              { id: "c2-3-1", title: "What Is an Avatar and Why Do We Do Avatar Research", duration: "24m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/5.%20What%20Is%20an%20Avatar%20and%20Why%20Do%20We%20Do%20Avatar%20Research.mp4", resources: [] },
              { id: "c2-3-2", title: "Market Research Avatar Selection by Zakaria Airakaz - PART I", duration: "1h 55m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/6.%20Market%20Research%20_%20Avatar%20Selection%20by%20Zakaria_Airakaz%20-%20PART%20I.mp4", resources: [] },
              { id: "c2-3-3", title: "Avatar + Avatar Selection by Zakaria Airakaz Part II", duration: "59m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/7.%20Avatar%20%2B%20Avatar%20Selection%20by%20Zakaria_Airakaz%20Part%20II.mp4", resources: [
                {"name": "Avatar selection by Zakaria Airakaz (1).xlsx", "size": "5 KB"},
                {"name": "Market Research Avatar Selection by Zakaria Airakaz (1).docx", "size": "495 KB"}
              ] },
              { id: "c2-3-4", title: "Avatar Deep Dive. Reddit Research Part I", duration: "1h", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/8.%20Avatar%20Deep%20Dive.%20Reddit%20Research%20Part%20I.mp4", resources: [
                {"name": "Avatar Deep Divepla PCOS.docx", "size": "709 KB"}
              ] },
              { id: "c2-3-5", title: "Avatar Deep Dive. Reddit Research Part II", duration: "40m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/9.%20Avatar%20Deep%20Dive.%20Reddit%20Research%20Part%20II.mp4", resources: [] },
              { id: "c2-3-6", title: "Reddit Avatar Deep Dive Research using AI", duration: "50m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/10.%20Reddit%20Avatar%20Deep%20Dive%20Research%20using%20AI.mp4", resources: [
                {"name": "Ai Prompt 2.0 For Reddit Avatar Deep Dive Research (1).docx", "size": "8 KB"},
                {"name": "Avatar Deep Dive Research (1) (1).docx", "size": "8 KB"}
              ] },
              { id: "c2-3-7", title: "Avatar Deep Dive. FORUMES RESEARCH", duration: "34m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/11.%20Avatar%20Deep%20Dive.%20FORUMES%20RESEARCH.mp4", resources: [] },
              { id: "c2-3-8", title: "Avatar Deep Dive. Youtube Research", duration: "40m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/12.%20Avatar%20Deep%20Dive.%20Youtube%20Research.mp4", resources: [] },
              { id: "c2-3-9", title: "Avatar Deep Dive. Tiktok Research", duration: "38m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/13.%20Avatar%20Deep%20Dive.%20Tiktok%20Research.mp4", resources: [] },
              { id: "c2-3-10", title: "Avatar Deep Dive. Amazon Research", duration: "47m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/14.%20Avatar%20Deep%20Dive.%20Amazon%20Research.mp4", resources: [] },
              { id: "c2-3-11", title: "AI for Speed Research", duration: "15m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/15.%20AI%20FOR%20SPEED%20RESEARCH.mp4", resources: [
                {"name": "AI Prompt Avatar Deep Dive Raw Insight Extraction (2).docx", "size": "7 KB"},
                {"name": "Amazon Research for PCOS Hair Loss Sufferers.docx", "size": "9 KB"}
              ] },
              { id: "c2-3-12", title: "Cleaning Avatar Research Documents & Extracting Insights", duration: "42m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/3.%20Market%20Research%20-%20Avatar%20Research/16.%20CLEANING%20AVATAR%20RESEARCH%20DOCUMENTS%20%26%20EXTRACTING%20INSIGHTS.mp4", resources: [
                {"name": "Avatar Insight PCOS Hair Loss Master Class.docx", "size": "15 KB"},
                {"name": "Clean Documents AI Prompt Master Class.docx", "size": "215 KB"},
                {"name": "Final Document PCOS Hair Loss Research Master Class.docx", "size": "23 KB"}
              ] }
            ],
          },
          {
            id: "ch2-s4",
            title: "Market Research - PROBLEM & SOLUTION",
            lessons: [
              { id: "c2-4-1", title: "Research the Root Cause of the Problem", duration: "57m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/4.%20Market%20Research%20-%20PROBLEM%20%26%20SOLUTION/17.%20RESEARCH%20THE%20ROOT%20CAUSE%20OF%20THE%20PROBLEM.mp4", resources: [
                {"name": "Research Root Cause of PCOS Hair Loss Suffers.docx", "size": "10 KB"},
                {"name": "RESEARCH THE ROOT CAUSE OF THE PROBLEM With AI (1) (1).docx", "size": "833 KB"},
                {"name": "Root Cause Draft (1).docx", "size": "19 KB"}
              ] },
              { id: "c2-4-2", title: "Research the Solution Mechanism of the Problem", duration: "45m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/4.%20Market%20Research%20-%20PROBLEM%20%26%20SOLUTION/18.%20RESEARCH%20THE%20SOLUTION%20MECHANISM%20OF%20THE%20PROBLEM.mp4", resources: [
                {"name": "RESEARCH THE SOLUTION MECHANISM OF THE PROBLEM With AI.docx", "size": "53 KB"},
                {"name": "Solution Mehcanism of the Problem.docx", "size": "12 KB"}
              ] }
            ],
          },
          {
            id: "ch2-s5",
            title: "Product Development",
            lessons: [
              { id: "c2-5-1", title: "Product Development 1", duration: "40m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/5.%20PRODUCT%20DEVELOPMENT/19.%20PRODUCT%20DEVELOPMENT%201.mp4", resources: [
                {"name": "AI Prompt for Product Finding Masterclass.docx", "size": "8 KB"},
                {"name": "Product Development.docx", "size": "12 KB"}
              ] }
            ],
          },
          {
            id: "ch2-s6",
            title: "Competitor Research",
            lessons: [
              { id: "c2-6-1", title: "Alternative Solution Research", duration: "43m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/6.%20COMPETITOR%20RESEARCH/20.%20Alternative%20Solution%20Research.mp4", resources: [
                {"name": "Alternative Solution Research PCOS Women with Hair loss DOCUMENT MASTER CLASS.docx", "size": "11 KB"},
                {"name": "Alternative Solution Research PCOS Women with Hair loss MasterClass.docx", "size": "1.2 MB"},
                {"name": "Image Ads AI Prompte Us vs Others.docx", "size": "12 KB"}
              ] },
              { id: "c2-6-2", title: "Research Similair Product for objections", duration: "26m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/6.%20COMPETITOR%20RESEARCH/21.%20Research%20Similair%20Product%20for%20objections.mp4", resources: [
                {"name": "Similar Product Research Objections.docx", "size": "288 KB"},
                {"name": "Similar Product Research PCOS Women with Hair loss MasterClass.docx", "size": "51 KB"}
              ] },
              { id: "c2-6-3", title: "Competitor Research Analyse Part I", duration: "1h", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/6.%20COMPETITOR%20RESEARCH/22.%20Competitor%20Research%20Analyse%20Part%20I.mp4", resources: [] },
              { id: "c2-6-4", title: "Competitor Research Analyse Master Class Part II", duration: "34m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/6.%20COMPETITOR%20RESEARCH/23.%20Competitor%20Research%20Analyse%20Master%20Class%20Part%20II.mp4", resources: [
                {"name": "Competitor Research Analyse Master Class.docx", "size": "95 KB"}
              ] }
            ],
          },
          {
            id: "ch2-s7",
            title: "WATCH THIS NOW — The Most Important Step After Market Research (Don't Skip This)",
            lessons: [
              { id: "c2-7-1", title: "Road Map", duration: "1h 1m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/7.%20WATCH%20THIS%20NOW%20%E2%80%94%20The%20Most%20Important%20Step%20After%20Market%20Research%20(Don't%20Skip%20This)/24.%20ROAD%20MAP.mp4", resources: [
                {"name": "PCOS Brand Road Map Masterclass Video.xlsx", "size": "73 KB"}
              ] }
            ],
          },
          {
            id: "ch2-s8",
            title: "Ads creation",
            lessons: [
              { id: "c2-8-1", title: "Research to image Ads SOP MasterClass", duration: "1h 57m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/8.%20Ads%20creation/25.%20Research%20to%20image%20Ads%20SOP%20MasterClass.mp4", resources: [
                {"name": "AI Prompt for Visual Inspiration.docx", "size": "8 KB"},
                {"name": "Image Ads AI Prompte (2).docx", "size": "12 KB"},
                {"name": "Research to image Ads SOP MasterClass.docx", "size": "11 KB"}
              ] },
              { id: "c2-8-2", title: "Develop Ad Concept into Full Script for Creator's Guide", duration: "32m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/8.%20Ads%20creation/26.%20Develop%20Ad%20Concept%20into%20Full%20Script%20for%20Creator's%20Guide.mp4", resources: [
                {"name": "Ad Analysis Based on The Ultimate SOP for Creating Killer Ads (1).docx", "size": "11 KB"},
                {"name": "Ads draft -- to script --- to guidline for content creators (1).docx", "size": "24 KB"},
                {"name": "AI Prompt for Ad Concepts and Ad Scripts.docx", "size": "11 KB"},
                {"name": "🎬 Content Creator Guidelines.docx", "size": "17 KB"}
              ] },
              { id: "c2-8-3", title: "Script writing", duration: "23m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/8.%20Ads%20creation/27.%20Script%20writing.mp4", resources: [] }
            ],
          },
          {
            id: "ch2-s9",
            title: "Landing page",
            lessons: [
              { id: "c2-9-1", title: "How to creat high Landing page", duration: "48m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/2.%20Ecom%20Masterclass/9.%20Landing%20page/28.%20How%20to%20creat%20high%20Landing%20page.mp4", resources: [
                {"name": "Ai Prompt — for High-Converting Landing Page Creation.docx", "size": "13 KB"},
                {"name": "The Ultimate SOP for Building High-Converting Landing Pages by Zakaria Airakaz MasterClass 2.0 (3).pdf", "size": "459 KB"}
              ] }
            ],
          }
        ],
      },
      {
        id: "ch3",
        title: "Advertorial Mastery",
        sections: [
          {
            id: "ch3-s1",
            title: "Intro to Advertorials",
            lessons: [
              { id: "c3-1-1", title: "Advertorial Intro101 - The Art and Science of Pre-Sell Marketing", duration: "44m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/1.%20Intro%20to%20Advertorials/1.%20Advertorial%20Intro101%20-%20The%20Art%20and%20Science%20of%20Pre-Sell%20Marketing.mp4", resources: [
                {"name": "Advertorial Strategy 101.docx", "size": "7.2 MB"}
              ] },
              { id: "c3-1-2", title: "Advertorial full breakdown Nooro example to understand", duration: "1h 39m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/1.%20Intro%20to%20Advertorials/2.%20Advertorial%20full%20breakdown%20Nooro%20example%20to%20understand.mp4", resources: [] },
              { id: "c3-1-3", title: "The Copywriting Bible Part I", duration: "1h 9m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/1.%20Intro%20to%20Advertorials/3.%20The%20Copywriting%20Bible%20Part%20I.mp4", resources: [
                {"name": "Your Copywriting Bible by Zakaria airakaz.docx", "size": "1.3 MB"}
              ] },
              { id: "c3-1-4", title: "The Copywriting Bible Part II", duration: "58m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/1.%20Intro%20to%20Advertorials/4.%20The%20Copywriting%20Bible%20Part%20II.mp4", resources: [] }
            ],
          },
          {
            id: "ch3-s2",
            title: "The Blueprint for Persuasive Advertorials",
            lessons: [
              { id: "c3-2-1", title: "Crafting Irresistible Headlines That Hook Instantly", duration: "52m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/2.%20The%20Blueprint%20for%20Persuasive%20Advertorials/5.%20Crafting%20Irresistible%20Headlines%20That%20Hook%20Instantly.mp4", resources: [
                {"name": "Crafting Irresistible Headlines That Hook Instantly by Zakaria Airakaz.pdf", "size": "1.3 MB"}
              ] },
              { id: "c3-2-2", title: "Lead - Writing Leads That Pull Readers In", duration: "29m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/2.%20The%20Blueprint%20for%20Persuasive%20Advertorials/6.%20Lead%20-%20Writing%20Leads%20That%20Pull%20Readers%20In.mp4", resources: [] },
              { id: "c3-2-3", title: "Background Story - Storytelling That Builds Connection", duration: "23m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/2.%20The%20Blueprint%20for%20Persuasive%20Advertorials/7.%20Background%20Story%20-%20Storytelling%20That%20Builds%20Connection.mp4", resources: [
                {"name": "file 1NNxQk7i2Cpguo6jp37Q9C.docx", "size": "2.2 MB"}
              ] },
              { id: "c3-2-4", title: "How to Write a Root Cause So Clear Even Skeptics Trust It (and the Half-Asleep Still Get It)", duration: "33m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/2.%20The%20Blueprint%20for%20Persuasive%20Advertorials/8.%20How%20to%20Write%20a%20Root%20Cause%20So%20Clear%20Even%20Skeptics%20Trust%20It%20(and%20the%20Half-Asleep%20Still%20Get%20It).mp4", resources: [
                {"name": "How to Write a Root Cause Explanation So Clear Even Skeptics Trust It (and the Half-Asleep Still Get It).pdf", "size": "1.5 MB"}
              ] },
              { id: "c3-2-5", title: "The Secret to Writing a Unique Mechanism That Instantly .Clicks. in Your Reader's Brain", duration: "29m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/2.%20The%20Blueprint%20for%20Persuasive%20Advertorials/9.%20The%20Secret%20to%20Writing%20a%20Unique%20Mechanism%20That%20Instantly%20.Clicks.%20in%20Your%20Reader's%20Brain.mp4", resources: [
                {"name": "How to Write a Unique Mechanism So Obvious It Feels Like the Only Way Forward.pdf", "size": "1.1 MB"}
              ] },
              { id: "c3-2-6", title: "Product Build-Up - Laying the Ground for the product Building So Much Value They're Sold Before the Pitch", duration: "23m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/2.%20The%20Blueprint%20for%20Persuasive%20Advertorials/10.%20Product%20Build-Up%20-%20Laying%20the%20Ground%20for%20the%20product%20Building%20So%20Much%20Value%20They're%20Sold%20Before%20the%20Pitch.mp4", resources: [
                {"name": "Product Build-Up- Laying the Ground for the product Building So Much Value They’re Sold Before the Pitch.pdf", "size": "882 KB"}
              ] },
              { id: "c3-2-7", title: "Product Reveal - Making the Product Feel Like the Reward", duration: "22m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/2.%20The%20Blueprint%20for%20Persuasive%20Advertorials/11.%20Product%20Reveal%20-%20Making%20the%20Product%20Feel%20Like%20the%20Reward.mp4", resources: [
                {"name": "Product Reveal- Making the Product Feel Like the Reward.pdf", "size": "783 KB"}
              ] },
              { id: "c3-2-8", title: "Build a Close So Manipulative They'd Have to Be Crazy Not to Grab It Before It's Gone I", duration: "44m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/2.%20The%20Blueprint%20for%20Persuasive%20Advertorials/12.%20Build%20a%20Close%20So%20Manipulative%20They'd%20Have%20to%20Be%20Crazy%20Not%20to%20Grab%20It%20Before%20It's%20Gone%20I.mp4", resources: [
                {"name": "Build a Close So Manipulative They’d Have to Be Crazy Not to Grab It Before It’s Gone.pdf", "size": "3.3 MB"}
              ] },
              { id: "c3-2-9", title: "Close the Sale Part II", duration: "14m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/2.%20The%20Blueprint%20for%20Persuasive%20Advertorials/13.%20Close%20the%20Sale%20Part%20II.mp4", resources: [] }
            ],
          },
          {
            id: "ch3-s3",
            title: "Listicles",
            lessons: [
              { id: "c3-3-1", title: "The Art of Persuasion in Disguise - How 'Casual Listicles Quietly Outsell Your Hardest Pitches", duration: "45m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/3.%20Advertorial%20Mastery/3.%20Listicles/14.%20The%20Art%20of%20Persuasion%20in%20Disguise%20-%20How%20'Casual%20Listicles%20Quietly%20Outsell%20Your%20Hardest%20Pitches.mp4", resources: [] }
            ],
          }
        ],
      },
      {
        id: "ch4",
        title: "Creatives Mastery behind 100M$ Brand",
        sections: [
          {
            id: "ch4-s1",
            title: "Creatives Fundamentals",
            lessons: [
              { id: "c4-1-1", title: "The First Shift - Rewiring How You See Ads (And Why 99 Fail Before They Even Start)", duration: "1h 11m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/1.%20CREATIVES%20FUNDEMENATLS/1.%20The%20First%20Shift%20-%20Rewiring%20How%20You%20See%20Ads%20(And%20Why%2099%20Fail%20Before%20They%20Even%20Start).mp4", resources: [] },
              { id: "c4-1-2", title: "What Is an Angle, Mastering, Testing, and Scaling Ad Angles from Definition to $100M Growth", duration: "56m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/1.%20CREATIVES%20FUNDEMENATLS/2.%20What%20Is%20an%20Angle%2C%20Mastering%2C%20Testing%2C%20and%20Scaling%20Ad%20Angles%20from%20Definition%20to%20%24100M%20Growth.mp4", resources: [] },
              { id: "c4-1-3", title: "Angle Analysis - How a $100M Brand Runs It", duration: "38m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/1.%20CREATIVES%20FUNDEMENATLS/3.%20Angle%20Analysis%20-%20How%20a%20%24100M%20Brand%20Runs%20It.mp4", resources: [] },
              { id: "c4-1-4", title: "Master Ad concepts", duration: "29m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/1.%20CREATIVES%20FUNDEMENATLS/4.%20Master%20Ad%20concepts.mp4", resources: [] },
              { id: "c4-1-5", title: "Stop Selling To Strangers - The TOF Creative Masterclass", duration: "46m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/1.%20CREATIVES%20FUNDEMENATLS/5.%20Stop%20Selling%20To%20Strangers%20-%20The%20TOF%20Creative%20Masterclass.mp4", resources: [] }
            ],
          },
          {
            id: "ch4-s2",
            title: "Master TOF UGC - Learn the Foundations, See Examples, and Build Your Own",
            lessons: [
              { id: "c4-2-1", title: "How to Turn Avatar Research into High-Converting TOF UGC", duration: "1h 9m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/2.%20Master%20TOF%20UGC%20-%20Learn%20the%20Foundations%2C%20See%20Examples%2C%20and%20Build%20Your%20Own/6.%20How%20to%20Turn%20Avatar%20Research%20into%20High-Converting%20TOF%20UGC.mp4", resources: [] },
              { id: "c4-2-2", title: "Stop Pitching. Start Storytelling - The Art of UGC Scriptwriting That Actually Sells", duration: "39m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/2.%20Master%20TOF%20UGC%20-%20Learn%20the%20Foundations%2C%20See%20Examples%2C%20and%20Build%20Your%20Own/7.%20Stop%20Pitching.%20Start%20Storytelling%20-%20The%20Art%20of%20UGC%20Scriptwriting%20That%20Actually%20Sells.mp4", resources: [] },
              { id: "c4-2-3", title: "Masterclass Session - Complete Script Writing Process 3-Hour Raw Process (Uncut)", duration: "2h 51m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/2.%20Master%20TOF%20UGC%20-%20Learn%20the%20Foundations%2C%20See%20Examples%2C%20and%20Build%20Your%20Own/8.%20Masterclass%20Session%20-%20Complete%20Script%20Writing%20Process%203-Hour%20Raw%20Process%20(Uncut).mp4", resources: [] },
              { id: "c4-2-4", title: "Direct Response Script Analysis & Revision Framework", duration: "1h 7m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/2.%20Master%20TOF%20UGC%20-%20Learn%20the%20Foundations%2C%20See%20Examples%2C%20and%20Build%20Your%20Own/9.%20Direct%20Response%20Script%20Analysis%20%26%20Revision%20Framework.mp4", resources: [
                {"name": "Script Analysis AI Prompt V04.pdf", "size": "239 KB"}
              ] },
              { id: "c4-2-5", title: "The Natural Speech Converter", duration: "10m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/2.%20Master%20TOF%20UGC%20-%20Learn%20the%20Foundations%2C%20See%20Examples%2C%20and%20Build%20Your%20Own/10.%20THE%20NATURAL%20SPEECH%20CONVERTER.mp4", resources: [
                {"name": "The Natural Speech Converter AI Promte.pdf", "size": "87 KB"}
              ] },
              { id: "c4-2-6", title: "How to Turn Script to Brief for Content Creators", duration: "21m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/2.%20Master%20TOF%20UGC%20-%20Learn%20the%20Foundations%2C%20See%20Examples%2C%20and%20Build%20Your%20Own/11.%20HOW%20TO%20TURN%20SCRIPT%20TO%20BRIEF%20FOR%20CONTENT%20CREATORS.mp4", resources: [
                {"name": "Creator Brief Generator.docx", "size": "990 KB"},
                {"name": "CREATOR BRIEF RootedHer.docx", "size": "16 KB"}
              ] }
            ],
          },
          {
            id: "ch4-s3",
            title: "TOF Image Ads",
            lessons: [
              { id: "c4-3-1", title: "The Hidden Art of .Ugly. Native Ads & the Psychology That Makes Them Unstoppable", duration: "1h 16m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/3.%20TOF%20IMAGE%20ADS/12.%20The%20Hidden%20Art%20of%20.Ugly.%20Native%20Ads%20%26%20the%20Psychology%20That%20Makes%20Them%20Unstoppable.mp4", resources: [
                {"name": "Ad copy Advertorial EX1.pdf", "size": "217 KB"},
                {"name": "Copy of Ad copy Lead EX2.pdf", "size": "47 KB"},
                {"name": "Examples of Brands thats print with Ugly image ads.pdf", "size": "53 KB"},
                {"name": "Ad copy Advertorial EX3.pdf", "size": "255 KB"}
              ] }
            ],
          },
          {
            id: "ch4-s4",
            title: "Ad Learning Lab",
            lessons: [
              { id: "c4-4-1", title: "THE LEARNING OF ADS - Why Breaking Down Ads Is Your Path to Consistent Winners", duration: "27m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/4.%20Ad%20Learning%20Lab/13.%20THE%20LEARNING%20OF%20ADS%20-%20Why%20Breaking%20Down%20Ads%20Is%20Your%20Path%20to%20Consistent%20Winners.mp4", resources: [] },
              { id: "c4-4-2", title: "How to Manually Break Down Winner Ads Like a $100M Marketer", duration: "34m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/4.%20Ad%20Learning%20Lab/14.%20How%20to%20Manually%20Break%20Down%20Winner%20Ads%20Like%20a%20%24100M%20Marketer.mp4", resources: [
                {"name": "The Winning Ad Deconstruction Workbook.pdf", "size": "228 KB"}
              ] },
              { id: "c4-4-3", title: "Raw Winner Ad Breakdown Session Part 1", duration: "1h 53m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/4.%20Ad%20Learning%20Lab/15.%20Raw%20Winner%20Ad%20Breakdown%20Session%20Part%201.mp4", resources: [] },
              { id: "c4-4-4", title: "Part 2 Raw winner ad session", duration: "40m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/4.%20Ad%20Learning%20Lab/16.%20Part%202%20Raw%20winner%20ad%20session.mp4", resources: [] },
              { id: "c4-4-5", title: "Breaking down winner ads with AI", duration: "1h 1m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/4.%20Ad%20Learning%20Lab/17.%20Breaking%20down%20winner%20ads%20with%20AI.mp4", resources: [
                {"name": "AI Winning Ad Deconstruction.pdf", "size": "183 KB"}
              ] },
              { id: "c4-4-6", title: "Comparing Our Manual Breakdown to Its AI Analysis", duration: "27m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/4.%20Ad%20Learning%20Lab/18.%20COMPARING%20OUR%20MANUAL%20BREAKDOWN%20TO%20ITS%20AI%20ANALYSIS.mp4", resources: [
                {"name": "Comparing Your Manual Breakdown to Its AI Analysis.pdf", "size": "123 KB"}
              ] },
              { id: "c4-4-7", title: "Breaking down winners ADs Firstday Manually", duration: "1h 23m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/4.%20Ad%20Learning%20Lab/19.%20Breaking%20down%20winners%20ADs%20Firstday%20Manually.mp4", resources: [
                {"name": "9489942d-1178-40b3-8cdd-088b678133b6.docx", "size": "20 KB"}
              ] },
              { id: "c4-4-8", title: "First Day AI breakdown and compare it to our manual", duration: "32m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/4.%20Ad%20Learning%20Lab/20.%20First%20Day%20AI%20breakdown%20and%20compare%20it%20to%20our%20manual.mp4", resources: [] }
            ],
          },
          {
            id: "ch4-s5",
            title: "The No-Spend Diagnosis (CBO Rejects)",
            lessons: [
              { id: "c4-5-1", title: "The No-Spend Diagnosis (CBO Rejects)", duration: "33m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/6.Ad%20Learning%20Lab%20Loosing%20AD%20AD%20(New)/1.THE%20NO-SPEND%20DIAGNOSIS%20(CBO%20REJECTS).mp4", resources: [
                {"name": "The Losing Ad Autopsy Learning.docx", "size": "32 KB"}
              ] },
              { id: "c4-5-2", title: "The Full Autopsy (Ad Got Spend and Failed)", duration: "53m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/6.Ad%20Learning%20Lab%20Loosing%20AD%20AD%20(New)/2.THE%20FULL%20AUTOPSY%20(AD%20GOT%20SPEND%20AND%20FAILED).mp4", resources: [
                {"name": "The Losing Ad Autopsy Learning.docx", "size": "32 KB"},
                {"name": "The Losing Ad Autopsy — Filled Example.docx", "size": "23 KB"}
              ] },
              { id: "c4-5-3", title: "Autopsy Long Copy Native Ad", duration: "1h 4m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/4.%20Creatives%20Mastery%20behind%20100M%24%20Brand/6.Ad%20Learning%20Lab%20Loosing%20AD%20AD%20(New)/3.AUTOPSY%20LONG%20COPY%20NATIVE%20AD.mp4", resources: [
                {"name": "The Native Ad Autopsy Winner Edition.docx", "size": "21 KB"},
                {"name": "ULTIMATE Long Form Ad Swipe File (1).xlsx", "size": "49 KB"}
              ] }
            ],
          }
        ],
      },
      {
        id: "ch5",
        title: "ELITE COPYWRITING Masterclass",
        sections: [
          {
            id: "ch5-s1",
            title: "Part 0 - Introduction - The Foundation of Everything",
            lessons: [
              { id: "c5-1-1", title: "The Foundation. Brand-Safe Direct Response — How to Conv", duration: "32m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%200%20-%20Introduction%20-%20The%20Foundation%20of%20Everything/1.%20The%20Foundation.%20Brand-Safe%20Direct%20Response%20%E2%80%94%20How%20to%20Conv.mp4", resources: [] }
            ],
          },
          {
            id: "ch5-s2",
            title: "Part 1 - Market Intelligence",
            lessons: [
              { id: "c5-2-1", title: "The 5 Awareness Levels", duration: "16m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%201%20-%20Market%20Intelligence/2.%20The%205%20Awareness%20Levels.mp4", resources: [] },
              { id: "c5-2-2", title: "The 5 Sophistication Stages", duration: "10m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%201%20-%20Market%20Intelligence/3.%20The%205%20Sophistication%20Stages.mp4", resources: [] },
              { id: "c5-2-3", title: "Identifying Your Market Position", duration: "14m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%201%20-%20Market%20Intelligence/4.%20Identifying%20Your%20Market%20Position.mp4", resources: [] },
              { id: "c5-2-4", title: "The Awareness × Sophistication Matrix", duration: "14m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%201%20-%20Market%20Intelligence/5.%20The%20Awareness%20%C3%97%20Sophistication%20Matrix.mp4", resources: [] },
              { id: "c5-2-5", title: "Adjusting Copy for Market Position (Practical Application)", duration: "21m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%201%20-%20Market%20Intelligence/6.%20Adjusting%20Copy%20for%20Market%20Position%20(Practical%20Application).mp4", resources: [
                {"name": "Part-I-Market-Intelligence (1).pptx", "size": "1.0 MB"}
              ] }
            ],
          },
          {
            id: "ch5-s3",
            title: "Part 2 - Buyer Psychology",
            lessons: [
              { id: "c5-3-1", title: "The 6 Core Buying Emotions - What Actually Drives Purchases", duration: "22m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%202%20-%20Buyer%20Psychology/7.%20The%206%20Core%20Buying%20Emotions%20-%20What%20Actually%20Drives%20Purchases.mp4", resources: [] },
              { id: "c5-3-2", title: "The Emotional Journey to Purchase", duration: "9m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%202%20-%20Buyer%20Psychology/8.%20The%20Emotional%20Journey%20to%20Purchase.mp4", resources: [] },
              { id: "c5-3-3", title: "Pain vs Desire — Two Buying Modes", duration: "12m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%202%20-%20Buyer%20Psychology/9.%20Pain%20vs%20Desire%20%E2%80%94%20Two%20Buying%20Modes.mp4", resources: [] },
              { id: "c5-3-4", title: "The Buyer vs User Dynamic - When Two People Need Convincing", duration: "11m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%202%20-%20Buyer%20Psychology/10.%20The%20Buyer%20vs%20User%20Dynamic%20-%20When%20Two%20People%20Need%20Convincing.mp4", resources: [] },
              { id: "c5-3-5", title: "Emotional Intensity & Timing", duration: "15m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%202%20-%20Buyer%20Psychology/11.%20Emotional%20Intensity%20%26%20Timing.mp4", resources: [] },
              { id: "c5-3-6", title: "The Purchase Hesitation Emotions", duration: "9m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%202%20-%20Buyer%20Psychology/12.%20The%20Purchase%20Hesitation%20Emotions.mp4", resources: [] },
              { id: "c5-3-7", title: "🤖 Buyer Psychology Analyzer the Master Prompt", duration: "", src: "", resources: [] },
              { id: "c5-3-8", title: "Male vs Female Psychology of Selling", duration: "13m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%202%20-%20Buyer%20Psychology/14.%20Male%20vs%20Female%20Psychology%20of%20Selling.mp4", resources: [] }
            ],
          },
          {
            id: "ch5-s4",
            title: "Part 3 - Copywriting Techniques",
            lessons: [
              { id: "c5-4-1", title: "Intro", duration: "3m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/15.%20Intro.mp4", resources: [] },
              { id: "c5-4-2", title: "Foundation - Speaking Their Language", duration: "8m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/16.%20Foundation%20-%20Speaking%20Their%20Language.mp4", resources: [
                {"name": "🤖 AI Prompt Voice Extraction.docx", "size": "7 KB"}
              ] },
              { id: "c5-4-3", title: "Words That Kill Conversions - What NOT to Write", duration: "9m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/17.%20Words%20That%20Kill%20Conversions%20-%20What%20NOT%20to%20Write.mp4", resources: [] },
              { id: "c5-4-4", title: "Specificity Injection - The #1 Technique That Separates Pros From Amateurs", duration: "9m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/18.%20Specificity%20Injection%20-%20The%20%231%20Technique%20That%20Separates%20Pros%20From%20Amateurs.mp4", resources: [
                {"name": "🔢 the 7 Types of Specificity.docx", "size": "986 KB"}
              ] },
              { id: "c5-4-5", title: "Open Loops - How to KEEP Attention", duration: "17m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/19.%20Open%20Loops%20-%20How%20to%20KEEP%20Attention.mp4", resources: [
                {"name": "🤖 AI Prompt Generate Open Loops From Your Avatar File.docx", "size": "10 KB"}
              ] },
              { id: "c5-4-6", title: "Bucket Brigades & Transitions", duration: "8m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/20.%20Bucket%20Brigades%20%26%20Transitions.mp4", resources: [
                {"name": "🤖 AI Prompt Generate Bucket Brigades for Your Avatar.docx", "size": "8 KB"},
                {"name": "🪣 the Bucket Brigade Toolkit.docx", "size": "8 KB"}
              ] },
              { id: "c5-4-7", title: "Sensory Language - Make Them FEEL It", duration: "12m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/21.%20Sensory%20Language%20-%20Make%20Them%20FEEL%20It.mp4", resources: [
                {"name": "🎨 the 5 Senses in Copy.docx", "size": "983 KB"},
                {"name": "🤖 AI Prompt Generate Sensory Language From Your Avatar File.docx", "size": "8 KB"}
              ] },
              { id: "c5-4-8", title: "Future pacing", duration: "11m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/22.%20Future%20pacing.mp4", resources: [
                {"name": "AI Prompt Generate Dopamine-Activating Future Pacing.docx", "size": "8 KB"}
              ] },
              { id: "c5-4-9", title: "Rhythm & Flow - The Music of Copy", duration: "8m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/23.%20Rhythm%20%26%20Flow%20-%20The%20Music%20of%20Copy.mp4", resources: [
                {"name": "Rhythm & Flow The Music of Copy.docx", "size": "988 KB"}
              ] },
              { id: "c5-4-10", title: "The Damaging Admission", duration: "14m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/24.%20The%20Damaging%20Admission.mp4", resources: [] },
              { id: "c5-4-11", title: "The Takeaway & Disqualification", duration: "7m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%203%20-%20Copywriting%20Techniques/25.%20The%20Takeaway%20%26%20Disqualification.mp4", resources: [
                {"name": "📝 EXAMPLE OUTPUT KNEE PAIN (Age 58).docx", "size": "9 KB"},
                {"name": "📝 EXAMPLE OUTPUT MENOPAUSE (Age 52).docx", "size": "9 KB"},
                {"name": "🤖 AI Prompt Generate Takeaway & Disqualification Copy.docx", "size": "8 KB"}
              ] },
              { id: "c5-4-12", title: "Part-III-Copywriting-Techniques", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ch5-s5",
            title: "Part 4 - Hooks & Attention",
            lessons: [
              { id: "c5-5-1", title: "The Psychology of Attention Why People Stop (Or Don't)", duration: "31m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%204%20-%20Hooks%20%26%20Attention/1.%20The%20Psychology%20of%20Attention%20Why%20People%20Stop%20(Or%20Don't).mp4", resources: [] },
              { id: "c5-5-2", title: "Hook Rate Benchmarks", duration: "12m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%204%20-%20Hooks%20%26%20Attention/2.%20Hook%20Rate%20Benchmarks.mp4", resources: [] },
              { id: "c5-5-3", title: "Mining Customer Language Your Unfair Advantage", duration: "7m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%204%20-%20Hooks%20%26%20Attention/3.%20Mining%20Customer%20Language%20Your%20Unfair%20Advantage.mp4", resources: [
                {"name": "🤖 AI Prompt Mine Customer Language From Avatar for Hooks.docx", "size": "9 KB"}
              ] },
              { id: "c5-5-4", title: "Hook Stacking Visual + Text + Audio Layering", duration: "9m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%204%20-%20Hooks%20%26%20Attention/4.%20Hook%20Stacking%20Visual%20%2B%20Text%20%2B%20Audio%20Layering.mp4", resources: [] },
              { id: "c5-5-5", title: "Scroll-Stop Trigger Phrases", duration: "28m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%204%20-%20Hooks%20%26%20Attention/5.%20Scroll-Stop%20Trigger%20Phrases.mp4", resources: [
                {"name": "🎯 the Trigger Phrase Cheat Sheet.docx", "size": "7 KB"},
                {"name": "💣 the Trigger Phrase Word Banks.docx", "size": "10 KB"}
              ] },
              { id: "c5-5-6", title: "The First 3 Lines Opening Sentences That Lock Them In", duration: "17m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%204%20-%20Hooks%20%26%20Attention/6.%20The%20First%203%20Lines%20Opening%20Sentences%20That%20Lock%20Them%20In.mp4", resources: [
                {"name": "🔥 the Formulas.docx", "size": "8 KB"}
              ] },
              { id: "c5-5-7", title: "Hook Mistakes That Kill Attention: What NOT to Do", duration: "29m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%204%20-%20Hooks%20%26%20Attention/7.%20Hook%20Mistakes%20That%20Kill%20Attention%253a%20What%20NOT%20to%20Do.mp4", resources: [] },
              { id: "c5-5-8", title: "🤖 Hook Generator the Master Prompt", duration: "", src: "", resources: [] },
              { id: "c5-5-9", title: "Part-IV-Hooks-Attention", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ch5-s6",
            title: "Part 5 - Story & Drama",
            lessons: [
              { id: "c5-6-1", title: "Intro", duration: "3m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/1.%20Intro.mp4", resources: [] },
              { id: "c5-6-2", title: "Why Story Bypasses Skepticism", duration: "16m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/2.%20Why%20Story%20Bypasses%20Skepticism.mp4", resources: [] },
              { id: "c5-6-3", title: "The 3 Story Types That Convert", duration: "8m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/3.%20The%203%20Story%20Types%20That%20Convert.mp4", resources: [] },
              { id: "c5-6-4", title: "Short UGC Story Structure", duration: "21m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/4.%20Short%20UGC%20Story%20Structure.mp4", resources: [] },
              { id: "c5-6-5", title: "1. Short UGC Story Arc Breakdown. 21M View Ad", duration: "12m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/5.%201.%20Short%20UGC%20Story%20Arc%20Breakdown.%2021M%20View%20Ad.mp4", resources: [
                {"name": "Content.txt", "size": "0 KB"}
              ] },
              { id: "c5-6-6", title: "2. Short UGC Story Arc Breakdown. 27M View Ad", duration: "12m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/6.%202.%20Short%20UGC%20Story%20Arc%20Breakdown.%2027M%20View%20Ad.mp4", resources: [
                {"name": "Content.txt", "size": "0 KB"}
              ] },
              { id: "c5-6-7", title: "3. Short UGC Story Arc Breakdown. 27M View Ad", duration: "8m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/7.%203.%20Short%20UGC%20Story%20Arc%20Breakdown.%2027M%20View%20Ad.mp4", resources: [
                {"name": "Content.txt", "size": "0 KB"}
              ] },
              { id: "c5-6-8", title: "4. Short UGC Story Arc Breakdown. 19M View Ad", duration: "5m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/8.%204.%20Short%20UGC%20Story%20Arc%20Breakdown.%2019M%20View%20Ad.mp4", resources: [
                {"name": "Content.txt", "size": "0 KB"},
                {"name": "Short UGC Story Structure.txt", "size": "0 KB"}
              ] },
              { id: "c5-6-9", title: "5. Short UGC Story Arc Breakdown. 21M View Ad", duration: "6m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/9.%205.%20Short%20UGC%20Story%20Arc%20Breakdown.%2021M%20View%20Ad.mp4", resources: [
                {"name": "Content.txt", "size": "0 KB"}
              ] },
              { id: "c5-6-10", title: "Testimonial Stories That Feel Real", duration: "16m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/10.Testimonial%20Stories%20That%20Feel%20Real.mp4", resources: [] },
              { id: "c5-6-11", title: "Breakdown Testimonial Stories", duration: "15m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/11.Breakdown%20Testimonial%20Stories.mp4", resources: [] },
              { id: "c5-6-12", title: "Long-Form UGC Story (Yapping Style)", duration: "19m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/12.Long-Form%20UGC%20Story%20(Yapping%20Style).mp4", resources: [] },
              { id: "c5-6-13", title: "Yapping UGC breakdown", duration: "10m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/13.Yapping%20UGC%20breakdown.mp4", resources: [
                {"name": "Yapping UGC breakdown.txt", "size": "0 KB"}
              ] },
              { id: "c5-6-14", title: "Full Story Arc for Sales", duration: "38m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/14.Full%20Story%20Arc%20for%20Sales.mp4", resources: [] },
              { id: "c5-6-15", title: "Derila ergo Ad 1Breakdown", duration: "30m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/5.%20ELITE%20COPYWRITING%20Masterclass/Part%205%20-%20Story%20%26%20Drama/15.Derila%20ergo%20Ad%201Breakdown.mp4", resources: [
                {"name": "Derila ergo Ad 1Breakdown.pdf", "size": "154 KB"}
              ] }
            ],
          }
        ],
      },
      {
        id: "ch6",
        title: "Meta Campaign Blueprint",
        lessons: [
          { id: "c6-1", title: "Early Black Friday to Black Friday - Complete Campaign Structure", duration: "29m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/6.%20META%20CAMPAIGN%20BLUEPRINT/1.%20Early%20Black%20Friday%20to%20Black%20Friday%20-%20Complete%20Campaign%20Structure.mp4", resources: [
            {"name": "The Complete Black Friday META Ads Playbook.pdf", "size": "197 KB"}
          ] },
          { id: "c6-2", title: "Stop Overthinking Meta Ads - The Only Structure You'll Ever Need", duration: "26m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/6.%20META%20CAMPAIGN%20BLUEPRINT/2.%20Stop%20Overthinking%20Meta%20Ads%20-%20The%20Only%20Structure%20You'll%20Ever%20Need.mp4", resources: [
            {"name": "Meta Ads Structure & Scaling SOP v2.0.pdf", "size": "186 KB"}
          ] }
        ],
      },
      {
        id: "ch7",
        title: "Landing Pages Breakdowns",
        lessons: [
          { id: "c7-1", title: "First Day Landing Page Breakdown - Why This $100M+ Brand's Funnel Converts", duration: "25m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/7.%20Landing%20Pages%20Breakdowns/First%20Day%20Landing%20Page%20Breakdown%20-%20Why%20This%20%24100M%2B%20Brand's%20Funnel%20Converts.mp4", resources: [
            {"name": "Content.txt", "size": "0 KB"}
          ] }
        ],
      },
      {
        id: "ch8",
        title: "UGC Engine Masterclass",
        sections: [
          {
            id: "ch8-s1",
            title: "UGC Foundations",
            lessons: [
              { id: "c8-1-1", title: "Introduction & UGC is NOT Influencer Marketing Here's the Difference", duration: "16m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/8.%20UGC%20Engine%20Masterclass/1.%20UGC%20Foundations/1.%20Introduction_%26_UGC_is_NOT_Influencer_Marketing_Here's_the_Difference.mp4", resources: [] },
              { id: "c8-1-2", title: "Stop Treating UGC as a Project Build an ENGINE", duration: "8m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/8.%20UGC%20Engine%20Masterclass/1.%20UGC%20Foundations/2.%20Stop%20Treating%20UGC%20as%20a%20Project%20Build%20an%20ENGINE.mp4", resources: [] },
              { id: "c8-1-3", title: "The Only 2 Roles You Need to Run UGC at Scale", duration: "16m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/8.%20UGC%20Engine%20Masterclass/1.%20UGC%20Foundations/3.%20The%20Only%202%20Roles%20You%20Need%20to%20Run%20UGC%20at%20Scale.mp4", resources: [] }
            ],
          },
          {
            id: "ch8-s2",
            title: "Finding Creators",
            lessons: [
              { id: "c8-2-1", title: "Where creators live, TikTok tactics, Instagram tactics, Twitter", duration: "14m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/8.%20UGC%20Engine%20Masterclass/2.%20Finding%20Creators/4.%20_Where_creators_live%2C_TikTok_tactics%2C_Instagram_tactics%2C_Twitter.mp4", resources: [
                {"name": "Module2-Complete-Resource-Pack.docx", "size": "11 KB"}
              ] }
            ],
          },
          {
            id: "ch8-s3",
            title: "Vetting & Scoring",
            lessons: [
              { id: "c8-3-1", title: "Vetting & Scoring", duration: "8m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/8.%20UGC%20Engine%20Masterclass/3.%20Vetting%20%26%20Scoring/5.%20Vetting%20%26%20Scoring.mp4", resources: [] }
            ],
          },
          {
            id: "ch8-s4",
            title: "Outreach That Works",
            lessons: [
              { id: "c8-4-1", title: "Outreach That Works", duration: "13m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/8.%20UGC%20Engine%20Masterclass/4.%20Outreach%20That%20Works/6.%20Outreach%20That%20Works.mp4", resources: [
                {"name": "Module4-Outreach-Templates.pdf", "size": "123 KB"}
              ] }
            ],
          }
        ],
      },
      {
        id: "ch9",
        title: "How to Build VSLs That Print Revenue",
        lessons: [
          { id: "c9-1", title: "The VSL Mind Shift", duration: "2m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/9.%20How%20to%20Build%20VSLs%20That%20Print%20Revenue/Module%200%20%E2%80%94%20The%20VSL%20Mind%20Shift/1.%20The%20VSL%20Mind%20Shift.mp4", resources: [] },
          { id: "c9-2", title: "FOUNDATION: What a VSL Actually Is", duration: "11m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/9.%20How%20to%20Build%20VSLs%20That%20Print%20Revenue/Module%200%20%E2%80%94%20The%20VSL%20Mind%20Shift/2.%20FOUNDATION%253a%20What%20a%20VSL%20Actually%20Is.mp4", resources: [] },
          { id: "c9-3", title: "PSYCHOLOGY: The Psychology of Buying", duration: "13m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/9.%20How%20to%20Build%20VSLs%20That%20Print%20Revenue/Module%200%20%E2%80%94%20The%20VSL%20Mind%20Shift/3.%20PSYCHOLOGY%253a%20The%20Psychology%20of%20Buying.mp4", resources: [] },
          { id: "c9-4", title: "STRATEGY: Why VSLs Win at the Conversion Stage", duration: "6m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/9.%20How%20to%20Build%20VSLs%20That%20Print%20Revenue/Module%200%20%E2%80%94%20The%20VSL%20Mind%20Shift/4.%20STRATEGY%253a%20Why%20VSLs%20Win%20at%20the%20Conversion%20Stage.mp4", resources: [] },
          { id: "c9-5", title: "ARCHITECTURE :The VSL Funnel Ecosystem", duration: "23m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/9.%20How%20to%20Build%20VSLs%20That%20Print%20Revenue/Module%200%20%E2%80%94%20The%20VSL%20Mind%20Shift/5.%20ARCHITECTURE%20%253aThe%20VSL%20Funnel%20Ecosystem.mp4", resources: [] }
        ],
      },
      {
        id: "ch10",
        title: "Building Brand With AI",
        lessons: [
          { id: "c10-1", title: "AVATAR RESEARCH WITH AI + Check With Supplier", duration: "13m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/10.Building%20Brand%20With%20AI/1.AVATAR%20RESEARCH%20WITH%20AI%20%2B%20Check%20With%20Supplier.mp4", resources: [
            {"name": "The Universal Avatar Intelligence Prompt.pdf", "size": "175 KB"}
          ] },
          { id: "c10-2", title: "The Root Cause & Mechanism With AI manus", duration: "9m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/10.Building%20Brand%20With%20AI/2.The%20Root%20Cause%20%26%20Mechanism%20With%20AI%20manus.mp4", resources: [
            {"name": "2.txt", "size": "1 KB"},
            {"name": "3 Prompt 2 — the Formula & Mechanism Prompt.pdf", "size": "156 KB"}
          ] },
          { id: "c10-3", title: "Check And fill Trademark", duration: "1m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/10.Building%20Brand%20With%20AI/3.Check%20And%20fill%20Trademark.mp4", resources: [
            {"name": "Trademark SOP.pdf", "size": "126 KB"}
          ] },
          { id: "c10-4", title: "Genrated Label Facts Panel and Bottle Mockup with AI Manus", duration: "4m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/10.Building%20Brand%20With%20AI/4.Genrated%20Label%20Facts%20Panel%20and%20Bottle%20Mockup%20with%20AI%20Manus.mp4", resources: [
            {"name": "1 Use Prompt 3 to generate label.txt", "size": "0 KB"},
            {"name": "2 Prompt 3 — Bottle Label Design Prompt.pdf", "size": "146 KB"},
            {"name": "3 Prompt 4 — Bottle Mockup Generation Prompt.pdf", "size": "97 KB"}
          ] },
          { id: "c10-5", title: "First draft of Product Page with Manus AI", duration: "5m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/10.Building%20Brand%20With%20AI/5.First%20draft%20of%20Product%20Page%20with%20Manus%20AI.mp4", resources: [] },
          { id: "c10-6", title: "Building Full Product Page With Manus AI", duration: "39m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/10.Building%20Brand%20With%20AI/6.Building%20Full%20Product%20Page%20With%20Manus%20AI.mp4", resources: [
            {"name": "1 Prompt 5 — DTC Supplement Product Page Generator.pdf", "size": "214 KB"},
            {"name": "2 Prompt 6 — UGC Social Proof Image Generator for DTC Product Pages.pdf", "size": "177 KB"}
          ] }
        ],
      },
      {
        id: "ch11",
        title: "New Call Recording",
        lessons: [
          { id: "c11-1", title: "Call with The Goat Nikita and How he scaled to 5M$+M", duration: "1h 59m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/12.New%20Call%20Recording/1%2C.Call%20with%20The%20Goat%20Nikita%20and%20How%20he%20scaled%20to%205M%24%2BM.mp4", resources: [] },
          { id: "c11-2", title: "Call with the goat @gulfam how he scaled to 240K$Day", duration: "58m", src: "/Zakaria%20Airakaz%20-%20ECOM%20Masterclass%20%20%5B%20JUN-2026%20%5D/12.New%20Call%20Recording/2.Call%20with%20the%20goat%20%40gulfam%20how%20he%20scaled%20to%20240K%24Day.mp4", resources: [] }
        ],
      }
    ],
  },
{
    id: "impact-team-vip",
    title: "Impact Team - VIP (High-Ticket Sales System)",
    tagline: "The complete high-ticket closing system — scripts, psychology, and live call breakdowns.",
    cover: "./impact.avif",
    accent: "#F5B301",
    category: "copywriting",
    price: "$97",
    chapters: [
      {
        id: "dch1",
        title: "Bad To Good",
        sections: [
          {
            id: "dch1-s1",
            title: "Fundamentals",
            lessons: [
              { id: "d1-1-1", title: "The Impact Formula", duration: "3m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/2.%20Fundamentals/(1)the%20impact%20formula.mp4", resources: [] },
              { id: "d1-1-2", title: "Intent Stage", duration: "3m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/2.%20Fundamentals/(2)intent%20stage.mp4", resources: [] },
              { id: "d1-1-3", title: "Logical Certainty", duration: "2m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/2.%20Fundamentals/(3)logical%20certainty.mp4", resources: [] },
              { id: "d1-1-4", title: "Emotional Certainty", duration: "3m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/2.%20Fundamentals/(4)emotional%20certainty.mp4", resources: [] },
              { id: "d1-1-5", title: "Pitch", duration: "1m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/2.%20Fundamentals/(5)pitch.mp4", resources: [] }
            ],
          },
          {
            id: "dch1-s2",
            title: "Impact formula script",
            lessons: [
              { id: "d1-2-1", title: "Setting Script Break Down", duration: "17m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/3.%20Impact%20formula%20script/(1)setting%20script%20break%20down.mp4", resources: [] },
              { id: "d1-2-2", title: "Closing script breakdown #1", duration: "21m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/3.%20Impact%20formula%20script/(2)Closing%20script%20breakdown%20%231.mp4", resources: [] },
              { id: "d1-2-3", title: "Closing script breakdown #2", duration: "5m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/3.%20Impact%20formula%20script/(3)Closing%20script%20breakdown%20%232.mp4", resources: [] },
              { id: "d1-2-4", title: "Objection Handling", duration: "17m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/3.%20Impact%20formula%20script/(4)Objection%20Handling.mp4", resources: [] }
            ],
          },
          {
            id: "dch1-s3",
            title: "Miscellaneous",
            lessons: [
              { id: "d1-3-1", title: "Calendar Management", duration: "4m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/Miscellaneous/Calendar%20Management.mp4", resources: [] },
              { id: "d1-3-2", title: "Mindset 101", duration: "6m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/Miscellaneous/Mindset%20101.mp4", resources: [] }
            ],
          },
          {
            id: "dch1-s4",
            title: "Start here",
            lessons: [
              { id: "d1-4-1", title: "Impact Team FREE", duration: "3m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/1.%20Bad%20To%20Good/Start%20here/Impact%20Team%20FREE.mp4", resources: [] }
            ],
          }
        ],
      },
      {
        id: "dch2",
        title: "Good To Great",
        sections: [
          {
            id: "dch2-s1",
            title: "Advanced Scripting",
            lessons: [
              { id: "d2-1-1", title: "Adapting script to offer", duration: "6m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/1.%20Advanaced%20Scripting/(1)%20Adapting%20script%20to%20offer.mp4", resources: [] },
              { id: "d2-1-2", title: "Mirror Questionst (Get answers to every Q)", duration: "5m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/1.%20Advanaced%20Scripting/(2)%20Mirror%20Questionst%20(Get%20answers%20to%20every%20Q).mp4", resources: [] },
              { id: "d2-1-3", title: "Transforming identity (Emotional certainty)", duration: "13m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/1.%20Advanaced%20Scripting/(3)%20Transforming%20identity%20(Emotional%20certainty).mp4", resources: [] },
              { id: "d2-1-4", title: "6 Human Needs (& How to use them)", duration: "10m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/1.%20Advanaced%20Scripting/(4)%206%20Human%20Needs%20(%26%20How%20to%20use%20them).mp4", resources: [] },
              { id: "d2-1-5", title: "Objection handling psychology", duration: "6m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/1.%20Advanaced%20Scripting/(5)%20Objection%20handling%20psychology.mp4", resources: [] }
            ],
          },
          {
            id: "dch2-s2",
            title: "Non Verbal Communication",
            lessons: [
              { id: "d2-2-1", title: "Tonality Masterclass", duration: "12m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/2.%20Non%20Verbal%20Communication/(1)Tonality%20Masterclass.mp4", resources: [] },
              { id: "d2-2-2", title: "Body language as a Remote Control", duration: "6m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/2.%20Non%20Verbal%20Communication/(2)%20Body%20language%20as%20a%20Remote%20Control.mp4", resources: [] },
              { id: "d2-2-3", title: "Verbal Cueing (Control prospects)", duration: "4m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/2.%20Non%20Verbal%20Communication/(3)%20Verbal%20Cueing%20(Control%20prospects).mp4", resources: [] },
              { id: "d2-2-4", title: "Pacing & Inflections", duration: "8m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/2.%20Non%20Verbal%20Communication/(4)%20Pacing%20%26%20Inflections.mp4", resources: [] }
            ],
          },
          {
            id: "dch2-s3",
            title: "Less Calls, More $$$",
            lessons: [
              { id: "d2-3-1", title: "Follow-UP", duration: "15m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/3.%20Less%20Calls%2C%20More%20%24%24%24/(1)%20Follow-UP.mp4", resources: [] },
              { id: "d2-3-2", title: "Referrals", duration: "6m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/3.%20Less%20Calls%2C%20More%20%24%24%24/(2)%20Referrals.mp4", resources: [] },
              { id: "d2-3-3", title: "Upsells (Setting + Closing)", duration: "20m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/3.%20Less%20Calls%2C%20More%20%24%24%24/(3)%20Upsells%20(Setting%20%2B%20Closing).mp4", resources: [] }
            ],
          },
          {
            id: "dch2-s4",
            title: "Mindset - HighPerforming",
            lessons: [
              { id: "d2-4-1", title: "Creating Energy", duration: "7m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/4.%20Mindset%20-%20HighPerforming/(1)%20Creating%20Energy.mp4", resources: [] },
              { id: "d2-4-2", title: "Loneliness", duration: "3m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/4.%20Mindset%20-%20HighPerforming/(2)%20Loneliness.mp4", resources: [] },
              { id: "d2-4-3", title: "Self-Esteem", duration: "6m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/4.%20Mindset%20-%20HighPerforming/(3)%20Self-Esteem.mp4", resources: [] },
              { id: "d2-4-4", title: "Burnout", duration: "5m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/4.%20Mindset%20-%20HighPerforming/(4)%20Burnout.mp4", resources: [] }
            ],
          },
          {
            id: "dch2-s5",
            title: "How to Make the script yours",
            lessons: [
              { id: "d2-5-1", title: "The key to greatness", duration: "9m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/5.%20How%20to%20Make%20the%20script%20yours/The%20key%20to%20greatness.mp4", resources: [] }
            ],
          },
          {
            id: "dch2-s6",
            title: "Start here",
            lessons: [
              { id: "d2-6-1", title: "Actually start here", duration: "8m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/2.%20Good%20To%20Great/Start%20here/Actually%20start%20here.mp4", resources: [] }
            ],
          }
        ],
      },
      {
        id: "dch3",
        title: "Live Sales Recordings",
        lessons: [
          { id: "d3-1", title: "Q&A", duration: "40m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/Q%26A.mp4", resources: [] },
          { id: "d3-2", title: "Yash Call Review", duration: "1h 4m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/Yash%20Call%20Review.mp4", resources: [] }
        ],
        sections: [
          {
            id: "dch3-s1",
            title: "1 on 1 Coaching Call recordings",
            lessons: [
              { id: "d3-1-1", title: "Andres - Building FULL Script - Marketing Agency", duration: "57m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/1%20on%201%20Coaching%20Call%20recordings/Andres%20-%20Building%20FULL%20Script%20-%20Marketing%20Agency.mp4", resources: [] },
              { id: "d3-1-2", title: "Andres - Objection Handling Call Review + Roleplay", duration: "45m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/1%20on%201%20Coaching%20Call%20recordings/Andres%20-%20Objection%20Handling%20Call%20Review%20%2B%20Roleplay.mp4", resources: [] },
              { id: "d3-1-3", title: "Yash - FULL Call roleplay (wObjections) - Selling Sales Coaching", duration: "33m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/1%20on%201%20Coaching%20Call%20recordings/Yash%20-%20FULL%20Call%20roleplay%20(wObjections)%20-%20Selling%20Sales%20Coaching.mp4", resources: [] },
              { id: "d3-1-4", title: "Yash - Full Formula Breakdown + Mirror Questions (Sales training offer)", duration: "44m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/1%20on%201%20Coaching%20Call%20recordings/Yash%20-%20Full%20Formula%20Breakdown%20%2B%20Mirror%20Questions%20(Sales%20training%20offer).mp4", resources: [] }
            ],
          },
          {
            id: "dch3-s2",
            title: "Sales Call Highlights",
            lessons: [
              { id: "d3-2-1", title: "$10k Deal - Cries in Emotional Cert", duration: "12m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/live%20sales%20recordings/%2410k%20Deal%20-%20Cries%20in%20Emotional%20Cert.mp4", resources: [] },
              { id: "d3-2-2", title: "$10k Deal - Sophisticated Buyer", duration: "1h 3m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/live%20sales%20recordings/%2410k%20Deal%20-%20Sophisticated%20Buyer.mp4", resources: [] },
              { id: "d3-2-3", title: "$10k PIF - New to service", duration: "29m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/live%20sales%20recordings/%2410k%20PIF%20-%20New%20to%20service.mp4", resources: [] },
              { id: "d3-2-4", title: "$16k PIF - A Type", duration: "40m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/live%20sales%20recordings/%2416k%20PIF%20-%20A%20Type.mp4", resources: [] },
              { id: "d3-2-5", title: "$16k PIF - Good to Great Frame", duration: "27m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/live%20sales%20recordings/%2416k%20PIF%20-%20Good%20to%20Great%20Frame.mp4", resources: [] },
              { id: "d3-2-6", title: "$16k PIF - Prospect Tries to contorl", duration: "37m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/live%20sales%20recordings/%2416k%20PIF%20-%20Prospect%20Tries%20to%20contorl.mp4", resources: [] },
              { id: "d3-2-7", title: "$4k PIF - Values Giving", duration: "24m", src: "/Impact%20Team%20-%20VIP%20(High-Ticket%20Sales%20System)/3.%20Live%20Sales%20Recordings/live%20sales%20recordings/%244k%20PIF%20-%20Values%20Giving.mp4", resources: [] }
            ],
          }
        ],
      }
    ],
  },
{
    id: "highticket-ecommerce",
    title: "HighTicket E-Commerce Course by Brook Hiddink",
    tagline: "The complete high-ticket dropshipping system — business setup, supplier partnerships, and paid ads, from zero to launch.",
    cover: "./highticket.avif",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$6,000",
    chapters: [
      {
        id: "hte1",
        title: "High Ticket E-Commerce Program",
        lessons: [
          { id: "hte1-1", title: "High Ticket E-Commerce Program", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/00-High%20Ticket%20E-Commerce%20Program.mp4", resources: [
            {"name": "High Ticket E-Commerce Program.pdf", "size": "155 KB"}
          ] }
        ],
        sections: [
          {
            id: "hte1-s1",
            title: "0 - Onboarding",
            sections: [
              {
                id: "hte1-s1-s1",
                title: "Section 1- Onboarding",
                lessons: [
                  { id: "hte1-s1-s1-1", title: "Complete Welcome Survey", duration: "", src: "", resources: [] },
                  { id: "hte1-s1-s1-2", title: "Your Voice Matters- Creating Your Success Profile", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/01-Section%201-%20Onboarding/02-Your%20Voice%20Matters-%20Creating%20Your%20Success%20Profile.mp4", resources: [
                    {"name": "Your Voice Matters- Creating Your Success Profile.pdf", "size": "195 KB"}
                  ] },
                  { id: "hte1-s1-s1-3", title: "Slack Overview- 1 on 1 Students Only", duration: "", src: "", resources: [] },
                  { id: "hte1-s1-s1-4", title: "Done For You Options Optional Upgrades", duration: "", src: "", resources: [] },
                  { id: "hte1-s1-s1-5", title: "Customer Support", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/01-Section%201-%20Onboarding/05-Customer%20Support%20.mp4", resources: [
                    {"name": "Customer Support.pdf", "size": "133 KB"}
                  ] },
                  { id: "hte1-s1-s1-6", title: "HTE Community", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/01-Section%201-%20Onboarding/06-HTE%20Community.mp4", resources: [
                    {"name": "HTE Community.pdf", "size": "160 KB"}
                  ] },
                  { id: "hte1-s1-s1-7", title: "QA Coaching Calls", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/01-Section%201-%20Onboarding/07-QA%20Coaching%20Calls%20.mp4", resources: [] },
                  { id: "hte1-s1-s1-8", title: "60 Day Launch Plan Recommended", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/01-Section%201-%20Onboarding/08-60%20Day%20Launch%20Plan%20Recommended%20.mp4", resources: [
                    {"name": "60 Day Launch Plan Recommended.pdf", "size": "74 KB"},
                    {"name": "High Ticket 60 Day Launch Plan.xlsx", "size": "15 KB"}
                  ] },
                  { id: "hte1-s1-s1-9", title: "21 Day Launch Plan Optional", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/01-Section%201-%20Onboarding/09-%2021%20Day%20Launch%20Plan%20Optional%20.mp4", resources: [
                    {"name": "21 Day Launch Plan Optional.pdf", "size": "146 KB"},
                    {"name": "21 Day Launch Plan.xlsx", "size": "50 KB"}
                  ] },
                  { id: "hte1-s1-s1-10", title: "Supplier HQ", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/01-Section%201-%20Onboarding/10-%20Supplier%20HQ.mp4", resources: [
                    {"name": "Supplier HQ.pdf", "size": "172 KB"}
                  ] },
                  { id: "hte1-s1-s1-11", title: "Bonuses", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/01-Section%201-%20Onboarding/11-%20Bonuses%20.mp4", resources: [
                    {"name": "Bonuses.pdf", "size": "166 KB"}
                  ] },
                  { id: "hte1-s1-s1-12", title: "Student Success Hub", duration: "", src: "", resources: [] },
                  { id: "hte1-s1-s1-13", title: "Affiliate Program", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/01-Section%201-%20Onboarding/13-%20Affiliate%20Program.mp4", resources: [
                    {"name": "Affiliate Program.pdf", "size": "133 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s1-s2",
                title: "Section 2- Module Completion",
                lessons: [
                  { id: "hte1-s1-s2-1", title: "Module Feedback Progress Tracking", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/02-%20Section%202-%20Module%20Completion/01-Module%20Feedback%20Progress%20Tracking%20.mp4", resources: [
                    {"name": "Module Feedback Progress Tracking.pdf", "size": "148 KB"}
                  ] },
                  { id: "hte1-s1-s2-2", title: "Complete Module Checklist", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/01-0%20-%20Onboarding/02-%20Section%202-%20Module%20Completion/02-Complete%20Module%20Checklist%20.mp4", resources: [
                    {"name": "Complete Module Checklist.pdf", "size": "133 KB"},
                    {"name": "Module Checklist NV.xlsx", "size": "125 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte1-s2",
            title: "1 - Millionaire Mindset",
            sections: [
              {
                id: "hte1-s2-s1",
                title: "Section 1- Millionaire Mindset",
                lessons: [
                  { id: "hte1-s2-s1-1", title: "Introduction to HTE Academy", duration: "31m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/02-1%20-%20Millionaire%20Mindset/01-Section%201-%20Millionaire%20Mindset/01-Introduction%20to%20HTE%20Academy.mp4", resources: [
                    {"name": "Introduction to HTE Academy.pdf", "size": "1.2 MB"},
                    {"name": "Introduction to HTE Academy.pptx", "size": "19.5 MB"}
                  ] },
                  { id: "hte1-s2-s1-2", title: "Using AI to Supercharge Your E-Commerce Business", duration: "20m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/02-1%20-%20Millionaire%20Mindset/01-Section%201-%20Millionaire%20Mindset/02-Using%20AI%20to%20Supercharge%20Your%20E-Commerce%20Business%20.mp4", resources: [
                    {"name": "Using AI to Supercharge Your E-Commerce Business.pdf", "size": "427 KB"},
                    {"name": "Using AI to Supercharge Your E-Commerce Business.pptx", "size": "30.0 MB"}
                  ] },
                  { id: "hte1-s2-s1-3", title: "The Hard Truth Behind Success", duration: "23m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/02-1%20-%20Millionaire%20Mindset/01-Section%201-%20Millionaire%20Mindset/03-%20The%20Hard%20Truth%20Behind%20Success%20.mp4", resources: [
                    {"name": "The Hard Truth Behind Success.pdf", "size": "883 KB"}
                  ] },
                  { id: "hte1-s2-s1-4", title: "Successful Entrepreneur Mindset", duration: "15m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/02-1%20-%20Millionaire%20Mindset/01-Section%201-%20Millionaire%20Mindset/04-%20Successful%20Entrepreneur%20Mindset%20.mp4", resources: [
                    {"name": "Successful Entrepreneur Mindset.pdf", "size": "399 KB"},
                    {"name": "Successful Entrepreneur Mindset.pptx", "size": "23.7 MB"}
                  ] },
                  { id: "hte1-s2-s1-5", title: "Successful Entrepreneur Habits", duration: "27m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/02-1%20-%20Millionaire%20Mindset/01-Section%201-%20Millionaire%20Mindset/05-%20Successful%20Entrepreneur%20Habits%20.mp4", resources: [
                    {"name": "Successful Entrepreneur Habits.pdf", "size": "327 KB"},
                    {"name": "Successful Entrepreneur Habits.pptx", "size": "48.8 MB"}
                  ] },
                  { id: "hte1-s2-s1-6", title: "Work-Life Balance", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/02-1%20-%20Millionaire%20Mindset/01-Section%201-%20Millionaire%20Mindset/06-%20Work-Life%20Balance%20.mp4", resources: [
                    {"name": "Work-Life Balance.pdf", "size": "300 KB"},
                    {"name": "Work Life Balance.pptx", "size": "8.0 MB"}
                  ] },
                  { id: "hte1-s2-s1-7", title: "Wrap Up Action Items", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/02-1%20-%20Millionaire%20Mindset/01-Section%201-%20Millionaire%20Mindset/07-Wrap%20Up%20Action%20Items%20.mp4", resources: [
                    {"name": "Wrap Up Action Items.pdf", "size": "310 KB"},
                    {"name": "Wrap Up Action Items.pptx", "size": "9.9 MB"}
                  ] }
                ],
              },
              {
                id: "hte1-s2-s2",
                title: "Section 2- Module Completion",
                lessons: [
                  { id: "hte1-s2-s2-1", title: "Complete Module Checklist", duration: "1m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/02-1%20-%20Millionaire%20Mindset/02-Section%202-%20Module%20Completion/01-Complete%20Module%20Checklist.mp4", resources: [] },
                  { id: "hte1-s2-s2-2", title: "Module Feedback Progress Tracking", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/02-1%20-%20Millionaire%20Mindset/02-Section%202-%20Module%20Completion/02-%20Module%20Feedback%20Progress%20Tracking%20.mp4", resources: [] }
                ],
              }
            ],
          },
          {
            id: "hte1-s3",
            title: "2 - Business Set Up",
            sections: [
              {
                id: "hte1-s3-s1",
                title: "Module Overview",
                lessons: [
                  { id: "hte1-s3-s1-1", title: "Module Overview", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/01-2%20-%20Business%20Set%20Up/01-Module%20Overview%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte1-s3-s2",
                title: "Section 1- Overview",
                lessons: [
                  { id: "hte1-s3-s2-1", title: "Operating as a Sole Proprietor", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/02-%20Section%201-%20Overview/01-Operating%20as%20a%20Sole%20Proprietor%20.mp4", resources: [
                    {"name": "Operating as a Sole Proprietor.pdf", "size": "150 KB"}
                  ] },
                  { id: "hte1-s3-s2-2", title: "Introduction to Doola", duration: "1m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/02-%20Section%201-%20Overview/02-%20Introduction%20to%20Doola%20.mp4", resources: [] },
                  { id: "hte1-s3-s2-3", title: "Free Consult with Doola", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/02-%20Section%201-%20Overview/03-Free%20Consult%20with%20Doola%20.mp4", resources: [
                    {"name": "Free Consult with Doola.pdf", "size": "129 KB"}
                  ] },
                  { id: "hte1-s3-s2-4", title: "What If You Have Existing Business", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/02-%20Section%201-%20Overview/04-What%20If%20You%20Have%20Existing%20Business%20.mp4", resources: [
                    {"name": "What If You Have Existing Business.pdf", "size": "138 KB"}
                  ] },
                  { id: "hte1-s3-s2-5", title: "What Countries Can You Do HTE From", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/02-%20Section%201-%20Overview/05-%20What%20Countries%20Can%20You%20Do%20HTE%20From%20.mp4", resources: [
                    {"name": "What Countries Can You Do HTE From.pdf", "size": "135 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s3-s3",
                title: "Section 2- Country Specific Guidance",
                lessons: [
                  { id: "hte1-s3-s3-1", title: "Overview of Section", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/03-Section%202-%20Country%20Specific%20Guidance/01-Overview%20of%20Section.mp4", resources: [
                    {"name": "Overview of Section.pdf", "size": "111 KB"}
                  ] },
                  { id: "hte1-s3-s3-2", title: "USA Citizens Setting up in USA", duration: "18m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/03-Section%202-%20Country%20Specific%20Guidance/02-%20USA%20Citizens%20Setting%20up%20in%20USA%20.mp4", resources: [
                    {"name": "USA Citizens Setting up in USA.pdf", "size": "171 KB"}
                  ] },
                  { id: "hte1-s3-s3-3", title: "International Citizens Setting up in USA", duration: "16m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/03-Section%202-%20Country%20Specific%20Guidance/03-%20International%20Citizens%20Setting%20up%20in%20USA%20.mp4", resources: [
                    {"name": "International Citizens Setting up in USA.pdf", "size": "165 KB"}
                  ] },
                  { id: "hte1-s3-s3-4", title: "Canadians Selling in USA", duration: "10m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/03-Section%202-%20Country%20Specific%20Guidance/04-%20Canadians%20Selling%20in%20USA%20.mp4", resources: [
                    {"name": "Canadians Selling in USA.pdf", "size": "162 KB"}
                  ] },
                  { id: "hte1-s3-s3-5", title: "International Students Selling Internationally", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/03-Section%202-%20Country%20Specific%20Guidance/05-%20International%20Students%20Selling%20Internationally%20.mp4", resources: [
                    {"name": "International Students Selling Internationally.pdf", "size": "128 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s3-s4",
                title: "Section 3- Launch Essentials",
                lessons: [
                  { id: "hte1-s3-s4-1", title: "Business Launch Essentials", duration: "15m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/04-Section%203-%20Launch%20Essentials/01-Business%20Launch%20Essentials.mp4", resources: [
                    {"name": "Business Launch Essentials.pdf", "size": "109 KB"}
                  ] },
                  { id: "hte1-s3-s4-2", title: "Budgeting Properly from Day 1", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/03-%202%20-%20Business%20Set%20Up/04-Section%203-%20Launch%20Essentials/02-Budgeting%20Properly%20from%20Day%201.mp4", resources: [
                    {"name": "Budgeting Properly from Day 1.pdf", "size": "111 KB"},
                    {"name": "Profit Tracking Template.xlsx", "size": "102 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte1-s4",
            title: "3 - Choosing Your Niche",
            lessons: [
              { id: "hte1-s4-1", title: "Module Overview", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/00-%20Module%20Overview%20.mp4", resources: [] }
            ],
            sections: [
              {
                id: "hte1-s4-s1",
                title: "Section 1- Broad vs Narrow Focus Stores",
                lessons: [
                  { id: "hte1-s4-s1-1", title: "Niche vs Theme vs Broad- Whats The Difference", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/01-Section%201-%20Broad%20vs%20Narrow%20Focus%20Stores/01-%20Niche%20vs%20Theme%20vs%20Broad-%20Whats%20The%20Difference%20.mp4", resources: [
                    {"name": "Niche vs Theme vs Broad- Whats The Difference.pdf", "size": "97 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s4-s2",
                title: "Section 2- Preparing for Niche Research",
                lessons: [
                  { id: "hte1-s4-s2-1", title: "The Niche Goldmine How to Use It", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/02-Section%202-%20Preparing%20for%20Niche%20Research/01-The%20Niche%20Goldmine%20How%20to%20Use%20It.mp4", resources: [
                    {"name": "The Niche Goldmine How to Use It.pdf", "size": "100 KB"}
                  ] },
                  { id: "hte1-s4-s2-2", title: "Supplier HQ For Niche Selection", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/02-Section%202-%20Preparing%20for%20Niche%20Research/02-%20Supplier%20HQ%20For%20Niche%20Selection%20.mp4", resources: [
                    {"name": "Supplier HQ For Niche Selection.pdf", "size": "111 KB"}
                  ] },
                  { id: "hte1-s4-s2-3", title: "Google Shopping for Niche Research", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/02-Section%202-%20Preparing%20for%20Niche%20Research/03-%20Google%20Shopping%20for%20Niche%20Research%20.mp4", resources: [
                    {"name": "Google Shopping for Niche Research.pdf", "size": "109 KB"}
                  ] },
                  { id: "hte1-s4-s2-4", title: "100 HTE Stores Doing 200000-Month", duration: "", src: "", resources: [] },
                  { id: "hte1-s4-s2-5", title: "Creating Your Niche Research Sheet", duration: "11m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/02-Section%202-%20Preparing%20for%20Niche%20Research/05-%20Creating%20Your%20Niche%20Research%20Sheet%20.mp4", resources: [
                    {"name": "Creating Your Niche Research Sheet.pdf", "size": "109 KB"},
                    {"name": "HTE Market Research 2024.xlsx", "size": "322 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s4-s3",
                title: "Section 3- Niche Research",
                lessons: [
                  { id: "hte1-s4-s3-1", title: "Finding Successful Competitors Using Google Shopping", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/03-Section%203-%20Niche%20Research/01-Finding%20Successful%20Competitors%20Using%20Google%20Shopping.mp4", resources: [
                    {"name": "Finding Successful Competitors Using Google Shopping.pdf", "size": "108 KB"}
                  ] },
                  { id: "hte1-s4-s3-2", title: "Ideal Price Point Explained", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/03-Section%203-%20Niche%20Research/02-%20Ideal%20Price%20Point%20Explained%20.mp4", resources: [
                    {"name": "Ideal Price Point Explained.pdf", "size": "113 KB"}
                  ] },
                  { id: "hte1-s4-s3-3", title: "Product Demand- Sell What People Want to Buy", duration: "", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/03-Section%203-%20Niche%20Research/03-%20Product%20Demand-%20Sell%20What%20People%20Want%20to%20Buy.mp4", resources: [
                    {"name": "Product Demand- Sell What People Want to Buy.pdf", "size": "101 KB"}
                  ] },
                  { id: "hte1-s4-s3-4", title: "Seasonality- Avoid Huge Swings in Sales", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/03-Section%203-%20Niche%20Research/04-%20Seasonality-%20Avoid%20Huge%20Swings%20in%20Sales%20.mp4", resources: [
                    {"name": "Seasonality- Avoid Huge Swings in Sales.pdf", "size": "100 KB"}
                  ] },
                  { id: "hte1-s4-s3-5", title: "10 Brands with Branded Demand", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/03-Section%203-%20Niche%20Research/05-%2010%20Brands%20with%20Branded%20Demand%20.mp4", resources: [
                    {"name": "10 Brands with Branded Demand.pdf", "size": "89 KB"}
                  ] },
                  { id: "hte1-s4-s3-6", title: "Narrowing Your List Down", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/03-Section%203-%20Niche%20Research/06-Narrowing%20Your%20List%20Down%20.mp4", resources: [
                    {"name": "Narrowing Your List Down.pdf", "size": "100 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s4-s4",
                title: "Section 4- Selecting Your Niche",
                lessons: [
                  { id: "hte1-s4-s4-1", title: "Mini Section Overview", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/04-Section%204-%20Selecting%20Your%20Niche/01-%20Mini%20Section%20Overview%20.mp4", resources: [
                    {"name": "Mini Section Overview.pdf", "size": "102 KB"}
                  ] },
                  { id: "hte1-s4-s4-2", title: "Choosing Your Own Niche Course-Only Students", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/04-Section%204-%20Selecting%20Your%20Niche/02-%20Choosing%20Your%20Own%20Niche%20Course-Only%20Students%20.mp4", resources: [
                    {"name": "Choosing Your Own Niche Course-Only Students.pdf", "size": "95 KB"}
                  ] },
                  { id: "hte1-s4-s4-3", title: "Submitting Your Niche Research - Golden Stamp Product Approval Accelerator Students", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/04-Section%204-%20Selecting%20Your%20Niche/03-Submitting%20Your%20Niche%20Research%20-%20Golden%20Stamp%20Product%20Approval%20Accelerator%20Students%20.mp4", resources: [
                    {"name": "Submitting Your Niche Research - Golden Stamp Product Approval Accelerator Students.pdf", "size": "105 KB"}
                  ] },
                  { id: "hte1-s4-s4-4", title: "Submitting Your Niche Research Incubator-1 on 1 Slack Students", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/04-3%20-%20Choosing%20Your%20Niche/04-Section%204-%20Selecting%20Your%20Niche/04-%20Submitting%20Your%20Niche%20Research%20Incubator-1%20on%201%20Slack%20Students%20.mp4", resources: [
                    {"name": "Submitting Your Niche Research Incubator-1 on 1 Slack Students.pdf", "size": "116 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte1-s5",
            title: "4 - Suppliers Distributors",
            lessons: [
              { id: "hte1-s5-1", title: "Module Overview", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/00-Module%20Overview.mp4", resources: [] }
            ],
            sections: [
              {
                id: "hte1-s5-s1",
                title: "Section 1- Introduction to Suppliers",
                lessons: [
                  { id: "hte1-s5-s1-1", title: "What Makes an A Supplier", duration: "11m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/01-Section%201-%20Introduction%20to%20Suppliers/01-What%20Makes%20an%20A%20Supplier.mp4", resources: [
                    {"name": "What Makes an A Supplier.pdf", "size": "119 KB"}
                  ] },
                  { id: "hte1-s5-s1-2", title: "What is Supplier HQ How to Use It", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/01-Section%201-%20Introduction%20to%20Suppliers/02-What%20is%20Supplier%20HQ%20How%20to%20Use%20It.mp4", resources: [
                    {"name": "What is Supplier HQ How to Use It.pdf", "size": "126 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s5-s2",
                title: "Section 2- Supplier Research",
                lessons: [
                  { id: "hte1-s5-s2-1", title: "Compiling Your Supplier List", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/02-Section%202-%20Supplier%20Research/01-Compiling%20Your%20Supplier%20List.mp4", resources: [
                    {"name": "Compiling Your Supplier List.pdf", "size": "122 KB"}
                  ] },
                  { id: "hte1-s5-s2-2", title: "Supplier HQ for Supplier Research", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/02-Section%202-%20Supplier%20Research/02-Supplier%20HQ%20for%20Supplier%20Research%20.mp4", resources: [
                    {"name": "Supplier HQ for Supplier Research.pdf", "size": "128 KB"}
                  ] },
                  { id: "hte1-s5-s2-3", title: "Finding Brand Price Point", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/02-Section%202-%20Supplier%20Research/03-%20Finding%20Brand%20Price%20Point%20.mp4", resources: [
                    {"name": "Finding Brand Price Point.pdf", "size": "139 KB"}
                  ] },
                  { id: "hte1-s5-s2-4", title: "Minimum Advertised Price MAP", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/02-Section%202-%20Supplier%20Research/04-%20Minimum%20Advertised%20Price%20MAP.mp4", resources: [
                    {"name": "Minimum Advertised Price MAP.pdf", "size": "146 KB"}
                  ] },
                  { id: "hte1-s5-s2-5", title: "Branded Search Demand", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/02-Section%202-%20Supplier%20Research/05-Branded%20Search%20Demand.mp4", resources: [
                    {"name": "Branded Search Demand.pdf", "size": "130 KB"}
                  ] },
                  { id: "hte1-s5-s2-6", title: "Brand by Brand Competition", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/02-Section%202-%20Supplier%20Research/06-Brand%20by%20Brand%20Competition%20.mp4", resources: [
                    {"name": "Brand by Brand Competition.pdf", "size": "109 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s5-s3",
                title: "Section 3- Distributor Research",
                lessons: [
                  { id: "hte1-s5-s3-1", title: "Distributors- What They Are", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/03-Section%203-%20Distributor%20Research/01-Distributors-%20What%20They%20Are.mp4", resources: [
                    {"name": "Distributors- What They Are.pdf", "size": "101 KB"}
                  ] },
                  { id: "hte1-s5-s3-2", title: "Supplier HQ For Distributors", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/03-Section%203-%20Distributor%20Research/02-Supplier%20HQ%20For%20Distributors%20.mp4", resources: [
                    {"name": "Supplier HQ For Distributors.pdf", "size": "85 KB"}
                  ] },
                  { id: "hte1-s5-s3-3", title: "How to Find Distributors Manually", duration: "17m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/03-Section%203-%20Distributor%20Research/03-How%20to%20Find%20Distributors%20Manually%20.mp4", resources: [
                    {"name": "How to Find Distributors Manually.pdf", "size": "101 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s5-s4",
                title: "Section 4- Finalizing Your Lists",
                lessons: [
                  { id: "hte1-s5-s4-1", title: "Finalizing Your Supplier List", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/04-Section%204-%20Finalizing%20Your%20Lists/01-Finalizing%20Your%20Supplier%20List.mp4", resources: [
                    {"name": "Finalizing Your Supplier List.pdf", "size": "105 KB"},
                    {"name": "Supplier List.xlsx", "size": "5 KB"}
                  ] },
                  { id: "hte1-s5-s4-2", title: "Finalizing Your Distributor List", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/04-Section%204-%20Finalizing%20Your%20Lists/02-Finalizing%20Your%20Distributor%20List%20.mp4", resources: [
                    {"name": "Finalizing Your Distributor List.pdf", "size": "104 KB"}
                  ] },
                  { id: "hte1-s5-s4-3", title: "Where to Start Your Outreach", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/05-4%20-%20Suppliers%20Distributors/04-Section%204-%20Finalizing%20Your%20Lists/03-%20Where%20to%20Start%20Your%20Outreach%20.mp4", resources: [
                    {"name": "Where to Start Your Outreach.pdf", "size": "100 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte1-s6",
            title: "5 - Shopify-Virtual Showroom",
            lessons: [
              { id: "hte1-s6-1", title: "Module Overview", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/00-Module%20Overview.mp4", resources: [] }
            ],
            sections: [
              {
                id: "hte1-s6-s1",
                title: "Section 1- Preliminary Set Up Requirements",
                lessons: [
                  { id: "hte1-s6-s1-1", title: "Choosing Your Store Name", duration: "14m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/01-Section%201-%20Preliminary%20Set%20Up%20Requirements/01-Choosing%20Your%20Store%20Name.mp4", resources: [
                    {"name": "Choosing Your Store Name.pdf", "size": "98 KB"},
                    {"name": "Shopify Store Name Ideas.xlsx", "size": "50 KB"}
                  ] },
                  { id: "hte1-s6-s1-2", title: "Book Your Optional Tech Setup Call Incubator and Incubator Only", duration: "1m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/01-Section%201-%20Preliminary%20Set%20Up%20Requirements/02-Book%20Your%20Optional%20Tech%20Setup%20Call%20Incubator%20and%20Incubator%20Only.mp4", resources: [
                    {"name": "Book Your Optional Tech Setup Call Incubator and Incubator Only.pdf", "size": "27 KB"}
                  ] },
                  { id: "hte1-s6-s1-3", title: "Buying a Domain-URL", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/01-Section%201-%20Preliminary%20Set%20Up%20Requirements/03-%20Buying%20a%20Domain-URL%20.mp4", resources: [
                    {"name": "Buying a Domain-URL.pdf", "size": "96 KB"}
                  ] },
                  { id: "hte1-s6-s1-4", title: "Creating a Shopify Account", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/01-Section%201-%20Preliminary%20Set%20Up%20Requirements/04-Creating%20a%20Shopify%20Account.mp4", resources: [
                    {"name": "Creating a Shopify Account.pdf", "size": "104 KB"}
                  ] },
                  { id: "hte1-s6-s1-5", title: "Setting Up Your Google Workspace", duration: "29m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/01-Section%201-%20Preliminary%20Set%20Up%20Requirements/05-Setting%20Up%20Your%20Google%20Workspace%20.mp4", resources: [
                    {"name": "Setting Up Your Google Workspace.pdf", "size": "110 KB"}
                  ] },
                  { id: "hte1-s6-s1-6", title: "Choosing a Store Theme Adding to Shopify", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/01-Section%201-%20Preliminary%20Set%20Up%20Requirements/06-Choosing%20a%20Store%20Theme%20Adding%20to%20Shopify%20.mp4", resources: [
                    {"name": "Choosing a Store Theme Adding to Shopify.pdf", "size": "102 KB"}
                  ] },
                  { id: "hte1-s6-s1-7", title: "Designing Your Logo", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/01-Section%201-%20Preliminary%20Set%20Up%20Requirements/07-Designing%20Your%20Logo%20.mp4", resources: [
                    {"name": "Designing Your Logo.pdf", "size": "93 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s6-s2",
                title: "Section 2- Done For You Website Option",
                lessons: [
                  { id: "hte1-s6-s2-1", title: "Done For You Website", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/02-Section%202-%20Done%20For%20You%20Website%20Option/01-Done%20For%20You%20Website.mp4", resources: [
                    {"name": "Done For You Website.pdf", "size": "106 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s6-s3",
                title: "Section 3- Setting up MVP Website",
                lessons: [
                  { id: "hte1-s6-s3-1", title: "The Concept of Modeling after Successful Stores", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/01-%20The%20Concept%20of%20Modeling%20after%20Successful%20Stores%20.mp4", resources: [
                    {"name": "The Concept of Modeling after Successful Stores.pdf", "size": "104 KB"}
                  ] },
                  { id: "hte1-s6-s3-2", title: "Must Have Shopify Apps", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/02-%20Must%20Have%20Shopify%20Apps%20.mp4", resources: [
                    {"name": "Must Have Shopify Apps.pdf", "size": "102 KB"}
                  ] },
                  { id: "hte1-s6-s3-3", title: "Shopify Store Settings", duration: "27m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/03-Shopify%20Store%20Settings%20.mp4", resources: [
                    {"name": "Shopify Store Settings.pdf", "size": "103 KB"}
                  ] },
                  { id: "hte1-s6-s3-4", title: "Setting up Store Policies", duration: "", src: "", resources: [
                    {"name": "Policy Templates docs2.docx", "size": "195 KB"},
                    {"name": "Policy Templates docs3.docx", "size": "194 KB"},
                    {"name": "Policy Templates docs4.docx", "size": "194 KB"},
                    {"name": "Policy Templates docs5.docx", "size": "195 KB"},
                    {"name": "Policy Templates docs6.docx", "size": "193 KB"},
                    {"name": "Policy Templates docs7.docx", "size": "12 KB"},
                    {"name": "Policy Templates docs8.docx", "size": "195 KB"},
                    {"name": "Policy Templates docs9.docx", "size": "195 KB"},
                    {"name": "Policy Templates.docx", "size": "7 KB"}
                  ] },
                  { id: "hte1-s6-s3-5", title: "Minimum Viable Website", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/05-Minimum%20Viable%20Website%20.mp4", resources: [
                    {"name": "Minimum Viable Website.pdf", "size": "104 KB"}
                  ] },
                  { id: "hte1-s6-s3-6", title: "Colors Typography", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/06-%20Colors%20Typography.mp4", resources: [
                    {"name": "Colors Typography.pdf", "size": "114 KB"}
                  ] },
                  { id: "hte1-s6-s3-7", title: "Creating Your Menu", duration: "16m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/07-Creating%20Your%20Menu.mp4", resources: [
                    {"name": "Creating Your Menu.pdf", "size": "108 KB"}
                  ] },
                  { id: "hte1-s6-s3-8", title: "Creating Announcement Bar", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/08-%20Creating%20Announcement%20Bar%20.mp4", resources: [
                    {"name": "Creating Announcement Bar.pdf", "size": "110 KB"}
                  ] },
                  { id: "hte1-s6-s3-9", title: "Building Your Home Page", duration: "19m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/09-Building%20Your%20Home%20Page%20.mp4", resources: [
                    {"name": "Building Your Home Page.pdf", "size": "126 KB"}
                  ] },
                  { id: "hte1-s6-s3-10", title: "Contact Us Page", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/10-Contact%20Us%20Page%20.mp4", resources: [
                    {"name": "Contact Us Page.pdf", "size": "96 KB"}
                  ] },
                  { id: "hte1-s6-s3-11", title: "About Us Page", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/11-About%20Us%20Page%20.mp4", resources: [
                    {"name": "About Us Page.pdf", "size": "105 KB"}
                  ] },
                  { id: "hte1-s6-s3-12", title: "Footer Creation", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/12-%20Footer%20Creation%20.mp4", resources: [
                    {"name": "Footer Creation.pdf", "size": "107 KB"}
                  ] },
                  { id: "hte1-s6-s3-13", title: "Building Collection Pages", duration: "17m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/13-%20Building%20Collection%20Pages%20.mp4", resources: [
                    {"name": "Building Collection Pages.pdf", "size": "103 KB"}
                  ] },
                  { id: "hte1-s6-s3-14", title: "Adding Demo Products", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/14-Adding%20Demo%20Products%20.mp4", resources: [
                    {"name": "Adding Demo Products.pdf", "size": "100 KB"}
                  ] },
                  { id: "hte1-s6-s3-15", title: "Setting up Product Pages", duration: "13m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/15-Setting%20up%20Product%20Pages.mp4", resources: [
                    {"name": "Setting up Product Pages.pdf", "size": "108 KB"}
                  ] },
                  { id: "hte1-s6-s3-16", title: "Standardizing ProductCollection Images", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/16-%20Standardizing%20ProductCollection%20Images.mp4", resources: [
                    {"name": "Standardizing Product-Collection Images.pdf", "size": "93 KB"}
                  ] },
                  { id: "hte1-s6-s3-17", title: "Favicon Password", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/17-Favicon%20Password%20.mp4", resources: [
                    {"name": "Favicon Password.pdf", "size": "96 KB"}
                  ] },
                  { id: "hte1-s6-s3-18", title: "Finalizing Your Demo Store", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/03-%20Section%203-%20Setting%20up%20MVP%20Website/18-%20Finalizing%20Your%20Demo%20Store%20.mp4", resources: [
                    {"name": "Finalizing Your Demo Store.pdf", "size": "112 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s6-s4",
                title: "Section 4- Website Finishing Touches",
                lessons: [
                  { id: "hte1-s6-s4-1", title: "Add Ons Upsells", duration: "12m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/01-Add%20Ons%20Upsells.mp4", resources: [
                    {"name": "Add Ons Upsells.pdf", "size": "117 KB"}
                  ] },
                  { id: "hte1-s6-s4-2", title: "Setting up Klaviyo", duration: "36m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/02-%20Setting%20up%20Klaviyo%20.mp4", resources: [
                    {"name": "Setting up Klaviyo.pdf", "size": "90 KB"}
                  ] },
                  { id: "hte1-s6-s4-3", title: "Judge Me Tutorial", duration: "13m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/03-%20Judge%20Me%20Tutorial%20.mp4", resources: [
                    {"name": "Judge Me Tutorial.pdf", "size": "95 KB"}
                  ] },
                  { id: "hte1-s6-s4-4", title: "Slide Cart Tutorial", duration: "13m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/04-%20Slide%20Cart%20Tutorial%20.mp4", resources: [
                    {"name": "Slide Cart Tutorial.pdf", "size": "75 KB"}
                  ] },
                  { id: "hte1-s6-s4-5", title: "Setting up Live Chat", duration: "22m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/05-Setting%20up%20Live%20Chat%20.mp4", resources: [
                    {"name": "Setting up Live Chat.pdf", "size": "90 KB"}
                  ] },
                  { id: "hte1-s6-s4-6", title: "Slack Automations", duration: "17m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/06-Slack%20Automations%20.mp4", resources: [
                    {"name": "Slack Automations.pdf", "size": "81 KB"}
                  ] },
                  { id: "hte1-s6-s4-7", title: "Setting up a Profit Tracker", duration: "10m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/07-%20Setting%20up%20a%20Profit%20Tracker%20.mp4", resources: [
                    {"name": "Setting up a Profit Tracker.pdf", "size": "78 KB"}
                  ] },
                  { id: "hte1-s6-s4-8", title: "Device Optimization Testing Your Store", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/08-Device%20Optimization%20Testing%20Your%20Store%20.mp4", resources: [
                    {"name": "Device Optimization Testing Your Store.pdf", "size": "86 KB"}
                  ] },
                  { id: "hte1-s6-s4-9", title: "How to Fulfill an Order", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/09-How%20to%20Fulfill%20an%20Order%20.mp4", resources: [
                    {"name": "How to Fulfill an Order.pdf", "size": "109 KB"}
                  ] },
                  { id: "hte1-s6-s4-10", title: "High Ticket Progress Tracker", duration: "1m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/10-High%20Ticket%20Progress%20Tracker.mp4", resources: [
                    {"name": "High Ticket Progress Tracker.pdf", "size": "194 KB"}
                  ] },
                  { id: "hte1-s6-s4-11", title: "ShopQuotes - Draft Order Quotes", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/11-ShopQuotes%20-%20Draft%20Order%20Quotes%20.mp4", resources: [
                    {"name": "ShopQuotes - Draft Order Quotes.pdf", "size": "52 KB"}
                  ] },
                  { id: "hte1-s6-s4-12", title: "OneReview Product Reviews", duration: "1m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/06-5%20-%20Shopify-Virtual%20Showroom/04-Section%204-%20Website%20Finishing%20Touches/12-%20OneReview%20Product%20Reviews.mp4", resources: [
                    {"name": "OneReview Product Reviews.pdf", "size": "205 KB"},
                    {"name": "OneReview App Setup Installation Demo 12-5-24.mp4", "size": "34.1 MB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte1-s7",
            title: "6 - Partnering With Suppliers",
            lessons: [
              { id: "hte1-s7-1", title: "Module Overview", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/00-Module%20Overview.mp4", resources: [] }
            ],
            sections: [
              {
                id: "hte1-s7-s1",
                title: "Section 1- Introduction to Module",
                lessons: [
                  { id: "hte1-s7-s1-1", title: "Supplier HQ for Closing Suppliers Managing CRM", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/01-Section%201-%20Introduction%20to%20Module/01-Supplier%20HQ%20for%20Closing%20Suppliers%20Managing%20CRM.mp4", resources: [
                    {"name": "Supplier HQ for Closing Suppliers Managing CRM.pdf", "size": "119 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s7-s2",
                title: "Section 2- Preparing to Contact Suppliers",
                lessons: [
                  { id: "hte1-s7-s2-1", title: "Different Methods of Closing Suppliers", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/02-Section%202-%20Preparing%20to%20Contact%20Suppliers/01-Different%20Methods%20of%20Closing%20Suppliers.mp4", resources: [
                    {"name": "Different Methods of Closing Suppliers.pdf", "size": "115 KB"}
                  ] },
                  { id: "hte1-s7-s2-2", title: "How to Convey Value", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/02-Section%202-%20Preparing%20to%20Contact%20Suppliers/02-How%20to%20Convey%20Value%20.mp4", resources: [
                    {"name": "How to Convey Value.pdf", "size": "116 KB"}
                  ] },
                  { id: "hte1-s7-s2-3", title: "Common Topics Questions Responses", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/02-Section%202-%20Preparing%20to%20Contact%20Suppliers/03-Common%20Topics%20Questions%20Responses%20.mp4", resources: [
                    {"name": "Common Topics Questions Responses.pdf", "size": "104 KB"}
                  ] },
                  { id: "hte1-s7-s2-4", title: "The Importance of Staying Persistent", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/02-Section%202-%20Preparing%20to%20Contact%20Suppliers/04-%20The%20Importance%20of%20Staying%20Persistent%20.mp4", resources: [
                    {"name": "The Importance of Staying Persistent.pdf", "size": "119 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s7-s3",
                title: "Section 3- Supplier Outreach University",
                lessons: [
                  { id: "hte1-s7-s3-1", title: "Email Outreach Scripts", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/03-Section%203-%20Supplier%20Outreach%20University/01-Email%20Outreach%20Scripts.mp4", resources: [
                    {"name": "Email Outreach Scripts.pdf", "size": "127 KB"}
                  ] },
                  { id: "hte1-s7-s3-2", title: "Chat GPT For Script Generation", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/03-Section%203-%20Supplier%20Outreach%20University/02-Chat%20GPT%20For%20Script%20Generation.mp4", resources: [
                    {"name": "Chat GPT For Script Generation.pdf", "size": "124 KB"}
                  ] },
                  { id: "hte1-s7-s3-3", title: "Email Follow Up Strategies Timing", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/03-Section%203-%20Supplier%20Outreach%20University/03-%20Email%20Follow%20Up%20Strategies%20Timing%20.mp4", resources: [
                    {"name": "Email Follow Up Strategies Timing.pdf", "size": "119 KB"}
                  ] },
                  { id: "hte1-s7-s3-4", title: "Phone Outreach Scripts", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/03-Section%203-%20Supplier%20Outreach%20University/04-%20Phone%20Outreach%20Scripts%20.mp4", resources: [
                    {"name": "Phone Outreach Scripts.pdf", "size": "144 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s7-s4",
                title: "Bonus Avenues",
                lessons: [
                  { id: "hte1-s7-s4-1", title: "LinkedIn", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/04-Bonus%20Avenues/01-LinkedIn.mp4", resources: [
                    {"name": "LinkedIn.pdf", "size": "139 KB"}
                  ] },
                  { id: "hte1-s7-s4-2", title: "Trade Shows", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/04-Bonus%20Avenues/02-Trade%20Shows%20.mp4", resources: [
                    {"name": "Trade Shows.pdf", "size": "142 KB"}
                  ] },
                  { id: "hte1-s7-s4-3", title: "Meeting Suppliers In Your Area", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/04-Bonus%20Avenues/03-Meeting%20Suppliers%20In%20Your%20Area%20.mp4", resources: [
                    {"name": "Meeting Suppliers In Your Area.pdf", "size": "131 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s7-s5",
                title: "Section 4- Module Completion",
                lessons: [
                  { id: "hte1-s7-s5-1", title: "Closing Your First 3 Suppliers", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/07-6%20-%20Partnering%20With%20Suppliers/05-Section%204-%20Module%20Completion/01-Closing%20Your%20First%203%20Suppliers.mp4", resources: [
                    {"name": "Closing Your First 3 Suppliers.pdf", "size": "153 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte1-s8",
            title: "7 - Onboarding Suppliers",
            lessons: [
              { id: "hte1-s8-1", title: "Module Overview", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/00-Module%20Overview.mp4", resources: [] }
            ],
            sections: [
              {
                id: "hte1-s8-s1",
                title: "Section 1- Module Overview",
                lessons: [
                  { id: "hte1-s8-s1-1", title: "Prioritizing Your Supplier Uploads", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/01-Section%201-%20Module%20Overview/01-Prioritizing%20Your%20Supplier%20Uploads.mp4", resources: [
                    {"name": "Prioritizing Your Supplier Uploads.pdf", "size": "118 KB"}
                  ] },
                  { id: "hte1-s8-s1-2", title: "Types of Supplier Documents Sheets", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/01-Section%201-%20Module%20Overview/02-%20Types%20of%20Supplier%20Documents%20Sheets%20.mp4", resources: [
                    {"name": "Types of Supplier Documents Sheets.pdf", "size": "132 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s8-s2",
                title: "Section 2- Uploading Products",
                lessons: [
                  { id: "hte1-s8-s2-1", title: "Product Title-Naming", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/01-Product%20Title-Naming.mp4", resources: [
                    {"name": "Product Title-Naming.pdf", "size": "99 KB"}
                  ] },
                  { id: "hte1-s8-s2-2", title: "Product Pricing-SKU-GTIN-UPC", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/02-%20Product%20Pricing-SKU-GTIN-UPC%20.mp4", resources: [
                    {"name": "Product Pricing-SKU-GTIN-UPC.pdf", "size": "128 KB"}
                  ] },
                  { id: "hte1-s8-s2-3", title: "Product Variants Options", duration: "15m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/03-Product%20Variants%20Options%20.mp4", resources: [
                    {"name": "Product Variants Options.pdf", "size": "121 KB"}
                  ] },
                  { id: "hte1-s8-s2-4", title: "Product Media Images Videos", duration: "16m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/04-Product%20Media%20Images%20Videos%20.mp4", resources: [
                    {"name": "Product Media Images Videos.pdf", "size": "112 KB"}
                  ] },
                  { id: "hte1-s8-s2-5", title: "Product Description Tabs", duration: "16m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/05-%20Product%20Description%20Tabs.mp4", resources: [
                    {"name": "Product Description Tabs.pdf", "size": "98 KB"}
                  ] },
                  { id: "hte1-s8-s2-6", title: "Product Manuals", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/06-%20Product%20Manuals%20.mp4", resources: [
                    {"name": "Product Manuals.pdf", "size": "93 KB"}
                  ] },
                  { id: "hte1-s8-s2-7", title: "Tracking Inventory", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/07-%20Tracking%20Inventory%20.mp4", resources: [
                    {"name": "Tracking Inventory.pdf", "size": "97 KB"}
                  ] },
                  { id: "hte1-s8-s2-8", title: "Product Categories Collections Tagging", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/08-%20Product%20Categories%20Collections%20Tagging%20.mp4", resources: [
                    {"name": "Product Categories Collections Tagging.pdf", "size": "102 KB"}
                  ] },
                  { id: "hte1-s8-s2-9", title: "Systemizing Your Product Uploads- Matrixify", duration: "10m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/09-%20Systemizing%20Your%20Product%20Uploads-%20Matrixify%20.mp4", resources: [
                    {"name": "Systemizing Your Product Uploads- Matrixify.pdf", "size": "107 KB"},
                    {"name": "Matrixify Template.xlsx", "size": "38 KB"}
                  ] },
                  { id: "hte1-s8-s2-10", title: "CRO for Product Pages", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/10-%20CRO%20for%20Product%20Pages%20.mp4", resources: [
                    {"name": "CRO for Product Pages.pdf", "size": "109 KB"}
                  ] },
                  { id: "hte1-s8-s2-11", title: "Adding Reviews to Your Store", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/02-Section%202-%20Uploading%20Products/11-%20Adding%20Reviews%20to%20Your%20Store%20.mp4", resources: [
                    {"name": "Adding Reviews to Your Store.pdf", "size": "100 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s8-s3",
                title: "Section 3- Supplier Policies",
                lessons: [
                  { id: "hte1-s8-s3-1", title: "Refund-Return Warranty Policies", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/03-Section%203-%20Supplier%20Policies/01-Refund-Return%20Warranty%20Policies.mp4", resources: [
                    {"name": "Refund-Return Warranty Policies.pdf", "size": "114 KB"}
                  ] },
                  { id: "hte1-s8-s3-2", title: "Shipping Policies", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/03-Section%203-%20Supplier%20Policies/02-%20Shipping%20Policies%20.mp4", resources: [
                    {"name": "Shipping Policies.pdf", "size": "115 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s8-s4",
                title: "Section 4- Module Completion",
                lessons: [
                  { id: "hte1-s8-s4-1", title: "Upload 3 Brands That Meet Search Margin Criteria", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/04-Section%204-%20Module%20Completion/01-%20Upload%203%20Brands%20That%20Meet%20Search%20Margin%20Criteria%20.mp4", resources: [
                    {"name": "Upload 3 Brands That Meet Search Margin Criteria.pdf", "size": "116 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s8-s5",
                title: "Bonus Content Optional",
                lessons: [
                  { id: "hte1-s8-s5-1", title: "Hiring Product Uploader Prioritization", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/08-7%20-%20Onboarding%20Suppliers/05-Bonus%20Content%20Optional/01-Hiring%20Product%20Uploader%20Prioritization.mp4", resources: [
                    {"name": "Hiring Product Uploader Prioritization.pdf", "size": "137 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte1-s9",
            title: "8 - Setting up Ads",
            lessons: [
              { id: "hte1-s9-1", title: "Module Overview", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/09-8%20-%20Setting%20up%20Ads/00-Module%20Overview.mp4", resources: [] }
            ],
            sections: [
              {
                id: "hte1-s9-s1",
                title: "Section 1- Module Overview",
                lessons: [
                  { id: "hte1-s9-s1-1", title: "Where to Go If No Budget For Ads Optional", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/09-8%20-%20Setting%20up%20Ads/01-Section%201-%20Module%20Overview(1)/01-Where%20to%20Go%20If%20No%20Budget%20For%20Ads%20Optional.mp4", resources: [
                    {"name": "Where to Go If No Budget For Ads Optional.pdf", "size": "87 KB"}
                  ] },
                  { id: "hte1-s9-s1-2", title: "If Your GMC Gets Suspended- Go Here", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/09-8%20-%20Setting%20up%20Ads/01-Section%201-%20Module%20Overview(1)/02-%20If%20Your%20GMC%20Gets%20Suspended-%20Go%20Here%20.mp4", resources: [
                    {"name": "If Your GMC Gets Suspended- Go Here.pdf", "size": "103 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s9-s2",
                title: "Section 2- Setting up Ad Accounts Social Media",
                lessons: [
                  { id: "hte1-s9-s2-1", title: "Creating Your Social Media Presence- FB Instagram", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/09-8%20-%20Setting%20up%20Ads/02-Section%202-%20Setting%20up%20Ad%20Accounts%20Social%20Media(1)/01-Creating%20Your%20Social%20Media%20Presence-%20FB%20Instagram.mp4", resources: [
                    {"name": "Creating Your Social Media Presence- FB Instagram.pdf", "size": "96 KB"}
                  ] },
                  { id: "hte1-s9-s2-2", title: "How to Set up GMC Account", duration: "10m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/09-8%20-%20Setting%20up%20Ads/02-Section%202-%20Setting%20up%20Ad%20Accounts%20Social%20Media(1)/02-How%20to%20Set%20up%20GMC%20Account%20.mp4", resources: [
                    {"name": "How to Set up GMC Account.pdf", "size": "115 KB"}
                  ] },
                  { id: "hte1-s9-s2-3", title: "How to Claim and Verify Website on GMC", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/09-8%20-%20Setting%20up%20Ads/02-Section%202-%20Setting%20up%20Ad%20Accounts%20Social%20Media(1)/03-How%20to%20Claim%20and%20Verify%20Website%20on%20GMC%20.mp4", resources: [
                    {"name": "How to Claim and Verify Website on GMC.pdf", "size": "105 KB"}
                  ] },
                  { id: "hte1-s9-s2-4", title: "How to Set Up Google Ads Account", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/09-8%20-%20Setting%20up%20Ads/02-Section%202-%20Setting%20up%20Ad%20Accounts%20Social%20Media(1)/04-%20How%20to%20Set%20Up%20Google%20Ads%20Account.mp4", resources: [
                    {"name": "How to Set Up Google Ads Account.pdf", "size": "111 KB"}
                  ] },
                  { id: "hte1-s9-s2-5", title: "Connect Your Google Ads Account to Your Website", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/09-8%20-%20Setting%20up%20Ads/02-Section%202-%20Setting%20up%20Ad%20Accounts%20Social%20Media(1)/05-Connect%20Your%20Google%20Ads%20Account%20to%20Your%20Website%20.mp4", resources: [
                    {"name": "Connect Your Google Ads Account to Your Website.pdf", "size": "107 KB"}
                  ] },
                  { id: "hte1-s9-s2-6", title: "Connecting Google Merchant Center to Google Ads", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/09-8%20-%20Setting%20up%20Ads/02-Section%202-%20Setting%20up%20Ad%20Accounts%20Social%20Media(1)/06-Connecting%20Google%20Merchant%20Center%20to%20Google%20Ads.mp4", resources: [
                    {"name": "Connecting Google Merchant Center to Google Ads.pdf", "size": "112 KB"}
                  ] },
                  { id: "hte1-s9-s2-7", title: "Connecting Simprosis to GMC Account", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/09-8%20-%20Setting%20up%20Ads/02-Section%202-%20Setting%20up%20Ad%20Accounts%20Social%20Media(1)/07-Connecting%20Simprosis%20to%20GMC%20Account.mp4", resources: [
                    {"name": "Connecting Simprosis to GMC Account.pdf", "size": "129 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte1-s10",
            title: "9 - Launching Ads",
            lessons: [
              { id: "hte1-s10-1", title: "Module Overview", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/00-Module%20Overview.mp4", resources: [] }
            ],
            sections: [
              {
                id: "hte1-s10-s1",
                title: "Section 1- Module Overview",
                lessons: [
                  { id: "hte1-s10-s1-1", title: "What are Google Ads", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/01-Section%201-%20Module%20Overview/01-What%20are%20Google%20Ads%20.mp4", resources: [
                    {"name": "What are Google Ads.pdf", "size": "99 KB"}
                  ] },
                  { id: "hte1-s10-s1-2", title: "How To Use Google Ads Platform", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/01-Section%201-%20Module%20Overview/02-How%20To%20Use%20Google%20Ads%20Platform%20.mp4", resources: [
                    {"name": "How To Use Google Ads Platform.pdf", "size": "98 KB"}
                  ] },
                  { id: "hte1-s10-s1-3", title: "Setting up Conversion Tracking", duration: "11m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/01-Section%201-%20Module%20Overview/03-Setting%20up%20Conversion%20Tracking.mp4", resources: [
                    {"name": "Setting up Conversion Tracking.pdf", "size": "82 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s10-s2",
                title: "Section 2- Setting up Campaigns",
                lessons: [
                  { id: "hte1-s10-s2-1", title: "What Are PMAX Campaigns.", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/02-Section%202-%20Setting%20up%20Campaigns/01-What%20Are%20PMAX%20Campaigns..mp4", resources: [
                    {"name": "What Are PMAX Campaigns.pdf", "size": "112 KB"}
                  ] },
                  { id: "hte1-s10-s2-2", title: "Budget Allocation for PMAX", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/02-Section%202-%20Setting%20up%20Campaigns/02-%20Budget%20Allocation%20for%20PMAX%20.mp4", resources: [
                    {"name": "Budget Allocation for PMAX.pdf", "size": "95 KB"}
                  ] },
                  { id: "hte1-s10-s2-3", title: "Setting Up Custom Labels", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/02-Section%202-%20Setting%20up%20Campaigns/03-%20Setting%20Up%20Custom%20Labels%20.mp4", resources: [
                    {"name": "Setting Up Custom Labels.pdf", "size": "97 KB"}
                  ] },
                  { id: "hte1-s10-s2-4", title: "Setting up PMAX Campaigns", duration: "14m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/02-Section%202-%20Setting%20up%20Campaigns/04-%20Setting%20up%20PMAX%20Campaigns%20.mp4", resources: [
                    {"name": "Setting up PMAX Campaigns.pdf", "size": "108 KB"}
                  ] }
                ],
              },
              {
                id: "hte1-s10-s3",
                title: "Section 3- How to Run PMAX Ads",
                lessons: [
                  { id: "hte1-s10-s3-1", title: "How to Check PMAX Performance", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/03-Section%203-%20How%20to%20Run%20PMAX%20Ads/01-How%20to%20Check%20PMAX%20Performance.mp4", resources: [
                    {"name": "How to Check PMAX Performance.pdf", "size": "107 KB"}
                  ] },
                  { id: "hte1-s10-s3-2", title: "Key Performance Indicators KPIs That Matter", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/03-Section%203-%20How%20to%20Run%20PMAX%20Ads/02-Key%20Performance%20Indicators%20KPIs%20That%20Matter.mp4", resources: [
                    {"name": "Key Performance Indicators KPIs That Matter.pdf", "size": "122 KB"}
                  ] },
                  { id: "hte1-s10-s3-3", title: "Setting up Promotions", duration: "10m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/03-Section%203-%20How%20to%20Run%20PMAX%20Ads/03-Setting%20up%20Promotions%20.mp4", resources: [
                    {"name": "Setting up Promotions.pdf", "size": "133 KB"}
                  ] },
                  { id: "hte1-s10-s3-4", title: "When Brands Are Overspending", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/03-Section%203-%20How%20to%20Run%20PMAX%20Ads/04-When%20Brands%20Are%20Overspending%20.mp4", resources: [
                    {"name": "When Brands Are Overspending.pdf", "size": "128 KB"}
                  ] },
                  { id: "hte1-s10-s3-5", title: "How to Get Help With Google Ads", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/01-High%20Ticket%20E-Commerce%20Program/10-9%20-%20Launching%20Ads/03-Section%203-%20How%20to%20Run%20PMAX%20Ads/05-%20How%20to%20Get%20Help%20With%20Google%20Ads%20.mp4", resources: [
                    {"name": "How to Get Help With Google Ads.pdf", "size": "115 KB"}
                  ] }
                ],
              }
            ],
          }
        ],
      },
      {
        id: "hte2",
        title: "Bonuses",
        sections: [
          {
            id: "hte2-s1",
            title: "Bonus 1 - The Golden Rebate",
            lessons: [
              { id: "hte2-s1-1", title: "How to Qualify for the Golden Rebate", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/01-Bonus%201%20-%20The%20Golden%20Rebate/01-How%20to%20Qualify%20for%20the%20Golden%20Rebate.mp4", resources: [
                {"name": "How to Qualify for the Golden Rebate.pdf", "size": "16 KB"}
              ] }
            ],
          },
          {
            id: "hte2-s2",
            title: "Bonus 2 - Social Proof Syndicate",
            lessons: [
              { id: "hte2-s2-1", title: "How to Find and Use The Social Proof Syndicate", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/02-Bonus%202%20-%20Social%20Proof%20Syndicate/01-How%20to%20Find%20and%20Use%20The%20Social%20Proof%20Syndicate.mp4", resources: [] }
            ],
          },
          {
            id: "hte2-s3",
            title: "Bonus 3 - 1400 Product Gold Rush",
            lessons: [
              { id: "hte2-s3-1", title: "Link to The Product GoldRush and How to Find It", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/03-Bonus%203%20-%201400%20Product%20Gold%20Rush/01-Link%20to%20The%20Product%20GoldRush%20and%20How%20to%20Find%20It.mp4", resources: [
                {"name": "Highticket-Top-1400-Products.pdf", "size": "24.9 MB"},
                {"name": "Link to The Product GoldRush and How to Find It.pdf", "size": "22 KB"}
              ] }
            ],
          },
          {
            id: "hte2-s4",
            title: "Bonus 4 - A.I. Infinite Worker Masterclass",
            sections: [
              {
                id: "hte2-s4-s1",
                title: "A.I. Infinite Worker- Niche Supplier Research",
                lessons: [
                  { id: "hte2-s4-s1-1", title: "Chat GPT Prompts for Finding Viral Products", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/01-A.I.%20Infinite%20Worker-%20Niche%20Supplier%20Research/01-Chat%20GPT%20Prompts%20for%20Finding%20Viral%20Products.mp4", resources: [] },
                  { id: "hte2-s4-s1-2", title: "Chat GPT Prompts for Niche Selection", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/01-A.I.%20Infinite%20Worker-%20Niche%20Supplier%20Research/02-Chat%20GPT%20Prompts%20for%20Niche%20Selection%20.mp4", resources: [] },
                  { id: "hte2-s4-s1-3", title: "Chat GPT Prompts for Supplier Research", duration: "1m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/01-A.I.%20Infinite%20Worker-%20Niche%20Supplier%20Research/03-Chat%20GPT%20Prompts%20for%20Supplier%20Research%20.mp4", resources: [] },
                  { id: "hte2-s4-s1-4", title: "Chat GPT Prompts for Distributor Research", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/01-A.I.%20Infinite%20Worker-%20Niche%20Supplier%20Research/04-Chat%20GPT%20Prompts%20for%20Distributor%20Research%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s4-s2",
                title: "A.I. Infinite Worker- Website",
                lessons: [
                  { id: "hte2-s4-s2-1", title: "Chat GPT to Generate Site Images", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/02-A.I.%20Infinite%20Worker-%20Website/01-Chat%20GPT%20to%20Generate%20Site%20Images.mp4", resources: [] },
                  { id: "hte2-s4-s2-2", title: "Mid-Journey to Generate Site Images", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/02-A.I.%20Infinite%20Worker-%20Website/02-Mid-Journey%20to%20Generate%20Site%20Images%20.mp4", resources: [
                    {"name": "Mid-Journey to Generate Site Images.pdf", "size": "23 KB"}
                  ] },
                  { id: "hte2-s4-s2-3", title: "Chat GPT To Create SEO Optimized Website Copy r", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/02-A.I.%20Infinite%20Worker-%20Website/03-%20Chat%20GPT%20To%20Create%20SEO%20Optimized%20Website%20Copy%20r.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s4-s3",
                title: "A.I. Infinite Worker- Closing Suppliers",
                lessons: [
                  { id: "hte2-s4-s3-1", title: "Chat GPT Email Script Prompts", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/03-A.I.%20Infinite%20Worker-%20Closing%20Suppliers/01-Chat%20GPT%20Email%20Script%20Prompts%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s4-s4",
                title: "A.I. Infinite Worker- Ad Copy Images",
                lessons: [
                  { id: "hte2-s4-s4-1", title: "Chat GPT Prompts for Ad Copy", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/04-A.I.%20Infinite%20Worker-%20Ad%20Copy%20Images/01-Chat%20GPT%20Prompts%20for%20Ad%20Copy.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s4-s5",
                title: "A.I. Infinite Worker- Softwares and Tools",
                lessons: [
                  { id: "hte2-s4-s5-1", title: "A.I. Product Research Toolsr", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/05-A.I.%20Infinite%20Worker-%20Softwares%20and%20Tools/01-A.I.%20Product%20Research%20Toolsr.mp4", resources: [
                    {"name": "A.I. Product Research Tools.pdf", "size": "29 KB"}
                  ] },
                  { id: "hte2-s4-s5-2", title: "A.I. Customer Service Tools", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/04-Bonus%204%20-%20A.I.%20Infinite%20Worker%20Masterclass/05-A.I.%20Infinite%20Worker-%20Softwares%20and%20Tools/02-%20A.I.%20Customer%20Service%20Tools%20.mp4", resources: [
                    {"name": "A.I. Customer Service Tools.pdf", "size": "21 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte2-s5",
            title: "Bonus 5 - Hidden Highway Free Traffic Masterclass",
            sections: [
              {
                id: "hte2-s5-s1",
                title: "Free Traffic Overview",
                lessons: [
                  { id: "hte2-s5-s1-1", title: "Optimizing Google Free Listings", duration: "", src: "", resources: [] }
                ],
              },
              {
                id: "hte2-s5-s2",
                title: "Personalized Cold Email",
                lessons: [
                  { id: "hte2-s5-s2-1", title: "How to Do Personalized Big Budget E-Com Mastery", duration: "19m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/02-Personalized%20Cold%20Email/02-How%20to%20Do%20Personalized%20Big%20Budget%20E-Com%20Mastery%20.mp4", resources: [] },
                  { id: "hte2-s5-s2-2", title: "Testing Different Offers Customers", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/02-Personalized%20Cold%20Email/03-Testing%20Different%20Offers%20Customers%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s5-s3",
                title: "Mass Cold Email",
                lessons: [
                  { id: "hte2-s5-s3-1", title: "Introduction to Mass Big Budget E-Com", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/03-Mass%20Cold%20Email/01-Introduction%20to%20Mass%20Big%20Budget%20E-Com.mp4", resources: [] },
                  { id: "hte2-s5-s3-2", title: "Buying a Sending Domain", duration: "12m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/03-Mass%20Cold%20Email/02-Buying%20a%20Sending%20Domain%20.mp4", resources: [] },
                  { id: "hte2-s5-s3-3", title: "Setting up Smart Lead Warming Up Domain", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/03-Mass%20Cold%20Email/03-%20Setting%20up%20Smart%20Lead%20Warming%20Up%20Domain%20.mp4", resources: [
                    {"name": "Setting up Smart Lead Warming Up Domain.pdf", "size": "25 KB"}
                  ] },
                  { id: "hte2-s5-s3-4", title: "Scraping Your Dream B2B Leads from Databases", duration: "10m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/03-Mass%20Cold%20Email/04-%20Scraping%20Your%20Dream%20B2B%20Leads%20from%20Databases.mp4", resources: [
                    {"name": "Scraping Your Dream B2B Leads from Databases.pdf", "size": "21 KB"}
                  ] },
                  { id: "hte2-s5-s3-5", title: "Scraping Your Dream High NW Leads From Databases", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/03-Mass%20Cold%20Email/05-%20Scraping%20Your%20Dream%20High%20NW%20Leads%20From%20Databases%20.mp4", resources: [] },
                  { id: "hte2-s5-s3-6", title: "Building Your Cold Email Outreach Campaigns", duration: "15m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/03-Mass%20Cold%20Email/06-%20Building%20Your%20Cold%20Email%20Outreach%20Campaigns%20.mp4", resources: [] },
                  { id: "hte2-s5-s3-7", title: "Optimizing Copy Split Testing Offers", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/03-Mass%20Cold%20Email/07-%20Optimizing%20Copy%20Split%20Testing%20Offers%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s5-s4",
                title: "Introduction to Short-Form Content",
                lessons: [
                  { id: "hte2-s5-s4-1", title: "Introduction to Social Media Short Form Content", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/04-Introduction%20to%20Short-Form%20Content/01-Introduction%20to%20Social%20Media%20Short%20Form%20Content.mp4", resources: [] },
                  { id: "hte2-s5-s4-2", title: "Creating Offers Lead Magnets to Grow Followers", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/04-Introduction%20to%20Short-Form%20Content/02-Creating%20Offers%20Lead%20Magnets%20to%20Grow%20Followers%20.mp4", resources: [] },
                  { id: "hte2-s5-s4-3", title: "General Tips to Grow Your Following", duration: "10m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/04-Introduction%20to%20Short-Form%20Content/03-%20General%20Tips%20to%20Grow%20Your%20Following%20.mp4", resources: [] },
                  { id: "hte2-s5-s4-4", title: "TikTok Shorts", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/04-Introduction%20to%20Short-Form%20Content/04-%20TikTok%20Shorts%20.mp4", resources: [] },
                  { id: "hte2-s5-s4-5", title: "Instagram Reels", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/04-Introduction%20to%20Short-Form%20Content/05-%20Instagram%20Reels%20.mp4", resources: [] },
                  { id: "hte2-s5-s4-6", title: "Youtube Shorts", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/04-Introduction%20to%20Short-Form%20Content/06-%20Youtube%20Shorts%20.mp4", resources: [] },
                  { id: "hte2-s5-s4-7", title: "Posting on Pinterest", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/04-Introduction%20to%20Short-Form%20Content/07-Posting%20on%20Pinterest%20.mp4", resources: [] },
                  { id: "hte2-s5-s4-8", title: "Repurposing Content", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/04-Introduction%20to%20Short-Form%20Content/08-Repurposing%20Content%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s5-s5",
                title: "Introduction to Long-Form Content",
                lessons: [
                  { id: "hte2-s5-s5-1", title: "Introduction to Long Form Youtube", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/05-Introduction%20to%20Long-Form%20Content/01-Introduction%20to%20Long%20Form%20Youtube.mp4", resources: [] },
                  { id: "hte2-s5-s5-2", title: "How to Use Vid IQ", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/05-Introduction%20to%20Long-Form%20Content/02-How%20to%20Use%20Vid%20IQ%20.mp4", resources: [] },
                  { id: "hte2-s5-s5-3", title: "Creating Long Form Videos", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/05-Introduction%20to%20Long-Form%20Content/03-Creating%20Long%20Form%20Videos%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s5-s6",
                title: "Other Ways to Get Free Traffic",
                lessons: [
                  { id: "hte2-s5-s6-1", title: "Facebook LinkedIn Groups", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/06-Other%20Ways%20to%20Get%20Free%20Traffic/01-Facebook%20LinkedIn%20Groups.mp4", resources: [] },
                  { id: "hte2-s5-s6-2", title: "Using Facebook Marketplace Free Marketplaces", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/06-Other%20Ways%20to%20Get%20Free%20Traffic/02-%20Using%20Facebook%20Marketplace%20Free%20Marketplaces%20.mp4", resources: [] },
                  { id: "hte2-s5-s6-3", title: "Using Niche Forums and Reddit", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/06-Other%20Ways%20to%20Get%20Free%20Traffic/03-%20Using%20Niche%20Forums%20and%20Reddit%20.mp4", resources: [] },
                  { id: "hte2-s5-s6-4", title: "Posting Blog Posts Products", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/06-Other%20Ways%20to%20Get%20Free%20Traffic/04-%20Posting%20Blog%20Posts%20Products%20.mp4", resources: [] },
                  { id: "hte2-s5-s6-5", title: "Introduction to SEO", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/06-Other%20Ways%20to%20Get%20Free%20Traffic/05-%20Introduction%20to%20SEO%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s5-s7",
                title: "Creating an Action Plan for Yourself",
                lessons: [
                  { id: "hte2-s5-s7-1", title: "Creating Action Plan for Yourself", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/05-Bonus%205%20-%20Hidden%20Highway%20Free%20Traffic%20Masterclass/07-Creating%20an%20Action%20Plan%20for%20Yourself/01-Creating%20Action%20Plan%20for%20Yourself.mp4", resources: [] }
                ],
              }
            ],
          },
          {
            id: "hte2-s6",
            title: "Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal",
            sections: [
              {
                id: "hte2-s6-s1",
                title: "B2B 2024 Updates",
                lessons: [
                  { id: "hte2-s6-s1-1", title: "B2B 2024 - Start Here", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/06-Bonus%206%20-%20Big%20Budget%20E-Com%20Mastery%20Taught%20by%20Kabrin%20Johal/01-B2B%202024%20Updates/01-B2B%202024%20-%20Start%20Here.mp4", resources: [] },
                  { id: "hte2-s6-s1-2", title: "B2B Lead Research", duration: "19m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/06-Bonus%206%20-%20Big%20Budget%20E-Com%20Mastery%20Taught%20by%20Kabrin%20Johal/01-B2B%202024%20Updates/02-B2B%20Lead%20Research.mp4", resources: [] },
                  { id: "hte2-s6-s1-3", title: "B2B - Personalized Outreach", duration: "14m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/06-Bonus%206%20-%20Big%20Budget%20E-Com%20Mastery%20Taught%20by%20Kabrin%20Johal/01-B2B%202024%20Updates/03-B2B%20-%20Personalized%20Outreach%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s6-s2",
                title: "B2B Mastery - Kabrin",
                lessons: [
                  { id: "hte2-s6-s2-1", title: "Module 1- Understanding B2B Outreach", duration: "23m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/06-Bonus%206%20-%20Big%20Budget%20E-Com%20Mastery%20Taught%20by%20Kabrin%20Johal/02-B2B%20Mastery%20-%20Kabrin/01-Module%201-%20Understanding%20B2B%20Outreach.mp4", resources: [
                    {"name": "Module 1- Understanding B2B Outreach.pdf", "size": "10 KB"}
                  ] },
                  { id: "hte2-s6-s2-2", title: "Module 2- Outreach", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/06-Bonus%206%20-%20Big%20Budget%20E-Com%20Mastery%20Taught%20by%20Kabrin%20Johal/02-B2B%20Mastery%20-%20Kabrin/02-Module%202-%20Outreach%20.mp4", resources: [
                    {"name": "Module 2- Outreach.pdf", "size": "10 KB"}
                  ] },
                  { id: "hte2-s6-s2-3", title: "Module 3- Admin and Getting Paid", duration: "10m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/06-Bonus%206%20-%20Big%20Budget%20E-Com%20Mastery%20Taught%20by%20Kabrin%20Johal/02-B2B%20Mastery%20-%20Kabrin/03-Module%203-%20Admin%20and%20Getting%20Paid%20.mp4", resources: [
                    {"name": "Module 3- Admin and Getting Paid.pdf", "size": "11 KB"}
                  ] },
                  { id: "hte2-s6-s2-4", title: "New Strategies", duration: "23m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/06-Bonus%206%20-%20Big%20Budget%20E-Com%20Mastery%20Taught%20by%20Kabrin%20Johal/02-B2B%20Mastery%20-%20Kabrin/04-%20New%20Strategies%20.mp4", resources: [
                    {"name": "New Strategies.pdf", "size": "10 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte2-s7",
            title: "Bonus 7 - Golden Parachute Tax Planning Call",
            lessons: [
              { id: "hte2-s7-1", title: "Introduction to Doola", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/07-Bonus%207%20-%20Golden%20Parachute%20Tax%20Planning%20Call/01-Introduction%20to%20Doola.mp4", resources: [] },
              { id: "hte2-s7-2", title: "Set Up Business Free Consult Call", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/07-Bonus%207%20-%20Golden%20Parachute%20Tax%20Planning%20Call/02-Set%20Up%20Business%20Free%20Consult%20Call%20.mp4", resources: [] }
            ],
          },
          {
            id: "hte2-s8",
            title: "Bonus 8 - Third Eye Opener Bonus",
            sections: [
              {
                id: "hte2-s8-s1",
                title: "What is Direct Response Marketing",
                lessons: [
                  { id: "hte2-s8-s1-1", title: "Bonus Overview Checklist", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/01-What%20is%20Direct%20Response%20Marketing/01-Bonus%20Overview%20Checklist%20.mp4", resources: [] },
                  { id: "hte2-s8-s1-2", title: "Direct Response vs Branded Marketing", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/01-What%20is%20Direct%20Response%20Marketing/02-Direct%20Response%20vs%20Branded%20Marketing%20.mp4", resources: [] },
                  { id: "hte2-s8-s1-3", title: "Envision Your Customer as a Lazy Sloth On The Couch", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/01-What%20is%20Direct%20Response%20Marketing/03-Envision%20Your%20Customer%20as%20a%20Lazy%20Sloth%20On%20The%20Couch%20.mp4", resources: [] },
                  { id: "hte2-s8-s1-4", title: "Examples of Lead Magnets", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/01-What%20is%20Direct%20Response%20Marketing/04-Examples%20of%20Lead%20Magnets.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s8-s2",
                title: "Direct Response Marketing Basics",
                lessons: [
                  { id: "hte2-s8-s2-1", title: "The Hormozi Offer Equation- Creating Irresistible Offers", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/02-Direct%20Response%20Marketing%20Basics/01-The%20Hormozi%20Offer%20Equation-%20Creating%20Irresistible%20Offers.mp4", resources: [] },
                  { id: "hte2-s8-s2-2", title: "The Importance of Clarity Simplicity", duration: "16m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/02-Direct%20Response%20Marketing%20Basics/02-The%20Importance%20of%20Clarity%20Simplicity.mp4", resources: [] },
                  { id: "hte2-s8-s2-3", title: "Using Strong Clear Call-To-Actions", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/02-Direct%20Response%20Marketing%20Basics/03-Using%20Strong%20Clear%20Call-To-Actions%20.mp4", resources: [] },
                  { id: "hte2-s8-s2-4", title: "Know Your Audience- Targeted Marketing", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/02-Direct%20Response%20Marketing%20Basics/04-%20Know%20Your%20Audience-%20Targeted%20Marketing%20.mp4", resources: [] },
                  { id: "hte2-s8-s2-5", title: "The Importance of Urgency Scarcity", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/02-Direct%20Response%20Marketing%20Basics/05-%20The%20Importance%20of%20Urgency%20Scarcity%20.mp4", resources: [] },
                  { id: "hte2-s8-s2-6", title: "Customer Testimonials Social Proof", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/02-Direct%20Response%20Marketing%20Basics/06-Customer%20Testimonials%20Social%20Proof.mp4", resources: [] },
                  { id: "hte2-s8-s2-7", title: "Effective Follow-Up Sequences", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/02-Direct%20Response%20Marketing%20Basics/07-Effective%20Follow-Up%20Sequences.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s8-s3",
                title: "Implementing Direct Response Into Your HTE Business",
                lessons: [
                  { id: "hte2-s8-s3-1", title: "Easy to Use Menu Navigation and Search", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/03-Implementing%20Direct%20Response%20Into%20Your%20HTE%20Business/01-Easy%20to%20Use%20Menu%20Navigation%20and%20Search%20.mp4", resources: [
                    {"name": "Easy to Use Menu Navigation and Search.pdf", "size": "22 KB"}
                  ] },
                  { id: "hte2-s8-s3-2", title: "Clear Contact Information", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/03-Implementing%20Direct%20Response%20Into%20Your%20HTE%20Business/02-Clear%20Contact%20Information%20.mp4", resources: [
                    {"name": "Clear Contact Information.pdf", "size": "22 KB"}
                  ] },
                  { id: "hte2-s8-s3-3", title: "Using Discounts Bonuses Product Page Offers", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/03-Implementing%20Direct%20Response%20Into%20Your%20HTE%20Business/03-%20Using%20Discounts%20Bonuses%20Product%20Page%20Offers%20.mp4", resources: [] },
                  { id: "hte2-s8-s3-4", title: "Optimizing Pop-Up Offer Welcome Flow", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/03-Implementing%20Direct%20Response%20Into%20Your%20HTE%20Business/04-Optimizing%20Pop-Up%20Offer%20Welcome%20Flow%20.mp4", resources: [] },
                  { id: "hte2-s8-s3-5", title: "Using Scarcity Urgency Strategically On Your Site", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/03-Implementing%20Direct%20Response%20Into%20Your%20HTE%20Business/05-Using%20Scarcity%20Urgency%20Strategically%20On%20Your%20Site%20.mp4", resources: [] },
                  { id: "hte2-s8-s3-6", title: "Driving Sales Using Live Chat", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/03-Implementing%20Direct%20Response%20Into%20Your%20HTE%20Business/06-Driving%20Sales%20Using%20Live%20Chat%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s8-s4",
                title: "How to Profitably Scale Your Business",
                lessons: [
                  { id: "hte2-s8-s4-1", title: "The Optimization Trifecta", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/04-How%20to%20Profitably%20Scale%20Your%20Business/01-The%20Optimization%20Trifecta.mp4", resources: [] },
                  { id: "hte2-s8-s4-2", title: "Methods to Increase Average Order Value", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/04-How%20to%20Profitably%20Scale%20Your%20Business/02-Methods%20to%20Increase%20Average%20Order%20Value%20.mp4", resources: [] },
                  { id: "hte2-s8-s4-3", title: "Methods to Increase Conversion Rate", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/04-How%20to%20Profitably%20Scale%20Your%20Business/03-Methods%20to%20Increase%20Conversion%20Rate%20.mp4", resources: [] },
                  { id: "hte2-s8-s4-4", title: "Methods Tips on Increasing Traffic", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/04-How%20to%20Profitably%20Scale%20Your%20Business/04-%20Methods%20Tips%20on%20Increasing%20Traffic%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s8-s5",
                title: "Beginner Conversion Rate Masterclass",
                lessons: [
                  { id: "hte2-s8-s5-1", title: "Stealing Like an Artist", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/05-Beginner%20Conversion%20Rate%20Masterclass/01-Stealing%20Like%20an%20Artist.mp4", resources: [] },
                  { id: "hte2-s8-s5-2", title: "Top Spy Tools", duration: "18m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/05-Beginner%20Conversion%20Rate%20Masterclass/02-Top%20Spy%20Tools%20.mp4", resources: [] },
                  { id: "hte2-s8-s5-3", title: "The Importance of Social Proof", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/05-Beginner%20Conversion%20Rate%20Masterclass/03-The%20Importance%20of%20Social%20Proof.mp4", resources: [] },
                  { id: "hte2-s8-s5-4", title: "Finding Shopify Developers", duration: "11m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/05-Beginner%20Conversion%20Rate%20Masterclass/04-Finding%20Shopify%20Developers%20.mp4", resources: [] },
                  { id: "hte2-s8-s5-5", title: "Using Page Builder Tools", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/05-Beginner%20Conversion%20Rate%20Masterclass/05-Using%20Page%20Builder%20Tools%20.mp4", resources: [
                    {"name": "Using Page Builder Tools.pdf", "size": "22 KB"}
                  ] },
                  { id: "hte2-s8-s5-6", title: "Finding Blue Oceans", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/05-Beginner%20Conversion%20Rate%20Masterclass/06-%20Finding%20Blue%20Oceans%20.mp4", resources: [] },
                  { id: "hte2-s8-s5-7", title: "Business Reductionism", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/05-Beginner%20Conversion%20Rate%20Masterclass/07-Business%20Reductionism%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s8-s6",
                title: "Bonus Completion",
                lessons: [
                  { id: "hte2-s8-s6-1", title: "Direct Response Sites to Get Ideas Form", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/06-Bonus%20Completion/01-Direct%20Response%20Sites%20to%20Get%20Ideas%20Form.mp4", resources: [
                    {"name": "Direct Response Sites to Get Ideas Form.pdf", "size": "30 KB"}
                  ] },
                  { id: "hte2-s8-s6-2", title: "Recommended Direct Response Books Resources", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/08-Bonus%208%20-%20Third%20Eye%20Opener%20Bonus/06-Bonus%20Completion/02-Recommended%20Direct%20Response%20Books%20Resources%20.mp4", resources: [
                    {"name": "Recommended Direct Response Books Resources.pdf", "size": "49 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte2-s9",
            title: "Bonus 9 - Additional HTE Membership",
            lessons: [
              { id: "hte2-s9-1", title: "How to Add a Business Partner", duration: "1m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/09-Bonus%209%20-%20Additional%20HTE%20Membership/01-How%20to%20Add%20a%20Business%20Partner.mp4", resources: [] }
            ],
          },
          {
            id: "hte2-s10",
            title: "Mystery Bonus",
            lessons: [
              { id: "hte2-s10-1", title: "MYSTERY Bonus", duration: "1m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/10-MYSTERY%20BONUS/01-MYSTERY%20Bonus.mp4", resources: [] }
            ],
          },
          {
            id: "hte2-s11",
            title: "EXTRA BONUS - Live Freely Slack Office Set Up",
            sections: [
              {
                id: "hte2-s11-s1",
                title: "Slack Office Set Up",
                lessons: [
                  { id: "hte2-s11-s1-1", title: "Setting up Slack", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/11-EXTRA%20BONUS%20-%20Live%20Freely%20Slack%20Office%20Set%20Up/01-Slack%20Office%20Set%20Up/01-Setting%20up%20Slack.mp4", resources: [
                    {"name": "Setting up Slack.pdf", "size": "11 KB"}
                  ] },
                  { id: "hte2-s11-s1-2", title: "Optimizing Live Chat", duration: "11m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/11-EXTRA%20BONUS%20-%20Live%20Freely%20Slack%20Office%20Set%20Up/01-Slack%20Office%20Set%20Up/02-Optimizing%20Live%20Chat%20.mp4", resources: [] },
                  { id: "hte2-s11-s1-3", title: "Abandon Checkouts", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/11-EXTRA%20BONUS%20-%20Live%20Freely%20Slack%20Office%20Set%20Up/01-Slack%20Office%20Set%20Up/03-Abandon%20Checkouts%20.mp4", resources: [
                    {"name": "Abandon Checkouts.pdf", "size": "11 KB"}
                  ] }
                ],
              }
            ],
          },
          {
            id: "hte2-s12",
            title: "EXTRA BONUS - 8 Figure Boardroom Insight Vault",
            sections: [
              {
                id: "hte2-s12-s1",
                title: "Guest Speakers",
                lessons: [
                  { id: "hte2-s12-s1-1", title: "John Murphy - 5M Store Owner", duration: "1h 13m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/01-Guest%20Speakers/01-John%20Murphy%20-%205M%20Store%20Owner%20.mp4", resources: [] },
                  { id: "hte2-s12-s1-2", title: "Tryggvi - 50M in SEO Sales", duration: "1h 1m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/01-Guest%20Speakers/02-Tryggvi%20-%2050M%20in%20SEO%20Sales%20.mp4", resources: [] },
                  { id: "hte2-s12-s1-3", title: "Colin Schemelebeck - Google Ads Agency Owner", duration: "48m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/01-Guest%20Speakers/03-Colin%20Schemelebeck%20-%20Google%20Ads%20Agency%20Owner%20.mp4", resources: [] },
                  { id: "hte2-s12-s1-4", title: "Kevin Sha - SEO Agency Owner", duration: "58m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/01-Guest%20Speakers/04-%20Kevin%20Sha%20-%20SEO%20Agency%20Owner%20.mp4", resources: [] },
                  { id: "hte2-s12-s1-5", title: "Christian Bonner - Cold Email", duration: "1h", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/01-Guest%20Speakers/05-Christian%20Bonner%20-%20Cold%20Email%20.mp4", resources: [] },
                  { id: "hte2-s12-s1-6", title: "Conor Sunderland - Email Marketing", duration: "1h 31m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/01-Guest%20Speakers/06-%20Conor%20Sunderland%20-%20Email%20Marketing%20.mp4", resources: [] },
                  { id: "hte2-s12-s1-7", title: "David Hunter - Cold Calling", duration: "1h 28m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/01-Guest%20Speakers/07-David%20Hunter%20-%20Cold%20Calling%20.mp4", resources: [] }
                ],
              },
              {
                id: "hte2-s12-s2",
                title: "SEO Mastery With Tryggvi",
                lessons: [
                  { id: "hte2-s12-s2-1", title: "Content Optimization using Neuronwriter", duration: "35m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/02-SEO%20Mastery%20With%20Tryggvi/02-Content%20Optimization%20using%20Neuronwriter.mp4", resources: [] },
                  { id: "hte2-s12-s2-2", title: "Google EEAT Authorship Content quality", duration: "55m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/02-SEO%20Mastery%20With%20Tryggvi/03-Google%20EEAT%20Authorship%20Content%20quality%20.mp4", resources: [] },
                  { id: "hte2-s12-s2-3", title: "Backlinks - Guest Posting", duration: "1h 4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/02-SEO%20Mastery%20With%20Tryggvi/04-%20Backlinks%20-%20Guest%20Posting%20.mp4", resources: [] },
                  { id: "hte2-s12-s2-4", title: "Link Building - PremiumHomeSourceBacklinks", duration: "39m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/02-SEO%20Mastery%20With%20Tryggvi/05-%20Link%20Building%20-%20PremiumHomeSourceBacklinks%20.mp4", resources: [] },
                  { id: "hte2-s12-s2-5", title: "New Niche Site Launch - Keyword Research", duration: "57m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/02-SEO%20Mastery%20With%20Tryggvi/06-New%20Niche%20Site%20Launch%20-%20Keyword%20Research%20.mp4", resources: [] },
                  { id: "hte2-s12-s2-6", title: "Niche Site Launch - Keyword Clustering", duration: "40m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/02-SEO%20Mastery%20With%20Tryggvi/07-%20Niche%20Site%20Launch%20-%20Keyword%20Clustering%20.mp4", resources: [] },
                  { id: "hte2-s12-s2-7", title: "Niche Site Launch - Menu Topics", duration: "36m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/02-SEO%20Mastery%20With%20Tryggvi/08-%20Niche%20Site%20Launch%20-%20Menu%20Topics%20.mp4", resources: [
                    {"name": "Niche Site Launch - Menu Topics.pdf", "size": "23 KB"}
                  ] },
                  { id: "hte2-s12-s2-8", title: "Niche Site Talk - Optimized Content AI - Menu Talk", duration: "44m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/02-SEO%20Mastery%20With%20Tryggvi/09-Niche%20Site%20Talk%20-%20Optimized%20Content%20AI%20-%20Menu%20Talk.mp4", resources: [
                    {"name": "Niche Site Launch - Optimize AI Cont..pdf", "size": "19 KB"}
                  ] },
                  { id: "hte2-s12-s2-9", title: "Niche Site Launch - Content Plan", duration: "28m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/02-SEO%20Mastery%20With%20Tryggvi/10-%20Niche%20Site%20Launch%20-%20Content%20Plan%20.mp4", resources: [
                    {"name": "Niche Site Launch - Episode 05 - Content Backlink Plan.mp4", "size": "185.2 MB"}
                  ] }
                ],
              },
              {
                id: "hte2-s12-s4",
                title: "Email Marketing Mastery",
                lessons: [
                  { id: "hte2-s12-s4-1", title: "How to Think About Email SMS Marketing", duration: "50m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/03-Email%20Marketing%20Mastery(1)/01-%20How%20to%20Think%20About%20Email%20SMS%20Marketing%20.mp4", resources: [
                    {"name": "How to Think About Email SMS Marketing.pdf", "size": "12 KB"}
                  ] },
                  { id: "hte2-s12-s4-2", title: "Popups Masterclass", duration: "55m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/03-Email%20Marketing%20Mastery(1)/02-Popups%20Masterclass%20.mp4", resources: [] },
                  { id: "hte2-s12-s4-3", title: "Welcome Series Masterclass", duration: "53m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/03-Email%20Marketing%20Mastery(1)/03-Welcome%20Series%20Masterclass%20.mp4", resources: [] },
                  { id: "hte2-s12-s4-4", title: "Abandoned Checkout Mastery", duration: "43m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/03-Email%20Marketing%20Mastery(1)/04-Abandoned%20Checkout%20Mastery%20.mp4", resources: [] },
                  { id: "hte2-s12-s4-5", title: "Email Copywriting Free Guides", duration: "35m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/03-Email%20Marketing%20Mastery(1)/06-%20Email%20Copywriting%20Free%20Guides%20.mp4", resources: [
                    {"name": "Campaign Ideation.mp4", "size": "67.5 MB"}
                  ] },
                  { id: "hte2-s12-s4-6", title: "Step By Step Guide to Setup Email Marketing", duration: "", src: "", resources: [] }
                ],
              },
              {
                id: "hte2-s12-s5",
                title: "Hiring Team Building Mastery",
                lessons: [
                  { id: "hte2-s12-s5-1", title: "Call 1- Building training materials QA", duration: "26m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/04-Hiring%20Team%20Building%20Mastery/01-Call%201-%20Building%20training%20materials%20QA.mp4", resources: [] },
                  { id: "hte2-s12-s5-2", title: "Call 2- General QA", duration: "13m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/04-Hiring%20Team%20Building%20Mastery/02-Call%202-%20General%20QA%20.mp4", resources: [] },
                  { id: "hte2-s12-s5-3", title: "Call 3- Building SOPs in 5 minutes with AI", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/12-EXTRA%20BONUS%20-%208%20Figure%20Boardroom%20Insight%20Vault/04-Hiring%20Team%20Building%20Mastery/03-Call%203-%20Building%20SOPs%20in%205%20minutes%20with%20AI.mp4", resources: [] }
                ],
              }
            ],
          },
          {
            id: "hte2-s13",
            title: "EXTRA BONUS - Site Visitor Maximization Toolkit",
            lessons: [
              { id: "hte2-s13-1", title: "Site Value Maximization Toolkit", duration: "20m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/13-EXTRA%20BONUS%20-%20Site%20Visitor%20Maximization%20Toolkit/01-Site%20Value%20Maximization%20Toolkit.mp4", resources: [] }
            ],
          },
          {
            id: "hte2-s14",
            title: "EXTRA BONUS - Profit Calculator",
            lessons: [
              { id: "hte2-s14-1", title: "The Profit First Method", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/14-EXTRA%20BONUS%20-%20Profit%20Calculator/01-Tracking%20and%20Maximizing%20Profit/01-The%20Profit%20First%20Method.mp4", resources: [] },
              { id: "hte2-s14-2", title: "Tracking Expenses and Cashflow", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/02-Bonuses/14-EXTRA%20BONUS%20-%20Profit%20Calculator/01-Tracking%20and%20Maximizing%20Profit/02-Tracking%20Expenses%20and%20Cashflow.mp4", resources: [
                {"name": "Profit Tracking Template.xlsx", "size": "102 KB"}
              ] }
            ],
          }
        ],
      },
      {
        id: "hte3",
        title: "Advanced Masterclasses",
        sections: [
          {
            id: "hte3-s1",
            title: "SEO Masterclass",
            sections: [
              {
                id: "hte3-s1-s1",
                title: "Introduction to SEO",
                lessons: [
                  { id: "hte3-s1-s1-1", title: "What - How - Why - SEO", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/01-Introduction%20to%20SEO/01-What%20-%20How%20-%20Why%20-%20SEO%20.mp4", resources: [
                    {"name": "What - How - Why - SEO.pdf", "size": "13 KB"}
                  ] }
                ],
              },
              {
                id: "hte3-s1-s2",
                title: "Step 1- Keyword Research Mapping",
                lessons: [
                  { id: "hte3-s1-s2-1", title: "Target ONE Product Type", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/02-Step%201-%20Keyword%20Research%20Mapping/01-Target%20ONE%20Product%20Type.mp4", resources: [] },
                  { id: "hte3-s1-s2-2", title: "Find All Keywords in ONE Niche", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/02-Step%201-%20Keyword%20Research%20Mapping/02-%20Find%20All%20Keywords%20in%20ONE%20Niche%20.mp4", resources: [] },
                  { id: "hte3-s1-s2-3", title: "Finding Low Competition Keywords", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/02-Step%201-%20Keyword%20Research%20Mapping/03-Finding%20Low%20Competition%20Keywords%20.mp4", resources: [] },
                  { id: "hte3-s1-s2-4", title: "Keyword Mapping- Creating Your Site Structure", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/02-Step%201-%20Keyword%20Research%20Mapping/04-Keyword%20Mapping-%20Creating%20Your%20Site%20Structure%20.mp4", resources: [] },
                  { id: "hte3-s1-s2-5", title: "How To Interpret Hub-Spoke Model Insights", duration: "11m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/02-Step%201-%20Keyword%20Research%20Mapping/05-%20How%20To%20Interpret%20Hub-Spoke%20Model%20Insights%20.mp4", resources: [
                    {"name": "How To Interpret Hub Spoke Model Insights - Keyword Insights.mp4", "size": "41.7 MB"}
                  ] },
                  { id: "hte3-s1-s2-6", title: "How To Interpret Cluster Insight - Keyword Insights", duration: "12m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/02-Step%201-%20Keyword%20Research%20Mapping/06-How%20To%20Interpret%20Cluster%20Insight%20-%20Keyword%20Insights.mp4", resources: [
                    {"name": "How To Interpret Cluster Insight.mp4", "size": "46.4 MB"}
                  ] },
                  { id: "hte3-s1-s2-7", title: "Designing Website Structure", duration: "24m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/02-Step%201-%20Keyword%20Research%20Mapping/07-Designing%20Website%20Structure%20.mp4", resources: [
                    {"name": "Designing Website Structure.pdf", "size": "14 KB"},
                    {"name": "Fire Pit Table.png", "size": "15.2 MB"}
                  ] },
                  { id: "hte3-s1-s2-8", title: "Step 1 - Keyword Research Action Tasks", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/02-Step%201-%20Keyword%20Research%20Mapping/08-%20Step%201%20-%20Keyword%20Research%20Action%20Tasks%20.mp4", resources: [
                    {"name": "SEO Action Task Checklist.xlsx", "size": "26 KB"}
                  ] }
                ],
              },
              {
                id: "hte3-s1-s3",
                title: "Step 2 - On Page SEO",
                lessons: [
                  { id: "hte3-s1-s3-1", title: "Optimizing a Page for SEO", duration: "16m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/03-Step%202%20-%20On%20Page%20SEO/01-Optimizing%20a%20Page%20for%20SEO.mp4", resources: [
                    {"name": "Optimizing a Page for SEO.pdf", "size": "11 KB"}
                  ] },
                  { id: "hte3-s1-s3-2", title: "Optimizing Collection Pages", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/03-Step%202%20-%20On%20Page%20SEO/02-%20Optimizing%20Collection%20Pages%20.mp4", resources: [
                    {"name": "Optimizing Collection Pages.pdf", "size": "12 KB"}
                  ] },
                  { id: "hte3-s1-s3-3", title: "How to Create a Hub Collection", duration: "15m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/03-Step%202%20-%20On%20Page%20SEO/03-How%20to%20Create%20a%20Hub%20Collection%20.mp4", resources: [] },
                  { id: "hte3-s1-s3-4", title: "How to Create a Spoke Collection", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/03-Step%202%20-%20On%20Page%20SEO/04-%20How%20to%20Create%20a%20Spoke%20Collection%20.mp4", resources: [] },
                  { id: "hte3-s1-s3-5", title: "Optimizing Blog Posts", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/03-Step%202%20-%20On%20Page%20SEO/05-Optimizing%20Blog%20Posts%20.mp4", resources: [
                    {"name": "Optimizing Blog Posts.pdf", "size": "10 KB"}
                  ] },
                  { id: "hte3-s1-s3-6", title: "How to Create a Hub Blog", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/03-Step%202%20-%20On%20Page%20SEO/06-How%20to%20Create%20a%20Hub%20Blog%20.mp4", resources: [
                    {"name": "Step 2 - On Page SEO.pdf", "size": "11 KB"}
                  ] },
                  { id: "hte3-s1-s3-7", title: "How to Create a Spoke Blog", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/03-Step%202%20-%20On%20Page%20SEO/07-How%20to%20Create%20a%20Spoke%20Blog%20.mp4", resources: [] },
                  { id: "hte3-s1-s3-8", title: "Coding Technical Guides", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/03-Step%202%20-%20On%20Page%20SEO/08-Coding%20Technical%20Guides.mp4", resources: [
                    {"name": "Coding Technical Guides.pdf", "size": "11 KB"}
                  ] },
                  { id: "hte3-s1-s3-9", title: "Internal Linking Anchor Text", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/01-SEO%20Masterclass/03-Step%202%20-%20On%20Page%20SEO/09-Internal%20Linking%20Anchor%20Text.mp4", resources: [] }
                ],
              }
            ],
          },
          {
            id: "hte3-s2",
            title: "Advanced Advertising Masterclass",
            sections: [
              {
                id: "hte3-s2-s1",
                title: "Section 1- Setting up Other Ad Accounts",
                lessons: [
                  { id: "hte3-s2-s1-1", title: "Setting up Bing Merchant Centre", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/01-Section%201-%20Setting%20up%20Other%20Ad%20Accounts/01-Setting%20up%20Bing%20Merchant%20Centre.mp4", resources: [
                    {"name": "Setting up Bing Merchant Centre.pdf", "size": "15 KB"}
                  ] },
                  { id: "hte3-s2-s1-2", title: "Setting up Bing Ads", duration: "1m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/01-Section%201-%20Setting%20up%20Other%20Ad%20Accounts/02-Setting%20up%20Bing%20Ads.mp4", resources: [
                    {"name": "Setting up Bing Ads.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s1-3", title: "Setting up Facebook BM Ad Account", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/01-Section%201-%20Setting%20up%20Other%20Ad%20Accounts/03-Setting%20up%20Facebook%20BM%20Ad%20Account.mp4", resources: [
                    {"name": "Setting up Facebook BM Ad Account.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s1-4", title: "Setting up Facebook Commerce Manager", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/01-Section%201-%20Setting%20up%20Other%20Ad%20Accounts/04-Setting%20up%20Facebook%20Commerce%20Manager%20.mp4", resources: [
                    {"name": "Setting up Facebook Commerce Manager.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s1-5", title: "Setting up Pinterest Ads Account", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/01-Section%201-%20Setting%20up%20Other%20Ad%20Accounts/05-%20Setting%20up%20Pinterest%20Ads%20Account%20.mp4", resources: [
                    {"name": "Setting up Pinterest Ads Account.pdf", "size": "14 KB"}
                  ] }
                ],
              },
              {
                id: "hte3-s2-s2",
                title: "Section 2- Preliminary Information",
                lessons: [
                  { id: "hte3-s2-s2-1", title: "Proper Ads Mindset", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/02-Section%202-%20Preliminary%20Information/01-Proper%20Ads%20Mindset.mp4", resources: [
                    {"name": "Proper Ads Mindset.pdf", "size": "13 KB"}
                  ] },
                  { id: "hte3-s2-s2-2", title: "Setting Proper Expectations", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/02-Section%202-%20Preliminary%20Information/02-Setting%20Proper%20Expectations%20.mp4", resources: [
                    {"name": "Setting Proper Expectations.pdf", "size": "13 KB"}
                  ] },
                  { id: "hte3-s2-s2-3", title: "Preliminary Set Up Information", duration: "17m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/02-Section%202-%20Preliminary%20Information/03-Preliminary%20Set%20Up%20Information%20.mp4", resources: [
                    {"name": "Keyword Lists.xlsx", "size": "9 KB"},
                    {"name": "Preliminary Set Up Information.pdf", "size": "28 KB"}
                  ] },
                  { id: "hte3-s2-s2-4", title: "How to Divide Your Budget", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/02-Section%202-%20Preliminary%20Information/04-%20How%20to%20Divide%20Your%20Budget%20.mp4", resources: [
                    {"name": "How to Divide Your Budget.pdf", "size": "13 KB"}
                  ] },
                  { id: "hte3-s2-s2-5", title: "General Tip on AutoRecommendations r", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/02-Section%202-%20Preliminary%20Information/05-General%20Tip%20on%20AutoRecommendations%20r.mp4", resources: [
                    {"name": "General Tip on AutoRecommendations.pdf", "size": "14 KB"}
                  ] }
                ],
              },
              {
                id: "hte3-s2-s3",
                title: "Section 3- Launching Other Ad Strategies",
                lessons: [
                  { id: "hte3-s2-s3-1", title: "Setting up Google Shopping Ads", duration: "23m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/03-Section%203-%20Launching%20Other%20Ad%20Strategies/01-Setting%20up%20Google%20Shopping%20Ads.mp4", resources: [
                    {"name": "Setting up Google Shopping Ads.pdf", "size": "18 KB"}
                  ] },
                  { id: "hte3-s2-s3-2", title: "Google Keyword Planner", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/03-Section%203-%20Launching%20Other%20Ad%20Strategies/02-Google%20Keyword%20Planner.mp4", resources: [
                    {"name": "Google Keyword Planner.pdf", "size": "13 KB"}
                  ] },
                  { id: "hte3-s2-s3-3", title: "Common Shopping Mistakes to Avoid", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/03-Section%203-%20Launching%20Other%20Ad%20Strategies/03-Common%20Shopping%20Mistakes%20to%20Avoid%20.mp4", resources: [
                    {"name": "Common Shopping Mistakes to Avoid.pdf", "size": "13 KB"}
                  ] },
                  { id: "hte3-s2-s3-4", title: "Setting up Google Search Text Ads", duration: "11m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/03-Section%203-%20Launching%20Other%20Ad%20Strategies/04-Setting%20up%20Google%20Search%20Text%20Ads%20.mp4", resources: [
                    {"name": "Setting up Google Search Text Ads.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s3-5", title: "Setting up Bing Shopping Search Text Ads", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/03-Section%203-%20Launching%20Other%20Ad%20Strategies/05-Setting%20up%20Bing%20Shopping%20Search%20Text%20Ads%20.mp4", resources: [
                    {"name": "Setting up Bing Shopping Search Text Ads.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s3-6", title: "Optimizing Your Ads", duration: "13m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/03-Section%203-%20Launching%20Other%20Ad%20Strategies/06-Optimizing%20Your%20Ads%20.mp4", resources: [
                    {"name": "Optimizing Your Ads.pdf", "size": "13 KB"}
                  ] },
                  { id: "hte3-s2-s3-7", title: "Common Advertising Questions", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/03-Section%203-%20Launching%20Other%20Ad%20Strategies/07-Common%20Advertising%20Questions.mp4", resources: [
                    {"name": "Common Advertising Questions.pdf", "size": "17 KB"},
                    {"name": "ROAS Calculator.xlsx", "size": "106 KB"}
                  ] },
                  { id: "hte3-s2-s3-8", title: "Creating a KPI Dashboard", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/03-Section%203-%20Launching%20Other%20Ad%20Strategies/08-Creating%20a%20KPI%20Dashboard%20.mp4", resources: [
                    {"name": "Creating a KPI Dashboard.pdf", "size": "13 KB"}
                  ] },
                  { id: "hte3-s2-s3-9", title: "Setting up Promotions", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/03-Section%203-%20Launching%20Other%20Ad%20Strategies/09-Setting%20up%20Promotions.mp4", resources: [
                    {"name": "Setting up Promotions.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s3-10", title: "Optional Promotions Tip", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/03-Section%203-%20Launching%20Other%20Ad%20Strategies/10-Optional%20Promotions%20Tip%20.mp4", resources: [
                    {"name": "Optional Promotions Tip.pdf", "size": "14 KB"}
                  ] }
                ],
              },
              {
                id: "hte3-s2-s4",
                title: "Section 4- Retargeting Ads",
                lessons: [
                  { id: "hte3-s2-s4-1", title: "Setting up Facebook Retargeting Ads", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/04-Section%204-%20Retargeting%20Ads/01-Setting%20up%20Facebook%20Retargeting%20Ads.mp4", resources: [
                    {"name": "Setting up Facebook Retargeting Ads.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s4-2", title: "Setting up Google-Bing Retargeting Ads", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/04-Section%204-%20Retargeting%20Ads/02-Setting%20up%20Google-Bing%20Retargeting%20Ads%20.mp4", resources: [
                    {"name": "Setting up Google-Bing Retargeting Ads.pdf", "size": "14 KB"}
                  ] }
                ],
              },
              {
                id: "hte3-s2-s5",
                title: "Section 5- Making Sales Tracking",
                lessons: [
                  { id: "hte3-s2-s5-1", title: "Setting up Ad Tracking in BeProfit-Triple Whale", duration: "6m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/06-Section%205-%20Making%20Sales%20Tracking/01-Setting%20up%20Ad%20Tracking%20in%20BeProfit-Triple%20Whale.mp4", resources: [
                    {"name": "Setting up Ad Tracking in BeProfit-Triple Whale.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s5-2", title: "Being Optimized vs Being Overextended", duration: "4m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/06-Section%205-%20Making%20Sales%20Tracking/02-%20Being%20Optimized%20vs%20Being%20Overextended.mp4", resources: [
                    {"name": "Being Optimized vs Being Overextended.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s5-3", title: "How to Read KPI Dashboard", duration: "", src: "", resources: [] },
                  { id: "hte3-s2-s5-4", title: "Monitoring Product Page-Campaign Specific Conversion Rate on Google-Shopify", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/06-Section%205-%20Making%20Sales%20Tracking/04-Monitoring%20Product%20Page-Campaign%20Specific%20Conversion%20Rate%20on%20Google-Shopify.mp4", resources: [
                    {"name": "Monitoring Product Page-Campaign Specific Conversion Rate on Google-Shopify.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s5-5", title: "Sculpting Negative Keywords", duration: "", src: "", resources: [] },
                  { id: "hte3-s2-s5-6", title: "Tips for Increasing CTR Lowering CPC", duration: "", src: "", resources: [] }
                ],
              },
              {
                id: "hte3-s2-s6",
                title: "Section 6- Scaling Your Ads",
                lessons: [
                  { id: "hte3-s2-s6-1", title: "Do Not Scale Before Doing This", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/01-Do%20Not%20Scale%20Before%20Doing%20This%20.mp4", resources: [
                    {"name": "Do Not Scale Before Doing This.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s6-2", title: "Why Your Ads Dont Work And How to Make Them Work", duration: "12m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/02-Why%20Your%20Ads%20Dont%20Work%20And%20How%20to%20Make%20Them%20Work%20.mp4", resources: [
                    {"name": "Why Your Ads Dont Work And How to Make Them Work.pdf", "size": "14 KB"}
                  ] },
                  { id: "hte3-s2-s6-3", title: "Brand by Brand ROAS POAS", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/03-Brand%20by%20Brand%20ROAS%20POAS%20.mp4", resources: [] },
                  { id: "hte3-s2-s6-4", title: "Scaling Google-Bing Shopping Ads", duration: "14m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/04-Scaling%20Google-Bing%20Shopping%20Ads%20.mp4", resources: [] },
                  { id: "hte3-s2-s6-5", title: "Scaling Google-Bing Search Text Ads Part 1", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/05-Scaling%20Google-Bing%20Search%20Text%20Ads%20Part%201%20.mp4", resources: [] },
                  { id: "hte3-s2-s6-6", title: "Scaling Google-Bing Search Text Ads Part 2", duration: "8m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/06-Scaling%20Google-Bing%20Search%20Text%20Ads%20Part%202.mp4", resources: [] },
                  { id: "hte3-s2-s6-7", title: "Enhanced CPC How to Use it", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/07-Enhanced%20CPC%20How%20to%20Use%20it%20.mp4", resources: [] },
                  { id: "hte3-s2-s6-8", title: "Product Specific Ad Campaigns", duration: "14m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/08-%20Product%20Specific%20Ad%20Campaigns%20.mp4", resources: [] },
                  { id: "hte3-s2-s6-9", title: "Using Max Clicks to Automate Search-Shopping Campaigns", duration: "5m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/09-Using%20Max%20Clicks%20to%20Automate%20Search-Shopping%20Campaigns%20.mp4", resources: [] },
                  { id: "hte3-s2-s6-10", title: "Product Specific Retargeting Email Flows", duration: "10m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/10-%20Product%20Specific%20Retargeting%20Email%20Flows%20.mp4", resources: [] },
                  { id: "hte3-s2-s6-11", title: "Your Own Branded Campaign", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/11-%20Your%20Own%20Branded%20Campaign%20.mp4", resources: [] },
                  { id: "hte3-s2-s6-12", title: "Utilizing Display Remarketing Ads", duration: "9m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/02-Advanced%20Advertising%20Masterclass/07-Section%206-%20Scaling%20Your%20Ads/12-%20Utilizing%20Display%20Remarketing%20Ads%20.mp4", resources: [] }
                ],
              }
            ],
          },
          {
            id: "hte3-s3",
            title: "Optimizing Your Sales Process Abandoned Checkouts",
            lessons: [
              { id: "hte3-s3-1", title: "How Abandoned Checkouts Can Make or Break Your Business", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/03-Optimizing%20Your%20Sales%20Process%20Abandoned%20Checkouts/01-Sales%20Process/01-How%20Abandoned%20Checkouts%20Can%20Make%20or%20Break%20Your%20Business.mp4", resources: [
                {"name": "How Abandoned Checkouts Can Make or Break Your Business.pdf", "size": "14 KB"}
              ] },
              { id: "hte3-s3-2", title: "Optimizing Your Email SMS Abandoned Checkout Flow", duration: "11m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/03-Optimizing%20Your%20Sales%20Process%20Abandoned%20Checkouts/01-Sales%20Process/02-%20Optimizing%20Your%20Email%20SMS%20Abandoned%20Checkout%20Flow%20.mp4", resources: [
                {"name": "Optimizing Your Email SMS Abandoned Checkout Flow.pdf", "size": "19 KB"},
                {"name": "Sample Abandon Cart Emails.docx", "size": "1.5 MB"}
              ] },
              { id: "hte3-s3-3", title: "Ensuring AC Slack Automations Are Set Up Correctly", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/03-Optimizing%20Your%20Sales%20Process%20Abandoned%20Checkouts/01-Sales%20Process/03-%20Ensuring%20AC%20Slack%20Automations%20Are%20Set%20Up%20Correctly%20.mp4", resources: [
                {"name": "Ensuring AC Slack Automations Are Set Up Correctly.pdf", "size": "15 KB"}
              ] },
              { id: "hte3-s3-4", title: "Setting up a CRM Process For Lead Follow Up", duration: "7m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/03-Optimizing%20Your%20Sales%20Process%20Abandoned%20Checkouts/01-Sales%20Process/04-%20Setting%20up%20a%20CRM%20Process%20For%20Lead%20Follow%20Up%20.mp4", resources: [
                {"name": "Setting up a CRM Process For Lead Follow Up.pdf", "size": "14 KB"}
              ] },
              { id: "hte3-s3-5", title: "Reaching Out To Customers ASAP Post AC", duration: "1m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/03-Optimizing%20Your%20Sales%20Process%20Abandoned%20Checkouts/01-Sales%20Process/05-Reaching%20Out%20To%20Customers%20ASAP%20Post%20AC%20.mp4", resources: [
                {"name": "Reaching Out To Customers ASAP Post AC.pdf", "size": "15 KB"}
              ] },
              { id: "hte3-s3-6", title: "Sample Abandon Checkout Phone Scripts to Use", duration: "2m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/03-Optimizing%20Your%20Sales%20Process%20Abandoned%20Checkouts/01-Sales%20Process/06-%20Sample%20Abandon%20Checkout%20Phone%20Scripts%20to%20Use%20.mp4", resources: [
                {"name": "Sample Abandon Checkout Phone Scripts to Use.pdf", "size": "14 KB"}
              ] },
              { id: "hte3-s3-7", title: "Managing Your CRM Over Time", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/03-Optimizing%20Your%20Sales%20Process%20Abandoned%20Checkouts/01-Sales%20Process/07-Managing%20Your%20CRM%20Over%20Time%20.mp4", resources: [
                {"name": "Managing Your CRM Over Time.pdf", "size": "14 KB"}
              ] },
              { id: "hte3-s3-8", title: "Other Situations to Utilize Your CRM", duration: "3m", src: "/HighTicket%20E-Commerce%20Course/03-Advanced%20Masterclasses/03-Optimizing%20Your%20Sales%20Process%20Abandoned%20Checkouts/01-Sales%20Process/08-Other%20Situations%20to%20Utilize%20Your%20CRM%20.mp4", resources: [
                {"name": "Other Situations to Utilize Your CRM.pdf", "size": "14 KB"}
              ] }
            ],
          }
        ],
      }
    ],
  },
{
    id: "ab-inner-circle",
    title: "AB Inner Circle - Google Ads Dropshipping",
    tagline: "Coming soon — course content is being added.",
    cover: "./abinner.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$249",
    chapters: [],
  },
{
    id: "ecommerce-mrr-mastery",
    title: "E-Commerce MRR Mastery By Brandon van Mierlo",
    tagline: "Coming soon — course content is being added.",
    cover: "./brandon.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$6,000",
    chapters: [],
  },
{
    id: "affiliate-academy",
    title: "Affiliate Academy 2.0 by Josh Adkins",
    tagline: "Coming soon — course content is being added.",
    cover: "./adkins.jpg",
    accent: "#22C55E",
    category: "affiliate",
    price: "$197",
    chapters: [],
  },
{
    id: "evolve-ecommerce",
    title: "Evolve E-Commerce by Spencer Pawliw",
    tagline: "Coming soon — course content is being added.",
    cover: "./evolve.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$1,700",
    chapters: [],
  },
];

/* ---- helpers (used across pages) ---- */
function getCourse(id) {
  return COURSES.find(function (c) { return c.id === id; });
}
function chapterLessons(ch) {
  var out = ch.lessons ? ch.lessons.slice() : [];
  if (ch.sections) {
    ch.sections.forEach(function (s) { out = out.concat(chapterLessons(s)); });
  }
  return out;
}
function courseStats(course) {
  var chapters = course.chapters.length;
  var lessons = 0;
  var totalMin = 0;
  course.chapters.forEach(function (ch) {
    chapterLessons(ch).forEach(function (ls) { lessons++; totalMin += parseDuration(ls.duration); });
  });
  return { chapters: chapters, lessons: lessons, duration: formatDuration(totalMin) };
}
function parseDuration(str) {
  // "1h 12m" | "52m" | "44m" -> minutes
  var h = /(\d+)\s*h/.exec(str);
  var m = /(\d+)\s*m/.exec(str);
  return (h ? +h[1] * 60 : 0) + (m ? +m[1] : 0);
}
function formatDuration(min) {
  var h = Math.floor(min / 60);
  var m = min % 60;
  if (h && m) return h + "h " + m + "m";
  if (h) return h + "h";
  return m + "m";
}
function collectLessons(ch, node, out) {
  if (node.lessons) {
    node.lessons.forEach(function (ls) { out.push({ chapter: ch, section: node === ch ? null : node, lesson: ls }); });
  }
  if (node.sections) {
    node.sections.forEach(function (s) { collectLessons(ch, s, out); });
  }
}
function allLessons(course) {
  var out = [];
  course.chapters.forEach(function (ch) { collectLessons(ch, ch, out); });
  return out;
}
