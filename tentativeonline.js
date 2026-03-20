/************************ * Tentativeonline - Final Research Version
 * Integration: DataPipe (ID: lGJG7547rPOO) -> OSF
 * Sequence: LN -> VR -> 3DR -> MX (4 random trials each)
 * Features: Progress Bar, Click Feedback, Dynamic Loading
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;

let expName = 'tentativeonline';
let expInfo = {'participant': ''};

const psychoJS = new PsychoJS({ debug: true });

// --- DATAPIPE CONFIGURATION ---
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

// Define block sequence
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

flowScheduler.add(quitPsychoJS, 'Experiment Completed. Thank you!', true);
dialogCancelScheduler.add(quitPsychoJS, 'Session Cancelled.', false);

// --- RESOURCE SETUP ---
let resources = [
    { name: 'conditions_LN.csv', path: './resources/conditions_LN.csv' },
    { name: 'conditions_VR.csv', path: './resources/conditions_VR.csv' },
    { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' },
    { name: 'conditions_MX.csv', path: './resources/conditions_MX.csv' }
];

// Add 3DR images
for (let i = 11001; i <= 11066; i++) {
    resources.push({ name: `images/image_3DR/fig${i}.png`, path: `./resources/images/image_3DR/fig${i}.png` });
}
// Add MX images (mapping .png names to .jpg files on GitHub)
const mx_ids = [12043, 12044, 12045, 12046, 12047, 12048, 12050, 12053, 12054, 12055, 12056];
for (let id of mx_ids) {
    resources.push({ name: `images/image_MX/fig${id}.png`, path: `./resources/images/image_MX/fig${id}.jpg` });
}

psychoJS.start({
    expName: expName,
    expInfo: expInfo,
    resources: resources
});

async function updateInfo() {
    expInfo['date'] = util.MonotonicClock.getDateStr();
    psychoJS.experiment.dataFileName = `${expInfo["participant"]}_${expName}_${expInfo['date']}`;
    return Scheduler.Event.NEXT;
}

var routineClock, mainImage, mainQ, mouse, progressBar, progressBox;
var opt_texts = [];
var opt_boxes = [];
var totalQuestions = 16;
var currentQuestionIdx = 0;

async function experimentInit() {
    routineClock = new util.Clock();

    mainImage = new visual.ImageStim({
        win: psychoJS.window, name: 'mainImage', image: undefined,
        pos: [0, 0.15], size: [0.55, 0.4]
    });

    mainQ = new visual.TextStim({
        win: psychoJS.window, name: 'mainQ', text: '',
        font: 'Hiragino Kaku Gothic Pro', pos: [0, 0.42], height: 0.028, color: new util.Color('white'),
        wrapWidth: 0.9, alignHoriz: 'center'
    });

    // Progress Bar components
    progressBox = new visual.Rect({
        win: psychoJS.window, name: 'progressBox', width: 0.8, height: 0.01,
        pos: [0, -0.48], lineColor: new util.Color('grey'), fillColor: null
    });
    progressBar = new visual.Rect({
        win: psychoJS.window, name: 'progressBar', width: 0, height: 0.01,
        pos: [-0.4, -0.48], fillColor: new util.Color('white'), lineColor: null
    });

    const x_positions = [-0.48, -0.16, 0.16, 0.48, -0.48, -0.16, 0.16, 0.48];
    const y_positions = [-0.22, -0.22, -0.22, -0.22, -0.35, -0.35, -0.35, -0.35];

    for (let i = 0; i < 8; i++) {
        opt_boxes[i] = new visual.Rect({
            win: psychoJS.window, name: `box_${i+1}`,
            width: 0.3, height: 0.1, pos: [x_positions[i], y_positions[i]],
            lineColor: new util.Color('white'), fillColor: new util.Color('white')
        });
        opt_texts[i] = new visual.TextStim({
            win: psychoJS.window, name: `text_${i+1}`,
            text: '', font: 'Hiragino Kaku Gothic Pro', pos: [x_positions[i], y_positions[i]],
            height: 0.022, color: new util.Color('black')
        });
    }

    mouse = new core.Mouse({ win: psychoJS.window });
    return Scheduler.Event.NEXT;
}

function trialsLoopBegin(scheduler, fileName, blockName) {
    return async function() {
        let allConditions = TrialHandler.importConditions(psychoJS.serverManager, fileName);
        util.shuffle(allConditions);
        let selectedConditions = allConditions.slice(0, 4);

        let trials = new TrialHandler({
            psychoJS: psychoJS, nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
            extraInfo: expInfo, trialList: selectedConditions, name: blockName
        });
        psychoJS.experiment.addLoop(trials);

        for (const thisTrial of trials) {
            const currentSnapshot = trials.getSnapshot();
            scheduler.add(importConditions(currentSnapshot));
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

        // Update Progress Bar
        let progressWidth = (currentQuestionIdx / totalQuestions) * 0.8;
        progressBar.setWidth(progressWidth);
        progressBar.setPos([-0.4 + (progressWidth/2), -0.48]);

        const imgName = thisTrial['image_file'];
        if (imgName && !imgName.includes('blank')) {
            mainImage.setImage(imgName);
            mainImage.setOpacity(1.0);
        } else {
            mainImage.setOpacity(0.0);
        }

        const qText = thisTrial['QUESTION'];
        mainQ.setText(qText !== undefined && qText !== null ? qText.toString().replace(/\\n/g, '\n') : "");

        for (let i = 1; i <= 8; i++) {
            let val = thisTrial[`choice${i}`];
            opt_texts[i-1].setText(val !== undefined && val !== null ? val.toString() : "");
            opt_boxes[i-1].setFillColor(new util.Color('white'));
        }

        // Record trial metadata
        psychoJS.experiment.addData('block_name', blockName);
        psychoJS.experiment.addData('item_id', thisTrial['ID_Picture'] || 'N/A');

        return Scheduler.Event.NEXT;
    }
}

function routineFrame() {
    return async function () {
        mainImage.setAutoDraw(true);
        mainQ.setAutoDraw(true);
        progressBox.setAutoDraw(true);
        progressBar.setAutoDraw(true);
        for (let i = 0; i < 8; i++) {
            opt_boxes[i].setAutoDraw(true);
            opt_texts[i].setAutoDraw(true);
        }

        const pressed = mouse.getPressed();
        if (pressed[0] === 0) window.mouseWasReleased = true;

        if (pressed[0] === 1 && window.mouseWasReleased) {
            for (let i = 0; i < 8; i++) {
                if (opt_boxes[i].contains(mouse)) {
                    // Record response and reaction time
                    psychoJS.experiment.addData('response_choice', i + 1);
                    psychoJS.experiment.addData('rt', routineClock.getTime());
                    psychoJS.experiment.nextEntry();
                    
                    opt_boxes[i].setFillColor(new util.Color('lightgrey'));
                    return Scheduler.Event.NEXT;
                }
            }
        }
        return Scheduler.Event.FLIP_REPEAT;
    };
}

function routineEnd() {
    return async function () {
        mainImage.setAutoDraw(false);
        mainQ.setAutoDraw(false);
        progressBox.setAutoDraw(false);
        progressBar.setAutoDraw(false);
        for (let i = 0; i < 8; i++) {
            opt_boxes[i].setAutoDraw(false);
            opt_texts[i].setAutoDraw(false);
        }
        mouse.clickReset();
        return Scheduler.Event.NEXT;
    }
}

function trialsLoopEnd() { return Scheduler.Event.NEXT; }
function importConditions(s) { return async function () { psychoJS.importAttributes(s); return Scheduler.Event.NEXT; }; }

async function quitPsychoJS(message, isCompleted) {
    // 1. Genera la stringa dei risultati
    const results = psychoJS.experiment.save({attributes: expInfo});

    // 2. Tenta l'invio a DataPipe e ASPETTA (await) che finisca
    try {
        const response = await fetch("https://pipe.jspsych.org/api/v1/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                experimentID: DATAPIPE_ID,
                filename: `${psychoJS.experiment.dataFileName}.csv`,
                data: results
            })
        });
        console.log("DataPipe Response:", response);
    } catch (error) {
        console.error("Errore durante l'invio dei dati:", error);
    }

    // 3. Chiudi la finestra solo dopo l'invio
    psychoJS.window.close();
    psychoJS.quit({message, isCompleted});
    return Scheduler.Event.QUIT;
}
