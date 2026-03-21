/********************************************************
 * Tentativeonline - GOOGLE DRIVE DIRECT INTEGRATION 
 * PhD Research Data Collection
 * Solves: CORS / DataPipe issues by using Google Apps Script
 ********************************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;

let expName = 'tentativeonline';
let expInfo = {'participant': ''};

// Initialize PsychoJS
const psychoJS = new PsychoJS({ debug: true });

// Open window
psychoJS.openWindow({
    fullscr: true,
    color: new util.Color('black'),
    units: 'height',
    waitBlanking: true
});

// Schedule dialog box
psychoJS.schedule(psychoJS.gui.DlgFromDict({
    dictionary: expInfo,
    title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// Add main routines to scheduler
flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);

// Define experiment blocks
const blocks = [
    { name: 'LN', file: 'conditions_LN.csv' },
    { name: 'VR', file: 'conditions_VR.csv' },
    { name: '3DR', file: 'conditions_3DR.csv' },
    { name: 'MX', file: 'conditions_MX.csv' }
];

// Schedule loops for each block
for (const block of blocks) {
    const loopScheduler = new Scheduler(psychoJS);
    flowScheduler.add(trialsLoopBegin(loopScheduler, block.file, block.name));
    flowScheduler.add(loopScheduler);
    flowScheduler.add(trialsLoopEnd);
}

// Add quit routine
flowScheduler.add(quitPsychoJS);

// --- RESOURCES MANAGEMENT ---
let resources = [
    { name: 'conditions_LN.csv', path: './resources/conditions_LN.csv' },
    { name: 'conditions_VR.csv', path: './resources/conditions_VR.csv' },
    { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' },
    { name: 'conditions_MX.csv', path: './resources/conditions_MX.csv' }
];

// Load 3DR images
for (let i = 11001; i <= 11066; i++) {
    resources.push({ name: `images/image_3DR/fig${i}.png`, path: `./resources/images/image_3DR/fig${i}.png` });
}

// Load MX images
const mx_ids = [12043, 12044, 12045, 12046, 12047, 12048, 12050, 12053, 12054, 12055, 12056];
for (let id of mx_ids) {
    resources.push({ name: `images/image_MX/fig${id}.png`, path: `./resources/images/image_MX/fig${id}.jpg` });
}

// Start experiment
psychoJS.start({ expName, expInfo, resources });

async function updateInfo() {
    expInfo['date'] = util.MonotonicClock.getDateStr();
    psychoJS.experiment.dataFileName = `${expInfo["participant"]}_${expName}_${expInfo['date']}`;
    return Scheduler.Event.NEXT;
}

// --- VISUAL COMPONENTS SETUP ---
var routineClock, mainImage, mainQ, mouse, progressBar, progressBox;
var opt_texts = [], opt_boxes = [];
var totalQuestions = 16, currentQuestionIdx = 0;

async function experimentInit() {
    routineClock = new util.Clock();
    
    // Main stimuli
    mainImage = new visual.ImageStim({ win: psychoJS.window, pos: [0, 0.15], size: [0.55, 0.4] });
    mainQ = new visual.TextStim({ win: psychoJS.window, font: 'Hiragino Kaku Gothic Pro', pos: [0, 0.42], height: 0.028, color: new util.Color('white'), wrapWidth: 0.9 });
    
    // Progress bar
    progressBox = new visual.Rect({ win: psychoJS.window, width: 0.8, height: 0.01, pos: [0, -0.48], lineColor: new util.Color('grey') });
    progressBar = new visual.Rect({ win: psychoJS.window, width: 0, height: 0.01, pos: [-0.4, -0.48], fillColor: new util.Color('white') });
    
    // Option bounding boxes and text
    const x_pos = [-0.48, -0.16, 0.16, 0.48, -0.48, -0.16, 0.16, 0.48];
    const y_pos = [-0.22, -0.22, -0.22, -0.22, -0.35, -0.35, -0.35, -0.35];
    
    for (let i = 0; i < 8; i++) {
        opt_boxes[i] = new visual.Rect({ win: psychoJS.window, width: 0.3, height: 0.1, pos: [x_pos[i], y_pos[i]], lineColor: new util.Color('white'), fillColor: new util.Color('white') });
        opt_texts[i] = new visual.TextStim({ win: psychoJS.window, font: 'Hiragino Kaku Gothic Pro', pos: [x_pos[i], y_pos[i]], height: 0.022, color: new util.Color('black') });
    }
    
    mouse = new core.Mouse({ win: psychoJS.window });
    return Scheduler.Event.NEXT;
}

function trialsLoopBegin(scheduler, fileName, blockName) {
    return async function() {
        let allConditions = TrialHandler.importConditions(psychoJS.serverManager, fileName);
        util.shuffle(allConditions);
        
        let trials = new TrialHandler({ psychoJS, nReps: 1, method: TrialHandler.Method.SEQUENTIAL, trialList: allConditions.slice(0, 4), name: blockName });
        psychoJS.experiment.addLoop(trials);
        
        for (const thisTrial of trials) {
            scheduler.add(importConditions(trials.getSnapshot()));
            scheduler.add(routineBegin(thisTrial, blockName));
            scheduler.add(routineFrame());
            scheduler.add(routineEnd());
        }
        return Scheduler.Event.NEXT;
    }
}

function routineBegin(thisTrial, blockName) {
    return async function () {
        routineClock.reset();
        window.mouseWasReleased = false; 
        currentQuestionIdx++;
        
        // Update progress bar width and position
        progressBar.setWidth((currentQuestionIdx / totalQuestions) * 0.8);
        progressBar.setPos([-0.4 + (progressBar.getWidth()/2), -0.48]);
        
        // Set image stimulus
        const img = thisTrial['image_file'];
        if (img && !img.includes('blank')) { 
            mainImage.setImage(img); 
            mainImage.setOpacity(1.0); 
        } else { 
            mainImage.setOpacity(0.0); 
        }

        // Set question text (handling line breaks)
        mainQ.setText(thisTrial['QUESTION'] ? thisTrial['QUESTION'].toString().replace(/\\n/g, '\n') : "");
        
        // Set choices text
        for (let i = 1; i <= 8; i++) {
            opt_texts[i-1].setText(thisTrial[`choice${i}`] || "");
            opt_boxes[i-1].setFillColor(new util.Color('white'));
        }
        
        // Log the current block name
        psychoJS.experiment.addData('block', blockName);
        return Scheduler.Event.NEXT;
    }
}

function routineFrame() {
    return async function () {
        // Draw all components
        mainImage.setAutoDraw(true); 
        mainQ.setAutoDraw(true); 
        progressBox.setAutoDraw(true); 
        progressBar.setAutoDraw(true);
        opt_boxes.forEach(b => b.setAutoDraw(true)); 
        opt_texts.forEach(t => t.setAutoDraw(true));
        
        // Enforce a strict click mechanism (must release mouse first)
        if (mouse.getPressed()[0] === 0) window.mouseWasReleased = true;
        
        // Check for clicks on option boxes
        if (mouse.getPressed()[0] === 1 && window.mouseWasReleased) {
            for (let i = 0; i < 8; i++) {
                if (opt_boxes[i].contains(mouse)) {
                    psychoJS.experiment.addData('response', i + 1);
                    psychoJS.experiment.addData('rt', routineClock.getTime());
                    psychoJS.experiment.nextEntry();
                    return Scheduler.Event.NEXT;
                }
            }
        }
        return Scheduler.Event.FLIP_REPEAT;
    };
}

function routineEnd() {
    return async function () {
        // Hide all components at the end of the trial
        [mainImage, mainQ, progressBox, progressBar, ...opt_boxes, ...opt_texts].forEach(s => s.setAutoDraw(false));
        return Scheduler.Event.NEXT;
    }
}

async function quitPsychoJS() {
    // 1. Generate the CSV results
    const results = psychoJS.experiment.save({attributes: expInfo});
    
    // 2. Backup: Local download on participant's machine
    psychoJS.experiment.save();

    // 3. SEND TO GOOGLE DRIVE (Using the new Web App URL)
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzhWBcNeQgH7hqr5pjhi9ZRNXRIc6M8xgJI8cbAHLU6YM31UcMrhNxbbVy3QgCJCBDX/exec";

    // Format data as a standard web form (URLSearchParams)
    const formData = new URLSearchParams();
    formData.append("filename", `${psychoJS.experiment.dataFileName}.csv`);
    formData.append("data", results);

    // Send the package 'blindly' (no-cors) to bypass strict browser security
    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
    });

    // Wait 2.5 seconds to ensure delivery, then close
    setTimeout(() => {
        psychoJS.window.close();
        psychoJS.quit();
    }, 2500);

    return Scheduler.Event.QUIT;
}

function trialsLoopEnd() { return Scheduler.Event.NEXT; }
function importConditions(s) { return async function () { psychoJS.importAttributes(s); return Scheduler.Event.NEXT; }; }
