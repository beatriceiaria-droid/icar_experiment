/************************ * Tentativeonline - ULTIMATE RESEARCH VERSION
 * DataPipe ID: lGJG7547rPOO | OSF: 5eyuz / pfxv4
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;

let expName = 'tentativeonline';
let expInfo = {'participant': ''};

const psychoJS = new PsychoJS({ debug: true });

const DATAPIPE_ID = 'lGJG7547rPOO'; 

psychoJS.openWindow({
    fullscr: true,
    color: new util.Color('black'),
    units: 'height',
    waitBlanking: true
});

psychoJS.schedule(psychoJS.gui.DlgFromDict({
    dictionary: expInfo,
    title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);

const blocks = [
    { name: 'LN', file: 'conditions_LN.csv' },
    { name: 'VR', file: 'conditions_VR.csv' },
    { name: '3DR', file: 'conditions_3DR.csv' },
    { name: 'MX', file: 'conditions_MX.csv' }
];

for (const block of blocks) {
    const loopScheduler = new Scheduler(psychoJS);
    flowScheduler.add(trialsLoopBegin(loopScheduler, block.file, block.name));
    flowScheduler.add(loopScheduler);
    flowScheduler.add(trialsLoopEnd);
}

flowScheduler.add(quitPsychoJS);

// --- RESOURCES ---
let resources = [
    { name: 'conditions_LN.csv', path: './resources/conditions_LN.csv' },
    { name: 'conditions_VR.csv', path: './resources/conditions_VR.csv' },
    { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' },
    { name: 'conditions_MX.csv', path: './resources/conditions_MX.csv' }
];
for (let i = 11001; i <= 11066; i++) {
    resources.push({ name: `images/image_3DR/fig${i}.png`, path: `./resources/images/image_3DR/fig${i}.png` });
}
const mx_ids = [12043, 12044, 12045, 12046, 12047, 12048, 12050, 12053, 12054, 12055, 12056];
for (let id of mx_ids) {
    resources.push({ name: `images/image_MX/fig${id}.png`, path: `./resources/images/image_MX/fig${id}.jpg` });
}

psychoJS.start({ expName, expInfo, resources });

async function updateInfo() {
    expInfo['date'] = util.MonotonicClock.getDateStr();
    psychoJS.experiment.dataFileName = `${expInfo["participant"]}_${expName}_${expInfo['date']}`;
    return Scheduler.Event.NEXT;
}

var routineClock, mainImage, mainQ, mouse, progressBar, progressBox;
var opt_texts = [], opt_boxes = [];
var totalQuestions = 16, currentQuestionIdx = 0;

async function experimentInit() {
    routineClock = new util.Clock();
    mainImage = new visual.ImageStim({ win: psychoJS.window, pos: [0, 0.15], size: [0.55, 0.4] });
    mainQ = new visual.TextStim({ win: psychoJS.window, font: 'Hiragino Kaku Gothic Pro', pos: [0, 0.42], height: 0.026, color: new util.Color('white'), wrapWidth: 0.9 });
    progressBox = new visual.Rect({ win: psychoJS.window, width: 0.8, height: 0.01, pos: [0, -0.48], lineColor: new util.Color('grey') });
    progressBar = new visual.Rect({ win: psychoJS.window, width: 0, height: 0.01, pos: [-0.4, -0.48], fillColor: new util.Color('white') });
    
    const x_pos = [-0.48, -0.16, 0.16, 0.48, -0.48, -0.16, 0.16, 0.48];
    const y_pos = [-0.22, -0.22, -0.22, -0.22, -0.35, -0.35, -0.35, -0.35];
    for (let i = 0; i < 8; i++) {
        opt_boxes[i] = new visual.Rect({ win: psychoJS.window, width: 0.3, height: 0.1, pos: [x_pos[i], y_pos[i]], lineColor: new util.Color('white'), fillColor: new util.Color('white') });
        opt_texts[i] = new visual.TextStim({ win: psychoJS.window, font: 'Hiragino Kaku Gothic Pro', pos: [x_pos[i], y_pos[i]], height: 0.02, color: new util.Color('black') });
    }
    mouse = new core.Mouse({ win: psychoJS.window });
    return Scheduler.Event.NEXT;
}

function trialsLoopBegin(scheduler, fileName, blockName) {
    return async function() {
        let conditions = TrialHandler.importConditions(psychoJS.serverManager, fileName);
        util.shuffle(conditions);
        let trials = new TrialHandler({ psychoJS, nReps: 1, method: TrialHandler.Method.SEQUENTIAL, trialList: conditions.slice(0, 4), name: blockName });
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
        progressBar.setWidth((currentQuestionIdx / totalQuestions) * 0.8);
        progressBar.setPos([-0.4 + (progressBar.getWidth()/2), -0.48]);
        
        // Image logic from your CSV column names
        const img = thisTrial['ID_Picture'] || thisTrial['image_file'];
        if (img && !img.includes('blank')) {
            mainImage.setImage(img.includes('images/') ? img : `images/image_${blockName}/${img}`);
            mainImage.setOpacity(1.0);
        } else {
            mainImage.setOpacity(0.0);
        }
        
        mainQ.setText(thisTrial['QUESTION'] ? thisTrial['QUESTION'].toString().replace(/\\n/g, '\n') : "");
        
        // Choice logic - parsing from your 'OPTIONS' column if needed, or using choice1-8
        for (let i = 1; i <= 8; i++) {
            let choiceText = thisTrial[`choice${i}`] || "";
            opt_texts[i-1].setText(choiceText);
            opt_boxes[i-1].setFillColor(new util.Color('white'));
        }
        
        psychoJS.experiment.addData('block', blockName);
        psychoJS.experiment.addData('question', thisTrial['QUESTION']);
        return Scheduler.Event.NEXT;
    }
}

function routineFrame() {
    return async function () {
        mainImage.setAutoDraw(true); mainQ.setAutoDraw(true); progressBox.setAutoDraw(true); progressBar.setAutoDraw(true);
        opt_boxes.forEach(b => b.setAutoDraw(true)); opt_texts.forEach(t => t.setAutoDraw(true));
        
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
        if (mouse.getPressed()[0] === 0) window.mouseWasReleased = true;
        return Scheduler.Event.FLIP_REPEAT;
    };
}

function routineEnd() {
    return async function () {
        [mainImage, mainQ, progressBox, progressBar, ...opt_boxes, ...opt_texts].forEach(s => s.setAutoDraw(false));
        return Scheduler.Event.NEXT;
    }
}

async function quitPsychoJS() {
    const results = psychoJS.experiment.save({attributes: expInfo});
    
    // BACKUP DOWNLOAD
    psychoJS.experiment.save();

    // DATAPIPE UPLOAD - Using the most basic fetch to avoid CORS errors
    try {
        await fetch("https://pipe.jspsych.org/api/v1/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                experimentID: DATAPIPE_ID, 
                filename: `${psychoJS.experiment.dataFileName}.csv`, 
                data: results 
            })
        });
    } catch (e) {
        console.log("DataPipe failed, but CSV was downloaded locally.");
    }

    setTimeout(() => {
        psychoJS.window.close();
        psychoJS.quit();
    }, 1500);
    return Scheduler.Event.QUIT;
}

function trialsLoopEnd() { return Scheduler.Event.NEXT; }
function importConditions(s) { return async function () { psychoJS.importAttributes(s); return Scheduler.Event.NEXT; }; }
