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
    id: "evolve-ecommerce",
    title: "Evolve E-Commerce by Spencer Pawliw",
    tagline: "Coming soon — course content is being added.",
    cover: "./evolve.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$1,700",
    vipOnly: true,
    chapters: [
      {
        id: "ev1",
        title: "Evolve Main Course",
        lessons: [
          { id: "ev1-1", title: "Read First", duration: "", src: "", resources: [] }
        ],
        sections: [
          {
            id: "ev1-s1",
            title: "Welcome To Evolve",
            lessons: [
              { id: "ev1-s1-1", title: "Start Here Welcome To Evolve", duration: "18m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/1. Welcome To Evolve/1.Start Here Welcome To Evolve - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s1-2", title: "Overview Of Program 2.0 Nov 2025", duration: "25m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/1. Welcome To Evolve/2.Overview Of Program 2.0 Nov 2025 - Evolve Start Here Evolve.mp4", resources: [
                {"name": "Overview.txt", "size": "0 KB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/1. Welcome To Evolve/2.Overview.txt"}
              ] },
              { id: "ev1-s1-3", title: "90 Seconds Tip to Hit 1mMonth", duration: "1m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/1. Welcome To Evolve/3.90 Seconds Tip to Hit 1mMonth - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s1-4", title: "️60 Winning Ads Document", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/1. Welcome To Evolve/4.️60 Winning Ads Document - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s1-5", title: "What To Focus On To Scale To 10Mmth By Rev", duration: "22m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/1. Welcome To Evolve/6.What To Focus On To Scale To 10Mmth By Rev - Evolve Start Here E.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s2",
            title: "Why Do Ads Work (Psychology)",
            lessons: [
              { id: "ev1-s2-1", title: "💥 Action Item Practicing The Core 3", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/2. Why Do Ads Work (Psychology)/6. 💥 Action Item Practicing The Core 3.mp4", resources: [] },
              { id: "ev1-s2-2", title: "1 Overview", duration: "2m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/2. Why Do Ads Work (Psychology)/1 Overview - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s2-3", title: "2 Market Desires", duration: "17m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/2. Why Do Ads Work (Psychology)/2 Market Desires - Evolve Evolve.mp4", resources: [] },
              { id: "ev1-s2-4", title: "3 Market Awareness", duration: "18m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/2. Why Do Ads Work (Psychology)/3 Market Awareness - Evolve Evolve.mp4", resources: [] },
              { id: "ev1-s2-5", title: "4 EVOLVE - Understanding Unaware Using AI For Your Awareness Level", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/2. Why Do Ads Work (Psychology)/4  EVOLVE - Understanding Unaware Using AI For Your Awareness Level .mp4", resources: [] },
              { id: "ev1-s2-6", title: "5 Market Sophistication", duration: "19m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/2. Why Do Ads Work (Psychology)/5 Market Sophistication.mp4", resources: [] },
              { id: "ev1-s2-7", title: "6 Action Item Practicing The Core 3", duration: "", src: "", resources: [] },
              { id: "ev1-s2-8", title: "7 Rule Of One For Evolve", duration: "34m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/2. Why Do Ads Work (Psychology)/7  Rule Of One For Evolve.mp4", resources: [] },
              { id: "ev1-s2-9", title: "8 Evolve - What Is Identification Marketing", duration: "20m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/2. Why Do Ads Work (Psychology)/8 Evolve - What Is Identification Marketing.mp4", resources: [] },
              { id: "ev1-s2-10", title: "9 Evolve - What Is Belief In Marketing", duration: "18m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/2. Why Do Ads Work (Psychology)/9 Evolve - What Is Belief In Marketing.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s3",
            title: "What Ads To Make (Research)",
            lessons: [
              { id: "ev1-s3-1", title: "Overview & Self Onboarding", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/1.Overview & Self Onboarding.mp4", resources: [] },
              { id: "ev1-s3-2", title: "1 Getting Ready To Do Research - Part 1", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/3.1 Getting Ready To Do Research - Part 1.mp4", resources: [
                {"name": "2 Getting Ready To Do Research - Part 2.mp4", "size": "27.6 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/3.2 Getting Ready To Do Research - Part 2.mp4"}
              ] },
              { id: "ev1-s3-3", title: "1 Understanding Your Product - Part 1", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/5.1 Understanding Your Product - Part 1.mp4", resources: [
                {"name": "2 Understanding The Product - Part 2.mp4", "size": "8.0 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/5.2 Understanding The Product - Part 2.mp4"}
              ] },
              { id: "ev1-s3-4", title: "1 Google Research - Part 1", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/6.1 Google Research - Part 1.mp4", resources: [
                {"name": "2 Google Research - Part 2.mp4", "size": "28.2 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/6.2 Google Research - Part 2.mp4"}
              ] },
              { id: "ev1-s3-5", title: "1 Amazon Research - Part 1", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/7.1 Amazon Research - Part 1.mp4", resources: [
                {"name": "2 Amazon Research - Part 2.mp4", "size": "30.3 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/7.2 Amazon Research - Part 2.mp4"}
              ] },
              { id: "ev1-s3-6", title: "1 Reddit Research", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/9.1 Reddit Research.mp4", resources: [] },
              { id: "ev1-s3-7", title: "1 YouTube Research", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/10.1 YouTube Research.mp4", resources: [] },
              { id: "ev1-s3-8", title: "1 Competitor Research - Part 1", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/11.1 Competitor Research - Part 1.mp4", resources: [
                {"name": "2 Competitor Research - Part 2.mp4", "size": "20.2 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/11.2 Competitor Research - Part 2.mp4"}
              ] },
              { id: "ev1-s3-9", title: "1 Facebook Research - Part 1", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/12.1 Facebook Research - Part 1.mp4", resources: [
                {"name": "2 Facebook Research - Part 2.mp4", "size": "28.2 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/12.2 Facebook Research - Part 2.mp4"}
              ] },
              { id: "ev1-s3-10", title: "1 Creative Research - Part 1 (Atria)", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/13.1 Creative Research - Part 1 (Atria).mp4", resources: [
                {"name": "2 Creative Research - Part 2.mp4", "size": "72.1 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/13.2 Creative Research - Part 2.mp4"}
              ] },
              { id: "ev1-s3-11", title: "1 TikTok Research", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/14.1 TikTok Research.mp4", resources: [] },
              { id: "ev1-s3-12", title: "1 Ad Account Research", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/15.1 Ad Account Research - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s3-13", title: "1 Understanding Other Desires", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/16.1 Understanding Other Desires.mp4", resources: [
                {"name": "2 Understanding Objections.mp4", "size": "12.1 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/16.2 Understanding Objections.mp4"}
              ] },
              { id: "ev1-s3-14", title: "1 Cleaning Up The Research Doc", duration: "2m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/17.1 Cleaning Up The Research Doc.mp4", resources: [] },
              { id: "ev1-s3-15", title: "🆕 Ad ONLY Instagram Research", duration: "2m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/18. 🆕  Ad ONLY Instagram Research - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s3-16", title: "19 Answer The Public - Research", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/19  Answer The Public - Research - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s3-17", title: "20 EVOLVE - Customer Phone Call Research", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/3.  What Ads To Make (Research)/20 EVOLVE - Customer Phone Call Research.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s4",
            title: "1 How To Create Avatars",
            lessons: [
              { id: "ev1-s4-1", title: "1.Understanding Your Product - Part 1", duration: "16m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /1.1.Understanding Your Product - Part 1 - Evolve Evolve.mp4", resources: [
                {"name": "2 Understanding Your Product - Part 2.mp4", "size": "181.5 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /1.2 Understanding Your Product - Part 2 - Evolve Evolve.mp4"},
                {"name": "3 Understanding Your Product - Part 3.mp4", "size": "29.5 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /1.3 Understanding Your Product - Part 3 - Evolve Evolve.mp4"}
              ] },
              { id: "ev1-s4-2", title: "1 Understanding Applying Desire - Part 1", duration: "1h 2m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /2.1 Understanding Applying Desire - Part 1 - Evolve Evolve.mp4", resources: [
                {"name": "2 The Desire Calendar - Part 2.mp4", "size": "127.9 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /2.2 The Desire Calendar - Part 2 - Evolve Evolve.mp4"},
                {"name": "3 How To Find Desires - Part 3.mp4", "size": "330.1 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /2.3 How To Find Desires - Part 3 - Evolve Evolve.mp4"}
              ] },
              { id: "ev1-s4-3", title: "1 Understanding Market Sophistication - Part 1", duration: "38m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /3.1  Understanding Market Sophistication - Part 1 - Evolve Evolve.mp4", resources: [
                {"name": "2 How To Find Apply New Mechanisms - Part 2.mp4", "size": "65.1 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /3.2 How To Find Apply New Mechanisms - Part 2 - Evolve Evolve.mp4"},
                {"name": "3 💥 Action Item:  Find New Mechanisms.3 💥 action item： find new mechanisms - 👣 evolve (start here) · evolve html", "size": "736 KB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /3.3 💥 Action Item： Find New Mechanisms - 👣 Evolve (Start Here) · Evolve html"}
              ] },
              { id: "ev1-s4-4", title: "1 How To Find Apply New Information - Part 3", duration: "21m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /4.1 How To Find Apply New Information - Part 3 - Evolve Evolve.mp4", resources: [] },
              { id: "ev1-s4-5", title: "1 How To Find Apply New Identities - Part 4", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /5.1 How To Find Apply New Identities - Part 4 - Evolve Evolve.mp4", resources: [
                {"name": "2 🆕 The Evolve Avatar Training.mp4", "size": "1055.5 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /5.2  🆕 The Evolve Avatar Training - 👣 Evolve · Evolve.mp4"},
                {"name": "3 🆕 Evolve Avatar Training AI Podcast Version.mp4", "size": "25.4 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /5.3  🆕 Evolve Avatar Training AI Podcast Version - 👣 Evolve Start Here · Evolve.mp4"}
              ] },
              { id: "ev1-s4-6", title: "1 🆕 How To Build Core Avatars", duration: "47m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /6.1 🆕 How To Build Core Avatars - 👣 Evolve · Evolve.mp4", resources: [
                {"name": "3 🆕 How To Build Sub Avatars.mp4", "size": "224.3 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.1 How To Create Avatars /6.3 🆕 How To Build Sub Avatars - 👣 Evolve · Evolve.mp4"}
              ] }
            ],
          },
          {
            id: "ev1-s5",
            title: "2 Watch If Overwhelmed",
            lessons: [
              { id: "ev1-s5-1", title: "Im Overwhelmed Stuck - Wat Do", duration: "12m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/4.2 Watch If Overwhelmed/Im Overwhelmed Stuck - Wat Do - Evolve Start Here Evolve.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s6",
            title: "How To Plan Ads (Preparation)",
            lessons: [
              { id: "ev1-s6-1", title: "Understanding Ad Definitions", duration: "16m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/5.How To Plan Ads (Preparation)/1.Understanding Ad Definitions - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s6-2", title: "How To Come Up With Ad Angles", duration: "35m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/5.How To Plan Ads (Preparation)/2.How To Come Up With Ad Angles - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s6-3", title: "The 3 Testing Methods - Part 1", duration: "21m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/5.How To Plan Ads (Preparation)/4.The 3 Testing Methods - Part 1 - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s6-4", title: "The 3 Testing Methods - Part 2", duration: "23m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/5.How To Plan Ads (Preparation)/5.The 3 Testing Methods - Part 2 - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s6-5", title: "Putting All The Planning Together Examples", duration: "32m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/5.How To Plan Ads (Preparation)/6.Putting All The Planning Together Examples - Evolve Start Here E.mp4", resources: [] },
              { id: "ev1-s6-6", title: "The 3.0 Evolve Growth Guide", duration: "27m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/5.How To Plan Ads (Preparation)/8. The 3.0 Evolve Growth Guide - Evolve Start Here Evolve.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s7",
            title: "How To Make Ads (Execution)",
            lessons: [
              { id: "ev1-s7-1", title: "🆕 Overview Of How To Make Ads Section", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/1.🆕 Overview Of How To Make Ads Section - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-2", title: "🆕 The Execution Problem", duration: "37m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/2.🆕 The Execution Problem - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-3", title: "🆕 Every Ad Format That You Can Use", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/3.🆕 Every Ad Format That You Can Use - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-4", title: "🆕 Copywriting 101 - Evolve Version", duration: "37m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/4.🆕 Copywriting 101 - Evolve Version - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-5", title: "🆕 How To Write Image Ads - Part 1", duration: "29m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/5.🆕 How To Write Image Ads - Part 1 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-6", title: "🆕 How To Write Image Ads - Part 2", duration: "51m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/6.🆕 How To Write Image Ads - Part 2 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-7", title: "Banger Static Ads Prompt Evolve AI Program", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/7.Banger Static Ads Prompt Evolve AI Program - Evolve Start Here E.mp4", resources: [] },
              { id: "ev1-s7-8", title: "🆕 How To Write Video Ads - Part 1", duration: "26m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/9.🆕 How To Write Video Ads - Part 1 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-9", title: "How To Write Hooks That BANG Shaun", duration: "18m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/10.How To Write Hooks That BANG Shaun - 👣 Evolve · Evolve.mp4", resources: [
                {"name": "🆕 How To Write Video Ads - Part 2 (Final Script Written by spencer).pdf", "size": "207 KB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/10.🆕 How To Write Video Ads - Part 2 (Final Script Written by spencer).pdf"},
                {"name": "🆕 How To Write Video Ads - Part 2.mp4", "size": "265.7 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/10.🆕 How To Write Video Ads - Part 2 - 👣 Evolve · Evolve.mp4"}
              ] },
              { id: "ev1-s7-10", title: "How To Write Hooks That BANG Shaun", duration: "18m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/11.How To Write Hooks That BANG Shaun - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s7-11", title: "Scriptwriting For Ads Shaun", duration: "26m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/12.Scriptwriting For Ads Shaun - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-12", title: "🆕 How To Turn Editors To A-Players Get Content", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/14.🆕 How To Turn Editors To A-Players Get Content - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-13", title: "How To Source B-Roll For Videos ecomtalent", duration: "30m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/15.How To Source B-Roll For Videos ecomtalent - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-14", title: "🆕 13 Winning Static Ad Templates", duration: "14m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/16.🆕 13 Winning Static Ad Templates - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s7-15", title: "🆕 How To Clone Print Imitations Ads", duration: "12m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/6.How To Make Ads (Execution)/17.🆕 How To Clone Print Imitations Ads - 👣 Evolve · Evolve.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s8",
            title: "How To Run Ads (Testing)",
            lessons: [
              { id: "ev1-s8-1", title: "1 Evolve Facebook Ads Strategy Philosophy", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/1.1 Evolve _ Facebook Ads Strategy Philosophy.mp4", resources: [
                {"name": "2 Full Media Buying Strategy Outline 2026.mp4", "size": "32.2 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/1.2 Full Media Buying Strategy Outline 2026 - Evolve Start Here Evol.mp4"}
              ] },
              { id: "ev1-s8-2", title: "How To Set Up a 322 Campaign", duration: "32m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/3.How To Set Up a 322 Campaign - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s8-3", title: "How To Test Landing Pages 3222", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/4.How To Test Landing Pages 3222 - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s8-4", title: "How To Set Up ZombieGraveyard Campaign", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/5.How To Set Up ZombieGraveyard Campaign - Evolve Start Here Evolv.mp4", resources: [] },
              { id: "ev1-s8-5", title: "How To Set Up ABO Scaling Campaign", duration: "18m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/6.How To Set Up ABO Scaling Campaign - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s8-6", title: "How To Set Up Raw Content Campaign", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/7.How To Set Up Raw Content Campaign - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s8-7", title: "How To See Ads Performance Our Columns", duration: "17m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/9.How To See Ads Performance Our Columns - Evolve Start Here Evolv.mp4", resources: [] },
              { id: "ev1-s8-8", title: "How To Set Targets KPIs", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/10.How To Set Targets KPIs - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s8-9", title: "How To Duplicate Ads Into Champions NEW WAY", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/12.How To Duplicate Ads Into Champions NEW WAY - Evolve Start Here.mp4", resources: [] },
              { id: "ev1-s8-10", title: "How To Find Any Post IDs For Winning Ads", duration: "", src: "", resources: [] },
              { id: "ev1-s8-11", title: "Turning On Seasonal Ads For Quick Performance", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/15.Turning On Seasonal Ads For Quick Performance - Evolve Start Her.mp4", resources: [] },
              { id: "ev1-s8-12", title: "How To Protect Against Bad Ads Over Spending", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/16.How To Protect Against Bad Ads Over Spending - Evolve Start Here.mp4", resources: [] },
              { id: "ev1-s8-13", title: "How To Set Up A Promo Campaign", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/17.How To Set Up A Promo Campaign - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s8-14", title: "How To Set Up Naming Templates", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/7. How To Run Ads (Testing)/18.How To Set Up Naming Templates - Evolve Start Here Evolve.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s9",
            title: "How To Manage Ads (Scaling)",
            lessons: [
              { id: "ev1-s9-1", title: "How to Scale Facebook Ads Up Down", duration: "19m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/8. How To Manage Ads (Scaling)/1.How to Scale Facebook Ads Up Down - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s9-2", title: "How To Understand Facebook Ads Attribution", duration: "13m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/8. How To Manage Ads (Scaling)/2.How To Understand Facebook Ads Attribution - Evolve Start Here E.mp4", resources: [] },
              { id: "ev1-s9-3", title: "How To View Attribution in TW Triple Whale", duration: "14m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/8. How To Manage Ads (Scaling)/3.How To View Attribution in TW Triple Whale - Evolve Start Here E.mp4", resources: [] },
              { id: "ev1-s9-4", title: "Advanced Surf Scaling Method", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/8. How To Manage Ads (Scaling)/4.Advanced Surf Scaling Method - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s9-5", title: "How To See If You Should Turn Off High-Spend Ads", duration: "11m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/8. How To Manage Ads (Scaling)/6.How To See If You Should Turn Off High-Spend Ads - Evolve Start.mp4", resources: [] },
              { id: "ev1-s9-6", title: "How To Deal With Roller Coaster Performance", duration: "1h 6m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/8. How To Manage Ads (Scaling)/7.How To Deal With Roller Coaster Performance - Evolve Start Here.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s10",
            title: "How To Analyze Ads (Feedback)",
            lessons: [
              { id: "ev1-s10-1", title: "How To Do Learnings - Part 1 Losers", duration: "13m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/10. How To Analyze Ads (Feedback)/1.How To Do Learnings - Part 1 Losers - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s10-2", title: "How To Do Learnings - Part 2 Winning Ads", duration: "18m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/10. How To Analyze Ads (Feedback)/2.How To Do Learnings - Part 2 Winning Ads - Evolve Start Here Evo.mp4", resources: [] },
              { id: "ev1-s10-3", title: "How To Do Learnings - Part 3 Losers", duration: "31m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/10. How To Analyze Ads (Feedback)/3.How To Do Learnings - Part 3 Losers - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s10-4", title: "How To Do Learnings - Part 4 Winning Ads", duration: "22m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/10. How To Analyze Ads (Feedback)/4.How To Do Learnings - Part 4 Winning Ads - Evolve Start Here Evo.mp4", resources: [] },
              { id: "ev1-s10-5", title: "How To Do Learnings - Part 5 Winning Ads", duration: "26m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/10. How To Analyze Ads (Feedback)/5.How To Do Learnings - Part 5 Winning Ads - Evolve Start Here Evo.mp4", resources: [] },
              { id: "ev1-s10-6", title: "How To Pull Frameworks From Ads", duration: "15m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/10. How To Analyze Ads (Feedback)/6.How To Pull Frameworks From Ads - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s10-7", title: "How To Do Learnings - Questions", duration: "11m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/10. How To Analyze Ads (Feedback)/7.How To Do Learnings - Questions - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s10-8", title: "🆕 How To Rewrite Losing Ads Into Winners", duration: "56m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/10. How To Analyze Ads (Feedback)/9.🆕 How To Rewrite Losing Ads Into Winners.mp4", resources: [] },
              { id: "ev1-s10-9", title: "How To Do Iterations Variations Live Example", duration: "16m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/10. How To Analyze Ads (Feedback)/10.How To Do Iterations Variations Live Example - Evolve Start Here.mp4", resources: [] },
              { id: "ev1-s10-10", title: "Winning Humidifier Ad - Learnings Shaun", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/10. How To Analyze Ads (Feedback)/12.Winning Humidifier Ad - Learnings Shaun - Evolve Start Here Evol.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s11",
            title: "How To Get UGC (Generation)",
            lessons: [
              { id: "ev1-s11-1", title: "Why Content Is So Important - Part 1", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/1.Why Content Is So Important - Part 1 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-2", title: "🆕 Why Content Is So Important - Part 2", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/2.🆕 Why Content Is So Important - Part 2 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-3", title: "How To Get Viral UGC Inspo For Creators Ads", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/3.How To Get Viral UGC Inspo For Creators Ads - Evolve Evolve.mp4", resources: [] },
              { id: "ev1-s11-4", title: "🆕 Does Insense Still Work", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/4.🆕 Does Insense Still Work - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-5", title: "UGC Content Overview - Part 1", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/5.UGC Content Overview - Part 1 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-6", title: "UGC Content Overview - Part 2", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/6.UGC Content Overview - Part 2 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-7", title: "How To Add a New Brand To Insense", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/8.How To Add a New Brand To Insense - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-8", title: "🆕 How To Create an Insense Campaign 2025", duration: "12m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/10.🆕 How To Create an Insense Campaign 2025 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-9", title: "How To Process Creators Add To Shortlist", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/12.How To Process Creators Add To Shortlist - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-10", title: "How To Download Creators Upload To Sheet", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/13.How To Download Creators Upload To Sheet - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-11", title: "How to Hire Approved Creators - Part 1", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/14.How to Hire Approved Creators - Part 1 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-12", title: "Sending Frameworks To Creators - Part 2", duration: "11m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/15.Sending Frameworks To Creators - Part 2 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-13", title: "How To Make B-Rolls For Frameworks", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/16.How To Make B-Rolls For Frameworks - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-14", title: "How to Follow Up Upload Content - Part 1", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/17.How to Follow Up Upload Content - Part 1 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-15", title: "How to Follow Up Upload Content - Part 2", duration: "2m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/18.How to Follow Up Upload Content - Part 2 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s11-16", title: "How to Contact Winning Creators Affiliate", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/20.How to Contact Winning Creators Affiliate - Evolve Evolve.mp4", resources: [] },
              { id: "ev1-s11-17", title: "1 How To Onboard Brand Ambassadors", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/22.1 How To Onboard Brand Ambassadors.mp4", resources: [
                {"name": "3 How To Onboard Brand Ambassadors - [Creator’s Name] - EVOLVE TEMPLATE - AD SPEND.pdf", "size": "3.5 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/22.3 How To Onboard Brand Ambassadors - [Creator’s Name] - EVOLVE TEMPLATE - AD SPEND.pdf"},
                {"name": "4 How To Onboard Brand Ambassadors - [Creator’s Name] - EVOLVE TEMPLATE - REVENUE.pdf", "size": "3.5 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/22.4 How To Onboard Brand Ambassadors - [Creator’s Name] - EVOLVE TEMPLATE - REVENUE.pdf"},
                {"name": "5 How To Onboard Brand Ambassadors - [Creator’s Name] - EVOLVE TEMPLATE - AD SPEND + WHITELISTING.pdf", "size": "3.5 MB", "key": "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/22.5 How To Onboard Brand Ambassadors - [Creator’s Name] - EVOLVE TEMPLATE - AD SPEND + WHITELISTING.pdf"}
              ] },
              { id: "ev1-s11-18", title: "How To Communicate With Brand Ambassadors", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/24.How To Communicate With Brand Ambassadors - Evolve Evolve.mp4", resources: [] },
              { id: "ev1-s11-19", title: "Feedback Loops With Your Brand Ambassadors", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/11. How To Get UGC (Generation)/26.Feedback Loops With Your Brand Ambassadors - Evolve Evolve.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s12",
            title: "How To Run Whitelisted Ads",
            lessons: [
              { id: "ev1-s12-1", title: "Whitelisting Overview Proof It Works", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/12.How To Run Whitelisted Ads/1.Whitelisting Overview Proof It Works - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s12-2", title: "How To Setup Whitelisting Creators", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/12.How To Run Whitelisted Ads/2.How To Setup Whitelisting Creators - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s12-3", title: "How To Test Whitelisted Ads", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/12.How To Run Whitelisted Ads/3.How To Test Whitelisted Ads - Evolve Start Here Evolve.mp4", resources: [] },
              { id: "ev1-s12-4", title: "Partnership Ads Updated Strategy", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/12.How To Run Whitelisted Ads/4.Partnership Ads Updated Strategy - Evolve Start Here Evolve.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s13",
            title: "Productivity System & Mindset",
            lessons: [
              { id: "ev1-s13-1", title: "How To Find Time And Get Shit Done", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/13.Productivity System & Mindset/1.How To Find Time And Get Shit Done - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s13-2", title: "How To Focus Quiet Your Mind", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/13.Productivity System & Mindset/2.How To Focus Quiet Your Mind - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s13-3", title: "🆕 Endless Motivation - Rewiring Pain Pleasure", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/13.Productivity System & Mindset/3,🆕 Endless Motivation - Rewiring Pain Pleasure - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s13-4", title: "Planning Achieving Goals Important", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/13.Productivity System & Mindset/4.Planning Achieving Goals Important - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s13-5", title: "🆕Never Stop Growing YoY - Face Off With The Devil", duration: "23m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/13.Productivity System & Mindset/5.🆕Never Stop Growing YoY - Face Off With The Devil - 👣 Evolve · Evolve.mp4", resources: [] }
            ],
          },
          {
            id: "ev1-s14",
            title: "Product Research",
            lessons: [
              { id: "ev1-s14-1", title: "How To Make Any Product Work Brand Building Pt 1", duration: "39m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/14. Product Research/1.How To Make Any Product Work Brand Building Pt 1 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s14-2", title: "Live Product Research w Kalodata - Pt 2", duration: "1h", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/14. Product Research/2.Live Product Research w Kalodata - Pt 2 - 👣 Evolve · Evolve.mp4", resources: [] },
              { id: "ev1-s14-3", title: "How Brands Actually Scale to 8 Figures", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/1.EVOLVE MAIN COURSE/14. Product Research/3.How Brands Actually Scale to 8 Figures - Evolve Start Here Evolv.mp4", resources: [] }
            ],
          }
        ],
      },
      {
        id: "ev2",
        title: "Evolve Copywriting (NEW)",
        lessons: [
          { id: "ev2-1", title: "Read First", duration: "", src: "", resources: [] }
        ],
        sections: [
          {
            id: "ev2-s1",
            title: "Copywriting Overview",
            lessons: [
              { id: "ev2-s1-1", title: "Overview Of Copywriting Program", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/1. Copywriting Overview/1.Overview Of Copywriting Program - ️ Evolve Copywriting NEW Evolv.mp4", resources: [] },
              { id: "ev2-s1-2", title: "The current state of copywriting", duration: "13m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/1. Copywriting Overview/2.The current state of copywriting - ️ Evolve Copywriting NEW Evol.mp4", resources: [] },
              { id: "ev2-s1-3", title: "How to guarantee you get better at copywriting", duration: "11m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/1. Copywriting Overview/3.How to guarantee you get better at copywriting - ️ Evolve Copywr.mp4", resources: [] },
              { id: "ev2-s1-4", title: "Why you need to write in the environment", duration: "14m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/1. Copywriting Overview/5.Why you need to write in the environment - ️ Evolve Copywriting.mp4", resources: [] },
              { id: "ev2-s1-5", title: "Why great copywriting requires boredom", duration: "12m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/1. Copywriting Overview/7.Why great copywriting requires boredom - ️ Evolve Copywriting NE.mp4", resources: [] },
              { id: "ev2-s1-6", title: "Read First", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev2-s2",
            title: "Copywriting Principles",
            lessons: [
              { id: "ev2-s2-1", title: "The 3 checks for great copywriting", duration: "19m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/2. Copywriting Principles/1.The 3 checks for great copywriting - ️ Evolve Copywriting NEW Ev.mp4", resources: [] },
              { id: "ev2-s2-2", title: "The importance of how you say it", duration: "12m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/2. Copywriting Principles/2.The importance of how you say it - ️ Evolve Copywriting NEW Evol.mp4", resources: [] },
              { id: "ev2-s2-3", title: "Why you need to write facts", duration: "14m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/2. Copywriting Principles/3.Why you need to write facts - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s2-4", title: "Why you need to write less fluff", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/2. Copywriting Principles/4.Why you need to write less fluff - ️ Evolve Copywriting NEW Evol.mp4", resources: [] },
              { id: "ev2-s2-5", title: "Why you need to speak copy not write it", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/2. Copywriting Principles/5.Why you need to speak copy not write it - ️ Evolve Copywriting N.mp4", resources: [] },
              { id: "ev2-s2-6", title: "Why you need to write at a 6th grade level", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/2. Copywriting Principles/6.Why you need to write at a 6th grade level - ️ Evolve Copywritin.mp4", resources: [] },
              { id: "ev2-s2-7", title: "Why you need to use unique mechanisms", duration: "17m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/2. Copywriting Principles/7.Why you need to use unique mechanisms - ️ Evolve Copywriting NEW.mp4", resources: [] },
              { id: "ev2-s2-8", title: "Why you need to understand beliefs", duration: "16m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/2. Copywriting Principles/8.Why you need to understand beliefs - ️ Evolve Copywriting NEW Ev.mp4", resources: [] },
              { id: "ev2-s2-9", title: "Why you need to understand authority", duration: "39m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/2. Copywriting Principles/9.Why you need to understand authority - ️ Evolve Copywriting NEW.mp4", resources: [] },
              { id: "ev2-s2-10", title: "Read First", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev2-s3",
            title: "Copywriting Fundamentals",
            lessons: [
              { id: "ev2-s3-1", title: "Being aware of avatars", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/3. Copywriting Fundamentals/1.Being aware of avatars - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s3-2", title: "Being aware of angles", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/3. Copywriting Fundamentals/2.Being aware of angles - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s3-3", title: "Being aware of mechanisms", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/3. Copywriting Fundamentals/3.Being aware of mechanisms - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s3-4", title: "Being aware of authorities", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/3. Copywriting Fundamentals/4.Being aware of authorities - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s3-5", title: "Being aware of market awareness", duration: "19m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/3. Copywriting Fundamentals/5.Being aware of market awareness - ️ Evolve Copywriting NEW Evolv.mp4", resources: [] },
              { id: "ev2-s3-6", title: "Read First", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev2-s4",
            title: "Copywriting Strategies",
            lessons: [
              { id: "ev2-s4-1", title: "How to finalize your ad ideas", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/1.How to finalize your ad ideas - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s4-2", title: "The framework behind great hooks", duration: "13m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/2.The framework behind great hooks - ️ Evolve Copywriting NEW Evol.mp4", resources: [] },
              { id: "ev2-s4-3", title: "The 2 types of hooks", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/3.The 2 types of hooks - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s4-4", title: "The 2 ways to write great hooks", duration: "18m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/4.The 2 ways to write great hooks - ️ Evolve Copywriting NEW Evolv.mp4", resources: [] },
              { id: "ev2-s4-5", title: "1️⃣ - How to write open loops", duration: "17m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/5.1️⃣ - How to write open loops - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s4-6", title: "2️⃣ - How to write a bridge", duration: "24m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/6.2️⃣ - How to write a bridge - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s4-7", title: "3️⃣ - How to preventhandle objections in writing", duration: "37m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/7.3️⃣ - How to preventhandle objections in writing - ️ Evolve Copy.mp4", resources: [] },
              { id: "ev2-s4-8", title: "4️⃣ - How to pitch without rejection", duration: "13m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/8.4️⃣ - How to pitch without rejection - ️ Evolve Copywriting NEW.mp4", resources: [] },
              { id: "ev2-s4-9", title: "How to raise the stakes", duration: "14m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/9.How to raise the stakes - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s4-10", title: "How to create ads that show dont tell", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/10.How to create ads that show dont tell - ️ Evolve Copywriting NEW.mp4", resources: [] },
              { id: "ev2-s4-11", title: "How to write ads that show and dont tell", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/11.How to write ads that show and dont tell - ️ Evolve Copywriting.mp4", resources: [] },
              { id: "ev2-s4-12", title: "How to use metaphorssimilesanalogies", duration: "14m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/12.How to use metaphorssimilesanalogies - ️ Evolve Copywriting NEW.mp4", resources: [] },
              { id: "ev2-s4-13", title: "How to write with labels customer language", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/13.How to write with labels customer language - ️ Evolve Copywritin.mp4", resources: [] },
              { id: "ev2-s4-14", title: "How to write unaware ads hooks", duration: "21m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/4. Copywriting Strategies/14.How to write unaware ads hooks - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] }
            ],
          },
          {
            id: "ev2-s5",
            title: "Evolve Storytelling",
            lessons: [
              { id: "ev2-s5-1", title: "Why storytelling is so powerful", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/5.Evolve Storytelling/1.Why storytelling is so powerful - ️ Evolve Copywriting NEW Evolv.mp4", resources: [] },
              { id: "ev2-s5-2", title: "Why you cant just rely on education", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/5.Evolve Storytelling/2.Why you cant just rely on education - ️ Evolve Copywriting NEW E.mp4", resources: [] },
              { id: "ev2-s5-3", title: "What makes a great story", duration: "36m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/5.Evolve Storytelling/3. What makes a great story - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s5-4", title: "The laws of story telling", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/5.Evolve Storytelling/4.The laws of story telling - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s5-5", title: "The three enemies of storytelling", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/5.Evolve Storytelling/5.The three enemies of storytelling - ️ Evolve Copywriting NEW Evo.mp4", resources: [] },
              { id: "ev2-s5-6", title: "The storytelling arcsplots", duration: "17m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/5.Evolve Storytelling/6.The storytelling arcsplots - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s5-7", title: "Prompts to help you storytell", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/5.Evolve Storytelling/7.Prompts to help you storytell - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] },
              { id: "ev2-s5-8", title: "Must Read", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev2-s6",
            title: "Evolve Positioning",
            lessons: [
              { id: "ev2-s6-1", title: "Why you need to position your brand", duration: "45m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/6. Evolve Positioning/1. Why you need to position your brand - ️ Evolve Copywriting NEW.mp4", resources: [] },
              { id: "ev2-s6-2", title: "Positioning Exercise", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/6. Evolve Positioning/2.Positioning Exercise - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] }
            ],
          },
          {
            id: "ev2-s7",
            title: "What about AI",
            lessons: [
              { id: "ev2-s7-1", title: "What about AI", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/7.What about AI/What about AI - ️ Evolve Copywriting NEW Evolve.mp4", resources: [] }
            ],
          },
          {
            id: "ev2-s10",
            title: "Live Ad Creation",
            lessons: [
              { id: "ev2-s10-1", title: "How To Write Image Ads - Part 1", duration: "29m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/10.Live Ad Creation/1.How To Write Image Ads - Part 1 - ️ Evolve Copywriting NEW Evolv.mp4", resources: [] },
              { id: "ev2-s10-2", title: "How To Write Image Ads - Part 2", duration: "51m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/10.Live Ad Creation/2.How To Write Image Ads - Part 2 - ️ Evolve Copywriting NEW Evolv.mp4", resources: [] },
              { id: "ev2-s10-3", title: "How To Write Video Ads - Part 1", duration: "26m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/10.Live Ad Creation/3.How To Write Video Ads - Part 1 - ️ Evolve Copywriting NEW Evolv.mp4", resources: [] },
              { id: "ev2-s10-4", title: "How To Write Video Ads - Part 2", duration: "31m", src: "Evolve E-Commerce by Spencer Pawliw/2.Evolve Copywriting (NEW)/10.Live Ad Creation/4.How To Write Video Ads - Part 2 - ️ Evolve Copywriting NEW Evolv.mp4", resources: [] },
              { id: "ev2-s10-5", title: "2 Canvas Zend-Wellness-Sbatch3-Dieter-Video-251109 0207 (1)", duration: "", src: "", resources: [] },
              { id: "ev2-s10-6", title: "Read First", duration: "", src: "", resources: [] }
            ],
          }
        ],
      },
      {
        id: "ev3",
        title: "Evolve Supply Chain Program",
        lessons: [
          { id: "ev3-1", title: "Module 1 - Understanding Different Supplier Types", duration: "47m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/2.Module 1 - Understanding Different Supplier Types - 📦 Evolve Supply Chain Program · Evolve.mp4", resources: [
            {"name": "Module.txt", "size": "0 KB", "key": "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/2.module.txt"}
          ] },
          { id: "ev3-2", title: "Module 2 - How to Create Custom Products in China", duration: "49m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/3.Module 2 - How to Create Custom Products in China - 📦 Evolve Supply Chain Program · Evolve.mp4", resources: [] },
          { id: "ev3-3", title: "Module 3 - Improve Product Quality Profit Margin", duration: "22m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/4.Module 3 - Improve Product Quality Profit Margin - 📦 Evolve Supply Chain Program · Evolve.mp4", resources: [] },
          { id: "ev3-4", title: "Module 5 - How to Work With Factories For A Brand", duration: "27m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/5.Module 5 - How to Work With Factories For A Brand - 📦 Evolve Supply Chain Program · Evolve.mp4", resources: [] },
          { id: "ev3-5", title: "Module 6 - How To Increase Perceived Product Value", duration: "16m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/6.Module 6 - How To Increase Perceived Product Value - 📦 Evolve Supply Chain Program · Evolve.mp4", resources: [] },
          { id: "ev3-6", title: "How to QC Manufacturers", duration: "50m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/How to QC Manufacturers - Evolve Supply Chain Program Evolve.mp4", resources: [] },
          { id: "ev3-7", title: "Last Minute CNY Prep - 2026", duration: "41m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/Last Minute CNY Prep - 2026 - Evolve Supply Chain Program Evolve.mp4", resources: [] },
          { id: "ev3-8", title: "Payment Term Negotiating Strategies", duration: "50m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/Payment Term Negotiating Strategies - Evolve Supply Chain Progra.mp4", resources: [] },
          { id: "ev3-9", title: "Perform Due Diligence on Manufacturers", duration: "45m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/Perform Due Diligence on Manufacturers - Evolve Supply Chain Pro.mp4", resources: [] },
          { id: "ev3-10", title: "Product Compliance Manufacturer Agreements", duration: "59m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/Product Compliance Manufacturer Agreements - Evolve Supply Chain.mp4", resources: [] },
          { id: "ev3-11", title: "Q1 Q2 Product Launch Strategies", duration: "1h 1m", src: "Evolve E-Commerce by Spencer Pawliw/3. EVOLVE SUPPLY CHAIN PROGRAM/Q1 Q2 Product Launch Strategies - Evolve Supply Chain Program Ev.mp4", resources: [] }
        ],
      },
      {
        id: "ev4",
        title: "Evolve Finance",
        lessons: [
          { id: "ev4-1", title: "Intro - Chadzone", duration: "1m", src: "Evolve E-Commerce by Spencer Pawliw/4.Evolve Finance/Intro - Chadzone - Evolve Finance Evolve.mp4", resources: [] },
          { id: "ev4-2", title: "Meta Billing - How to Still Pay With Credit Cards", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/4.Evolve Finance/Meta Billing - How to Still Pay With Credit Cards - Evolve Finan.mp4", resources: [] },
          { id: "ev4-3", title: "Module 1 Contribution Margin", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/4.Evolve Finance/Module 1 Contribution Margin - Evolve Finance Evolve.mp4", resources: [] },
          { id: "ev4-4", title: "Module 2 LTV Modeling How to Outspend Everyone", duration: "11m", src: "Evolve E-Commerce by Spencer Pawliw/4.Evolve Finance/Module 2 LTV Modeling How to Outspend Everyone - Evolve Finance.mp4", resources: [] },
          { id: "ev4-5", title: "Module 3 The Barometers Fix Fast vs Kill You", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/4.Evolve Finance/Module 3 The Barometers Fix Fast vs Kill You - Evolve Finance Ev.mp4", resources: [] },
          { id: "ev4-6", title: "Module 4 The Cash Conversion Cycle", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/4.Evolve Finance/Module 4 The Cash Conversion Cycle - Evolve Finance Evolve.mp4", resources: [] },
          { id: "ev4-7", title: "Read First", duration: "", src: "", resources: [] }
        ],
      },
      {
        id: "ev5",
        title: "Evolve Call Recordings (New)",
        sections: [
          {
            id: "ev5-s1",
            title: "Special Guest Calls",
            lessons: [
              { id: "ev5-s1-1", title: "Special Guest Calls (2024 - 2026)", duration: "", src: "", resources: [] },
              { id: "ev5-s1-2", title: "⭐ Mini CRO Program w Spencer Pawliw - Dec 13 24 -", duration: "54m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/1. Special Guest Calls/2.⭐ Mini CRO Program w_ Spencer Pawliw - Dec 13_24 -.mp4", resources: [] },
              { id: "ev5-s1-3", title: "⭐ Get Started & Scale With Amazon - June 11th 2025", duration: "", src: "", resources: [] },
              { id: "ev5-s1-4", title: "Content.JPG", duration: "", src: "", resources: [] },
              { id: "ev5-s1-5", title: "Note", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev5-s2",
            title: "2026 Evolve Weekly Calls",
            lessons: [
              { id: "ev5-s2-1", title: "Live from Marrakech QA - March 25th 2026", duration: "34m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/2.2026 Evolve Weekly Calls/1.Live from Marrakech QA - March 25th 2026 - Evolve Weekly Call Re.mp4", resources: [] },
              { id: "ev5-s2-2", title: "Copywriters Checklist Open QA - March 4th 2026", duration: "1h", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/2.2026 Evolve Weekly Calls/2.Copywriters Checklist Open QA - March 4th 2026 - Evolve Weekly C.mp4", resources: [] },
              { id: "ev5-s2-3", title: "Ad Strategy Iteration Open QA - Feb 25th 2026", duration: "1h 1m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/2.2026 Evolve Weekly Calls/3.Ad Strategy Iteration Open QA - Feb 25th 2026 - Evolve Weekly Ca.mp4", resources: [] },
              { id: "ev5-s2-4", title: "QA Working Harder Than Ever - Feb 11th 2026", duration: "1h 2m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/2.2026 Evolve Weekly Calls/5.QA Working Harder Than Ever - Feb 11th 2026 - Evolve Weekly Call.mp4", resources: [] },
              { id: "ev5-s2-5", title: "In Person QA w Karlo - February 04th 2026", duration: "1h 34m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/2.2026 Evolve Weekly Calls/6.In Person QA w Karlo - February 04th 2026 - Evolve Weekly Call R.mp4", resources: [] },
              { id: "ev5-s2-6", title: "In Person QA - January 28th 2026", duration: "1h 2m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/2.2026 Evolve Weekly Calls/7.In Person QA - January 28th 2026 - Evolve Weekly Call Recordings.mp4", resources: [] },
              { id: "ev5-s2-7", title: "2026 Roadmap Update QA - January 21st 2026", duration: "1h 24m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/2.2026 Evolve Weekly Calls/8.2026 Roadmap Update QA - January 21st 2026 - Evolve Weekly Call.mp4", resources: [] },
              { id: "ev5-s2-8", title: "Valence Intensity - January 14th 2026", duration: "1h 21m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/2.2026 Evolve Weekly Calls/9.Valence Intensity - January 14th 2026 - Evolve Weekly Call Recor.mp4", resources: [] },
              { id: "ev5-s2-9", title: "How to write open Loops QA - January 7th 2026", duration: "1h 15m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/2.2026 Evolve Weekly Calls/10.How to write open Loops QA - January 7th 2026 - Evolve Weekly Ca.mp4", resources: [] }
            ],
          },
          {
            id: "ev5-s3",
            title: "2025 Evolve Weekly Calls",
            lessons: [
              { id: "ev5-s3-1", title: "Copywriting Sneak Peek QA - December 17th 2025", duration: "1h 14m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/3.2025 Evolve Weekly Calls/1.Copywriting Sneak Peek QA - December 17th 2025 - Evolve Weekly C.mp4", resources: [] },
              { id: "ev5-s3-2", title: "Black Friday Prep - November 26th 2025", duration: "1h 3m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/3.2025 Evolve Weekly Calls/5.Black Friday Prep - November 26th 2025 - Evolve Weekly Call Reco.mp4", resources: [] },
              { id: "ev5-s3-3", title: "Open QA - September 10th 2025", duration: "54m", src: "Evolve E-Commerce by Spencer Pawliw/5.Evolve Call Recordings (New)/3.2025 Evolve Weekly Calls/14.Open QA - September 10th 2025 - Evolve Weekly Call Recordings Ev.mp4", resources: [] }
            ],
          }
        ],
      },
      {
        id: "ev6",
        title: "Full Live Webinar Of $0-$100kMonth",
        lessons: [
          { id: "ev6-1", title: "Full Live Webinar Of 0- 100k Month", duration: "2h 19m", src: "Evolve E-Commerce by Spencer Pawliw/5.Full Live Webinar Of $0-$100kMonth/Full Live Webinar Of 0- 100k Month - 0- 100k Month Full Masterclass · Evolve.mp4", resources: [] }
        ],
      },
      {
        id: "ev7",
        title: "Origins program",
        sections: [
          {
            id: "ev7-s1",
            title: "Start here",
            lessons: [
              { id: "ev7-s1-1", title: "How you re going to scale to 100k mo - Origins Program Start Here · Origins", duration: "11m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/1. Start here/1.How you re going to scale to 100k mo - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s1-2", title: "What to do in the first 48 hours - Origins Program Start Here · Origins", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/1. Start here/2.What to do in the first 48 hours - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s1-3", title: "What to do in the first 7 days - Origins Program Start Here · Origins", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/1. Start here/3.What to do in the first 7 days - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s1-4", title: "What to do in the first 30 days - Origins Program Start Here · Origins", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/1. Start here/4.What to do in the first 30 days - Origins Program Start Here · Origins.mp4", resources: [] }
            ],
          },
          {
            id: "ev7-s2",
            title: "Origins mindset",
            lessons: [
              { id: "ev7-s2-1", title: "How to prepare your mind for change - Origins Program Start Here · Origins", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/2. Origins mindset/1. How to prepare your mind for change - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s2-2", title: "How long it will take you to get rich - Origins Program Start Here · Origins", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/2. Origins mindset/2.How long it will take you to get rich - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s2-3", title: "How to guarantee success - Origins Program Start Here · Origins", duration: "28m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/2. Origins mindset/3.How to guarantee success - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s2-4", title: "The whitebelt mindset - Origins Program Start Here · Origins", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/2. Origins mindset/5.The whitebelt mindset - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s2-5", title: "Why you actually never fail - Origins Program Start Here · Origins", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/2. Origins mindset/6.Why you actually never fail - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s2-6", title: "Why the fact it’s hard is actually good - Origins Program Start Here · Origins", duration: "14m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/2. Origins mindset/7.Why the fact it’s hard is actually good - Origins Program Start Here · Origins.mp4", resources: [] }
            ],
          },
          {
            id: "ev7-s4",
            title: "How To Find Products",
            lessons: [
              { id: "ev7-s4-1", title: "Market Desires - Origins Program Start Here · Origins", duration: "17m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/4.  How To Find Products/1.Market Desires - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s4-2", title: "Market Sophistication - Origins Program Start Here · Origins", duration: "19m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/4.  How To Find Products/2.Market Sophistication - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s4-3", title: "How To Find Winning Products Brand Building Pt 1 - Origins Program Start Here · Origins", duration: "39m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/4.  How To Find Products/3.How To Find Winning Products Brand Building Pt 1 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s4-4", title: "Live Product Research w Kalodata - Pt 2 - Origins Program Start Here · Origins", duration: "1h", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/4.  How To Find Products/4.Live Product Research w Kalodata - Pt 2 - Origins Program Start Here · Origins.mp4", resources: [] }
            ],
          },
          {
            id: "ev7-s5",
            title: "How to Create Offers",
            lessons: [
              { id: "ev7-s5-1", title: "Why offers have such a big impact - Origins Program Start Here · Origins", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/5. How to Create Offers/1.Why offers have such a big impact - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s5-2", title: "Why you MUST know your numbers with new offers - Origins Program Start Here · Origins", duration: "17m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/5. How to Create Offers/2.Why you MUST know your numbers with new offers - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s5-3", title: "The types of offers you can run - Origins Program Start Here · Origins", duration: "14m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/5. How to Create Offers/3.The types of offers you can run - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s5-4", title: "How to create an offer - Origins Program Start Here · Origins", duration: "38m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/5. How to Create Offers/5.How to create an offer - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s5-5", title: "How one offer can 2x ad spend and 3x ROAS - Origins Program 0-10", duration: "27m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/5. How to Create Offers/7.How one offer can 2x ad spend and 3x ROAS - Origins Program 0-10.mp4", resources: [] }
            ],
          },
          {
            id: "ev7-s6",
            title: "How I Create Avatar",
            lessons: [
              { id: "ev7-s6-1", title: "Understanding Your Product - Part 1 - Origins Program Start Here · Origins", duration: "16m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/1.Understanding Your Product - Part 1 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-2", title: "Understanding Your Product - Part 2 - Origins Program Start Here · Origins", duration: "33m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/2.Understanding Your Product - Part 2 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-3", title: "Understanding Your Product - Part 3 - Origins Program Start Here · Origins", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/3.Understanding Your Product - Part 3 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-4", title: "Understanding Applying Desire - Part 1 - Origins Program Start Here · Origins", duration: "1h 2m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/5.Understanding Applying Desire - Part 1 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-5", title: "The Desire Calendar - Part 2 - Origins Program Start Here · Origins", duration: "17m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/6..The Desire Calendar - Part 2 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-6", title: "How To Find Desires - Part 3 - Origins Program Start Here · Origins", duration: "43m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/7.How To Find Desires - Part 3 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-7", title: "Understanding Market Sophistication - Part 1 - Origins Program Start Here · Origins", duration: "38m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/9.Understanding Market Sophistication - Part 1 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-8", title: "How To Find Apply New Mechanisms - Part 2 - Origins Program Start Here · Origins", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/10.How To Find Apply New Mechanisms - Part 2 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-9", title: "How To Find Apply New Information - Part 3 - Origins Program Start Here · Origins", duration: "22m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/12.How To Find Apply New Information - Part 3 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-10", title: "How To Find Apply New Identities - Part 4 - Origins Program Start Here · Origins", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/14.How To Find Apply New Identities - Part 4 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-11", title: "How To Build Core Avatars - Origins Program Start Here · Origins", duration: "47m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/17.How To Build Core Avatars - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s6-12", title: "How To Build Sub Avatars - Origins Program Start Here · Origins", duration: "33m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/6. How I Create Avatar/19.How To Build Sub Avatars - Origins Program Start Here · Origins.mp4", resources: [] }
            ],
          },
          {
            id: "ev7-s7",
            title: "Watch This If Overwhelmed",
            lessons: [
              { id: "ev7-s7-1", title: "🆕 How to feel better about being overwhelmed - Origins Program Start Here · Origins", duration: "19m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/7. Watch This If Overwhelmed/🆕 How to feel better about being overwhelmed - Origins Program Start Here · Origins.mp4", resources: [] }
            ],
          },
          {
            id: "ev7-s8",
            title: "How To Create Ads",
            lessons: [
              { id: "ev7-s8-1", title: "Understanding ad definitions - Origins Program Start Here · Origins", duration: "16m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/1.Understanding ad definitions - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-2", title: "How to come up with ad angles - Origins Program Start Here · Origins", duration: "35m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/2.How to come up with ad angles - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-3", title: "The 3 Testing Methods - Part 1 Origins Version - Origins Program Start Here · Origins", duration: "21m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/4.The 3 Testing Methods - Part 1 Origins Version - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-4", title: "Putting It All Together Origins Version - Origins Program Start Here · Origins", duration: "17m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/5.Putting It All Together Origins Version - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-5", title: "Every Ad Format That You Can Use - Origins Program Start Here · Origins", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/6.Every Ad Format That You Can Use - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-6", title: "The Origins creative roadmap - Origins Program Start Here · Origins", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/8.The Origins creative roadmap - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-7", title: "How to create image ads - part 1 - Origins Program Start Here · Origins", duration: "29m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/10.How to create image ads - part 1 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-8", title: "How to create image ads - part 2 - Origins Program Start Here · Origins", duration: "51m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/11.How to create image ads - part 2 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-9", title: "13 winning static ads breakdown templates - Origins Program Start Here · Origins", duration: "14m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/12.13 winning static ads breakdown templates - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-10", title: "What winning video ads look like 9 examples - Origins Program Start Here · Origins", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/14.What winning video ads look like 9 examples - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-11", title: "The importance of copywriting for videos - Origins Program Start Here · Origins", duration: "42m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/16.The importance of copywriting for videos - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-12", title: "How to write a video ad - Part 1 - Origins Program Start Here · Origins", duration: "26m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/17.How to write a video ad - Part 1 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-13", title: "How to write a video ad - Part 2 - Origins Program Start Here · Origins", duration: "31m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/18.How to write a video ad - Part 2 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-14", title: "How to get content for ads options for editing - Origins Program Start Here · Origins", duration: "20m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8.  How To Create Ads/20.How to get content for ads options for editing - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s8-15", title: "Final Script", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev7-s9",
            title: "How To Set Up FB Assets",
            lessons: [
              { id: "ev7-s9-1", title: "FB Asset Structure to Prevent Getting Rekt - Origins Program Start Here · Origins", duration: "2m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8. How To Set Up FB Assets/1.FB Asset Structure to Prevent Getting Rekt - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s9-2", title: "Set Up Warm Up Your FB Profile - Origins Program Start Here · Origins", duration: "1m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8. How To Set Up FB Assets/2.Set Up Warm Up Your FB Profile - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s9-3", title: "Set Up Warm Up Your FB Page - Origins Program Start Here · Origins", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8. How To Set Up FB Assets/3.Set Up Warm Up Your FB Page - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s9-4", title: "How To Verify Your Meta Business Manager", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8. How To Set Up FB Assets/5.How To Verify Your Meta Business Manager.mp4", resources: [] },
              { id: "ev7-s9-5", title: "Set Up Warm Up Your FB Ad Account - Origins Program Start Here · Origins", duration: "11m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8. How To Set Up FB Assets/6.Set Up Warm Up Your FB Ad Account - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s9-6", title: "Set Up FB Pixel Dataset - Origins Program Start Here · Origins", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8. How To Set Up FB Assets/7.Set Up FB Pixel Dataset - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s9-7", title: "Putting The FB Asset Structure Together - Origins Program Start Here · Origins", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/8. How To Set Up FB Assets/8.Putting The FB Asset Structure Together - Origins Program Start Here · Origins.mp4", resources: [] }
            ],
          },
          {
            id: "ev7-s10",
            title: "How to Run Add",
            lessons: [
              { id: "ev7-s10-1", title: "Overview of media buying section - Origins Program Start Here · Origins", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/9. How to Run Add/1.Overview of media buying section - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s10-2", title: "Andromeda Why you need to think way bigger - Origins Program Start Here · Origins", duration: "16m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/9. How to Run Add/2. Andromeda Why you need to think way bigger - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s10-3", title: "Full YouTube media buying strategy", duration: "", src: "", resources: [] },
              { id: "ev7-s10-4", title: "How to set ROAS targets for scaling - Origins Program Start Here · Origins", duration: "10m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/9. How to Run Add/5.How to set ROAS targets for scaling - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s10-5", title: "How to scale your account up down - Origins Program Start Here · Origins", duration: "31m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/9. How to Run Add/6.How to scale your account up down - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s10-6", title: "Why bad ads get spend - Origins Program Start Here · Origins", duration: "28m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/9. How to Run Add/8.Why bad ads get spend - Origins Program Start Here · Origins.mp4", resources: [] }
            ],
          },
          {
            id: "ev7-s11",
            title: "🧠 How To Do Learnings",
            lessons: [
              { id: "ev7-s11-1", title: "How to review losing ads - Origins Program Start Here · Origins", duration: "31m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/10. 🧠 How To Do Learnings/1.How to review losing ads - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s11-2", title: "How to apply learnings to make new ads - Origins Program Start Here · Origins", duration: "2m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/10. 🧠 How To Do Learnings/2. How to apply learnings to make new ads - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s11-3", title: "How to review winning ads even if you have 0 - Origins Program Start Here · Origins", duration: "22m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/10. 🧠 How To Do Learnings/3.How to review winning ads even if you have 0 - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s11-4", title: "🆕 How to pull ideas frameworks from ads - Origins Program Start Here · Origins", duration: "15m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/10. 🧠 How To Do Learnings/4.🆕 How to pull ideas frameworks from ads - Origins Program Start Here · Origins.mp4", resources: [] },
              { id: "ev7-s11-5", title: "How to complete feedback loops 12 questions - Origins Program Start Here · Origins", duration: "12m", src: "Evolve E-Commerce by Spencer Pawliw/6. Origins program/10. 🧠 How To Do Learnings/5.How to complete feedback loops 12 questions - Origins Program Start Here · Origins.mp4", resources: [] }
            ],
          }
        ],
      },
      {
        id: "ev8",
        title: "Team Building, Systems, Hiring - Dubai Mastermind",
        lessons: [
          { id: "ev8-1", title: "Dubai Mastermind Recording", duration: "1h 44m", src: "Evolve E-Commerce by Spencer Pawliw/7.Team Building, Systems, Hiring - Dubai Mastermind/Dubai Mastermind Recording.mp4", resources: [] }
        ],
      },
      {
        id: "ev9",
        title: "2025 Evolve Q4 Strategy",
        lessons: [
          { id: "ev9-1", title: "The Evolve Q4 Masterclass 2025", duration: "1h 36m", src: "Evolve E-Commerce by Spencer Pawliw/8.2025 EVOLVE Q4 STRATEGY/1.The Evolve Q4 Masterclass 2025 - 💰 Evolve Q4 · Evolve.mp4", resources: [] },
          { id: "ev9-2", title: "The Evolve Q4 Creative Blueprint 2025", duration: "1h 4m", src: "Evolve E-Commerce by Spencer Pawliw/8.2025 EVOLVE Q4 STRATEGY/2.The Evolve Q4 Creative Blueprint 2025 - 💰 Evolve Q4 · Evolve.mp4", resources: [] },
          { id: "ev9-3", title: "How To Setup Promo Campaigns", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/8.2025 EVOLVE Q4 STRATEGY/4.How To Setup Promo Campaigns - 💰 Evolve Q4 · Evolve.mp4", resources: [] },
          { id: "ev9-4", title: "How To Create Rules For Promo Campaigns", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/8.2025 EVOLVE Q4 STRATEGY/5.How To Create Rules For Promo Campaigns - 💰 Evolve Q4 · Evolve.mp4", resources: [] },
          { id: "ev9-5", title: "Advanced Surf Scaling Method", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/8.2025 EVOLVE Q4 STRATEGY/6.Advanced Surf Scaling Method - 💰 Evolve Q4 · Evolve.mp4", resources: [] },
          { id: "ev9-6", title: "V.I.P Lead Gen Strategy Calculator", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/8.2025 EVOLVE Q4 STRATEGY/7.V.I.P Lead Gen Strategy Calculator - 💰 Evolve Q4 · Evolve.mp4", resources: [] },
          { id: "ev9-7", title: "Q4 Email Marketing Strategy", duration: "1h 28m", src: "Evolve E-Commerce by Spencer Pawliw/8.2025 EVOLVE Q4 STRATEGY/9.Q4 Email Marketing Strategy - 💰 Evolve Q4 · Evolve.mp4", resources: [] }
        ],
      },
      {
        id: "ev10",
        title: "$0-$100kDay Yap Session With Spencer & Shaun",
        lessons: [
          { id: "ev10-1", title: "0- 100k Day Yap Session With Spencer Shaun", duration: "1h 25m", src: "Evolve E-Commerce by Spencer Pawliw/9.$0-$100kDay Yap Session With Spencer & Shaun/0- 100k Day Yap Session With Spencer Shaun - 0- 100k Day Podcast · Evolve.mp4", resources: [] }
        ],
      },
      {
        id: "ev11",
        title: "Evolve CRO (Legacy)",
        lessons: [
          { id: "ev11-1", title: "#Evolve CRO", duration: "", src: "", resources: [] }
        ],
        sections: [
          {
            id: "ev11-s1",
            title: "CRO Basics",
            lessons: [
              { id: "ev11-s1-1", title: "What Is CRO", duration: "", src: "", resources: [] },
              { id: "ev11-s1-2", title: "Types Of CRO", duration: "", src: "", resources: [] },
              { id: "ev11-s1-3", title: "Key Metrics For CRO", duration: "", src: "", resources: [] },
              { id: "ev11-s1-4", title: "Tools Of The Trade", duration: "", src: "", resources: [] },
              { id: "ev11-s1-5", title: "Analyze Your Store", duration: "", src: "", resources: [] },
              { id: "ev11-s1-6", title: "Action Item- Fix Your Store", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev11-s2",
            title: "CRO Research",
            lessons: [
              { id: "ev11-s2-1", title: "(Evolve) Understanding Your Product", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/2. CRO Research/1. (Evolve) Understanding Your Product.mp4", resources: [] },
              { id: "ev11-s2-2", title: "Evolve Self-Onboarding Questions", duration: "", src: "", resources: [] },
              { id: "ev11-s2-3", title: "(Evolve) Getting Ready To Do Research + Branding", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/2. CRO Research/3. (Evolve) Getting Ready To Do Research + Branding.mp4", resources: [] },
              { id: "ev11-s2-4", title: "Action Item- Make A Copy & Start Research", duration: "", src: "", resources: [
                {"name": "EAM CLIENT - CRO Research Doc.docx", "size": "34 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/2. CRO Research/4. EAM _ CLIENT - CRO Research Doc.docx"}
              ] },
              { id: "ev11-s2-5", title: "Live Website Audit Walkthrough", duration: "", src: "", resources: [] },
              { id: "ev11-s2-6", title: "Action Item- Audit Your Site For Information", duration: "", src: "", resources: [] },
              { id: "ev11-s2-7", title: "Ad Account Research For CRO", duration: "", src: "", resources: [] },
              { id: "ev11-s2-8", title: "Action Item- Ad Account Research", duration: "", src: "", resources: [] },
              { id: "ev11-s2-9", title: "Direct Competitor Research For CRO", duration: "", src: "", resources: [] },
              { id: "ev11-s2-10", title: "Action Item- Conduct Competitor Research", duration: "", src: "", resources: [] },
              { id: "ev11-s2-11", title: "Angle Research For CRO On Google + Reddit", duration: "", src: "", resources: [] },
              { id: "ev11-s2-12", title: "Action Item- Conduct Angle Research", duration: "", src: "", resources: [] },
              { id: "ev11-s2-13", title: "Landing Page Research For CRO - Atria", duration: "", src: "", resources: [] },
              { id: "ev11-s2-14", title: "Landing Page Research For CRO - PageDeck", duration: "", src: "", resources: [] },
              { id: "ev11-s2-15", title: "Action Item- Conduct Landing Page Research", duration: "", src: "", resources: [] },
              { id: "ev11-s2-16", title: "CRO Research - Twitter", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev11-s3",
            title: "CRO Landing Pages",
            lessons: [
              { id: "ev11-s3-1", title: "Page Deck - Setting Up Foundations", duration: "", src: "", resources: [] },
              { id: "ev11-s3-2", title: "Action Item- Setup Your Page Deck Foundation", duration: "", src: "", resources: [] },
              { id: "ev11-s3-3", title: "Page Deck - Customizing Themes", duration: "", src: "", resources: [] },
              { id: "ev11-s3-4", title: "Action Item- Setup Your Page Deck Theme", duration: "", src: "", resources: [] },
              { id: "ev11-s3-5", title: "REMINDER Identify The Angle Of Your Landing Page", duration: "", src: "", resources: [] },
              { id: "ev11-s3-6", title: "Action Item- Choose Your Landing Page Angle", duration: "", src: "", resources: [] },
              { id: "ev11-s3-7", title: "Strategizing Offers For Your Landing Page.bak", duration: "", src: "", resources: [
                {"name": "Strategizing Offers For Your Landing Page.pdf", "size": "106 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/3. CRO Landing Pages/7. Strategizing Offers For Your Landing Page.pdf"},
                {"name": "Strategizing Offers For Your Landing Page.ts", "size": "1668.0 MB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/3. CRO Landing Pages/7. Strategizing Offers For Your Landing Page.ts"}
              ] },
              { id: "ev11-s3-8", title: "Page Deck - Offer Functionality In Page Deck", duration: "", src: "", resources: [
                {"name": "Page Deck Offer Functionality In Page Deck.pdf", "size": "80 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/3. CRO Landing Pages/8. Page Deck Offer Functionality In Page Deck.pdf"}
              ] },
              { id: "ev11-s3-9", title: "Action Item- Strategize Offers For Your Page", duration: "", src: "", resources: [] },
              { id: "ev11-s3-10", title: "Page Deck - Choosing Your Template", duration: "", src: "", resources: [] },
              { id: "ev11-s3-11", title: "Action Item- Choose Your Template", duration: "", src: "", resources: [] },
              { id: "ev11-s3-12", title: "Page Deck - Writing Your Messaging", duration: "", src: "", resources: [] },
              { id: "ev11-s3-13", title: "Action Item- Optimize Your Messaging", duration: "", src: "", resources: [] },
              { id: "ev11-s3-14", title: "Page Deck - Optimizing Landing Page Content - 1", duration: "", src: "", resources: [] },
              { id: "ev11-s3-15", title: "Page Deck - Optimizing Landing Page Content - 2", duration: "", src: "", resources: [] },
              { id: "ev11-s3-16", title: "Action Item- Optimize Your Content!", duration: "", src: "", resources: [] },
              { id: "ev11-s3-17", title: "Coupon Code Generator", duration: "", src: "", resources: [
                {"name": "The Importance Of Functionality.ts", "size": "491.9 MB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/3. CRO Landing Pages/17. The Importance Of Functionality.ts"}
              ] },
              { id: "ev11-s3-18", title: "Action Item- Optimize Your Functionality", duration: "", src: "", resources: [] },
              { id: "ev11-s3-19", title: "Page Deck - Optimizing Page Information", duration: "", src: "", resources: [] },
              { id: "ev11-s3-20", title: "Action Item- Optimize Your Page Info", duration: "", src: "", resources: [] },
              { id: "ev11-s3-21", title: "QA, QA, QA, And Then... More QA - Part 1", duration: "", src: "", resources: [] },
              { id: "ev11-s3-22", title: "Action Item- QA Your Page Aggressively", duration: "", src: "", resources: [] },
              { id: "ev11-s3-23", title: "QA, QA, QA, And Then... More QA - Part 2", duration: "", src: "", resources: [] },
              { id: "ev11-s3-24", title: "Action Item- QA Your Page Again", duration: "", src: "", resources: [] },
              { id: "ev11-s3-25", title: "Conversion Rate Optimization Hack", duration: "", src: "", resources: [] },
              { id: "ev11-s3-26", title: "Action Item- Follow The CRO Hack", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev11-s4",
            title: "CRO Testing",
            lessons: [
              { id: "ev11-s4-1", title: "How To Test Landing Pages On Meta", duration: "", src: "", resources: [
                {"name": "How To Test Landing Pages On Meta.ts", "size": "376.9 MB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/4. CRO Testing/1. How To Test Landing Pages On Meta.ts"}
              ] },
              { id: "ev11-s4-2", title: "How To Analyze Landing Page Tests On Meta", duration: "", src: "", resources: [
                {"name": "How To Analyze Landing Page Tests On Meta.ts", "size": "449.6 MB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/4. CRO Testing/2. How To Analyze Landing Page Tests On Meta.ts"}
              ] },
              { id: "ev11-s4-3", title: "Action Item- Launch Your PageDeck Test", duration: "", src: "", resources: [] },
              { id: "ev11-s4-4", title: "Page Deck - How To A-B Test Landing Pages", duration: "", src: "", resources: [] },
              { id: "ev11-s4-5", title: "Page Deck - What To A-B Test On Landing Pages", duration: "", src: "", resources: [] },
              { id: "ev11-s4-6", title: "Action Item- Launch Your A-B Test", duration: "", src: "", resources: [] },
              { id: "ev11-s4-7", title: "Overview Of The Software + Setup", duration: "", src: "", resources: [
                {"name": "Intelligems - Overview Of The Software + Setup.ts", "size": "130.2 MB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/4. CRO Testing/7. Intelligems - Overview Of The Software + Setup.ts"}
              ] },
              { id: "ev11-s4-8", title: "Intelligems - URL Redirect Test", duration: "", src: "", resources: [
                {"name": "URL Redirect Test.pdf", "size": "63 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/4. CRO Testing/8. URL Redirect Test.pdf"}
              ] },
              { id: "ev11-s4-9", title: "Intelligems - Visual A-B Test", duration: "", src: "", resources: [
                {"name": "Visual A-B Test.pdf", "size": "65 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/4. CRO Testing/9. Visual A-B Test.pdf"}
              ] },
              { id: "ev11-s4-10", title: "Template Test", duration: "", src: "", resources: [
                {"name": "Intelligems - Template Test.ts", "size": "489.9 MB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/4. CRO Testing/10. Intelligems - Template Test.ts"}
              ] },
              { id: "ev11-s4-11", title: "Intelligems - Theme Test", duration: "", src: "", resources: [
                {"name": "Theme Test.pdf", "size": "72 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/4. CRO Testing/11. Theme Test.pdf"}
              ] },
              { id: "ev11-s4-12", title: "Intelligems - Shipping Tests", duration: "", src: "", resources: [] },
              { id: "ev11-s4-13", title: "Intelligems - The Importance Of QA", duration: "", src: "", resources: [
                {"name": "The Importance Of QA.pdf", "size": "36 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/4. CRO Testing/13. The Importance Of QA.pdf"}
              ] },
              { id: "ev11-s4-14", title: "Intelligems - Analyzing Split Tests", duration: "", src: "", resources: [] },
              { id: "ev11-s4-15", title: "Intelligems - Understanding Powered Stat Sig", duration: "", src: "", resources: [
                {"name": "Understanding Powered Stat Sig.pdf", "size": "61 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/4. CRO Testing/15. Understanding Powered Stat Sig.pdf"}
              ] },
              { id: "ev11-s4-16", title: "Intelligems - How To Execute Winning Tests", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev11-s5",
            title: "CRO Ongoing",
            lessons: [
              { id: "ev11-s5-1", title: "The Importance Of Ongoing Research", duration: "", src: "", resources: [] },
              { id: "ev11-s5-2", title: "Action Item- Do Some More Research", duration: "", src: "", resources: [] },
              { id: "ev11-s5-3", title: "CRO Easy Wins + Test Ideas", duration: "", src: "", resources: [
                {"name": "Frequently Asked Questions Guide.docx", "size": "8 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/5. CRO Ongoing/3. Frequently Asked Questions Guide.docx"}
              ] },
              { id: "ev11-s5-4", title: "Live Landing Page Progress - Part 1", duration: "", src: "", resources: [] },
              { id: "ev11-s5-5", title: "Live Landing Page Progress - Part 2", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/5. CRO Ongoing/5. Live Landing Page Progress - Part 2.mp4", resources: [] }
            ],
          },
          {
            id: "ev11-s6",
            title: "CRO Customer Feedback",
            lessons: [
              { id: "ev11-s6-1", title: "Overview - The Importance Of Customer Feedback", duration: "", src: "", resources: [] },
              { id: "ev11-s6-2", title: "IMPORTANT - How To See If You Qualify For This", duration: "", src: "", resources: [] },
              { id: "ev11-s6-3", title: "How To Come Up With a Giveaway Offer", duration: "", src: "", resources: [] },
              { id: "ev11-s6-4", title: "Action Item- Come Up With a Giveaway Offer", duration: "", src: "", resources: [] },
              { id: "ev11-s6-5", title: "How To Setup a Viral Sweep Giveaway", duration: "", src: "", resources: [
                {"name": "How To Setup a Viral Sweep Giveaway.ts", "size": "299.8 MB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/5. How To Setup a Viral Sweep Giveaway.ts"}
              ] },
              { id: "ev11-s6-6", title: "Action Item- Set Up Your Giveaway", duration: "", src: "", resources: [] },
              { id: "ev11-s6-7", title: "Optimal Sending Schedule For Viral Sweep Campaign", duration: "", src: "", resources: [
                {"name": "Optimal Sending Schedule For Viral Sweep Campaign.ts", "size": "56.2 MB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/7. Optimal Sending Schedule For Viral Sweep Campaign.ts"}
              ] },
              { id: "ev11-s6-8", title: "How To Design Email Templates in Klaviyo", duration: "", src: "", resources: [
                {"name": "How To Design Email Templates in Klaviyo.ts", "size": "206.4 MB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/8. How To Design Email Templates in Klaviyo.ts"}
              ] },
              { id: "ev11-s6-9", title: "Action Item- Design Your Templates", duration: "", src: "", resources: [] },
              { id: "ev11-s6-10", title: "How To Segment The Giveaway Sending Lis", duration: "", src: "", resources: [] },
              { id: "ev11-s6-11", title: "Action Item- Segment Your Lists", duration: "", src: "", resources: [] },
              { id: "ev11-s6-12", title: "How To Design & Launch A Viral Sweep Giveaway Page", duration: "", src: "", resources: [] },
              { id: "ev11-s6-13", title: "Action Item- Set Up Your Landing Page", duration: "", src: "", resources: [] },
              { id: "ev11-s6-14", title: "How To Setup The Entrants List On Klaviyo", duration: "", src: "", resources: [] },
              { id: "ev11-s6-15", title: "Action Item- Set Up Your Entrants List", duration: "", src: "", resources: [] },
              { id: "ev11-s6-16", title: "How to Generate & Schedule Winners Email - Part 1", duration: "", src: "", resources: [] },
              { id: "ev11-s6-17", title: "How to Generate & Schedule Winners Email", duration: "", src: "", resources: [] },
              { id: "ev11-s6-18", title: "How to Contact Individual Winners Email", duration: "", src: "", resources: [] },
              { id: "ev11-s6-19", title: "Action Item- Schedule And Send Winners Emails", duration: "", src: "", resources: [] },
              { id: "ev11-s6-20", title: "How to Schedule The Founders Discount Email", duration: "", src: "", resources: [] },
              { id: "ev11-s6-21", title: "Action Item- Schedule Founders Email", duration: "", src: "", resources: [] },
              { id: "ev11-s6-22", title: "How To Download Entrants & Upload To Sheet", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/22. How To Download Entrants & Upload To Sheet.mp4", resources: [
                {"name": "EAM TEMPLATE - Purchasers Giveaway Feedback V10.0.xlsx", "size": "837 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/22. EAM _ TEMPLATE - Purchasers Giveaway Feedback V10.0.xlsx"}
              ] },
              { id: "ev11-s6-23", title: "Action Item- Download Entrants", duration: "", src: "", resources: [] },
              { id: "ev11-s6-24", title: "How To Organize Sheet With Feedback Data - Part 1", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/24. How To Organize Sheet With Feedback Data - Part 1.mp4", resources: [] },
              { id: "ev11-s6-25", title: "How To Organize Sheet With Feedback Data - Part 2", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/25. How To Organize Sheet With Feedback Data - Part 2.mp4", resources: [] },
              { id: "ev11-s6-26", title: "How To Organize Sheet With Feedback Data - Part 3", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/26. How To Organize Sheet With Feedback Data - Part 3.mp4", resources: [] },
              { id: "ev11-s6-27", title: "Action Item- Organize Your Sheet", duration: "", src: "", resources: [] },
              { id: "ev11-s6-28", title: "How To Upload Knowledge Basis To Chat GPT", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/28. How To Upload Knowledge Basis To Chat GPT.mp4", resources: [
                {"name": "EAM Customer Feedback Summary - AI Prompts.docx", "size": "8 KB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/28. EAM _ Customer Feedback Summary - AI Prompts.docx"}
              ] },
              { id: "ev11-s6-29", title: "Action Item- Upload Data To GPT", duration: "", src: "", resources: [] },
              { id: "ev11-s6-30", title: "How To Summarize All Data & Create a Custom GPT", duration: "", src: "", resources: [
                {"name": "How To Summarize All Data & Create a Custom GPT.ts", "size": "35.7 MB", "key": "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/30. How To Summarize All Data & Create a Custom GPT.ts"}
              ] },
              { id: "ev11-s6-31", title: "Action Item- Summarize Your Data", duration: "", src: "", resources: [] },
              { id: "ev11-s6-32", title: "How To Calculate ROI From Survey", duration: "2m", src: "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/6. CRO Customer Feedback/32. How To Calculate ROI From Survey.mp4", resources: [] }
            ],
          },
          {
            id: "ev11-s7",
            title: "CRO Heatmaps",
            lessons: [
              { id: "ev11-s7-1", title: "Setting Up Heatmap", duration: "", src: "", resources: [] },
              { id: "ev11-s7-2", title: "EAM Heatmap", duration: "", src: "", resources: [] }
            ],
          },
          {
            id: "ev11-s8",
            title: "CRO Sales Optimizations",
            lessons: [
              { id: "ev11-s8-1", title: "Sales CRO - Proof This Works", duration: "", src: "", resources: [] },
              { id: "ev11-s8-2", title: "Shopify Discount Codes Explained", duration: "15m", src: "Evolve E-Commerce by Spencer Pawliw/12. Evolve CRO (from old version of Evolve)/8. CRO Sales Optimizations/2. Shopify Discount Codes Explained.mp4", resources: [] }
            ],
          }
        ],
      },
      {
        id: "ev12",
        title: "Evolve - Agency Edition (Legacy)",
        lessons: [
          { id: "ev12-1", title: "Retention Masterclass - Overview", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/1. Retention Masterclass - Overview.mp4", resources: [] },
          { id: "ev12-2", title: "Retention - Typical Agencies", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/2. Retention - Typical Agencies.mp4", resources: [] },
          { id: "ev12-3", title: "Retention - Deep Client Understanding", duration: "11m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/3. Retention - Deep Client Understanding.mp4", resources: [] },
          { id: "ev12-4", title: "Retention - The Importance Of First Impressions", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/4. Retention - The Importance Of First Impressions.mp4", resources: [] },
          { id: "ev12-5", title: "Retention - Communication (Part 1)", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/5. Retention - Communication (Part 1).mp4", resources: [] },
          { id: "ev12-6", title: "Retention - Communication (Part 2)", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/6. Retention - Communication (Part 2).mp4", resources: [] },
          { id: "ev12-7", title: "Retention - Communication (Part 3)", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/7. Retention - Communication (Part 3).mp4", resources: [] },
          { id: "ev12-8", title: "Retention - Communication (Part 4)", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/8. Retention - Communication (Part 4).mp4", resources: [] },
          { id: "ev12-9", title: "Retention - Communication (Part 5)", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/9. Retention - Communication (Part 5).mp4", resources: [] },
          { id: "ev12-10", title: "Retention - Communication (Part 6)", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/10. Retention - Communication (Part 6).mp4", resources: [] },
          { id: "ev12-11", title: "Leveraging New Mechanisms", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/11. Leveraging New Mechanisms.mp4", resources: [] },
          { id: "ev12-12", title: "Retention - Calling For Help", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/12. Retention - Calling For Help.mp4", resources: [] },
          { id: "ev12-13", title: "Retention - Setting Expectations", duration: "15m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/13. Retention - ﻿﻿Setting Expectations.mp4", resources: [] },
          { id: "ev12-14", title: "Retention - Just Give A", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/14. Retention - ﻿﻿Just Give A.mp4", resources: [] },
          { id: "ev12-15", title: "Retention - Death By a Thousand Cuts", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/15. Retention - ﻿﻿Death By a Thousand Cuts.mp4", resources: [] },
          { id: "ev12-16", title: "Retention - When To Upsell & Propose Services", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/16. Retention - ﻿﻿When To Upsell & Propose Services.mp4", resources: [] },
          { id: "ev12-17", title: "Retention Masterclass - Recap", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/13. Evolve - Agency Edition (from old version of Evolve)/17. Retention Masterclass - Recap.mp4", resources: [] },
          { id: "ev12-18", title: "#Evolve - Agency Edition", duration: "", src: "", resources: [] }
        ],
      },
      {
        id: "ev13",
        title: "Evolve AI (Legacy)",
        sections: [
          {
            id: "ev13-s1",
            title: "Overview of AI Program",
            lessons: [
              { id: "ev13-s1-1", title: "🆕 October 2025 - AI Program Overview", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/1.Overview of AI Program/🆕 October 2025 - AI Program Overview - 🤖 Evolve AI · Evolve (online-video-cutter.com).mp4", resources: [] }
            ],
          },
          {
            id: "ev13-s2",
            title: "🛠️ Tools & Set Up",
            lessons: [
              { id: "ev13-s2-1", title: "My 1 AI Hack", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/2.🛠️ Tools & Set Up/1.My 1 AI Hack - Evolve AI Evolve.mp4", resources: [] },
              { id: "ev13-s2-2", title: "Claude AI vs Chat GPT", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/2.🛠️ Tools & Set Up/2.Claude AI vs Chat GPT.mp4", resources: [] },
              { id: "ev13-s2-3", title: "How To Optimize Claude", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/2.🛠️ Tools & Set Up/3.How To Optimize Claude.mp4", resources: [] },
              { id: "ev13-s2-4", title: "🆕 How To Use Claude Projects", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/2.🛠️ Tools & Set Up/4.🆕 How To Use Claude Projects.mp4", resources: [] },
              { id: "ev13-s2-5", title: "🆕 Google Ai Studio - Video + Ad Review", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/2.🛠️ Tools & Set Up/5.🆕 Google Ai Studio - Video + Ad Review.mp4", resources: [] },
              { id: "ev13-s2-6", title: "How To Make Personas Avatars With Claude", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/2.🛠️ Tools & Set Up/6.How To Make Personas Avatars With Claude - 🤖 Evolve AI · Evolve.mp4", resources: [] },
              { id: "ev13-s2-7", title: "Multiple PersonasAvatars With Claude", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/2.🛠️ Tools & Set Up/7.Multiple PersonasAvatars With Claude.mp4", resources: [] },
              { id: "ev13-s2-8", title: "Organize For Best Reviews (500+ Reviews)", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/2.🛠️ Tools & Set Up/8.Organize For Best Reviews (500+ Reviews).mp4", resources: [] }
            ],
          },
          {
            id: "ev13-s3",
            title: "✍️ Ad Briefs & Scripts",
            lessons: [
              { id: "ev13-s3-1", title: "🆕 How To Optimize Your Own Prompts", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/1.🆕 How To Optimize Your Own Prompts.mp4", resources: [] },
              { id: "ev13-s3-2", title: "How To Write Basic AI Static Ads", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/3.How To Write Basic AI Static Ads.mp4", resources: [] },
              { id: "ev13-s3-3", title: "How To Write Banger AI Static Ads - Part 1", duration: "8m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/4.How To Write Banger AI Static Ads - Part 1.mp4", resources: [] },
              { id: "ev13-s3-4", title: "How To Write Banger AI Static Ads - Part 2", duration: "2m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/5.How To Write Banger AI Static Ads - Part 2.mp4", resources: [] },
              { id: "ev13-s3-5", title: "How To Get Inspo & Insights From Reviews", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/6.How To Get Inspo & Insights From Reviews.mp4", resources: [] },
              { id: "ev13-s3-6", title: "How To Get HeadlinesHooks From Reviews", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/7.How To Get HeadlinesHooks From Reviews.mp4", resources: [] },
              { id: "ev13-s3-7", title: "AI Viral Video Ads With Voiceover - Part 1", duration: "18m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/9.AI Viral Video Ads With Voiceover - Part 1.mp4", resources: [] },
              { id: "ev13-s3-8", title: "AI Viral Video Ads With Voiceover - Part 2", duration: "3m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/10.AI Viral Video Ads With Voiceover - Part 2.mp4", resources: [] },
              { id: "ev13-s3-9", title: "AI Viral Video Ads With Voiceover - Part 3", duration: "6m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/11.AI Viral Video Ads With Voiceover - Part 3.mp4", resources: [] },
              { id: "ev13-s3-10", title: "How To Write AI UGC Briefs", duration: "13m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/12.How To Write AI UGC Briefs.mp4", resources: [] },
              { id: "ev13-s3-11", title: "How To Use ElevenLabs For Voiceovers", duration: "42m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/3.✍️ Ad Briefs & Scripts/13.How To Use ElevenLabs For Voiceovers.mp4", resources: [] }
            ],
          },
          {
            id: "ev13-s4",
            title: "📸 Ad Content",
            lessons: [
              { id: "ev13-s4-1", title: "🆕 How To Train Editors On AI (Getting Content)", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/4.📸 Ad Content/1.🆕 How To Train Editors On AI (Getting Content).mp4", resources: [] }
            ],
          },
          {
            id: "ev13-s6",
            title: "🧠 Additional AI Tools",
            lessons: [
              { id: "ev13-s6-1", title: "FreeAdCopy.com - Unlimited AI Copywriting", duration: "11m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/6.🧠 Additional AI Tools/1.FreeAdCopy.com - Unlimited AI Copywriting.mp4", resources: [] },
              { id: "ev13-s6-2", title: "Recharm - AI Content Organization - Part 1", duration: "7m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/6.🧠 Additional AI Tools/2.Recharm - AI Content Organization - Part 1.mp4", resources: [] },
              { id: "ev13-s6-3", title: "Recharm - AI Content Organization - Part 2", duration: "5m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/6.🧠 Additional AI Tools/3.Recharm - AI Content Organization - Part 2.mp4", resources: [] },
              { id: "ev13-s6-4", title: "🆕 Kitchn.io - AI Tool to Launch Ads Faster", duration: "9m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/6.🧠 Additional AI Tools/4.🆕 Kitchn.io - AI Tool to Launch Ads Faster.mp4", resources: [] },
              { id: "ev13-s6-5", title: "🆕 Otto SEO - AI Search Engine Optimization Tool", duration: "4m", src: "Evolve E-Commerce by Spencer Pawliw/14.Evolve AI (from old version of Evolve)/6.🧠 Additional AI Tools/5.🆕 Otto SEO - AI Search Engine Optimization Tool.mp4", resources: [] }
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
          {
            id: "hte1-1",
            title: "High Ticket E-Commerce Program",
            duration: "3m",
            src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/00-High Ticket E-Commerce Program.mp4",
            resources: [
              {
                name: "High Ticket E-Commerce Program.pdf",
                size: "155 KB",
                key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/00-High Ticket E-Commerce Program.pdf",
              }
            ],
          }
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
                  {
                    id: "hte1-s1-s1-1",
                    title: "Complete Welcome Survey",
                    duration: "",
                    src: "",
                    resources: [],
                  },
                  {
                    id: "hte1-s1-s1-2",
                    title: "Your Voice Matters- Creating Your Success Profile",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/02-Your Voice Matters- Creating Your Success Profile.mp4",
                    resources: [
                      {
                        name: "Your Voice Matters- Creating Your Success Profile.pdf",
                        size: "195 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/02-Your Voice Matters- Creating Your Success Profile.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s1-s1-3",
                    title: "Slack Overview- 1 on 1 Students Only",
                    duration: "",
                    src: "",
                    resources: [],
                  },
                  {
                    id: "hte1-s1-s1-4",
                    title: "Done For You Options Optional Upgrades",
                    duration: "",
                    src: "",
                    resources: [],
                  },
                  {
                    id: "hte1-s1-s1-5",
                    title: "Customer Support",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/05-Customer Support .mp4",
                    resources: [
                      {
                        name: "Customer Support.pdf",
                        size: "133 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/05-Customer Support.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s1-s1-6",
                    title: "HTE Community",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/06-HTE Community.mp4",
                    resources: [
                      {
                        name: "HTE Community.pdf",
                        size: "160 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/06-HTE Community.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s1-s1-7",
                    title: "QA Coaching Calls",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/07-QA Coaching Calls .mp4",
                    resources: [],
                  },
                  {
                    id: "hte1-s1-s1-8",
                    title: "60 Day Launch Plan Recommended",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/08-60 Day Launch Plan Recommended .mp4",
                    resources: [
                      {
                        name: "60 Day Launch Plan Recommended.pdf",
                        size: "74 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/08-60 Day Launch Plan Recommended.pdf",
                      },
                      {
                        name: "High Ticket 60 Day Launch Plan.xlsx",
                        size: "15 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/08-High Ticket 60 Day Launch Plan.xlsx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s1-s1-9",
                    title: "21 Day Launch Plan Optional",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/09- 21 Day Launch Plan Optional .mp4",
                    resources: [
                      {
                        name: "21 Day Launch Plan Optional.pdf",
                        size: "146 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/09- 21 Day Launch Plan Optional.pdf",
                      },
                      {
                        name: "21 Day Launch Plan.xlsx",
                        size: "50 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/09-21 Day Launch Plan.xlsx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s1-s1-10",
                    title: "Supplier HQ",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/10- Supplier HQ.mp4",
                    resources: [
                      {
                        name: "Supplier HQ.pdf",
                        size: "172 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/10- Supplier HQ.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s1-s1-11",
                    title: "Bonuses",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/11- Bonuses .mp4",
                    resources: [
                      {
                        name: "Bonuses.pdf",
                        size: "166 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/11- Bonuses.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s1-s1-12",
                    title: "Student Success Hub",
                    duration: "",
                    src: "",
                    resources: [],
                  },
                  {
                    id: "hte1-s1-s1-13",
                    title: "Affiliate Program",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/13- Affiliate Program.mp4",
                    resources: [
                      {
                        name: "Affiliate Program.pdf",
                        size: "133 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/01-Section 1- Onboarding/13- Affiliate Program.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s1-s2",
                title: "Section 2- Module Completion",
                lessons: [
                  {
                    id: "hte1-s1-s2-1",
                    title: "Module Feedback Progress Tracking",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/02- Section 2- Module Completion/01-Module Feedback Progress Tracking .mp4",
                    resources: [
                      {
                        name: "Module Feedback Progress Tracking.pdf",
                        size: "148 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/02- Section 2- Module Completion/01-Module Feedback Progress Tracking.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s1-s2-2",
                    title: "Complete Module Checklist",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/02- Section 2- Module Completion/02-Complete Module Checklist .mp4",
                    resources: [
                      {
                        name: "Complete Module Checklist.pdf",
                        size: "133 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/02- Section 2- Module Completion/02-Complete Module Checklist.pdf",
                      },
                      {
                        name: "Module Checklist NV.xlsx",
                        size: "125 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/01-0 - Onboarding/02- Section 2- Module Completion/02-Module Checklist NV.xlsx",
                      }
                    ],
                  }
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
                  {
                    id: "hte1-s2-s1-1",
                    title: "Introduction to HTE Academy",
                    duration: "31m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/01-Introduction to HTE Academy.mp4",
                    resources: [
                      {
                        name: "Introduction to HTE Academy.pdf",
                        size: "1.2 MB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/01-Introduction to HTE Academy.pdf",
                      },
                      {
                        name: "Introduction to HTE Academy.pptx",
                        size: "19.5 MB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/01-Introduction to HTE Academy.pptx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s2-s1-2",
                    title: "Using AI to Supercharge Your E-Commerce Business",
                    duration: "20m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/02-Using AI to Supercharge Your E-Commerce Business .mp4",
                    resources: [
                      {
                        name: "Using AI to Supercharge Your E-Commerce Business.pdf",
                        size: "427 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/02-Using AI to Supercharge Your E-Commerce Business.pdf",
                      },
                      {
                        name: "Using AI to Supercharge Your E-Commerce Business.pptx",
                        size: "30.0 MB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/02-Using AI to Supercharge Your E-Commerce Business.pptx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s2-s1-3",
                    title: "The Hard Truth Behind Success",
                    duration: "23m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/03- The Hard Truth Behind Success .mp4",
                    resources: [
                      {
                        name: "The Hard Truth Behind Success.pdf",
                        size: "883 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/03- The Hard Truth Behind Success.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s2-s1-4",
                    title: "Successful Entrepreneur Mindset",
                    duration: "15m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/04- Successful Entrepreneur Mindset .mp4",
                    resources: [
                      {
                        name: "Successful Entrepreneur Mindset.pdf",
                        size: "399 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/04- Successful Entrepreneur Mindset.pdf",
                      },
                      {
                        name: "Successful Entrepreneur Mindset.pptx",
                        size: "23.7 MB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/04-Successful Entrepreneur Mindset.pptx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s2-s1-5",
                    title: "Successful Entrepreneur Habits",
                    duration: "27m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/05- Successful Entrepreneur Habits .mp4",
                    resources: [
                      {
                        name: "Successful Entrepreneur Habits.pdf",
                        size: "327 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/05- Successful Entrepreneur Habits.pdf",
                      },
                      {
                        name: "Successful Entrepreneur Habits.pptx",
                        size: "48.8 MB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/05-Successful Entrepreneur Habits.pptx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s2-s1-6",
                    title: "Work-Life Balance",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/06- Work-Life Balance .mp4",
                    resources: [
                      {
                        name: "Work-Life Balance.pdf",
                        size: "300 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/06- Work-Life Balance.pdf",
                      },
                      {
                        name: "Work Life Balance.pptx",
                        size: "8.0 MB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/06-Work_Life Balance.pptx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s2-s1-7",
                    title: "Wrap Up Action Items",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/07-Wrap Up Action Items .mp4",
                    resources: [
                      {
                        name: "Wrap Up Action Items.pdf",
                        size: "310 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/07-Wrap Up Action Items.pdf",
                      },
                      {
                        name: "Wrap Up Action Items.pptx",
                        size: "9.9 MB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/01-Section 1- Millionaire Mindset/07-Wrap Up Action Items.pptx",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s2-s2",
                title: "Section 2- Module Completion",
                lessons: [
                  {
                    id: "hte1-s2-s2-1",
                    title: "Complete Module Checklist",
                    duration: "1m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/02-Section 2- Module Completion/01-Complete Module Checklist.mp4",
                    resources: [],
                  },
                  {
                    id: "hte1-s2-s2-2",
                    title: "Module Feedback Progress Tracking",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/02-1 - Millionaire Mindset/02-Section 2- Module Completion/02- Module Feedback Progress Tracking .mp4",
                    resources: [],
                  }
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
                  {
                    id: "hte1-s3-s1-1",
                    title: "Module Overview",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/01-2 - Business Set Up/01-Module Overview .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte1-s3-s2",
                title: "Section 1- Overview",
                lessons: [
                  {
                    id: "hte1-s3-s2-1",
                    title: "Operating as a Sole Proprietor",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/02- Section 1- Overview/01-Operating as a Sole Proprietor .mp4",
                    resources: [
                      {
                        name: "Operating as a Sole Proprietor.pdf",
                        size: "150 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/02- Section 1- Overview/01-Operating as a Sole Proprietor.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s3-s2-2",
                    title: "Introduction to Doola",
                    duration: "1m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/02- Section 1- Overview/02- Introduction to Doola .mp4",
                    resources: [],
                  },
                  {
                    id: "hte1-s3-s2-3",
                    title: "Free Consult with Doola",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/02- Section 1- Overview/03-Free Consult with Doola .mp4",
                    resources: [
                      {
                        name: "Free Consult with Doola.pdf",
                        size: "129 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/02- Section 1- Overview/03-Free Consult with Doola.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s3-s2-4",
                    title: "What If You Have Existing Business",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/02- Section 1- Overview/04-What If You Have Existing Business .mp4",
                    resources: [
                      {
                        name: "What If You Have Existing Business.pdf",
                        size: "138 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/02- Section 1- Overview/04-What If You Have Existing Business.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s3-s2-5",
                    title: "What Countries Can You Do HTE From",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/02- Section 1- Overview/05- What Countries Can You Do HTE From .mp4",
                    resources: [
                      {
                        name: "What Countries Can You Do HTE From.pdf",
                        size: "135 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/02- Section 1- Overview/05- What Countries Can You Do HTE From.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s3-s3",
                title: "Section 2- Country Specific Guidance",
                lessons: [
                  {
                    id: "hte1-s3-s3-1",
                    title: "Overview of Section",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/03-Section 2- Country Specific Guidance/01-Overview of Section.mp4",
                    resources: [
                      {
                        name: "Overview of Section.pdf",
                        size: "111 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/03-Section 2- Country Specific Guidance/01-Overview of Section.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s3-s3-2",
                    title: "USA Citizens Setting up in USA",
                    duration: "18m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/03-Section 2- Country Specific Guidance/02- USA Citizens Setting up in USA .mp4",
                    resources: [
                      {
                        name: "USA Citizens Setting up in USA.pdf",
                        size: "171 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/03-Section 2- Country Specific Guidance/02- USA Citizens Setting up in USA.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s3-s3-3",
                    title: "International Citizens Setting up in USA",
                    duration: "16m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/03-Section 2- Country Specific Guidance/03- International Citizens Setting up in USA .mp4",
                    resources: [
                      {
                        name: "International Citizens Setting up in USA.pdf",
                        size: "165 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/03-Section 2- Country Specific Guidance/03- International Citizens Setting up in USA.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s3-s3-4",
                    title: "Canadians Selling in USA",
                    duration: "10m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/03-Section 2- Country Specific Guidance/04- Canadians Selling in USA .mp4",
                    resources: [
                      {
                        name: "Canadians Selling in USA.pdf",
                        size: "162 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/03-Section 2- Country Specific Guidance/04- Canadians Selling in USA.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s3-s3-5",
                    title: "International Students Selling Internationally",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/03-Section 2- Country Specific Guidance/05- International Students Selling Internationally .mp4",
                    resources: [
                      {
                        name: "International Students Selling Internationally.pdf",
                        size: "128 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/03-Section 2- Country Specific Guidance/05- International Students Selling Internationally.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s3-s4",
                title: "Section 3- Launch Essentials",
                lessons: [
                  {
                    id: "hte1-s3-s4-1",
                    title: "Business Launch Essentials",
                    duration: "15m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/04-Section 3- Launch Essentials/01-Business Launch Essentials.mp4",
                    resources: [
                      {
                        name: "Business Launch Essentials.pdf",
                        size: "109 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/04-Section 3- Launch Essentials/01-Business Launch Essentials.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s3-s4-2",
                    title: "Budgeting Properly from Day 1",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/04-Section 3- Launch Essentials/02-Budgeting Properly from Day 1.mp4",
                    resources: [
                      {
                        name: "Budgeting Properly from Day 1.pdf",
                        size: "111 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/04-Section 3- Launch Essentials/02-Budgeting Properly from Day 1.pdf",
                      },
                      {
                        name: "Profit Tracking Template.xlsx",
                        size: "102 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/03- 2 - Business Set Up/04-Section 3- Launch Essentials/02-Profit Tracking Template.xlsx",
                      }
                    ],
                  }
                ],
              }
            ],
          },
          {
            id: "hte1-s4",
            title: "3 - Choosing Your Niche",
            lessons: [
              {
                id: "hte1-s4-1",
                title: "Module Overview",
                duration: "4m",
                src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/00- Module Overview .mp4",
                resources: [],
              }
            ],
            sections: [
              {
                id: "hte1-s4-s1",
                title: "Section 1- Broad vs Narrow Focus Stores",
                lessons: [
                  {
                    id: "hte1-s4-s1-1",
                    title: "Niche vs Theme vs Broad- Whats The Difference",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/01-Section 1- Broad vs Narrow Focus Stores/01- Niche vs Theme vs Broad- Whats The Difference .mp4",
                    resources: [
                      {
                        name: "Niche vs Theme vs Broad- Whats The Difference.pdf",
                        size: "97 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/01-Section 1- Broad vs Narrow Focus Stores/01- Niche vs Theme vs Broad- Whats The Difference.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s4-s2",
                title: "Section 2- Preparing for Niche Research",
                lessons: [
                  {
                    id: "hte1-s4-s2-1",
                    title: "The Niche Goldmine How to Use It",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/02-Section 2- Preparing for Niche Research/01-The Niche Goldmine How to Use It.mp4",
                    resources: [
                      {
                        name: "The Niche Goldmine How to Use It.pdf",
                        size: "100 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/02-Section 2- Preparing for Niche Research/01-The Niche Goldmine How to Use It.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s2-2",
                    title: "Supplier HQ For Niche Selection",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/02-Section 2- Preparing for Niche Research/02- Supplier HQ For Niche Selection .mp4",
                    resources: [
                      {
                        name: "Supplier HQ For Niche Selection.pdf",
                        size: "111 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/02-Section 2- Preparing for Niche Research/02- Supplier HQ For Niche Selection.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s2-3",
                    title: "Google Shopping for Niche Research",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/02-Section 2- Preparing for Niche Research/03- Google Shopping for Niche Research .mp4",
                    resources: [
                      {
                        name: "Google Shopping for Niche Research.pdf",
                        size: "109 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/02-Section 2- Preparing for Niche Research/03- Google Shopping for Niche Research.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s2-4",
                    title: "100 HTE Stores Doing 200000-Month",
                    duration: "",
                    src: "",
                    resources: [],
                  },
                  {
                    id: "hte1-s4-s2-5",
                    title: "Creating Your Niche Research Sheet",
                    duration: "11m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/02-Section 2- Preparing for Niche Research/05- Creating Your Niche Research Sheet .mp4",
                    resources: [
                      {
                        name: "Creating Your Niche Research Sheet.pdf",
                        size: "109 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/02-Section 2- Preparing for Niche Research/05- Creating Your Niche Research Sheet.pdf",
                      },
                      {
                        name: "HTE Market Research 2024.xlsx",
                        size: "322 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/02-Section 2- Preparing for Niche Research/05-HTE Market Research _ 2024.xlsx",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s4-s3",
                title: "Section 3- Niche Research",
                lessons: [
                  {
                    id: "hte1-s4-s3-1",
                    title: "Finding Successful Competitors Using Google Shopping",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/01-Finding Successful Competitors Using Google Shopping.mp4",
                    resources: [
                      {
                        name: "Finding Successful Competitors Using Google Shopping.pdf",
                        size: "108 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/01-Finding Successful Competitors Using Google Shopping.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s3-2",
                    title: "Ideal Price Point Explained",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/02- Ideal Price Point Explained .mp4",
                    resources: [
                      {
                        name: "Ideal Price Point Explained.pdf",
                        size: "113 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/02- Ideal Price Point Explained.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s3-3",
                    title: "Product Demand- Sell What People Want to Buy",
                    duration: "",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/03- Product Demand- Sell What People Want to Buy.mp4",
                    resources: [
                      {
                        name: "Product Demand- Sell What People Want to Buy.pdf",
                        size: "101 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/03- Product Demand- Sell What People Want to Buy.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s3-4",
                    title: "Seasonality- Avoid Huge Swings in Sales",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/04- Seasonality- Avoid Huge Swings in Sales .mp4",
                    resources: [
                      {
                        name: "Seasonality- Avoid Huge Swings in Sales.pdf",
                        size: "100 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/04- Seasonality- Avoid Huge Swings in Sales.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s3-5",
                    title: "10 Brands with Branded Demand",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/05- 10 Brands with Branded Demand .mp4",
                    resources: [
                      {
                        name: "10 Brands with Branded Demand.pdf",
                        size: "89 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/05- 10 Brands with Branded Demand.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s3-6",
                    title: "Narrowing Your List Down",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/06-Narrowing Your List Down .mp4",
                    resources: [
                      {
                        name: "Narrowing Your List Down.pdf",
                        size: "100 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/03-Section 3- Niche Research/06-Narrowing Your List Down.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s4-s4",
                title: "Section 4- Selecting Your Niche",
                lessons: [
                  {
                    id: "hte1-s4-s4-1",
                    title: "Mini Section Overview",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/04-Section 4- Selecting Your Niche/01- Mini Section Overview .mp4",
                    resources: [
                      {
                        name: "Mini Section Overview.pdf",
                        size: "102 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/04-Section 4- Selecting Your Niche/01- Mini Section Overview.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s4-2",
                    title: "Choosing Your Own Niche Course-Only Students",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/04-Section 4- Selecting Your Niche/02- Choosing Your Own Niche Course-Only Students .mp4",
                    resources: [
                      {
                        name: "Choosing Your Own Niche Course-Only Students.pdf",
                        size: "95 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/04-Section 4- Selecting Your Niche/02- Choosing Your Own Niche Course-Only Students.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s4-3",
                    title: "Submitting Your Niche Research - Golden Stamp Product Approval Accelerator Students",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/04-Section 4- Selecting Your Niche/03-Submitting Your Niche Research - Golden Stamp Product Approval Accelerator Students .mp4",
                    resources: [
                      {
                        name: "Submitting Your Niche Research - Golden Stamp Product Approval Accelerator Students.pdf",
                        size: "105 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/04-Section 4- Selecting Your Niche/03-Submitting Your Niche Research - Golden Stamp Product Approval Accelerator Students.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s4-s4-4",
                    title: "Submitting Your Niche Research Incubator-1 on 1 Slack Students",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/04-Section 4- Selecting Your Niche/04- Submitting Your Niche Research Incubator-1 on 1 Slack Students .mp4",
                    resources: [
                      {
                        name: "Submitting Your Niche Research Incubator-1 on 1 Slack Students.pdf",
                        size: "116 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/04-3 - Choosing Your Niche/04-Section 4- Selecting Your Niche/04- Submitting Your Niche Research Incubator-1 on 1 Slack Students.pdf",
                      }
                    ],
                  }
                ],
              }
            ],
          },
          {
            id: "hte1-s5",
            title: "4 - Suppliers Distributors",
            lessons: [
              {
                id: "hte1-s5-1",
                title: "Module Overview",
                duration: "3m",
                src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/00-Module Overview.mp4",
                resources: [],
              }
            ],
            sections: [
              {
                id: "hte1-s5-s1",
                title: "Section 1- Introduction to Suppliers",
                lessons: [
                  {
                    id: "hte1-s5-s1-1",
                    title: "What Makes an A Supplier",
                    duration: "11m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/01-Section 1- Introduction to Suppliers/01-What Makes an A Supplier.mp4",
                    resources: [
                      {
                        name: "What Makes an A Supplier.pdf",
                        size: "119 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/01-Section 1- Introduction to Suppliers/01-What Makes an A Supplier.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s5-s1-2",
                    title: "What is Supplier HQ How to Use It",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/01-Section 1- Introduction to Suppliers/02-What is Supplier HQ How to Use It.mp4",
                    resources: [
                      {
                        name: "What is Supplier HQ How to Use It.pdf",
                        size: "126 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/01-Section 1- Introduction to Suppliers/02-What is Supplier HQ How to Use It.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s5-s2",
                title: "Section 2- Supplier Research",
                lessons: [
                  {
                    id: "hte1-s5-s2-1",
                    title: "Compiling Your Supplier List",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/01-Compiling Your Supplier List.mp4",
                    resources: [
                      {
                        name: "Compiling Your Supplier List.pdf",
                        size: "122 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/01-Compiling Your Supplier List.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s5-s2-2",
                    title: "Supplier HQ for Supplier Research",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/02-Supplier HQ for Supplier Research .mp4",
                    resources: [
                      {
                        name: "Supplier HQ for Supplier Research.pdf",
                        size: "128 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/02-Supplier HQ for Supplier Research.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s5-s2-3",
                    title: "Finding Brand Price Point",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/03- Finding Brand Price Point .mp4",
                    resources: [
                      {
                        name: "Finding Brand Price Point.pdf",
                        size: "139 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/03- Finding Brand Price Point.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s5-s2-4",
                    title: "Minimum Advertised Price MAP",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/04- Minimum Advertised Price MAP.mp4",
                    resources: [
                      {
                        name: "Minimum Advertised Price MAP.pdf",
                        size: "146 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/04- Minimum Advertised Price MAP.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s5-s2-5",
                    title: "Branded Search Demand",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/05-Branded Search Demand.mp4",
                    resources: [
                      {
                        name: "Branded Search Demand.pdf",
                        size: "130 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/05-Branded Search Demand.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s5-s2-6",
                    title: "Brand by Brand Competition",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/06-Brand by Brand Competition .mp4",
                    resources: [
                      {
                        name: "Brand by Brand Competition.pdf",
                        size: "109 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/02-Section 2- Supplier Research/06-Brand by Brand Competition.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s5-s3",
                title: "Section 3- Distributor Research",
                lessons: [
                  {
                    id: "hte1-s5-s3-1",
                    title: "Distributors- What They Are",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/03-Section 3- Distributor Research/01-Distributors- What They Are.mp4",
                    resources: [
                      {
                        name: "Distributors- What They Are.pdf",
                        size: "101 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/03-Section 3- Distributor Research/01-Distributors- What They Are.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s5-s3-2",
                    title: "Supplier HQ For Distributors",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/03-Section 3- Distributor Research/02-Supplier HQ For Distributors .mp4",
                    resources: [
                      {
                        name: "Supplier HQ For Distributors.pdf",
                        size: "85 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/03-Section 3- Distributor Research/02-Supplier HQ For Distributors.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s5-s3-3",
                    title: "How to Find Distributors Manually",
                    duration: "17m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/03-Section 3- Distributor Research/03-How to Find Distributors Manually .mp4",
                    resources: [
                      {
                        name: "How to Find Distributors Manually.pdf",
                        size: "101 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/03-Section 3- Distributor Research/03-How to Find Distributors Manually.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s5-s4",
                title: "Section 4- Finalizing Your Lists",
                lessons: [
                  {
                    id: "hte1-s5-s4-1",
                    title: "Finalizing Your Supplier List",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/04-Section 4- Finalizing Your Lists/01-Finalizing Your Supplier List.mp4",
                    resources: [
                      {
                        name: "Finalizing Your Supplier List.pdf",
                        size: "105 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/04-Section 4- Finalizing Your Lists/01-Finalizing Your Supplier List.pdf",
                      },
                      {
                        name: "Supplier List.xlsx",
                        size: "5 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/04-Section 4- Finalizing Your Lists/01-Supplier List.xlsx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s5-s4-2",
                    title: "Finalizing Your Distributor List",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/04-Section 4- Finalizing Your Lists/02-Finalizing Your Distributor List .mp4",
                    resources: [
                      {
                        name: "Finalizing Your Distributor List.pdf",
                        size: "104 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/04-Section 4- Finalizing Your Lists/02-Finalizing Your Distributor List.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s5-s4-3",
                    title: "Where to Start Your Outreach",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/04-Section 4- Finalizing Your Lists/03- Where to Start Your Outreach .mp4",
                    resources: [
                      {
                        name: "Where to Start Your Outreach.pdf",
                        size: "100 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/05-4 - Suppliers Distributors/04-Section 4- Finalizing Your Lists/03- Where to Start Your Outreach.pdf",
                      }
                    ],
                  }
                ],
              }
            ],
          },
          {
            id: "hte1-s6",
            title: "5 - Shopify-Virtual Showroom",
            lessons: [
              {
                id: "hte1-s6-1",
                title: "Module Overview",
                duration: "2m",
                src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/00-Module Overview.mp4",
                resources: [],
              }
            ],
            sections: [
              {
                id: "hte1-s6-s1",
                title: "Section 1- Preliminary Set Up Requirements",
                lessons: [
                  {
                    id: "hte1-s6-s1-1",
                    title: "Choosing Your Store Name",
                    duration: "14m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/01-Choosing Your Store Name.mp4",
                    resources: [
                      {
                        name: "Choosing Your Store Name.pdf",
                        size: "98 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/01-Choosing Your Store Name.pdf",
                      },
                      {
                        name: "Shopify Store Name Ideas.xlsx",
                        size: "50 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/01-Shopify Store Name Ideas.xlsx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s1-2",
                    title: "Book Your Optional Tech Setup Call Incubator and Incubator Only",
                    duration: "1m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/02-Book Your Optional Tech Setup Call Incubator and Incubator Only.mp4",
                    resources: [
                      {
                        name: "Book Your Optional Tech Setup Call Incubator and Incubator Only.pdf",
                        size: "27 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/02-Book Your Optional Tech Setup Call Incubator and Incubator Only.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s1-3",
                    title: "Buying a Domain-URL",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/03- Buying a Domain-URL .mp4",
                    resources: [
                      {
                        name: "Buying a Domain-URL.pdf",
                        size: "96 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/03- Buying a Domain-URL.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s1-4",
                    title: "Creating a Shopify Account",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/04-Creating a Shopify Account.mp4",
                    resources: [
                      {
                        name: "Creating a Shopify Account.pdf",
                        size: "104 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/04-Creating a Shopify Account.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s1-5",
                    title: "Setting Up Your Google Workspace",
                    duration: "29m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/05-Setting Up Your Google Workspace .mp4",
                    resources: [
                      {
                        name: "Setting Up Your Google Workspace.pdf",
                        size: "110 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/05-Setting Up Your Google Workspace.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s1-6",
                    title: "Choosing a Store Theme Adding to Shopify",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/06-Choosing a Store Theme Adding to Shopify .mp4",
                    resources: [
                      {
                        name: "Choosing a Store Theme Adding to Shopify.pdf",
                        size: "102 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/06-Choosing a Store Theme Adding to Shopify.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s1-7",
                    title: "Designing Your Logo",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/07-Designing Your Logo .mp4",
                    resources: [
                      {
                        name: "Designing Your Logo.pdf",
                        size: "93 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/01-Section 1- Preliminary Set Up Requirements/07-Designing Your Logo.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s6-s2",
                title: "Section 2- Done For You Website Option",
                lessons: [
                  {
                    id: "hte1-s6-s2-1",
                    title: "Done For You Website",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/02-Section 2- Done For You Website Option/01-Done For You Website.mp4",
                    resources: [
                      {
                        name: "Done For You Website.pdf",
                        size: "106 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/02-Section 2- Done For You Website Option/01-Done For You Website.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s6-s3",
                title: "Section 3- Setting up MVP Website",
                lessons: [
                  {
                    id: "hte1-s6-s3-1",
                    title: "The Concept of Modeling after Successful Stores",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/01- The Concept of Modeling after Successful Stores .mp4",
                    resources: [
                      {
                        name: "The Concept of Modeling after Successful Stores.pdf",
                        size: "104 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/01- The Concept of Modeling after Successful Stores.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-2",
                    title: "Must Have Shopify Apps",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/02- Must Have Shopify Apps .mp4",
                    resources: [
                      {
                        name: "Must Have Shopify Apps.pdf",
                        size: "102 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/02-Must Have Shopify Apps.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-3",
                    title: "Shopify Store Settings",
                    duration: "27m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/03-Shopify Store Settings .mp4",
                    resources: [
                      {
                        name: "Shopify Store Settings.pdf",
                        size: "103 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/03-Shopify Store Settings.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-4",
                    title: "Setting up Store Policies",
                    duration: "",
                    src: "",
                    resources: [
                      {
                        name: "Policy Templates docs2.docx",
                        size: "195 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/04-Policy Templates docs2.docx",
                      },
                      {
                        name: "Policy Templates docs3.docx",
                        size: "194 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/04-Policy Templates docs3.docx",
                      },
                      {
                        name: "Policy Templates docs4.docx",
                        size: "194 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/04-Policy Templates docs4.docx",
                      },
                      {
                        name: "Policy Templates docs5.docx",
                        size: "195 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/04-Policy Templates docs5.docx",
                      },
                      {
                        name: "Policy Templates docs6.docx",
                        size: "193 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/04-Policy Templates docs6.docx",
                      },
                      {
                        name: "Policy Templates docs7.docx",
                        size: "12 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/04-Policy Templates docs7.docx",
                      },
                      {
                        name: "Policy Templates docs8.docx",
                        size: "195 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/04-Policy Templates docs8.docx",
                      },
                      {
                        name: "Policy Templates docs9.docx",
                        size: "195 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/04-Policy Templates docs9.docx",
                      },
                      {
                        name: "Policy Templates.docx",
                        size: "7 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/04-Policy Templates.docx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-5",
                    title: "Minimum Viable Website",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/05-Minimum Viable Website .mp4",
                    resources: [
                      {
                        name: "Minimum Viable Website.pdf",
                        size: "104 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/05-Minimum Viable Website.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-6",
                    title: "Colors Typography",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/06- Colors Typography.mp4",
                    resources: [
                      {
                        name: "Colors Typography.pdf",
                        size: "114 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/06- Colors Typography.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-7",
                    title: "Creating Your Menu",
                    duration: "16m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/07-Creating Your Menu.mp4",
                    resources: [
                      {
                        name: "Creating Your Menu.pdf",
                        size: "108 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/07-Creating Your Menu.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-8",
                    title: "Creating Announcement Bar",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/08- Creating Announcement Bar .mp4",
                    resources: [
                      {
                        name: "Creating Announcement Bar.pdf",
                        size: "110 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/08- Creating Announcement Bar.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-9",
                    title: "Building Your Home Page",
                    duration: "19m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/09-Building Your Home Page .mp4",
                    resources: [
                      {
                        name: "Building Your Home Page.pdf",
                        size: "126 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/09-Building Your Home Page.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-10",
                    title: "Contact Us Page",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/10-Contact Us Page .mp4",
                    resources: [
                      {
                        name: "Contact Us Page.pdf",
                        size: "96 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/10-Contact Us Page.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-11",
                    title: "About Us Page",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/11-About Us Page .mp4",
                    resources: [
                      {
                        name: "About Us Page.pdf",
                        size: "105 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/11-About Us Page.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-12",
                    title: "Footer Creation",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/12- Footer Creation .mp4",
                    resources: [
                      {
                        name: "Footer Creation.pdf",
                        size: "107 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/12- Footer Creation.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-13",
                    title: "Building Collection Pages",
                    duration: "17m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/13- Building Collection Pages .mp4",
                    resources: [
                      {
                        name: "Building Collection Pages.pdf",
                        size: "103 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/13-Building Collection Pages.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-14",
                    title: "Adding Demo Products",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/14-Adding Demo Products .mp4",
                    resources: [
                      {
                        name: "Adding Demo Products.pdf",
                        size: "100 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/14-Adding Demo Products.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-15",
                    title: "Setting up Product Pages",
                    duration: "13m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/15-Setting up Product Pages.mp4",
                    resources: [
                      {
                        name: "Setting up Product Pages.pdf",
                        size: "108 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/15-Setting up Product Pages.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-16",
                    title: "Standardizing ProductCollection Images",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/16- Standardizing ProductCollection Images.mp4",
                    resources: [
                      {
                        name: "Standardizing Product-Collection Images.pdf",
                        size: "93 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/16- Standardizing Product-Collection Images.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-17",
                    title: "Favicon Password",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/17-Favicon Password .mp4",
                    resources: [
                      {
                        name: "Favicon Password.pdf",
                        size: "96 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/17-Favicon Password.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s3-18",
                    title: "Finalizing Your Demo Store",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/18- Finalizing Your Demo Store .mp4",
                    resources: [
                      {
                        name: "Finalizing Your Demo Store.pdf",
                        size: "112 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/03- Section 3- Setting up MVP Website/18- Finalizing Your Demo Store.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s6-s4",
                title: "Section 4- Website Finishing Touches",
                lessons: [
                  {
                    id: "hte1-s6-s4-1",
                    title: "Add Ons Upsells",
                    duration: "12m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/01-Add Ons Upsells.mp4",
                    resources: [
                      {
                        name: "Add Ons Upsells.pdf",
                        size: "117 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/01-Add Ons Upsells.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-2",
                    title: "Setting up Klaviyo",
                    duration: "36m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/02- Setting up Klaviyo .mp4",
                    resources: [
                      {
                        name: "Setting up Klaviyo.pdf",
                        size: "90 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/02- Setting up Klaviyo.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-3",
                    title: "Judge Me Tutorial",
                    duration: "13m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/03- Judge Me Tutorial .mp4",
                    resources: [
                      {
                        name: "Judge Me Tutorial.pdf",
                        size: "95 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/03- Judge Me Tutorial.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-4",
                    title: "Slide Cart Tutorial",
                    duration: "13m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/04- Slide Cart Tutorial .mp4",
                    resources: [
                      {
                        name: "Slide Cart Tutorial.pdf",
                        size: "75 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/04- Slide Cart Tutorial.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-5",
                    title: "Setting up Live Chat",
                    duration: "22m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/05-Setting up Live Chat .mp4",
                    resources: [
                      {
                        name: "Setting up Live Chat.pdf",
                        size: "90 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/05-Setting up Live Chat.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-6",
                    title: "Slack Automations",
                    duration: "17m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/06-Slack Automations .mp4",
                    resources: [
                      {
                        name: "Slack Automations.pdf",
                        size: "81 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/06-Slack Automations.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-7",
                    title: "Setting up a Profit Tracker",
                    duration: "10m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/07- Setting up a Profit Tracker .mp4",
                    resources: [
                      {
                        name: "Setting up a Profit Tracker.pdf",
                        size: "78 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/07- Setting up a Profit Tracker.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-8",
                    title: "Device Optimization Testing Your Store",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/08-Device Optimization Testing Your Store .mp4",
                    resources: [
                      {
                        name: "Device Optimization Testing Your Store.pdf",
                        size: "86 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/08-Device Optimization Testing Your Store.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-9",
                    title: "How to Fulfill an Order",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/09-How to Fulfill an Order .mp4",
                    resources: [
                      {
                        name: "How to Fulfill an Order.pdf",
                        size: "109 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/09-How to Fulfill an Order.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-10",
                    title: "High Ticket Progress Tracker",
                    duration: "1m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/10-High Ticket Progress Tracker.mp4",
                    resources: [
                      {
                        name: "High Ticket Progress Tracker.pdf",
                        size: "194 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/10-High Ticket Progress Tracker.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-11",
                    title: "ShopQuotes - Draft Order Quotes",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/11-ShopQuotes - Draft Order Quotes .mp4",
                    resources: [
                      {
                        name: "ShopQuotes - Draft Order Quotes.pdf",
                        size: "52 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/11-ShopQuotes - Draft Order Quotes.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s6-s4-12",
                    title: "OneReview Product Reviews",
                    duration: "1m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/12- OneReview Product Reviews.mp4",
                    resources: [
                      {
                        name: "OneReview Product Reviews.pdf",
                        size: "205 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/12- OneReview Product Reviews.pdf",
                      },
                      {
                        name: "OneReview App Setup Installation Demo 12-5-24.mp4",
                        size: "34.1 MB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/06-5 - Shopify-Virtual Showroom/04-Section 4- Website Finishing Touches/12-OneReview App Setup Installation Demo 12-5-24.mp4",
                      }
                    ],
                  }
                ],
              }
            ],
          },
          {
            id: "hte1-s7",
            title: "6 - Partnering With Suppliers",
            lessons: [
              {
                id: "hte1-s7-1",
                title: "Module Overview",
                duration: "3m",
                src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/00-Module Overview.mp4",
                resources: [],
              }
            ],
            sections: [
              {
                id: "hte1-s7-s1",
                title: "Section 1- Introduction to Module",
                lessons: [
                  {
                    id: "hte1-s7-s1-1",
                    title: "Supplier HQ for Closing Suppliers Managing CRM",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/01-Section 1- Introduction to Module/01-Supplier HQ for Closing Suppliers Managing CRM.mp4",
                    resources: [
                      {
                        name: "Supplier HQ for Closing Suppliers Managing CRM.pdf",
                        size: "119 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/01-Section 1- Introduction to Module/01-Supplier HQ for Closing Suppliers Managing CRM.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s7-s2",
                title: "Section 2- Preparing to Contact Suppliers",
                lessons: [
                  {
                    id: "hte1-s7-s2-1",
                    title: "Different Methods of Closing Suppliers",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/02-Section 2- Preparing to Contact Suppliers/01-Different Methods of Closing Suppliers.mp4",
                    resources: [
                      {
                        name: "Different Methods of Closing Suppliers.pdf",
                        size: "115 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/02-Section 2- Preparing to Contact Suppliers/01-Different Methods of Closing Suppliers.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s7-s2-2",
                    title: "How to Convey Value",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/02-Section 2- Preparing to Contact Suppliers/02-How to Convey Value .mp4",
                    resources: [
                      {
                        name: "How to Convey Value.pdf",
                        size: "116 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/02-Section 2- Preparing to Contact Suppliers/02-How to Convey Value.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s7-s2-3",
                    title: "Common Topics Questions Responses",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/02-Section 2- Preparing to Contact Suppliers/03-Common Topics Questions Responses .mp4",
                    resources: [
                      {
                        name: "Common Topics Questions Responses.pdf",
                        size: "104 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/02-Section 2- Preparing to Contact Suppliers/03-Common Topics Questions Responses.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s7-s2-4",
                    title: "The Importance of Staying Persistent",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/02-Section 2- Preparing to Contact Suppliers/04- The Importance of Staying Persistent .mp4",
                    resources: [
                      {
                        name: "The Importance of Staying Persistent.pdf",
                        size: "119 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/02-Section 2- Preparing to Contact Suppliers/04- The Importance of Staying Persistent.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s7-s3",
                title: "Section 3- Supplier Outreach University",
                lessons: [
                  {
                    id: "hte1-s7-s3-1",
                    title: "Email Outreach Scripts",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/03-Section 3- Supplier Outreach University/01-Email Outreach Scripts.mp4",
                    resources: [
                      {
                        name: "Email Outreach Scripts.pdf",
                        size: "127 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/03-Section 3- Supplier Outreach University/01-Email Outreach Scripts.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s7-s3-2",
                    title: "Chat GPT For Script Generation",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/03-Section 3- Supplier Outreach University/02-Chat GPT For Script Generation.mp4",
                    resources: [
                      {
                        name: "Chat GPT For Script Generation.pdf",
                        size: "124 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/03-Section 3- Supplier Outreach University/02-Chat GPT For Script Generation.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s7-s3-3",
                    title: "Email Follow Up Strategies Timing",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/03-Section 3- Supplier Outreach University/03- Email Follow Up Strategies Timing .mp4",
                    resources: [
                      {
                        name: "Email Follow Up Strategies Timing.pdf",
                        size: "119 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/03-Section 3- Supplier Outreach University/03- Email Follow Up Strategies Timing.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s7-s3-4",
                    title: "Phone Outreach Scripts",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/03-Section 3- Supplier Outreach University/04- Phone Outreach Scripts .mp4",
                    resources: [
                      {
                        name: "Phone Outreach Scripts.pdf",
                        size: "144 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/03-Section 3- Supplier Outreach University/04- Phone Outreach Scripts.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s7-s4",
                title: "Bonus Avenues",
                lessons: [
                  {
                    id: "hte1-s7-s4-1",
                    title: "LinkedIn",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/04-Bonus Avenues/01-LinkedIn.mp4",
                    resources: [
                      {
                        name: "LinkedIn.pdf",
                        size: "139 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/04-Bonus Avenues/01-LinkedIn.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s7-s4-2",
                    title: "Trade Shows",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/04-Bonus Avenues/02-Trade Shows .mp4",
                    resources: [
                      {
                        name: "Trade Shows.pdf",
                        size: "142 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/04-Bonus Avenues/02-Trade Shows.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s7-s4-3",
                    title: "Meeting Suppliers In Your Area",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/04-Bonus Avenues/03-Meeting Suppliers In Your Area .mp4",
                    resources: [
                      {
                        name: "Meeting Suppliers In Your Area.pdf",
                        size: "131 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/04-Bonus Avenues/03-Meeting Suppliers In Your Area.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s7-s5",
                title: "Section 4- Module Completion",
                lessons: [
                  {
                    id: "hte1-s7-s5-1",
                    title: "Closing Your First 3 Suppliers",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/05-Section 4- Module Completion/01-Closing Your First 3 Suppliers.mp4",
                    resources: [
                      {
                        name: "Closing Your First 3 Suppliers.pdf",
                        size: "153 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/07-6 - Partnering With Suppliers/05-Section 4- Module Completion/01-Closing Your First 3 Suppliers.pdf",
                      }
                    ],
                  }
                ],
              }
            ],
          },
          {
            id: "hte1-s8",
            title: "7 - Onboarding Suppliers",
            lessons: [
              {
                id: "hte1-s8-1",
                title: "Module Overview",
                duration: "2m",
                src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/00-Module Overview.mp4",
                resources: [],
              }
            ],
            sections: [
              {
                id: "hte1-s8-s1",
                title: "Section 1- Module Overview",
                lessons: [
                  {
                    id: "hte1-s8-s1-1",
                    title: "Prioritizing Your Supplier Uploads",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/01-Section 1- Module Overview/01-Prioritizing Your Supplier Uploads.mp4",
                    resources: [
                      {
                        name: "Prioritizing Your Supplier Uploads.pdf",
                        size: "118 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/01-Section 1- Module Overview/01-Prioritizing Your Supplier Uploads.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s1-2",
                    title: "Types of Supplier Documents Sheets",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/01-Section 1- Module Overview/02- Types of Supplier Documents Sheets .mp4",
                    resources: [
                      {
                        name: "Types of Supplier Documents Sheets.pdf",
                        size: "132 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/01-Section 1- Module Overview/02- Types of Supplier Documents Sheets.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s8-s2",
                title: "Section 2- Uploading Products",
                lessons: [
                  {
                    id: "hte1-s8-s2-1",
                    title: "Product Title-Naming",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/01-Product Title-Naming.mp4",
                    resources: [
                      {
                        name: "Product Title-Naming.pdf",
                        size: "99 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/01-Product Title-Naming.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s2-2",
                    title: "Product Pricing-SKU-GTIN-UPC",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/02- Product Pricing-SKU-GTIN-UPC .mp4",
                    resources: [
                      {
                        name: "Product Pricing-SKU-GTIN-UPC.pdf",
                        size: "128 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/02- Product Pricing-SKU-GTIN-UPC.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s2-3",
                    title: "Product Variants Options",
                    duration: "15m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/03-Product Variants Options .mp4",
                    resources: [
                      {
                        name: "Product Variants Options.pdf",
                        size: "121 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/03-Product Variants Options.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s2-4",
                    title: "Product Media Images Videos",
                    duration: "16m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/04-Product Media Images Videos .mp4",
                    resources: [
                      {
                        name: "Product Media Images Videos.pdf",
                        size: "112 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/04-Product Media Images Videos.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s2-5",
                    title: "Product Description Tabs",
                    duration: "16m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/05- Product Description Tabs.mp4",
                    resources: [
                      {
                        name: "Product Description Tabs.pdf",
                        size: "98 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/05- Product Description Tabs.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s2-6",
                    title: "Product Manuals",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/06- Product Manuals .mp4",
                    resources: [
                      {
                        name: "Product Manuals.pdf",
                        size: "93 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/06- Product Manuals.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s2-7",
                    title: "Tracking Inventory",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/07- Tracking Inventory .mp4",
                    resources: [
                      {
                        name: "Tracking Inventory.pdf",
                        size: "97 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/07- Tracking Inventory.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s2-8",
                    title: "Product Categories Collections Tagging",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/08- Product Categories Collections Tagging .mp4",
                    resources: [
                      {
                        name: "Product Categories Collections Tagging.pdf",
                        size: "102 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/08- Product Categories Collections Tagging.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s2-9",
                    title: "Systemizing Your Product Uploads- Matrixify",
                    duration: "10m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/09- Systemizing Your Product Uploads- Matrixify .mp4",
                    resources: [
                      {
                        name: "Systemizing Your Product Uploads- Matrixify.pdf",
                        size: "107 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/09- Systemizing Your Product Uploads- Matrixify.pdf",
                      },
                      {
                        name: "Matrixify Template.xlsx",
                        size: "38 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/09-Matrixify Template.xlsx",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s2-10",
                    title: "CRO for Product Pages",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/10- CRO for Product Pages .mp4",
                    resources: [
                      {
                        name: "CRO for Product Pages.pdf",
                        size: "109 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/10- CRO for Product Pages.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s2-11",
                    title: "Adding Reviews to Your Store",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/11- Adding Reviews to Your Store .mp4",
                    resources: [
                      {
                        name: "Adding Reviews to Your Store.pdf",
                        size: "100 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/02-Section 2- Uploading Products/11- Adding Reviews to Your Store.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s8-s3",
                title: "Section 3- Supplier Policies",
                lessons: [
                  {
                    id: "hte1-s8-s3-1",
                    title: "Refund-Return Warranty Policies",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/03-Section 3- Supplier Policies/01-Refund-Return Warranty Policies.mp4",
                    resources: [
                      {
                        name: "Refund-Return Warranty Policies.pdf",
                        size: "114 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/03-Section 3- Supplier Policies/01-Refund-Return Warranty Policies.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s8-s3-2",
                    title: "Shipping Policies",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/03-Section 3- Supplier Policies/02- Shipping Policies .mp4",
                    resources: [
                      {
                        name: "Shipping Policies.pdf",
                        size: "115 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/03-Section 3- Supplier Policies/02- Shipping Policies.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s8-s4",
                title: "Section 4- Module Completion",
                lessons: [
                  {
                    id: "hte1-s8-s4-1",
                    title: "Upload 3 Brands That Meet Search Margin Criteria",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/04-Section 4- Module Completion/01- Upload 3 Brands That Meet Search Margin Criteria .mp4",
                    resources: [
                      {
                        name: "Upload 3 Brands That Meet Search Margin Criteria.pdf",
                        size: "116 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/04-Section 4- Module Completion/01- Upload 3 Brands That Meet Search Margin Criteria.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s8-s5",
                title: "Bonus Content Optional",
                lessons: [
                  {
                    id: "hte1-s8-s5-1",
                    title: "Hiring Product Uploader Prioritization",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/05-Bonus Content Optional/01-Hiring Product Uploader Prioritization.mp4",
                    resources: [
                      {
                        name: "Hiring Product Uploader Prioritization.pdf",
                        size: "137 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/08-7 - Onboarding Suppliers/05-Bonus Content Optional/01-Hiring Product Uploader Prioritization.pdf",
                      }
                    ],
                  }
                ],
              }
            ],
          },
          {
            id: "hte1-s9",
            title: "8 - Setting up Ads",
            lessons: [
              {
                id: "hte1-s9-1",
                title: "Module Overview",
                duration: "3m",
                src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/00-Module Overview.mp4",
                resources: [],
              }
            ],
            sections: [
              {
                id: "hte1-s9-s1",
                title: "Section 1- Module Overview",
                lessons: [
                  {
                    id: "hte1-s9-s1-1",
                    title: "Where to Go If No Budget For Ads Optional",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/01-Section 1- Module Overview(1)/01-Where to Go If No Budget For Ads Optional.mp4",
                    resources: [
                      {
                        name: "Where to Go If No Budget For Ads Optional.pdf",
                        size: "87 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/01-Section 1- Module Overview(1)/01-Where to Go If No Budget For Ads Optional.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s9-s1-2",
                    title: "If Your GMC Gets Suspended- Go Here",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/01-Section 1- Module Overview(1)/02- If Your GMC Gets Suspended- Go Here .mp4",
                    resources: [
                      {
                        name: "If Your GMC Gets Suspended- Go Here.pdf",
                        size: "103 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/01-Section 1- Module Overview(1)/02- If Your GMC Gets Suspended- Go Here.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s9-s2",
                title: "Section 2- Setting up Ad Accounts Social Media",
                lessons: [
                  {
                    id: "hte1-s9-s2-1",
                    title: "Creating Your Social Media Presence- FB Instagram",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/01-Creating Your Social Media Presence- FB Instagram.mp4",
                    resources: [
                      {
                        name: "Creating Your Social Media Presence- FB Instagram.pdf",
                        size: "96 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/01-Creating Your Social Media Presence- FB Instagram.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s9-s2-2",
                    title: "How to Set up GMC Account",
                    duration: "10m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/02-How to Set up GMC Account .mp4",
                    resources: [
                      {
                        name: "How to Set up GMC Account.pdf",
                        size: "115 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/02-How to Set up GMC Account.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s9-s2-3",
                    title: "How to Claim and Verify Website on GMC",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/03-How to Claim and Verify Website on GMC .mp4",
                    resources: [
                      {
                        name: "How to Claim and Verify Website on GMC.pdf",
                        size: "105 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/03-How to Claim and Verify Website on GMC.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s9-s2-4",
                    title: "How to Set Up Google Ads Account",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/04- How to Set Up Google Ads Account.mp4",
                    resources: [
                      {
                        name: "How to Set Up Google Ads Account.pdf",
                        size: "111 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/04- How to Set Up Google Ads Account.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s9-s2-5",
                    title: "Connect Your Google Ads Account to Your Website",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/05-Connect Your Google Ads Account to Your Website .mp4",
                    resources: [
                      {
                        name: "Connect Your Google Ads Account to Your Website.pdf",
                        size: "107 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/05-Connect Your Google Ads Account to Your Website.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s9-s2-6",
                    title: "Connecting Google Merchant Center to Google Ads",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/06-Connecting Google Merchant Center to Google Ads.mp4",
                    resources: [
                      {
                        name: "Connecting Google Merchant Center to Google Ads.pdf",
                        size: "112 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/06-Connecting Google Merchant Center to Google Ads.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s9-s2-7",
                    title: "Connecting Simprosis to GMC Account",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/07-Connecting Simprosis to GMC Account.mp4",
                    resources: [
                      {
                        name: "Connecting Simprosis to GMC Account.pdf",
                        size: "129 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/09-8 - Setting up Ads/02-Section 2- Setting up Ad Accounts Social Media(1)/07-Connecting Simprosis to GMC Account.pdf",
                      }
                    ],
                  }
                ],
              }
            ],
          },
          {
            id: "hte1-s10",
            title: "9 - Launching Ads",
            lessons: [
              {
                id: "hte1-s10-1",
                title: "Module Overview",
                duration: "4m",
                src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/00-Module Overview.mp4",
                resources: [],
              }
            ],
            sections: [
              {
                id: "hte1-s10-s1",
                title: "Section 1- Module Overview",
                lessons: [
                  {
                    id: "hte1-s10-s1-1",
                    title: "What are Google Ads",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/01-Section 1- Module Overview/01-What are Google Ads .mp4",
                    resources: [
                      {
                        name: "What are Google Ads.pdf",
                        size: "99 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/01-Section 1- Module Overview/01-What are Google Ads.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s10-s1-2",
                    title: "How To Use Google Ads Platform",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/01-Section 1- Module Overview/02-How To Use Google Ads Platform .mp4",
                    resources: [
                      {
                        name: "How To Use Google Ads Platform.pdf",
                        size: "98 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/01-Section 1- Module Overview/02-How To Use Google Ads Platform.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s10-s1-3",
                    title: "Setting up Conversion Tracking",
                    duration: "11m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/01-Section 1- Module Overview/03-Setting up Conversion Tracking.mp4",
                    resources: [
                      {
                        name: "Setting up Conversion Tracking.pdf",
                        size: "82 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/01-Section 1- Module Overview/03-Setting up Conversion Tracking.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s10-s2",
                title: "Section 2- Setting up Campaigns",
                lessons: [
                  {
                    id: "hte1-s10-s2-1",
                    title: "What Are PMAX Campaigns.",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/02-Section 2- Setting up Campaigns/01-What Are PMAX Campaigns..mp4",
                    resources: [
                      {
                        name: "What Are PMAX Campaigns.pdf",
                        size: "112 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/02-Section 2- Setting up Campaigns/01-What Are PMAX Campaigns.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s10-s2-2",
                    title: "Budget Allocation for PMAX",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/02-Section 2- Setting up Campaigns/02- Budget Allocation for PMAX .mp4",
                    resources: [
                      {
                        name: "Budget Allocation for PMAX.pdf",
                        size: "95 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/02-Section 2- Setting up Campaigns/02- Budget Allocation for PMAX.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s10-s2-3",
                    title: "Setting Up Custom Labels",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/02-Section 2- Setting up Campaigns/03- Setting Up Custom Labels .mp4",
                    resources: [
                      {
                        name: "Setting Up Custom Labels.pdf",
                        size: "97 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/02-Section 2- Setting up Campaigns/03- Setting Up Custom Labels.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s10-s2-4",
                    title: "Setting up PMAX Campaigns",
                    duration: "14m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/02-Section 2- Setting up Campaigns/04- Setting up PMAX Campaigns .mp4",
                    resources: [
                      {
                        name: "Setting up PMAX Campaigns.pdf",
                        size: "108 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/02-Section 2- Setting up Campaigns/04- Setting up PMAX Campaigns.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte1-s10-s3",
                title: "Section 3- How to Run PMAX Ads",
                lessons: [
                  {
                    id: "hte1-s10-s3-1",
                    title: "How to Check PMAX Performance",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/03-Section 3- How to Run PMAX Ads/01-How to Check PMAX Performance.mp4",
                    resources: [
                      {
                        name: "How to Check PMAX Performance.pdf",
                        size: "107 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/03-Section 3- How to Run PMAX Ads/01-How to Check PMAX Performance.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s10-s3-2",
                    title: "Key Performance Indicators KPIs That Matter",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/03-Section 3- How to Run PMAX Ads/02-Key Performance Indicators KPIs That Matter.mp4",
                    resources: [
                      {
                        name: "Key Performance Indicators KPIs That Matter.pdf",
                        size: "122 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/03-Section 3- How to Run PMAX Ads/02-Key Performance Indicators KPIs That Matter.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s10-s3-3",
                    title: "Setting up Promotions",
                    duration: "10m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/03-Section 3- How to Run PMAX Ads/03-Setting up Promotions .mp4",
                    resources: [
                      {
                        name: "Setting up Promotions.pdf",
                        size: "133 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/03-Section 3- How to Run PMAX Ads/03-Setting up Promotions.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s10-s3-4",
                    title: "When Brands Are Overspending",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/03-Section 3- How to Run PMAX Ads/04-When Brands Are Overspending .mp4",
                    resources: [
                      {
                        name: "When Brands Are Overspending.pdf",
                        size: "128 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/03-Section 3- How to Run PMAX Ads/04-When Brands Are Overspending.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte1-s10-s3-5",
                    title: "How to Get Help With Google Ads",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/03-Section 3- How to Run PMAX Ads/05- How to Get Help With Google Ads .mp4",
                    resources: [
                      {
                        name: "How to Get Help With Google Ads.pdf",
                        size: "115 KB",
                        key: "HighTicket E-Commerce Course/01-High Ticket E-Commerce Program/10-9 - Launching Ads/03-Section 3- How to Run PMAX Ads/05- How to Get Help With Google Ads.pdf",
                      }
                    ],
                  }
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
              {
                id: "hte2-s1-1",
                title: "How to Qualify for the Golden Rebate",
                duration: "2m",
                src: "HighTicket E-Commerce Course/02-Bonuses/01-Bonus 1 - The Golden Rebate/01-How to Qualify for the Golden Rebate.mp4",
                resources: [
                  {
                    name: "How to Qualify for the Golden Rebate.pdf",
                    size: "16 KB",
                    key: "HighTicket E-Commerce Course/02-Bonuses/01-Bonus 1 - The Golden Rebate/01-How to Qualify for the Golden Rebate.pdf",
                  }
                ],
              }
            ],
          },
          {
            id: "hte2-s2",
            title: "Bonus 2 - Social Proof Syndicate",
            lessons: [
              {
                id: "hte2-s2-1",
                title: "How to Find and Use The Social Proof Syndicate",
                duration: "3m",
                src: "HighTicket E-Commerce Course/02-Bonuses/02-Bonus 2 - Social Proof Syndicate/01-How to Find and Use The Social Proof Syndicate.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "hte2-s3",
            title: "Bonus 3 - 1400 Product Gold Rush",
            lessons: [
              {
                id: "hte2-s3-1",
                title: "Link to The Product GoldRush and How to Find It",
                duration: "2m",
                src: "HighTicket E-Commerce Course/02-Bonuses/03-Bonus 3 - 1400 Product Gold Rush/01-Link to The Product GoldRush and How to Find It.mp4",
                resources: [
                  {
                    name: "Highticket-Top-1400-Products.pdf",
                    size: "24.9 MB",
                    key: "HighTicket E-Commerce Course/02-Bonuses/03-Bonus 3 - 1400 Product Gold Rush/01-Highticket-Top-1400-Products.pdf",
                  },
                  {
                    name: "Link to The Product GoldRush and How to Find It.pdf",
                    size: "22 KB",
                    key: "HighTicket E-Commerce Course/02-Bonuses/03-Bonus 3 - 1400 Product Gold Rush/01-Link to The Product GoldRush and How to Find It.pdf",
                  }
                ],
              }
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
                  {
                    id: "hte2-s4-s1-1",
                    title: "Chat GPT Prompts for Finding Viral Products",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/01-A.I. Infinite Worker- Niche Supplier Research/01-Chat GPT Prompts for Finding Viral Products.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s4-s1-2",
                    title: "Chat GPT Prompts for Niche Selection",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/01-A.I. Infinite Worker- Niche Supplier Research/02-Chat GPT Prompts for Niche Selection .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s4-s1-3",
                    title: "Chat GPT Prompts for Supplier Research",
                    duration: "1m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/01-A.I. Infinite Worker- Niche Supplier Research/03-Chat GPT Prompts for Supplier Research .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s4-s1-4",
                    title: "Chat GPT Prompts for Distributor Research",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/01-A.I. Infinite Worker- Niche Supplier Research/04-Chat GPT Prompts for Distributor Research .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s4-s2",
                title: "A.I. Infinite Worker- Website",
                lessons: [
                  {
                    id: "hte2-s4-s2-1",
                    title: "Chat GPT to Generate Site Images",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/02-A.I. Infinite Worker- Website/01-Chat GPT to Generate Site Images.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s4-s2-2",
                    title: "Mid-Journey to Generate Site Images",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/02-A.I. Infinite Worker- Website/02-Mid-Journey to Generate Site Images .mp4",
                    resources: [
                      {
                        name: "Mid-Journey to Generate Site Images.pdf",
                        size: "23 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/02-A.I. Infinite Worker- Website/02-Mid-Journey to Generate Site Images.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s4-s2-3",
                    title: "Chat GPT To Create SEO Optimized Website Copy r",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/02-A.I. Infinite Worker- Website/03- Chat GPT To Create SEO Optimized Website Copy r.mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s4-s3",
                title: "A.I. Infinite Worker- Closing Suppliers",
                lessons: [
                  {
                    id: "hte2-s4-s3-1",
                    title: "Chat GPT Email Script Prompts",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/03-A.I. Infinite Worker- Closing Suppliers/01-Chat GPT Email Script Prompts .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s4-s4",
                title: "A.I. Infinite Worker- Ad Copy Images",
                lessons: [
                  {
                    id: "hte2-s4-s4-1",
                    title: "Chat GPT Prompts for Ad Copy",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/04-A.I. Infinite Worker- Ad Copy Images/01-Chat GPT Prompts for Ad Copy.mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s4-s5",
                title: "A.I. Infinite Worker- Softwares and Tools",
                lessons: [
                  {
                    id: "hte2-s4-s5-1",
                    title: "A.I. Product Research Toolsr",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/05-A.I. Infinite Worker- Softwares and Tools/01-A.I. Product Research Toolsr.mp4",
                    resources: [
                      {
                        name: "A.I. Product Research Tools.pdf",
                        size: "29 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/05-A.I. Infinite Worker- Softwares and Tools/01-A.I. Product Research Tools.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s4-s5-2",
                    title: "A.I. Customer Service Tools",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/05-A.I. Infinite Worker- Softwares and Tools/02- A.I. Customer Service Tools .mp4",
                    resources: [
                      {
                        name: "A.I. Customer Service Tools.pdf",
                        size: "21 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/04-Bonus 4 - A.I. Infinite Worker Masterclass/05-A.I. Infinite Worker- Softwares and Tools/02- A.I. Customer Service Tools.pdf",
                      }
                    ],
                  }
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
                  {
                    id: "hte2-s5-s1-1",
                    title: "Optimizing Google Free Listings",
                    duration: "",
                    src: "",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s5-s2",
                title: "Personalized Cold Email",
                lessons: [
                  {
                    id: "hte2-s5-s2-1",
                    title: "How to Do Personalized Big Budget E-Com Mastery",
                    duration: "19m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/02-Personalized Cold Email/02-How to Do Personalized Big Budget E-Com Mastery .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s2-2",
                    title: "Testing Different Offers Customers",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/02-Personalized Cold Email/03-Testing Different Offers Customers .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s5-s3",
                title: "Mass Cold Email",
                lessons: [
                  {
                    id: "hte2-s5-s3-1",
                    title: "Introduction to Mass Big Budget E-Com",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/03-Mass Cold Email/01-Introduction to Mass Big Budget E-Com.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s3-2",
                    title: "Buying a Sending Domain",
                    duration: "12m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/03-Mass Cold Email/02-Buying a Sending Domain .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s3-3",
                    title: "Setting up Smart Lead Warming Up Domain",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/03-Mass Cold Email/03- Setting up Smart Lead Warming Up Domain .mp4",
                    resources: [
                      {
                        name: "Setting up Smart Lead Warming Up Domain.pdf",
                        size: "25 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/03-Mass Cold Email/03- Setting up Smart Lead Warming Up Domain.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s5-s3-4",
                    title: "Scraping Your Dream B2B Leads from Databases",
                    duration: "10m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/03-Mass Cold Email/04- Scraping Your Dream B2B Leads from Databases.mp4",
                    resources: [
                      {
                        name: "Scraping Your Dream B2B Leads from Databases.pdf",
                        size: "21 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/03-Mass Cold Email/04-Scraping Your Dream B2B Leads from Databases.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s5-s3-5",
                    title: "Scraping Your Dream High NW Leads From Databases",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/03-Mass Cold Email/05- Scraping Your Dream High NW Leads From Databases .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s3-6",
                    title: "Building Your Cold Email Outreach Campaigns",
                    duration: "15m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/03-Mass Cold Email/06- Building Your Cold Email Outreach Campaigns .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s3-7",
                    title: "Optimizing Copy Split Testing Offers",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/03-Mass Cold Email/07- Optimizing Copy Split Testing Offers .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s5-s4",
                title: "Introduction to Short-Form Content",
                lessons: [
                  {
                    id: "hte2-s5-s4-1",
                    title: "Introduction to Social Media Short Form Content",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/04-Introduction to Short-Form Content/01-Introduction to Social Media Short Form Content.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s4-2",
                    title: "Creating Offers Lead Magnets to Grow Followers",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/04-Introduction to Short-Form Content/02-Creating Offers Lead Magnets to Grow Followers .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s4-3",
                    title: "General Tips to Grow Your Following",
                    duration: "10m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/04-Introduction to Short-Form Content/03- General Tips to Grow Your Following .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s4-4",
                    title: "TikTok Shorts",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/04-Introduction to Short-Form Content/04- TikTok Shorts .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s4-5",
                    title: "Instagram Reels",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/04-Introduction to Short-Form Content/05- Instagram Reels .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s4-6",
                    title: "Youtube Shorts",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/04-Introduction to Short-Form Content/06- Youtube Shorts .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s4-7",
                    title: "Posting on Pinterest",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/04-Introduction to Short-Form Content/07-Posting on Pinterest .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s4-8",
                    title: "Repurposing Content",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/04-Introduction to Short-Form Content/08-Repurposing Content .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s5-s5",
                title: "Introduction to Long-Form Content",
                lessons: [
                  {
                    id: "hte2-s5-s5-1",
                    title: "Introduction to Long Form Youtube",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/05-Introduction to Long-Form Content/01-Introduction to Long Form Youtube.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s5-2",
                    title: "How to Use Vid IQ",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/05-Introduction to Long-Form Content/02-How to Use Vid IQ .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s5-3",
                    title: "Creating Long Form Videos",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/05-Introduction to Long-Form Content/03-Creating Long Form Videos .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s5-s6",
                title: "Other Ways to Get Free Traffic",
                lessons: [
                  {
                    id: "hte2-s5-s6-1",
                    title: "Facebook LinkedIn Groups",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/06-Other Ways to Get Free Traffic/01-Facebook LinkedIn Groups.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s6-2",
                    title: "Using Facebook Marketplace Free Marketplaces",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/06-Other Ways to Get Free Traffic/02- Using Facebook Marketplace Free Marketplaces .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s6-3",
                    title: "Using Niche Forums and Reddit",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/06-Other Ways to Get Free Traffic/03- Using Niche Forums and Reddit .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s6-4",
                    title: "Posting Blog Posts Products",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/06-Other Ways to Get Free Traffic/04- Posting Blog Posts Products .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s5-s6-5",
                    title: "Introduction to SEO",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/06-Other Ways to Get Free Traffic/05- Introduction to SEO .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s5-s7",
                title: "Creating an Action Plan for Yourself",
                lessons: [
                  {
                    id: "hte2-s5-s7-1",
                    title: "Creating Action Plan for Yourself",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/05-Bonus 5 - Hidden Highway Free Traffic Masterclass/07-Creating an Action Plan for Yourself/01-Creating Action Plan for Yourself.mp4",
                    resources: [],
                  }
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
                  {
                    id: "hte2-s6-s1-1",
                    title: "B2B 2024 - Start Here",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/01-B2B 2024 Updates/01-B2B 2024 - Start Here.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s6-s1-2",
                    title: "B2B Lead Research",
                    duration: "19m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/01-B2B 2024 Updates/02-B2B Lead Research.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s6-s1-3",
                    title: "B2B - Personalized Outreach",
                    duration: "14m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/01-B2B 2024 Updates/03-B2B - Personalized Outreach .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s6-s2",
                title: "B2B Mastery - Kabrin",
                lessons: [
                  {
                    id: "hte2-s6-s2-1",
                    title: "Module 1- Understanding B2B Outreach",
                    duration: "23m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/02-B2B Mastery - Kabrin/01-Module 1- Understanding B2B Outreach.mp4",
                    resources: [
                      {
                        name: "Module 1- Understanding B2B Outreach.pdf",
                        size: "10 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/02-B2B Mastery - Kabrin/01-Module 1- Understanding B2B Outreach.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s6-s2-2",
                    title: "Module 2- Outreach",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/02-B2B Mastery - Kabrin/02-Module 2- Outreach .mp4",
                    resources: [
                      {
                        name: "Module 2- Outreach.pdf",
                        size: "10 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/02-B2B Mastery - Kabrin/02-Module 2- Outreach.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s6-s2-3",
                    title: "Module 3- Admin and Getting Paid",
                    duration: "10m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/02-B2B Mastery - Kabrin/03-Module 3- Admin and Getting Paid .mp4",
                    resources: [
                      {
                        name: "Module 3- Admin and Getting Paid.pdf",
                        size: "11 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/02-B2B Mastery - Kabrin/03-Module 3- Admin and Getting Paid.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s6-s2-4",
                    title: "New Strategies",
                    duration: "23m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/02-B2B Mastery - Kabrin/04- New Strategies .mp4",
                    resources: [
                      {
                        name: "New Strategies.pdf",
                        size: "10 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/06-Bonus 6 - Big Budget E-Com Mastery Taught by Kabrin Johal/02-B2B Mastery - Kabrin/04-New Strategies.pdf",
                      }
                    ],
                  }
                ],
              }
            ],
          },
          {
            id: "hte2-s7",
            title: "Bonus 7 - Golden Parachute Tax Planning Call",
            lessons: [
              {
                id: "hte2-s7-1",
                title: "Introduction to Doola",
                duration: "2m",
                src: "HighTicket E-Commerce Course/02-Bonuses/07-Bonus 7 - Golden Parachute Tax Planning Call/01-Introduction to Doola.mp4",
                resources: [],
              },
              {
                id: "hte2-s7-2",
                title: "Set Up Business Free Consult Call",
                duration: "3m",
                src: "HighTicket E-Commerce Course/02-Bonuses/07-Bonus 7 - Golden Parachute Tax Planning Call/02-Set Up Business Free Consult Call .mp4",
                resources: [],
              }
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
                  {
                    id: "hte2-s8-s1-1",
                    title: "Bonus Overview Checklist",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/01-What is Direct Response Marketing/01-Bonus Overview Checklist .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s1-2",
                    title: "Direct Response vs Branded Marketing",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/01-What is Direct Response Marketing/02-Direct Response vs Branded Marketing .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s1-3",
                    title: "Envision Your Customer as a Lazy Sloth On The Couch",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/01-What is Direct Response Marketing/03-Envision Your Customer as a Lazy Sloth On The Couch .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s1-4",
                    title: "Examples of Lead Magnets",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/01-What is Direct Response Marketing/04-Examples of Lead Magnets.mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s8-s2",
                title: "Direct Response Marketing Basics",
                lessons: [
                  {
                    id: "hte2-s8-s2-1",
                    title: "The Hormozi Offer Equation- Creating Irresistible Offers",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/02-Direct Response Marketing Basics/01-The Hormozi Offer Equation- Creating Irresistible Offers.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s2-2",
                    title: "The Importance of Clarity Simplicity",
                    duration: "16m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/02-Direct Response Marketing Basics/02-The Importance of Clarity Simplicity.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s2-3",
                    title: "Using Strong Clear Call-To-Actions",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/02-Direct Response Marketing Basics/03-Using Strong Clear Call-To-Actions .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s2-4",
                    title: "Know Your Audience- Targeted Marketing",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/02-Direct Response Marketing Basics/04- Know Your Audience- Targeted Marketing .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s2-5",
                    title: "The Importance of Urgency Scarcity",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/02-Direct Response Marketing Basics/05- The Importance of Urgency Scarcity .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s2-6",
                    title: "Customer Testimonials Social Proof",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/02-Direct Response Marketing Basics/06-Customer Testimonials Social Proof.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s2-7",
                    title: "Effective Follow-Up Sequences",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/02-Direct Response Marketing Basics/07-Effective Follow-Up Sequences.mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s8-s3",
                title: "Implementing Direct Response Into Your HTE Business",
                lessons: [
                  {
                    id: "hte2-s8-s3-1",
                    title: "Easy to Use Menu Navigation and Search",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/03-Implementing Direct Response Into Your HTE Business/01-Easy to Use Menu Navigation and Search .mp4",
                    resources: [
                      {
                        name: "Easy to Use Menu Navigation and Search.pdf",
                        size: "22 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/03-Implementing Direct Response Into Your HTE Business/01-Easy to Use Menu Navigation and Search.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s8-s3-2",
                    title: "Clear Contact Information",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/03-Implementing Direct Response Into Your HTE Business/02-Clear Contact Information .mp4",
                    resources: [
                      {
                        name: "Clear Contact Information.pdf",
                        size: "22 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/03-Implementing Direct Response Into Your HTE Business/02-Clear Contact Information.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s8-s3-3",
                    title: "Using Discounts Bonuses Product Page Offers",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/03-Implementing Direct Response Into Your HTE Business/03- Using Discounts Bonuses Product Page Offers .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s3-4",
                    title: "Optimizing Pop-Up Offer Welcome Flow",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/03-Implementing Direct Response Into Your HTE Business/04-Optimizing Pop-Up Offer Welcome Flow .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s3-5",
                    title: "Using Scarcity Urgency Strategically On Your Site",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/03-Implementing Direct Response Into Your HTE Business/05-Using Scarcity Urgency Strategically On Your Site .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s3-6",
                    title: "Driving Sales Using Live Chat",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/03-Implementing Direct Response Into Your HTE Business/06-Driving Sales Using Live Chat .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s8-s4",
                title: "How to Profitably Scale Your Business",
                lessons: [
                  {
                    id: "hte2-s8-s4-1",
                    title: "The Optimization Trifecta",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/04-How to Profitably Scale Your Business/01-The Optimization Trifecta.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s4-2",
                    title: "Methods to Increase Average Order Value",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/04-How to Profitably Scale Your Business/02-Methods to Increase Average Order Value .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s4-3",
                    title: "Methods to Increase Conversion Rate",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/04-How to Profitably Scale Your Business/03-Methods to Increase Conversion Rate .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s4-4",
                    title: "Methods Tips on Increasing Traffic",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/04-How to Profitably Scale Your Business/04- Methods Tips on Increasing Traffic .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s8-s5",
                title: "Beginner Conversion Rate Masterclass",
                lessons: [
                  {
                    id: "hte2-s8-s5-1",
                    title: "Stealing Like an Artist",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/05-Beginner Conversion Rate Masterclass/01-Stealing Like an Artist.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s5-2",
                    title: "Top Spy Tools",
                    duration: "18m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/05-Beginner Conversion Rate Masterclass/02-Top Spy Tools .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s5-3",
                    title: "The Importance of Social Proof",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/05-Beginner Conversion Rate Masterclass/03-The Importance of Social Proof.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s5-4",
                    title: "Finding Shopify Developers",
                    duration: "11m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/05-Beginner Conversion Rate Masterclass/04-Finding Shopify Developers .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s5-5",
                    title: "Using Page Builder Tools",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/05-Beginner Conversion Rate Masterclass/05-Using Page Builder Tools .mp4",
                    resources: [
                      {
                        name: "Using Page Builder Tools.pdf",
                        size: "22 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/05-Beginner Conversion Rate Masterclass/05-Using Page Builder Tools.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s8-s5-6",
                    title: "Finding Blue Oceans",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/05-Beginner Conversion Rate Masterclass/06- Finding Blue Oceans .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s8-s5-7",
                    title: "Business Reductionism",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/05-Beginner Conversion Rate Masterclass/07-Business Reductionism .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s8-s6",
                title: "Bonus Completion",
                lessons: [
                  {
                    id: "hte2-s8-s6-1",
                    title: "Direct Response Sites to Get Ideas Form",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/06-Bonus Completion/01-Direct Response Sites to Get Ideas Form.mp4",
                    resources: [
                      {
                        name: "Direct Response Sites to Get Ideas Form.pdf",
                        size: "30 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/06-Bonus Completion/01-Direct Response Sites to Get Ideas Form.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s8-s6-2",
                    title: "Recommended Direct Response Books Resources",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/06-Bonus Completion/02-Recommended Direct Response Books Resources .mp4",
                    resources: [
                      {
                        name: "Recommended Direct Response Books Resources.pdf",
                        size: "49 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/08-Bonus 8 - Third Eye Opener Bonus/06-Bonus Completion/02-Recommended Direct Response Books Resources.pdf",
                      }
                    ],
                  }
                ],
              }
            ],
          },
          {
            id: "hte2-s9",
            title: "Bonus 9 - Additional HTE Membership",
            lessons: [
              {
                id: "hte2-s9-1",
                title: "How to Add a Business Partner",
                duration: "1m",
                src: "HighTicket E-Commerce Course/02-Bonuses/09-Bonus 9 - Additional HTE Membership/01-How to Add a Business Partner.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "hte2-s10",
            title: "Mystery Bonus",
            lessons: [
              {
                id: "hte2-s10-1",
                title: "MYSTERY Bonus",
                duration: "1m",
                src: "HighTicket E-Commerce Course/02-Bonuses/10-MYSTERY BONUS/01-MYSTERY Bonus.mp4",
                resources: [],
              }
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
                  {
                    id: "hte2-s11-s1-1",
                    title: "Setting up Slack",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/11-EXTRA BONUS - Live Freely Slack Office Set Up/01-Slack Office Set Up/01-Setting up Slack.mp4",
                    resources: [
                      {
                        name: "Setting up Slack.pdf",
                        size: "11 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/11-EXTRA BONUS - Live Freely Slack Office Set Up/01-Slack Office Set Up/01-Setting up Slack.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s11-s1-2",
                    title: "Optimizing Live Chat",
                    duration: "11m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/11-EXTRA BONUS - Live Freely Slack Office Set Up/01-Slack Office Set Up/02-Optimizing Live Chat .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s11-s1-3",
                    title: "Abandon Checkouts",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/11-EXTRA BONUS - Live Freely Slack Office Set Up/01-Slack Office Set Up/03-Abandon Checkouts .mp4",
                    resources: [
                      {
                        name: "Abandon Checkouts.pdf",
                        size: "11 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/11-EXTRA BONUS - Live Freely Slack Office Set Up/01-Slack Office Set Up/03-Abandon Checkouts.pdf",
                      }
                    ],
                  }
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
                  {
                    id: "hte2-s12-s1-1",
                    title: "John Murphy - 5M Store Owner",
                    duration: "1h 13m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/01-Guest Speakers/01-John Murphy - 5M Store Owner .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s1-2",
                    title: "Tryggvi - 50M in SEO Sales",
                    duration: "1h 1m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/01-Guest Speakers/02-Tryggvi - 50M in SEO Sales .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s1-3",
                    title: "Colin Schemelebeck - Google Ads Agency Owner",
                    duration: "48m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/01-Guest Speakers/03-Colin Schemelebeck - Google Ads Agency Owner .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s1-4",
                    title: "Kevin Sha - SEO Agency Owner",
                    duration: "58m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/01-Guest Speakers/04- Kevin Sha - SEO Agency Owner .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s1-5",
                    title: "Christian Bonner - Cold Email",
                    duration: "1h",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/01-Guest Speakers/05-Christian Bonner - Cold Email .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s1-6",
                    title: "Conor Sunderland - Email Marketing",
                    duration: "1h 31m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/01-Guest Speakers/06- Conor Sunderland - Email Marketing .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s1-7",
                    title: "David Hunter - Cold Calling",
                    duration: "1h 28m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/01-Guest Speakers/07-David Hunter - Cold Calling .mp4",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s12-s2",
                title: "SEO Mastery With Tryggvi",
                lessons: [
                  {
                    id: "hte2-s12-s2-1",
                    title: "Content Optimization using Neuronwriter",
                    duration: "35m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/02-Content Optimization using Neuronwriter.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s2-2",
                    title: "Google EEAT Authorship Content quality",
                    duration: "55m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/03-Google EEAT Authorship Content quality .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s2-3",
                    title: "Backlinks - Guest Posting",
                    duration: "1h 4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/04- Backlinks - Guest Posting .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s2-4",
                    title: "Link Building - PremiumHomeSourceBacklinks",
                    duration: "39m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/05- Link Building - PremiumHomeSourceBacklinks .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s2-5",
                    title: "New Niche Site Launch - Keyword Research",
                    duration: "57m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/06-New Niche Site Launch - Keyword Research .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s2-6",
                    title: "Niche Site Launch - Keyword Clustering",
                    duration: "40m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/07- Niche Site Launch - Keyword Clustering .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s2-7",
                    title: "Niche Site Launch - Menu Topics",
                    duration: "36m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/08- Niche Site Launch - Menu Topics .mp4",
                    resources: [
                      {
                        name: "Niche Site Launch - Menu Topics.pdf",
                        size: "23 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/08- Niche Site Launch - Menu Topics.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s12-s2-8",
                    title: "Niche Site Talk - Optimized Content AI - Menu Talk",
                    duration: "44m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/09-Niche Site Talk - Optimized Content AI - Menu Talk.mp4",
                    resources: [
                      {
                        name: "Niche Site Launch - Optimize AI Cont..pdf",
                        size: "19 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/09-Niche Site Launch - Optimize AI Cont..pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s12-s2-9",
                    title: "Niche Site Launch - Content Plan",
                    duration: "28m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/10- Niche Site Launch - Content Plan .mp4",
                    resources: [
                      {
                        name: "Niche Site Launch - Episode 05 - Content Backlink Plan.mp4",
                        size: "185.2 MB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/02-SEO Mastery With Tryggvi/10-Niche Site Launch - Episode 05 - Content Backlink Plan.mp4",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte2-s12-s4",
                title: "Email Marketing Mastery",
                lessons: [
                  {
                    id: "hte2-s12-s4-1",
                    title: "How to Think About Email SMS Marketing",
                    duration: "50m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/03-Email Marketing Mastery(1)/01- How to Think About Email SMS Marketing .mp4",
                    resources: [
                      {
                        name: "How to Think About Email SMS Marketing.pdf",
                        size: "12 KB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/03-Email Marketing Mastery(1)/01- How to Think About Email SMS Marketing.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte2-s12-s4-2",
                    title: "Popups Masterclass",
                    duration: "55m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/03-Email Marketing Mastery(1)/02-Popups Masterclass .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s4-3",
                    title: "Welcome Series Masterclass",
                    duration: "53m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/03-Email Marketing Mastery(1)/03-Welcome Series Masterclass .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s4-4",
                    title: "Abandoned Checkout Mastery",
                    duration: "43m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/03-Email Marketing Mastery(1)/04-Abandoned Checkout Mastery .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s4-5",
                    title: "Email Copywriting Free Guides",
                    duration: "35m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/03-Email Marketing Mastery(1)/06- Email Copywriting Free Guides .mp4",
                    resources: [
                      {
                        name: "Campaign Ideation.mp4",
                        size: "67.5 MB",
                        key: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/03-Email Marketing Mastery(1)/06-Campaign Ideation .mp4",
                      }
                    ],
                  },
                  {
                    id: "hte2-s12-s4-6",
                    title: "Step By Step Guide to Setup Email Marketing",
                    duration: "",
                    src: "",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte2-s12-s5",
                title: "Hiring Team Building Mastery",
                lessons: [
                  {
                    id: "hte2-s12-s5-1",
                    title: "Call 1- Building training materials QA",
                    duration: "26m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/04-Hiring Team Building Mastery/01-Call 1- Building training materials QA.mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s5-2",
                    title: "Call 2- General QA",
                    duration: "13m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/04-Hiring Team Building Mastery/02-Call 2- General QA .mp4",
                    resources: [],
                  },
                  {
                    id: "hte2-s12-s5-3",
                    title: "Call 3- Building SOPs in 5 minutes with AI",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/02-Bonuses/12-EXTRA BONUS - 8 Figure Boardroom Insight Vault/04-Hiring Team Building Mastery/03-Call 3- Building SOPs in 5 minutes with AI.mp4",
                    resources: [],
                  }
                ],
              }
            ],
          },
          {
            id: "hte2-s13",
            title: "EXTRA BONUS - Site Visitor Maximization Toolkit",
            lessons: [
              {
                id: "hte2-s13-1",
                title: "Site Value Maximization Toolkit",
                duration: "20m",
                src: "HighTicket E-Commerce Course/02-Bonuses/13-EXTRA BONUS - Site Visitor Maximization Toolkit/01-Site Value Maximization Toolkit.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "hte2-s14",
            title: "EXTRA BONUS - Profit Calculator",
            lessons: [
              {
                id: "hte2-s14-1",
                title: "The Profit First Method",
                duration: "7m",
                src: "HighTicket E-Commerce Course/02-Bonuses/14-EXTRA BONUS - Profit Calculator/01-Tracking and Maximizing Profit/01-The Profit First Method.mp4",
                resources: [],
              },
              {
                id: "hte2-s14-2",
                title: "Tracking Expenses and Cashflow",
                duration: "8m",
                src: "HighTicket E-Commerce Course/02-Bonuses/14-EXTRA BONUS - Profit Calculator/01-Tracking and Maximizing Profit/02-Tracking Expenses and Cashflow.mp4",
                resources: [
                  {
                    name: "Profit Tracking Template.xlsx",
                    size: "102 KB",
                    key: "HighTicket E-Commerce Course/02-Bonuses/14-EXTRA BONUS - Profit Calculator/01-Tracking and Maximizing Profit/02-Profit Tracking Template.xlsx",
                  }
                ],
              }
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
                  {
                    id: "hte3-s1-s1-1",
                    title: "What - How - Why - SEO",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/01-Introduction to SEO/01-What - How - Why - SEO .mp4",
                    resources: [
                      {
                        name: "What - How - Why - SEO.pdf",
                        size: "13 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/01-Introduction to SEO/01-What - How - Why - SEO.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte3-s1-s2",
                title: "Step 1- Keyword Research Mapping",
                lessons: [
                  {
                    id: "hte3-s1-s2-1",
                    title: "Target ONE Product Type",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/01-Target ONE Product Type.mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s1-s2-2",
                    title: "Find All Keywords in ONE Niche",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/02- Find All Keywords in ONE Niche .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s1-s2-3",
                    title: "Finding Low Competition Keywords",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/03-Finding Low Competition Keywords .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s1-s2-4",
                    title: "Keyword Mapping- Creating Your Site Structure",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/04-Keyword Mapping- Creating Your Site Structure .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s1-s2-5",
                    title: "How To Interpret Hub-Spoke Model Insights",
                    duration: "11m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/05- How To Interpret Hub-Spoke Model Insights .mp4",
                    resources: [
                      {
                        name: "How To Interpret Hub Spoke Model Insights - Keyword Insights.mp4",
                        size: "41.7 MB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/05-How To Interpret Hub_Spoke Model Insights - Keyword Insights.mp4",
                      }
                    ],
                  },
                  {
                    id: "hte3-s1-s2-6",
                    title: "How To Interpret Cluster Insight - Keyword Insights",
                    duration: "12m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/06-How To Interpret Cluster Insight - Keyword Insights.mp4",
                    resources: [
                      {
                        name: "How To Interpret Cluster Insight.mp4",
                        size: "46.4 MB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/06-How To Interpret Cluster Insight .mp4",
                      }
                    ],
                  },
                  {
                    id: "hte3-s1-s2-7",
                    title: "Designing Website Structure",
                    duration: "24m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/07-Designing Website Structure .mp4",
                    resources: [
                      {
                        name: "Designing Website Structure.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/07-Designing Website Structure.pdf",
                      },
                      {
                        name: "Fire Pit Table.png",
                        size: "15.2 MB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/07-Fire Pit Table.png",
                      }
                    ],
                  },
                  {
                    id: "hte3-s1-s2-8",
                    title: "Step 1 - Keyword Research Action Tasks",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/08- Step 1 - Keyword Research Action Tasks .mp4",
                    resources: [
                      {
                        name: "SEO Action Task Checklist.xlsx",
                        size: "26 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/02-Step 1- Keyword Research Mapping/08-SEO Action Task Checklist.xlsx",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte3-s1-s3",
                title: "Step 2 - On Page SEO",
                lessons: [
                  {
                    id: "hte3-s1-s3-1",
                    title: "Optimizing a Page for SEO",
                    duration: "16m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/01-Optimizing a Page for SEO.mp4",
                    resources: [
                      {
                        name: "Optimizing a Page for SEO.pdf",
                        size: "11 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/01-Optimizing a Page for SEO.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s1-s3-2",
                    title: "Optimizing Collection Pages",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/02- Optimizing Collection Pages .mp4",
                    resources: [
                      {
                        name: "Optimizing Collection Pages.pdf",
                        size: "12 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/02- Optimizing Collection Pages.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s1-s3-3",
                    title: "How to Create a Hub Collection",
                    duration: "15m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/03-How to Create a Hub Collection .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s1-s3-4",
                    title: "How to Create a Spoke Collection",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/04- How to Create a Spoke Collection .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s1-s3-5",
                    title: "Optimizing Blog Posts",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/05-Optimizing Blog Posts .mp4",
                    resources: [
                      {
                        name: "Optimizing Blog Posts.pdf",
                        size: "10 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/05-Optimizing Blog Posts.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s1-s3-6",
                    title: "How to Create a Hub Blog",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/06-How to Create a Hub Blog .mp4",
                    resources: [
                      {
                        name: "Step 2 - On Page SEO.pdf",
                        size: "11 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/06-Step 2 - On Page SEO.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s1-s3-7",
                    title: "How to Create a Spoke Blog",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/07-How to Create a Spoke Blog .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s1-s3-8",
                    title: "Coding Technical Guides",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/08-Coding Technical Guides.mp4",
                    resources: [
                      {
                        name: "Coding Technical Guides.pdf",
                        size: "11 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/08-Coding Technical Guides.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s1-s3-9",
                    title: "Internal Linking Anchor Text",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/01-SEO Masterclass/03-Step 2 - On Page SEO/09-Internal Linking Anchor Text.mp4",
                    resources: [],
                  }
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
                  {
                    id: "hte3-s2-s1-1",
                    title: "Setting up Bing Merchant Centre",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/01-Section 1- Setting up Other Ad Accounts/01-Setting up Bing Merchant Centre.mp4",
                    resources: [
                      {
                        name: "Setting up Bing Merchant Centre.pdf",
                        size: "15 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/01-Section 1- Setting up Other Ad Accounts/01-Setting up Bing Merchant Centre.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s1-2",
                    title: "Setting up Bing Ads",
                    duration: "1m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/01-Section 1- Setting up Other Ad Accounts/02-Setting up Bing Ads.mp4",
                    resources: [
                      {
                        name: "Setting up Bing Ads.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/01-Section 1- Setting up Other Ad Accounts/02-Setting up Bing Ads.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s1-3",
                    title: "Setting up Facebook BM Ad Account",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/01-Section 1- Setting up Other Ad Accounts/03-Setting up Facebook BM Ad Account.mp4",
                    resources: [
                      {
                        name: "Setting up Facebook BM Ad Account.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/01-Section 1- Setting up Other Ad Accounts/03-Setting up Facebook BM Ad Account.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s1-4",
                    title: "Setting up Facebook Commerce Manager",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/01-Section 1- Setting up Other Ad Accounts/04-Setting up Facebook Commerce Manager .mp4",
                    resources: [
                      {
                        name: "Setting up Facebook Commerce Manager.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/01-Section 1- Setting up Other Ad Accounts/04-Setting up Facebook Commerce Manager.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s1-5",
                    title: "Setting up Pinterest Ads Account",
                    duration: "2m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/01-Section 1- Setting up Other Ad Accounts/05- Setting up Pinterest Ads Account .mp4",
                    resources: [
                      {
                        name: "Setting up Pinterest Ads Account.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/01-Section 1- Setting up Other Ad Accounts/05- Setting up Pinterest Ads Account.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte3-s2-s2",
                title: "Section 2- Preliminary Information",
                lessons: [
                  {
                    id: "hte3-s2-s2-1",
                    title: "Proper Ads Mindset",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/01-Proper Ads Mindset.mp4",
                    resources: [
                      {
                        name: "Proper Ads Mindset.pdf",
                        size: "13 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/01-Proper Ads Mindset.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s2-2",
                    title: "Setting Proper Expectations",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/02-Setting Proper Expectations .mp4",
                    resources: [
                      {
                        name: "Setting Proper Expectations.pdf",
                        size: "13 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/02-Setting Proper Expectations.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s2-3",
                    title: "Preliminary Set Up Information",
                    duration: "17m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/03-Preliminary Set Up Information .mp4",
                    resources: [
                      {
                        name: "Keyword Lists.xlsx",
                        size: "9 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/03-Keyword Lists.xlsx",
                      },
                      {
                        name: "Preliminary Set Up Information.pdf",
                        size: "28 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/03-Preliminary Set Up Information.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s2-4",
                    title: "How to Divide Your Budget",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/04- How to Divide Your Budget .mp4",
                    resources: [
                      {
                        name: "How to Divide Your Budget.pdf",
                        size: "13 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/04- How to Divide Your Budget.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s2-5",
                    title: "General Tip on AutoRecommendations r",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/05-General Tip on AutoRecommendations r.mp4",
                    resources: [
                      {
                        name: "General Tip on AutoRecommendations.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/02-Section 2- Preliminary Information/05-General Tip on AutoRecommendations.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte3-s2-s3",
                title: "Section 3- Launching Other Ad Strategies",
                lessons: [
                  {
                    id: "hte3-s2-s3-1",
                    title: "Setting up Google Shopping Ads",
                    duration: "23m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/01-Setting up Google Shopping Ads.mp4",
                    resources: [
                      {
                        name: "Setting up Google Shopping Ads.pdf",
                        size: "18 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/01-Setting up Google Shopping Ads.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s3-2",
                    title: "Google Keyword Planner",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/02-Google Keyword Planner.mp4",
                    resources: [
                      {
                        name: "Google Keyword Planner.pdf",
                        size: "13 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/02-Google Keyword Planner.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s3-3",
                    title: "Common Shopping Mistakes to Avoid",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/03-Common Shopping Mistakes to Avoid .mp4",
                    resources: [
                      {
                        name: "Common Shopping Mistakes to Avoid.pdf",
                        size: "13 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/03-Common Shopping Mistakes to Avoid.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s3-4",
                    title: "Setting up Google Search Text Ads",
                    duration: "11m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/04-Setting up Google Search Text Ads .mp4",
                    resources: [
                      {
                        name: "Setting up Google Search Text Ads.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/04-Setting up Google Search Text Ads.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s3-5",
                    title: "Setting up Bing Shopping Search Text Ads",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/05-Setting up Bing Shopping Search Text Ads .mp4",
                    resources: [
                      {
                        name: "Setting up Bing Shopping Search Text Ads.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/05-Setting up Bing Shopping Search Text Ads.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s3-6",
                    title: "Optimizing Your Ads",
                    duration: "13m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/06-Optimizing Your Ads .mp4",
                    resources: [
                      {
                        name: "Optimizing Your Ads.pdf",
                        size: "13 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/06-Optimizing Your Ads.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s3-7",
                    title: "Common Advertising Questions",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/07-Common Advertising Questions.mp4",
                    resources: [
                      {
                        name: "Common Advertising Questions.pdf",
                        size: "17 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/07-Common Advertising Questions.pdf",
                      },
                      {
                        name: "ROAS Calculator.xlsx",
                        size: "106 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/07-ROAS Calculator.xlsx",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s3-8",
                    title: "Creating a KPI Dashboard",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/08-Creating a KPI Dashboard .mp4",
                    resources: [
                      {
                        name: "Creating a KPI Dashboard.pdf",
                        size: "13 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/08-Creating a KPI Dashboard.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s3-9",
                    title: "Setting up Promotions",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/09-Setting up Promotions.mp4",
                    resources: [
                      {
                        name: "Setting up Promotions.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/09-Setting up Promotions.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s3-10",
                    title: "Optional Promotions Tip",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/10-Optional Promotions Tip .mp4",
                    resources: [
                      {
                        name: "Optional Promotions Tip.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/03-Section 3- Launching Other Ad Strategies/10-Optional Promotions Tip.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte3-s2-s4",
                title: "Section 4- Retargeting Ads",
                lessons: [
                  {
                    id: "hte3-s2-s4-1",
                    title: "Setting up Facebook Retargeting Ads",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/04-Section 4- Retargeting Ads/01-Setting up Facebook Retargeting Ads.mp4",
                    resources: [
                      {
                        name: "Setting up Facebook Retargeting Ads.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/04-Section 4- Retargeting Ads/01-Setting up Facebook Retargeting Ads.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s4-2",
                    title: "Setting up Google-Bing Retargeting Ads",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/04-Section 4- Retargeting Ads/02-Setting up Google-Bing Retargeting Ads .mp4",
                    resources: [
                      {
                        name: "Setting up Google-Bing Retargeting Ads.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/04-Section 4- Retargeting Ads/02-Setting up Google-Bing Retargeting Ads.pdf",
                      }
                    ],
                  }
                ],
              },
              {
                id: "hte3-s2-s5",
                title: "Section 5- Making Sales Tracking",
                lessons: [
                  {
                    id: "hte3-s2-s5-1",
                    title: "Setting up Ad Tracking in BeProfit-Triple Whale",
                    duration: "6m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/06-Section 5- Making Sales Tracking/01-Setting up Ad Tracking in BeProfit-Triple Whale.mp4",
                    resources: [
                      {
                        name: "Setting up Ad Tracking in BeProfit-Triple Whale.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/06-Section 5- Making Sales Tracking/01-Setting up Ad Tracking in BeProfit-Triple Whale.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s5-2",
                    title: "Being Optimized vs Being Overextended",
                    duration: "4m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/06-Section 5- Making Sales Tracking/02- Being Optimized vs Being Overextended.mp4",
                    resources: [
                      {
                        name: "Being Optimized vs Being Overextended.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/06-Section 5- Making Sales Tracking/02- Being Optimized vs Being Overextended.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s5-3",
                    title: "How to Read KPI Dashboard",
                    duration: "",
                    src: "",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s5-4",
                    title: "Monitoring Product Page-Campaign Specific Conversion Rate on Google-Shopify",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/06-Section 5- Making Sales Tracking/04-Monitoring Product Page-Campaign Specific Conversion Rate on Google-Shopify.mp4",
                    resources: [
                      {
                        name: "Monitoring Product Page-Campaign Specific Conversion Rate on Google-Shopify.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/06-Section 5- Making Sales Tracking/04-Monitoring Product Page-Campaign Specific Conversion Rate on Google-Shopify.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s5-5",
                    title: "Sculpting Negative Keywords",
                    duration: "",
                    src: "",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s5-6",
                    title: "Tips for Increasing CTR Lowering CPC",
                    duration: "",
                    src: "",
                    resources: [],
                  }
                ],
              },
              {
                id: "hte3-s2-s6",
                title: "Section 6- Scaling Your Ads",
                lessons: [
                  {
                    id: "hte3-s2-s6-1",
                    title: "Do Not Scale Before Doing This",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/01-Do Not Scale Before Doing This .mp4",
                    resources: [
                      {
                        name: "Do Not Scale Before Doing This.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/01-Do Not Scale Before Doing This.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s6-2",
                    title: "Why Your Ads Dont Work And How to Make Them Work",
                    duration: "12m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/02-Why Your Ads Dont Work And How to Make Them Work .mp4",
                    resources: [
                      {
                        name: "Why Your Ads Dont Work And How to Make Them Work.pdf",
                        size: "14 KB",
                        key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/02-Why Your Ads Dont Work And How to Make Them Work.pdf",
                      }
                    ],
                  },
                  {
                    id: "hte3-s2-s6-3",
                    title: "Brand by Brand ROAS POAS",
                    duration: "7m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/03-Brand by Brand ROAS POAS .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s6-4",
                    title: "Scaling Google-Bing Shopping Ads",
                    duration: "14m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/04-Scaling Google-Bing Shopping Ads .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s6-5",
                    title: "Scaling Google-Bing Search Text Ads Part 1",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/05-Scaling Google-Bing Search Text Ads Part 1 .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s6-6",
                    title: "Scaling Google-Bing Search Text Ads Part 2",
                    duration: "8m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/06-Scaling Google-Bing Search Text Ads Part 2.mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s6-7",
                    title: "Enhanced CPC How to Use it",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/07-Enhanced CPC How to Use it .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s6-8",
                    title: "Product Specific Ad Campaigns",
                    duration: "14m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/08- Product Specific Ad Campaigns .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s6-9",
                    title: "Using Max Clicks to Automate Search-Shopping Campaigns",
                    duration: "5m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/09-Using Max Clicks to Automate Search-Shopping Campaigns .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s6-10",
                    title: "Product Specific Retargeting Email Flows",
                    duration: "10m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/10- Product Specific Retargeting Email Flows .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s6-11",
                    title: "Your Own Branded Campaign",
                    duration: "3m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/11- Your Own Branded Campaign .mp4",
                    resources: [],
                  },
                  {
                    id: "hte3-s2-s6-12",
                    title: "Utilizing Display Remarketing Ads",
                    duration: "9m",
                    src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/02-Advanced Advertising Masterclass/07-Section 6- Scaling Your Ads/12- Utilizing Display Remarketing Ads .mp4",
                    resources: [],
                  }
                ],
              }
            ],
          },
          {
            id: "hte3-s3",
            title: "Optimizing Your Sales Process Abandoned Checkouts",
            lessons: [
              {
                id: "hte3-s3-1",
                title: "How Abandoned Checkouts Can Make or Break Your Business",
                duration: "3m",
                src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/01-How Abandoned Checkouts Can Make or Break Your Business.mp4",
                resources: [
                  {
                    name: "How Abandoned Checkouts Can Make or Break Your Business.pdf",
                    size: "14 KB",
                    key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/01-How Abandoned Checkouts Can Make or Break Your Business.pdf",
                  }
                ],
              },
              {
                id: "hte3-s3-2",
                title: "Optimizing Your Email SMS Abandoned Checkout Flow",
                duration: "11m",
                src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/02- Optimizing Your Email SMS Abandoned Checkout Flow .mp4",
                resources: [
                  {
                    name: "Optimizing Your Email SMS Abandoned Checkout Flow.pdf",
                    size: "19 KB",
                    key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/02-Optimizing Your Email SMS Abandoned Checkout Flow.pdf",
                  },
                  {
                    name: "Sample Abandon Cart Emails.docx",
                    size: "1.5 MB",
                    key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/02-Sample Abandon Cart Emails.docx",
                  }
                ],
              },
              {
                id: "hte3-s3-3",
                title: "Ensuring AC Slack Automations Are Set Up Correctly",
                duration: "2m",
                src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/03- Ensuring AC Slack Automations Are Set Up Correctly .mp4",
                resources: [
                  {
                    name: "Ensuring AC Slack Automations Are Set Up Correctly.pdf",
                    size: "15 KB",
                    key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/03- Ensuring AC Slack Automations Are Set Up Correctly.pdf",
                  }
                ],
              },
              {
                id: "hte3-s3-4",
                title: "Setting up a CRM Process For Lead Follow Up",
                duration: "7m",
                src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/04- Setting up a CRM Process For Lead Follow Up .mp4",
                resources: [
                  {
                    name: "Setting up a CRM Process For Lead Follow Up.pdf",
                    size: "14 KB",
                    key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/04- Setting up a CRM Process For Lead Follow Up.pdf",
                  }
                ],
              },
              {
                id: "hte3-s3-5",
                title: "Reaching Out To Customers ASAP Post AC",
                duration: "1m",
                src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/05-Reaching Out To Customers ASAP Post AC .mp4",
                resources: [
                  {
                    name: "Reaching Out To Customers ASAP Post AC.pdf",
                    size: "15 KB",
                    key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/05-Reaching Out To Customers ASAP Post AC.pdf",
                  }
                ],
              },
              {
                id: "hte3-s3-6",
                title: "Sample Abandon Checkout Phone Scripts to Use",
                duration: "2m",
                src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/06- Sample Abandon Checkout Phone Scripts to Use .mp4",
                resources: [
                  {
                    name: "Sample Abandon Checkout Phone Scripts to Use.pdf",
                    size: "14 KB",
                    key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/06- Sample Abandon Checkout Phone Scripts to Use.pdf",
                  }
                ],
              },
              {
                id: "hte3-s3-7",
                title: "Managing Your CRM Over Time",
                duration: "3m",
                src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/07-Managing Your CRM Over Time .mp4",
                resources: [
                  {
                    name: "Managing Your CRM Over Time.pdf",
                    size: "14 KB",
                    key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/07-Managing Your CRM Over Time.pdf",
                  }
                ],
              },
              {
                id: "hte3-s3-8",
                title: "Other Situations to Utilize Your CRM",
                duration: "3m",
                src: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/08-Other Situations to Utilize Your CRM .mp4",
                resources: [
                  {
                    name: "Other Situations to Utilize Your CRM.pdf",
                    size: "14 KB",
                    key: "HighTicket E-Commerce Course/03-Advanced Masterclasses/03-Optimizing Your Sales Process Abandoned Checkouts/01-Sales Process/08-Other Situations to Utilize Your CRM.pdf",
                  }
                ],
              }
            ],
          }
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
              {
                id: "d1-1-1",
                title: "The Impact Formula",
                duration: "3m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/2. Fundamentals/(1)the impact formula.mp4",
                resources: [],
              },
              {
                id: "d1-1-2",
                title: "Intent Stage",
                duration: "3m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/2. Fundamentals/(2)intent stage.mp4",
                resources: [],
              },
              {
                id: "d1-1-3",
                title: "Logical Certainty",
                duration: "2m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/2. Fundamentals/(3)logical certainty.mp4",
                resources: [],
              },
              {
                id: "d1-1-4",
                title: "Emotional Certainty",
                duration: "3m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/2. Fundamentals/(4)emotional certainty.mp4",
                resources: [],
              },
              {
                id: "d1-1-5",
                title: "Pitch",
                duration: "1m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/2. Fundamentals/(5)pitch.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "dch1-s2",
            title: "Impact formula script",
            lessons: [
              {
                id: "d1-2-1",
                title: "Setting Script Break Down",
                duration: "17m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/3. Impact formula script/(1)setting script break down.mp4",
                resources: [],
              },
              {
                id: "d1-2-2",
                title: "Closing script breakdown #1",
                duration: "21m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/3. Impact formula script/(2)Closing script breakdown #1.mp4",
                resources: [],
              },
              {
                id: "d1-2-3",
                title: "Closing script breakdown #2",
                duration: "5m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/3. Impact formula script/(3)Closing script breakdown #2.mp4",
                resources: [],
              },
              {
                id: "d1-2-4",
                title: "Objection Handling",
                duration: "17m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/3. Impact formula script/(4)Objection Handling.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "dch1-s3",
            title: "Miscellaneous",
            lessons: [
              {
                id: "d1-3-1",
                title: "Calendar Management",
                duration: "4m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/Miscellaneous/Calendar Management.mp4",
                resources: [],
              },
              {
                id: "d1-3-2",
                title: "Mindset 101",
                duration: "6m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/Miscellaneous/Mindset 101.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "dch1-s4",
            title: "Start here",
            lessons: [
              {
                id: "d1-4-1",
                title: "Impact Team FREE",
                duration: "3m",
                src: "Impact Team - VIP (High-Ticket Sales System)/1. Bad To Good/Start here/Impact Team FREE.mp4",
                resources: [],
              }
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
              {
                id: "d2-1-1",
                title: "Adapting script to offer",
                duration: "6m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/1. Advanaced Scripting/(1) Adapting script to offer.mp4",
                resources: [],
              },
              {
                id: "d2-1-2",
                title: "Mirror Questionst (Get answers to every Q)",
                duration: "5m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/1. Advanaced Scripting/(2) Mirror Questionst (Get answers to every Q).mp4",
                resources: [],
              },
              {
                id: "d2-1-3",
                title: "Transforming identity (Emotional certainty)",
                duration: "13m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/1. Advanaced Scripting/(3) Transforming identity (Emotional certainty).mp4",
                resources: [],
              },
              {
                id: "d2-1-4",
                title: "6 Human Needs (& How to use them)",
                duration: "10m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/1. Advanaced Scripting/(4) 6 Human Needs (& How to use them).mp4",
                resources: [],
              },
              {
                id: "d2-1-5",
                title: "Objection handling psychology",
                duration: "6m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/1. Advanaced Scripting/(5) Objection handling psychology.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "dch2-s2",
            title: "Non Verbal Communication",
            lessons: [
              {
                id: "d2-2-1",
                title: "Tonality Masterclass",
                duration: "12m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/2. Non Verbal Communication/(1)Tonality Masterclass.mp4",
                resources: [],
              },
              {
                id: "d2-2-2",
                title: "Body language as a Remote Control",
                duration: "6m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/2. Non Verbal Communication/(2) Body language as a Remote Control.mp4",
                resources: [],
              },
              {
                id: "d2-2-3",
                title: "Verbal Cueing (Control prospects)",
                duration: "4m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/2. Non Verbal Communication/(3) Verbal Cueing (Control prospects).mp4",
                resources: [],
              },
              {
                id: "d2-2-4",
                title: "Pacing & Inflections",
                duration: "8m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/2. Non Verbal Communication/(4) Pacing & Inflections.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "dch2-s3",
            title: "Less Calls, More $$$",
            lessons: [
              {
                id: "d2-3-1",
                title: "Follow-UP",
                duration: "15m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/3. Less Calls, More $$$/(1) Follow-UP.mp4",
                resources: [],
              },
              {
                id: "d2-3-2",
                title: "Referrals",
                duration: "6m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/3. Less Calls, More $$$/(2) Referrals.mp4",
                resources: [],
              },
              {
                id: "d2-3-3",
                title: "Upsells (Setting + Closing)",
                duration: "20m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/3. Less Calls, More $$$/(3) Upsells (Setting + Closing).mp4",
                resources: [],
              }
            ],
          },
          {
            id: "dch2-s4",
            title: "Mindset - HighPerforming",
            lessons: [
              {
                id: "d2-4-1",
                title: "Creating Energy",
                duration: "7m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/4. Mindset - HighPerforming/(1) Creating Energy.mp4",
                resources: [],
              },
              {
                id: "d2-4-2",
                title: "Loneliness",
                duration: "3m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/4. Mindset - HighPerforming/(2) Loneliness.mp4",
                resources: [],
              },
              {
                id: "d2-4-3",
                title: "Self-Esteem",
                duration: "6m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/4. Mindset - HighPerforming/(3) Self-Esteem.mp4",
                resources: [],
              },
              {
                id: "d2-4-4",
                title: "Burnout",
                duration: "5m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/4. Mindset - HighPerforming/(4) Burnout.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "dch2-s5",
            title: "How to Make the script yours",
            lessons: [
              {
                id: "d2-5-1",
                title: "The key to greatness",
                duration: "9m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/5. How to Make the script yours/The key to greatness.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "dch2-s6",
            title: "Start here",
            lessons: [
              {
                id: "d2-6-1",
                title: "Actually start here",
                duration: "8m",
                src: "Impact Team - VIP (High-Ticket Sales System)/2. Good To Great/Start here/Actually start here.mp4",
                resources: [],
              }
            ],
          }
        ],
      },
      {
        id: "dch3",
        title: "Live Sales Recordings",
        lessons: [
          {
            id: "d3-1",
            title: "Q&A",
            duration: "40m",
            src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/Q&A.mp4",
            resources: [],
          },
          {
            id: "d3-2",
            title: "Yash Call Review",
            duration: "1h 4m",
            src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/Yash Call Review.mp4",
            resources: [],
          }
        ],
        sections: [
          {
            id: "dch3-s1",
            title: "1 on 1 Coaching Call recordings",
            lessons: [
              {
                id: "d3-1-1",
                title: "Andres - Building FULL Script - Marketing Agency",
                duration: "57m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/1 on 1 Coaching Call recordings/Andres - Building FULL Script - Marketing Agency.mp4",
                resources: [],
              },
              {
                id: "d3-1-2",
                title: "Andres - Objection Handling Call Review + Roleplay",
                duration: "45m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/1 on 1 Coaching Call recordings/Andres - Objection Handling Call Review + Roleplay.mp4",
                resources: [],
              },
              {
                id: "d3-1-3",
                title: "Yash - FULL Call roleplay (wObjections) - Selling Sales Coaching",
                duration: "33m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/1 on 1 Coaching Call recordings/Yash - FULL Call roleplay (wObjections) - Selling Sales Coaching.mp4",
                resources: [],
              },
              {
                id: "d3-1-4",
                title: "Yash - Full Formula Breakdown + Mirror Questions (Sales training offer)",
                duration: "44m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/1 on 1 Coaching Call recordings/Yash - Full Formula Breakdown + Mirror Questions (Sales training offer).mp4",
                resources: [],
              }
            ],
          },
          {
            id: "dch3-s2",
            title: "Sales Call Highlights",
            lessons: [
              {
                id: "d3-2-1",
                title: "$10k Deal - Cries in Emotional Cert",
                duration: "12m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/live sales recordings/$10k Deal - Cries in Emotional Cert.mp4",
                resources: [],
              },
              {
                id: "d3-2-2",
                title: "$10k Deal - Sophisticated Buyer",
                duration: "1h 3m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/live sales recordings/$10k Deal - Sophisticated Buyer.mp4",
                resources: [],
              },
              {
                id: "d3-2-3",
                title: "$10k PIF - New to service",
                duration: "29m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/live sales recordings/$10k PIF - New to service.mp4",
                resources: [],
              },
              {
                id: "d3-2-4",
                title: "$16k PIF - A Type",
                duration: "40m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/live sales recordings/$16k PIF - A Type.mp4",
                resources: [],
              },
              {
                id: "d3-2-5",
                title: "$16k PIF - Good to Great Frame",
                duration: "27m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/live sales recordings/$16k PIF - Good to Great Frame.mp4",
                resources: [],
              },
              {
                id: "d3-2-6",
                title: "$16k PIF - Prospect Tries to contorl",
                duration: "37m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/live sales recordings/$16k PIF - Prospect Tries to contorl.mp4",
                resources: [],
              },
              {
                id: "d3-2-7",
                title: "$4k PIF - Values Giving",
                duration: "24m",
                src: "Impact Team - VIP (High-Ticket Sales System)/3. Live Sales Recordings/live sales recordings/$4k PIF - Values Giving.mp4",
                resources: [],
              }
            ],
          }
        ],
      }
    ],
  },
  {
    id: "ecom-masterclass",
    title: "The E-Commerce Masterclass by Zakaria Airakaz",
    tagline: "The full system — build, launch, and scale a brand from zero.",
    cover: "https://i.imgur.com/DIybl5f.png",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$1,500",
    chapters: [
      {
        id: "ch1",
        title: "Unlock the 100M$ Version of Yourself",
        lessons: [
          {
            id: "c1-1",
            title: "Mindset Stuff. Motivation. Discipline",
            duration: "53m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/1. Unlock the 100M$ Version of Yourself/1. MINDSET STUFF. MOTIVATION. DISCIPLINE.mp4",
            resources: [],
          },
          {
            id: "c1-2",
            title: "Track Your Life - More Green Means You're Making Money, More Red Means You're Getting Fucked",
            duration: "14m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/1. Unlock the 100M$ Version of Yourself/2. Track Your Life - More Green Means You're Making Money, More Red Means You're Getting Fucked (online-video-cutter.com).mp4",
            resources: [
              {
                name: "Track Your life MasterClass.xlsx",
                size: "9 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/1. Unlock the 100M$ Version of Yourself/2. _Track Your life _ MasterClass.xlsx",
              }
            ],
          },
          {
            id: "c1-3",
            title: "The Cheat Code That Makes Business Feel Like a Game You Can't Stop Winning",
            duration: "23m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/1. Unlock the 100M$ Version of Yourself/3. The Cheat Code That Makes Business Feel Like a Game You Can't Stop Winning.mp4",
            resources: [],
          },
          {
            id: "c1-4",
            title: "How To Unfuck Your Life And Protect It To Go To The 100M$",
            duration: "45m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/1. Unlock the 100M$ Version of Yourself/4. How To Unfuck Your Life And Protect It To Go To The 100M$.mp4",
            resources: [],
          },
          {
            id: "c1-5",
            title: "Long-Term Thinking - The Real Secret to Building Serious Wealth",
            duration: "23m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/1. Unlock the 100M$ Version of Yourself/5. Long-Term Thinking - The Real Secret to Building Serious Wealth.mp4",
            resources: [],
          },
          {
            id: "c1-6",
            title: "Don't Get Mad and Don't Expect Results That You Know You Didn't Work For",
            duration: "25m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/1. Unlock the 100M$ Version of Yourself/6. Don't Get Mad and Don't Expect Results That You Know You Didn't Work For.mp4",
            resources: [],
          },
          {
            id: "c1-7",
            title: "How to increase your energy",
            duration: "16m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/1. Unlock the 100M$ Version of Yourself/7. How to increase your energy.mp4",
            resources: [],
          }
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
              {
                id: "c2-1-1",
                title: "The Art of Selling",
                duration: "1h 5m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/1. The Art of Selling/1. The Art of Selling.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch2-s2",
            title: "Product Research MasterClass",
            lessons: [
              {
                id: "c2-2-1",
                title: "Product Research MasterClass Part 1",
                duration: "1h 23m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/2. Product Research MasterClass/2. Product Research MasterClass Part 1.mp4",
                resources: [
                  {
                    name: "Product Research Pt .1.docx",
                    size: "1.3 MB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/2. Product Research MasterClass/2. Product Research Pt .1.docx",
                  }
                ],
              },
              {
                id: "c2-2-2",
                title: "Product Research MasterClass by Zakaria Airakaz Part II Facebook & Tiktok Shop",
                duration: "1h 19m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/2. Product Research MasterClass/3. Product Research MasterClass by Zakaria_Airakaz Part II Facebook & Tiktok Shop.mp4",
                resources: [
                  {
                    name: "Product Research Pt .2.docx",
                    size: "139 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/2. Product Research MasterClass/3. Product Research Pt .2.docx",
                  },
                  {
                    name: "Product Selection.xlsx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/2. Product Research MasterClass/3. Product Selection.xlsx",
                  }
                ],
              },
              {
                id: "c2-2-3",
                title: "Product Research MasterClass by Zakaria Airakaz Part Ill product researchs on reddit",
                duration: "1h 3m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/2. Product Research MasterClass/4. Product Research MasterClass by Zakaria_Airakaz Part Ill product researchs on reddit.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch2-s3",
            title: "Market Research - Avatar Research",
            lessons: [
              {
                id: "c2-3-1",
                title: "What Is an Avatar and Why Do We Do Avatar Research",
                duration: "24m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/5. What Is an Avatar and Why Do We Do Avatar Research.mp4",
                resources: [],
              },
              {
                id: "c2-3-2",
                title: "Market Research Avatar Selection by Zakaria Airakaz - PART I",
                duration: "1h 55m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/6. Market Research _ Avatar Selection by Zakaria_Airakaz - PART I.mp4",
                resources: [],
              },
              {
                id: "c2-3-3",
                title: "Avatar + Avatar Selection by Zakaria Airakaz Part II",
                duration: "59m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/7. Avatar + Avatar Selection by Zakaria_Airakaz Part II.mp4",
                resources: [
                  {
                    name: "Avatar selection by Zakaria Airakaz (1).xlsx",
                    size: "5 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/7. Avatar selection by Zakaria_Airakaz (1).xlsx",
                  },
                  {
                    name: "Market Research Avatar Selection by Zakaria Airakaz (1).docx",
                    size: "495 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/7. Market Research _ Avatar Selection by Zakaria_Airakaz (1).docx",
                  }
                ],
              },
              {
                id: "c2-3-4",
                title: "Avatar Deep Dive. Reddit Research Part I",
                duration: "1h",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/8. Avatar Deep Dive. Reddit Research Part I.mp4",
                resources: [
                  {
                    name: "Avatar Deep Divepla PCOS.docx",
                    size: "709 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/8. Avatar Deep Divepla _ PCOS.docx",
                  }
                ],
              },
              {
                id: "c2-3-5",
                title: "Avatar Deep Dive. Reddit Research Part II",
                duration: "40m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/9. Avatar Deep Dive. Reddit Research Part II.mp4",
                resources: [],
              },
              {
                id: "c2-3-6",
                title: "Reddit Avatar Deep Dive Research using AI",
                duration: "50m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/10. Reddit Avatar Deep Dive Research using AI.mp4",
                resources: [
                  {
                    name: "Ai Prompt 2.0 For Reddit Avatar Deep Dive Research (1).docx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/10. Ai Prompt 2.0 For Reddit Avatar Deep Dive Research (1).docx",
                  },
                  {
                    name: "Avatar Deep Dive Research (1) (1).docx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/10. AVATAR DEEP DIVE RESEARCH (1) (1).docx",
                  }
                ],
              },
              {
                id: "c2-3-7",
                title: "Avatar Deep Dive. FORUMES RESEARCH",
                duration: "34m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/11. Avatar Deep Dive. FORUMES RESEARCH.mp4",
                resources: [],
              },
              {
                id: "c2-3-8",
                title: "Avatar Deep Dive. Youtube Research",
                duration: "40m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/12. Avatar Deep Dive. Youtube Research.mp4",
                resources: [],
              },
              {
                id: "c2-3-9",
                title: "Avatar Deep Dive. Tiktok Research",
                duration: "38m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/13. Avatar Deep Dive. Tiktok Research.mp4",
                resources: [],
              },
              {
                id: "c2-3-10",
                title: "Avatar Deep Dive. Amazon Research",
                duration: "47m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/14. Avatar Deep Dive. Amazon Research.mp4",
                resources: [],
              },
              {
                id: "c2-3-11",
                title: "AI for Speed Research",
                duration: "15m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/15. AI FOR SPEED RESEARCH.mp4",
                resources: [
                  {
                    name: "AI Prompt Avatar Deep Dive Raw Insight Extraction (2).docx",
                    size: "7 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/15. AI Prompt_ Avatar Deep Dive_ Raw Insight Extraction (2).docx",
                  },
                  {
                    name: "Amazon Research for PCOS Hair Loss Sufferers.docx",
                    size: "9 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/15. AMAZON RESEARCH FOR PCOS HAIR LOSS SUFFERERS.docx",
                  }
                ],
              },
              {
                id: "c2-3-12",
                title: "Cleaning Avatar Research Documents & Extracting Insights",
                duration: "42m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/16. CLEANING AVATAR RESEARCH DOCUMENTS & EXTRACTING INSIGHTS.mp4",
                resources: [
                  {
                    name: "Avatar Insight PCOS Hair Loss Master Class.docx",
                    size: "15 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/16. AVATAR INSIGHT PCOS HAIR LOSS _ MASTER CLASS.docx",
                  },
                  {
                    name: "Clean Documents AI Prompt Master Class.docx",
                    size: "215 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/16. CLEAN DOCUMENTS AI PROMPT _ MASTER CLASS.docx",
                  },
                  {
                    name: "Final Document PCOS Hair Loss Research Master Class.docx",
                    size: "23 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/3. Market Research - Avatar Research/16. FINAL DOCUMENT _PCOS HAIR LOSS RESEARCH  _ MASTER CLASS.docx",
                  }
                ],
              }
            ],
          },
          {
            id: "ch2-s4",
            title: "Market Research - PROBLEM & SOLUTION",
            lessons: [
              {
                id: "c2-4-1",
                title: "Research the Root Cause of the Problem",
                duration: "57m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/4. Market Research - PROBLEM & SOLUTION/17. RESEARCH THE ROOT CAUSE OF THE PROBLEM.mp4",
                resources: [
                  {
                    name: "Research Root Cause of PCOS Hair Loss Suffers.docx",
                    size: "10 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/4. Market Research - PROBLEM & SOLUTION/17. RESEARCH ROOT CAUSE OF PCOS HAIR LOSS SUFFERS.docx",
                  },
                  {
                    name: "RESEARCH THE ROOT CAUSE OF THE PROBLEM With AI (1) (1).docx",
                    size: "833 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/4. Market Research - PROBLEM & SOLUTION/17. RESEARCH THE ROOT CAUSE OF THE PROBLEM With AI (1) (1).docx",
                  },
                  {
                    name: "Root Cause Draft (1).docx",
                    size: "19 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/4. Market Research - PROBLEM & SOLUTION/17. ROOT CAUSE DRAFT (1).docx",
                  }
                ],
              },
              {
                id: "c2-4-2",
                title: "Research the Solution Mechanism of the Problem",
                duration: "45m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/4. Market Research - PROBLEM & SOLUTION/18. RESEARCH THE SOLUTION MECHANISM OF THE PROBLEM.mp4",
                resources: [
                  {
                    name: "RESEARCH THE SOLUTION MECHANISM OF THE PROBLEM With AI.docx",
                    size: "53 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/4. Market Research - PROBLEM & SOLUTION/18. RESEARCH THE SOLUTION MECHANISM OF THE PROBLEM With AI.docx",
                  },
                  {
                    name: "Solution Mehcanism of the Problem.docx",
                    size: "12 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/4. Market Research - PROBLEM & SOLUTION/18. SOLUTION MEHCANISM OF THE PROBLEM .docx",
                  }
                ],
              }
            ],
          },
          {
            id: "ch2-s5",
            title: "Product Development",
            lessons: [
              {
                id: "c2-5-1",
                title: "Product Development 1",
                duration: "40m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/5. PRODUCT DEVELOPMENT/19. PRODUCT DEVELOPMENT 1.mp4",
                resources: [
                  {
                    name: "AI Prompt for Product Finding Masterclass.docx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/5. PRODUCT DEVELOPMENT/19. AI PROMPT FOR PRODUCT FINDING _MASTERCLASS.docx",
                  },
                  {
                    name: "Product Development.docx",
                    size: "12 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/5. PRODUCT DEVELOPMENT/19. PRODUCT DEVELOPMENT.docx",
                  }
                ],
              }
            ],
          },
          {
            id: "ch2-s6",
            title: "Competitor Research",
            lessons: [
              {
                id: "c2-6-1",
                title: "Alternative Solution Research",
                duration: "43m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/6. COMPETITOR RESEARCH/20. Alternative Solution Research.mp4",
                resources: [
                  {
                    name: "Alternative Solution Research PCOS Women with Hair loss DOCUMENT MASTER CLASS.docx",
                    size: "11 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/6. COMPETITOR RESEARCH/20. Alternative Solution Research _ PCOS Women with Hair loss _ DOCUMENT _ MASTER CLASS.docx",
                  },
                  {
                    name: "Alternative Solution Research PCOS Women with Hair loss MasterClass.docx",
                    size: "1.2 MB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/6. COMPETITOR RESEARCH/20. Alternative Solution Research _ PCOS Women with Hair loss _ MasterClass .docx",
                  },
                  {
                    name: "Image Ads AI Prompte Us vs Others.docx",
                    size: "12 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/6. COMPETITOR RESEARCH/20. IMAGE ADS AI PROMPTE US VS OTHERS.docx",
                  }
                ],
              },
              {
                id: "c2-6-2",
                title: "Research Similair Product for objections",
                duration: "26m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/6. COMPETITOR RESEARCH/21. Research Similair Product for objections.mp4",
                resources: [
                  {
                    name: "Similar Product Research Objections.docx",
                    size: "288 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/6. COMPETITOR RESEARCH/21. _Similar Product Research _ Objections.docx",
                  },
                  {
                    name: "Similar Product Research PCOS Women with Hair loss MasterClass.docx",
                    size: "51 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/6. COMPETITOR RESEARCH/21. _Similar Product Research _ PCOS Women with Hair loss _ MasterClass.docx",
                  }
                ],
              },
              {
                id: "c2-6-3",
                title: "Competitor Research Analyse Part I",
                duration: "1h",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/6. COMPETITOR RESEARCH/22. Competitor Research Analyse Part I.mp4",
                resources: [],
              },
              {
                id: "c2-6-4",
                title: "Competitor Research Analyse Master Class Part II",
                duration: "34m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/6. COMPETITOR RESEARCH/23. Competitor Research Analyse Master Class Part II.mp4",
                resources: [
                  {
                    name: "Competitor Research Analyse Master Class.docx",
                    size: "95 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/6. COMPETITOR RESEARCH/23. Competitor Research Analyse _ Master Class.docx",
                  }
                ],
              }
            ],
          },
          {
            id: "ch2-s7",
            title: "WATCH THIS NOW — The Most Important Step After Market Research (Don't Skip This)",
            lessons: [
              {
                id: "c2-7-1",
                title: "Road Map",
                duration: "1h 1m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/7. WATCH THIS NOW — The Most Important Step After Market Research (Don't Skip This)/24. ROAD MAP.mp4",
                resources: [
                  {
                    name: "PCOS Brand Road Map Masterclass Video.xlsx",
                    size: "73 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/7. WATCH THIS NOW — The Most Important Step After Market Research (Don't Skip This)/24. _PCOS Brand Road Map  _ Masterclass Video.xlsx",
                  }
                ],
              }
            ],
          },
          {
            id: "ch2-s8",
            title: "Ads creation",
            lessons: [
              {
                id: "c2-8-1",
                title: "Research to image Ads SOP MasterClass",
                duration: "1h 57m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/8. Ads creation/25. Research to image Ads SOP MasterClass.mp4",
                resources: [
                  {
                    name: "AI Prompt for Visual Inspiration.docx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/8. Ads creation/25. AI PROMPT FOR VISUAL INSPIRATION.docx",
                  },
                  {
                    name: "Image Ads AI Prompte (2).docx",
                    size: "12 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/8. Ads creation/25. IMAGE ADS AI PROMPTE (2).docx",
                  },
                  {
                    name: "Research to image Ads SOP MasterClass.docx",
                    size: "11 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/8. Ads creation/25. Research to image Ads SOP _ MasterClass.docx",
                  }
                ],
              },
              {
                id: "c2-8-2",
                title: "Develop Ad Concept into Full Script for Creator's Guide",
                duration: "32m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/8. Ads creation/26. Develop Ad Concept into Full Script for Creator's Guide.mp4",
                resources: [
                  {
                    name: "Ad Analysis Based on The Ultimate SOP for Creating Killer Ads (1).docx",
                    size: "11 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/8. Ads creation/26. Ad Analysis Based on _The Ultimate SOP for Creating Killer Ads_ (1).docx",
                  },
                  {
                    name: "Ads draft -- to script --- to guidline for content creators (1).docx",
                    size: "24 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/8. Ads creation/26. Ads draft --_ to script ---_ to guidline for content creators  (1).docx",
                  },
                  {
                    name: "AI Prompt for Ad Concepts and Ad Scripts.docx",
                    size: "11 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/8. Ads creation/26. AI PROMPT FOR AD CONCEPTS AND AD SCRIPTS .docx",
                  },
                  {
                    name: "🎬 Content Creator Guidelines.docx",
                    size: "17 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/8. Ads creation/26. 🎬 Content Creator Guidelines.docx",
                  }
                ],
              },
              {
                id: "c2-8-3",
                title: "Script writing",
                duration: "23m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/8. Ads creation/27. Script writing.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch2-s9",
            title: "Landing page",
            lessons: [
              {
                id: "c2-9-1",
                title: "How to creat high Landing page",
                duration: "48m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/9. Landing page/28. How to creat high Landing page.mp4",
                resources: [
                  {
                    name: "Ai Prompt — for High-Converting Landing Page Creation.docx",
                    size: "13 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/9. Landing page/28. Ai Prompt — for High-Converting Landing Page Creation.docx",
                  },
                  {
                    name: "The Ultimate SOP for Building High-Converting Landing Pages by Zakaria Airakaz MasterClass 2.0 (3).pdf",
                    size: "459 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/2. Ecom Masterclass/9. Landing page/28. The Ultimate SOP for Building High-Converting Landing Pages _ by Zakaria_Airakaz _ MasterClass 2.0 (3).pdf",
                  }
                ],
              }
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
              {
                id: "c3-1-1",
                title: "Advertorial Intro101 - The Art and Science of Pre-Sell Marketing",
                duration: "44m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/1. Intro to Advertorials/1. Advertorial Intro101 - The Art and Science of Pre-Sell Marketing.mp4",
                resources: [
                  {
                    name: "Advertorial Strategy 101.docx",
                    size: "7.2 MB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/1. Intro to Advertorials/1. Advertorial Strategy 101.docx",
                  }
                ],
              },
              {
                id: "c3-1-2",
                title: "Advertorial full breakdown Nooro example to understand",
                duration: "1h 39m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/1. Intro to Advertorials/2. Advertorial full breakdown Nooro example to understand.mp4",
                resources: [],
              },
              {
                id: "c3-1-3",
                title: "The Copywriting Bible Part I",
                duration: "1h 9m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/1. Intro to Advertorials/3. The Copywriting Bible Part I.mp4",
                resources: [
                  {
                    name: "Your Copywriting Bible by Zakaria airakaz.docx",
                    size: "1.3 MB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/1. Intro to Advertorials/3. Your Copywriting Bible by Zakaria airakaz.docx",
                  }
                ],
              },
              {
                id: "c3-1-4",
                title: "The Copywriting Bible Part II",
                duration: "58m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/1. Intro to Advertorials/4. The Copywriting Bible Part II.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch3-s2",
            title: "The Blueprint for Persuasive Advertorials",
            lessons: [
              {
                id: "c3-2-1",
                title: "Crafting Irresistible Headlines That Hook Instantly",
                duration: "52m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/5. Crafting Irresistible Headlines That Hook Instantly.mp4",
                resources: [
                  {
                    name: "Crafting Irresistible Headlines That Hook Instantly by Zakaria Airakaz.pdf",
                    size: "1.3 MB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/5. Crafting Irresistible Headlines That Hook Instantly by Zakaria_Airakaz.pdf",
                  }
                ],
              },
              {
                id: "c3-2-2",
                title: "Lead - Writing Leads That Pull Readers In",
                duration: "29m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/6. Lead - Writing Leads That Pull Readers In.mp4",
                resources: [],
              },
              {
                id: "c3-2-3",
                title: "Background Story - Storytelling That Builds Connection",
                duration: "23m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/7. Background Story - Storytelling That Builds Connection.mp4",
                resources: [
                  {
                    name: "file 1NNxQk7i2Cpguo6jp37Q9C.docx",
                    size: "2.2 MB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/7. file_1NNxQk7i2Cpguo6jp37Q9C.docx",
                  }
                ],
              },
              {
                id: "c3-2-4",
                title: "How to Write a Root Cause So Clear Even Skeptics Trust It (and the Half-Asleep Still Get It)",
                duration: "33m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/8. How to Write a Root Cause So Clear Even Skeptics Trust It (and the Half-Asleep Still Get It).mp4",
                resources: [
                  {
                    name: "How to Write a Root Cause Explanation So Clear Even Skeptics Trust It (and the Half-Asleep Still Get It).pdf",
                    size: "1.5 MB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/8. How to Write a Root Cause Explanation So Clear Even Skeptics Trust It (and the Half-Asleep Still Get It).pdf",
                  }
                ],
              },
              {
                id: "c3-2-5",
                title: "The Secret to Writing a Unique Mechanism That Instantly .Clicks. in Your Reader's Brain",
                duration: "29m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/9. The Secret to Writing a Unique Mechanism That Instantly .Clicks. in Your Reader's Brain.mp4",
                resources: [
                  {
                    name: "How to Write a Unique Mechanism So Obvious It Feels Like the Only Way Forward.pdf",
                    size: "1.1 MB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/9. How to Write a Unique Mechanism So Obvious It Feels Like the Only Way Forward.pdf",
                  }
                ],
              },
              {
                id: "c3-2-6",
                title: "Product Build-Up - Laying the Ground for the product Building So Much Value They're Sold Before the Pitch",
                duration: "23m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/10. Product Build-Up - Laying the Ground for the product Building So Much Value They're Sold Before the Pitch.mp4",
                resources: [
                  {
                    name: "Product Build-Up- Laying the Ground for the product Building So Much Value They’re Sold Before the Pitch.pdf",
                    size: "882 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/10. Product Build-Up- Laying the Ground for the product Building So Much Value They’re Sold Before the Pitch.pdf",
                  }
                ],
              },
              {
                id: "c3-2-7",
                title: "Product Reveal - Making the Product Feel Like the Reward",
                duration: "22m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/11. Product Reveal - Making the Product Feel Like the Reward.mp4",
                resources: [
                  {
                    name: "Product Reveal- Making the Product Feel Like the Reward.pdf",
                    size: "783 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/11. Product Reveal- Making the Product Feel Like the Reward.pdf",
                  }
                ],
              },
              {
                id: "c3-2-8",
                title: "Build a Close So Manipulative They'd Have to Be Crazy Not to Grab It Before It's Gone I",
                duration: "44m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/12. Build a Close So Manipulative They'd Have to Be Crazy Not to Grab It Before It's Gone I.mp4",
                resources: [
                  {
                    name: "Build a Close So Manipulative They’d Have to Be Crazy Not to Grab It Before It’s Gone.pdf",
                    size: "3.3 MB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/12. Build a Close So Manipulative They’d Have to Be Crazy Not to Grab It Before It’s Gone.pdf",
                  }
                ],
              },
              {
                id: "c3-2-9",
                title: "Close the Sale Part II",
                duration: "14m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/2. The Blueprint for Persuasive Advertorials/13. Close the Sale Part II.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch3-s3",
            title: "Listicles",
            lessons: [
              {
                id: "c3-3-1",
                title: "The Art of Persuasion in Disguise - How 'Casual Listicles Quietly Outsell Your Hardest Pitches",
                duration: "45m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/3. Advertorial Mastery/3. Listicles/14. The Art of Persuasion in Disguise - How 'Casual Listicles Quietly Outsell Your Hardest Pitches.mp4",
                resources: [],
              }
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
              {
                id: "c4-1-1",
                title: "The First Shift - Rewiring How You See Ads (And Why 99 Fail Before They Even Start)",
                duration: "1h 11m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/1. CREATIVES FUNDEMENATLS/1. The First Shift - Rewiring How You See Ads (And Why 99 Fail Before They Even Start).mp4",
                resources: [],
              },
              {
                id: "c4-1-2",
                title: "What Is an Angle, Mastering, Testing, and Scaling Ad Angles from Definition to $100M Growth",
                duration: "56m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/1. CREATIVES FUNDEMENATLS/2. What Is an Angle, Mastering, Testing, and Scaling Ad Angles from Definition to $100M Growth.mp4",
                resources: [],
              },
              {
                id: "c4-1-3",
                title: "Angle Analysis - How a $100M Brand Runs It",
                duration: "38m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/1. CREATIVES FUNDEMENATLS/3. Angle Analysis - How a $100M Brand Runs It.mp4",
                resources: [],
              },
              {
                id: "c4-1-4",
                title: "Master Ad concepts",
                duration: "29m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/1. CREATIVES FUNDEMENATLS/4. Master Ad concepts.mp4",
                resources: [],
              },
              {
                id: "c4-1-5",
                title: "Stop Selling To Strangers - The TOF Creative Masterclass",
                duration: "46m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/1. CREATIVES FUNDEMENATLS/5. Stop Selling To Strangers - The TOF Creative Masterclass.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch4-s2",
            title: "Master TOF UGC - Learn the Foundations, See Examples, and Build Your Own",
            lessons: [
              {
                id: "c4-2-1",
                title: "How to Turn Avatar Research into High-Converting TOF UGC",
                duration: "1h 9m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/2. Master TOF UGC - Learn the Foundations, See Examples, and Build Your Own/6. How to Turn Avatar Research into High-Converting TOF UGC.mp4",
                resources: [],
              },
              {
                id: "c4-2-2",
                title: "Stop Pitching. Start Storytelling - The Art of UGC Scriptwriting That Actually Sells",
                duration: "39m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/2. Master TOF UGC - Learn the Foundations, See Examples, and Build Your Own/7. Stop Pitching. Start Storytelling - The Art of UGC Scriptwriting That Actually Sells.mp4",
                resources: [],
              },
              {
                id: "c4-2-3",
                title: "Masterclass Session - Complete Script Writing Process 3-Hour Raw Process (Uncut)",
                duration: "2h 51m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/2. Master TOF UGC - Learn the Foundations, See Examples, and Build Your Own/8. Masterclass Session - Complete Script Writing Process 3-Hour Raw Process (Uncut).mp4",
                resources: [],
              },
              {
                id: "c4-2-4",
                title: "Direct Response Script Analysis & Revision Framework",
                duration: "1h 7m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/2. Master TOF UGC - Learn the Foundations, See Examples, and Build Your Own/9. Direct Response Script Analysis & Revision Framework.mp4",
                resources: [
                  {
                    name: "Script Analysis AI Prompt V04.pdf",
                    size: "239 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/2. Master TOF UGC - Learn the Foundations,  See Examples,  and Build Your Own/9. SCRIPT ANALYSIS AI PROMPT V04.pdf",
                  }
                ],
              },
              {
                id: "c4-2-5",
                title: "The Natural Speech Converter",
                duration: "10m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/2. Master TOF UGC - Learn the Foundations, See Examples, and Build Your Own/10. THE NATURAL SPEECH CONVERTER.mp4",
                resources: [
                  {
                    name: "The Natural Speech Converter AI Promte.pdf",
                    size: "87 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/2. Master TOF UGC - Learn the Foundations,  See Examples,  and Build Your Own/10. THE NATURAL SPEECH CONVERTER AI PROMTE.pdf",
                  }
                ],
              },
              {
                id: "c4-2-6",
                title: "How to Turn Script to Brief for Content Creators",
                duration: "21m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/2. Master TOF UGC - Learn the Foundations, See Examples, and Build Your Own/11. HOW TO TURN SCRIPT TO BRIEF FOR CONTENT CREATORS.mp4",
                resources: [
                  {
                    name: "Creator Brief Generator.docx",
                    size: "990 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/2. Master TOF UGC - Learn the Foundations,  See Examples,  and Build Your Own/11. CREATOR BRIEF GENERATOR.docx",
                  },
                  {
                    name: "CREATOR BRIEF RootedHer.docx",
                    size: "16 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/2. Master TOF UGC - Learn the Foundations,  See Examples,  and Build Your Own/11. CREATOR BRIEF_ RootedHer.docx",
                  }
                ],
              }
            ],
          },
          {
            id: "ch4-s3",
            title: "TOF Image Ads",
            lessons: [
              {
                id: "c4-3-1",
                title: "The Hidden Art of .Ugly. Native Ads & the Psychology That Makes Them Unstoppable",
                duration: "1h 16m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/3. TOF IMAGE ADS/12. The Hidden Art of .Ugly. Native Ads & the Psychology That Makes Them Unstoppable.mp4",
                resources: [
                  {
                    name: "Ad copy Advertorial EX1.pdf",
                    size: "217 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/3. TOF IMAGE ADS/12. Ad copy _ Advertorial EX1 .pdf",
                  },
                  {
                    name: "Copy of Ad copy Lead EX2.pdf",
                    size: "47 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/3. TOF IMAGE ADS/12. Copy of Ad copy _ Lead EX2.pdf",
                  },
                  {
                    name: "Examples of Brands thats print with Ugly image ads.pdf",
                    size: "53 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/3. TOF IMAGE ADS/12. Examples of Brands thats print with Ugly image ads.pdf",
                  },
                  {
                    name: "Ad copy Advertorial EX3.pdf",
                    size: "255 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/3. TOF IMAGE ADS/12. _Ad copy _ Advertorial EX3.pdf",
                  }
                ],
              }
            ],
          },
          {
            id: "ch4-s4",
            title: "Ad Learning Lab",
            lessons: [
              {
                id: "c4-4-1",
                title: "THE LEARNING OF ADS - Why Breaking Down Ads Is Your Path to Consistent Winners",
                duration: "27m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/13. THE LEARNING OF ADS - Why Breaking Down Ads Is Your Path to Consistent Winners.mp4",
                resources: [],
              },
              {
                id: "c4-4-2",
                title: "How to Manually Break Down Winner Ads Like a $100M Marketer",
                duration: "34m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/14. How to Manually Break Down Winner Ads Like a $100M Marketer.mp4",
                resources: [
                  {
                    name: "The Winning Ad Deconstruction Workbook.pdf",
                    size: "228 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/14. THE WINNING AD DECONSTRUCTION WORKBOOK.pdf",
                  }
                ],
              },
              {
                id: "c4-4-3",
                title: "Raw Winner Ad Breakdown Session Part 1",
                duration: "1h 53m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/15. Raw Winner Ad Breakdown Session Part 1.mp4",
                resources: [],
              },
              {
                id: "c4-4-4",
                title: "Part 2 Raw winner ad session",
                duration: "40m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/16. Part 2 Raw winner ad session.mp4",
                resources: [],
              },
              {
                id: "c4-4-5",
                title: "Breaking down winner ads with AI",
                duration: "1h 1m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/17. Breaking down winner ads with AI.mp4",
                resources: [
                  {
                    name: "AI Winning Ad Deconstruction.pdf",
                    size: "183 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/17. AI  WINNING AD DECONSTRUCTION.pdf",
                  }
                ],
              },
              {
                id: "c4-4-6",
                title: "Comparing Our Manual Breakdown to Its AI Analysis",
                duration: "27m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/18. COMPARING OUR MANUAL BREAKDOWN TO ITS AI ANALYSIS.mp4",
                resources: [
                  {
                    name: "Comparing Your Manual Breakdown to Its AI Analysis.pdf",
                    size: "123 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/18. COMPARING YOUR MANUAL BREAKDOWN TO ITS AI ANALYSIS.pdf",
                  }
                ],
              },
              {
                id: "c4-4-7",
                title: "Breaking down winners ADs Firstday Manually",
                duration: "1h 23m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/19. Breaking down winners ADs Firstday Manually.mp4",
                resources: [
                  {
                    name: "9489942D-1178-40B3-8Cdd-088B678133b6.docx",
                    size: "20 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/19. 9489942d-1178-40b3-8cdd-088b678133b6.docx",
                  }
                ],
              },
              {
                id: "c4-4-8",
                title: "First Day AI breakdown and compare it to our manual",
                duration: "32m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/4. Ad Learning Lab/20. First Day AI breakdown and compare it to our manual.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch4-s5",
            title: "The No-Spend Diagnosis (CBO Rejects)",
            lessons: [
              {
                id: "c4-5-1",
                title: "The No-Spend Diagnosis (CBO Rejects)",
                duration: "33m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/6.Ad Learning Lab Loosing AD AD (New)/1.THE NO-SPEND DIAGNOSIS (CBO REJECTS).mp4",
                resources: [
                  {
                    name: "The Losing Ad Autopsy Learning.docx",
                    size: "32 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/6.Ad Learning Lab Loosing AD AD (New)/1.THE LOSING AD AUTOPSY _ LEARNING.docx",
                  }
                ],
              },
              {
                id: "c4-5-2",
                title: "The Full Autopsy (Ad Got Spend and Failed)",
                duration: "53m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/6.Ad Learning Lab Loosing AD AD (New)/2.THE FULL AUTOPSY (AD GOT SPEND AND FAILED).mp4",
                resources: [
                  {
                    name: "The Losing Ad Autopsy Learning.docx",
                    size: "32 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/6.Ad Learning Lab Loosing AD AD (New)/2.THE LOSING AD AUTOPSY _ LEARNING.docx",
                  },
                  {
                    name: "The Losing Ad Autopsy — Filled Example.docx",
                    size: "23 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/6.Ad Learning Lab Loosing AD AD (New)/2.THE LOSING AD AUTOPSY — FILLED EXAMPLE.docx",
                  }
                ],
              },
              {
                id: "c4-5-3",
                title: "Autopsy Long Copy Native Ad",
                duration: "1h 4m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/6.Ad Learning Lab Loosing AD AD (New)/3.AUTOPSY LONG COPY NATIVE AD.mp4",
                resources: [
                  {
                    name: "The Native Ad Autopsy Winner Edition.docx",
                    size: "21 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/6.Ad Learning Lab Loosing AD AD (New)/3.THE NATIVE AD AUTOPSY_ WINNER EDITION.docx",
                  },
                  {
                    name: "ULTIMATE Long Form Ad Swipe File (1).xlsx",
                    size: "49 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/4. Creatives Mastery behind 100M$ Brand/6.Ad Learning Lab Loosing AD AD (New)/3.ULTIMATE_Long_Form_Ad_Swipe_File (1).xlsx",
                  }
                ],
              }
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
              {
                id: "c5-1-1",
                title: "The Foundation. Brand-Safe Direct Response — How to Conv",
                duration: "32m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 0 - Introduction - The Foundation of Everything/1. The Foundation. Brand-Safe Direct Response — How to Conv.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch5-s2",
            title: "Part 1 - Market Intelligence",
            lessons: [
              {
                id: "c5-2-1",
                title: "The 5 Awareness Levels",
                duration: "16m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 1 - Market Intelligence/2. The 5 Awareness Levels.mp4",
                resources: [],
              },
              {
                id: "c5-2-2",
                title: "The 5 Sophistication Stages",
                duration: "10m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 1 - Market Intelligence/3. The 5 Sophistication Stages.mp4",
                resources: [],
              },
              {
                id: "c5-2-3",
                title: "Identifying Your Market Position",
                duration: "14m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 1 - Market Intelligence/4. Identifying Your Market Position.mp4",
                resources: [],
              },
              {
                id: "c5-2-4",
                title: "The Awareness × Sophistication Matrix",
                duration: "14m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 1 - Market Intelligence/5. The Awareness × Sophistication Matrix.mp4",
                resources: [],
              },
              {
                id: "c5-2-5",
                title: "Adjusting Copy for Market Position (Practical Application)",
                duration: "21m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 1 - Market Intelligence/6. Adjusting Copy for Market Position (Practical Application).mp4",
                resources: [
                  {
                    name: "Part-I-Market-Intelligence (1).pptx",
                    size: "1.0 MB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 1 - Market Intelligence/6. Part-I-Market-Intelligence (1).pptx",
                  }
                ],
              }
            ],
          },
          {
            id: "ch5-s3",
            title: "Part 2 - Buyer Psychology",
            lessons: [
              {
                id: "c5-3-1",
                title: "The 6 Core Buying Emotions - What Actually Drives Purchases",
                duration: "22m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 2 - Buyer Psychology/7. The 6 Core Buying Emotions - What Actually Drives Purchases.mp4",
                resources: [],
              },
              {
                id: "c5-3-2",
                title: "The Emotional Journey to Purchase",
                duration: "9m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 2 - Buyer Psychology/8. The Emotional Journey to Purchase.mp4",
                resources: [],
              },
              {
                id: "c5-3-3",
                title: "Pain vs Desire — Two Buying Modes",
                duration: "12m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 2 - Buyer Psychology/9. Pain vs Desire — Two Buying Modes.mp4",
                resources: [],
              },
              {
                id: "c5-3-4",
                title: "The Buyer vs User Dynamic - When Two People Need Convincing",
                duration: "11m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 2 - Buyer Psychology/10. The Buyer vs User Dynamic - When Two People Need Convincing.mp4",
                resources: [],
              },
              {
                id: "c5-3-5",
                title: "Emotional Intensity & Timing",
                duration: "15m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 2 - Buyer Psychology/11. Emotional Intensity & Timing.mp4",
                resources: [],
              },
              {
                id: "c5-3-6",
                title: "The Purchase Hesitation Emotions",
                duration: "9m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 2 - Buyer Psychology/12. The Purchase Hesitation Emotions.mp4",
                resources: [],
              },
              {
                id: "c5-3-7",
                title: "🤖 Buyer Psychology Analyzer the Master Prompt",
                duration: "",
                src: "",
                resources: [],
              },
              {
                id: "c5-3-8",
                title: "Male vs Female Psychology of Selling",
                duration: "13m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 2 - Buyer Psychology/14. Male vs Female Psychology of Selling.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch5-s4",
            title: "Part 3 - Copywriting Techniques",
            lessons: [
              {
                id: "c5-4-1",
                title: "Intro",
                duration: "3m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/15. Intro.mp4",
                resources: [],
              },
              {
                id: "c5-4-2",
                title: "Foundation - Speaking Their Language",
                duration: "8m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/16. Foundation - Speaking Their Language.mp4",
                resources: [
                  {
                    name: "🤖 AI Prompt Voice Extraction.docx",
                    size: "7 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/16. 🤖 AI PROMPT_ VOICE EXTRACTION.docx",
                  }
                ],
              },
              {
                id: "c5-4-3",
                title: "Words That Kill Conversions - What NOT to Write",
                duration: "9m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/17. Words That Kill Conversions - What NOT to Write.mp4",
                resources: [],
              },
              {
                id: "c5-4-4",
                title: "Specificity Injection - The #1 Technique That Separates Pros From Amateurs",
                duration: "9m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/18. Specificity Injection - The #1 Technique That Separates Pros From Amateurs.mp4",
                resources: [
                  {
                    name: "🔢 the 7 Types of Specificity.docx",
                    size: "986 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/18. 🔢 THE 7 TYPES OF SPECIFICITY_.docx",
                  }
                ],
              },
              {
                id: "c5-4-5",
                title: "Open Loops - How to KEEP Attention",
                duration: "17m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/19. Open Loops - How to KEEP Attention.mp4",
                resources: [
                  {
                    name: "🤖 AI Prompt Generate Open Loops From Your Avatar File.docx",
                    size: "10 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/19. 🤖 AI PROMPT_ GENERATE OPEN LOOPS FROM YOUR AVATAR FILE.docx",
                  }
                ],
              },
              {
                id: "c5-4-6",
                title: "Bucket Brigades & Transitions",
                duration: "8m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/20. Bucket Brigades & Transitions.mp4",
                resources: [
                  {
                    name: "🤖 AI Prompt Generate Bucket Brigades for Your Avatar.docx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/20. 🤖 AI PROMPT_ GENERATE BUCKET BRIGADES FOR YOUR AVATAR.docx",
                  },
                  {
                    name: "🪣 the Bucket Brigade Toolkit.docx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/20. 🪣 THE BUCKET BRIGADE TOOLKIT.docx",
                  }
                ],
              },
              {
                id: "c5-4-7",
                title: "Sensory Language - Make Them FEEL It",
                duration: "12m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/21. Sensory Language - Make Them FEEL It.mp4",
                resources: [
                  {
                    name: "🎨 the 5 Senses in Copy.docx",
                    size: "983 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/21. 🎨 THE 5 SENSES IN COPY.docx",
                  },
                  {
                    name: "🤖 AI Prompt Generate Sensory Language From Your Avatar File.docx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/21. 🤖 AI PROMPT_ GENERATE SENSORY LANGUAGE FROM YOUR AVATAR FILE.docx",
                  }
                ],
              },
              {
                id: "c5-4-8",
                title: "Future pacing",
                duration: "11m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/22. Future pacing.mp4",
                resources: [
                  {
                    name: "AI Prompt Generate Dopamine-Activating Future Pacing.docx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/22. AI PROMPT_ GENERATE DOPAMINE-ACTIVATING FUTURE PACING.docx",
                  }
                ],
              },
              {
                id: "c5-4-9",
                title: "Rhythm & Flow - The Music of Copy",
                duration: "8m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/23. Rhythm & Flow - The Music of Copy.mp4",
                resources: [
                  {
                    name: "Rhythm & Flow The Music of Copy.docx",
                    size: "988 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/23. Rhythm & Flow _The Music of Copy.docx",
                  }
                ],
              },
              {
                id: "c5-4-10",
                title: "The Damaging Admission",
                duration: "14m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/24. The Damaging Admission.mp4",
                resources: [],
              },
              {
                id: "c5-4-11",
                title: "The Takeaway & Disqualification",
                duration: "7m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/25. The Takeaway & Disqualification.mp4",
                resources: [
                  {
                    name: "📝 EXAMPLE OUTPUT KNEE PAIN (Age 58).docx",
                    size: "9 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/25. 📝 EXAMPLE OUTPUT_ KNEE PAIN (Age 58).docx",
                  },
                  {
                    name: "📝 EXAMPLE OUTPUT MENOPAUSE (Age 52).docx",
                    size: "9 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/25. 📝 EXAMPLE OUTPUT_ MENOPAUSE (Age 52).docx",
                  },
                  {
                    name: "🤖 AI Prompt Generate Takeaway & Disqualification Copy.docx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 3 - Copywriting Techniques/25. 🤖 AI PROMPT_ GENERATE TAKEAWAY & DISQUALIFICATION COPY.docx",
                  }
                ],
              },
              {
                id: "c5-4-12",
                title: "Part-III-Copywriting-Techniques",
                duration: "",
                src: "",
                resources: [],
              }
            ],
          },
          {
            id: "ch5-s5",
            title: "Part 4 - Hooks & Attention",
            lessons: [
              {
                id: "c5-5-1",
                title: "The Psychology of Attention Why People Stop (Or Don't)",
                duration: "31m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/1. The Psychology of Attention Why People Stop (Or Don't).mp4",
                resources: [],
              },
              {
                id: "c5-5-2",
                title: "Hook Rate Benchmarks",
                duration: "12m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/2. Hook Rate Benchmarks.mp4",
                resources: [],
              },
              {
                id: "c5-5-3",
                title: "Mining Customer Language Your Unfair Advantage",
                duration: "7m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/3. Mining Customer Language Your Unfair Advantage.mp4",
                resources: [
                  {
                    name: "🤖 AI Prompt Mine Customer Language From Avatar for Hooks.docx",
                    size: "9 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/3. 🤖 AI PROMPT_ MINE CUSTOMER LANGUAGE FROM AVATAR FOR HOOKS.docx",
                  }
                ],
              },
              {
                id: "c5-5-4",
                title: "Hook Stacking Visual + Text + Audio Layering",
                duration: "9m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/4. Hook Stacking Visual + Text + Audio Layering.mp4",
                resources: [],
              },
              {
                id: "c5-5-5",
                title: "Scroll-Stop Trigger Phrases",
                duration: "28m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/5. Scroll-Stop Trigger Phrases.mp4",
                resources: [
                  {
                    name: "🎯 the Trigger Phrase Cheat Sheet.docx",
                    size: "7 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/5. 🎯 THE TRIGGER PHRASE CHEAT SHEET.docx",
                  },
                  {
                    name: "💣 the Trigger Phrase Word Banks.docx",
                    size: "10 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/5. 💣 THE TRIGGER PHRASE WORD BANKS.docx",
                  }
                ],
              },
              {
                id: "c5-5-6",
                title: "The First 3 Lines Opening Sentences That Lock Them In",
                duration: "17m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/6. The First 3 Lines Opening Sentences That Lock Them In.mp4",
                resources: [
                  {
                    name: "🔥 the Formulas.docx",
                    size: "8 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/6. 🔥 THE FORMULAS .docx",
                  }
                ],
              },
              {
                id: "c5-5-7",
                title: "Hook Mistakes That Kill Attention: What NOT to Do",
                duration: "29m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 4 - Hooks & Attention/7. Hook Mistakes That Kill Attention%3a What NOT to Do.mp4",
                resources: [],
              },
              {
                id: "c5-5-8",
                title: "🤖 Hook Generator the Master Prompt",
                duration: "",
                src: "",
                resources: [],
              },
              {
                id: "c5-5-9",
                title: "Part-IV-Hooks-Attention",
                duration: "",
                src: "",
                resources: [],
              }
            ],
          },
          {
            id: "ch5-s6",
            title: "Part 5 - Story & Drama",
            lessons: [
              {
                id: "c5-6-1",
                title: "Intro",
                duration: "3m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/1. Intro.mp4",
                resources: [],
              },
              {
                id: "c5-6-2",
                title: "Why Story Bypasses Skepticism",
                duration: "16m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/2. Why Story Bypasses Skepticism.mp4",
                resources: [],
              },
              {
                id: "c5-6-3",
                title: "The 3 Story Types That Convert",
                duration: "8m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/3. The 3 Story Types That Convert.mp4",
                resources: [],
              },
              {
                id: "c5-6-4",
                title: "Short UGC Story Structure",
                duration: "21m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/4. Short UGC Story Structure.mp4",
                resources: [],
              },
              {
                id: "c5-6-5",
                title: "1. Short UGC Story Arc Breakdown. 21M View Ad",
                duration: "12m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/5. 1. Short UGC Story Arc Breakdown. 21M View Ad.mp4",
                resources: [
                  {
                    name: "Content.txt",
                    size: "0 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/5. Content.txt",
                  }
                ],
              },
              {
                id: "c5-6-6",
                title: "2. Short UGC Story Arc Breakdown. 27M View Ad",
                duration: "12m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/6. 2. Short UGC Story Arc Breakdown. 27M View Ad.mp4",
                resources: [
                  {
                    name: "Content.txt",
                    size: "0 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/6. Content.txt",
                  }
                ],
              },
              {
                id: "c5-6-7",
                title: "3. Short UGC Story Arc Breakdown. 27M View Ad",
                duration: "8m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/7. 3. Short UGC Story Arc Breakdown. 27M View Ad.mp4",
                resources: [
                  {
                    name: "Content.txt",
                    size: "0 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/7. Content.txt",
                  }
                ],
              },
              {
                id: "c5-6-8",
                title: "4. Short UGC Story Arc Breakdown. 19M View Ad",
                duration: "5m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/8. 4. Short UGC Story Arc Breakdown. 19M View Ad.mp4",
                resources: [
                  {
                    name: "Content.txt",
                    size: "0 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/8. Content.txt",
                  },
                  {
                    name: "Short UGC Story Structure.txt",
                    size: "0 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/8. Short UGC Story Structure.txt",
                  }
                ],
              },
              {
                id: "c5-6-9",
                title: "5. Short UGC Story Arc Breakdown. 21M View Ad",
                duration: "6m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/9. 5. Short UGC Story Arc Breakdown. 21M View Ad.mp4",
                resources: [
                  {
                    name: "Content.txt",
                    size: "0 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/9. Content.txt",
                  }
                ],
              },
              {
                id: "c5-6-10",
                title: "Testimonial Stories That Feel Real",
                duration: "16m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/10.Testimonial Stories That Feel Real.mp4",
                resources: [],
              },
              {
                id: "c5-6-11",
                title: "Breakdown Testimonial Stories",
                duration: "15m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/11.Breakdown Testimonial Stories.mp4",
                resources: [],
              },
              {
                id: "c5-6-12",
                title: "Long-Form UGC Story (Yapping Style)",
                duration: "19m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/12.Long-Form UGC Story (Yapping Style).mp4",
                resources: [],
              },
              {
                id: "c5-6-13",
                title: "Yapping UGC breakdown",
                duration: "10m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/13.Yapping UGC breakdown.mp4",
                resources: [
                  {
                    name: "Yapping UGC breakdown.txt",
                    size: "0 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/13.Yapping UGC breakdown.txt",
                  }
                ],
              },
              {
                id: "c5-6-14",
                title: "Full Story Arc for Sales",
                duration: "38m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/14.Full Story Arc for Sales.mp4",
                resources: [],
              },
              {
                id: "c5-6-15",
                title: "Derila ergo Ad 1Breakdown",
                duration: "30m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/15.Derila ergo Ad 1Breakdown.mp4",
                resources: [
                  {
                    name: "Derila ergo Ad 1Breakdown.pdf",
                    size: "154 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/5. ELITE COPYWRITING Masterclass/Part 5 - Story & Drama/15.Derila ergo Ad 1Breakdown.pdf",
                  }
                ],
              }
            ],
          }
        ],
      },
      {
        id: "ch6",
        title: "Meta Campaign Blueprint",
        lessons: [
          {
            id: "c6-1",
            title: "Early Black Friday to Black Friday - Complete Campaign Structure",
            duration: "29m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/6. META CAMPAIGN BLUEPRINT/1. Early Black Friday to Black Friday - Complete Campaign Structure.mp4",
            resources: [
              {
                name: "The Complete Black Friday META Ads Playbook.pdf",
                size: "197 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/6. META CAMPAIGN BLUEPRINT/1. The Complete Black Friday META Ads Playbook.pdf",
              }
            ],
          },
          {
            id: "c6-2",
            title: "Stop Overthinking Meta Ads - The Only Structure You'll Ever Need",
            duration: "26m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/6. META CAMPAIGN BLUEPRINT/2. Stop Overthinking Meta Ads - The Only Structure You'll Ever Need.mp4",
            resources: [
              {
                name: "Meta Ads Structure & Scaling SOP v2.0.pdf",
                size: "186 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/6. META CAMPAIGN BLUEPRINT/2. Meta Ads Structure & Scaling SOP v2.0.pdf",
              }
            ],
          }
        ],
      },
      {
        id: "ch7",
        title: "Landing Pages Breakdowns",
        lessons: [
          {
            id: "c7-1",
            title: "First Day Landing Page Breakdown - Why This $100M+ Brand's Funnel Converts",
            duration: "25m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/7. Landing Pages Breakdowns/First Day Landing Page Breakdown - Why This $100M+ Brand's Funnel Converts.mp4",
            resources: [
              {
                name: "Content.txt",
                size: "0 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/7. Landing Pages Breakdowns/Content.txt",
              }
            ],
          }
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
              {
                id: "c8-1-1",
                title: "Introduction & UGC is NOT Influencer Marketing Here's the Difference",
                duration: "16m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/8. UGC Engine Masterclass/1. UGC Foundations/1. Introduction_&_UGC_is_NOT_Influencer_Marketing_Here's_the_Difference.mp4",
                resources: [],
              },
              {
                id: "c8-1-2",
                title: "Stop Treating UGC as a Project Build an ENGINE",
                duration: "8m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/8. UGC Engine Masterclass/1. UGC Foundations/2. Stop Treating UGC as a Project Build an ENGINE.mp4",
                resources: [],
              },
              {
                id: "c8-1-3",
                title: "The Only 2 Roles You Need to Run UGC at Scale",
                duration: "16m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/8. UGC Engine Masterclass/1. UGC Foundations/3. The Only 2 Roles You Need to Run UGC at Scale.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch8-s2",
            title: "Finding Creators",
            lessons: [
              {
                id: "c8-2-1",
                title: "Where creators live, TikTok tactics, Instagram tactics, Twitter",
                duration: "14m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/8. UGC Engine Masterclass/2. Finding Creators/4. _Where_creators_live,_TikTok_tactics,_Instagram_tactics,_Twitter.mp4",
                resources: [
                  {
                    name: "Module2-Complete-Resource-Pack.docx",
                    size: "11 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/8. UGC Engine Masterclass/2. Finding Creators/4. Module2-Complete-Resource-Pack.docx",
                  }
                ],
              }
            ],
          },
          {
            id: "ch8-s3",
            title: "Vetting & Scoring",
            lessons: [
              {
                id: "c8-3-1",
                title: "Vetting & Scoring",
                duration: "8m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/8. UGC Engine Masterclass/3. Vetting & Scoring/5. Vetting & Scoring.mp4",
                resources: [],
              }
            ],
          },
          {
            id: "ch8-s4",
            title: "Outreach That Works",
            lessons: [
              {
                id: "c8-4-1",
                title: "Outreach That Works",
                duration: "13m",
                src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/8. UGC Engine Masterclass/4. Outreach That Works/6. Outreach That Works.mp4",
                resources: [
                  {
                    name: "Module4-Outreach-Templates.pdf",
                    size: "123 KB",
                    key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/8. UGC Engine Masterclass/4. Outreach That Works/6. Module4-Outreach-Templates.pdf",
                  }
                ],
              }
            ],
          }
        ],
      },
      {
        id: "ch9",
        title: "How to Build VSLs That Print Revenue",
        lessons: [
          {
            id: "c9-1",
            title: "The VSL Mind Shift",
            duration: "2m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/9. How to Build VSLs That Print Revenue/Module 0 — The VSL Mind Shift/1. The VSL Mind Shift.mp4",
            resources: [],
          },
          {
            id: "c9-2",
            title: "FOUNDATION: What a VSL Actually Is",
            duration: "11m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/9. How to Build VSLs That Print Revenue/Module 0 — The VSL Mind Shift/2. FOUNDATION%3a What a VSL Actually Is.mp4",
            resources: [],
          },
          {
            id: "c9-3",
            title: "PSYCHOLOGY: The Psychology of Buying",
            duration: "13m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/9. How to Build VSLs That Print Revenue/Module 0 — The VSL Mind Shift/3. PSYCHOLOGY%3a The Psychology of Buying.mp4",
            resources: [],
          },
          {
            id: "c9-4",
            title: "STRATEGY: Why VSLs Win at the Conversion Stage",
            duration: "6m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/9. How to Build VSLs That Print Revenue/Module 0 — The VSL Mind Shift/4. STRATEGY%3a Why VSLs Win at the Conversion Stage.mp4",
            resources: [],
          },
          {
            id: "c9-5",
            title: "ARCHITECTURE :The VSL Funnel Ecosystem",
            duration: "23m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/9. How to Build VSLs That Print Revenue/Module 0 — The VSL Mind Shift/5. ARCHITECTURE %3aThe VSL Funnel Ecosystem.mp4",
            resources: [],
          }
        ],
      },
      {
        id: "ch10",
        title: "Building Brand With AI",
        lessons: [
          {
            id: "c10-1",
            title: "AVATAR RESEARCH WITH AI + Check With Supplier",
            duration: "13m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/1.AVATAR RESEARCH WITH AI + Check With Supplier.mp4",
            resources: [
              {
                name: "The Universal Avatar Intelligence Prompt.pdf",
                size: "175 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/1.THE UNIVERSAL AVATAR INTELLIGENCE PROMPT.pdf",
              }
            ],
          },
          {
            id: "c10-2",
            title: "The Root Cause & Mechanism With AI manus",
            duration: "9m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/2.The Root Cause & Mechanism With AI manus.mp4",
            resources: [
              {
                name: "2.txt",
                size: "1 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/2.2.txt",
              },
              {
                name: "3 Prompt 2 — the Formula & Mechanism Prompt.pdf",
                size: "156 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/2.3 PROMPT_2_—_THE_FORMULA_&_MECHANISM_PROMPT.pdf",
              }
            ],
          },
          {
            id: "c10-3",
            title: "Check And fill Trademark",
            duration: "1m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/3.Check And fill Trademark.mp4",
            resources: [
              {
                name: "Trademark SOP.pdf",
                size: "126 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/3.Trademark SOP.pdf",
              }
            ],
          },
          {
            id: "c10-4",
            title: "Genrated Label Facts Panel and Bottle Mockup with AI Manus",
            duration: "4m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/4.Genrated Label Facts Panel and Bottle Mockup with AI Manus.mp4",
            resources: [
              {
                name: "1 Use Prompt 3 to generate label.txt",
                size: "0 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/4.1 Use Prompt 3 to generate label.txt",
              },
              {
                name: "2 Prompt 3 — Bottle Label Design Prompt.pdf",
                size: "146 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/4.2 PROMPT_3_—_BOTTLE_LABEL_DESIGN_PROMPT.pdf",
              },
              {
                name: "3 Prompt 4 — Bottle Mockup Generation Prompt.pdf",
                size: "97 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/4.3 PROMPT_4_—_BOTTLE_MOCKUP_GENERATION_PROMPT.pdf",
              }
            ],
          },
          {
            id: "c10-5",
            title: "First draft of Product Page with Manus AI",
            duration: "5m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/5.First draft of Product Page with Manus AI.mp4",
            resources: [],
          },
          {
            id: "c10-6",
            title: "Building Full Product Page With Manus AI",
            duration: "39m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/6.Building Full Product Page With Manus AI.mp4",
            resources: [
              {
                name: "1 Prompt 5 — DTC Supplement Product Page Generator.pdf",
                size: "214 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/6.1 Prompt 5 — DTC Supplement Product Page Generator.pdf",
              },
              {
                name: "2 Prompt 6 — UGC Social Proof Image Generator for DTC Product Pages.pdf",
                size: "177 KB",
                key: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/10.Building Brand With AI/6.2 Prompt 6 — UGC Social Proof Image Generator for DTC Product Pages.pdf",
              }
            ],
          }
        ],
      },
      {
        id: "ch11",
        title: "New Call Recording",
        lessons: [
          {
            id: "c11-1",
            title: "Call with The Goat Nikita and How he scaled to 5M$+M",
            duration: "1h 59m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/12.New Call Recording/1,.Call with The Goat Nikita and How he scaled to 5M$+M.mp4",
            resources: [],
          },
          {
            id: "c11-2",
            title: "Call with the goat @gulfam how he scaled to 240K$Day",
            duration: "58m",
            src: "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/12.New Call Recording/2.Call with the goat @gulfam how he scaled to 240K$Day.mp4",
            resources: [],
          }
        ],
      }
    ],
  },
  {
    id: "ab-inner-circle",
    title: "AB Inner Circle - Google Ads Dropshipping",
    tagline: "The complete Google Ads dropshipping system, plus live group call recordings.",
    cover: "./abinner.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$249",
    chapters: [
      {
        id: "ab1",
        title: "Google Ads Masterclass",
        sections: [
          {
            id: "ab1-s1",
            title: "Module 1 Introduction to Google",
            lessons: [
              {
                id: "ab1-s1-1",
                title: "What is Google Ads + Why Google ads (vs Meta)",
                duration: "5m",
                src: "AB Inner Circle/1.Google Ads Masterclass/1.Module 1 Introduction to Google/1.1 What is Google Ads Why Google ads vs Meta - Google Ads Maste.mp4",
                resources: []
              },
              {
                id: "ab1-s1-2",
                title: "Timeline Google Ads",
                duration: "12m",
                src: "AB Inner Circle/1.Google Ads Masterclass/1.Module 1 Introduction to Google/1.2 Timeline Google Ads - Google Ads Masterclass AB Inner Circle.mp4",
                resources: []
              },
              {
                id: "ab1-s1-3",
                title: "Set your expectations EXTRA",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/1.Module 1 Introduction to Google/1.3 Set your expectations EXTRA - Google Ads Masterclass AB Inne.mp4",
                resources: []
              },
              {
                id: "ab1-s1-4",
                title: "How to get SHT done EXTRA",
                duration: "5m",
                src: "AB Inner Circle/1.Google Ads Masterclass/1.Module 1 Introduction to Google/1.4 How to get SHT done EXTRA - Google Ads Masterclass AB Inner.mp4",
                resources: []
              },
              {
                id: "ab1-s1-5",
                title: "SWOT analysis EXTRA",
                duration: "6m",
                src: "AB Inner Circle/1.Google Ads Masterclass/1.Module 1 Introduction to Google/1.5 SWOT analysis EXTRA - Google Ads Masterclass AB Inner Circle.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s2",
            title: "Module 2 Basics for Google Ads",
            lessons: [
              {
                id: "ab1-s2-1",
                title: "What niches to pick our recommendation",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/2.Module 2 Basics for Google Ads/2.1 What niches to pick our recommendation - Google Ads Mastercl.mp4",
                resources: []
              },
              {
                id: "ab1-s2-2",
                title: "Market recommendations payment methods",
                duration: "8m",
                src: "AB Inner Circle/1.Google Ads Masterclass/2.Module 2 Basics for Google Ads/2.2 Market recommendations payment methods - Google Ads Mastercl.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s3",
            title: "Module 3 Store building",
            lessons: [
              {
                id: "ab1-s3-1",
                title: "Competitor research",
                duration: "7m",
                src: "AB Inner Circle/1.Google Ads Masterclass/3.Module 3 Store building/3.1 Competitor research - Google Ads Masterclass AB Inner Circle.mp4",
                resources: []
              },
              {
                id: "ab1-s3-2",
                title: "Build a compliant store",
                duration: "21m",
                src: "AB Inner Circle/1.Google Ads Masterclass/3.Module 3 Store building/3.2 Build a compliant store - Google Ads Masterclass AB Inner Ci.mp4",
                resources: []
              },
              {
                id: "ab1-s3-3",
                title: "The use of AI products",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/3.Module 3 Store building/3.3 The use of AI products - Google Ads Masterclass AB Inner Cir.mp4",
                resources: []
              },
              {
                id: "ab1-s3-4",
                title: "Increase AOV CVR and urgency",
                duration: "5m",
                src: "AB Inner Circle/1.Google Ads Masterclass/3.Module 3 Store building/3.4 Increase AOV CVR and urgency - Google Ads Masterclass AB Inn.mp4",
                resources: []
              },
              {
                id: "ab1-s3-5",
                title: "AfterSell funnel (EXTRA)",
                duration: "9m",
                src: "AB Inner Circle/1.Google Ads Masterclass/3.Module 3 Store building/3.5 AfterSell funnel EXTRA - Google Ads Masterclass AB Inner Cir.mp4",
                resources: []
              },
              {
                id: "ab1-s3-6",
                title: "Improve Shopify Checkout (EXTRA)",
                duration: "7m",
                src: "AB Inner Circle/1.Google Ads Masterclass/3.Module 3 Store building/3.6 Improve Shopify Checkout EXTRA - Google Ads Masterclass AB I.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s4",
            title: "Module 4 GMCModules",
            lessons: [
              {
                id: "ab1-s4-1",
                title: "Warm up your Google Account",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/4.Module 4 GMCModules/4.1 Warm up your Google Account - Google Ads Masterclass AB Inne.mp4",
                resources: []
              },
              {
                id: "ab1-s4-2",
                title: "Google Merchant Center setup",
                duration: "13m",
                src: "AB Inner Circle/1.Google Ads Masterclass/4.Module 4 GMCModules/4.2 Google Merchant Center setup - Google Ads Masterclass AB Inn.mp4",
                resources: []
              },
              {
                id: "ab1-s4-3",
                title: "Sync feed to GMC (Simprosys)",
                duration: "4m",
                src: "AB Inner Circle/1.Google Ads Masterclass/4.Module 4 GMCModules/4.3 Sync feed to GMC Simprosys - Google Ads Masterclass AB Inner.mp4",
                resources: []
              },
              {
                id: "ab1-s4-4",
                title: "Speed up product approval",
                duration: "1m",
                src: "AB Inner Circle/1.Google Ads Masterclass/4.Module 4 GMCModules/4.4 Speed up product approval - Google Ads Masterclass AB Inner.mp4",
                resources: []
              },
              {
                id: "ab1-s4-5",
                title: "How to delete a Google Merchant Center",
                duration: "2m",
                src: "AB Inner Circle/1.Google Ads Masterclass/4.Module 4 GMCModules/4.5 How to delete a Google Merchant Center - Google Ads Mastercl.mp4",
                resources: []
              },
              {
                id: "ab1-s4-6",
                title: "Build more trust on Google (EXTRA)",
                duration: "7m",
                src: "AB Inner Circle/1.Google Ads Masterclass/4.Module 4 GMCModules/4.6 Build more trust on Google EXTRA - Google Ads Masterclass AB.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s5",
            title: "Modules 5 Launch first ads",
            lessons: [
              {
                id: "ab1-s5-1",
                title: "Launch the initial misrep campaign",
                duration: "11m",
                src: "AB Inner Circle/1.Google Ads Masterclass/5.Modules 5 Launch first ads/5. Launch the initial misrep campaign - Google Ads Masterclass.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s6",
            title: "Module 6 GMC issues",
            lessons: [
              {
                id: "ab1-s6-1",
                title: "GMC suspensions + how to fix",
                duration: "10m",
                src: "AB Inner Circle/1.Google Ads Masterclass/6.Module 6 GMC issues/6.1 GMC suspensions how to fix - Google Ads Masterclass AB Inner.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s7",
            title: "Module 6 Product Feed",
            lessons: [
              {
                id: "ab1-s7-1",
                title: "Product research",
                duration: "14m",
                src: "AB Inner Circle/1.Google Ads Masterclass/7.Module 6  Product Feed/7.1 Product research - Google Ads Masterclass AB Inner Circle.mp4",
                resources: []
              },
              {
                id: "ab1-s7-2",
                title: "Compliant product import",
                duration: "10m",
                src: "AB Inner Circle/1.Google Ads Masterclass/7.Module 6  Product Feed/7.2 Compliant product import - Google Ads Masterclass AB Inner C.mp4",
                resources: []
              },
              {
                id: "ab1-s7-3",
                title: "Optimized Product titles EXTRA",
                duration: "15m",
                src: "AB Inner Circle/1.Google Ads Masterclass/7.Module 6  Product Feed/7.3 Optimized Product titles EXTRA - Google Ads Masterclass AB I.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s8",
            title: "Module 8 Scale your ads",
            lessons: [
              {
                id: "ab1-s8-1",
                title: "Roadmap from approved to scaling",
                duration: "9m",
                src: "AB Inner Circle/1.Google Ads Masterclass/8.Module 8 Scale your ads/8.1 Roadmap from approved to scaling - Google Ads Masterclass AB.mp4",
                resources: []
              },
              {
                id: "ab1-s8-2",
                title: "Shopping PMAX Campaign Setup",
                duration: "5m",
                src: "AB Inner Circle/1.Google Ads Masterclass/8.Module 8 Scale your ads/8.2 Shopping PMAX Campaign Setup - Google Ads Masterclass AB Inn.mp4",
                resources: []
              },
              {
                id: "ab1-s8-3",
                title: "Google Ads Mediabuyer EXTRA",
                duration: "4m",
                src: "AB Inner Circle/1.Google Ads Masterclass/8.Module 8 Scale your ads/8.3 Google Ads Mediabuyer EXTRA - Google Ads Masterclass AB Inne.mp4",
                resources: []
              },
              {
                id: "ab1-s8-4",
                title: "Why use a Mediabuyer",
                duration: "5m",
                src: "AB Inner Circle/1.Google Ads Masterclass/8.Module 8 Scale your ads/8.4 Why use a Mediabuyer - Google Ads Masterclass AB Inner Circl.mp4",
                resources: []
              },
              {
                id: "ab1-s8-5",
                title: "Product Feed optimization",
                duration: "13m",
                src: "AB Inner Circle/1.Google Ads Masterclass/8.Module 8 Scale your ads/8.5 Product Feed optimization - Google Ads Masterclass AB Inner.mp4",
                resources: []
              },
              {
                id: "ab1-s8-6",
                title: "Product Feed size",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/8.Module 8 Scale your ads/8.6 Product Feed size - Google Ads Masterclass AB Inner Circle.mp4",
                resources: []
              },
              {
                id: "ab1-s8-7",
                title: "Pythago Feed Optimization (EXTRA)",
                duration: "18m",
                src: "AB Inner Circle/1.Google Ads Masterclass/8.Module 8 Scale your ads/8.7 Pythago Feed Optimization EXTRA - Google Ads Masterclass AB.mp4",
                resources: []
              },
              {
                id: "ab1-s8-8",
                title: "Having the right Pixel Data (WeTracked)",
                duration: "2m",
                src: "AB Inner Circle/1.Google Ads Masterclass/8.Module 8 Scale your ads/8.8 Having the right Pixel Data WeTracked - Google Ads Mastercla.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s9",
            title: "Module 9 Backend",
            lessons: [
              {
                id: "ab1-s9-1",
                title: "Returns Refunds Chargebacks",
                duration: "9m",
                src: "AB Inner Circle/1.Google Ads Masterclass/9.Module 9 Backend/9.1 Returns Refunds Chargebacks - Google Ads Masterclass AB Inne.mp4",
                resources: []
              },
              {
                id: "ab1-s9-2",
                title: "Email flows Delayed Shipping flows",
                duration: "11m",
                src: "AB Inner Circle/1.Google Ads Masterclass/9.Module 9 Backend/9.2 Email flows Delayed Shipping flows - Google Ads Masterclass.mp4",
                resources: []
              },
              {
                id: "ab1-s9-3",
                title: "Team building",
                duration: "8m",
                src: "AB Inner Circle/1.Google Ads Masterclass/9.Module 9 Backend/9.3 Team building - Google Ads Masterclass AB Inner Circle.mp4",
                resources: []
              },
              {
                id: "ab1-s9-4",
                title: "Supplier agreements",
                duration: "11m",
                src: "AB Inner Circle/1.Google Ads Masterclass/9.Module 9 Backend/9.4 Supplier agreements - Google Ads Masterclass AB Inner Circle.mp4",
                resources: []
              },
              {
                id: "ab1-s9-5",
                title: "Track team hours with Hubstaff EXTRA",
                duration: "9m",
                src: "AB Inner Circle/1.Google Ads Masterclass/9.Module 9 Backend/9.5 Track team hours with Hubstaff EXTRA - Google Ads Masterclas.mp4",
                resources: []
              },
              {
                id: "ab1-s9-6",
                title: "Product quality checks EXTRA",
                duration: "7m",
                src: "AB Inner Circle/1.Google Ads Masterclass/9.Module 9 Backend/9.6 Product quality checks EXTRA - Google Ads Masterclass AB Inn.mp4",
                resources: []
              },
              {
                id: "ab1-s9-7",
                title: "Structure multiple Google stores (EXTRA)",
                duration: "7m",
                src: "AB Inner Circle/1.Google Ads Masterclass/9.Module 9 Backend/9.7 Structure multiple Google stores EXTRA - Google Ads Mastercl.mp4",
                resources: []
              },
              {
                id: "ab1-s9-8",
                title: "Hiring a COO CFO EXTRA",
                duration: "16m",
                src: "AB Inner Circle/1.Google Ads Masterclass/9.Module 9 Backend/9.8 Hiring a COO CFO EXTRA - Google Ads Masterclass AB Inner Cir.mp4",
                resources: []
              },
              {
                id: "ab1-s9-9",
                title: "Payment Processing Maintain Solutions",
                duration: "9m",
                src: "AB Inner Circle/1.Google Ads Masterclass/9.Module 9 Backend/9.9 Payment Processing Maintain Solutions - Google Ads Mastercla.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s10",
            title: "Module 10 Money management",
            lessons: [
              {
                id: "ab1-s10-1",
                title: "Accounting Banking Cashback",
                duration: "4m",
                src: "AB Inner Circle/1.Google Ads Masterclass/10.Module 10 Money management/10.1 Accounting Banking Cashback - Google Ads Masterclass AB Inn.mp4",
                resources: []
              },
              {
                id: "ab1-s10-2",
                title: "Payoneer bank (EXTRA)",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/10.Module 10 Money management/10.2 Payoneer bank EXTRA - Google Ads Masterclass AB Inner Circl.mp4",
                resources: []
              },
              {
                id: "ab1-s10-3",
                title: "Slash bank (for US LLC)",
                duration: "2m",
                src: "AB Inner Circle/1.Google Ads Masterclass/10.Module 10 Money management/10.3 Slash bank for US LLC - Google Ads Masterclass AB Inner Cir.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s11",
            title: "Module 11 Chinese New Year",
            lessons: [
              {
                id: "ab1-s11-1",
                title: "What to do during CNY (Gameplan)",
                duration: "18m",
                src: "AB Inner Circle/1.Google Ads Masterclass/11.Module 11 Chinese New Year/11.1 What to do during CNY Gameplan - Google Ads Masterclass AB.mp4",
                resources: []
              },
              {
                id: "ab1-s11-2",
                title: "Your key focus during CNY (EXTRA)",
                duration: "10m",
                src: "AB Inner Circle/1.Google Ads Masterclass/11.Module 11 Chinese New Year/11.2 Your key focus during CNY EXTRA - Google Ads Masterclass AB.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s12",
            title: "Module 12 Demand during the year",
            lessons: [
              {
                id: "ab1-s12-1",
                title: "Demand timeline",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/12.Module 12 Demand during the year/12.1 Demand timeline - Google Ads Masterclass AB I.mp4",
                resources: []
              },
              {
                id: "ab1-s12-2",
                title: "Handle season switches",
                duration: "2m",
                src: "AB Inner Circle/1.Google Ads Masterclass/12.Module 12 Demand during the year/12.2 Handle season switches - Google Ads Masterclass AB Inner Ci.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s13",
            title: "Module 13 Mental",
            lessons: [
              {
                id: "ab1-s13-1",
                title: "Peak Performance Ray Nomden",
                duration: "1h 0m",
                src: "AB Inner Circle/1.Google Ads Masterclass/13.Module 13 Mental/13.1 Peak Performance Ray Nomden - Google Ads Mast.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s14",
            title: "Module 14 FAQ (Extra Sauce)",
            lessons: [
              {
                id: "ab1-s14-1",
                title: "Use notion to run your business",
                duration: "4m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.1 Use notion to run your business - Google Ads Masterclass AB.mp4",
                resources: []
              },
              {
                id: "ab1-s14-2",
                title: "Fix brokendead links",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.2 Fix brokendead links - Google Ads Masterclass AB Inner Circ.mp4",
                resources: []
              },
              {
                id: "ab1-s14-3",
                title: "When to add the mediabuyer",
                duration: "2m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.3 When to add the mediabuyer - Google Ads Masterclass AB Inne.mp4",
                resources: []
              },
              {
                id: "ab1-s14-4",
                title: "My PMAX is not spending how to fix",
                duration: "1m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.4 My PMAX is not spending how to fix - Google Ads Masterclass.mp4",
                resources: []
              },
              {
                id: "ab1-s14-5",
                title: "When to add MetaPinterest",
                duration: "2m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.5 When to add MetaPinterest - Google Ads Masterclass AB Inner.mp4",
                resources: []
              },
              {
                id: "ab1-s14-6",
                title: "How to bulk edit products",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.6 How to bulk edit products - Google Ads Masterclass AB Inner.mp4",
                resources: []
              },
              {
                id: "ab1-s14-7",
                title: "Buy local phone numbers for Google",
                duration: "1m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.7 Buy local phone numbers for Google - Google Ads Masterclass.mp4",
                resources: []
              },
              {
                id: "ab1-s14-8",
                title: "Using your Meta store for Google",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.8 Using your Meta store for Google - Google Ads Masterclass A.mp4",
                resources: []
              },
              {
                id: "ab1-s14-9",
                title: "How to use your competitor list",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.9 How to use your competitor list - Google Ads Masterclass AB.mp4",
                resources: []
              },
              {
                id: "ab1-s14-10",
                title: "What tools we use for AI products",
                duration: "1m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.10 What tools we use for AI products - Google Ads Masterclass.mp4",
                resources: []
              },
              {
                id: "ab1-s14-11",
                title: "Fix a suspended ad account",
                duration: "4m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.11 Fix a suspended ad account - Google Ads Masterclass AB Inn.mp4",
                resources: []
              },
              {
                id: "ab1-s14-12",
                title: "How many gmcs per company",
                duration: "1m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.12 How many gmcs per company - Google Ads Masterclass AB Inne.mp4",
                resources: []
              },
              {
                id: "ab1-s14-13",
                title: "Setup Metafields on product imports",
                duration: "2m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.13 Setup Metafields on product imports - Google Ads Mastercla.mp4",
                resources: []
              },
              {
                id: "ab1-s14-14",
                title: "GMC ID Verification EXTRA",
                duration: "3m",
                src: "AB Inner Circle/1.Google Ads Masterclass/14.Module 14 FAQ (Extra Sauce)/14.14 GMC ID Verification EXTRA - Google Ads Masterclass AB Inne.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab1-s15",
            title: "Module 15 Million Dollar Talks",
            lessons: [
              {
                id: "ab1-s15-1",
                title: "The first ever 1M Circle call",
                duration: "58m",
                src: "AB Inner Circle/1.Google Ads Masterclass/15.Module 15 Million Dollar Talks/15.The first ever 1M Circle call - Google Ads Masterclass AB I.mp4",
                resources: []
              }
            ]
          }
        ]
      },
      {
        id: "ab2",
        title: "Group Call Recordings",
        sections: [
          {
            id: "ab2-s1",
            title: "Arthur & Bryan",
            lessons: [
              {
                id: "ab2-s1-1",
                title: "Recording 02.06 - Arthur Bryan",
                duration: "59m",
                src: "AB Inner Circle/2.Group Call Recordings/1.Arthur & Bryan/RECORDING 02.06 - Arthur Bryan - Group Call Recordings AB Inner C.mp4",
                resources: []
              },
              {
                id: "ab2-s1-2",
                title: "Recording 06.04 - Arthur Bryan",
                duration: "51m",
                src: "AB Inner Circle/2.Group Call Recordings/1.Arthur & Bryan/RECORDING 06.04 - Arthur Bryan - Group Call Recordings AB Inner C.mp4",
                resources: []
              },
              {
                id: "ab2-s1-3",
                title: "Recording 09.06 - Arthur Bryan",
                duration: "56m",
                src: "AB Inner Circle/2.Group Call Recordings/1.Arthur & Bryan/RECORDING 09.06 - Arthur Bryan - Group Call Recordings AB Inner C.mp4",
                resources: []
              },
              {
                id: "ab2-s1-4",
                title: "Recording 12.05 - Arthur Bryan",
                duration: "1h 4m",
                src: "AB Inner Circle/2.Group Call Recordings/1.Arthur & Bryan/RECORDING 12.05 - Arthur Bryan - Group Call Recordings AB Inner C.mp4",
                resources: []
              },
              {
                id: "ab2-s1-5",
                title: "Recording 15.04 - Arthur Bryan",
                duration: "1h 0m",
                src: "AB Inner Circle/2.Group Call Recordings/1.Arthur & Bryan/RECORDING 15.04 - Arthur Bryan - Group Call Recordings AB Inner C.mp4",
                resources: []
              },
              {
                id: "ab2-s1-6",
                title: "Recording 17.03 - Arthur Bryan",
                duration: "1h 22m",
                src: "AB Inner Circle/2.Group Call Recordings/1.Arthur & Bryan/RECORDING 17.03 - Arthur Bryan - Group Call Recordings AB Inner C.mp4",
                resources: []
              },
              {
                id: "ab2-s1-7",
                title: "Recording 19.05 - Arthur Bryan",
                duration: "1h 7m",
                src: "AB Inner Circle/2.Group Call Recordings/1.Arthur & Bryan/RECORDING 19.05 - Arthur Bryan - Group Call Recordings AB Inner C.mp4",
                resources: []
              },
              {
                id: "ab2-s1-8",
                title: "Recording 21.04 - Arthur Bryan",
                duration: "1h 18m",
                src: "AB Inner Circle/2.Group Call Recordings/1.Arthur & Bryan/RECORDING 21.04 - Arthur Bryan - Group Call Recordings AB Inner C.mp4",
                resources: []
              },
              {
                id: "ab2-s1-9",
                title: "Recording 26.05 - Arthur Bryan",
                duration: "49m",
                src: "AB Inner Circle/2.Group Call Recordings/1.Arthur & Bryan/RECORDING 26.05 - Arthur Bryan - Group Call Recordings AB Inner C.mp4",
                resources: []
              },
              {
                id: "ab2-s1-10",
                title: "Recording 28.04 - Arthur Bryan",
                duration: "1h 17m",
                src: "AB Inner Circle/2.Group Call Recordings/1.Arthur & Bryan/RECORDING 28.04 - Arthur Bryan - Group Call Recordings AB Inner C.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab2-s2",
            title: "Kevin",
            lessons: [
              {
                id: "ab2-s2-1",
                title: "Recording 07.05 - Kevin",
                duration: "1h 16m",
                src: "AB Inner Circle/2.Group Call Recordings/2.Kevin/RECORDING 07.05 - Kevin - Group Call Recordings AB Inner Circle.mp4",
                resources: []
              },
              {
                id: "ab2-s2-2",
                title: "Recording 09.04 - Kevin",
                duration: "1h 24m",
                src: "AB Inner Circle/2.Group Call Recordings/2.Kevin/RECORDING 09.04 - Kevin - Group Call Recordings AB Inner Circle.mp4",
                resources: []
              },
              {
                id: "ab2-s2-3",
                title: "Recording 23.04 - Kevin",
                duration: "1h 23m",
                src: "AB Inner Circle/2.Group Call Recordings/2.Kevin/RECORDING 23.04 - Kevin - Group Call Recordings AB Inner Circle.mp4",
                resources: []
              },
              {
                id: "ab2-s2-4",
                title: "Recording 23.05 - Kevin",
                duration: "1h 6m",
                src: "AB Inner Circle/2.Group Call Recordings/2.Kevin/RECORDING 23.05 - Kevin - Group Call Recordings AB Inner Circle.mp4",
                resources: []
              }
            ]
          },
          {
            id: "ab2-s3",
            title: "Guest Speaker",
            lessons: [
              {
                id: "ab2-s3-1",
                title: "Recording 09.03 - Ray Nomden",
                duration: "1h 0m",
                src: "AB Inner Circle/2.Group Call Recordings/3.Guest Speaker/RECORDING 09.03 - Ray Nomden - Group Call Recordings AB Inner Cir.mp4",
                resources: []
              },
              {
                id: "ab2-s3-2",
                title: "Recording 11.06 - Alec Devadder",
                duration: "1h 14m",
                src: "AB Inner Circle/2.Group Call Recordings/3.Guest Speaker/RECORDING 11.06 - Alec Devadder - Group Call Recordings AB Inner.mp4",
                resources: []
              },
              {
                id: "ab2-s3-3",
                title: "Recording 26.03 - Kevin Arthur Bryan",
                duration: "1h 16m",
                src: "AB Inner Circle/2.Group Call Recordings/3.Guest Speaker/RECORDING 26.03 - Kevin Arthur Bryan - Group Call Recordings AB I.mp4",
                resources: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ecommerce-mrr-mastery",
    title: "E-Commerce MRR Mastery By Brandon van Mierlo",
    tagline: "Coming soon — course content is being added.",
    cover: "./brandon.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$6,000",
    vipOnly: true,
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
    id: "viral-ai-wizards",
    title: "Viral Ai Wizards by Lendon Bracewell",
    tagline: "AI video generation and viral content pipelines, from script to scale.",
    cover: "./viralai.jpg",
    accent: "#FF4211",
    category: "ai-automation",
    price: "$49",
    chapters: [
      {
        id: "vaw1",
        title: "Film Wizard",
        lessons: [
          {
            id: "vaw1-1",
            title: "Script Wizard 4.1",
            duration: "2m",
            src: "Ai Video Wizards/1. Film Wizard/2.1 Script Wizard 4.1 - Film Wizard Viral Ai Wizards .mp4",
            resources: []
          },
          {
            id: "vaw1-2",
            title: "Script Wizard 4.1",
            duration: "1m",
            src: "Ai Video Wizards/1. Film Wizard/2.2 Script Wizard 4.1 - Film Wizard Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw1-3",
            title: "Film Wizard",
            duration: "9m",
            src: "Ai Video Wizards/1. Film Wizard/3.1 Film Wizard - Film Wizard Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw1-4",
            title: "Film Wizard",
            duration: "2m",
            src: "Ai Video Wizards/1. Film Wizard/3.2 Film Wizard - Film Wizard Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw1-5",
            title: "Film Wizard",
            duration: "8m",
            src: "Ai Video Wizards/1. Film Wizard/3.3 Film Wizard - Film Wizard Viral Ai Wizards.mp4",
            resources: []
          }
        ]
      },
      {
        id: "vaw2",
        title: "Seedance Filmmaking",
        lessons: [
          {
            id: "vaw2-1",
            title: "Seedance Examples",
            duration: "1m",
            src: "Ai Video Wizards/2. Seedance Filmmaking/1. Seedance Examples - Seedance Filmmaking Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw2-2",
            title: "Seedance Examples",
            duration: "1m",
            src: "Ai Video Wizards/2. Seedance Filmmaking/1.1 Seedance Examples - Seedance Filmmaking Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw2-3",
            title: "Seedance Examples",
            duration: "1m",
            src: "Ai Video Wizards/2. Seedance Filmmaking/1.2 Seedance Examples - Seedance Filmmaking Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw2-4",
            title: "Seedance Examples",
            duration: "1m",
            src: "Ai Video Wizards/2. Seedance Filmmaking/1.3 Seedance Examples - Seedance Filmmaking Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw2-5",
            title: "Script Prompt Ideation",
            duration: "5m",
            src: "Ai Video Wizards/2. Seedance Filmmaking/2. Script Prompt Ideation - Seedance Filmmaking Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw2-6",
            title: "Reference Creation",
            duration: "4m",
            src: "Ai Video Wizards/2. Seedance Filmmaking/3. Reference Creation - Seedance Filmmaking Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw2-7",
            title: "Seedance Generation",
            duration: "4m",
            src: "Ai Video Wizards/2. Seedance Filmmaking/4. Seedance Generation - Seedance Filmmaking Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw2-8",
            title: "Editing",
            duration: "3m",
            src: "Ai Video Wizards/2. Seedance Filmmaking/5. Editing - Seedance Filmmaking Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw2-9",
            title: "Audio Hack",
            duration: "1m",
            src: "Ai Video Wizards/2. Seedance Filmmaking/6. Audio Hack - Seedance Filmmaking Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw2-10",
            title: "Audio Hack",
            duration: "2m",
            src: "Ai Video Wizards/2. Seedance Filmmaking/6.2 Audio Hack - Seedance Filmmaking Viral Ai Wizards.mp4",
            resources: []
          }
        ]
      },
      {
        id: "vaw3",
        title: "Pipeline Walkthrough A-Z",
        sections: [
          {
            id: "vaw3-s1",
            title: "GYM AD",
            lessons: [
              {
                id: "vaw3-s1-1",
                title: "FINAL RESULT",
                duration: "1m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/0. FINAL RESULT - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              },
              {
                id: "vaw3-s1-2",
                title: "SCRIPT",
                duration: "15m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/1. SCRIPT - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              },
              {
                id: "vaw3-s1-3",
                title: "VOICE OVER",
                duration: "6m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/2. VOICE OVER - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              },
              {
                id: "vaw3-s1-4",
                title: "MUSIC",
                duration: "6m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/3. MUSIC - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              },
              {
                id: "vaw3-s1-5",
                title: "HERO REFERENCES",
                duration: "12m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/4. HERO REFERENCES - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              },
              {
                id: "vaw3-s1-6",
                title: "IMAGE PROMPTS",
                duration: "5m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/5. IMAGE PROMPTS - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              },
              {
                id: "vaw3-s1-7",
                title: "IMAGE GEN",
                duration: "15m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/6. IMAGE GEN - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              },
              {
                id: "vaw3-s1-8",
                title: "VIDEO GEN",
                duration: "10m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/7. VIDEO GEN - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              },
              {
                id: "vaw3-s1-9",
                title: "SOUND FX",
                duration: "1m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/8. SOUND FX - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              },
              {
                id: "vaw3-s1-10",
                title: "CAPTIONS",
                duration: "2m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/9. CAPTIONS - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              },
              {
                id: "vaw3-s1-11",
                title: "GRADING",
                duration: "3m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/1. GYM AD/10. GRADING - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              }
            ]
          },
          {
            id: "vaw3-s2",
            title: "LAMBORGHINI AD",
            lessons: [
              {
                id: "vaw3-s2-1",
                title: "DRAFT",
                duration: "10m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/2. LAMBORGHINI AD/DRAFT - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              }
            ]
          },
          {
            id: "vaw3-s3",
            title: "Wizard Sht",
            lessons: [
              {
                id: "vaw3-s3-1",
                title: "Image Wizardry",
                duration: "49m",
                src: "Ai Video Wizards/3. Pipeline Walkthrough A-Z/3. Wizard Sht/1. Image Wizardry - Pipeline Walkthrough A-Z Viral Ai Wizards.mp4",
                resources: []
              }
            ]
          }
        ]
      },
      {
        id: "vaw4",
        title: "Earn Affiliate Comissions",
        lessons: [
          {
            id: "vaw4-1",
            title: "Your Affiliate Link",
            duration: "2m",
            src: "Ai Video Wizards/4. Earn Affiliate Comissions/1. Your Affiliate Link - Earn Affiliate Comissions Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw4-2",
            title: "Your Affiliate Link",
            duration: "3m",
            src: "Ai Video Wizards/4. Earn Affiliate Comissions/1.2 Your Affiliate Link - Earn Affiliate Comissions Viral Ai Wizards.mp4",
            resources: []
          },
          {
            id: "vaw4-3",
            title: "Instagram Marketing",
            duration: "10m",
            src: "Ai Video Wizards/4. Earn Affiliate Comissions/2. Instagram Marketing - Earn Affiliate Comissions Viral Ai Wizards.mp4",
            resources: []
          }
        ]
      }
    ]
  },
  {
    id: "meta-ads-mastery",
    title: "Meta Ads Mastery by Michael Diaz",
    tagline: "Coming soon — course content is being added.",
    cover: "./metamastery.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$249",
    chapters: [],
  },
  {
    id: "acq-vantage",
    title: "ACQ VANTAGE by Alex Hormozi",
    tagline: "Coming soon — course content is being added.",
    cover: "./acqvantage.jpg",
    accent: "#FF4211",
    category: "growth",
    price: "$1,000",
    chapters: [],
  },
  {
    id: "ecommerce-architects",
    title: "E-Commerce Architects by Matt Orlic",
    tagline: "Coming soon — course content is being added.",
    cover: "./eaecom.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$1,000",
    chapters: [],
  },
  {
    id: "futrgroup",
    title: "FutrGroup by Franky Shaw",
    tagline: "Coming soon — course content is being added.",
    cover: "./futr.avif",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$1,500",
    chapters: [],
  },
  {
    id: "origins-ecommerce",
    title: "Origins E-Commerce by Spencer Pawliw",
    tagline: "Coming soon — course content is being added.",
    cover: "./origins.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$149",
    chapters: [],
  },
  {
    id: "ad-creative-academy",
    title: "Ad Creative Academy by Seth Godin",
    tagline: "Coming soon — course content is being added.",
    cover: "./adcreative.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$833",
    chapters: [],
  },
  {
    id: "freedom-achievers",
    title: "Google Ads Dropshipping by Jesper Hensgens (Freedom Achievers)",
    tagline: "Coming soon — course content is being added.",
    cover: "./freedomachievers.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$349",
    chapters: [],
  },
  {
    id: "unicorn-closer-mastermind",
    title: "Unicorn Closer Mastermind by Josh Lyons",
    tagline: "Coming soon — course content is being added.",
    cover: "./unicorn.jpg",
    accent: "#FF4211",
    category: "copywriting",
    price: "$2997",
    chapters: [],
  },
  {
    id: "ultra-realistic-ai-gen-mastery",
    title: "Ultra-Realistic AI Gen Mastery by Sam Butler",
    tagline: "Coming soon — course content is being added.",
    cover: "./ugcai.jpg",
    accent: "#FF4211",
    category: "ai-automation",
    price: "$247",
    chapters: [],
  },
  {
    id: "adspend-academy",
    title: "Adspend Academy by Brian Moncada",
    tagline: "Coming soon — course content is being added.",
    cover: "./admen.jpg",
    accent: "#FF4211",
    category: "ecommerce",
    price: "$2997",
    chapters: [],
  },
  {
    id: "pay-per-lead-nation-pro",
    title: "Pay Per Lead Nation Pro by Billy Robinson",
    tagline: "Coming soon — course content is being added.",
    cover: "./leadgenn.jpg",
    accent: "#FF4211",
    category: "lead-generation",
    price: "$199",
    chapters: [],
  },
  {
    id: "crypto-accelerator",
    title: "The Crypto Accelerator by Craig Percoco",
    tagline: "Coming soon — course content is being added.",
    cover: "./inevitrade.jpg",
    accent: "#FF4211",
    category: "finance-trading",
    price: "$697",
    chapters: [],
  },
  {
    id: "ultimate-editors-2",
    title: "Ultimate Editors 2.0 by Joseph Eid",
    tagline: "Coming soon — course content is being added.",
    cover: "./ultimateeditors.png",
    accent: "#FF4211",
    category: "video-editing",
    price: "$497",
    chapters: [],
  },
  {
    id: "viral-content-accelerator",
    title: "Viral Content Accelerator by One Peak Creative",
    tagline: "Coming soon — course content is being added.",
    cover: "./viralcontent.webp",
    accent: "#FF4211",
    category: "viral-content",
    price: "$1650",
    chapters: [],
  }
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
